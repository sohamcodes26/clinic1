import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function TopBar() {
    return (
        <div className="bg-[#1c2229] text-white text-xs py-2 hidden md:block w-full">
            <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">

                {/* Left Side: Contact Info */}
                <div className="flex items-center space-x-6">
                    <a href="mailto:info@mohtaclinic.com" className="flex items-center hover:text-primary transition-colors">
                        <Mail size={14} className="mr-2 text-primary" />
                        <span>info@mohtaclinic.com</span>
                    </a>
                    <a href="tel:+919876543210" className="flex items-center hover:text-primary transition-colors">
                        <Phone size={14} className="mr-2 text-primary" />
                        <span>Khamgaon: +91 98765 43210</span>
                    </a>
                    <a href="tel:+919876543211" className="flex items-center hover:text-primary transition-colors">
                        <Phone size={14} className="mr-2 text-primary" />
                        <span>Akola: +91 98765 43211</span>
                    </a>
                </div>

                {/* Right Side: Social Media & Options */}
                <div className="flex items-center space-x-4">
                    {/* Replace with actual social icon SVGs if needed */}
                    <a href="#" className="hover:text-primary transition-colors">Facebook</a>
                    <a href="#" className="hover:text-primary transition-colors">Instagram</a>
                    <a href="#" className="hover:text-primary transition-colors">Twitter</a>
                    <a href="#" className="hover:text-primary transition-colors">YouTube</a>
                </div>

            </div>
        </div>
    );
}
