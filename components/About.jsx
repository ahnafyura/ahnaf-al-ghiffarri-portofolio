'use client';

import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { aboutText } from '@/lib/data';
import { Code2, Brain, Cpu, Zap } from 'lucide-react';

export default function About() {
  const skills = [
    { icon: Brain, name: 'AI & Machine Learning', color: 'text-cyan-400' },
    { icon: Code2, name: 'Full-Stack Development', color: 'text-blue-400' },
    { icon: Cpu, name: 'Computer Vision', color: 'text-purple-400' },
    { icon: Zap, name: 'Robotics & IoT', color: 'text-pink-400' },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="About Me"
          subtitle="Bridging the gap between research and real-world applications"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-card p-8 rounded-2xl">
              <p className="text-slate-300 text-lg leading-relaxed">
                {aboutText.bio}
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="glass-card p-6 rounded-xl hover:bg-white/15 transition-all duration-300"
                >
                  <skill.icon className={`${skill.color} mb-3`} size={32} />
                  <p className="font-semibold text-sm">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {aboutText.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card p-8 rounded-2xl text-center hover:glow-effect transition-all duration-300"
              >
                <div className="text-5xl font-orbitron font-bold text-cyan-400 mb-2 text-glow">
                  {stat.value}
                </div>
                <div className="text-slate-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
