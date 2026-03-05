import Link from "next/link";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
    title: "Treatments | Mohta Skin Clinic",
    description: "Explore our range of advanced dermatology and cosmetological treatments.",
};

const treatments = [
    {
        category: "Skin & Pigmentation",
        items: [
            { name: "Dark Spots & Skin Pigmentation", desc: "Advanced laser and clinical treatments to even out skin tone." },
            { name: "Chemical Peeling", desc: "Rejuvenates skin texture and addresses acne scars or sun damage." },
            { name: "Skin Rejuvenation", desc: "Non-invasive therapies for a youthful, glowing appearance." }
        ]
    },
    {
        category: "Hair & Scalp",
        items: [
            { name: "PRP Therapy", desc: "Platelet-Rich Plasma treatment for effective hair regrowth." },
            { name: "Hair Fall Treatment", desc: "Comprehensive diagnosis and targeted medical management." }
        ]
    },
    {
        category: "Dermatological Conditions",
        items: [
            { name: "Acne Treatment", desc: "Medical and procedural treatments for all grades of acne." },
            { name: "Vitiligo (White Patches)", desc: "Specialized care and advanced therapies for repigmentation." },
            { name: "Psoriasis & Eczema", desc: "Expert management for chronic inflammatory skin conditions." },
            { name: "Allergy & Fungal Diseases", desc: "Accurate diagnosis and complete eradication of infections." },
            { name: "Warts & Nail Diseases", desc: "Safe removal procedures and directed medical care." }
        ]
    },
    {
        category: "Advanced Cosmetology",
        items: [
            { name: "Dermaroller Treatment", desc: "Microneedling for collagen induction and scar reduction." },
            { name: "Cosmetic Skin Procedures", desc: "Personalized aesthetic procedures by fellowship-trained experts." }
        ]
    }
];

export default function TreatmentsPage() {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                        <Sparkles size={16} />
                        <span className="text-sm font-medium tracking-wide uppercase">Our Services</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4 md:mb-6">
                        Advanced Treatments
                    </h1>
                    <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
                        We offer a comprehensive range of clinical and cosmetic treatments tailored to your unique skin and hair needs.
                    </p>
                </div>

                <div className="space-y-20">
                    {treatments.map((group, groupIdx) => (
                        <div key={groupIdx} className="relative">
                            <h2 className="text-xl md:text-3xl font-serif font-bold text-primary-dark mb-6 md:mb-8 border-b border-secondary/30 pb-3 md:pb-4">
                                {group.category}
                            </h2>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {group.items.map((treatment, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-secondary/20 hover:shadow-xl hover:border-primary/40 transition-all duration-300 group hover:-translate-y-1"
                                    >
                                        <CheckCircle2 className="w-8 h-8 text-primary/60 mb-4 md:mb-6 group-hover:text-primary transition-colors" />
                                        <h3 className="text-lg md:text-xl font-serif font-semibold text-foreground mb-2 md:mb-3 group-hover:text-primary-dark transition-colors">
                                            {treatment.name}
                                        </h3>
                                        <p className="text-foreground/70 leading-relaxed text-sm">
                                            {treatment.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 md:mt-24 text-center bg-secondary/10 rounded-3xl p-8 md:p-12 lg:p-16 border border-secondary/20">
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">Not sure which treatment you need?</h3>
                    <p className="text-base md:text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
                        Book a consultation with our expert dermatologists to get a personalized treatment plan designed just for you.
                    </p>
                    <Link
                        href="/#contact"
                        className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-primary text-white font-medium rounded-full hover:bg-primary-dark transition-all duration-300 shadow-xl shadow-primary/20 text-base md:text-lg hover:-translate-y-1"
                    >
                        Consult Our Doctors <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
