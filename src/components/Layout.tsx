import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Home, User, Briefcase, Mail } from 'lucide-react';

const navItems = [
  { path: '/', label: 'Ana Sayfa', icon: Home },
  { path: '/about', label: 'Hakkımda', icon: User },
  { path: '/projects', label: 'Projeler', icon: Briefcase },
  { path: '/contact', label: 'İletişim', icon: Mail },
];

export default function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-500/30 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-900/20 blur-[120px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 z-50 hover:opacity-80 transition-opacity">
           <img 
                src="/logo.png" 
                alt="ZEE 58 Logo" 
                className="h-16 md:h-20 w-auto object-contain drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]" 
              />
          </Link>

          {/* Desktop Navigation */}
          <nav className="flex items-center gap-6 md:gap-8 z-50 overflow-x-auto">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm md:text-base font-medium transition-all hover:text-blue-400 flex items-center gap-2 whitespace-nowrap ${
                    isActive ? 'text-blue-400' : 'text-slate-400'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="h-full"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}