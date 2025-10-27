'use client';

import { motion } from 'framer-motion';
import { Playfair_Display, Inter } from 'next/font/google';
import Image from 'next/image';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
});

export default function OurStory() {
  const timeline = [
    {
      year: "1985",
      title: "Humble Beginnings",
      description: "Started in a small Srinagar workshop with three generations of artisans preserving ancient Kashmiri crafts.",
      image: "https://images.unsplash.com/photo-1669213471105-c1a3bbaae48c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470"
    },
    {
      year: "1998",
      title: "First Recognition",
      description: "Awarded the National Handicrafts Excellence Award for preserving traditional Pashmina weaving techniques.",
      image: "https://images.unsplash.com/photo-1745340706418-489eb5cad9d9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470"
    },
    {
      year: "2010",
      title: "Global Reach",
      description: "Expanded internationally, bringing Kashmiri craftsmanship to audiences across 15 countries.",
      image: "https://images.unsplash.com/photo-1706794441044-2c65e66e6bdc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1374"
    },
    {
      year: "2023",
      title: "Digital Heritage",
      description: "Launched Kashora to bridge traditional artisans with the digital world while maintaining authenticity.",
      image: "https://images.unsplash.com/photo-1761473840582-d3fd7da85589?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
    }
  ];

  const values = [
    {
      icon: "🔄",
      title: "Sustainable Craft",
      description: "Every piece is created with eco-friendly materials and traditional methods"
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Family Legacy",
      description: "Preserving techniques passed down through generations of Kashmiri artisans"
    },
    {
      icon: "🎨",
      title: "Artistic Integrity",
      description: "No shortcuts, no compromises - only authentic craftsmanship"
    },
    {
      icon: "💝",
      title: "Community First",
      description: "Supporting local artisan communities and fair trade practices"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E2C9AF] to-[#F7EFE4] overflow-hidden" id="our-story">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C8076]/10 to-[#C8A55A]/10"></div>
        
        {/* Floating Elements */}
        <motion.div 
          className="absolute top-10 left-5 w-16 sm:w-20 h-16 sm:h-20 bg-[#C8A55A]/20 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-10 right-5 w-16 h-16 bg-[#12766D]/20 rounded-full blur-xl"
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-1 bg-gradient-to-r from-[#12766D] to-[#C8A55A] mx-auto mb-6 sm:mb-8"
            />
            
            <h1 className={`${playfair.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#5A3A28] mb-4 sm:mb-6 px-4`}>
              Our Story
            </h1>
            
            <p className={`${inter.className} text-base sm:text-lg md:text-xl text-[#5A3A28]/80 leading-relaxed max-w-3xl mx-auto px-4`}>
              For three generations, we&apos;ve woven the soul of Kashmir into every thread, 
              preserving ancient crafts while embracing the future. Our journey is one of 
              passion, perseverance, and the timeless beauty of handmade artistry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className={`${playfair.className} text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#5A3A28] mb-12 sm:mb-16 px-4`}>
            Our Journey Through Time
          </h2>
          
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#12766D] to-[#C8A55A] transform md:-translate-x-1/2"></div>
            
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center gap-6 sm:gap-8 mb-12 sm:mb-16 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Year Marker */}
                <div className="absolute left-4 md:left-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-[#12766D] rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 z-10"></div>
                
                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'} ml-12 sm:ml-16 md:ml-0`}>
                  <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-[#E2C9AF] hover:shadow-xl transition-all duration-300">
                    <span className="text-[#C8A55A] font-bold text-base sm:text-lg">{item.year}</span>
                    <h3 className={`${playfair.className} text-lg sm:text-xl font-semibold text-[#5A3A28] mt-2`}>
                      {item.title}
                    </h3>
                    <p className={`${inter.className} text-[#5A3A28]/70 mt-3`}>
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Image Container */}
                <div className="flex-1 w-full">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-[#12766D]/10 to-[#C8A55A]/10 p-3 sm:p-4"
                  >
                    {/* Decorative Border */}
                    <div className="absolute inset-0 border-2 border-[#C8A55A]/30 rounded-xl sm:rounded-2xl pointer-events-none"></div>
                    
                    {/* Image with proper aspect ratio */}
                    <div className="relative h-48 sm:h-64 md:h-80 w-full rounded-lg overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        quality={90}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R"
                      />
                    </div>
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C8076]/10 to-transparent pointer-events-none"></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#12766D]/5 to-[#C8A55A]/5">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className={`${playfair.className} text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#5A3A28] mb-12 sm:mb-16 px-4`}>
            Our Values
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-[#E2C9AF] hover:shadow-xl transition-all duration-300 group-hover:transform group-hover:scale-105 h-full flex flex-col">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{value.icon}</div>
                  <h3 className={`${playfair.className} text-lg sm:text-xl font-semibold text-[#5A3A28] mb-2 sm:mb-3`}>
                    {value.title}
                  </h3>
                  <p className={`${inter.className} text-[#5A3A28]/70 flex-grow`}>
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Quote */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="text-4xl sm:text-5xl md:text-6xl text-[#C8A55A] mb-3 sm:mb-4">&ldquo;</div>
            <blockquote className={`${playfair.className} text-xl sm:text-2xl md:text-3xl text-[#5A3A28] italic mb-6 sm:mb-8 px-4`}>
              Every thread tells a story, every pattern holds a memory. We don&apos;t just create crafts; 
              we preserve the soul of Kashmir for generations to come.
            </blockquote>
            <div className={`${inter.className} text-[#12766D] font-semibold`}>
              — Abdul Rahman, Third Generation Artisan
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-[#12766D] to-[#1C8076]">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className={`${playfair.className} text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 px-4`}>
              Join Our Journey
            </h2>
            <p className={`${inter.className} text-white/80 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-4`}>
              Become part of our story and help preserve the rich heritage of Kashmiri craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#C8A55A] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-[#D4B76E] transition-colors text-sm sm:text-base"
              >
                Explore Artisan Stories
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-[#12766D] transition-all text-sm sm:text-base"
              >
                Support Our Mission
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}