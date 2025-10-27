"use client";

import React, { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import data from "../../data/ourCraft.json";

type SortOption = 'default' | 'price-low' | 'price-high' | 'name';

const OurProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<SortOption>('default');
  const [isMobile, setIsMobile] = useState(false);
  const [displayCount, setDisplayCount] = useState(12); // Default for desktop
  
  // Detect mobile screen
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = ['All', ...new Set(data.crafts.map(craft => craft.category))];
    return cats;
  }, []);

  // Handle category change and reset display count
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setDisplayCount(isMobile ? 4 : 12);
  };

  // Handle sort change and reset display count
  const handleSortChange = (sort: SortOption) => {
    setSortBy(sort);
    setDisplayCount(isMobile ? 4 : 12);
  };

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let products = [...data.crafts];

    // Filter by category
    if (selectedCategory !== 'All') {
      products = products.filter(craft => craft.category === selectedCategory);
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        products.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        products.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        products.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // Keep default order (or sort by featured/id)
        break;
    }

    return products;
  }, [selectedCategory, sortBy]);

  // Products to display (limited by displayCount)
  const displayedProducts = useMemo(() => {
    return filteredProducts.slice(0, displayCount);
  }, [filteredProducts, displayCount]);

  // Check if there are more products to show
  const hasMore = displayCount < filteredProducts.length;

  // Load more handler
  const handleLoadMore = () => {
    setDisplayCount(prev => prev + 4);
  };

  return (
    <section className="min-h-screen bg-[#F5F5DC] py-16 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2c1810] mb-4 font-serif">
            Our Products
          </h1>
          <p className="text-lg text-[#5c4033] max-w-2xl mx-auto">
            Explore our curated collection of authentic Kashmiri handicrafts, each piece a testament to centuries of tradition and artistry.
          </p>
        </motion.div>

        {/* Filters & Sort */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between"
        >
          {/* Category Filter */}
          <div className="w-full md:w-auto">
            <label className="block text-sm font-medium text-[#5c4033] mb-2">
              Filter by Category
            </label>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-[#8B4513] text-white shadow-lg'
                      : 'bg-white text-[#5c4033] hover:bg-[#8B4513]/10 border border-[#8B4513]/20'
                  }`}
                  aria-pressed={selectedCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Sort */}
          <div className="w-full md:w-auto">
            <label htmlFor="sort" className="block text-sm font-medium text-[#5c4033] mb-2">
              Sort By
            </label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => handleSortChange(e.target.value as SortOption)}
              className="w-full md:w-auto px-4 py-2 rounded-lg border border-[#8B4513]/20 bg-white text-[#5c4033] focus:outline-none focus:ring-2 focus:ring-[#8B4513] cursor-pointer"
            >
              <option value="default">Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>
        </motion.div>

        {/* Product Count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm text-[#5c4033] mb-6"
        >
          Showing {displayedProducts.length} of {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
        </motion.p>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
        >
          {displayedProducts.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              {/* Product Image */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.featured && (
                  <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-[#8B4513] text-white text-xs font-semibold px-2 sm:px-3 py-1 rounded-full">
                    Featured
                  </div>
                )}
                {product.originalPrice > product.price && (
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-red-500 text-white text-xs font-semibold px-2 sm:px-3 py-1 rounded-full">
                    SALE
                  </div>
                )}
              </div>

              {/* Product Details */}
              <div className="p-4 sm:p-5">
                {/* Category Badge */}
                <div className="inline-block mb-2">
                  <span className="text-xs font-medium text-[#8B4513] bg-[#8B4513]/10 px-2 py-1 rounded">
                    {product.category}
                  </span>
                </div>

                {/* Product Name */}
                <h3 className="text-base sm:text-lg font-semibold text-[#2c1810] mb-2 line-clamp-1 group-hover:text-[#8B4513] transition-colors">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#5c4033] mb-2 sm:mb-3 line-clamp-2">
                  {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-3 h-3 sm:w-4 sm:h-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-500'
                            : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-[#5c4033]">
                    {product.rating} ({product.reviewCount})
                  </span>
                </div>

                {/* Material & Craftsmanship */}
                <div className="mb-2 sm:mb-3 space-y-1">
                  <p className="text-xs text-[#5c4033]">
                    <span className="font-medium">Material:</span> {product.material}
                  </p>
                  <p className="text-xs text-[#5c4033]">
                    <span className="font-medium">Craft:</span> {product.craftsmanship}
                  </p>
                </div>

                {/* Tags */}
                {product.tags && product.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-2 sm:mb-3">
                    {product.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs text-[#5c4033] bg-[#F5F5DC] px-2 py-0.5 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Price */}
                <div className="flex items-baseline gap-2 pt-2 sm:pt-3 border-t border-[#8B4513]/10">
                  <span className="text-xl sm:text-2xl font-bold text-[#2c1810]">
                    ₹{product.price.toLocaleString()}
                  </span>
                  {product.originalPrice > product.price && (
                    <span className="text-sm text-gray-400 line-through">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Show More Button */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mt-12"
          >
            <button
              onClick={handleLoadMore}
              className="px-8 py-4 bg-[#8B4513] text-white font-semibold rounded-full hover:bg-[#A0522D] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Show More Products
            </button>
          </motion.div>
        )}

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-xl text-[#5c4033]">
              No products found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default OurProducts;
