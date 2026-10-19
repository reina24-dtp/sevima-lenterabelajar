import React, { useState } from 'react';
import { BookOpen, DownloadCloud, CheckCircle2, ChevronRight, Download, Clock, ArrowRight } from 'lucide-react';

export default function SubjectCatalog({ subjects, userClass, downloadedIds, downloadBusyId, onSelectSubbab, onToggleSubbabDownload, onBlockedRead }) {
  const [selectedClassTab, setSelectedClassTab] = useState(userClass || 10);
  const [selectedSubjectId, setSelectedSubjectId] = useState(subjects[0]?.id || 'matematika');
  const [downloadingChapterId, setDownloadingChapterId] = useState(null);
  const [downloadProgress, setDownloadProgress] = useState(0);

  const currentSubject = subjects.find(s => s.id === selectedSubjectId) || subjects[0];
  const classContent = currentSubject?.classes?.find(c => c.classLevel === selectedClassTab) || currentSubject?.classes[0];

  const isDownloaded = (subbabId) => downloadedIds?.has(subbabId);

  // Unduh semua subbab dalam satu bab secara berurutan (satu per satu, lewat
  // Firestore sungguhan). Progress bar mencerminkan jumlah subbab yang
  // SUDAH BERHASIL diunduh, bukan animasi palsu - dan berhenti lebih awal
  // kalau salah satu gagal (misalnya koneksi putus di tengah jalan).
  const handleBatchDownload = async (chapter) => {
    setDownloadingChapterId(chapter.id);
    setDownloadProgress(0);

    const total = chapter.subbabs.length;
    let done = 0;

    for (const sb of chapter.subbabs) {
      if (isDownloaded(sb.id)) {
        done += 1;
        setDownloadProgress(Math.round((done / total) * 100));
        continue;
      }
      const success = await onToggleSubbabDownload(selectedSubjectId, sb.id, true);
      if (!success) break; // berhenti kalau gagal (mis. offline) - jangan klaim semua selesai
      done += 1;
      setDownloadProgress(Math.round((done / total) * 100));
    }

    setDownloadingChapterId(null);
    setDownloadProgress(0);
  };

  const handleReadClick = (subbabId) => {
    if (isDownloaded(subbabId)) {
      onSelectSubbab(selectedSubjectId, subbabId);
    } else {
      onBlockedRead?.();
    }
  };

  return (
    <div className="container animate-fade-in" style={{ padding: '2rem 1.5rem 6rem 1.5rem' }}>
      
      {/* Header & Class Filter Tabs */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)' }}>
            Katalog Mata Pelajaran
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Pilih kelas dan unduh bab materi untuk dapat dibaca tanpa sinyal internet.
          </p>
        </div>

        {/* Class Filter Tabs */}
        <div style={{ display: 'flex', backgroundColor: '#E2E8F0', padding: '4px', borderRadius: 'var(--radius-pill)' }}>
          {[10, 11, 12].map(cls => (
            <button
              key={cls}
              onClick={() => setSelectedClassTab(cls)}
              style={{
                padding: '0.5rem 1.25rem',
                borderRadius: 'var(--radius-pill)',
                fontWeight: 700,
                fontSize: '0.88rem',
                backgroundColor: selectedClassTab === cls ? 'var(--primary-teal)' : 'transparent',
                color: selectedClassTab === cls ? 'white' : 'var(--text-secondary)',
                transition: 'all 0.2s ease'
              }}
            >
              Kelas {cls}
            </button>
          ))}
        </div>
      </div>

      {/* Subject Navigation Tabs */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
        {subjects.map(subj => (
          <button
            key={subj.id}
            onClick={() => setSelectedSubjectId(subj.id)}
            style={{
              padding: '0.85rem 1.5rem',
              borderRadius: 'var(--radius-md)',
              backgroundColor: selectedSubjectId === subj.id ? 'white' : 'transparent',
              border: selectedSubjectId === subj.id ? '2px solid var(--primary-teal)' : '1px solid var(--border-light)',
              boxShadow: selectedSubjectId === subj.id ? 'var(--shadow-md)' : 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              fontWeight: 700,
              fontSize: '0.95rem',
              color: selectedSubjectId === subj.id ? 'var(--primary-teal)' : 'var(--text-secondary)',
              cursor: 'pointer'
            }}
          >
            <BookOpen size={20} />
            {subj.title}
          </button>
        ))}
      </div>

      {/* Chapters & Subbab Breakdown */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {classContent?.chapters?.map((chapter) => {
          const allDownloaded = chapter.subbabs.every(s => isDownloaded(s.id));

          return (
            <div key={chapter.id} className="card-white" style={{ padding: '2rem' }}>
              
              {/* Chapter Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '1rem' }}>
                <div>
                  <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                    {chapter.title}
                  </h2>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    {chapter.subbabs.length} Subbab Belajar • Kurikulum Merdeka Fase {selectedClassTab === 10 ? 'E' : 'F'}
                  </span>
                </div>

                {/* Batch Download Button */}
                <div>
                  {downloadingChapterId === chapter.id ? (
                    <div style={{ minWidth: '180px' }}>
                      <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--primary-teal)', marginBottom: '0.3rem', display: 'flex', justifyContent: 'space-between' }}>
                        <span>Mengunduh Subbab...</span>
                        <span>{downloadProgress}%</span>
                      </div>
                      <div style={{ height: '8px', backgroundColor: '#E2E8F0', borderRadius: '4px', overflow: 'hidden' }}>
                        <div style={{ width: `${downloadProgress}%`, height: '100%', backgroundColor: 'var(--primary-teal)', transition: 'width 0.3s ease' }} />
                      </div>
                    </div>
                  ) : allDownloaded ? (
                    <span className="badge-status badge-downloaded" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
                      <CheckCircle2 size={16} /> Semua Subbab Tersimpan Offline
                    </span>
                  ) : (
                    <button
                      onClick={() => handleBatchDownload(chapter)}
                      className="btn-outline"
                      style={{ fontSize: '0.85rem' }}
                    >
                      <Download size={16} color="var(--primary-teal)" /> Unduh Semua Subbab ({chapter.subbabs.length})
                    </button>
                  )}
                </div>
              </div>

              {/* Subbab List Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {chapter.subbabs.map((subbab) => {
                  const downloaded = isDownloaded(subbab.id);
                  const isBusy = downloadBusyId === subbab.id;
                  return (
                  <div
                    key={subbab.id}
                    style={{
                      background: downloaded ? '#F0FDFA' : '#F8FAFC',
                      border: '1px solid',
                      borderColor: downloaded ? 'var(--border-mint)' : 'var(--border-light)',
                      borderRadius: 'var(--radius-md)',
                      padding: '1.25rem 1.5rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      gap: '1rem'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.4rem' }}>
                        <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                          {subbab.title}
                        </h3>
                        {downloaded ? (
                          <span className="badge-status badge-downloaded">
                            <DownloadCloud size={13} /> Offline Ready
                          </span>
                        ) : (
                          <span className="badge-status badge-pending">
                            🔒 Perlu Unduh
                          </span>
                        )}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                          <Clock size={14} /> {subbab.estimatedTime}
                        </span>
                        <span>•</span>
                        <span>{subbab.summary?.slice(0, 70)}...</span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <button
                        onClick={() => onToggleSubbabDownload(selectedSubjectId, subbab.id, !downloaded)}
                        disabled={isBusy}
                        style={{
                          padding: '0.5rem',
                          borderRadius: '50%',
                          backgroundColor: downloaded ? '#D1FAE5' : '#E2E8F0',
                          color: downloaded ? '#059669' : '#64748B',
                          opacity: isBusy ? 0.5 : 1,
                          cursor: isBusy ? 'wait' : 'pointer'
                        }}
                        title={downloaded ? "Hapus simpanan lokal" : "Unduh ke HP"}
                      >
                        <DownloadCloud size={18} />
                      </button>

                      <button
                        onClick={() => handleReadClick(subbab.id)}
                        className={downloaded ? 'btn-primary-teal' : 'btn-outline'}
                        style={{
                          padding: '0.55rem 1.25rem',
                          fontSize: '0.88rem',
                          opacity: downloaded ? 1 : 0.6,
                          cursor: downloaded ? 'pointer' : 'not-allowed'
                        }}
                        title={downloaded ? undefined : 'Unduh dulu untuk membaca'}
                      >
                        {downloaded ? <>Baca Materi <ArrowRight size={16} /></> : <>🔒 Terkunci</>}
                      </button>
                    </div>

                  </div>
                  );
                })}
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}
