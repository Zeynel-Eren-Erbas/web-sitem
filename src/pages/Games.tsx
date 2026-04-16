import React from 'react';
import { Gamepad2 } from 'lucide-react';

export default function Games() {
  return (
    <div className="py-20 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-12">OYUNLAR</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Snake Game Placeholder */}
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 flex flex-col items-center justify-center min-h-[300px] text-center">
          <Gamepad2 size={48} className="text-zinc-600 mb-4" />
          <h3 className="text-2xl font-bold text-zinc-100 mb-2">Yılan Oyunu</h3>
          <p className="text-zinc-400 mb-6">Çok yakında burada oynanabilir olacak.</p>
          <button disabled className="px-6 py-2 bg-zinc-800 text-zinc-500 rounded-full cursor-not-allowed font-medium">
            Yapım Aşamasında
          </button>
        </div>

        {/* Tic Tac Toe Placeholder */}
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 flex flex-col items-center justify-center min-h-[300px] text-center">
          <Gamepad2 size={48} className="text-zinc-600 mb-4" />
          <h3 className="text-2xl font-bold text-zinc-100 mb-2">XOX (Tic-Tac-Toe)</h3>
          <p className="text-zinc-400 mb-6">Çok yakında burada oynanabilir olacak.</p>
          <button disabled className="px-6 py-2 bg-zinc-800 text-zinc-500 rounded-full cursor-not-allowed font-medium">
            Yapım Aşamasında
          </button>
        </div>
      </div>
    </div>
  );
}
