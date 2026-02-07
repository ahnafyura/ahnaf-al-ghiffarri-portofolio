'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import WeatherWidget from './WeatherWidget';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Research', href: '#research' },
    { name: 'Experience', href: '#experience' }, // Pastikan urutannya sesuai keinginan
    { name: 'Projects', href: '#projects' },
    { name: 'Products', href: '#products' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-card shadow-2xl py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo (Sekarang bisa diklik untuk ke atas) */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="relative flex items-center justify-center cursor-pointer"
          >
            <Image
              src="/img/logoku.png"
              alt="Ahnaf Logo"
              width={50} // Ukuran sedikit disesuaikan agar proporsional
              height={50}
              className="object-contain"
              priority
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium text-sm lg:text-base"
                whileHover={{ scale: 1.1 }}
              >
                {link.name}
              </motion.a>
            ))}
            {/* Weather Widget Desktop */}
            <div className="pl-4 border-l border-white/10">
              <WeatherWidget />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu (DIPERBAIKI) */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="glass-card mt-2 rounded-xl overflow-hidden border border-white/10">
                {/* PERBAIKAN UTAMA DISINI: 
                   max-h-[75vh] dan overflow-y-auto 
                   membuat menu bisa discroll jika terlalu panjang di HP
                */}
                <div className="flex flex-col p-6 space-y-4 max-h-[75vh] overflow-y-auto custom-scrollbar">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-slate-300 hover:text-cyan-400 hover:bg-white/5 px-4 py-3 rounded-lg transition-all duration-300 font-medium text-lg block"
                    >
                      {link.name}
                    </a>
                  ))}
                  
                  {/* Garis Pembatas */}
                  <div className="h-px bg-white/10 my-2 mx-4" />

                  {/* Weather Widget Mobile */}
                  <div className="px-4 pb-2">
                    <p className="text-xs text-slate-500 mb-2 uppercase tracking-wider">Local Weather</p>
                    <WeatherWidget />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}