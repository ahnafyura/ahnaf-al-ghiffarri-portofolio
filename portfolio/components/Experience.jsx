'use client';

import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { skills, experiences } from '@/lib/data'; // <--- Import Data dari sini
import {
    Code2,
    Terminal,
    Cpu,
    Globe,
    Database,
    Layers,
    Briefcase,
    GraduationCap
} from 'lucide-react';

// MAPPING IKON (Agar string dari data.js berubah jadi Icon Component)
const iconMap = {
    Code2,
    Terminal,
    Cpu,
    Globe,
    Database,
    Layers,
    Briefcase,
    GraduationCap
};

export default function Experience() {
    return (
        <section id="experience" className="section-padding relative overflow-hidden bg-gradient-to-b from-black/20 to-transparent">
            <div className="max-w-7xl mx-auto">

                {/* === PART 1: TECH ARSENAL === */}
                <div className="mb-24">
                    <SectionTitle
                        title="My Stack"
                        subtitle="The tools and technologies I use"
                    />

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                        {skills.map((skill, index) => {
                            // Ambil ikon dari map
                            const Icon = iconMap[skill.icon] || Code2;

                            return (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{
                                        scale: 1.05,
                                        transition: { duration: 0.2, delay: 0 }
                                    }}
                                    className="glass-card p-4 flex items-center gap-4 hover:bg-white/10 transition-colors group cursor-default"
                                >
                                    <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                                        <Icon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white">{skill.name}</h4>
                                        <p className="text-xs text-slate-400">{skill.level}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* === PART 2: EXPERIENCE TIMELINE === */}
                <div>
                    <SectionTitle
                        title="My Journey"
                        subtitle="Education and professional milestones"
                    />

                    <div className="mt-16 relative">
                        {/* Garis Tengah Vertikal */}
                        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500/20 via-cyan-500 to-purple-600/20 rounded-full" />

                        <div className="space-y-12">
                            {experiences.map((exp, index) => {
                                const isEven = index % 2 === 0;

                                return (
                                    <motion.div
                                        key={exp.id}
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        whileHover={{
                                            scale: 1.05,
                                            transition: { duration: 0.2, delay: 0 }
                                        }}
                                        className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''
                                            } items-center w-full`}
                                    >
                                        {/* Spacer Kosong (Untuk membuat layout zig-zag) */}
                                        <div className="hidden md:block w-1/2" />

                                        {/* Dot di Tengah */}
                                        <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full shadow-[0_0_15px_#22d3ee] z-10 border-4 border-[#0f172a]" />

                                        {/* Content Card */}
                                        <div className="w-full md:w-1/2 pl-8 md:pl-0 md:px-8">
                                            <div className={`glass-card p-6 relative hover:border-cyan-500/50 transition-colors group ${isEven ? 'md:text-left' : 'md:text-right'
                                                }`}>

                                                <div className={`flex items-center gap-2 text-cyan-400 mb-2 ${isEven ? 'md:justify-start' : 'md:justify-end'
                                                    }`}>
                                                    {exp.type === 'work' ? <Briefcase size={16} /> : <GraduationCap size={16} />}
                                                    <span className="text-sm font-mono">{exp.period}</span>
                                                </div>

                                                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                                                    {exp.role}
                                                </h3>
                                                <p className="text-slate-300 font-semibold mb-3">{exp.company}</p>
                                                <p className="text-slate-400 text-sm leading-relaxed">
                                                    {exp.description}
                                                </p>

                                                {/* Panah Kecil menunjuk ke garis tengah */}
                                                <div className={`hidden md:block absolute top-6 w-4 h-4 bg-white/10 backdrop-blur-md border-t border-l border-white/20 transform rotate-45 ${isEven
                                                    ? '-left-2 border-r-0 border-b-0'
                                                    : '-right-2 border-l-0 border-t-0 rotate-[225deg]'
                                                    }`} />
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}