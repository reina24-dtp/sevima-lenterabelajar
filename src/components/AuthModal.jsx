import React, { useState } from 'react';
import { X, User, Mail, School, MapPin, BookOpen, Lock, ArrowRight } from 'lucide-react';
import { auth, db } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';

// Ubah input "Email atau Nomor HP" jadi format yang diterima Firebase Auth.
// - Kalau sudah berupa email asli (ada '@'), pakai apa adanya.
// - Kalau berupa nomor HP (mayoritas digit), diubah jadi email sintetis
//   di belakang layar (misal 08123456789 -> 628123456789@lentera.app),
//   siswa tidak perlu tahu proses ini terjadi.
function normalizeIdentifier(rawValue) {
  const trimmed = rawValue.trim();

  if (trimmed.includes('@')) {
    return { firebaseEmail: trimmed.toLowerCase(), displayIdentifier: trimmed.toLowerCase(), isPhone: false };
  }

  const digitsOnly = trimmed.replace(/[\s-]/g, '');
  const looksLikePhone = /^(\+62|62|0)?8[0-9]{7,13}$/.test(digitsOnly);

  if (looksLikePhone) {
    const normalizedDigits = digitsOnly.startsWith('0')
      ? '62' + digitsOnly.slice(1)
      : digitsOnly.replace('+', '');
    return {
      firebaseEmail: `${normalizedDigits}@lentera.app`,
      displayIdentifier: digitsOnly,
      isPhone: true,
    };
  }

  // Bukan format email atau nomor HP yang dikenali - kembalikan apa adanya,
  // biar Firebase yang menolak dengan pesan "format email tidak valid"
  return { firebaseEmail: trimmed.toLowerCase(), displayIdentifier: trimmed, isPhone: false };
}

// Terjemahan kode error Firebase ke pesan berbahasa Indonesia yang ramah
function translateFirebaseError(code) {
  switch (code) {
    case 'auth/email-already-in-use':
      return '⚠️ Email/Nomor HP ini sudah terdaftar! Silakan klik "Masuk di sini" untuk login ke akun Anda.';
    case 'auth/invalid-email':
      return '❌ Format Email atau Nomor HP tidak valid. Mohon periksa kembali.';
    case 'auth/weak-password':
      return '❌ Kata sandi terlalu lemah. Gunakan minimal 6 karakter.';
    case 'auth/user-not-found':
      return '❌ Akun belum terdaftar! Silakan klik "Daftar sekarang" di bawah.';
    case 'auth/wrong-password':
    case 'auth/invalid-credential':
      return '❌ Email/Nomor HP atau kata sandi salah. Mohon periksa kembali.';
    case 'auth/too-many-requests':
      return '⚠️ Terlalu banyak percobaan gagal. Coba lagi beberapa saat lagi.';
    default:
      return '❌ Terjadi kesalahan. Mohon coba lagi.';
  }
}

export default function AuthModal({ isOpen, onClose, initialMode = 'register', preselectedClass = '10', onCompleteAuth }) {
  const [mode, setMode] = useState(initialMode); // 'login' or 'register'

  // Form State
  const [name, setName] = useState('');
  const [identifier, setIdentifier] = useState(''); // dipakai sebagai email
  const [password, setPassword] = useState('');
  const [school, setSchool] = useState('');
  const [region, setRegion] = useState('');
  const [studentClass, setStudentClass] = useState(preselectedClass ? String(preselectedClass) : '10');

  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  if (!isOpen) return null;

  // Login/daftar pakai Google. Kalau user baru (belum ada profil di
  // Firestore), otomatis dianggap "register" dan disimpan dengan data
  // dasar dari akun Google-nya (nama & email).
  const handleGoogleSignIn = async () => {
    setErrorMsg('');
    setIsGoogleLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      const cred = await signInWithPopup(auth, provider);

      const profileRef = doc(db, 'users', cred.user.uid);
      const profileSnap = await getDoc(profileRef);

      if (profileSnap.exists()) {
        const profile = profileSnap.data();
        onCompleteAuth({
          uid: cred.user.uid,
          name: profile.name || cred.user.displayName || 'Siswa Lentera',
          identifier: profile.displayIdentifier || cred.user.email,
          school: profile.school || 'Tidak Sekolah / Mandiri',
          region: profile.region || 'Indonesia',
          classLevel: profile.classLevel || 10,
        }, false);
      } else {
        const profileData = {
          name: cred.user.displayName || 'Siswa Lentera',
          displayIdentifier: cred.user.email,
          school: 'Tidak Sekolah / Mandiri',
          region: 'Indonesia',
          classLevel: preselectedClass ? parseInt(preselectedClass) : 10,
          createdAt: new Date().toISOString(),
        };
        await setDoc(profileRef, profileData);
        onCompleteAuth({ uid: cred.user.uid, identifier: cred.user.email, ...profileData }, true);
      }
    } catch (err) {
      if (err.code !== 'auth/popup-closed-by-user') {
        setErrorMsg('❌ Gagal masuk dengan Google. Mohon coba lagi.');
      }
    } finally {
      setIsGoogleLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (mode === 'register' && !name.trim()) {
      setErrorMsg('Mohon isi Nama Lengkap Anda.');
      return;
    }
    if (!identifier.trim()) {
      setErrorMsg(mode === 'register' ? 'Mohon isi Email atau Nomor HP Anda.' : 'Mohon isi Email Anda.');
      return;
    }
    if (!password.trim() || password.length < 6) {
      setErrorMsg('Mohon isi Kata Sandi minimal 6 karakter (ketentuan Firebase).');
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);

    // Email asli dipakai apa adanya; nomor HP otomatis diubah jadi email
    // sintetis di belakang layar supaya tetap kompatibel dengan Firebase Auth.
    const { firebaseEmail, displayIdentifier } = normalizeIdentifier(identifier);

    try {
      if (mode === 'login') {
        // Login lewat Firebase Auth
        const cred = await signInWithEmailAndPassword(auth, firebaseEmail, password);

        // Ambil data tambahan siswa (sekolah, wilayah, kelas) dari Firestore
        const profileSnap = await getDoc(doc(db, 'users', cred.user.uid));
        const profile = profileSnap.exists() ? profileSnap.data() : {};

        onCompleteAuth({
          uid: cred.user.uid,
          name: profile.name || cred.user.displayName || 'Siswa Lentera',
          identifier: profile.displayIdentifier || displayIdentifier,
          school: profile.school || 'Tidak Sekolah / Mandiri',
          region: profile.region || 'Indonesia',
          classLevel: profile.classLevel || 10,
        }, false);

      } else {
        // Daftar akun baru lewat Firebase Auth
        const cred = await createUserWithEmailAndPassword(auth, firebaseEmail, password);

        // Set nama tampilan di profil Firebase Auth
        await updateProfile(cred.user, { displayName: name.trim() });

        // Simpan data tambahan siswa ke Firestore, document ID = UID.
        // displayIdentifier disimpan supaya di UI tetap tampil email/nomor HP
        // asli yang diketik siswa, bukan email sintetis di belakang layar.
        const profileData = {
          name: name.trim(),
          displayIdentifier,
          school: school.trim() || 'Tidak Sekolah / Mandiri',
          region: region.trim() || 'Indonesia',
          classLevel: parseInt(studentClass) || 10,
          createdAt: new Date().toISOString(),
        };
        await setDoc(doc(db, 'users', cred.user.uid), profileData);

        onCompleteAuth({ uid: cred.user.uid, identifier: displayIdentifier, ...profileData }, true);
      }
    } catch (err) {
      setErrorMsg(translateFirebaseError(err.code));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-card animate-fade-in">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          aria-label="Tutup form"
          style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', color: 'var(--text-muted)' }}
        >
          <X size={22} aria-hidden="true" />
        </button>

        {/* Brand Header */}
        <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
          <img
            src="/logo%20login.png"
            alt="Lentera Belajar"
            style={{ display: 'block', width: '192px', height: '64px', objectFit: 'contain', margin: '0 auto 0.75rem auto' }}
          />
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 800 }}>
            {mode === 'register' ? 'Daftar Akun Siswa' : 'Masuk ke Lentera Belajar'}
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
            {mode === 'register' 
              ? 'Dapatkan akses gratis ke materi Kurikulum Merdeka offline' 
              : 'Lanjutkan progres belajar dan akses materi yang tersimpan'}
          </p>
        </div>

        {/* Error Alert Box */}
        {errorMsg && (
          <div role="alert" style={{ backgroundColor: '#FEE2E2', border: '1px solid #EF4444', color: '#991B1B', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1rem', textAlign: 'center' }}>
            {errorMsg}
          </div>
        )}

        {/* Google Sign-In */}
        <button
          type="button"
          onClick={handleGoogleSignIn}
          disabled={isGoogleLoading}
          style={{
            width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem',
            padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)',
            background: 'white', fontWeight: 600, fontSize: '0.9rem', opacity: isGoogleLoading ? 0.7 : 1,
            marginBottom: '1.1rem', cursor: isGoogleLoading ? 'default' : 'pointer',
          }}
        >
          <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true" focusable="false">
            <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.9 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.5 6.1 29.5 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z"/>
            <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 15.9 18.9 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.5 6.1 29.5 4 24 4c-7.7 0-14.3 4.3-17.7 10.7z"/>
            <path fill="#4CAF50" d="M24 44c5.4 0 10.3-2.1 14-5.5l-6.5-5.4C29.4 34.9 26.8 36 24 36c-5.3 0-9.7-3.1-11.3-7.5l-6.5 5C9.6 39.6 16.2 44 24 44z"/>
            <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.2 5.7l6.5 5.4C40.9 36.4 44 30.8 44 24c0-1.3-.1-2.7-.4-3.5z"/>
          </svg>
          {isGoogleLoading ? 'Memproses...' : 'Lanjutkan dengan Google'}
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.1rem' }}>
          <div style={{ flex: 1, height: 1, background: 'var(--border-light)' }} />
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>atau</span>
          <div style={{ flex: 1, height: 1, background: 'var(--border-light)' }} />
        </div>

        {/* Auth Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          
          {mode === 'register' && (
            <div>
              <label htmlFor="auth-name" style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.3rem', color: 'var(--text-primary)' }}>
                Nama Lengkap *
              </label>
              <div style={{ position: 'relative' }}>
                <User size={18} color="var(--text-muted)" aria-hidden="true" style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)' }} />
                <input 
                  id="auth-name"
                  type="text"
                  required
                  placeholder="Contoh: Budi Santoso"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: '100%', padding: '0.65rem 0.85rem 0.65rem 2.5rem', borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-light)', outline: 'none', fontSize: '0.9rem'
                  }}
                />
              </div>
            </div>
          )}

          <div>
            <label htmlFor="auth-identifier" style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.3rem', color: 'var(--text-primary)' }}>
              {mode === 'register' ? 'Email atau Nomor HP *' : 'Email *'}
            </label>
            <div style={{ position: 'relative' }}>
              <Mail size={18} color="var(--text-muted)" aria-hidden="true" style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)' }} />
              <input 
                id="auth-identifier"
                type="text"
                required
                placeholder={mode === 'register' ? 'nama@email.com atau 08123456789' : 'nama@email.com'}
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                style={{
                  width: '100%', padding: '0.65rem 0.85rem 0.65rem 2.5rem', borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-light)', outline: 'none', fontSize: '0.9rem'
                }}
              />
            </div>
          </div>

          <div>
            <label htmlFor="auth-password" style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.3rem', color: 'var(--text-primary)' }}>
              Kata Sandi *
            </label>
            <div style={{ position: 'relative' }}>
              <Lock size={18} color="var(--text-muted)" aria-hidden="true" style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)' }} />
              <input 
                id="auth-password"
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: '100%', padding: '0.65rem 0.85rem 0.65rem 2.5rem', borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-light)', outline: 'none', fontSize: '0.9rem'
                }}
              />
            </div>
          </div>

          {mode === 'register' && (
            <>
              <div>
                <label htmlFor="auth-school" style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.3rem', color: 'var(--text-primary)' }}>
                  Sekolah <span style={{ fontWeight: 400, color: 'var(--text-muted)' }}>(Opsional — boleh dikosongkan jika putus sekolah)</span>
                </label>
                <div style={{ position: 'relative' }}>
                  <School size={18} color="var(--text-muted)" aria-hidden="true" style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)' }} />
                  <input 
                    id="auth-school"
                    type="text"
                    placeholder="SMA Negeri 1 / SMK / Strip (-)"
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                    style={{
                      width: '100%', padding: '0.65rem 0.85rem 0.65rem 2.5rem', borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-light)', outline: 'none', fontSize: '0.9rem'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
                <div>
                  <label htmlFor="auth-region" style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.3rem', color: 'var(--text-primary)' }}>
                    Asal Wilayah <span style={{ fontWeight: 400, color: 'var(--text-muted)' }}>(Opsional)</span>
                  </label>
                  <div style={{ position: 'relative' }}>
                    <MapPin size={18} color="var(--text-muted)" aria-hidden="true" style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)' }} />
                    <input 
                      id="auth-region"
                      type="text"
                      placeholder="Kab. / Kota"
                      value={region}
                      onChange={(e) => setRegion(e.target.value)}
                      style={{
                        width: '100%', padding: '0.65rem 0.85rem 0.65rem 2.5rem', borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-light)', outline: 'none', fontSize: '0.9rem'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="auth-class" style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.3rem', color: 'var(--text-primary)' }}>
                    Pilihan Kelas
                  </label>
                  <div style={{ position: 'relative' }}>
                    <BookOpen size={18} color="var(--text-muted)" aria-hidden="true" style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)' }} />
                    <select
                      id="auth-class"
                      value={studentClass}
                      onChange={(e) => setStudentClass(e.target.value)}
                      style={{
                        width: '100%', padding: '0.65rem 0.85rem 0.65rem 2.5rem', borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-light)', outline: 'none', fontSize: '0.9rem', background: 'white'
                      }}
                    >
                      <option value="10">Kelas 10</option>
                      <option value="11">Kelas 11</option>
                      <option value="12">Kelas 12</option>
                    </select>
                  </div>
                </div>
              </div>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '-0.3rem' }}>
                * Catatan: Pilihan kelas tidak membatasi akses. Semua materi Kelas 10-12 tetap bebas dibuka.
              </p>
            </>
          )}

          <button 
            type="submit" 
            className="btn-primary-teal" 
            disabled={isSubmitting}
            style={{ width: '100%', marginTop: '0.5rem', padding: '0.85rem', opacity: isSubmitting ? 0.7 : 1 }}
          >
            {isSubmitting
              ? 'Memproses...'
              : <>{mode === 'register' ? 'Lanjutkan & Buat Akun' : 'Masuk Sekarang'} <ArrowRight size={18} /></>}
          </button>
        </form>

        {/* Switch Mode Footer */}
        <div style={{ textAlign: 'center', marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--border-light)', fontSize: '0.88rem' }}>
          {mode === 'register' ? (
            <span>
              Sudah punya akun?{' '}
              <button onClick={() => setMode('login')} style={{ color: 'var(--primary-teal)', fontWeight: 700 }}>
                Masuk di sini
              </button>
            </span>
          ) : (
            <span>
              Belum punya akun?{' '}
              <button onClick={() => setMode('register')} style={{ color: 'var(--primary-teal)', fontWeight: 700 }}>
                Daftar sekarang
              </button>
            </span>
          )}
        </div>

      </div>
    </div>
  );
}