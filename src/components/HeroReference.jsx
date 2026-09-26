import React, { useState } from 'react';
import { ArrowRight, BookOpen, DownloadCloud, Sparkles, CheckCircle2, Menu, X } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function HeroReference({ onOpenAuth, onSelectClass, onNavigateTab }) {
  const [selectedClass, setSelectedClass] = useState('10');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleStartLearning = () => {
    onSelectClass(parseInt(selectedClass));
    onOpenAuth('register', selectedClass);
  };

  return (
    <section className="hero-section-outer" id="beranda">
      <div className="container animate-fade-in">
        
        {/* Top Navbar */}
        <header className="hero-navbar">
          <a href="#beranda" className="hero-brand-link" style={{ textDecoration: 'none' }}>
            <BrandLogo height={52} />
          </a>

          <button
            type="button"
            className="hero-nav-toggle"
            onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
            aria-label={isMobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <nav className={`hero-nav ${isMobileMenuOpen ? 'open' : ''}`}>
            <ul className="nav-links">
              <li><a href="#beranda" className="nav-link-item active" onClick={() => setIsMobileMenuOpen(false)}>Beranda</a></li>
              <li><a href="#mapel" className="nav-link-item" onClick={() => setIsMobileMenuOpen(false)}>Mata Pelajaran</a></li>
              <li><a href="#mentor" className="nav-link-item" onClick={() => setIsMobileMenuOpen(false)}>Tanya Mentor</a></li>
              <li><a href="#tentang" className="nav-link-item" onClick={() => setIsMobileMenuOpen(false)}>Tentang</a></li>
            </ul>
          </nav>

          <button onClick={() => onOpenAuth('login')} className="btn-pill-primary">
            Masuk / Daftar
          </button>
        </header>

        {/* Hero Body Content Grid */}
        <div className="hero-content-grid">
          
          {/* Left Text Column */}
          <div className="hero-text-col">
            <span className="hero-tag">Platform Belajar Offline SMA/SMK</span>
            <h1 className="hero-headline">
              Terangi Masa Depan<br />
              <span style={{ color: 'var(--primary-teal)' }}>Tanpa Batas Sinyal</span>
            </h1>
            <p className="hero-subtitle">
              Materi resmi Kurikulum Merdeka Kelas 10-12 yang dapat diakses penuh secara <strong>offline</strong>. Unduh materi sekali saat ada sinyal, belajar sepuasnya tanpa kuota internet.
            </p>

            {/* Class Selector & Action Control Box */}
            <div className="hero-action-box">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', paddingRight: '0.5rem' }}>
                <BookOpen size={18} color="var(--primary-teal)" />
                <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Pilih Kelas:</span>
              </div>
              
              <select 
                value={selectedClass} 
                onChange={(e) => setSelectedClass(e.target.value)}
                className="hero-select-input"
              >
                <option value="10">Kelas 10 (Fase E)</option>
                <option value="11">Kelas 11 (Fase F)</option>
                <option value="12">Kelas 12 (Fase F)</option>
              </select>

              <button 
                onClick={handleStartLearning}
                className="hero-action-btn"
                title="Mulai Belajar Sekarang"
              >
                <ArrowRight size={20} />
              </button>
            </div>

            <div style={{ display: 'flex', gap: '1.25rem', marginTop: '1.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <CheckCircle2 size={16} color="#059669" /> Bebas Kuota
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <CheckCircle2 size={16} color="#059669" /> Tanya Mentor Asinkron
              </span>
            </div>
          </div>

          {/* Right SVG Flat Illustration Column (Matching Reference Mood) */}
          <div className="hero-illustration-col animate-float" style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            
            {/* SVG Flat Illustration */}
            <svg width="420" height="340" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Background Glow */}
              <circle cx="250" cy="200" r="160" fill="#CCFBF1" fillOpacity="0.5" />
              
              {/* Book Stack Base */}
              {/* Book 1 (Blue) */}
              <rect x="130" y="270" width="240" height="35" rx="6" fill="#3B82F6" />
              <rect x="130" y="270" width="240" height="8" fill="#2563EB" />
              <rect x="145" y="282" width="210" height="12" fill="#FFFFFF" rx="2" />
              {/* Bookmark Ribbons */}
              <path d="M300 270 V315 L310 305 L320 315 V270 Z" fill="#10B981" />

              {/* Book 2 (Yellow) */}
              <rect x="110" y="225" width="260" height="38" rx="6" fill="#F59E0B" />
              <rect x="110" y="225" width="260" height="8" fill="#D97706" />
              <rect x="125" y="238" width="230" height="12" fill="#FFFFFF" rx="2" />
              <path d="M220 225 V270 L230 260 L240 270 V225 Z" fill="#EC4899" />

              {/* Book 3 Vertical Side (Green Stand) */}
              <rect x="80" y="180" width="30" height="125" rx="5" fill="#22C55E" />
              <rect x="88" y="195" width="14" height="95" fill="#16A34A" rx="2" />

              {/* Laptop Screen on top of books */}
              <rect x="150" y="80" width="200" height="135" rx="10" fill="#475569" />
              <rect x="158" y="88" width="184" height="119" rx="6" fill="#F8FAFC" />
              
              {/* Laptop Screen Content - Lantern / Lightbulb */}
              <circle cx="250" cy="140" r="28" fill="#FEF3C7" />
              <path d="M242 148 C242 135 258 135 258 148 C258 154 253 158 253 162 H247 C247 158 242 154 242 148 Z" fill="#F59E0B" />
              <rect x="246" y="164" width="8" height="4" fill="#D97706" rx="1" />
              
              {/* Light rays */}
              <line x1="250" y1="104" x2="250" y2="98" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
              <line x1="218" y1="120" x2="212" y2="114" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
              <line x1="282" y1="120" x2="288" y2="114" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
              <line x1="214" y1="148" x2="206" y2="148" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
              <line x1="286" y1="148" x2="294" y2="148" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />

              {/* Pink Mug */}
              <rect x="190" y="295" width="30" height="35" rx="4" fill="#EC4899" />
              <path d="M190 302 H182 C179 302 179 320 182 320 H190" stroke="#EC4899" strokeWidth="3" fill="none" />

              {/* Plant Pot */}
              <path d="M375 285 L385 330 H425 L435 285 Z" fill="#D97706" />
              <ellipse cx="405" cy="285" rx="30" ry="7" fill="#15803D" />
              {/* Plant Leaves */}
              <path d="M405 285 C390 255 370 260 365 245 C385 245 400 265 405 285 Z" fill="#22C55E" />
              <path d="M405 285 C420 255 440 260 445 245 C425 245 410 265 405 285 Z" fill="#16A34A" />
              <path d="M405 285 C405 245 415 235 410 220 C395 235 400 255 405 285 Z" fill="#4ADE80" />

              {/* Clouds */}
              <path d="M380 90 Q390 80 405 85 Q415 75 430 85 Q440 90 435 100 Q440 110 425 110 H385 Q375 105 380 90 Z" fill="#E2E8F0" fillOpacity="0.8" />
            </svg>

            {/* Floating Offline Status Badge Overlay */}
            <div style={{
              position: 'absolute',
              top: '10px',
              right: '20px',
              background: 'white',
              padding: '0.6rem 1.1rem',
              borderRadius: 'var(--radius-pill)',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid var(--border-mint)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontWeight: '700',
              fontSize: '0.85rem',
              color: 'var(--primary-teal)'
            }}>
              <DownloadCloud size={18} color="#059669" />
              Tersimpan di HP
            </div>

            {/* Floating Offline Sync Indicator */}
            <div style={{
              position: 'absolute',
              bottom: '30px',
              left: '20px',
              background: 'white',
              padding: '0.5rem 1rem',
              borderRadius: 'var(--radius-md)',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid var(--border-light)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.8rem',
              fontWeight: '600'
            }}>
              <Sparkles size={16} color="#F59E0B" />
              <span>Offline Ready Mode</span>
            </div>
          </div>

        </div>

        {/* Bottom Left Pagination Dots Decoration (Matching Reference Image) */}
        <div className="hero-card-dots">
          <div className="dot-item active"></div>
          <div className="dot-item"></div>
          <div className="dot-item"></div>
          <div className="dot-item"></div>
          <div className="dot-item"></div>
        </div>

      </div>
    </section>
  );
}
