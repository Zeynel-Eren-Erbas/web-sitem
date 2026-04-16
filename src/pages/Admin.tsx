import React, { useState, useEffect } from 'react';
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { ShieldAlert, LogOut, Trash2 } from 'lucide-react';

export default function Admin() {
  const [user, setUser] = useState(auth.currentUser);
  const [messages, setMessages] = useState<any[]>([]);
  const [newProject, setNewProject] = useState({ title: '', description: '', link: '', imageUrl: '' });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => setUser(u));
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (user) {
      fetchMessages();
    }
  }, [user]);

  const fetchMessages = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'messages'));
      setMessages(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleAddProject = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'projects'), newProject);
      setNewProject({ title: '', description: '', link: '', imageUrl: '' });
      alert('Proje eklendi!');
    } catch (error) {
      console.error("Error adding project:", error);
      alert('Proje eklenirken hata oluştu. Yetkiniz olmayabilir.');
    }
  };

  const handleDeleteMessage = async (id: string) => {
    if (!window.confirm('Bu mesajı silmek istediğinize emin misiniz?')) return;
    try {
      await deleteDoc(doc(db, 'messages', id));
      setMessages(messages.filter(m => m.id !== id));
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  if (!user) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-6">
        <ShieldAlert size={64} className="text-zinc-600 mb-6" />
        <h1 className="text-3xl font-bold mb-8">Admin Girişi</h1>
        <button 
          onClick={handleLogin}
          className="px-8 py-4 bg-zinc-100 text-zinc-950 font-bold rounded-xl hover:bg-zinc-300 transition-colors"
        >
          Google ile Giriş Yap
        </button>
      </div>
    );
  }

  return (
    <div className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-12">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter">ADMIN PANELİ</h1>
        <button 
          onClick={() => signOut(auth)}
          className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-zinc-100"
          title="Çıkış Yap"
        >
          <LogOut size={20} />
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Add Project */}
        <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl">
          <h2 className="text-2xl font-bold mb-6">Yeni Proje Ekle</h2>
          <form onSubmit={handleAddProject} className="space-y-4">
            <input
              type="text"
              placeholder="Proje Başlığı"
              required
              value={newProject.title}
              onChange={e => setNewProject({...newProject, title: e.target.value})}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-zinc-500"
            />
            <textarea
              placeholder="Proje Açıklaması"
              required
              rows={3}
              value={newProject.description}
              onChange={e => setNewProject({...newProject, description: e.target.value})}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-zinc-500 resize-none"
            />
            <input
              type="text"
              placeholder="Görsel URL (Opsiyonel)"
              value={newProject.imageUrl}
              onChange={e => setNewProject({...newProject, imageUrl: e.target.value})}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-zinc-500"
            />
            <input
              type="text"
              placeholder="Proje Linki (Opsiyonel)"
              value={newProject.link}
              onChange={e => setNewProject({...newProject, link: e.target.value})}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-zinc-500"
            />
            <button type="submit" className="w-full py-3 bg-zinc-100 text-zinc-950 font-bold rounded-xl hover:bg-zinc-300 transition-colors">
              Projeyi Kaydet
            </button>
          </form>
        </div>

        {/* Messages */}
        <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl">
          <h2 className="text-2xl font-bold mb-6">Gelen Mesajlar</h2>
          <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
            {messages.length === 0 ? (
              <p className="text-zinc-500">Henüz mesaj yok.</p>
            ) : (
              messages.map(msg => (
                <div key={msg.id} className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl relative group">
                  <button 
                    onClick={() => handleDeleteMessage(msg.id)}
                    className="absolute top-4 right-4 text-zinc-600 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Trash2 size={18} />
                  </button>
                  <h4 className="font-bold text-zinc-100">{msg.name}</h4>
                  <a href={`mailto:${msg.email}`} className="text-sm text-zinc-500 hover:text-zinc-300">{msg.email}</a>
                  <p className="mt-3 text-zinc-400 text-sm">{msg.message}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
