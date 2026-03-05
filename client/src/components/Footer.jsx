import Link from 'next/link';
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#1c2229] text-white pt-16 pb-8" id="contact">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

                    {/* Column 1: Clinic 1 (Khamgaon) */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Khamgaon Clinic Address</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin className="text-primary mr-3 mt-1 shrink-0" size={18} />
                                <span className="text-white/80 text-sm leading-relaxed">
                                    Main Road, near Hospital Hub, <br />Khamgaon, Maharashtra 444303
                                </span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="text-primary mr-3 shrink-0" size={18} />
                                <span className="text-white/80 text-sm">+91 98765 43210</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="text-primary mr-3 shrink-0" size={18} />
                                <span className="text-white/80 text-sm">khamgaon@mohtaclinic.com</span>
                            </li>
                        </ul>
                        {/* Dummy Maps Embed Rectangle */}
                        <div className="w-full h-32 bg-white/10 rounded-md mt-6 flex items-center justify-center text-xs text-white/50 border border-white/20">
                            Khamgaon Map Widget
                        </div>
                    </div>

                    {/* Column 2: Clinic 2 (Akola) */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Akola Clinic Address</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin className="text-primary mr-3 mt-1 shrink-0" size={18} />
                                <span className="text-white/80 text-sm leading-relaxed">
                                    Medical Square, Premium Center, <br />Akola, Maharashtra 444001
                                </span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="text-primary mr-3 shrink-0" size={18} />
                                <span className="text-white/80 text-sm">+91 98765 43211</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="text-primary mr-3 shrink-0" size={18} />
                                <span className="text-white/80 text-sm">akola@mohtaclinic.com</span>
                            </li>
                        </ul>
                        {/* Dummy Maps Embed Rectangle */}
                        <div className="w-full h-32 bg-white/10 rounded-md mt-6 flex items-center justify-center text-xs text-white/50 border border-white/20">
                            Akola Map Widget
                        </div>
                    </div>

                    {/* Column 3: Instagram Feed Placeholder */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Instagram Feed</h3>
                        <div className="bg-white/5 rounded-lg border border-white/10 p-4 h-[250px] flex flex-col">
                            <div className="flex items-center space-x-3 mb-4 border-b border-white/10 pb-3">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-purple-500 p-[2px]">
                                    <div className="w-full h-full bg-[#1c2229] rounded-full flex items-center justify-center">
                                        <Instagram size={14} className="text-white" />
                                    </div>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-white">mohtaskin_clinic</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-2 flex-grow">
                                {[1, 2, 3, 4, 5, 6].map(i => (
                                    <div key={i} className="bg-white/10 rounded aspect-square"></div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Column 4: Facebook Page Placeholder */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Like us on Facebook</h3>
                        <div className="bg-white/5 rounded-lg border border-white/10 p-4 h-[250px] flex flex-col justify-between">
                            <div className="flex items-start space-x-3">
                                <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
                                    <Facebook size={24} className="text-blue-600" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-bold text-white mb-1">Mohta Skin Clinic</p>
                                    <p className="text-xs text-white/60 mb-3">10K likes</p>
                                    <button className="bg-white/10 text-white text-xs px-3 py-1.5 rounded flex items-center hover:bg-white/20 transition-colors">
                                        <Facebook size={12} className="mr-2" /> Like Page
                                    </button>
                                </div>
                            </div>
                            <div className="h-24 bg-white/10 mt-4 rounded flex items-center justify-center text-white/40 text-xs">
                                Cover Photo
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-white/50">
                    <p>&copy; {new Date().getFullYear()} Mohta Skin Clinic (Khamgaon & Akola). All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Disclaimer</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
