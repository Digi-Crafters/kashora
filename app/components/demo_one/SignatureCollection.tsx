"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import data from "../../data/ourCraft.json";

const SignatureCollection = () => {
  const [showAll, setShowAll] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Get only featured items for signature collection
  const signatureItems = data.crafts.filter(craft => craft.featured);
  
  // Determine how many items to show based on screen size and showAll state
  const getDisplayItems = () => {
    if (showAll) return signatureItems;
    return signatureItems;
  };

  const displayItems = getDisplayItems();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#1C8076]/10 via-white to-[#E2C9AF]/30 py-24 px-6" id="collections">
      
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
            Signature Collection
          </h2>
          <p className="text-lg md:text-xl text-gray-700/90 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Our most coveted pieces, handpicked for their exceptional artistry and timeless elegance. These treasures represent the pinnacle of Kashmiri craftsmanship.
          </p>
        </div>

        {/* Products Grid - Shows 2 on mobile, 3 on desktop initially */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 ${!showAll ? 'md:grid-cols-2 lg:grid-cols-3' : ''}`}>
          {(showAll ? displayItems : displayItems.slice(0, isMobile ? 2 : 3)).map((craft, index) => (
            <div
              key={craft.id}
              className="group relative bg-white/70 backdrop-blur-sm overflow-hidden transition-all duration-700 hover:bg-white hover:shadow-2xl"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Featured Badge */}
              <div className="absolute top-6 left-6 z-20 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-white px-5 py-2 text-xs font-bold tracking-widest shadow-lg">
                SIGNATURE
              </div>

              {/* Image Container */}
              <div className="relative h-96 md:h-[28rem] overflow-hidden">
                <Image
                  src={craft.image}
                  alt={craft.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  priority={index < 3}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C8076]/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                
                {/* Decorative Corner Elements */}
                <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Product Info */}
              <div className="p-8 md:p-10">
                {/* Category & Rating Row */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-[#1C8076] tracking-widest border-b-2 border-[#D4AF37] pb-1">
                    {craft.category.toUpperCase()}
                  </span>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#D4AF37] fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                    <span className="text-sm font-bold text-gray-700">{craft.rating}</span>
                  </div>
                </div>

                <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#1C8076] mb-4 leading-tight group-hover:text-[#D4AF37] transition-colors duration-300" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {craft.name}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {craft.description}
                </p>

                {/* Craftsmanship Highlight */}
                <div className="mb-6 p-4 bg-gradient-to-r from-[#E2C9AF]/20 to-transparent border-l-4 border-[#D4AF37]">
                  <p className="text-sm text-[#1C8076] font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {craft.craftsmanship}
                  </p>
                  <p className="text-xs text-gray-600 mt-1">{craft.material}</p>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div>
                    <p className="text-gray-500 text-xs mb-1">DELIVERY</p>
                    <p className="font-semibold text-[#1C8076]">{craft.deliveryTime}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs mb-1">REVIEWS</p>
                    <p className="font-semibold text-[#1C8076]">{craft.reviewCount}+</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-6"></div>

                {/* Price Section */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-[#1C8076]" style={{ fontFamily: 'Playfair Display, serif' }}>
                      ₹{craft.price.toLocaleString()}
                    </div>
                    {craft.originalPrice && (
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-base text-gray-400 line-through">
                          ₹{craft.originalPrice.toLocaleString()}
                        </span>
                        <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-1">
                          SAVE {Math.round(((craft.originalPrice - craft.price) / craft.originalPrice) * 100)}%
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* CTA Button */}
                <button 
                  className="w-full bg-gradient-to-r from-[#1C8076] to-[#155f57] text-white py-4 font-semibold transition-all duration-500 hover:from-[#D4AF37] hover:to-[#B8941F] group-hover:shadow-2xl transform hover:scale-[1.02]"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Explore This Masterpiece
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && signatureItems.length > (isMobile ? 2 : 3) && (
          <div className="text-center mt-16">
            <button 
              onClick={() => setShowAll(true)}
              className="group relative overflow-hidden bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-white px-12 py-5 text-lg font-semibold transition-all duration-500 hover:shadow-2xl hover:scale-105"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <span className="relative z-10 flex items-center gap-3">
                Discover More Signatures
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"></div>
            </button>
          </div>
        )}

        {/* Show Less Button */}
        {showAll && signatureItems.length > (isMobile ? 2 : 3) && (
          <div className="text-center mt-16">
            <button 
              onClick={() => setShowAll(false)}
              className="border-2 border-[#1C8076] text-[#1C8076] px-12 py-4 text-lg font-semibold transition-all duration-300 hover:bg-[#1C8076] hover:text-white hover:shadow-xl"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Show Less
            </button>
          </div>
        )}
      </div>

      {/* Add fadeInUp animation */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default SignatureCollection;