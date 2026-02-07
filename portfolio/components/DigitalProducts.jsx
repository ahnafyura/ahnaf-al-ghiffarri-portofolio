'use client';

import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import ProductCard from './ProductCard';
import { digitalProducts } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

export default function DigitalProducts() {
  return (
    <section id="products" className="section-padding bg-gradient-to-b from-black/20 to-transparent">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Digital Products"
          subtitle="Premium resources and courses to accelerate your learning journey"
        />

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {digitalProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* CTA to Lynk.id */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-3xl font-orbitron font-bold mb-4">
            Discover More on <span className="text-cyan-400 text-glow">Lynk.id</span>
          </h3>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Access my complete collection.
          </p>
          <motion.a
            href="https://lynk.id/ahnafalghiffarri"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 
                       rounded-lg font-bold text-lg hover:from-cyan-400 hover:to-blue-400 
                       transition-all duration-300 shadow-2xl shadow-cyan-500/50"
          >
            Visit My Lynk.id Profile
            <ArrowRight size={24} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
