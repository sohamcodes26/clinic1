"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [currentHash, setCurrentHash] = useState("");
    const pathname = usePathname();

    useEffect(() => {
        // Handle scroll for sticky navbar
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };

        // Handle hash tracking for active link styling
        setCurrentHash(window.location.hash);
        const handleHashChange = () => {
            setCurrentHash(window.location.hash);
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("hashchange", handleHashChange);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, []);

    const checkIsActive = (linkHref) => {
        if (linkHref === "/") {
            return pathname === "/" && !currentHash;
        }
        if (linkHref.includes("#")) {
            const [path, hash] = linkHref.split("#");
            const matchPath = path === "" ? "/" : path;
            return pathname === matchPath && currentHash === `#${hash}`;
        }
        return pathname === linkHref;
    };

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/#doctors" },
        {
            name: "Skin", href: "/treatments#skin", hasDropdown: true,
            dropdownItems: [
                { name: "Acne Treatment", href: "/treatments/acne-treatment" },
                { name: "Open Pores", href: "/treatments/open-pores" },
                { name: "Vitiligo", href: "/treatments/vitiligo" },
                { name: "Pigmentation", href: "/treatments/pigmentation" },
                { name: "Psoriasis & Eczema", href: "/treatments/psoriasis-eczema" },
                { name: "Fungal Infections", href: "/treatments/fungal-infections" },
                { name: "Warts Removal", href: "/treatments/warts-removal" },
            ]
        },
        {
            name: "Hair", href: "/treatments#hair", hasDropdown: true,
            dropdownItems: [
                { name: "Hair Fall Treatment", href: "/treatments/hair-fall-treatment" },
                { name: "PRP Therapy", href: "/treatments/prp-therapy" },
                { name: "Dandruff Treatment", href: "/treatments/dandruff-treatment" },
                { name: "Alopecia", href: "/treatments/alopecia" },
                { name: "Hair Transplant", href: "/treatments/hair-transplant" },
            ]
        },
        {
            name: "Laser", href: "/treatments#laser", hasDropdown: true,
            dropdownItems: [
                { name: "Laser Hair Removal", href: "/treatments/laser-hair-removal" },
                { name: "Laser Skin Resurfacing", href: "/treatments/laser-skin-resurfacing" },
                { name: "Tattoo Removal", href: "/treatments/tattoo-removal" },
                { name: "Scar Treatment", href: "/treatments/scar-treatment" },
                { name: "Laser Toning", href: "/treatments/laser-toning" },
            ]
        },
        {
            name: "Sculpting", href: "/treatments#sculpting", hasDropdown: true,
            dropdownItems: [
                { name: "CoolSculpting", href: "/treatments/coolsculpting" },
                { name: "Body Contouring", href: "/treatments/body-contouring" },
                { name: "Fat Reduction", href: "/treatments/fat-reduction" },
                { name: "Skin Tightening", href: "/treatments/skin-tightening" },
            ]
        },
        { name: "Success Stories", href: "/success-stories" },
        { name: "Contact Us", href: "/#contact" },
    ];

    const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

    return (
        <nav className={`w-full z-40 transition-all duration-300 border-b border-secondary/50 ${isScrolled ? "fixed top-0 bg-white shadow-md py-3" : "bg-white py-4 relative"}`}>
            <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">

                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3">
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
                                    className={`flex items-center text-[13px] xl:text-[14px] font-semibold transition-colors duration-200 uppercase tracking-wide py-2 ${checkIsActive(link.href) ? "text-primary border-b-2 border-primary" : "text-foreground hover:text-primary"
                                        }`}
                                    onClick={() => setCurrentHash(link.href.includes('#') ? `#${link.href.split('#')[1]}` : '')}
                                >
                                    {link.name}
                                    {link.hasDropdown && <ChevronDown size={14} className="ml-1 text-primary" />}
                                </Link>
                                {link.hasDropdown && link.dropdownItems && (
                                    <div className="absolute top-full left-0 w-56 bg-white shadow-xl rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-secondary/20 z-50">
                                        <Link href={link.href} className="block px-4 py-2.5 text-sm font-semibold text-primary border-b border-secondary/20 hover:bg-primary/10">
                                            All {link.name} Treatments
                                        </Link>
                                        {link.dropdownItems.map((item) => (
                                            <Link key={item.name} href={item.href} className="block px-4 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors">
                                                {item.name}
                                            </Link>
                                        ))}
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
                <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4 flex flex-col px-6 border-t border-secondary/20 h-auto max-h-[80vh] overflow-y-auto z-50">
                    {navLinks.map((link) => (
                        <div key={link.name}>
                            <div className="flex justify-between items-center border-b border-secondary/30">
                                <Link
                                    href={link.href}
                                    className={`text-xs font-semibold py-3 uppercase flex-1 ${checkIsActive(link.href) ? "text-primary" : "text-foreground"}`}
                                    onClick={() => {
                                        setIsMobileMenuOpen(false);
                                        setCurrentHash(link.href.includes('#') ? `#${link.href.split('#')[1]}` : '');
                                    }}
                                >
                                    {link.name}
                                </Link>
                                {link.hasDropdown && (
                                    <button
                                        onClick={() => setOpenMobileDropdown(openMobileDropdown === link.name ? null : link.name)}
                                        className="p-2"
                                    >
                                        <ChevronDown size={16} className={`text-primary transition-transform duration-200 ${openMobileDropdown === link.name ? "rotate-180" : ""}`} />
                                    </button>
                                )}
                            </div>
                            {link.hasDropdown && link.dropdownItems && openMobileDropdown === link.name && (
                                <div className="pl-4 py-1 bg-secondary/10 rounded-b">
                                    {link.dropdownItems.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="block py-2 text-xs text-foreground/80 hover:text-primary"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
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
