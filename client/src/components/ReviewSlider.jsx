"use client";

import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviews = [
    {
        name: "Aarti M.",
        role: "Acne Treatment",
        content: "I've struggled with severe acne for years. Dr. Isha's treatment plan was a game-changer. My skin is finally clear and I have my confidence back!",
        rating: 5,
    },
    {
        name: "Ramesh P.",
        role: "Hair Fall Patient",
        content: "Dr. Pratik is exceptionally skilled. PRP therapy showed visible results in just 3 sessions. The clinic staff is very professional and welcoming.",
        rating: 5,
    },
    {
        name: "Sneha J.",
        role: "Pigmentation Treatment",
        content: "The chemical peel procedure was done perfectly. I could see my dark spots fading away in just a few weeks. Highly recommend this clinic for any skin concern.",
        rating: 5,
    },
    {
        name: "Vikram S.",
        role: "Vitiligo Treatment",
        content: "They provided a modern and effective treatment for Vitiligo. The doctors are genuinely caring and take time to explain everything thoroughly.",
        rating: 5,
    }
];

export default function ReviewSlider() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => {
            setCanScrollPrev(emblaApi.canScrollPrev());
            setCanScrollNext(emblaApi.canScrollNext());
        };

        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);
        onSelect(); // Initialize
    }, [emblaApi]);

    return (
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex -ml-4 touch-pan-y">
                    {reviews.map((review, index) => (
                        <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] pl-4 min-w-0">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-secondary/30 h-full relative">
                                <Quote className="absolute top-6 right-6 text-secondary/30 w-12 h-12" />

                                <div className="flex gap-1 mb-6">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                                    ))}
                                </div>

                                <p className="text-foreground/80 leading-relaxed mb-8 relative z-10 italic">
                                    &quot;{review.content}&quot;
                                </p>

                                <div className="mt-auto">
                                    <h4 className="font-semibold text-foreground font-serif text-lg">{review.name}</h4>
                                    <p className="text-sm text-primary font-medium">{review.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-12">
                <button
                    onClick={() => emblaApi && emblaApi.scrollPrev()}
                    className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all ${canScrollPrev
                        ? 'border-primary text-primary hover:bg-primary hover:text-white'
                        : 'border-secondary/50 text-secondary/50 cursor-not-allowed'
                        }`}
                    disabled={!canScrollPrev}
                >
                    <ChevronLeft className="w-6 h-6 ml-[-2px]" />
                </button>
                <button
                    onClick={() => emblaApi && emblaApi.scrollNext()}
                    className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all ${canScrollNext
                        ? 'border-primary text-primary hover:bg-primary hover:text-white'
                        : 'border-secondary/50 text-secondary/50 cursor-not-allowed'
                        }`}
                    disabled={!canScrollNext}
                >
                    <ChevronRight className="w-6 h-6 mr-[-2px]" />
                </button>
            </div>
        </div>
    );
}
