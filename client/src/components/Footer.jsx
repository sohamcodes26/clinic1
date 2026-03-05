import Link from 'next/link';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#1c2229] text-white pt-16 pb-8" id="contact">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="flex flex-col inline-block">
                            <span className="font-serif text-3xl font-bold text-primary">Mohta</span>
                            <span className="text-sm uppercase tracking-[0.2em] text-white/80">Skin Clinic</span>
                        </Link>
                        <p className="text-white/70 text-sm leading-relaxed mt-6">
                            Advanced dermatology, cosmetology, and specialized skincare led by Dr. Pratik R. Mohta & Dr. Isha P. Mohta.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                                <Facebook size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-serif text-xl mb-6 text-primary">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link href="/" className="text-white/70 hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="/treatments" className="text-white/70 hover:text-white transition-colors">Our Treatments</Link></li>
                            <li><Link href="/success-stories" className="text-white/70 hover:text-white transition-colors">Success Stories</Link></li>
                            <li><Link href="/#contact" className="text-white/70 hover:text-white transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Clinic 1 */}
                    <div>
                        <h3 className="font-serif text-xl mb-6 text-primary">Khamgaon Clinic</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin className="text-primary mr-3 mt-1 shrink-0" size={18} />
                                <span className="text-white/70 text-sm">Main Road, near Hospital Hub, Khamgaon, Maharashtra</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="text-primary mr-3 shrink-0" size={18} />
                                <span className="text-white/70 text-sm">+91 98765 43210</span>
                            </li>
                        </ul>
                    </div>

                    {/* Clinic 2 */}
                    <div>
                        <h3 className="font-serif text-xl mb-6 text-primary">Akola Clinic</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin className="text-primary mr-3 mt-1 shrink-0" size={18} />
                                <span className="text-white/70 text-sm">Medical Square, Premium Center, Akola, Maharashtra</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="text-primary mr-3 shrink-0" size={18} />
                                <span className="text-white/70 text-sm">+91 98765 43211</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/50">
                    <p>&copy; {new Date().getFullYear()} Mohta Skin Clinic. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">Designed elegantly</p>
                </div>
            </div>
        </footer>
    );
}
