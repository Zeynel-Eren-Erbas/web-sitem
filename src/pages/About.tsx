import React from 'react';

export default function About() {
  return (
    <div className="py-20 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-12">HAKKIMDA</h1>
      
      <div className="space-y-8 text-lg text-zinc-400 font-light leading-relaxed">
        <p>
          Merhaba! Ben Zeynel Eren Erbaş. 11. sınıf bilişim teknolojileri öğrencisiyim. Yazılım dünyasına olan ilgim, bilgisayarların nasıl çalıştığını merak etmemle başladı ve o günden beri sürekli yeni şeyler öğreniyorum.
        </p>
        <p>
          Şu anda özellikle <strong>React</strong>, <strong>TypeScript</strong> ve <strong>Firebase</strong> gibi modern web teknolojileri üzerinde kendimi geliştiriyorum. Sadece kod yazmakla kalmıyor, aynı zamanda kullanıcı deneyimi (UX) ve arayüz tasarımı (UI) konularına da büyük önem veriyorum.
        </p>
        
        <div className="grid sm:grid-cols-2 gap-8 pt-8">
          <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl">
            <h3 className="text-xl font-bold text-zinc-100 mb-4">Eğitim</h3>
            <ul className="space-y-3">
              <li>Bilişim Teknolojileri Alanı</li>
              <li>11. Sınıf Öğrencisi</li>
              <li>Web Programlama Dalı</li>
            </ul>
          </div>
          
          <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl">
            <h3 className="text-xl font-bold text-zinc-100 mb-4">Yetenekler</h3>
            <ul className="space-y-3">
              <li>Frontend: React, Tailwind CSS</li>
              <li>Backend: Node.js, Firebase</li>
              <li>Diller: JavaScript, TypeScript, C#</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
