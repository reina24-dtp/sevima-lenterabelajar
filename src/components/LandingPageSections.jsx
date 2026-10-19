import React from 'react';
import { Download, WifiOff, CheckSquare, MessageSquare, ArrowRight, ShieldCheck, Award, Zap, BookOpen, Calculator, Globe } from 'lucide-react';

export default function LandingPageSections({ onOpenAuth }) {
  return (
    <div style={{ paddingBottom: '3rem' }}>

      {/* Section 2: Kenapa App Ini Penting (Kesenjangan Pendidikan Data) */}
      <section className="section-block container">
        <div className="section-title-wrap">
          <span className="section-badge">Fakta & Latar Belakang</span>
          <h2 className="section-title">Solusi Nyata Kesenjangan Digital & Pendidikan Indonesia</h2>
          <p className="section-desc">
            Jutaan siswa SMA/SMK di daerah dengan internet terbatas memerlukan akses belajar mandiri yang tidak bergantung pada koneksi sinyal stabil.
          </p>
        </div>

        <div className="grid-3">
          <div className="card-white" style={{ borderTop: '4px solid #EF4444' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#DC2626', fontFamily: 'var(--font-heading)' }}>
              3.96 Juta
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0.5rem 0' }}>Anak Tidak Sekolah (ATS)</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Data Kemendikdasmen menunjukkan 76% anak putus sekolah terhalang faktor ekonomi dan akses geografis.
            </p>
          </div>

          <div className="card-white" style={{ borderTop: '4px solid #F59E0B' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#D97706', fontFamily: 'var(--font-heading)' }}>
              23 Provinsi
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0.5rem 0' }}>Kategori Pendidikan Rendah</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Studi clustering nasional mencatat kesenjangan tajam sebaran guru dan fasilitas pendidikan di luar Jawa.
            </p>
          </div>

          <div className="card-white" style={{ borderTop: '4px solid #10B981' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#059669', fontFamily: 'var(--font-heading)' }}>
              55 Juta
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0.5rem 0' }}>Warga Terisolasi Digital</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Koneksi internet tidak merata memicu sulitnya siswa daerah 3T mengakses platform pembelajaran online standar.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Cara Kerja (4 Langkah) */}
      <section className="section-block" style={{ backgroundColor: '#F0FDFA', borderTop: '1px solid var(--border-mint)', borderBottom: '1px solid var(--border-mint)' }}>
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-badge" style={{ backgroundColor: 'white' }}>Metode Pembelajaran</span>
            <h2 className="section-title">4 Langkah Mudah Belajar Tanpa Kuota</h2>
            <p className="section-desc">Dirancang khusus agar efisien penggunaan storage HP dan hemat data.</p>
          </div>

          <div className="grid-4">
            <div className="card-white" style={{ textAlign: 'center', position: 'relative' }}>
              <div style={{
                width: 50, height: 50, borderRadius: '50%', background: 'var(--primary-light)',
                color: 'var(--primary-teal)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 1.25rem auto', fontWeight: 800, fontSize: '1.2rem'
              }}>
                1
              </div>
              <Download size={28} color="var(--primary-teal)" style={{ marginBottom: '0.5rem' }} />
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.5rem' }}>Unduh Materi</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Unduh subbab sekali saat menemukan WiFi / sinyal di sekolah atau kota.
              </p>
            </div>

            <div className="card-white" id="mentor" style={{ textAlign: 'center' }}>
              <div style={{
                width: 50, height: 50, borderRadius: '50%', background: 'var(--accent-light)',
                color: 'var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 1.25rem auto', fontWeight: 800, fontSize: '1.2rem'
              }}>
                2
              </div>
              <WifiOff size={28} color="var(--accent-gold)" style={{ marginBottom: '0.5rem' }} />
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.5rem' }}>Belajar Offline</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Buka dan baca materi lengkap tanpa membutuhkan koneksi internet sama sekali.
              </p>
            </div>

            <div className="card-white" style={{ textAlign: 'center' }}>
              <div style={{
                width: 50, height: 50, borderRadius: '50%', background: '#DBEAFE',
                color: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 1.25rem auto', fontWeight: 800, fontSize: '1.2rem'
              }}>
                3
              </div>
              <CheckSquare size={28} color="#2563EB" style={{ marginBottom: '0.5rem' }} />
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.5rem' }}>Kerjakan Latihan</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Jawab kuis pilihan ganda. Jawaban dan skor tersimpan otomatis di perangkat.
              </p>
            </div>

            <div className="card-white" style={{ textAlign: 'center' }}>
              <div style={{
                width: 50, height: 50, borderRadius: '50%', background: '#EDE9FE',
                color: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 1.25rem auto', fontWeight: 800, fontSize: '1.2rem'
              }}>
                4
              </div>
              <MessageSquare size={28} color="#7C3AED" style={{ marginBottom: '0.5rem' }} />
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.5rem' }}>Tanya Mentor</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Kirim pertanyaan asinkron. Pertanyaan dikirim & dijawab saat HP kembali online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Preview Mata Pelajaran */}
      <section className="section-block container" id="mapel">
        <div className="section-title-wrap">
          <span className="section-badge">Kurikulum Merdeka</span>
          <h2 className="section-title">Mata Pelajaran SMA & SMK</h2>
          <p className="section-desc">Cakupan materi umum terstandar untuk Kelas 10 (Fase E) dan Kelas 11-12 (Fase F).</p>
        </div>

        <div className="grid-3">
          <div className="card-white">
            <div style={{ width: 44, height: 44, borderRadius: 10, background: '#CCFBF1', color: '#0F766E', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
              <Calculator size={24} />
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Matematika</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
              Eksponen, Logaritma, Barisan & Deret, Trigonometri dasar hingga Kalkulus.
            </p>
            <button onClick={() => onOpenAuth('login')} className="btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
              Mulai Belajar <ArrowRight size={16} />
            </button>
          </div>

          <div className="card-white">
            <div style={{ width: 44, height: 44, borderRadius: 10, background: '#DBEAFE', color: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
              <BookOpen size={24} />
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Bahasa Indonesia</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
              Teks Laporan Hasil Observasi, Eksposisi, Cerpen, Proposal & Karya Ilmiah.
            </p>
            <button onClick={() => onOpenAuth('login')} className="btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
              Mulai Belajar <ArrowRight size={16} />
            </button>
          </div>

          <div className="card-white">
            <div style={{ width: 44, height: 44, borderRadius: 10, background: '#EDE9FE', color: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
              <Globe size={24} />
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Bahasa Inggris</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
              Descriptive Text, Recount, Analytical Exposition, Application Letter & CV.
            </p>
            <button onClick={() => onOpenAuth('login')} className="btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
              Mulai Belajar <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Section 5: Closing CTA Banner */}
      <section className="container">
        <div style={{
          background: 'linear-gradient(135deg, var(--primary-teal), #0D746B)',
          borderRadius: 'var(--radius-lg)',
          padding: '3.5rem 2rem',
          color: 'white',
          textAlign: 'center',
          boxShadow: 'var(--shadow-hero)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.4rem', fontWeight: 800, marginBottom: '1rem' }}>
            Siap Belajar Tanpa Terhalang Sinyal?
          </h2>
          <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 2rem auto' }}>
            Bergabunglah dengan ribuan siswa SMA/SMK di seluruh Indonesia. Gratis, ringan, dan 100% mendukung mode offline.
          </p>
          <button onClick={() => onOpenAuth('register')} className="btn-amber-gold" style={{ padding: '0.9rem 2.2rem', fontSize: '1rem' }}>
            Daftar Akun Siswa Gratis <ArrowRight size={18} />
          </button>
        </div>
      </section>


    </div>
  );
}
