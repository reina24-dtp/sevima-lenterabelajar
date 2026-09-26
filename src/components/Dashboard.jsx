import React from 'react';
import { Flame, BookOpen, CheckCircle2, DownloadCloud, ArrowRight, Zap, Award, Sparkles, Wifi } from 'lucide-react';

export default function Dashboard({ user, subjects, onNavigateTab, onSelectSubbab }) {
  // Find currently active subbab shortcut
  const activeSubbab = subjects[0]?.classes[0]?.chapters[0]?.subbabs[0];

  return (
    <div className="container animate-fade-in" style={{ padding: '2rem 1.5rem 6rem 1.5rem' }}>
      
      {/* Welcome Banner */}
      <div style={{
        background: 'linear-gradient(135deg, var(--primary-teal), #0D746B)',
        borderRadius: 'var(--radius-lg)',
        padding: '2.25rem 2.5rem',
        color: 'white',
        boxShadow: 'var(--shadow-hero)',
        marginBottom: '2.5rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: 'rgba(255,255,255,0.2)', padding: '0.3rem 0.8rem', borderRadius: 'var(--radius-pill)', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.75rem' }}>
              <Sparkles size={14} color="#F59E0B" /> Siswa Kelas {user?.classLevel || 10} • {user?.school || 'Mandiri'}
            </div>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.1rem', fontWeight: 800, lineHeight: 1.2 }}>
              Halo, {user?.name || 'Siswa Lentera'}! 👋
            </h1>
            <p style={{ opacity: 0.9, marginTop: '0.4rem', fontSize: '0.98rem' }}>
              Siap belajar hari ini? <strong>4 modul</strong> sudah tersimpan rapi dan siap dibaca tanpa internet.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.15)', padding: '0.85rem 1.25rem', borderRadius: 'var(--radius-md)', textAlign: 'center', backdropFilter: 'blur(4px)' }}>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#F59E0B', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem' }}>
                <Flame size={20} fill="#F59E0B" /> 5 Hari
              </div>
              <div style={{ fontSize: '0.75rem', opacity: 0.85, fontWeight: 600 }}>Streak Belajar</div>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.15)', padding: '0.85rem 1.25rem', borderRadius: 'var(--radius-md)', textAlign: 'center', backdropFilter: 'blur(4px)' }}>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem' }}>
                <DownloadCloud size={20} /> 4 Modul
              </div>
              <div style={{ fontSize: '0.75rem', opacity: 0.85, fontWeight: 600 }}>Tersimpan Offline</div>
            </div>
          </div>
        </div>
      </div>

      {/* Shortcut Card: Terakhir Dipelajari */}
      {activeSubbab && (
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-primary)' }}>
            📌 Lanjutkan Belajar
          </h2>
          <div className="card-white" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', borderLeft: '5px solid var(--primary-teal)' }}>
            <div>
              <span className="badge-status badge-downloaded" style={{ marginBottom: '0.5rem' }}>
                <DownloadCloud size={14} /> Tersimpan Offline
              </span>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: '0.2rem 0' }}>
                {activeSubbab.title}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Matematika Kelas 10 • Estimasi baca {activeSubbab.estimatedTime}
              </p>
            </div>

            <button 
              onClick={() => onSelectSubbab('matematika', activeSubbab.id)} 
              className="btn-primary-teal"
            >
              Buka Materi Offline <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Mapel List Overview */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)' }}>
            📚 Daftar Mata Pelajaran
          </h2>
          <button onClick={() => onNavigateTab('mapel')} style={{ color: 'var(--primary-teal)', fontWeight: 700, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            Lihat Semua Bab <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid-3">
          {subjects.map((subj) => {
            const classData = subj.classes.find(c => c.classLevel === (user?.classLevel || 10)) || subj.classes[0];
            return (
              <div key={subj.id} className="card-white">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div style={{ width: 42, height: 42, borderRadius: 10, backgroundColor: subj.bgColor, color: subj.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <BookOpen size={22} />
                  </div>
                  <span className="badge-status badge-downloaded">
                    <CheckCircle2 size={12} /> Ready
                  </span>
                </div>

                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.3rem' }}>{subj.title}</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                  {classData?.chapters?.length || 0} Bab Tersedia • Kurikulum Merdeka
                </p>

                <div style={{ background: '#F8FAFC', borderRadius: 'var(--radius-sm)', padding: '0.65rem 0.85rem', marginBottom: '1.25rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  <strong>Bab Terkait:</strong> {classData?.chapters[0]?.title || 'Bab 1'}
                </div>

                <button 
                  onClick={() => onNavigateTab('mapel')} 
                  className="btn-outline" 
                  style={{ width: '100%', justifyContent: 'center', fontSize: '0.85rem' }}
                >
                  Buka Daftar Bab
                </button>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
