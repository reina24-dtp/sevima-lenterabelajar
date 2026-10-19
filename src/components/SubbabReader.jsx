import React, { useState, useEffect } from 'react';
import { DownloadCloud, Clock, ArrowLeft, CheckSquare, MessageSquare, BookOpen, Bookmark, Sparkles, CheckCircle2, Lock, Loader2 } from 'lucide-react';
import { loadSubbabContent } from '../contentStore';

export default function SubbabReader({ subjectId, subbabId, userId, subjects, isDownloaded, onBack, onStartQuiz, onAskMentor }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [body, setBody] = useState(null); // { contentBlocks, quiz }
  const [loadError, setLoadError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Find subject & subbab (metadata only - judul, ringkasan, keyPoints)
  const subject = subjects.find(s => s.id === subjectId) || subjects[0];
  let foundSubbab = null;
  let foundChapter = null;

  for (const cls of subject.classes) {
    for (const chap of cls.chapters) {
      const sb = chap.subbabs.find(s => s.id === subbabId);
      if (sb) {
        foundSubbab = sb;
        foundChapter = chap;
        break;
      }
    }
  }

  const subbab = foundSubbab || subject.classes[0].chapters[0].subbabs[0];

  // Isi materi (contentBlocks) diambil dari Firestore - hanya berhasil kalau
  // subbab ini sudah diunduh sebelumnya (lihat contentStore.js: loadSubbabContent
  // menolak kalau belum pernah diunduh, dan otomatis pakai cache lokal saat offline).
  useEffect(() => {
    let cancelled = false;
    setIsLoading(true);
    setLoadError(null);
    setBody(null);

    loadSubbabContent(subbab.id, userId)
      .then((data) => {
        if (!cancelled) setBody(data);
      })
      .catch((err) => {
        if (!cancelled) setLoadError(err.message || 'Gagal memuat materi.');
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });

    return () => { cancelled = true; };
  }, [subbab.id, userId]);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const current = (window.scrollY / totalHeight) * 100;
        setScrollProgress(current);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isLoading) {
    return (
      <div className="container animate-fade-in" style={{ paddingTop: '4rem', textAlign: 'center' }}>
        <Loader2 size={32} className="animate-spin" color="var(--primary-teal)" />
        <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>Memuat materi...</p>
      </div>
    );
  }

  if (loadError || !body) {
    return (
      <div className="container animate-fade-in" style={{ paddingTop: '3rem', textAlign: 'center' }}>
        <div className="card-white" style={{ maxWidth: 480, margin: '0 auto', padding: '3rem' }}>
          <Lock size={40} color="var(--primary-teal)" style={{ marginBottom: '1rem' }} />
          <h3 style={{ marginBottom: '0.5rem' }}>Materi Belum Bisa Dibuka</h3>
          <p style={{ color: 'var(--text-secondary)', margin: '0.5rem 0 1.5rem' }}>
            {loadError || 'Subbab ini belum diunduh. Unduh dulu saat online agar bisa dibaca offline.'}
          </p>
          <button onClick={onBack} className="btn-primary-teal">
            <ArrowLeft size={16} /> Kembali ke Daftar Subbab
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ paddingBottom: '7rem', color: '#0F172A' }}>
      
      {/* Sticky Scroll Progress Bar */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '4px', backgroundColor: '#E2E8F0', zIndex: 1200 }}>
        <div style={{ height: '100%', width: `${scrollProgress}%`, backgroundColor: 'var(--primary-teal)', transition: 'width 0.1s linear' }} />
      </div>

      <div className="container animate-fade-in" style={{ paddingTop: '2.5rem', maxWidth: '880px' }}>
        
        {/* Top Back Navigation Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <button onClick={onBack} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--primary-teal)', fontWeight: 700, fontSize: '0.95rem' }}>
            <ArrowLeft size={20} /> Kembali ke Daftar Subbab
          </button>

          <span className="badge-status badge-downloaded" style={{ fontSize: '0.85rem', padding: '0.4rem 0.9rem' }}>
            <DownloadCloud size={14} /> {isDownloaded ? 'Tersimpan (Offline Ready)' : 'Dimuat dari Server'}
          </span>
        </div>

        {/* Article Header Card */}
        <div className="card-white subbab-reader-header-card" style={{ marginBottom: '2rem', borderTop: '5px solid var(--primary-teal)', padding: '2.5rem' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary-teal)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>
            {subject.title} • {foundChapter?.title || 'Bab 1'}
          </div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.3rem', fontWeight: 800, color: '#0F172A', lineHeight: 1.2, marginBottom: '1.25rem' }}>
            {subbab.title}
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.75rem', color: '#475569', fontSize: '0.9rem', borderTop: '1px solid var(--border-light)', paddingTop: '1.25rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontWeight: 600 }}>
              <Clock size={16} color="var(--primary-teal)" /> Estimasi baca: {subbab.estimatedTime}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontWeight: 600 }}>
              <BookOpen size={16} color="var(--primary-teal)" /> Kurikulum Merdeka Resmi
            </span>
          </div>
        </div>

        {/* Ringkasan Subbab */}
        <div style={{ background: '#F0FDFA', border: '1.5px solid var(--border-mint)', borderRadius: 'var(--radius-md)', padding: '1.75rem', marginBottom: '2.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, color: 'var(--primary-teal)', marginBottom: '0.6rem', fontSize: '1.05rem', fontFamily: 'var(--font-heading)' }}>
            <Bookmark size={20} /> Rangkuman Utama Subbab
          </div>
          <p style={{ color: '#1E293B', fontSize: '1.05rem', lineHeight: 1.7, fontWeight: 500, margin: 0 }}>
            {subbab.summary}
          </p>
        </div>

        {/* Content Body Container */}
        <div className="subbab-reader-card" style={{ background: 'white', padding: '3rem 2.75rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)', marginBottom: '2.5rem' }}>
          
          {/* Key Points Bullet List */}
          {subbab.keyPoints && subbab.keyPoints.length > 0 && (
            <div style={{ marginBottom: '2.5rem', background: '#F8FAFC', padding: '1.5rem 1.75rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--primary-teal)' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '1rem', color: '#0F172A', fontFamily: 'var(--font-heading)' }}>
                📌 Poin Kunci Yang Harus Dikuasai:
              </h3>
              <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.65rem', color: '#334155' }}>
                {subbab.keyPoints.map((pt, i) => (
                  <li key={i} style={{ fontSize: '1rem', lineHeight: 1.6, fontWeight: 500 }}>{pt}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Render Content Blocks (dari Firestore, lihat useEffect di atas) */}
          {body.contentBlocks && body.contentBlocks.map((block, idx) => {
            if (block.type === 'sectionTitle') {
              return (
                <h2 key={idx} style={{ fontFamily: 'var(--font-heading)', fontSize: '1.45rem', fontWeight: 800, color: '#0F172A', marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #F1F5F9', paddingBottom: '0.5rem' }}>
                  {block.title}
                </h2>
              );
            }
            if (block.type === 'paragraph') {
              return (
                <p key={idx} style={{ fontSize: '1.08rem', lineHeight: 1.85, color: '#1E293B', marginBottom: '1.5rem' }}>
                  {block.text}
                </p>
              );
            }
            if (block.type === 'formulaBox') {
              return (
                <div key={idx} style={{ background: '#FFFBEB', border: '1.5px solid #F59E0B', borderRadius: 'var(--radius-md)', padding: '1.5rem', marginBottom: '2rem' }}>
                  <div style={{ fontWeight: 800, color: '#D97706', marginBottom: '0.5rem', fontSize: '0.95rem', fontFamily: 'var(--font-heading)' }}>
                    📐 {block.title}
                  </div>
                  <div style={{ fontFamily: 'Courier New, monospace', fontSize: '1.25rem', color: '#78350F', fontWeight: 800, background: 'white', padding: '1rem 1.25rem', borderRadius: '8px', textAlign: 'center', border: '1px dashed #FCD34D' }}>
                    {block.formula}
                  </div>
                </div>
              );
            }
            if (block.type === 'exampleBox') {
              return (
                <div key={idx} style={{ background: '#F0FDF4', border: '1.5px solid #22C55E', borderRadius: 'var(--radius-md)', padding: '1.75rem', marginBottom: '2.25rem' }}>
                  <div style={{ fontWeight: 800, color: '#15803D', marginBottom: '0.6rem', fontSize: '1.05rem', fontFamily: 'var(--font-heading)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Sparkles size={18} color="#22C55E" /> {block.title}
                  </div>
                  <div style={{ fontWeight: 700, color: '#166534', fontSize: '1.02rem', marginBottom: '1rem', background: 'white', padding: '0.85rem 1.1rem', borderRadius: '6px' }}>
                    Soal: {block.problem}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {block.solutionSteps?.map((step, sIdx) => (
                      <div key={sIdx} style={{ fontSize: '0.98rem', color: '#14532D', lineHeight: 1.6, fontWeight: 500 }}>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
              );
            }
            if (block.type === 'noteBox') {
              return (
                <div key={idx} style={{ background: '#EFF6FF', borderLeft: '4px solid #2563EB', padding: '1.5rem', borderRadius: 'var(--radius-sm)', marginBottom: '2rem' }}>
                  <div style={{ fontWeight: 800, color: '#1D4ED8', display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.4rem', fontSize: '1rem' }}>
                    {block.title}
                  </div>
                  <p style={{ color: '#1E40AF', fontSize: '0.98rem', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                    {block.text}
                  </p>
                </div>
              );
            }
            return null;
          })}

        </div>

        {/* Subbab Actions & Contextual Mentor CTA */}
        <div className="card-white" style={{ textAlign: 'center', padding: '2.5rem', borderTop: '4px solid var(--accent-amber)' }}>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.45rem', fontWeight: 800, marginBottom: '0.5rem', color: '#0F172A' }}>
            Sudah Paham Dengan Materi Ini?
          </h3>
          <p style={{ color: '#475569', fontSize: '0.95rem', marginBottom: '1.75rem' }}>
            Uji pemahamanmu dengan menjawab latihan soal pilihan ganda, atau ajukan pertanyaan jika ada bagian yang membingungkan.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => onStartQuiz(subject.id, subbab.id)}
              className="btn-amber-gold"
              style={{ padding: '0.85rem 1.8rem', fontSize: '0.95rem' }}
            >
              <CheckSquare size={18} /> Kerjakan Latihan Soal
            </button>

            <button
              onClick={() => onAskMentor(subject.id, subbab.title)}
              className="btn-outline"
              style={{ padding: '0.85rem 1.8rem', fontSize: '0.95rem' }}
            >
              <MessageSquare size={18} color="var(--primary-teal)" /> Tanya Tentang Subbab Ini
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
