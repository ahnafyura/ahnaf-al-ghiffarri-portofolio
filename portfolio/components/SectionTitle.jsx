'use client';

import { motion } from 'framer-motion';

export default function SectionTitle({ title, subtitle, align = 'center' }) {
  const alignmentClass = align === 'center' ? 'text-center' : align === 'left' ? 'text-left' : 'text-right';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${alignmentClass}`}
    >
      <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-glow mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mt-6 h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
    </motion.div>
  );
}
