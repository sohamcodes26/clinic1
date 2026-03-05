"use client";

import { useRef, useEffect, useCallback } from "react";

export default function HeroFace3D() {
    const canvasRef = useRef(null);
    const mouse = useRef({ x: -9999, y: -9999 });
    const animRef = useRef(null);
    const ripples = useRef([]);

    const handleMouseMove = useCallback((e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouse.current.x = e.clientX - rect.left;
        mouse.current.y = e.clientY - rect.top;
    }, []);

    const handleMouseLeave = useCallback(() => {
        mouse.current.x = -9999;
        mouse.current.y = -9999;
    }, []);

    const handleClick = useCallback((e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        ripples.current.push({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
            radius: 0,
            opacity: 1,
        });
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        let w, h;


        function resize() {
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.parentElement.getBoundingClientRect();
            w = rect.width;
            h = rect.height;
            canvas.width = w * dpr;
            canvas.height = h * dpr;
            canvas.style.width = w + "px";
            canvas.style.height = h + "px";
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }
        resize();
        window.addEventListener("resize", resize);

        // --- DNA Helix ---
        const dnaPoints = 70;

        // --- Floating molecules (use actual w/h after resize) ---
        const molecules = [];
        for (let i = 0; i < 30; i++) {
            molecules.push({
                x: Math.random() * w,
                y: Math.random() * h,
                vx: (Math.random() - 0.5) * 0.6,
                vy: (Math.random() - 0.5) * 0.6,
                type: Math.floor(Math.random() * 3),
                size: 8 + Math.random() * 14,
                rotation: Math.random() * Math.PI * 2,
                rotSpeed: (Math.random() - 0.5) * 0.02,
            });
        }

        // --- Floating particles (evenly distributed using grid + jitter) ---
        const particles = [];
        const cols = 16;
        const rows = 10;
        const cellW = w / cols;
        const cellH = h / rows;
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                particles.push({
                    x: c * cellW + Math.random() * cellW,
                    y: r * cellH + Math.random() * cellH,
                    vx: (Math.random() - 0.5) * 0.3,
                    vy: (Math.random() - 0.5) * 0.3,
                    size: 1 + Math.random() * 2.5,
                    opacity: 0.2 + Math.random() * 0.4,
                });
            }
        }


        function drawDNA(t) {
            const centerX = w * 0.75;
            const amplitude = 50;
            const verticalSpread = h * 1.2;
            const startY = -h * 0.1;

            for (let strand = 0; strand < 2; strand++) {
                ctx.beginPath();
                for (let i = 0; i <= dnaPoints; i++) {
                    const frac = i / dnaPoints;
                    const y = startY + frac * verticalSpread;
                    const phase = strand === 0 ? 0 : Math.PI;
                    const x = centerX + Math.sin(frac * Math.PI * 4 + t * 0.8 + phase) * amplitude;
                    if (i === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
                const grad = ctx.createLinearGradient(0, 0, 0, h);
                grad.addColorStop(0, strand === 0 ? "rgba(46,196,182,0.5)" : "rgba(245,208,197,0.5)");
                grad.addColorStop(0.5, strand === 0 ? "rgba(46,196,182,0.8)" : "rgba(245,208,197,0.8)");
                grad.addColorStop(1, strand === 0 ? "rgba(46,196,182,0.3)" : "rgba(245,208,197,0.3)");
                ctx.strokeStyle = grad;
                ctx.lineWidth = 2.5;
                ctx.stroke();
            }

            // Base pair rungs
            for (let i = 0; i < dnaPoints; i += 2) {
                const frac = i / dnaPoints;
                const y = startY + frac * verticalSpread;
                const x1 = centerX + Math.sin(frac * Math.PI * 4 + t * 0.8) * amplitude;
                const x2 = centerX + Math.sin(frac * Math.PI * 4 + t * 0.8 + Math.PI) * amplitude;

                ctx.beginPath();
                ctx.moveTo(x1, y);
                ctx.lineTo(x2, y);
                const colors = ["rgba(46,196,182,0.3)", "rgba(245,208,197,0.3)", "rgba(100,200,180,0.3)", "rgba(200,160,180,0.3)"];
                ctx.strokeStyle = colors[i % colors.length];
                ctx.lineWidth = 1.5;
                ctx.stroke();

                // Nucleotide dots
                ctx.beginPath();
                ctx.arc(x1, y, 3, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(46,196,182,0.6)";
                ctx.fill();
                ctx.beginPath();
                ctx.arc(x2, y, 3, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(245,208,197,0.6)";
                ctx.fill();
            }
        }

        function drawMolecule(mol, t) {
            ctx.save();
            ctx.translate(mol.x, mol.y);
            ctx.rotate(mol.rotation);
            const s = mol.size;

            if (mol.type === 0) {
                // Water molecule (H2O) - oxygen with two hydrogens
                ctx.beginPath();
                ctx.arc(0, 0, s * 0.5, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(46,196,182,0.25)";
                ctx.fill();
                ctx.strokeStyle = "rgba(46,196,182,0.5)";
                ctx.lineWidth = 1;
                ctx.stroke();
                // H atoms
                for (let a = -1; a <= 1; a += 2) {
                    const hx = Math.cos(a * 0.9) * s * 0.7;
                    const hy = Math.sin(a * 0.9) * s * 0.7;
                    ctx.beginPath();
                    ctx.moveTo(0, 0);
                    ctx.lineTo(hx, hy);
                    ctx.strokeStyle = "rgba(46,196,182,0.3)";
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(hx, hy, s * 0.25, 0, Math.PI * 2);
                    ctx.fillStyle = "rgba(255,255,255,0.3)";
                    ctx.fill();
                    ctx.strokeStyle = "rgba(46,196,182,0.4)";
                    ctx.stroke();
                }
            } else if (mol.type === 1) {
                // Collagen triple helix (3 intertwined circles)
                for (let strand = 0; strand < 3; strand++) {
                    const angle = (strand / 3) * Math.PI * 2 + t * 0.5;
                    ctx.beginPath();
                    ctx.arc(Math.cos(angle) * s * 0.25, Math.sin(angle) * s * 0.25, s * 0.35, 0, Math.PI * 2);
                    ctx.strokeStyle = `rgba(46,196,182,${0.2 + strand * 0.1})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            } else {
                // Vitamin molecule - hexagonal ring (benzene-like)
                ctx.beginPath();
                for (let i = 0; i < 6; i++) {
                    const angle = (Math.PI / 3) * i;
                    const px = Math.cos(angle) * s * 0.4;
                    const py = Math.sin(angle) * s * 0.4;
                    if (i === 0) ctx.moveTo(px, py);
                    else ctx.lineTo(px, py);
                }
                ctx.closePath();
                ctx.strokeStyle = "rgba(245,208,197,0.5)";
                ctx.lineWidth = 1.5;
                ctx.stroke();
                // Alternating double bonds
                for (let i = 0; i < 6; i += 2) {
                    const a1 = (Math.PI / 3) * i;
                    const a2 = (Math.PI / 3) * (i + 1);
                    ctx.beginPath();
                    ctx.moveTo(Math.cos(a1) * s * 0.3, Math.sin(a1) * s * 0.3);
                    ctx.lineTo(Math.cos(a2) * s * 0.3, Math.sin(a2) * s * 0.3);
                    ctx.strokeStyle = "rgba(245,208,197,0.3)";
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
                // Center dot
                ctx.beginPath();
                ctx.arc(0, 0, 2, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(245,208,197,0.5)";
                ctx.fill();
            }
            ctx.restore();
        }

        function animate(time) {
            const t = time * 0.001;
            ctx.clearRect(0, 0, w, h);

            const mx = mouse.current.x;
            const my = mouse.current.y;

            const mouseOnCanvas = mx > 0 && my > 0 && mx < w && my < h;

            // Draw ripples
            const activeRipples = ripples.current;
            for (let i = activeRipples.length - 1; i >= 0; i--) {
                const r = activeRipples[i];
                r.radius += 3;
                r.opacity -= 0.015;
                if (r.opacity <= 0) {
                    activeRipples.splice(i, 1);
                    continue;
                }
                ctx.beginPath();
                ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(46, 196, 182, ${r.opacity})`;
                ctx.lineWidth = 2;
                ctx.stroke();
                // Inner ring
                ctx.beginPath();
                ctx.arc(r.x, r.y, r.radius * 0.6, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(245, 208, 197, ${r.opacity * 0.5})`;
                ctx.lineWidth = 1;
                ctx.stroke();
            }

            // Draw DNA helix
            drawDNA(t);

            // Draw molecules
            for (const mol of molecules) {
                mol.x += mol.vx;
                mol.y += mol.vy;
                mol.rotation += mol.rotSpeed;
                // Mouse repulsion (only when mouse on canvas)
                if (mouseOnCanvas) {
                    const mdx = mol.x - mx;
                    const mdy = mol.y - my;
                    const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
                    if (mdist < 120 && mdist > 0) {
                        const force = (120 - mdist) / 120 * 0.8;
                        mol.vx += (mdx / mdist) * force;
                        mol.vy += (mdy / mdist) * force;
                    }
                }
                // Damping
                mol.vx *= 0.98;
                mol.vy *= 0.98;
                // Wrap
                if (mol.x < -30) mol.x = w + 30;
                if (mol.x > w + 30) mol.x = -30;
                if (mol.y < -30) mol.y = h + 30;
                if (mol.y > h + 30) mol.y = -30;
                drawMolecule(mol, t);
            }

            // Draw floating particles
            for (const p of particles) {
                p.x += p.vx;
                p.y += p.vy;
                // Mouse attraction (only when mouse on canvas)
                if (mouseOnCanvas) {
                    const pdx = mx - p.x;
                    const pdy = my - p.y;
                    const pdist = Math.sqrt(pdx * pdx + pdy * pdy);
                    if (pdist < 200 && pdist > 0) {
                        const pull = (200 - pdist) / 200 * 0.15;
                        p.vx += (pdx / pdist) * pull;
                        p.vy += (pdy / pdist) * pull;
                    }
                }
                p.vx *= 0.99;
                p.vy *= 0.99;
                // Wrap
                if (p.x < 0) p.x = w;
                if (p.x > w) p.x = 0;
                if (p.y < 0) p.y = h;
                if (p.y > h) p.y = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(46, 196, 182, ${p.opacity})`;
                ctx.fill();
            }

            // Connect nearby particles with lines
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 100) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(46, 196, 182, ${(1 - dist / 100) * 0.15})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }

            // Mouse glow cursor (only when mouse on canvas)
            if (mouseOnCanvas) {
                const grad = ctx.createRadialGradient(mx, my, 0, mx, my, 80);
                grad.addColorStop(0, "rgba(46,196,182,0.12)");
                grad.addColorStop(1, "rgba(46,196,182,0)");
                ctx.fillStyle = grad;
                ctx.fillRect(mx - 80, my - 80, 160, 160);
            }

            animRef.current = requestAnimationFrame(animate);
        }

        animRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("resize", resize);
            if (animRef.current) cancelAnimationFrame(animRef.current);
        };
    }, []);

    return (
        <div
            className="absolute inset-0 w-full h-full hidden md:block"
            style={{ zIndex: 10, pointerEvents: "none" }}
        >
            <canvas
                ref={canvasRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
                style={{ width: "100%", height: "100%", background: "transparent", pointerEvents: "auto" }}
            />
        </div>
    );
}