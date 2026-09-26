import React from 'react';
import { Home, BookOpen, MessageSquare, BarChart2 } from 'lucide-react';

export default function BottomNav({ activeTab, onSelectTab }) {
  return (
    <nav className="bottom-nav" aria-label="Navigasi utama">
      <button 
        onClick={() => onSelectTab('beranda')}
        className={`bottom-nav-item ${activeTab === 'beranda' ? 'active' : ''}`}
        aria-current={activeTab === 'beranda' ? 'page' : undefined}
      >
        <Home size={22} aria-hidden="true" />
        <span>Beranda</span>
      </button>

      <button 
        onClick={() => onSelectTab('mapel')}
        className={`bottom-nav-item ${activeTab === 'mapel' ? 'active' : ''}`}
        aria-current={activeTab === 'mapel' ? 'page' : undefined}
      >
        <BookOpen size={22} aria-hidden="true" />
        <span>Mapel</span>
      </button>

      <button 
        onClick={() => onSelectTab('mentor')}
        className={`bottom-nav-item ${activeTab === 'mentor' ? 'active' : ''}`}
        aria-current={activeTab === 'mentor' ? 'page' : undefined}
      >
        <MessageSquare size={22} aria-hidden="true" />
        <span>Tanya Mentor</span>
      </button>

      <button 
        onClick={() => onSelectTab('statistik')}
        className={`bottom-nav-item ${activeTab === 'statistik' ? 'active' : ''}`}
        aria-current={activeTab === 'statistik' ? 'page' : undefined}
      >
        <BarChart2 size={22} aria-hidden="true" />
        <span>Statistik</span>
      </button>
    </nav>
  );
}