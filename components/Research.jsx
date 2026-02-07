'use client';

import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { certificates, researchPapers } from '@/lib/data';
// 1. KITA IMPORT SEMUA IKON YANG DIBUTUHKAN DARI SINI
import {
  Award,
  Cpu,
  Globe,
  Sparkles,
  Code,
  FileText,
  ExternalLink
} from 'lucide-react';

// 2. MAPPING STRING (DARI DATA.JS) KE KOMPONEN ASLI
const iconMap = {
  Award: Award,
  Cpu: Cpu,
  Globe: Globe,
  Sparkles: Sparkles,
  Code: Code,
  FileText: FileText,
  // Fallback (jaga-jaga jika ada nama ikon typo)
  Eye: Award,
  Cloud: Award
};

export default function Research() {
  return (
    <section id="research" className="section-padding bg-gradient-to-b from-transparent to-black/20">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Research & Achievements"
          subtitle="Milestones in my journey of innovation"
        />

        <div className="grid md:grid-cols-2 gap-12 mt-16">

          {/* KOLOM KIRI: Achievements (Sertifikat & Juara) */}
          <div className="space-y-8">
            <h3 className="text-2xl font-orbitron font-bold text-cyan-400 mb-8 flex items-center gap-3">
              <Award className="w-8 h-8" />
              Achievements
            </h3>

            <div className="grid gap-6">
              {certificates.map((cert, index) => {
                // Mengambil ikon yang benar dari peta
                const IconComponent = iconMap[cert.icon] || Award;

                return (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="glass-card p-6 border-l-4 border-l-cyan-500 flex gap-4 group hover:bg-white/5 transition-all"
                  >
                    <div className="mt-1">
                      <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                        <IconComponent size={24} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {cert.title}
                      </h4>
                      <div className="flex items-center gap-2 text-sm text-cyan-400 mt-1 mb-2">
                        <span>{cert.issuer}</span>
                        <span>•</span>
                        <span>{cert.date}</span>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* KOLOM KANAN: Research Papers (Publikasi) */}
          <div className="space-y-8">
            <h3 className="text-2xl font-orbitron font-bold text-cyan-400 mb-8 flex items-center gap-3">
              <FileText className="w-8 h-8" />
              Independent Publications
            </h3>

            <div className="relative border-l-2 border-white/10 ml-4 space-y-12 pb-12">
              {researchPapers.map((paper, index) => (
                <motion.div
                  key={paper.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8 md:pl-12"
                >
                  {/* Titik Timeline */}
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_10px_#06b6d4] ring-4 ring-[#0f172a]" />

                  <div className="glass-card p-6 hover:border-cyan-500/50 transition-colors group">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-sm font-mono text-cyan-400 bg-cyan-950/30 px-3 py-1 rounded-full border border-cyan-500/20">
                        {paper.year}
                      </span>
                      <ExternalLink size={18} className="text-slate-500 group-hover:text-cyan-400 transition-colors cursor-pointer" />
                    </div>

                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {paper.title}
                    </h4>
                    <p className="text-sm text-cyan-200/80 mb-4 italic">
                      {paper.venue}
                    </p>
                    <p className="text-slate-400 text-sm">
                      {paper.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}