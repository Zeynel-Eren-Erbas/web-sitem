import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Terminal, 
  Cpu, 
  Code2, 
  Globe, 
  Database, 
  Layout, 
  Mail, 
  Github, 
  Linkedin, 
  ExternalLink, 
  ChevronRight, 
  Download,
  User,
  Briefcase,
  GraduationCap,
  Layers,
  Zap,
  Monitor,
  Smartphone
} from 'lucide-react';

// --- Types ---
interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
}

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
}

// --- Constants ---
const PROJECTS: Project[] = [
  {
    id: 1,
    title: "E-Ticaret Veri Analiz Paneli",
    description: "Satış verilerini gerçek zamanlı olarak işleyen ve görselleştiren kapsamlı bir dashboard.",
    tags: ["React", "TypeScript", "D3.js", "Firebase"],
    link: "#",
    image: "https://picsum.photos/seed/ecommerce/800/600"
  },
  {
    id: 2,
    title: "AI Destekli Görev Yöneticisi",
    description: "Gemini API kullanarak görevleri önceliklendiren ve otomatik kategorize eden uygulama.",
    tags: ["Next.js", "Gemini API", "Tailwind"],
    link: "#",
    image: "https://picsum.photos/seed/ai-task/800/600"
  },
  {
    id: 3,
    title: "Akıllı Ev Otomasyon Arayüzü",
    description: "IoT cihazlarını kontrol etmek için tasarlanmış minimalist ve hızlı bir mobil arayüz.",
    tags: ["React Native", "MQTT", "Node.js"],
    link: "#",
    image: "https://picsum.photos/seed/iot/800/600"
  }
];

const SKILLS: Skill[] = [
  { name: "Frontend Development", level: 90, icon: <Layout className="w-5 h-5" /> },
  { name: "Backend (Node.js)", level: 75, icon: <Database className="w-5 h-5" /> },
  { name: "UI/UX Design", level: 85, icon: <Layers className="w-5 h-5" /> },
  { name: "Database Management", level: 70, icon: <Cpu className="w-5 h-5" /> },
  { name: "Cloud Integration", level: 65, icon: <Globe className="w-5 h-5" /> },
  { name: "Mobile Development", level: 60, icon: <Smartphone className="w-5 h-5" /> }
];

// --- Components ---

const DataStreamBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none opacity-10 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(24,24,27,0)_0%,rgba(9,9,11,1)_100%)]" />
      <div className="flex flex-wrap gap-4 p-4 font-mono text-[10px] text-emerald-500 leading-none">
        {Array.from({ length: 500 }).map((_, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

const TerminalSection = () => {
  const [text, setText] = useState('');
  const fullText = "> Mehmet Erbaş - 11. Sınıf Bilişim Öğrencisi\n> Sistem yükleniyor...\n> Portfolyo verileri TX modunda aktarılıyor...\n> Bağlantı başarılı.";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-zinc-900/80 border border-zinc-800 rounded-lg p-4 font-mono text-sm text-zinc-400 shadow-2xl backdrop-blur-sm">
      <div className="flex gap-2 mb-3">
        <div className="w-3 h-3 rounded-full bg-red-500/50" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
        <div className="w-3 h-3 rounded-full bg-green-500/50" />
      </div>
      <pre className="whitespace-pre-wrap">
        {text}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-2 h-4 bg-emerald-500 ml-1 align-middle"
        />
      </pre>
    </div>
  );
};

const SectionTitle = ({ title, subtitle, icon: Icon }: { title: string, subtitle: string, icon: any }) => (
  <div className="mb-12">
    <div className="flex items-center gap-3 mb-2">
      <div className="p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
        <Icon className="w-6 h-6 text-emerald-500" />
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-zinc-100">{title}</h2>
    </div>
    <p className="text-zinc-400 max-w-2xl">{subtitle}</p>
  </div>
);

export const AppDataTX = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-zinc-950 text-zinc-100 selection:bg-emerald-500/30">
      <DataStreamBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/50 backdrop-blur-md border-bottom border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
            <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center text-zinc-950">
              <Code2 size={20} />
            </div>
            <span>MEHMET<span className="text-emerald-500">.DEV</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#about" className="hover:text-emerald-500 transition-colors">Hakkımda</a>
            <a href="#skills" className="hover:text-emerald-500 transition-colors">Yetenekler</a>
            <a href="#projects" className="hover:text-emerald-500 transition-colors">Projeler</a>
            <a href="#contact" className="px-4 py-2 bg-zinc-100 text-zinc-950 rounded-full hover:bg-emerald-500 hover:text-zinc-950 transition-all">İletişim</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-bold mb-6 uppercase tracking-widest">
              <Zap size={14} /> 11. Sınıf Bilişim Öğrencisi
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
              GELECEĞİN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">YAZILIMINI</span> <br />
              TASARLIYORUM.
            </h1>
            <p className="text-xl text-zinc-400 max-w-lg mb-10 leading-relaxed">
              Modern teknolojilerle kullanıcı odaklı, hızlı ve ölçeklenebilir dijital çözümler üretiyorum. Staj ve projeler için hazırım.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-emerald-500 text-zinc-950 font-bold rounded-xl hover:bg-emerald-400 transition-all flex items-center gap-2 group">
                Projelerimi Gör <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-zinc-900 border border-zinc-800 text-zinc-100 font-bold rounded-xl hover:bg-zinc-800 transition-all flex items-center gap-2">
                CV İndir <Download size={18} />
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <TerminalSection />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-500/20 blur-3xl rounded-full -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-cyan-500/20 blur-3xl rounded-full -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Stats / Marquee */}
      <div className="py-12 border-y border-zinc-900 bg-zinc-900/30 backdrop-blur-sm overflow-hidden">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex items-center gap-4 text-zinc-500 font-mono text-sm uppercase tracking-widest">
              <Code2 size={16} /> REACT.JS
              <div className="w-1 h-1 rounded-full bg-zinc-700" />
              <Database size={16} /> FIREBASE
              <div className="w-1 h-1 rounded-full bg-zinc-700" />
              <Cpu size={16} /> TYPESCRIPT
              <div className="w-1 h-1 rounded-full bg-zinc-700" />
              <Globe size={16} /> NEXT.JS
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-square rounded-3xl overflow-hidden border border-zinc-800 group">
            <img 
              src="https://picsum.photos/seed/mehmet/800/800" 
              alt="Mehmet Erbaş" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
          </div>
          <div>
            <SectionTitle 
              title="Hakkımda" 
              subtitle="Bilişim teknolojilerine olan tutkum, ortaokul yıllarında ilk kod satırımı yazmamla başladı."
              icon={User}
            />
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
              <p>
                Şu an 11. sınıf öğrencisi olarak web teknolojileri, mobil uygulama geliştirme ve veri tabanı sistemleri üzerine yoğunlaşıyorum. Okul projelerimin yanı sıra freelance işler ve açık kaynak katkılarıyla kendimi sürekli geliştiriyorum.
              </p>
              <p>
                Amacım, karmaşık problemleri basit ve zarif kodlarla çözmek. Teknolojinin sadece bir araç değil, dünyayı değiştirecek bir güç olduğuna inanıyorum.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800">
                  <div className="text-emerald-500 font-bold text-2xl mb-1">20+</div>
                  <div className="text-xs uppercase tracking-wider font-bold text-zinc-500">Tamamlanan Proje</div>
                </div>
                <div className="p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800">
                  <div className="text-cyan-500 font-bold text-2xl mb-1">3+</div>
                  <div className="text-xs uppercase tracking-wider font-bold text-zinc-500">Yıllık Deneyim</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 bg-zinc-900/20">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            title="Yetenekler" 
            subtitle="Kullandığım teknolojiler ve uzmanlık seviyelerim. Her geçen gün yeni bir şeyler öğrenmeye devam ediyorum."
            icon={Zap}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/50 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-zinc-800 rounded-lg text-emerald-500 group-hover:bg-emerald-500 group-hover:text-zinc-950 transition-colors">
                    {skill.icon}
                  </div>
                  <span className="text-xs font-mono text-zinc-500">{skill.level}%</span>
                </div>
                <h3 className="font-bold text-lg mb-3">{skill.name}</h3>
                <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-emerald-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
        <SectionTitle 
          title="Projeler" 
          subtitle="Geliştirdiğim bazı seçkin projeler. Her biri farklı bir problemi çözmek için tasarlandı."
          icon={Briefcase}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-zinc-900/50 border border-zinc-800 rounded-3xl overflow-hidden hover:border-emerald-500/30 transition-all"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-zinc-800 text-zinc-400 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-500 transition-colors">{project.title}</h3>
                <p className="text-zinc-400 text-sm mb-6 line-clamp-2">{project.description}</p>
                <a href={project.link} className="inline-flex items-center gap-2 text-sm font-bold text-zinc-100 hover:text-emerald-500 transition-colors">
                  Projeyi İncele <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <Mail size={200} className="text-emerald-500" />
          </div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8">BİRLİKTE <br /> ÇALIŞALIM MI?</h2>
            <p className="text-xl text-zinc-400 mb-12 leading-relaxed">
              Staj imkanları, freelance projeler veya sadece teknoloji hakkında konuşmak için bana her zaman ulaşabilirsiniz.
            </p>
            <div className="flex flex-wrap gap-6">
              <a href="mailto:mehmeterbas5557@gmail.com" className="px-8 py-4 bg-zinc-100 text-zinc-950 font-bold rounded-2xl hover:bg-emerald-500 transition-all flex items-center gap-2">
                Mail Gönder <Mail size={18} />
              </a>
              <div className="flex items-center gap-4">
                <a href="#" className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-emerald-500 hover:border-emerald-500/50 transition-all">
                  <Github size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-emerald-500 hover:border-emerald-500/50 transition-all">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-900 text-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-zinc-500 font-mono">
            © 2026 MEHMET ERBAŞ. TÜM HAKLARI SAKLIDIR.
          </div>
          <div className="flex items-center gap-6 text-xs font-bold uppercase tracking-widest text-zinc-500">
            <a href="#" className="hover:text-emerald-500">GİZLİLİK</a>
            <a href="#" className="hover:text-emerald-500">ŞARTLAR</a>
            <div className="w-1 h-1 rounded-full bg-zinc-800" />
            <span className="text-emerald-500/50">V.2.0.4-TX</span>
          </div>
        </div>
      </footer>

      {/* Custom Cursor / Glow */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50 mix-blend-screen">
        <div className="absolute top-[var(--y)] left-[var(--x)] w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-emerald-500/5 blur-[120px] rounded-full" />
      </div>
    </div>
  );
};

export default AppDataTX;
