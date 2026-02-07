'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image'; // Import sudah benar, sekarang kita pakai!

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -10 }}
      className="glass-card rounded-2xl overflow-hidden group cursor-pointer perspective-1000 flex flex-col h-full"
    >
      {/* Project Image Container */}
      <div className="relative h-48 bg-slate-900 overflow-hidden">
        {/* 1. DISINI LETAK PERBAIKANNYA: MEMANGGIL KOMPONEN IMAGE */}
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay Gradient (Supaya teks tetap terbaca/estetik) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-60"></div>

        {/* Hover Overlay (Efek Gelap saat di-hover agar tombol Github lebih jelas) */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Project Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-slate-400 text-sm mb-4 line-clamp-3 flex-grow">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs text-cyan-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg 
                       font-semibold text-sm text-center text-white hover:from-cyan-400 hover:to-blue-400 
                       transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
          >
            View Project
            <ExternalLink size={16} />
          </motion.a>

          <motion.a
            href={project.link} // Biasanya link repo github sama dengan link project jika belum deploy
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 glass-card rounded-lg hover:bg-white/20 transition-all duration-300 text-white"
          >
            <Github size={20} />
          </motion.a>
        </div>
      </div>

      {/* Glow effect on hover container */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-500/30 rounded-2xl transition-colors duration-500 pointer-events-none"></div>
    </motion.div>
  );
}