'use client';

import Image from "next/image";
import Link from "next/link";
import { easeOut, motion } from "framer-motion";
import { useEffect, useState, useMemo, useCallback } from "react";

export default function KashoraHero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to generate random numbers within a range
  const getRandomInRange = useCallback((min: number, max: number) => {
    return min + (max - min) * 0.5;
  }, []);

  // Memoize particle values
  const particles = useMemo(() => 
    Array.from({ length: 15 }, (_, index) => ({
      x: getRandomInRange(-25, 25),
      y: getRandomInRange(-100, 0),
      duration: getRandomInRange(2, 5),
      delay: getRandomInRange(0, 2),
      left: getRandomInRange(0, 100),
      top: getRandomInRange(0, 100),
      id: index,
    })), [getRandomInRange]
  );
  
  const images = [
    "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80",
    "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=800&q=80",
    "https://imgs.search.brave.com/75VTwLbdaGeL_RGgMs7m0fRlwrRYpDsTvXB4V-u6wfs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzI0MzU1NDc5L3Iv/aWwvMDA5NmI1LzY0/NzA0NTI5MTgvaWxf/Nzk0eE4uNjQ3MDQ1/MjkxOF8xYzd6Lmpw/Zw",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
    ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easeOut
      }
    }
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#1C8076] via-[#2a9d8f] to-[#E2C9AF]">
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="h-full w-full" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 15 L35 25 L45 25 L37 32 L40 42 L30 35 L20 42 L23 32 L15 25 L25 25 Z' fill='%23D4AF37' /%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid min-h-screen items-center gap-8 lg:gap-12 lg:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <motion.div 
            className="flex flex-col justify-center space-y-6 sm:space-y-8 py-12 sm:py-16 lg:py-0"
            variants={itemVariants}
          >
            {/* Decorative Element */}
            <motion.div 
              className="h-1 w-16 sm:w-20 bg-gradient-to-r from-[#D4AF37] to-transparent"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ delay: 0.5, duration: 1 }}
            />

            {/* Headline */}
            <motion.h1
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white"
              style={{ fontFamily: "Playfair Display, serif" }}
              variants={itemVariants}
            >
              Experience the Timeless Artistry of Kashmir
            </motion.h1>

            {/* Subheading */}
            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-white/90 max-w-2xl"
              style={{ fontFamily: "Poppins, sans-serif" }}
              variants={itemVariants}
            >
              Discover handcrafted elegance inspired by the valleys of Kashmir —
              where tradition meets luxury. Every piece at Kashora tells a story
              woven with love, culture, and the serenity of the Himalayas.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col gap-3 sm:gap-4 sm:flex-row sm:gap-6"
              variants={itemVariants}
            >
              <Link href="#collections">
                <motion.button
                  className="group relative overflow-hidden bg-[#D4AF37] px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white transition-all duration-300 hover:bg-[#B8941F] hover:shadow-2xl hover:scale-105 rounded-lg w-full sm:w-auto"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Explore Collection</span>
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
                </motion.button>
              </Link>
              <Link href="#our-story">
                <motion.button
                  className="group border-2 border-white/80 bg-transparent px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#1C8076] hover:shadow-2xl hover:scale-105 rounded-lg w-full sm:w-auto"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Know Our Story
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image - Animated Stack */}
          <motion.div 
            className="relative flex items-center justify-center lg:justify-end py-12 sm:py-16 lg:py-0"
            variants={itemVariants}
          >
            {/* Main Container */}
            <div className="relative w-full max-w-md h-[400px] sm:h-[500px] md:h-[600px]">
              
              {/* Background Images Stack */}
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0 rounded-lg overflow-hidden shadow-2xl"
                  initial={{ 
                    scale: 0.8, 
                    opacity: 0, 
                    rotate: index % 2 === 0 ? -5 : 5,
                    zIndex: images.length - index 
                  }}
                  animate={{ 
                    scale: index === currentImageIndex ? 1 : 0.8,
                    opacity: index === currentImageIndex ? 1 : 0,
                    rotate: index === currentImageIndex ? 0 : (index % 2 === 0 ? -8 : 8),
                    zIndex: index === currentImageIndex ? 30 : images.length - index
                  }}
                  transition={{
                    duration: 1.2,
                    ease: "easeInOut"
                  }}
                >
                  <Image
                    src={image}
                    alt={`Kashmiri craft ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C8076]/60 to-transparent" />
                </motion.div>
              ))}

              {/* Floating Decorative Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 z-40"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full text-[#D4AF37] opacity-70"
                >
                  <path d="M0,0 L100,0 L100,100 Z" fill="currentColor" />
                </svg>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-20 h-20 z-40"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full text-[#D4AF37] opacity-70"
                >
                  <path d="M0,100 L0,0 L100,100 Z" fill="currentColor" />
                </svg>
              </motion.div>

              {/* Animated Border Frames */}
              <motion.div
                className="absolute inset-0 border-8 border-[#D4AF37]/30 transform rotate-3 rounded-lg z-20"
                animate={{
                  rotate: [3, -2, 3]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                className="absolute inset-0 border-8 border-white/20 transform -rotate-3 rounded-lg z-10"
                animate={{
                  rotate: [-3, 2, -3]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              />

              {/* Image Navigation Dots */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-40 flex space-x-3">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-[#D4AF37] scale-125' 
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2 text-white/80">
          <span
            className="text-sm"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Scroll Down
          </span>
          <motion.svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </motion.svg>
        </div>
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 bg-[#D4AF37]/30 rounded-full"
            initial={{
              x: 0,
              y: 0,
              opacity: 0
            }}
            animate={{
              y: [0, particle.y] as number[],
              x: [0, particle.x] as number[],
              opacity: [0, 1, 0] as number[],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
          />
        ))}
      </div>
    </section>
  );
}