import {StrictMode} from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    
    <div className="min-h-[calc(100vh-4rem)] flex flex-col justify-center px-6 max-w-7xl mx-auto">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
          MERHABA, <br />
          BEN <span className="text-zinc-500">Eren</span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 mb-12 font-light leading-relaxed">
          11. sınıf bilişim öğrencisiyim. Web teknolojileri, oyun geliştirme ve modern arayüzler üzerine çalışıyorum.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link 
            to="/projects" 
            className="px-8 py-4 bg-zinc-100 text-zinc-950 font-bold rounded-full hover:bg-zinc-300 transition-colors flex items-center gap-2"
          >
            Projelerim <ArrowRight size={20} />
          </Link>
          <Link 
            to="/contact" 
            className="px-8 py-4 bg-zinc-900 border border-zinc-800 text-zinc-100 font-bold rounded-full hover:bg-zinc-800 transition-colors"
          >
            Bana Ulaş
          </Link>
        </div>
      </div>
    </div>
  );
}
