"use client";

import Link from "next/link";
import {
  Sparkle,
  Droplets,
  Scissors,
  Syringe,
  Activity,
  Trees,
  CheckCircle2,
  Video,
  Award
} from "lucide-react";
import ReviewSlider from "@/components/ReviewSlider";
import ServiceCard from "@/components/ServiceCard";
import FeatureCard from "@/components/FeatureCard";
import dynamic from "next/dynamic";

const HeroFace3D = dynamic(() => import("@/components/HeroFace3D"), {
  ssr: false,
  loading: () => null,
});

export default function Home() {

  const mainServices = [
    {
      title: "Skin Treatment",
      icon: <Droplets className="w-8 h-8 md:w-10 md:h-10 text-primary mb-4" />,
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop",
      desc: "Comprehensive solutions for acne, pigmentation, psoriasis, vitiligo, and glowing skin tailored by expert dermatologists."
    },
    {
      title: "Hair Treatment",
      icon: <Scissors className="w-8 h-8 md:w-10 md:h-10 text-primary mb-4" />,
      image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=2070&auto=format&fit=crop",
      desc: "Advanced hair fall treatments, PRP therapies, and customized solutions to restore natural hair growth effectively."
    },
    {
      title: "Laser Treatment",
      icon: <Activity className="w-8 h-8 md:w-10 md:h-10 text-primary mb-4" />,
      image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop",
      desc: "Safe and effective laser therapies for hair reduction, scar resurfacing, and skin rejuvenation with modern technology."
    },
    {
      title: "Aesthetics",
      icon: <Sparkle className="w-8 h-8 md:w-10 md:h-10 text-primary mb-4" />,
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop",
      desc: "Enhance your natural beauty with premium fillers, botox, and customized facial aesthetic procedures by specialists."
    },
    {
      title: "Sculpting",
      icon: <Trees className="w-8 h-8 md:w-10 md:h-10 text-primary mb-4" />,
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop",
      desc: "Non-surgical body contouring and sculpting therapies to safely reduce stubborn fat and improve your physical shape."
    },
    {
      title: "Surgery",
      icon: <Syringe className="w-8 h-8 md:w-10 md:h-10 text-primary mb-4" />,
      image: "https://images.unsplash.com/photo-1584516150909-c43483ee7932?q=80&w=2069&auto=format&fit=crop",
      desc: "Safe clinical procedures including mole removal, cyst excisions, and advanced dermatological surgeries."
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">

      {/* 1. Hero Banner */}
      <section className="relative w-full h-[calc(100vh-80px)] md:h-[calc(100vh-112px)] bg-white flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/30 pointer-events-none"></div>
        <HeroFace3D />
        <div className="relative z-[5] w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-none">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-3xl italic">
                M
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-4xl text-primary font-bold tracking-tight">Mohta Skin Clinic</span>
                <span className="text-xs uppercase tracking-[0.1em] text-foreground/80 font-bold ml-1">Overall Skincare Solutions</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground leading-tight mb-4">
              We Provide <br />
              Overall Skincare Solutions
            </h1>
            <p className="text-lg text-foreground/70 mb-8 max-w-xl">
              Overcome disease, embrace health and see our skin specialists will leave you looking radiant and rejuvenated.
            </p>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="absolute bottom-0 w-full bg-primary text-white py-3 md:py-4 shadow-md z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row items-center justify-between">
            <div className="flex items-center space-x-4 md:space-x-6">
              <img src="https://images.unsplash.com/photo-1594824436998-d1fc73fa25a7?q=80&w=150&auto=format&fit=crop" alt="Doctor" className="rounded-full w-12 h-12 border-2 border-white object-cover hidden md:block" />
              <h2 className="text-base md:text-2xl font-serif font-bold">Book a consultation with us</h2>
            </div>
            <Link href="/#contact" className="bg-white text-primary px-5 md:px-8 py-2 md:py-2.5 rounded hover:bg-white/90 font-bold transition-colors text-sm md:text-base whitespace-nowrap">
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Main Treatments Grid */}
      <section className="py-20 bg-background max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-[#d4af37] font-bold mb-4">
            — To prove that if you care for your skin, your skin will care for you! —
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            The Best <span className="text-primary italic">Dermatologist & Skin Specialist</span> In Khamgaon & Akola
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {mainServices.map((service, idx) => (
            <ServiceCard
              key={idx}
              title={service.title}
              description={service.desc}
              imageSrc={service.image}
              icon={service.icon}
            />
          ))}
        </div>
      </section>

      {/* 3. Specialized Features horizontal row */}
      <section className="py-16 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-primary/70 font-bold mb-2">— Experience Premium Care —</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Welcome to <span className="text-primary italic">Mohta Skin Clinic</span> Skin, Hair & Laser Center
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <FeatureCard
              title="Bridal Skin Care"
              description="Make your wedding day extra special with our customized bridal skincare packages. Get radiant, flawless glowing skin tailored precisely for you on your big day."
              imageSrc="https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?q=80&w=2071&auto=format&fit=crop"
              highlight="Bridal Skin Care"
            />
            <FeatureCard
              title="Medical Tourism"
              description="International patients seeking world-class dermatology at Mohta Skin Clinic. We provide end-to-end support for your treatments, travel coordination, and recovery in India."
              imageSrc="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop"
            />
          </div>
        </div>
      </section>

      {/* 4. Doctor's Profile - Recreated layout */}
      <section id="doctors" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-bold border-b border-primary pb-1">
            Doctor&apos;s Profile
          </span>
        </div>

        {/* Dr. Pratik R. Mohta */}
        <div className="flex flex-col md:flex-row mt-12 bg-secondary/10 border border-secondary/30 rounded-xl overflow-hidden relative">
          <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-auto">
            <img
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop"
              alt="Dr. Pratik Mohta"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white relative md:-ml-8 md:my-8 rounded-xl shadow-lg border border-secondary/20">
            <h3 className="text-3xl font-serif font-bold text-foreground mb-1">Dr. Pratik R. Mohta</h3>
            <p className="text-primary font-semibold text-lg mb-4">MBBS, MD Skin</p>
            <p className="text-foreground/70 leading-relaxed text-sm mb-8">
              Dr. Pratik is an AIIMS Delhi Gold Medalist and an award-winning Consultant Dermatologist, Cosmetologist, and Hair Specialist offering unmatched care in Khamgaon & Akola.
            </p>
            <div className="flex flex-col space-y-4 border-t border-secondary/50 pt-8">
              <div className="flex space-x-3">
                {["A", "B", "C", "D"].map((medal, i) => (
                  <div key={i} className="w-10 h-10 border border-primary/30 flex justify-center items-center text-primary bg-secondary/20 rounded hover:bg-primary hover:text-white transition-colors cursor-pointer">
                    <Award className="w-5 h-5" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dr. Isha Mohta */}
        <div className="flex flex-col md:flex-row-reverse mt-12 bg-secondary/10 border border-secondary/30 rounded-xl overflow-hidden relative">
          <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-auto">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop"
              alt="Dr. Isha Mohta"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white relative md:-mr-8 md:my-8 rounded-xl shadow-lg border border-secondary/20">
            <h3 className="text-3xl font-serif font-bold text-foreground mb-1">Dr. Isha Mohta</h3>
            <p className="text-primary font-semibold text-lg mb-4">MBBS, MD Skin</p>
            <p className="text-foreground/70 leading-relaxed text-sm mb-8">
              Dr. Isha is a skilled Dermatologist and Cosmetologist specializing in advanced skincare treatments, aesthetic procedures, and holistic skin wellness at Mohta Skin Clinic.
            </p>
            <div className="flex flex-col space-y-4 border-t border-secondary/50 pt-8">
              <div className="flex space-x-3">
                {["A", "B", "C", "D"].map((medal, i) => (
                  <div key={i} className="w-10 h-10 border border-primary/30 flex justify-center items-center text-primary bg-secondary/20 rounded hover:bg-primary hover:text-white transition-colors cursor-pointer">
                    <Award className="w-5 h-5" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. What Our Client Says */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-12">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground">What Our Client Says</h3>
          </div>

          <ReviewSlider />
        </div>
      </section>

      {/* 6. Blogs Section */}
      <section className="py-20 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-widest text-[#d4af37] font-bold mb-4">
              — Unlocking the Secrets of Beautiful Skin by Top Dermatologist in Pune —
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-foreground font-bold tracking-wide">
              READ BLOGS BY <span className="text-primary italic">Dr. Pratik Mohta</span> THE BEST SKIN, HAIR AND LASER DOCTOR IN KHAMGAON
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-white rounded-xl shadow-sm border border-secondary/30 overflow-hidden hover:shadow-lg transition-all group">
              <div className="h-64 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Blog 1" />
              </div>
              <div className="p-8 text-center bg-white">
                <h4 className="text-xl font-serif font-bold text-primary mb-4">Coolsculpting Fat Loss Treatment</h4>
                <p className="text-foreground/70 text-sm leading-relaxed mb-6">
                  Coolsculpting is a highly effective procedure to remove stubborn fat pockets that resist diet and exercise without surgery...
                </p>
                <button className="bg-primary/20 text-primary hover:bg-primary hover:text-white px-6 py-2 rounded text-sm font-semibold transition-colors">
                  Read Details
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-secondary/30 overflow-hidden hover:shadow-lg transition-all group">
              <div className="h-64 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Blog 2" />
              </div>
              <div className="p-8 text-center bg-white">
                <h4 className="text-xl font-serif font-bold text-primary mb-4">Hair Loss Treatment</h4>
                <p className="text-foreground/70 text-sm leading-relaxed mb-6">
                  You are what you eat so diet takes a major role in your hair loss problem, but hormonal factors and unhygienic scaling matter...
                </p>
                <button className="bg-primary/20 text-primary hover:bg-primary hover:text-white px-6 py-2 rounded text-sm font-semibold transition-colors">
                  Read Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Video Tour Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-serif font-bold text-foreground mb-12 border-b border-secondary/50 pb-4 inline-block tracking-wider">Videos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((v) => (
            <div key={v} className="aspect-video bg-[#1c2229] relative rounded-lg overflow-hidden group border-2 border-primary/20 hover:border-primary transition-colors cursor-pointer">
              <img src={`https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop`} alt="Video Thumbnail" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                  <Video className="w-6 h-6 ml-1" />
                </div>
              </div>
              <div className="absolute top-0 w-full p-4 bg-gradient-to-b from-black/80 to-transparent">
                <span className="text-white font-bold text-sm truncate block">Bridal Glowing Skin Treatment & Consultation</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
