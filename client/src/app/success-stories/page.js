import Image from "next/image";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import ReviewSlider from "@/components/ReviewSlider";

export const metadata = {
    title: "Success Stories | Mohta Skin Clinic",
    description: "Read patient reviews, testimonials, and success stories from Mohta Skin Clinic.",
};

export default function SuccessStoriesPage() {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                        <Star size={16} className="fill-current text-primary" />
                        <span className="text-sm font-medium tracking-wide uppercase">Patient Reviews</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4 md:mb-6">
                        Real Results. <br className="hidden md:block" /> <span className="text-primary italic">Real Stories.</span>
                    </h1>
                    <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
                        Discover how our advanced treatments have restored confidence and transformed the lives of our patients.
                    </p>
                </div>

                {/* Gallery Section */}
                <div className="mb-24">
                    <h2 className="text-xl md:text-3xl font-serif font-bold text-primary-dark mb-8 md:mb-12 text-center">
                        Before & After
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3, 4, 5, 6].map((idx) => (
                            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-md border border-secondary/20 group">
                                <div className="aspect-video relative overflow-hidden bg-secondary/10">
                                    {/* Placeholder for real clinical images */}
                                    <img
                                        src={`https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop`}
                                        alt="Treatment result"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 flex justify-between">
                                        <span className="text-white/90 text-sm font-semibold tracking-wider">BEFORE</span>
                                        <span className="text-white/90 text-sm font-semibold tracking-wider">AFTER</span>
                                    </div>
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="font-serif font-semibold text-lg text-foreground mb-1">
                                        {idx % 2 === 0 ? "Acne Scar Treatment" : "Pigmentation Correction"}
                                    </h3>
                                    <p className="text-sm text-foreground/60">3 months progress</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Testimonials Review Slider */}
                <div className="bg-secondary/5 rounded-3xl py-12 md:py-16 px-4 border border-secondary/20">
                    <h2 className="text-xl md:text-3xl font-serif font-bold text-primary-dark mb-8 md:mb-12 text-center">
                        What Our Patients Say
                    </h2>
                    <ReviewSlider />
                </div>

                {/* Call to Action */}
                <div className="mt-16 md:mt-24 text-center">
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">Ready to start your journey?</h3>
                    <p className="text-base md:text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
                        Take the first step towards healthier skin and hair today.
                    </p>
                    <Link
                        href="/#contact"
                        className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-primary text-white font-medium rounded-full hover:bg-primary-dark transition-all duration-300 shadow-xl shadow-primary/20 text-base md:text-lg hover:-translate-y-1"
                    >
                        Book Appointment <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>

            </div>
        </div>
    );
}
