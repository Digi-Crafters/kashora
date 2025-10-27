"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaInstagram, FaMapMarkerAlt, FaPhone, FaFacebookF, FaTwitter, FaHeart } from 'react-icons/fa';

const contactLinks = [
  {
    name: 'WhatsApp',
    href: 'https://wa.me/919999999999',
    icon: FaWhatsapp,
    color: 'text-green-600',
    hoverColor: 'hover:bg-green-50',
    description: 'Chat with us instantly',
  },
  {
    name: 'Email',
    href: 'mailto:hello@kashora.com',
    icon: FaEnvelope,
    color: 'text-[#8B4513]',
    hoverColor: 'hover:bg-[#8B4513]/5',
    description: 'Drop us a message',
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/kashora',
    icon: FaInstagram,
    color: 'text-pink-600',
    hoverColor: 'hover:bg-pink-50',
    description: 'Follow our journey',
  },
];

const contactInfo = [
  {
    icon: FaPhone,
    title: 'Phone',
    detail: '+91 999-999-9999',
  },
  {
    icon: FaMapMarkerAlt,
    title: 'Location',
    detail: 'Srinagar, Kashmir',
  },
];

const footerLinks = {
  shop: [
    { name: 'New Arrivals', href: '#' },
    { name: 'Best Sellers', href: '#' },
    { name: 'Collections', href: '#' },
    { name: 'Sale', href: '#' },
  ],
  about: [
    { name: 'Our Story', href: '#' },
    { name: 'Artisans', href: '#' },
    { name: 'Sustainability', href: '#' },
    { name: 'Blog', href: '#' },
  ],
  support: [
    { name: 'FAQ', href: '#' },
    { name: 'Shipping', href: '#' },
    { name: 'Returns', href: '#' },
    { name: 'Care Guide', href: '#' },
  ],
};

const socialLinks = [
  { icon: FaInstagram, href: 'https://instagram.com/kashora', label: 'Instagram' },
  { icon: FaFacebookF, href: 'https://facebook.com/kashora', label: 'Facebook' },
  { icon: FaTwitter, href: 'https://twitter.com/kashora', label: 'Twitter' },
  { icon: FaWhatsapp, href: 'https://wa.me/919999999999', label: 'WhatsApp' },
];

const ContactAndFooter = () => {
  return (
    <div className="w-full bg-gradient-to-br from-[#F5F5DC] via-[#F5F5DC] to-[#E8E4D0]">
      {/* Contact Section */}
      <section className="w-full flex flex-col items-center justify-center px-4 py-12 sm:py-16 overflow-x-hidden">
        <div className="max-w-5xl w-full">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2c1810] mb-3 sm:mb-4 font-serif">
              Get in Touch
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#8B4513] to-[#A0522D] mx-auto mb-3 sm:mb-4" />
            <p className="text-sm sm:text-base text-[#5c4033] max-w-2xl mx-auto px-4">
              We&apos;d love to hear from you! Whether you have questions about our products or just want to say hello.
            </p>
          </motion.div>

          {/* Contact Methods */}
          <div className="grid sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
            {contactLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`group flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-xl border-2 border-transparent ${link.hoverColor} hover:border-[#8B4513]/20 transition-all duration-300 bg-white/60 backdrop-blur-sm shadow-md hover:shadow-lg`}
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-white to-[#F5F5DC] shadow-md flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300">
                    <IconComponent className={`text-2xl sm:text-3xl ${link.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <div className="text-center">
                    <h3 className="text-base sm:text-lg font-bold text-[#2c1810] mb-0.5">
                      {link.name}
                    </h3>
                    <p className="text-xs text-[#5c4033]">
                      {link.description}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Contact Info Cards */}
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-[#8B4513]/10 shadow-sm"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#8B4513] flex items-center justify-center flex-shrink-0 shadow-md">
                    <IconComponent className="text-lg sm:text-xl text-white" />
                  </div>
                  <div>
                    <h4 className="text-xs font-medium text-[#5c4033] mb-0.5">
                      {info.title}
                    </h4>
                    <p className="text-sm sm:text-base font-bold text-[#2c1810]">
                      {info.detail}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Business Hours */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center p-3 sm:p-4 bg-white/40 backdrop-blur-sm rounded-xl border border-[#8B4513]/10"
          >
            <p className="text-xs sm:text-sm text-[#5c4033]">
              <span className="font-semibold">Business Hours:</span> Monday - Saturday, 9:00 AM - 6:00 PM IST
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer Section - Seamlessly Connected */}
      <footer className="w-full px-4 pt-8 pb-6 sm:pt-12 sm:pb-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#2c1810] mb-3 sm:mb-4 font-serif">
                Kashora
              </h3>
              <p className="text-xs sm:text-sm text-[#5c4033] mb-3 sm:mb-4 leading-relaxed">
                Authentic Kashmiri craftsmanship, handmade with love and tradition.
              </p>
              {/* Social Links */}
              <div className="flex gap-2 sm:gap-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#8B4513] hover:bg-[#A0522D] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
                      aria-label={social.label}
                    >
                      <IconComponent className="text-white text-sm sm:text-base" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Shop Links */}
            <div>
              <h4 className="text-sm sm:text-base font-bold text-[#2c1810] mb-3 sm:mb-4">Shop</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {footerLinks.shop.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-xs sm:text-sm text-[#5c4033] hover:text-[#8B4513] transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* About Links */}
            <div>
              <h4 className="text-sm sm:text-base font-bold text-[#2c1810] mb-3 sm:mb-4">About</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {footerLinks.about.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-xs sm:text-sm text-[#5c4033] hover:text-[#8B4513] transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="text-sm sm:text-base font-bold text-[#2c1810] mb-3 sm:mb-4">Support</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-xs sm:text-sm text-[#5c4033] hover:text-[#8B4513] transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#8B4513]/20 to-transparent mb-6 sm:mb-8" />

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-[#5c4033] text-center sm:text-left">
              © {new Date().getFullYear()} Kashora. All rights reserved.
            </p>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-[#5c4033]">
              <span>Made with</span>
              <FaHeart className="text-red-500 text-xs animate-pulse" />
              <span>in Kashmir</span>
            </div>
            <div className="flex gap-4 sm:gap-6">
              <a href="#" className="text-xs sm:text-sm text-[#5c4033] hover:text-[#8B4513] transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-xs sm:text-sm text-[#5c4033] hover:text-[#8B4513] transition-colors duration-200">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactAndFooter;