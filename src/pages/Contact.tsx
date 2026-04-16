import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      await addDoc(collection(db, 'messages'), {
        ...formData,
        createdAt: serverTimestamp()
      });
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus('error');
    }
  };

  return (
    <div className="py-20 px-6 max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">İLETİŞİM</h1>
      <p className="text-zinc-400 mb-12 text-lg">
        Benimle iletişime geçmek için aşağıdaki formu kullanabilirsiniz.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">İsim</label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-zinc-500 transition-colors"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">E-posta</label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-zinc-500 transition-colors"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">Mesaj</label>
          <textarea
            id="message"
            required
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-zinc-500 transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full md:w-auto px-8 py-4 bg-zinc-100 text-zinc-950 font-bold rounded-xl hover:bg-zinc-300 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {status === 'submitting' ? 'Gönderiliyor...' : (
            <>Gönder <Send size={18} /></>
          )}
        </button>

        {status === 'success' && (
          <p className="text-green-500 mt-4">Mesajınız başarıyla gönderildi!</p>
        )}
        {status === 'error' && (
          <p className="text-red-500 mt-4">Mesaj gönderilirken bir hata oluştu.</p>
        )}
      </form>
    </div>
  );
}
