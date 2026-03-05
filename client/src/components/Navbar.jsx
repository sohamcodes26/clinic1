"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            // Offset by the top bar height (~40px)
            setIsScrolled(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/#about", hasDropdown: true },
        { name: "Skin", href: "/treatments", hasDropdown: true },
        { name: "Hair", href: "/treatments", hasDropdown: true },
        { name: "Laser", href: "/treatments", hasDropdown: true },
        { name: "Aesthetics", href: "/treatments", hasDropdown: true },
        { name: "Sculpting", href: "/treatments", hasDropdown: true },
        { name: "Surgery", href: "/treatments", hasDropdown: true },
        { name: "Contact Us", href: "/#contact" },
    ];

    return (
        <nav className={`w-full z-40 transition-all duration-300 border-b border-secondary/50 ${isScrolled ? "fixed top-0 bg-white shadow-md py-3" : "bg-white py-4 relative"}`}>
            <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">

                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3">
                        {/* Logo Icon Placeholder */}
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl italic">
                            M
                        </div>
                        <div className="flex flex-col">
                            <span className="font-serif text-2xl font-bold tracking-tight text-foreground">Mohta Skin Clinic</span>
                            <span className="text-[10px] uppercase tracking-[0.1em] text-foreground/60 w-full text-center mt-[-2px]">
                                Overall Skincare Solutions
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex space-x-2 xl:space-x-6 items-center">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group">
                                <Link
                                    href={link.href}
                                    className={`flex items-center text-[13px] xl:text-[14px] font-semibold transition-colors duration-200 uppercase tracking-wide py-2 ${pathname === link.href || (pathname === '/' && link.href === '/') || (pathname.startsWith(link.href) && link.href !== '/')
                                            ? "text-primary border-b-2 border-primary"
                                            : "text-foreground hover:text-primary"
                                        }`}
                                >
                                    {link.name}
                                    {link.hasDropdown && <ChevronDown size={14} className="ml-1 text-primary" />}
                                </Link>
                                {/* Simplified Dummy Dropdown using CSS hover */}
                                {link.hasDropdown && (
                                    <div className="absolute top-full left-0 w-48 bg-white shadow-xl rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-secondary/20 z-50">
                                        <Link href={link.href} className="block px-4 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary">Consultation</Link>
                                        <Link href={link.href} className="block px-4 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary">Treatment details</Link>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="hidden lg:flex items-center">
                        <a
                            href="/#contact"
                            className="px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded hover:bg-primary-dark transition-all duration-300 shadow-md shadow-primary/20"
                        >
                            Book Appointment
                        </a>
                    </div>

                    {/* Mobile Nav Toggle */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-foreground focus:outline-none p-2"
                        >
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4 flex flex-col px-6 border-t border-secondary/20 h-auto max-h-[80vh] overflow-y-auto">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-xs font-semibold py-3 border-b border-secondary/30 uppercase flex justify-between items-center ${pathname === link.href || (pathname === '/' && link.href === '/') || (pathname.startsWith(link.href) && link.href !== '/')
                                    ? "text-primary"
                                    : "text-foreground"
                                }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                            {link.hasDropdown && <ChevronDown size={16} className="text-primary" />}
                        </Link>
                    ))}
                    <a
                        href="/#contact"
                        className="w-full py-2.5 bg-primary text-white text-center rounded font-semibold mt-4 text-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Book Appointment
                    </a>
                </div>
            )}
        </nav>
    );
}
