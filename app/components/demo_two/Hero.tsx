'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Playfair_Display, Cormorant_Garamond } from 'next/font/google';
import Image from 'next/image';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700']
});

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin']
});

const Hero = () => {
  return (
    <div className={`${playfair.className} min-h-screen relative overflow-hidden flex items-center justify-center bg-[#F5F5DC]`}>
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1.5 }}
          className="absolute top-20 left-10 w-64 h-64 bg-[#b76e79] rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-[#d4af37] rounded-full blur-3xl"
        />
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 sm:px-6 py-12">
        {/* Main content container */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 max-w-7xl mx-auto">
          
          {/* Left side - Image oval */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-72 h-96 sm:w-80 sm:h-[28rem] md:w-96 md:h-[32rem]"
          >
            {/* Decorative border */}
            <div className="absolute inset-0 rounded-[50%] border-4 border-[#8B4513]/30 transform rotate-3" />
            <div className="absolute inset-0 rounded-[50%] border-4 border-[#A0522D]/20 transform -rotate-3" />
            
            {/* Main oval with image */}
            <div className="absolute inset-2 rounded-[50%] overflow-hidden bg-white shadow-2xl">
              <div className="relative w-full h-full">
                <Image
                  src="https://imgs.search.brave.com/ZVCNShKk0ml38uDLRbgJ5eoSY_oDBmlM-rLYLFv1wVM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YmFuYXJhc2VlLmlu/L2Nkbi9zaG9wL2Zp/bGVzL0lNR185MDcx/XzYwMHguanBnP3Y9/MTcyNTAwNjQ0NA"
                  alt="Kashmiri Craftsmanship"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 320px, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -bottom-6 -right-6 bg-[#8B4513] text-white rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-xl"
            >
              <span className="text-xs font-semibold">EST.</span>
              <span className="text-2xl font-bold">2024</span>
            </motion.div>
          </motion.div>

          {/* Right side - Text content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl">
            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-6"
            >
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-[#2c1810] tracking-tight leading-none">
                KASHORA
              </h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, delay: 0.8 }}
                className="h-1 bg-gradient-to-r from-[#8B4513] via-[#A0522D] to-transparent mt-4"
              />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className={`${cormorant.className} text-2xl sm:text-3xl md:text-4xl font-light italic text-[#3d2817] mb-8 leading-relaxed`}
            >
              Where heritage meets contemporary elegance
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-base sm:text-lg text-[#5c4033] mb-10 leading-relaxed max-w-lg"
            >
              Discover the timeless artistry of Kashmir through our curated collection 
              of handcrafted treasures, each piece telling a story of tradition and excellence.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#8B4513] text-white font-semibold rounded-full hover:bg-[#6d3410] transition-colors shadow-lg"
              >
                Explore Collection
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-[#8B4513] text-[#8B4513] font-semibold rounded-full hover:bg-[#8B4513] hover:text-white transition-all"
              >
                Our Story
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="flex gap-8 mt-12 pt-8 border-t border-[#8B4513]/20"
            >
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-[#8B4513]">500+</div>
                <div className="text-sm text-[#5c4033]">Handcrafted Items</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-[#A0522D]">100%</div>
                <div className="text-sm text-[#5c4033]">Authentic</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-[#8B4513]">50+</div>
                <div className="text-sm text-[#5c4033]">Artisans</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;