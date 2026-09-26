import React, { useState } from 'react';
import { MessageSquare, Plus, CheckCircle2, Clock, Send, Sparkles, User, HelpCircle, X } from 'lucide-react';

export default function MentorQA({ threads, isOnline, onSubmitThread, onSimulateMentorReply, initialSubbabContext }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState('matematika');
  const [subbabContext, setSubbabContext] = useState(initialSubbabContext || '1.1 Sifat-sifat Eksponen (Pangkat Bulat)');
  const [questionText, setQuestionText] = useState('');

  const handleCreateQuestion = (e) => {
    e.preventDefault();
    if (!questionText.trim()) return;

    const newThread = {
      id: 'thread-' + Date.now(),
      subjectId: selectedSubject,
      subbabTitle: subbabContext,
      studentName: 'Siswa Lentera',
      question: questionText,
      status: isOnline ? 'Menunggu' : 'Terkirim', // 'Terkirim' means queued offline
      timestamp: isOnline ? 'Baru saja' : 'Disimpan offline (menunggu koneksi)',
      mentorName: null,
      mentorAnswer: null
    };

    onSubmitThread(newThread);
    setQuestionText('');
    setIsModalOpen(false);
  };

  return (
    <div className="container animate-fade-in" style={{ padding: '2rem 1.5rem 6rem 1.5rem' }}>
      
      {/* Header Banner */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)' }}>
            Tanya Mentor (Asinkron)
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Kirim pertanyaan seputar materi kapan saja. Tetap tersimpan walau sedang offline!
          </p>
        </div>

        <button 
          onClick={() => setIsModalOpen(true)}
          className="btn-amber-gold"
          style={{ padding: '0.75rem 1.5rem', fontSize: '0.9rem' }}
        >
          <Plus size={18} aria-hidden="true" /> Pertanyaan Baru
        </button>
      </div>

      {/* Offline Warning Info Banner */}
      {!isOnline && (
        <div role="status" style={{ background: '#FEF3C7', border: '1px solid #F59E0B', borderRadius: 'var(--radius-md)', padding: '1rem 1.25rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Clock size={20} color="#D97706" aria-hidden="true" />
          <div style={{ fontSize: '0.88rem', color: '#78350F' }}>
            <strong>Mode Offline Aktif:</strong> Pertanyaan baru yang Anda kirim akan disimpan aman di antrean HP dan dikirim ke server begitu internet terhubung.
          </div>
        </div>
      )}

      {/* Thread List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {threads.map((thread) => {
          let badgeClass = 'badge-pending';
          if (thread.status === 'Terjawab') badgeClass = 'badge-downloaded';
          if (thread.status === 'Terkirim') badgeClass = 'badge-online';

          return (
            <div key={thread.id} className="card-white" style={{ padding: '1.75rem' }}>
              
              {/* Thread Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                <div>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary-teal)', textTransform: 'uppercase' }}>
                    {thread.subjectId.toUpperCase()} • {thread.subbabTitle}
                  </span>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                    Oleh {thread.studentName} • {thread.timestamp}
                  </div>
                </div>

                <span className={`badge-status ${badgeClass}`}>
                  {thread.status === 'Terjawab' && <CheckCircle2 size={13} />}
                  {thread.status === 'Menunggu' && <Clock size={13} />}
                  {thread.status === 'Terkirim' && <Send size={13} />}
                  Status: {thread.status}
                </span>
              </div>

              {/* Question Box */}
              <div style={{ background: '#F8FAFC', padding: '1.25rem', borderRadius: 'var(--radius-md)', marginBottom: thread.mentorAnswer ? '1.25rem' : 0 }}>
                <p style={{ color: 'var(--text-primary)', fontSize: '0.98rem', fontWeight: 500, margin: 0 }}>
                  💬 "{thread.question}"
                </p>
              </div>

              {/* Mentor Answer Box */}
              {thread.mentorAnswer && (
                <div style={{ background: '#F0FDFA', borderLeft: '4px solid var(--primary-teal)', padding: '1.25rem', borderRadius: 'var(--radius-sm)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, color: 'var(--primary-teal)', marginBottom: '0.4rem', fontSize: '0.92rem' }}>
                    <Sparkles size={16} color="#F59E0B" /> {thread.mentorName || 'Mentor Lentera Belajar'}
                  </div>
                  <p style={{ color: 'var(--text-primary)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                    {thread.mentorAnswer}
                  </p>
                </div>
              )}

              {/* Demo Simulator Trigger Button */}
              {thread.status !== 'Terjawab' && (
                <div style={{ marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px dashed var(--border-light)', display: 'flex', justifyContent: 'flex-end' }}>
                  <button 
                    onClick={() => onSimulateMentorReply(thread.id)}
                    style={{ fontSize: '0.8rem', color: 'var(--primary-teal)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                    title="Jawab pertanyaan ini sebagai simulasi mentor"
                  >
                    <Sparkles size={14} color="#F59E0B" /> [Demo] Simulasikan Jawaban Mentor
                  </button>
                </div>
              )}

            </div>
          );
        })}
      </div>

      {/* New Question Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div
            className="modal-card animate-fade-in"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mentor-modal-title"
          >
            <button
              onClick={() => setIsModalOpen(false)}
              aria-label="Tutup form pertanyaan"
              style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', color: 'var(--text-muted)' }}
            >
              <X size={22} aria-hidden="true" />
            </button>

            <h2 id="mentor-modal-title" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>
              Tanya Mentor Baru
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '1.5rem' }}>
              Tuliskan pertanyaanmu dengan jelas. Mentor alumni dan relawan akan menjawab secara asinkron.
            </p>

            <form onSubmit={handleCreateQuestion} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label htmlFor="mentor-subject" style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.3rem' }}>
                  Mata Pelajaran
                </label>
                <select
                  id="mentor-subject"
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', outline: 'none' }}
                >
                  <option value="matematika">Matematika</option>
                  <option value="b-indo">Bahasa Indonesia</option>
                  <option value="b-inggris">Bahasa Inggris</option>
                </select>
              </div>

              <div>
                <label htmlFor="mentor-subbab" style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.3rem' }}>
                  Konteks Subbab
                </label>
                <input
                  id="mentor-subbab"
                  type="text"
                  value={subbabContext}
                  onChange={(e) => setSubbabContext(e.target.value)}
                  placeholder="Contoh: Bab 1 Eksponen"
                  style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', outline: 'none' }}
                />
              </div>

              <div>
                <label htmlFor="mentor-question" style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.3rem' }}>
                  Detail Pertanyaan *
                </label>
                <textarea
                  id="mentor-question"
                  required
                  rows={4}
                  placeholder="Jelaskan bagian rumus atau kalimat mana yang membingungkan..."
                  value={questionText}
                  onChange={(e) => setQuestionText(e.target.value)}
                  style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', outline: 'none', resize: 'vertical' }}
                />
              </div>

              <button type="submit" className="btn-amber-gold" style={{ marginTop: '0.5rem', width: '100%' }}>
                <Send size={18} aria-hidden="true" /> Kirim Pertanyaan Ke Mentor
              </button>
            </form>

          </div>
        </div>
      )}

    </div>
  );
}