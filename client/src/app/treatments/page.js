import Link from "next/link";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
    title: "Treatments | Mohta Skin Clinic",
    description: "Explore our range of advanced dermatology and cosmetological treatments.",
};

const categories = [
    {
        id: "skin",
        title: "Skin Treatments",
        description: "Comprehensive dermatological solutions for all skin conditions, from acne to pigmentation, tailored by expert dermatologists.",
        items: [
            { name: "Acne Treatment", slug: "acne-treatment", desc: "Medical and procedural treatments for all grades of acne including cystic acne, hormonal acne, and acne scars." },
            { name: "Open Pores", slug: "open-pores", desc: "Advanced pore-minimizing treatments using chemical peels, laser therapy, and medical-grade skincare solutions." },
            { name: "Vitiligo", slug: "vitiligo", desc: "Specialized care and advanced therapies including phototherapy and surgical grafting for repigmentation." },
            { name: "Pigmentation", slug: "pigmentation", desc: "Targeted treatments for dark spots, melasma, tan removal, and uneven skin tone using lasers and peels." },
            { name: "Psoriasis & Eczema", slug: "psoriasis-eczema", desc: "Expert management for chronic inflammatory skin conditions with biologics and phototherapy." },
            { name: "Fungal Infections", slug: "fungal-infections", desc: "Accurate diagnosis and complete eradication of ringworm, candida, and other fungal skin infections." },
            { name: "Warts Removal", slug: "warts-removal", desc: "Safe removal procedures using cryotherapy, electrocautery, and laser for various types of warts." },
        ]
    },
    {
        id: "hair",
        title: "Hair Treatments",
        description: "Advanced hair fall treatments, PRP therapies, and customized solutions to restore natural hair growth effectively.",
        items: [
            { name: "Hair Fall Treatment", slug: "hair-fall-treatment", desc: "Comprehensive diagnosis and targeted medical management for male and female pattern hair loss." },
            { name: "PRP Therapy", slug: "prp-therapy", desc: "Platelet-Rich Plasma treatment that uses your own blood to stimulate hair follicles for effective regrowth." },
            { name: "Dandruff Treatment", slug: "dandruff-treatment", desc: "Medical-grade treatment for chronic dandruff, seborrheic dermatitis, and itchy scalp conditions." },
            { name: "Alopecia", slug: "alopecia", desc: "Specialized treatment for alopecia areata, alopecia totalis, and other autoimmune hair loss conditions." },
            { name: "Hair Transplant", slug: "hair-transplant", desc: "FUE and FUT hair transplant consultations with advanced surgical techniques for natural-looking results." },
        ]
    },
    {
        id: "laser",
        title: "Laser Treatments",
        description: "Safe and effective laser therapies using modern technology for permanent results in skin and hair concerns.",
        items: [
            { name: "Laser Hair Removal", slug: "laser-hair-removal", desc: "Permanent hair reduction using FDA-approved diode and Nd:YAG laser technology for all skin types." },
            { name: "Laser Skin Resurfacing", slug: "laser-skin-resurfacing", desc: "Fractional CO2 and Erbium laser treatments for wrinkles, fine lines, and skin texture improvement." },
            { name: "Tattoo Removal", slug: "tattoo-removal", desc: "Q-switched Nd:YAG laser treatment for safe and effective removal of all tattoo colors." },
            { name: "Scar Treatment", slug: "scar-treatment", desc: "Advanced laser and micro-needling treatments for acne scars, surgical scars, and stretch marks." },
            { name: "Laser Toning", slug: "laser-toning", desc: "Low-fluence laser treatment for brightening, pigmentation reduction, and overall skin rejuvenation." },
        ]
    },
    {
        id: "sculpting",
        title: "Body Sculpting",
        description: "Non-surgical body contouring and sculpting therapies to safely reduce stubborn fat and improve your physical shape.",
        items: [
            { name: "CoolSculpting", slug: "coolsculpting", desc: "FDA-cleared fat freezing technology to eliminate stubborn fat pockets without surgery or downtime." },
            { name: "Body Contouring", slug: "body-contouring", desc: "Non-invasive body shaping treatments using radiofrequency and ultrasound technology." },
            { name: "Fat Reduction", slug: "fat-reduction", desc: "Targeted fat reduction treatments for abdomen, thighs, arms, and double chin using advanced technology." },
            { name: "Skin Tightening", slug: "skin-tightening", desc: "Radiofrequency and HIFU treatments for firming sagging skin on face, neck, and body." },
        ]
    },
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

                <div className="space-y-24">
                    {categories.map((category) => (
                        <section key={category.id} id={category.id} className="scroll-mt-32">
                            <div className="mb-10 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-2xl p-6 md:p-8 border-l-4 border-primary">
                                <h2 className="text-2xl md:text-4xl font-serif font-bold text-primary mb-3">
                                    {category.title}
                                </h2>
                                <p className="text-foreground/70 text-base max-w-3xl">{category.description}</p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {category.items.map((treatment) => (
                                    <Link
                                        key={treatment.slug}
                                        href={`/treatments/${treatment.slug}`}
                                        className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-secondary/20 hover:shadow-xl hover:border-primary/40 transition-all duration-300 group hover:-translate-y-1 block"
                                    >
                                        <CheckCircle2 className="w-8 h-8 text-primary/60 mb-4 md:mb-6 group-hover:text-primary transition-colors" />
                                        <h3 className="text-lg md:text-xl font-serif font-semibold text-foreground mb-2 md:mb-3 group-hover:text-primary-dark transition-colors">
                                            {treatment.name}
                                        </h3>
                                        <p className="text-foreground/70 leading-relaxed text-sm mb-4">
                                            {treatment.desc}
                                        </p>
                                        <span className="inline-flex items-center text-sm text-primary font-medium group-hover:underline">
                                            Learn More <ArrowRight className="ml-1 w-4 h-4" />
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </section>
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
