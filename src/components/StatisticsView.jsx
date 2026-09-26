import React from 'react';
import { Award, BookOpen, DownloadCloud, Zap, Flame, BarChart2 } from 'lucide-react';

export default function StatisticsView({ userStats, subjects }) {
  const maxMinutes = Math.max(...userStats.activityLast7Days.map(d => d.minutes), 60);

  return (
    <div className="container animate-fade-in" style={{ padding: '2rem 1.5rem 6rem 1.5rem' }}>
      
      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)' }}>
          Statistik & Progres Belajar
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
          Pantau konsistensi belajar, skor kuis, dan data penyimpanan offline Anda.
        </p>
      </div>

      {/* Metric Summary Cards Grid */}
      <div className="grid-3" style={{ marginBottom: '2.5rem' }}>
        <div className="card-white" style={{ borderTop: '4px solid var(--primary-teal)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Subbab Selesai</span>
            <BookOpen size={20} color="var(--primary-teal)" />
          </div>
          <div style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>
            {userStats.completedSubbabs} Modul
          </div>
          <span style={{ fontSize: '0.8rem', color: '#059669', fontWeight: 600 }}>
            +2 modul minggu ini
          </span>
        </div>

        <div className="card-white" style={{ borderTop: '4px solid #F59E0B' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Rata-rata Skor Kuis</span>
            <Award size={20} color="#F59E0B" />
          </div>
          <div style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>
            {userStats.avgQuizScore} / 100
          </div>
          <span style={{ fontSize: '0.8rem', color: '#D97706', fontWeight: 600 }}>
            Kategori Sangat Baik ✨
          </span>
        </div>

        <div className="card-white" style={{ borderTop: '4px solid #2563EB' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Memori Offline HP</span>
            <DownloadCloud size={20} color="#2563EB" />
          </div>
          <div style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>
            {userStats.totalDownloadedMb}
          </div>
          <span style={{ fontSize: '0.8rem', color: '#2563EB', fontWeight: 600 }}>
            Hemat 95% Kuota Internet
          </span>
        </div>
      </div>

      {/* 7-Day Activity SVG Bar Chart */}
      <div className="card-white" style={{ marginBottom: '2.5rem', padding: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 800 }}>
              📊 Aktivitas Belajar 7 Hari Terakhir
            </h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              Total durasi membaca & pengerjaan kuis harian
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#D97706', fontWeight: 700, fontSize: '0.9rem' }}>
            <Flame size={18} fill="#F59E0B" /> {userStats.studyDaysStreak} Hari Streak!
          </div>
        </div>

        {/* SVG Bar Chart Visualization */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', height: '200px', paddingTop: '20px', borderBottom: '2px solid var(--border-light)' }}>
          {userStats.activityLast7Days.map((item, idx) => {
            const heightPercent = (item.minutes / maxMinutes) * 100;
            return (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', flex: 1 }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary-teal)' }}>
                  {item.minutes}m
                </span>
                <div style={{
                  width: '36px',
                  height: `${heightPercent}%`,
                  background: 'linear-gradient(180deg, var(--primary-mint), var(--primary-teal))',
                  borderRadius: '6px 6px 0 0',
                  transition: 'height 0.5s ease',
                  boxShadow: '0 4px 10px rgba(20, 184, 166, 0.2)'
                }} />
                <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginTop: '0.4rem' }}>
                  {item.day}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Progress Bar Per Subject */}
      <div className="card-white" style={{ padding: '2rem' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 800, marginBottom: '1.5rem' }}>
          🎯 Progres Penyelesaian Per Mapel
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {subjects.map(subj => {
            const progressPct = subj.id === 'matematika' ? 65 : subj.id === 'b-indo' ? 40 : 25;

            return (
              <div key={subj.id}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.4rem' }}>
                  <span>{subj.title}</span>
                  <span style={{ color: subj.color }}>{progressPct}% Selesai</span>
                </div>
                <div style={{ height: '10px', backgroundColor: '#E2E8F0', borderRadius: '5px', overflow: 'hidden' }}>
                  <div style={{
                    width: `${progressPct}%`,
                    height: '100%',
                    backgroundColor: subj.color,
                    borderRadius: '5px',
                    transition: 'width 0.4s ease'
                  }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
