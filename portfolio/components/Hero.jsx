'use client';

import { Download } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const [nameText, setNameText] = useState('');
  const [interestText, setInterestText] = useState('');
  const [interestIndex, setInterestIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const fullName = 'Ahnaf Ahtasyafi';
  const interests = ['Computer Vision', 'AI Researcher', 'Robotics', 'Website Dev'];

  // Name typing effect
  useEffect(() => {
    if (nameText.length < fullName.length) {
      const timeout = setTimeout(() => {
        setNameText(fullName.slice(0, nameText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [nameText]);

  // Interest cycling effect
  useEffect(() => {
    const currentInterest = interests[interestIndex];

    if (!isDeleting && interestText.length < currentInterest.length) {
      const timeout = setTimeout(() => {
        setInterestText(currentInterest.slice(0, interestText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && interestText.length === currentInterest.length) {
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(timeout);
    } else if (isDeleting && interestText.length > 0) {
      const timeout = setTimeout(() => {
        setInterestText(currentInterest.slice(0, interestText.length - 1));
      }, 50);
      return () => clearTimeout(timeout);
    } else if (isDeleting && interestText.length === 0) {
      setIsDeleting(false);
      setInterestIndex((prev) => (prev + 1) % interests.length);
    }
  }, [interestText, isDeleting, interestIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-cyan-400 font-semibold flex items-center gap-2"
            >
              <Sparkles size={20} />
              Welcome to my portfolio
            </motion.p>

            <h1 className="font-orbitron text-5xl md:text-7xl font-bold text-glow leading-tight">
              {nameText}
              <span className="animate-pulse">|</span>
            </h1>
          </div>

          <div className="h-20">
            <p className="text-2xl md:text-3xl text-slate-300">
              I'm Passionate about{' '}
              <span className="text-cyan-400 font-bold">
                {interestText}
                <span className="animate-pulse">|</span>
              </span>
            </p>
          </div>

          <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
            Computer Engineering student at ITS specializing in Computer Vision, Robotics,
            and Web Development.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Explore My Work
            </motion.a>

            <motion.a
              href="/document/CV_AHNAF AL GHIFFARRI AHTASYAFI_ITS.docx.pdf"
              download="CV_AHNAF AL GHIFFARRI AHTASYAFI_ITS.docx.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-card rounded-lg font-semibold 
                         hover:bg-white/20 transition-all duration-300"
            >
              Download CV
            </motion.a>
          </div>
        </motion.div>

        {/* Right Content - 3D Orb */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative w-full h-[500px] flex items-center justify-center">
            {/* Animated gradient orb */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 opacity-30 blur-3xl"
            />

            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10 w-96 h-96 rounded-full glass-card glow-effect 
                         flex items-center justify-center"
            >
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-cyan-500/50">
                <Image
                  src="/img/fotoku.png"
                  alt="Ahnaf Ahtasyafi"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700"
                  priority
                />
              </div>

              {/* Tech icons floating */}
              <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 20 + i * 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `rotate(${i * 45}deg) translateY(-150px)`
                    }}
                  >
                    <div className="w-3 h-3 rounded-full bg-cyan-400 glow-effect"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={32} className="text-cyan-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
