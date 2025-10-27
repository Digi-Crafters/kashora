"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface StoryStage {
  title: string;
  description: string;
  image: string;
  year?: string;
}

const BrandStory = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const storyStages: StoryStage[] = [
    {
      title: "The Beginning",
      year: "2015",
      description: "In the heart of Kashmir Valley, our journey began with a simple vision: to preserve centuries-old craftsmanship and share it with the world.",
      image: "https://imgs.search.brave.com/rfVAgaM5u1V2whLIX4Phm0T_U2HCutQGKgNtTGubhsc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2NjUyMDM2/MzA2OTUtMWRiMTA1/ZTRlYTlkP2l4bGli/PXJiLTQuMS4wJml4/aWQ9TTN3eE1qQTNm/REI4TUh4elpXRnlZ/Mmg4TVh4OGMyaHZj/Q1V5TUdaeWIyNTBm/R1Z1ZkRCOGZEQjhm/SHd3JmZtPWpwZyZx/PTYwJnc9MzAwMA"
    },
    {
      title: "Growing Together",
      year: "2018",
      description: "As word spread about our authentic handcrafted pieces, more artisans joined our family. We grew to a thriving community of skilled craftspeople.",
      image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=800&h=600&fit=crop"
    },
    {
      title: "Global Recognition",
      year: "2021",
      description: "Our commitment to quality caught international attention. We began shipping worldwide, receiving awards for sustainable practices and fair trade.",
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&h=600&fit=crop"
    },
    {
      title: "Our Promise",
      year: "Today",
      description: "Today, we bridge traditional Kashmiri artisanship and modern conscious consumers, creating authentic pieces that bring beauty to your home.",
      image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=800&h=600&fit=crop"
    }
  ];

  // Auto-flip pages every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % storyStages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [storyStages.length]);

  const goToPage = (index: number) => {
    setCurrentPage(index);
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % storyStages.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + storyStages.length) % storyStages.length);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#F5F5DC] to-[#E8DCC4] py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2c1810] mb-3 font-serif">
            Our Story
          </h1>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#8B4513] to-[#A0522D] mx-auto" />
        </motion.div>

        {/* Book Container */}
        <div className="relative" style={{ perspective: '2000px' }}>
          <div className="relative w-full max-w-4xl mx-auto">
            {/* Book Shadow */}
            <div className="absolute inset-0 bg-black/20 blur-3xl transform translate-y-8 scale-95 rounded-3xl" />
            
            {/* Book Wrapper */}
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden" style={{ minHeight: '500px' }}>
              {/* Animated Page Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPage}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.43, 0.13, 0.23, 0.96]
                  }}
                  className="w-full h-full"
                >
                  <PageContent stage={storyStages[currentPage]} pageNumber={currentPage + 1} />
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button
                onClick={prevPage}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 z-20"
                aria-label="Previous page"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#8B4513]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextPage}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 z-20"
                aria-label="Next page"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#8B4513]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Page Indicators */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {storyStages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentPage === index 
                    ? 'w-8 bg-[#8B4513]' 
                    : 'w-2 bg-[#8B4513]/30 hover:bg-[#8B4513]/50'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-10 sm:mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-[#8B4513] text-white font-semibold rounded-full hover:bg-[#A0522D] transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
          >
            Explore Our Collection
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

// Page Content Component
const PageContent = ({ stage, pageNumber }: { stage: StoryStage; pageNumber: number }) => {
  return (
    <div className="w-full h-full bg-white">
      <div className="grid md:grid-cols-2 gap-0 h-full">
        {/* Image Side */}
        <div className="relative h-64 md:h-full min-h-[250px] md:min-h-[500px]">
          <Image
            src={stage.image}
            alt={stage.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={pageNumber === 1}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
          
          {/* Year Badge */}
          {stage.year && (
            <div className="absolute top-4 left-4 bg-[#8B4513] text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
              {stage.year}
            </div>
          )}
        </div>

        {/* Content Side */}
        <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center bg-gradient-to-br from-[#FFF8DC] to-[#F5F5DC]">
          <div className="space-y-4 sm:space-y-6">
            {/* Page Number */}
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#8B4513]/10">
              <span className="text-lg font-bold text-[#8B4513]">
                {pageNumber}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2c1810] font-serif leading-tight">
              {stage.title}
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-[#5c4033] leading-relaxed">
              {stage.description}
            </p>

            {/* Decorative Element */}
            <div className="flex items-center gap-2 pt-2">
              <div className="w-2 h-2 rounded-full bg-[#8B4513]" />
              <div className="w-8 h-0.5 bg-[#8B4513]/50" />
              <div className="w-2 h-2 rounded-full bg-[#A0522D]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandStory;