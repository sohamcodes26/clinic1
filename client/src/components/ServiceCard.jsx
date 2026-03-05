import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({ title, description, imageSrc, icon }) {
    return (
        <div className="bg-white rounded-xl shadow-md border border-secondary/40 hover:shadow-xl transition-all duration-300 group overflow-hidden flex flex-col sm:flex-row h-full">
            {/* Image Segment */}
            <div className="w-full sm:w-2/5 aspect-[4/3] sm:aspect-auto relative overflow-hidden bg-secondary">
                <img
                    src={imageSrc}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Content Segment */}
            <div className="w-full sm:w-3/5 p-6 flex flex-col justify-between">
                <div>
                    <div className="flex items-center space-x-3 mb-3">
                        <div className="text-primary group-hover:text-primary-dark transition-colors">
                            {icon}
                        </div>
                        <h3 className="text-xl font-bold text-foreground font-serif">{title}</h3>
                    </div>
                    <p className="text-sm text-foreground/70 leading-relaxed mb-4 line-clamp-3">
                        {description}
                    </p>
                </div>

                <Link
                    href="/treatments"
                    className="text-primary font-semibold text-sm flex items-center hover:text-primary-dark transition-colors group/link"
                >
                    View Details
                    <ArrowRight className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>
    );
}
