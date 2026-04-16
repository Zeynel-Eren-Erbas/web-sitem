import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Home, User, Briefcase, Mail, Gamepad2, ShieldAlert } from 'lucide-react';

const navItems = [
  { path: '/', label: 'Ana Sayfa', icon: Home },
  { path: '/about', label: 'Hakkımda', icon: User },
  { path: '/projects', label: 'Projeler', icon: Briefcase },
  { path: '/contact', label: 'İletişim', icon: Mail },
  { path: '/games', label: 'Oyunlar', icon: Gamepad2 },
  { path: '/admin', label: 'Admin', icon: ShieldAlert },
];

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-emerald-500/30">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="font-bold text-xl tracking-tighter flex items-center gap-2 z-50">
            <div className="w-8 h-8 bg-zinc-100 rounded flex items-center justify-center text-zinc-950">
              M
            </div>
            <span>MEHMET<span className="text-zinc-500">.DEV</span></span>
          </Link>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 -mr-2 z-50 text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Fullscreen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-zinc-950/95 backdrop-blur-xl flex items-center justify-center"
          >
            <nav className="flex flex-col gap-6 text-center">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-3xl md:text-5xl font-bold tracking-tighter flex items-center justify-center gap-4 transition-all ${
                      isActive ? 'text-zinc-100' : 'text-zinc-600 hover:text-zinc-300'
                    }`}
                  >
                    <Icon size={isActive ? 32 : 28} className={isActive ? 'text-zinc-100' : 'text-zinc-600'} />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow pt-16 relative">
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
