import { Orbitron, Inter } from 'next/font/google';
import './globals.css';

const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'Ahnaf Ahtasyafi | AI Researcher & Developer',
  description: 'Computer Vision, AI Research, Robotics, and Web Development Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${orbitron.variable} ${inter.variable}`}>
      <body className="font-inter antialiased bg-[#0f172a] text-white selection:bg-cyan-500/30">
        {children}
      </body>
    </html>
  );
}