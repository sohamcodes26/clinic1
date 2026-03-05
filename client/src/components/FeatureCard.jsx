import Link from "next/link";

export default function FeatureCard({ title, description, imageSrc, highlight, reverse = false }) {
    return (
        <div className="bg-white rounded-md shadow-md hover:shadow-lg transition-all border border-secondary/30 overflow-hidden flex flex-col">
            {/* Top Image Segment */}
            <div className="w-full h-56 md:h-64 relative overflow-hidden border-b-4 border-primary/20">
                <img
                    src={imageSrc}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                {highlight && (
                    <div className="absolute top-0 left-0 bg-white/80 backdrop-blur-sm px-6 py-4">
                        <h3 className="font-serif text-3xl font-bold text-foreground/80 tracking-wide">{highlight}</h3>
                    </div>
                )}
            </div>

            {/* Bottom Content Segment */}
            <div className="p-6 md:p-8 flex flex-col items-center text-center">
                <h4 className="font-serif text-2xl font-bold text-primary mb-4">{title}</h4>
                <p className="text-foreground/70 text-sm leading-relaxed mb-6 max-w-lg">
                    {description}
                </p>
                <Link
                    href="/treatments"
                    className="bg-primary hover:bg-primary-dark text-white px-8 py-2.5 rounded-sm font-semibold text-sm transition-colors shadow-sm"
                >
                    Read More
                </Link>
            </div>
        </div>
    );
}
