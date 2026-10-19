import React from 'react';
import { Flame, BookOpen, DownloadCloud, ArrowRight, Sparkles } from 'lucide-react';

export default function Dashboard({ user, subjects, downloadedIds, userStats, onNavigateTab, onSelectSubbab }) {
  const availableSubbabs = subjects.flatMap((subject) => {
    const classData = subject.classes.find(c => c.classLevel === (user?.classLevel || 10)) || subject.classes[0];
    return (classData?.chapters || []).flatMap(chapter =>
      chapter.subbabs.map(subbab => ({ subject, classData, subbab }))
    );
  });
  const activeMaterial = availableSubbabs.find(item => downloadedIds?.has(item.subbab.id)) || availableSubbabs[0];
  const isActiveMaterialDownloaded = activeMaterial && downloadedIds?.has(activeMaterial.subbab.id);
  const downloadedCount = downloadedIds?.size || 0;
  const studyDaysStreak = userStats?.studyDaysStreak || 0;

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
              {downloadedCount > 0
                ? <>Ada <strong>{downloadedCount} modul</strong> tersimpan dan siap dibaca tanpa internet.</>
                : 'Belum ada materi yang tersimpan offline. Pilih materi untuk mulai belajar.'}
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.15)', padding: '0.85rem 1.25rem', borderRadius: 'var(--radius-md)', textAlign: 'center', backdropFilter: 'blur(4px)' }}>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#F59E0B', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem' }}>
                <Flame size={20} fill="#F59E0B" /> {studyDaysStreak} Hari
              </div>
              <div style={{ fontSize: '0.75rem', opacity: 0.85, fontWeight: 600 }}>Streak Belajar</div>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.15)', padding: '0.85rem 1.25rem', borderRadius: 'var(--radius-md)', textAlign: 'center', backdropFilter: 'blur(4px)' }}>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem' }}>
                <DownloadCloud size={20} /> {downloadedCount} Modul
              </div>
              <div style={{ fontSize: '0.75rem', opacity: 0.85, fontWeight: 600 }}>Tersimpan Offline</div>
            </div>
          </div>
        </div>
      </div>

      {/* Material shortcut reflects the actual offline download state. */}
      {activeMaterial && (
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-primary)' }}>
            {isActiveMaterialDownloaded ? '📌 Materi Tersimpan' : '📌 Mulai Belajar'}
          </h2>
          <div className="card-white" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', borderLeft: '5px solid var(--primary-teal)' }}>
            <div>
              <span className="badge-status" style={{ marginBottom: '0.5rem', ...(isActiveMaterialDownloaded ? { backgroundColor: 'var(--status-downloaded-bg)', color: 'var(--status-downloaded)' } : { backgroundColor: '#F1F5F9', color: 'var(--text-secondary)' }) }}>
                {isActiveMaterialDownloaded ? <><DownloadCloud size={14} /> Tersimpan Offline</> : 'Belum diunduh'}
              </span>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: '0.2rem 0' }}>
                {activeMaterial.subbab.title}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                {activeMaterial.subject.title} Kelas {activeMaterial.classData.classLevel} • Estimasi baca {activeMaterial.subbab.estimatedTime}
              </p>
            </div>

            <button 
              onClick={() => isActiveMaterialDownloaded
                ? onSelectSubbab(activeMaterial.subject.id, activeMaterial.subbab.id)
                : onNavigateTab('mapel')}
              className="btn-primary-teal"
            >
              {isActiveMaterialDownloaded ? 'Buka Materi Offline' : 'Pilih & Unduh Materi'} <ArrowRight size={16} />
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
            const subjectDownloadedCount = classData?.chapters
              ?.flatMap(chapter => chapter.subbabs)
              .filter(subbab => downloadedIds?.has(subbab.id)).length || 0;
            return (
              <div key={subj.id} className="card-white">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div style={{ width: 42, height: 42, borderRadius: 10, backgroundColor: subj.bgColor, color: subj.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <BookOpen size={22} />
                  </div>
                  <span className="badge-status" style={subjectDownloadedCount > 0 ? { backgroundColor: 'var(--status-downloaded-bg)', color: 'var(--status-downloaded)' } : { backgroundColor: '#F1F5F9', color: 'var(--text-secondary)' }}>
                    <DownloadCloud size={12} /> {subjectDownloadedCount > 0 ? `${subjectDownloadedCount} Tersimpan` : 'Belum Diunduh'}
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
