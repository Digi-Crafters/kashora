'use client';

import { motion } from 'framer-motion';
import { Playfair_Display, Poppins } from 'next/font/google';
import { useState } from 'react';
import toast from 'react-hot-toast';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const poppins = Poppins({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600'],
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('This is a demo - Form submitted successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#1C8076] via-[#2a9d8f] to-[#1c8076]">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={`${playfair.className} text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4`}>
              Get in Touch
            </h2>
            <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-[#D4AF37] to-transparent mx-auto" />
            <p className={`${poppins.className} text-white/90 mt-4 sm:mt-6 text-base sm:text-lg px-4`}>
              We&apos;d love to hear from you. Send us a message below.
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.form 
            onSubmit={handleSubmit}
            className="space-y-4 sm:space-y-6 bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-[#D4AF37]/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <label htmlFor="name" className={`${poppins.className} text-white block mb-2 text-sm sm:text-base`}>
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 border border-[#D4AF37]/20 rounded-lg 
                         text-white placeholder-white/50 focus:outline-none focus:border-[#D4AF37]/50
                         transition-all duration-300"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className={`${poppins.className} text-white block mb-2`}>
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 border border-[#D4AF37]/20 rounded-lg 
                         text-white placeholder-white/50 focus:outline-none focus:border-[#D4AF37]/50
                         transition-all duration-300"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className={`${poppins.className} text-white block mb-2`}>
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-white/10 border border-[#D4AF37]/20 rounded-lg 
                         text-white placeholder-white/50 focus:outline-none focus:border-[#D4AF37]/50
                         transition-all duration-300 resize-none"
                placeholder="Enter your message"
                required
              />
            </div>

            <motion.button
              type="submit"
              className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-[#D4AF37] text-white font-semibold rounded-lg 
                       hover:bg-[#B8941F] hover:shadow-2xl hover:scale-105 
                       transition-all duration-300 group relative overflow-hidden text-sm sm:text-base"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Send Message</span>
        
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;