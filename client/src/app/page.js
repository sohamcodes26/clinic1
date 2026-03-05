"use client";

import Link from "next/link";
import {
  HeartHandshake,
  Sparkles,
  Stethoscope,
  Award,
  ArrowRight,
  Droplets,
  Activity,
  Trees,
  CheckCircle2
} from "lucide-react";
import ReviewSlider from "@/components/ReviewSlider";
import DoctorCard from "@/components/DoctorCard";

export default function Home() {
  const stats = [
    { value: "10k+", label: "Happy Patients" },
    { value: "15+", label: "Years Experience" },
    { value: "2", label: "Clinic Locations" },
    { value: "50+", label: "Advanced Treatments" },
  ];

  const conditions = [
    { name: "Hair Fall", icon: <Activity className="w-8 h-8 md:w-10 md:h-10 text-primary mb-4" /> },
    { name: "Psoriasis", icon: <Droplets className="w-8 h-8 md:w-10 md:h-10 text-primary mb-4" /> },
    { name: "Vitiligo", icon: <Trees className="w-8 h-8 md:w-10 md:h-10 text-primary mb-4" /> },
    { name: "Acne", icon: <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-primary mb-4" /> },
    { name: "Fungal Infection", icon: <Stethoscope className="w-8 h-8 md:w-10 md:h-10 text-primary mb-4" /> },
    { name: "Nail Diseases", icon: <HeartHandshake className="w-8 h-8 md:w-10 md:h-10 text-primary mb-4" /> },
    { name: "Eczema", icon: <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-primary mb-4" /> },
    { name: "Warts", icon: <Activity className="w-8 h-8 md:w-10 md:h-10 text-primary mb-4" /> },
  ];

  const doctors = [
    {
      name: "Dr. Pratik R. Mohta",
      designation: "Consultant Dermatologist",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop", // placeholder
      qualifications: [
        "MD Skin – AIIMS Delhi (Gold Medalist)",
        "Sarvottam Doctor Kandhari Award – AIIMS Delhi",
        "PGI Chandigarh – All India Rank 1",
        "AIIMS PG Delhi – All India Rank 7",
        "MBBS – Sion Hospital, Mumbai"
      ]
    },
    {
      name: "Dr. Isha P. Mohta",
      designation: "Consultant Cosmetologist",
      image: "https://images.unsplash.com/photo-1594824436998-d1fc73fa25a7?q=80&w=2070&auto=format&fit=crop", // placeholder
      qualifications: [
        "Fellowship in Cosmetic Dermatology (Germany)",
        "Fellowship in Facial Aesthetics (Europe)",
        "Fellowship in Micropigmentation (Europe)",
        "MD – Safdarjung Hospital, Delhi",
        "MBBS – Sion Hospital, Mumbai"
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-secondary/10">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40 z-10" />
          <img
            src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop"
            alt="Clinic Aesthetic"
            className="w-full h-full object-cover object-right"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Sparkles size={16} />
              <span className="text-sm font-medium tracking-wide uppercase">Premium Skin Care</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-[1.1] mb-6">
              Reveal your <br /><span className="text-primary italic">healthy, glowing</span> skin.
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 mb-10 leading-relaxed max-w-xl">
              Experience world-class dermatology and aesthetic treatments guided by Gold Medalist experts in Khamgaon & Akola.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-medium rounded-full hover:bg-primary-dark transition-all duration-300 shadow-xl shadow-primary/20 text-lg hover:-translate-y-1"
              >
                Book Consultation
              </Link>
              <Link
                href="/treatments"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-primary text-primary font-medium rounded-full hover:bg-primary/5 transition-all duration-300 text-lg"
              >
                View Treatments
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-secondary/20 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-secondary/20">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center px-4">
                <div className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-foreground/60 uppercase tracking-wider font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions Treated Overview */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Expert Care</h2>
            <h3 className="text-3xl md:text-5xl font-serif text-foreground">Conditions We Treat</h3>
            <div className="w-24 h-1 bg-primary mx-auto mt-6 md:mt-8 mb-6 rounded-full"></div>
            <p className="text-base md:text-lg text-foreground/70">
              We provide comprehensive medical and aesthetic treatments for a wide range of dermatological conditions.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {conditions.map((condition, idx) => (
              <div
                key={idx}
                className="bg-white p-4 md:p-8 rounded-2xl shadow-sm border border-secondary/30 text-center hover:shadow-xl hover:border-primary/30 transition-all duration-300 group cursor-pointer hover:-translate-y-1"
              >
                <div className="flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                  {condition.icon}
                </div>
                <h4 className="font-serif text-lg md:text-xl font-medium text-foreground group-hover:text-primary transition-colors">{condition.name}</h4>
              </div>
            ))}
          </div>

          <div className="mt-12 md:mt-16 text-center">
            <Link href="/treatments" className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors text-base md:text-lg group">
              View our specialized treatments
              <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-24 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Meet the Experts</h2>
            <h3 className="text-3xl md:text-5xl font-serif text-foreground">Our Specialists</h3>
            <div className="w-24 h-1 bg-primary mx-auto mt-6 md:mt-8 mb-6 rounded-full"></div>
            <p className="text-base md:text-lg text-foreground/70">
              Our clinic is led by highly qualified and award-winning dermatologists dedicated to providing world-class care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {doctors.map((doctor, idx) => (
              <DoctorCard key={idx} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>

      {/* Patient Reviews Segment */}
      <section className="py-24 bg-background overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top-right"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Testimonials</h2>
            <h3 className="text-3xl md:text-5xl font-serif text-foreground">Success Stories</h3>
            <div className="w-24 h-1 bg-primary mx-auto mt-6 md:mt-8"></div>
          </div>

          <ReviewSlider />
        </div>
      </section>

    </div>
  );
}
