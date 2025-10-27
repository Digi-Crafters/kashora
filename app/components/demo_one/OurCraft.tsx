"use client";

import React, { useState } from "react";
import data from "../../data/ourCraft.json";

const OurCraft = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(data.crafts.map(craft => craft.category))];
  
  const filteredCrafts = selectedCategory === "All" 
    ? data.crafts 
    : data.crafts.filter(craft => craft.category === selectedCategory);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#E2C9AF]/30 via-white to-[#1C8076]/10 py-24 px-6">
      
      {/* Decorative Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="h-full w-full" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 15 L35 25 L45 25 L37 32 L40 42 L30 35 L20 42 L23 32 L15 25 L25 25 Z' fill='%23D4AF37' /%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-[#1C8076] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our Crafts
          </h2>
          <p className="text-lg md:text-xl text-gray-700/90 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Each piece is a testament to centuries-old traditions, handcrafted by skilled artisans who pour their heart and soul into every creation.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-8 py-3 font-semibold transition-all duration-500 border-2 ${
                  selectedCategory === category
                    ? 'bg-[#1C8076] text-white border-[#1C8076] shadow-xl scale-105'
                    : 'bg-white/80 backdrop-blur-sm text-[#1C8076] border-[#D4AF37]/30 hover:border-[#D4AF37] hover:bg-[#D4AF37]/5'
                }`}
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredCrafts.map((craft) => (
            <div
              key={craft.id}
              className="group relative bg-white/60 backdrop-blur-sm overflow-hidden transition-all duration-700 hover:bg-white hover:shadow-2xl"
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={craft.image}
                  alt={craft.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C8076]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Discount Badge */}
                {craft.originalPrice && (
                  <div className="absolute top-4 right-4 bg-[#D4AF37] text-white px-4 py-2 text-sm font-bold">
                    SAVE {Math.round(((craft.originalPrice - craft.price) / craft.originalPrice) * 100)}%
                  </div>
                )}

                {/* Category Tag */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#1C8076] px-4 py-2 text-xs font-semibold tracking-wide border border-[#D4AF37]/30">
                  {craft.category.toUpperCase()}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-8">
                <h3 className="font-serif text-2xl font-bold text-[#1C8076] mb-3 group-hover:text-[#D4AF37] transition-colors duration-300" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {craft.name}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {craft.description}
                </p>

                {/* Details */}
                <div className="space-y-3 mb-6 text-sm text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  <div className="flex items-start gap-3">
                    <div className="min-w-[4px] h-[4px] rounded-full bg-[#D4AF37] mt-2"></div>
                    <span><span className="font-semibold text-[#1C8076]">Material:</span> {craft.material}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="min-w-[4px] h-[4px] rounded-full bg-[#D4AF37] mt-2"></div>
                    <span><span className="font-semibold text-[#1C8076]">Craftsmanship:</span> {craft.craftsmanship}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="min-w-[4px] h-[4px] rounded-full bg-[#D4AF37] mt-2"></div>
                    <span><span className="font-semibold text-[#1C8076]">Delivery:</span> {craft.deliveryTime}</span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < Math.floor(craft.rating) ? 'text-[#D4AF37]' : 'text-gray-300'} fill-current`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 font-medium">
                    {craft.rating} ({craft.reviewCount} reviews)
                  </span>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent mb-6"></div>

                {/* Price */}
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="text-3xl font-bold text-[#1C8076]" style={{ fontFamily: 'Playfair Display, serif' }}>
                    ₹{craft.price.toLocaleString()}
                  </span>
                  {craft.originalPrice && (
                    <span className="text-lg text-gray-400 line-through">
                      ₹{craft.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>

                {/* View Details Button */}
                <button 
                  className="w-full bg-[#1C8076] text-white py-4 font-semibold transition-all duration-300 hover:bg-[#D4AF37] group-hover:shadow-xl"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurCraft;