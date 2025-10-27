"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import data from "../../data/ourCraft.json";

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  originalPrice: number;
  image: string;
  rating: number;
  reviewCount: number;
  featured: boolean;
}

const OurCollection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [displayCount, setDisplayCount] = useState(6);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      setDisplayCount(mobile ? 3 : 6);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Get unique categories with count
  const categoriesWithCount = [
    { name: 'All', count: data.crafts.length },
    ...Array.from(new Set(data.crafts.map(craft => craft.category))).map(cat => ({
      name: cat,
      count: data.crafts.filter(c => c.category === cat).length
    }))
  ];

  // Filter products
  const filteredProducts = selectedCategory === 'All' 
    ? data.crafts 
    : data.crafts.filter(craft => craft.category === selectedCategory);

  // Products to display
  const displayedProducts = filteredProducts.slice(0, displayCount);
  const hasMore = displayCount < filteredProducts.length;

  const handleShowMore = () => {
    setDisplayCount(prev => prev + (isMobile ? 3 : 6));
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setDisplayCount(isMobile ? 3 : 6);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#F5F5DC] via-[#FAF8F3] to-[#F5F5DC] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2c1810] mb-4 font-serif">
            Featured Collection
          </h1>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-[#8B4513] to-[#A0522D] mx-auto mb-4" />
          <p className="text-sm sm:text-base text-[#5c4033] max-w-2xl mx-auto">
            Discover our curated selection of authentic Kashmiri craftsmanship
          </p>
        </motion.div>

        {/* Main Layout: Sidebar + Bento Grid */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Sidebar - Vertical Filters (Desktop) / Horizontal (Mobile) */}
          <motion.aside
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-64 flex-shrink-0"
          >
            <div className="lg:sticky lg:top-24">
              {/* Filter Header */}
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-[#2c1810] mb-2 font-serif">
                  Categories
                </h3>
                <div className="w-12 h-0.5 bg-[#8B4513]" />
              </div>

              {/* Desktop: Vertical List */}
              <div className="hidden lg:block space-y-2">
                {categoriesWithCount.map((category, index) => (
                  <motion.button
                    key={category.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    onClick={() => handleCategoryChange(category.name)}
                    className={`w-full text-left px-5 py-4 rounded-xl transition-all duration-300 group ${
                      selectedCategory === category.name
                        ? 'bg-[#8B4513] text-white shadow-lg transform translate-x-2'
                        : 'bg-white hover:bg-[#8B4513]/5 hover:translate-x-1'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`font-semibold text-sm sm:text-base ${
                        selectedCategory === category.name ? 'text-white' : 'text-[#2c1810]'
                      }`}>
                        {category.name}
                      </span>
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                        selectedCategory === category.name 
                          ? 'bg-white/20 text-white' 
                          : 'bg-[#8B4513]/10 text-[#8B4513]'
                      }`}>
                        {category.count}
                      </span>
                    </div>
                    {selectedCategory === category.name && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-full"
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Mobile: Horizontal Scroll */}
              <div className="lg:hidden overflow-x-auto pb-2 -mx-4 px-4">
                <div className="flex gap-3 min-w-max">
                  {categoriesWithCount.map((category, index) => (
                    <motion.button
                      key={category.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                      onClick={() => handleCategoryChange(category.name)}
                      className={`px-5 py-3 rounded-full font-semibold text-sm whitespace-nowrap transition-all duration-300 ${
                        selectedCategory === category.name
                          ? 'bg-[#8B4513] text-white shadow-lg'
                          : 'bg-white text-[#5c4033] border-2 border-[#8B4513]/20'
                      }`}
                    >
                      {category.name} ({category.count})
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Filter Stats (Desktop Only) */}
              <div className="hidden lg:block mt-8 p-6 bg-white rounded-xl shadow-md">
                <h4 className="text-sm font-bold text-[#2c1810] mb-4">Collection Stats</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-[#5c4033]">Total Items</span>
                    <span className="font-bold text-[#8B4513]">{data.crafts.length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-[#5c4033]">Showing</span>
                    <span className="font-bold text-[#8B4513]">{displayedProducts.length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-[#5c4033]">Categories</span>
                    <span className="font-bold text-[#8B4513]">{categoriesWithCount.length - 1}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>

          {/* Right Content - Bento Grid */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Bento Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-4 sm:gap-6">
                  {displayedProducts.map((product, index) => (
                    <BentoCard
                      key={product.id}
                      product={product}
                      index={index}
                      isLarge={index % 7 === 0 || index % 7 === 3}
                    />
                  ))}
                </div>

                {/* Show More */}
                {hasMore && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-center mt-8 sm:mt-12"
                  >
                    <motion.button
                      onClick={handleShowMore}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 sm:px-10 py-4 bg-[#8B4513] text-white font-bold rounded-full shadow-xl hover:shadow-2xl hover:bg-[#A0522D] transition-all duration-300 text-sm sm:text-base"
                    >
                      Load More • {filteredProducts.length - displayCount} Remaining
                    </motion.button>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

// Bento Card Component
const BentoCard = ({ 
  product, 
  index,
  isLarge 
}: { 
  product: Product; 
  index: number;
  isLarge?: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 ${
        isLarge ? 'sm:col-span-2 sm:row-span-2' : ''
      }`}
    >
      {/* Image Section */}
      <div className={`relative overflow-hidden ${isLarge ? 'h-80 sm:h-full min-h-[400px]' : 'h-64 min-h-[300px]'}`}>
        <motion.div
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-full"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes={isLarge ? "(max-width: 640px) 100vw, 66vw" : "(max-width: 640px) 100vw, 33vw"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </motion.div>

        {/* Floating Info */}
        <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-between">
          {/* Top Badges */}
          <div className="flex gap-2">
            {product.featured && (
              <span className="px-3 py-1 bg-[#8B4513] text-white text-xs font-bold rounded-full">
                Featured
              </span>
            )}
            {product.originalPrice > product.price && (
              <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
              </span>
            )}
          </div>

          {/* Bottom Content */}
          <div className="space-y-2">
            <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-[#8B4513] text-xs font-semibold rounded-full">
              {product.category}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white drop-shadow-lg">
              {product.name}
            </h3>
            
            {/* Show description only on large cards */}
            {isLarge && (
              <p className="text-sm text-white/90 line-clamp-2 drop-shadow">
                {product.description}
              </p>
            )}

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-3 h-3 sm:w-4 sm:h-4 ${
                      i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-white/30'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs text-white/90 drop-shadow">
                {product.rating} ({product.reviewCount})
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-2 pt-2">
              <span className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">
                ₹{product.price.toLocaleString()}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-sm text-white/70 line-through drop-shadow">
                  ₹{product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Hover Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-[#8B4513]/90 flex items-center justify-center"
        >
          <motion.button
            initial={{ scale: 0.8, y: 20 }}
            animate={{ 
              scale: isHovered ? 1 : 0.8, 
              y: isHovered ? 0 : 20 
            }}
            className="px-6 py-3 bg-white text-[#8B4513] font-bold rounded-full shadow-xl text-sm sm:text-base"
          >
            View Details
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OurCollection;