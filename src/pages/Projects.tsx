import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { ExternalLink, Gamepad2, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  link?: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'projects'));
        const projectsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Project[];
        setProjects(projectsData);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="py-20 px-6 max-w-7xl mx-auto flex items-center gap-3 text-slate-500">
        <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
        Projeler yükleniyor...
      </div>
    );
  }

  return (
    <div className="py-20 px-6 max-w-7xl mx-auto">
      <motion.h1 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-4xl md:text-6xl font-black tracking-tighter mb-12"
      >
        PROJELERİM
      </motion.h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Sabit Oyunlar Kartı */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden group hover:-translate-y-2 hover:shadow-[0_15px_30px_-10px_rgba(59,130,246,0.2)] hover:border-blue-500/50 transition-all duration-300 flex flex-col cursor-pointer">
          <div className="aspect-video bg-gradient-to-br from-indigo-900 to-slate-900 relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/games/800/400')] opacity-30 mix-blend-overlay object-cover group-hover:scale-105 transition-transform duration-700" />
            <Gamepad2 size={64} className="text-blue-400 z-10 drop-shadow-[0_0_15px_rgba(96,165,250,0.5)] group-hover:scale-110 group-hover:text-blue-300 transition-all duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
          </div>
          <div className="p-6 flex flex-col flex-grow bg-slate-900">
            <h3 className="text-xl font-bold mb-3 text-slate-100 flex items-center gap-2">
              Oyunlarım
            </h3>
            <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
              Geliştirdiğim oyun projeleri listesi. Farklı platformlar için ürettiğim mini oyunlar ve masaüstü oyunlarını bu sayfada bulabilirsiniz.
            </p>
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800/50">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Oyun Geliştirme</span>
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors">
                Platforma Git <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Firebase'den Gelen Dinamik Projeler */}
        {projects.map((project) => (
          <div key={project.id} className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden group hover:-translate-y-2 hover:shadow-[0_15px_30px_-10px_rgba(59,130,246,0.2)] hover:border-blue-500/50 transition-all duration-300 flex flex-col">
            {project.imageUrl ? (
              <div className="aspect-video bg-slate-800 overflow-hidden relative">
                <img src={project.imageUrl} alt={project.title} referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
              </div>
            ) : (
              <div className="aspect-video bg-slate-800 flex items-center justify-center text-slate-600 font-mono text-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80 z-10" />
                Görsel Yok
              </div>
            )}
            <div className="p-6 flex flex-col flex-grow bg-slate-900">
              <h3 className="text-xl font-bold mb-3 text-slate-100">{project.title}</h3>
              <p className="text-slate-400 text-sm mb-6 line-clamp-3 flex-grow leading-relaxed">{project.description}</p>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800/50">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Web Projesi</span>
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors">
                    Projeyi İncele <ExternalLink size={16} />
                  </a>
                ) : (
                  <span className="text-sm font-medium text-slate-600">Link Yok</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
