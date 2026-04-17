import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Layout as LayoutIcon, Smartphone } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left Content */}
        <div className="max-w-3xl z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1] mb-6">
              MERHABA, <br />
              BEN <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">EREN.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-10 font-light leading-relaxed max-w-xl">
              11. sınıf bilişim öğrencisiyim. Web teknolojileri, oyun geliştirme ve modern arayüzler üzerine çalışıyorum.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/projects" 
                className="px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2"
              >
                Projelerim <ArrowRight size={20} />
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-slate-900 border border-slate-800 text-slate-100 font-bold rounded-full hover:bg-slate-800 transition-colors"
              >
                Bana Ulaş
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right Content - Floating Cards */}
        <div className="hidden lg:flex relative h-[600px] w-full items-center justify-center perspective-1000">
          {/* Card 1 */}
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              rotateZ: [0, 2, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-20 w-64 bg-slate-900/80 backdrop-blur-xl border border-slate-800 p-6 rounded-3xl shadow-2xl z-20"
          >
            <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-4 text-blue-400">
              <Code size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Web Geliştirme</h3>
            <p className="text-sm text-slate-400">React, TypeScript ve modern web teknolojileri ile projeler.</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            animate={{ 
              y: [0, 25, 0],
              rotateZ: [0, -3, 0]
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-32 left-10 w-64 bg-slate-900/80 backdrop-blur-xl border border-slate-800 p-6 rounded-3xl shadow-2xl z-30"
          >
            <div className="w-12 h-12 bg-indigo-500/20 rounded-2xl flex items-center justify-center mb-4 text-indigo-400">
              <LayoutIcon size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">UI/UX Tasarım</h3>
            <p className="text-sm text-slate-400">Kullanıcı odaklı, modern ve şık arayüz tasarımları.</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            animate={{ 
              y: [0, -15, 0],
              rotateZ: [0, 4, 0]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-1/2 right-0 -translate-y-1/2 w-56 bg-slate-900/80 backdrop-blur-xl border border-slate-800 p-6 rounded-3xl shadow-2xl z-10"
          >
            <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-4 text-emerald-400">
              <Smartphone size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Responsive</h3>
            <p className="text-sm text-slate-400">Tüm cihazlarla tam uyumlu tasarımlar.</p>
          </motion.div>
          
          {/* Center Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] -z-10" />
        </div>
      </div>
    </div>
  );
}
