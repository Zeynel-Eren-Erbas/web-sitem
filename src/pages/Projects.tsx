import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { ExternalLink } from 'lucide-react';

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

  return (
    <div className="py-20 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-12">PROJELER</h1>
      
      {loading ? (
        <div className="text-zinc-500">Projeler yükleniyor...</div>
      ) : projects.length === 0 ? (
        <div className="text-zinc-500">Henüz proje eklenmemiş.</div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-zinc-900/50 border border-zinc-800 rounded-3xl overflow-hidden group hover:border-zinc-600 transition-colors">
              {project.imageUrl ? (
                <div className="aspect-video bg-zinc-800 overflow-hidden">
                  <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              ) : (
                <div className="aspect-video bg-zinc-800 flex items-center justify-center text-zinc-600 font-mono text-sm">
                  Görsel Yok
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-zinc-100">{project.title}</h3>
                <p className="text-zinc-400 text-sm mb-6 line-clamp-3">{project.description}</p>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-zinc-100 hover:text-zinc-400 transition-colors">
                    Projeyi İncele <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
