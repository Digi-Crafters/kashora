'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const KashoraHero: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#1e154d] via-[#7d3247] to-[#e57040]">
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-25">
        <motion.div
          className="absolute top-32 left-16 w-96 h-96 rounded-full bg-[#b25b37] blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 30, 0],
            y: [0, 24, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-16 right-20 w-96 h-96 rounded-full bg-[#5f2781] blur-3xl"
          animate={{
            scale: [1, 1.22, 1],
            x: [0, -35, 0],
            y: [0, -22, 0],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Main content container */}
      <div className="relative z-10 container mx-auto px-6 py-20 lg:py-0 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -55 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="space-y-8"
          >
            {/* Logo/Brand */}
            <motion.div
              initial={{ opacity: 0, y: -28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-7xl lg:text-8xl font-bold text-[#f7e4d1] drop-shadow-xl tracking-tight">
                Kashora
              </h1>
              <motion.div
                className="h-1 w-32 bg-[#d6ad60] mt-4 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: 128 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </motion.div>
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-4"
            >
              <p className="text-2xl lg:text-3xl text-[#d6ad60] font-light italic tracking-wide">
                Evening Splendor of Kashmir
              </p>
              <p className="text-lg text-[#f7e4d1]/80 max-w-lg leading-relaxed">
                Discover the mystical allure of Kashmir’s crafts at dusk—where heritage glimmers against shadows of twilight.
              </p>
            </motion.div>
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.08, boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 bg-[#d6ad60] text-[#31204a] rounded-full font-semibold text-lg shadow-2xl hover:bg-[#c78641] hover:text-white transition-colors duration-300"
              >
                Explore Collection
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 bg-transparent border-2 border-[#d6ad60] text-[#f7e4d1] rounded-full font-semibold text-lg hover:bg-[#372956]/40 transition-all duration-300"
              >
                Our Story
              </motion.button>
            </motion.div>
            {/* Decorative elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="flex gap-8 pt-8 items-center"
            >
              <div className="text-[#f7e4d1]/80">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm">Handcrafted Items</div>
              </div>
              <div className="h-12 w-px bg-[#f7e4d1]/30" />
              <div className="text-[#f7e4d1]/80">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm">Authentic Kashmir</div>
              </div>
            </motion.div>
          </motion.div>
          {/* Right side - Image showcase */}
          <motion.div
            initial={{ opacity: 0, x: 55 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="relative h-[600px] lg:h-[700px]"
          >
            {/* Main showcase image */}
            <motion.div
              className="absolute top-0 right-0 w-4/5 h-3/5 rounded-3xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full h-full bg-[#30284a]">
                <Image
                  src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80"
                  alt="Kashmir Pashmina Shawl"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e154d]/70 to-transparent" />
              </div>
            </motion.div>
            {/* Secondary image - bottom left */}
            <motion.div
              className="absolute bottom-0 left-0 w-3/5 h-2/5 rounded-3xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, y: 55 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative w-full h-full bg-[#b25b37]">
                <Image
                  src="https://images.unsplash.com/photo-1580782274062-e60d2bf52a85?w=800&q=80"
                  alt="Kashmir Handicrafts"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#7d3247]/50 to-transparent" />
              </div>
            </motion.div>
            {/* Floating badge */}
            <motion.div
              className="absolute top-20 left-10 bg-[#d6ad60] rounded-2xl p-6 shadow-xl"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 1.25 }}
              whileHover={{ y: -6 }}
            >
              <div className="text-[#31204a] font-bold text-xl">✨ New</div>
              <div className="text-[#b25b37] text-sm">Collection 2025</div>
            </motion.div>
            {/* Decorative circles */}
            <motion.div
              className="absolute -top-12 -right-12 w-32 h-32 rounded-full border-4 border-[#f7e4d1]/30"
              animate={{
                rotate: 360,
                scale: [1, 1.14, 1]
              }}
              transition={{
                rotate: { duration: 18, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            <motion.div
              className="absolute -bottom-12 -left-12 w-24 h-24 rounded-full border-4 border-[#b25b37]/25"
              animate={{
                rotate: -360,
                scale: [1, 1.22, 1]
              }}
              transition={{
                rotate: { duration: 13, repeat: Infinity, ease: "linear" },
                scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
              }}
            />
          </motion.div>
        </div>
      </div>
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.65 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 13, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-[#f7e4d1]/70 flex flex-col items-center gap-2"
        >
          <span className="text-sm">Scroll to explore</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default KashoraHero;
