import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Phone } from "lucide-react";

const treatmentData = {
    "acne-treatment": {
        title: "Acne Treatment",
        category: "Skin",
        categoryId: "skin",
        heroImage: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop",
        shortDesc: "Medical and procedural treatments for all grades of acne including cystic acne, hormonal acne, and acne scars.",
        overview: "Acne is one of the most common skin conditions affecting people of all ages. At Mohta Skin Clinic, we offer a comprehensive range of treatments targeting all types and grades of acne — from mild comedonal acne to severe cystic acne. Our personalized approach identifies root causes including hormonal imbalance, bacterial infection, and lifestyle factors.",
        benefits: [
            "Reduction in active acne breakouts",
            "Minimized acne scars and post-inflammatory hyperpigmentation",
            "Improved skin texture and clarity",
            "Long-term management strategies to prevent recurrence",
            "Customized treatment plans based on acne severity"
        ],
        treatments: [
            "Chemical Peels (Salicylic, Glycolic, TCA)",
            "Comedone Extraction",
            "LED Light Therapy",
            "Oral & Topical Medications",
            "Microneedling for Acne Scars",
            "Fractional Laser Resurfacing"
        ],
    },
    "open-pores": {
        title: "Open Pores Treatment",
        category: "Skin",
        categoryId: "skin",
        heroImage: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop",
        shortDesc: "Advanced pore-minimizing treatments using chemical peels, laser therapy, and medical-grade skincare solutions.",
        overview: "Enlarged or open pores are a common cosmetic concern caused by excess sebum production, aging, and sun damage. Our dermatologists use a combination of advanced treatments to effectively reduce pore size and refine skin texture for a smoother, more even complexion.",
        benefits: [
            "Visibly reduced pore size",
            "Smoother and refined skin texture",
            "Reduced oil production",
            "Enhanced absorption of skincare products",
            "Youthful and refreshed appearance"
        ],
        treatments: [
            "Carbon Laser Peel",
            "Chemical Peels",
            "Microneedling with Dermaroller",
            "Fractional CO2 Laser",
            "Medical-Grade Retinoid Therapy",
            "HydraFacial Treatment"
        ],
    },
    "vitiligo": {
        title: "Vitiligo Treatment",
        category: "Skin",
        categoryId: "skin",
        heroImage: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop",
        shortDesc: "Specialized care and advanced therapies including phototherapy and surgical grafting for repigmentation.",
        overview: "Vitiligo is an autoimmune condition where the skin loses its pigment-producing cells, resulting in white patches. At Mohta Skin Clinic, we offer advanced repigmentation therapies tailored to each patient's condition, skin type, and extent of involvement for optimal results.",
        benefits: [
            "Effective repigmentation of white patches",
            "Halting the spread of vitiligo",
            "Improved skin color uniformity",
            "Boosted confidence and self-esteem",
            "Long-term management and monitoring"
        ],
        treatments: [
            "Narrowband UVB Phototherapy",
            "PUVA Therapy",
            "Melanocyte Transfer Surgery",
            "Topical Immunomodulators",
            "Targeted Excimer Laser",
            "Combination Medical Therapy"
        ],
    },
    "pigmentation": {
        title: "Pigmentation Treatment",
        category: "Skin",
        categoryId: "skin",
        heroImage: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop",
        shortDesc: "Targeted treatments for dark spots, melasma, tan removal, and uneven skin tone using lasers and peels.",
        overview: "Hyperpigmentation can manifest as dark spots, melasma, sun spots, or post-inflammatory marks. Our expert dermatologists use a multi-pronged approach combining lasers, chemical peels, and targeted skincare to restore an even, radiant skin tone.",
        benefits: [
            "Even and radiant skin tone",
            "Reduction of dark spots and melasma",
            "Sun damage reversal",
            "Brighter and more luminous complexion",
            "Prevention of future pigmentation"
        ],
        treatments: [
            "Q-Switched Nd:YAG Laser",
            "Chemical Peels (TCA, Jessner's)",
            "Laser Toning Sessions",
            "Topical Depigmenting Agents",
            "Glutathione Therapy",
            "Microdermabrasion"
        ],
    },
    "psoriasis-eczema": {
        title: "Psoriasis & Eczema Treatment",
        category: "Skin",
        categoryId: "skin",
        heroImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop",
        shortDesc: "Expert management for chronic inflammatory skin conditions with biologics and phototherapy.",
        overview: "Psoriasis and eczema are chronic inflammatory skin diseases that require long-term management. Our clinic offers evidence-based treatments ranging from topical therapies to advanced biologics, ensuring effective control of symptoms and improved quality of life.",
        benefits: [
            "Reduction in redness, scaling, and itching",
            "Long-term disease control",
            "Improved quality of life",
            "Minimized flare-ups and triggers",
            "Personalized treatment protocols"
        ],
        treatments: [
            "Narrowband UVB Phototherapy",
            "Biologic Injections",
            "Topical Steroids & Immunomodulators",
            "Systemic Medications",
            "Moisturizer & Barrier Repair Therapy",
            "Lifestyle & Dietary Guidance"
        ],
    },
    "fungal-infections": {
        title: "Fungal Infections Treatment",
        category: "Skin",
        categoryId: "skin",
        heroImage: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=2070&auto=format&fit=crop",
        shortDesc: "Accurate diagnosis and complete eradication of ringworm, candida, and other fungal skin infections.",
        overview: "Fungal infections including ringworm, candidiasis, tinea versicolor, and athlete's foot are common and highly contagious. Our dermatologists provide accurate diagnosis through clinical and laboratory evaluation, followed by effective antifungal therapy for complete cure.",
        benefits: [
            "Complete eradication of fungal infection",
            "Relief from itching and discomfort",
            "Prevention of recurrence and spread",
            "Restored healthy skin appearance",
            "Guidance on hygiene and prevention"
        ],
        treatments: [
            "Topical Antifungal Medications",
            "Oral Antifungal Therapy",
            "KOH Test & Culture Diagnosis",
            "Medicated Shampoos & Washes",
            "Preventive Hygiene Counseling",
            "Treatment of Nail Fungus"
        ],
    },
    "warts-removal": {
        title: "Warts Removal",
        category: "Skin",
        categoryId: "skin",
        heroImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
        shortDesc: "Safe removal procedures using cryotherapy, electrocautery, and laser for various types of warts.",
        overview: "Warts are caused by the Human Papillomavirus (HPV) and can appear anywhere on the body. We offer multiple safe and effective removal methods depending on the type, size, and location of the wart, ensuring minimal scarring and low recurrence rates.",
        benefits: [
            "Complete wart removal",
            "Minimal scarring",
            "Low recurrence rates",
            "Quick procedure with minimal downtime",
            "Safe for all skin types"
        ],
        treatments: [
            "Cryotherapy (Liquid Nitrogen)",
            "Electrocautery",
            "Radiofrequency Ablation",
            "Chemical Cauterization",
            "CO2 Laser Removal",
            "Immunotherapy for Resistant Warts"
        ],
    },
    "hair-fall-treatment": {
        title: "Hair Fall Treatment",
        category: "Hair",
        categoryId: "hair",
        heroImage: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=2070&auto=format&fit=crop",
        shortDesc: "Comprehensive diagnosis and targeted medical management for male and female pattern hair loss.",
        overview: "Hair fall can result from genetics, hormonal changes, nutritional deficiencies, stress, or medical conditions. Our trichologists conduct thorough evaluations including trichoscopy and blood work to identify the exact cause and create a personalized treatment plan.",
        benefits: [
            "Reduction in hair fall within weeks",
            "Stimulated new hair growth",
            "Stronger and thicker hair strands",
            "Addressing root cause, not just symptoms",
            "Long-term hair health maintenance"
        ],
        treatments: [
            "Trichoscopy & Hair Analysis",
            "Medical Therapy (Minoxidil, Finasteride)",
            "Nutritional Supplementation",
            "Low-Level Laser Therapy (LLLT)",
            "Mesotherapy for Scalp",
            "Growth Factor Concentrate (GFC)"
        ],
    },
    "prp-therapy": {
        title: "PRP Therapy",
        category: "Hair",
        categoryId: "hair",
        heroImage: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop",
        shortDesc: "Platelet-Rich Plasma treatment that uses your own blood to stimulate hair follicles for effective regrowth.",
        overview: "PRP (Platelet-Rich Plasma) therapy is a regenerative treatment where concentrated platelets from your own blood are injected into the scalp to activate dormant hair follicles. It is a safe, natural, and clinically proven approach to hair restoration.",
        benefits: [
            "Natural treatment using own blood",
            "Stimulates dormant hair follicles",
            "Increases hair density and thickness",
            "Minimal downtime and side effects",
            "Can be combined with other treatments for enhanced results"
        ],
        treatments: [
            "Blood Draw & Centrifugation",
            "PRP Scalp Injections",
            "Microneedling with PRP",
            "GFC (Growth Factor Concentrate)",
            "Combination with Minoxidil",
            "Monthly Maintenance Sessions"
        ],
    },
    "dandruff-treatment": {
        title: "Dandruff Treatment",
        category: "Hair",
        categoryId: "hair",
        heroImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2070&auto=format&fit=crop",
        shortDesc: "Medical-grade treatment for chronic dandruff, seborrheic dermatitis, and itchy scalp conditions.",
        overview: "Dandruff and seborrheic dermatitis are caused by fungal overgrowth, hormonal factors, and immune response. Our treatments go beyond regular shampoos to provide lasting relief through medical-grade antifungal therapy and scalp care.",
        benefits: [
            "Elimination of flaking and itching",
            "Healthy scalp environment",
            "Reduced recurrence",
            "Improved hair quality",
            "Customized scalp care routine"
        ],
        treatments: [
            "Medicated Antifungal Shampoos",
            "Topical Scalp Solutions",
            "Oral Antifungal Course",
            "Scalp Exfoliation Therapy",
            "Phototherapy for Severe Cases",
            "Diet & Lifestyle Counseling"
        ],
    },
    "alopecia": {
        title: "Alopecia Treatment",
        category: "Hair",
        categoryId: "hair",
        heroImage: "https://images.unsplash.com/photo-1585747860019-8e9b3ae01f67?q=80&w=2070&auto=format&fit=crop",
        shortDesc: "Specialized treatment for alopecia areata, alopecia totalis, and other autoimmune hair loss conditions.",
        overview: "Alopecia areata is an autoimmune condition causing patchy hair loss that can progress to total scalp or body hair loss. Our dermatologists use advanced immunomodulatory treatments and targeted therapies to promote regrowth and manage the condition effectively.",
        benefits: [
            "Regrowth in patchy bald areas",
            "Control of autoimmune flare-ups",
            "Improved hair density over time",
            "Psychological support and counseling",
            "Long-term monitoring and care"
        ],
        treatments: [
            "Intralesional Steroid Injections",
            "Topical Immunotherapy (DPCP)",
            "JAK Inhibitor Therapy",
            "PRP for Alopecia",
            "Minoxidil Application",
            "Systemic Immunosuppressants"
        ],
    },
    "hair-transplant": {
        title: "Hair Transplant",
        category: "Hair",
        categoryId: "hair",
        heroImage: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=2070&auto=format&fit=crop",
        shortDesc: "FUE and FUT hair transplant consultations with advanced surgical techniques for natural-looking results.",
        overview: "Hair transplant is a permanent solution for baldness using your own hair follicles. We offer expert consultations and advanced FUE (Follicular Unit Extraction) and FUT (Follicular Unit Transplantation) techniques for natural-looking, dense hair restoration.",
        benefits: [
            "Permanent and natural-looking results",
            "Minimally invasive FUE technique",
            "No visible scarring",
            "High graft survival rate",
            "One-time procedure with lasting results"
        ],
        treatments: [
            "FUE Hair Transplant",
            "FUT Hair Transplant",
            "Hairline Design & Planning",
            "Post-Transplant PRP Sessions",
            "Beard & Eyebrow Transplant",
            "Scar Revision Transplant"
        ],
    },
    "laser-hair-removal": {
        title: "Laser Hair Removal",
        category: "Laser",
        categoryId: "laser",
        heroImage: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop",
        shortDesc: "Permanent hair reduction using FDA-approved diode and Nd:YAG laser technology for all skin types.",
        overview: "Laser hair removal is the gold standard for permanent hair reduction. Using advanced diode and Nd:YAG laser systems, we safely target hair follicles to achieve smooth, hair-free skin on face, underarms, legs, bikini area, and full body.",
        benefits: [
            "Up to 90% permanent hair reduction",
            "Safe for all skin types including Indian skin",
            "Smooth, ingrown-free skin",
            "Quick sessions with minimal discomfort",
            "FDA-approved technology"
        ],
        treatments: [
            "Diode Laser Treatment",
            "Nd:YAG Laser Sessions",
            "Full Body Laser Hair Removal",
            "Face & Upper Lip Treatment",
            "Underarms & Bikini Area",
            "Customized Session Plans"
        ],
    },
    "laser-skin-resurfacing": {
        title: "Laser Skin Resurfacing",
        category: "Laser",
        categoryId: "laser",
        heroImage: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop",
        shortDesc: "Fractional CO2 and Erbium laser treatments for wrinkles, fine lines, and skin texture improvement.",
        overview: "Laser skin resurfacing uses focused beams of light to remove damaged skin layers and stimulate collagen production. This results in smoother, tighter, and more youthful-looking skin with improved texture and reduced wrinkles.",
        benefits: [
            "Reduction of fine lines and wrinkles",
            "Improved skin texture and tone",
            "Stimulated collagen production",
            "Minimized pore size",
            "Rejuvenated and youthful appearance"
        ],
        treatments: [
            "Fractional CO2 Laser",
            "Erbium Laser Resurfacing",
            "Pixel Laser Treatment",
            "Combined Laser & PRP",
            "Non-Ablative Laser",
            "Post-Treatment Skincare Protocol"
        ],
    },
    "tattoo-removal": {
        title: "Tattoo Removal",
        category: "Laser",
        categoryId: "laser",
        heroImage: "https://images.unsplash.com/photo-1611689342806-0863700ce8e4?q=80&w=2070&auto=format&fit=crop",
        shortDesc: "Q-switched Nd:YAG laser treatment for safe and effective removal of all tattoo colors.",
        overview: "Our Q-switched Nd:YAG laser safely breaks down tattoo ink particles into smaller fragments that your body naturally eliminates. The treatment is effective on all colors and can significantly fade or completely remove unwanted tattoos.",
        benefits: [
            "Effective on all tattoo colors",
            "Minimal scarring risk",
            "Progressive fading with each session",
            "Safe for all skin types",
            "Non-invasive procedure"
        ],
        treatments: [
            "Q-Switched Nd:YAG Laser",
            "Multi-Wavelength Treatment",
            "Colored Tattoo Removal",
            "Professional Tattoo Removal",
            "Amateur Tattoo Removal",
            "Post-Treatment Care Protocol"
        ],
    },
    "scar-treatment": {
        title: "Scar Treatment",
        category: "Laser",
        categoryId: "laser",
        heroImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
        shortDesc: "Advanced laser and micro-needling treatments for acne scars, surgical scars, and stretch marks.",
        overview: "Scars from acne, surgery, or injury can be effectively treated with a combination of laser therapy, microneedling, and dermal fillers. Our treatment protocols are customized based on scar type, depth, and location for optimal improvement.",
        benefits: [
            "Significant scar reduction",
            "Smoother skin texture",
            "Improved skin confidence",
            "Treatment for all scar types",
            "Minimal downtime with modern techniques"
        ],
        treatments: [
            "Fractional CO2 Laser",
            "Microneedling (MNRF)",
            "Dermal Fillers for Scars",
            "Subcision Treatment",
            "TCA Cross for Ice-Pick Scars",
            "PRP with Microneedling"
        ],
    },
    "laser-toning": {
        title: "Laser Toning",
        category: "Laser",
        categoryId: "laser",
        heroImage: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop",
        shortDesc: "Low-fluence laser treatment for brightening, pigmentation reduction, and overall skin rejuvenation.",
        overview: "Laser toning uses low-energy laser pulses to gently break down melanin deposits and stimulate collagen. It is ideal for treating melasma, dull skin, fine lines, and achieving an overall brighter, more even-toned complexion with no downtime.",
        benefits: [
            "Brighter and more even skin tone",
            "Reduction of melasma and pigmentation",
            "No downtime — lunchtime procedure",
            "Cumulative improvement with each session",
            "Suitable for all skin types"
        ],
        treatments: [
            "Q-Switched Nd:YAG Laser Toning",
            "Carbon Peel Laser",
            "Combination with Chemical Peels",
            "Maintenance Sessions",
            "Pre & Post Care Protocol",
            "Customized Session Frequency"
        ],
    },
    "coolsculpting": {
        title: "CoolSculpting",
        category: "Sculpting",
        categoryId: "sculpting",
        heroImage: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop",
        shortDesc: "FDA-cleared fat freezing technology to eliminate stubborn fat pockets without surgery or downtime.",
        overview: "CoolSculpting (Cryolipolysis) is an FDA-cleared non-surgical fat reduction procedure that freezes and destroys fat cells. It is ideal for treating stubborn areas like abdomen, love handles, thighs, and double chin that resist diet and exercise.",
        benefits: [
            "Non-surgical and non-invasive",
            "No anesthesia or downtime required",
            "Permanent fat cell destruction",
            "Natural-looking gradual results",
            "FDA-cleared and clinically proven"
        ],
        treatments: [
            "Abdominal Fat Reduction",
            "Love Handle Treatment",
            "Double Chin Reduction",
            "Thigh Fat Treatment",
            "Arm Fat Reduction",
            "Customized Treatment Plans"
        ],
    },
    "body-contouring": {
        title: "Body Contouring",
        category: "Sculpting",
        categoryId: "sculpting",
        heroImage: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop",
        shortDesc: "Non-invasive body shaping treatments using radiofrequency and ultrasound technology.",
        overview: "Body contouring treatments reshape and refine your silhouette without surgery. Using advanced radiofrequency, ultrasound, and electromagnetic technologies, we help you achieve a more sculpted physique with tighter skin.",
        benefits: [
            "Non-invasive body reshaping",
            "Skin tightening alongside fat reduction",
            "No surgery, no scars",
            "Comfortable treatment experience",
            "Visible results in few sessions"
        ],
        treatments: [
            "Radiofrequency Body Sculpting",
            "Ultrasound Cavitation",
            "HIFU Body Treatment",
            "Electromagnetic Muscle Stimulation",
            "Combination Slimming Protocols",
            "Post-Treatment Maintenance"
        ],
    },
    "fat-reduction": {
        title: "Fat Reduction",
        category: "Sculpting",
        categoryId: "sculpting",
        heroImage: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop",
        shortDesc: "Targeted fat reduction treatments for abdomen, thighs, arms, and double chin using advanced technology.",
        overview: "Our targeted fat reduction treatments are designed for stubborn fat deposits that don't respond to diet and exercise. Using a combination of cryolipolysis, radiofrequency, and injection lipolysis, we provide effective inch loss and body contouring.",
        benefits: [
            "Targeted fat reduction in problem areas",
            "Non-surgical alternatives to liposuction",
            "Permanent fat cell reduction",
            "Minimal to no downtime",
            "Customized to individual body goals"
        ],
        treatments: [
            "Cryolipolysis Treatment",
            "Injection Lipolysis",
            "Radiofrequency Fat Melting",
            "Ultrasonic Cavitation",
            "Diet & Lifestyle Guidance",
            "Multi-Session Treatment Plans"
        ],
    },
    "skin-tightening": {
        title: "Skin Tightening",
        category: "Sculpting",
        categoryId: "sculpting",
        heroImage: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop",
        shortDesc: "Radiofrequency and HIFU treatments for firming sagging skin on face, neck, and body.",
        overview: "Skin tightening treatments use radiofrequency and HIFU (High-Intensity Focused Ultrasound) energy to stimulate deep collagen production, resulting in firmer, lifted skin without surgery. Ideal for face, neck, jawline, and body areas showing signs of laxity.",
        benefits: [
            "Non-surgical face and body lifting",
            "Stimulated natural collagen production",
            "Gradual and natural-looking results",
            "No downtime or anesthesia",
            "Long-lasting skin firmness"
        ],
        treatments: [
            "HIFU Face Lift",
            "Radiofrequency Skin Tightening",
            "Micro-Focused Ultrasound",
            "Neck & Jawline Tightening",
            "Body Skin Firming",
            "Combination Tightening Protocols"
        ],
    },
};

export async function generateStaticParams() {
    return Object.keys(treatmentData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const treatment = treatmentData[slug];
    if (!treatment) {
        return { title: "Treatment Not Found | Mohta Skin Clinic" };
    }
    return {
        title: `${treatment.title} | Mohta Skin Clinic`,
        description: treatment.shortDesc,
    };
}

export default async function TreatmentDetailPage({ params }) {
    const { slug } = await params;
    const treatment = treatmentData[slug];

    if (!treatment) {
        return (
            <div className="pt-32 pb-24 min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-serif font-bold text-foreground mb-4">Treatment Not Found</h1>
                    <p className="text-foreground/70 mb-8">The treatment you&apos;re looking for doesn&apos;t exist.</p>
                    <Link href="/treatments" className="inline-flex items-center text-primary font-medium hover:underline">
                        <ArrowLeft className="mr-2 w-4 h-4" /> Back to All Treatments
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Hero */}
            <section className="relative h-[50vh] md:h-[60vh] flex items-end">
                <img
                    src={treatment.heroImage}
                    alt={treatment.title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
                    <Link href={`/treatments#${treatment.categoryId}`} className="inline-flex items-center text-white/80 text-sm mb-4 hover:text-white transition-colors">
                        <ArrowLeft className="mr-2 w-4 h-4" /> Back to {treatment.category} Treatments
                    </Link>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-3">{treatment.title}</h1>
                    <p className="text-white/80 text-lg max-w-2xl">{treatment.shortDesc}</p>
                </div>
            </section>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Overview */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6">Overview</h2>
                            <p className="text-foreground/70 leading-relaxed text-base md:text-lg">{treatment.overview}</p>
                        </div>

                        {/* Benefits */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6">Benefits</h2>
                            <ul className="space-y-4">
                                {treatment.benefits.map((benefit, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                                        <span className="text-foreground/80 text-base">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Treatment Options */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6">Treatment Options</h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {treatment.treatments.map((t, idx) => (
                                    <div key={idx} className="flex items-center p-4 bg-secondary/10 rounded-xl border border-secondary/20">
                                        <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">
                                            {idx + 1}
                                        </span>
                                        <span className="text-foreground/80 text-sm font-medium">{t}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        <div className="bg-primary text-white rounded-2xl p-8 sticky top-28">
                            <h3 className="text-xl font-serif font-bold mb-3">Book a Consultation</h3>
                            <p className="text-white/80 text-sm mb-6">
                                Get a personalized treatment plan from our expert dermatologists. Book your appointment today.
                            </p>
                            <Link
                                href="/#contact"
                                className="block w-full text-center py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors mb-4"
                            >
                                Book Appointment
                            </Link>
                            <a
                                href="tel:+919876543210"
                                className="flex items-center justify-center text-white/90 text-sm hover:text-white transition-colors"
                            >
                                <Phone className="w-4 h-4 mr-2" /> Call Us Now
                            </a>
                        </div>

                        <div className="bg-secondary/10 border border-secondary/20 rounded-2xl p-6">
                            <h4 className="font-serif font-bold text-foreground mb-4">Other {treatment.category} Treatments</h4>
                            <div className="space-y-2">
                                {Object.entries(treatmentData)
                                    .filter(([key, val]) => val.categoryId === treatment.categoryId && key !== slug)
                                    .map(([key, val]) => (
                                        <Link key={key} href={`/treatments/${key}`} className="block py-2 px-3 text-sm text-foreground/70 hover:text-primary hover:bg-primary/5 rounded transition-colors">
                                            {val.title}
                                        </Link>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
