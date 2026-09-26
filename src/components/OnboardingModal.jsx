import React, { useState } from 'react';
import { DownloadCloud, WifiOff, CheckSquare, MessageSquare, ArrowRight, ArrowLeft } from 'lucide-react';

const ONBOARDING_SLIDES = [
  {
    icon: DownloadCloud,
    color: '#0F766E',
    bgColor: '#CCFBF1',
    title: 'Unduh Materi Sekali',
    desc: 'Unduh modul Kurikulum Merdeka saat mendapatkan sinyal internet di sekolah atau kota. Materi langsung tersimpan aman di HP.'
  },
  {
    icon: WifiOff,
    color: '#D97706',
    bgColor: '#FEF3C7',
    title: 'Belajar Tanpa Internet',
    desc: 'Buka dan pelajari rangkuman materi, rumus, serta gambar buku kapan saja di mana saja tanpa membutuhkan kuota internet.'
  },
  {
    icon: CheckSquare,
    color: '#2563EB',
    bgColor: '#DBEAFE',
    title: 'Kerjakan Latihan Soal',
    desc: 'Uji pemahamanmu lewat kuis pilihan ganda interaktif di setiap subbab. Skor dan riwayat latihan otomatis tersimpan di HP.'
  },
  {
    icon: MessageSquare,
    color: '#7C3AED',
    bgColor: '#EDE9FE',
    title: 'Tanya Mentor Asinkron',
    desc: 'Kirim pertanyaan jika merasa bingung. Pertanyaan disimpan otomatis di HP dan terkirim ke mentor begitu perangkat online kembali.'
  }
];

export default function OnboardingModal({ isOpen, onFinishOnboarding }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!isOpen) return null;

  const current = ONBOARDING_SLIDES[currentSlide];
  const IconComponent = current.icon;
  const isLast = currentSlide === ONBOARDING_SLIDES.length - 1;

  const handleNext = () => {
    if (isLast) {
      onFinishOnboarding();
    } else {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-card animate-fade-in" style={{ textAlign: 'center', padding: '3rem 2.5rem' }}>
        
        {/* Slide Indicator Header */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '2rem' }}>
          {ONBOARDING_SLIDES.map((_, idx) => (
            <div 
              key={idx}
              style={{
                width: idx === currentSlide ? '28px' : '10px',
                height: '8px',
                borderRadius: '4px',
                backgroundColor: idx === currentSlide ? 'var(--primary-teal)' : '#CBD5E1',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>

        {/* Icon Visual */}
        <div style={{
          width: 90, height: 90, borderRadius: '50%',
          backgroundColor: current.bgColor, color: current.color,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 1.75rem auto',
          boxShadow: `0 10px 25px ${current.bgColor}`
        }}>
          <IconComponent size={44} />
        </div>

        {/* Text */}
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
          {current.title}
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2.5rem', minHeight: '60px' }}>
          {current.desc}
        </p>

        {/* Actions */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button 
            onClick={handlePrev}
            disabled={currentSlide === 0}
            style={{
              opacity: currentSlide === 0 ? 0.3 : 1,
              cursor: currentSlide === 0 ? 'default' : 'pointer',
              display: 'flex', alignItems: 'center', gap: '0.4rem',
              color: 'var(--text-secondary)', fontWeight: 600, fontSize: '0.9rem'
            }}
          >
            <ArrowLeft size={18} /> Kembali
          </button>

          <button 
            onClick={handleNext}
            className={isLast ? "btn-amber-gold" : "btn-primary-teal"}
            style={{ padding: '0.75rem 1.75rem', fontSize: '0.95rem' }}
          >
            {isLast ? 'Mulai Belajar 🚀' : 'Lanjut'} {!isLast && <ArrowRight size={18} />}
          </button>
        </div>

      </div>
    </div>
  );
}
