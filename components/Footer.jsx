'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, BookOpen, Instagram, Mail, MapPin, Heart } from 'lucide-react';

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/ahnafyura', icon: Github },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/ahnafahtasyafi', icon: Linkedin },
  { name: 'Medium', url: 'https://medium.com/@ahnaf', icon: BookOpen },
  { name: 'Instagram', url: 'https://instagram.com/ahnafcx', icon: Instagram },
];

export default function Footer() {
  return (
    <footer id="contact" className="section-padding border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <h3 className="font-orbitron text-2xl font-bold mb-4 text-glow">
              Ahnaf Ahtasyafi
            </h3>
            <p className="text-slate-400 mb-6">
              AI Researcher & Developer passionate about building intelligent systems

            </p>
            <div className="flex items-center gap-2 text-slate-400">
              <MapPin size={18} />
              <span>Surabaya, Indonesia</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-cyan-400">Quick Links</h4>
            <ul className="space-y-3">
              {['About', 'Research', 'Projects', 'Products'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-cyan-400">Connect with me</h4>
            <a
              href="mailto:ahnaf@example.com"
              className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors mb-6"
            >
              <Mail size={20} />
              <span>ahnafalghiffarriahtasyafi@gmail.com</span>
            </a>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 glass-card rounded-lg hover:bg-white/20 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm">
              Copyright © {new Date().getFullYear()} Ahnaf Ahtasyafi.
            </p>
            <p className="text-slate-400 text-sm flex items-center gap-2">
              Built with Next.js & Framer Motion
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
    </footer>
  );
}
