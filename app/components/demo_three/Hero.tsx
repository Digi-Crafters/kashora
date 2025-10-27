"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#2A0E05] via-[#4B1D0A] to-[#B35C1E] text-[#F8EFE6]">
      {/* Decorative gradient glow overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(230,179,90,0.08),_transparent_70%)]"></div>

      {/* Optional pattern overlay */}
      <div className="absolute inset-0 bg-[url('/patterns/gold-motif.png')] opacity-5 bg-repeat"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-6 md:px-20 py-20 md:py-28">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight text-[#F8EFE6] tracking-tight">
            Discover the <span className="text-[#E6B35A]">Golden Glow</span> of Kashmiri Artistry
          </h1>

          <p className="mt-6 text-base md:text-lg text-[#F8EFE6]/90 font-light leading-relaxed">
            Each creation is a reflection of the timeless beauty of Kashmir’s sunsets — warm, serene, and
            handcrafted with passion. Step into a world where culture and elegance embrace.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-8 py-3.5 bg-[#E6B35A] text-[#2A0E05] rounded-full font-medium shadow-md hover:shadow-lg hover:bg-[#F2C86B] transition-all duration-300">
              Explore Collection
            </button>
            <button className="px-8 py-3.5 border border-[#E6B35A]/70 text-[#F8EFE6] rounded-full font-medium hover:bg-[#E6B35A]/10 transition-all duration-300">
              Our Story
            </button>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="mb-12 md:mb-0 flex justify-center md:justify-end"
        >
          <div className="relative w-[320px] sm:w-[400px] md:w-[480px] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-[#E6B35A]/30">
            <Image
              src="/images/kashora-sunset.jpg"
              alt="Kashmiri Handcrafted Elegance"
              fill
              className="object-cover"
              priority
            />
            {/* Subtle golden gradient overlay for richness */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2A0E05]/60 via-transparent to-transparent"></div>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#2A0E05]"></div>
    </section>
  );
}
