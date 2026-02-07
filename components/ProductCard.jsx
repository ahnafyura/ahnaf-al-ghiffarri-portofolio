'use client';

import { motion } from 'framer-motion';
// 1. IMPORT IKON BARU (BookOpen, Search, Swords)
import {
  ExternalLink,
  Sparkles,
  BookOpen,
  Search,
  Swords
} from 'lucide-react';

// 2. MAPPING NAMA IKON DARI DATA.JS KE KOMPONEN ASLI
const iconMap = {
  BookOpen,  // Untuk GPT Guide
  Search,    // Untuk DeepSeek Research
  Swords,    // Untuk Battle of Intelligence
  Sparkles,  // Fallback default
};

export default function ProductCard({ product, index }) {
  // 3. SAFETY CHECK: Jika nama ikon salah/tidak ada, pakai Sparkles agar tidak crash
  const Icon = iconMap[product.icon] || Sparkles;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -10 }}
      className="glass-card rounded-2xl p-8 hover:glow-effect transition-all duration-300 group relative overflow-hidden"
    >
      {/* Background Glow (Hiasan) */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl -z-10 group-hover:bg-cyan-500/20 transition-colors"></div>

      {/* Icon */}
      <div className="mb-6 p-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 w-fit group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/10">
        <Icon className="text-cyan-400" size={40} />
      </div>

      {/* Content */}
      <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
        {product.title}
      </h3>

      <p className="text-slate-400 mb-6 leading-relaxed h-20 line-clamp-3">
        {product.description}
      </p>

      {/* Price & CTA */}
      <div className="flex items-center justify-between mt-auto">
        <div className="text-2xl font-orbitron font-bold text-cyan-400 text-glow">
          {product.price}
        </div>

        <motion.a
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg 
                     font-semibold text-sm text-white hover:from-cyan-400 hover:to-blue-400 
                     transition-all duration-300 flex items-center gap-2 shadow-lg shadow-cyan-500/30"
        >
          Access
          <ExternalLink size={16} />
        </motion.a>
      </div>
    </motion.div>
  );
}