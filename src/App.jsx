import React, { useState, useEffect } from 'react';
import NetworkSimulator from './components/NetworkSimulator';
import HeroReference from './components/HeroReference';
import LandingPageSections from './components/LandingPageSections';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import OnboardingModal from './components/OnboardingModal';
import Dashboard from './components/Dashboard';
import SubjectCatalog from './components/SubjectCatalog';
import SubbabReader from './components/SubbabReader';
import QuizEngine from './components/QuizEngine';
import MentorQA from './components/MentorQA';
import StatisticsView from './components/StatisticsView';
import BottomNav from './components/BottomNav';

import { SUBJECTS_DATA } from './data/learningData';
import { LogOut } from 'lucide-react';
import BrandLogo from './components/BrandLogo';
import { auth, db } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import {
  doc, getDoc, collection, query, orderBy, where,
  onSnapshot, addDoc, updateDoc, serverTimestamp,
} from 'firebase/firestore';
import { getDownloadedIds, downloadSubbabContent, removeSubbabDownload } from './contentStore';

export default function App() {
  // Network Simulator & Real Device Network Detection
  const [isOnline, setIsOnline] = useState(typeof navigator !== 'undefined' ? navigator.onLine : true);
  const [pendingSyncCount, setPendingSyncCount] = useState(0);
  const [syncToastMsg, setSyncToastMsg] = useState(null);

  // Auto-detect real WiFi / Cellular connection changes on device
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      showToast('🌐 Koneksi Terhubung! (WiFi / Data Seluler Aktif)');
    };

    const handleOffline = () => {
      setIsOnline(false);
      showToast('📡 Sinyal Terputus! Mode Offline Otomatis Aktif.');
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // User Auth State: dikelola lewat Firebase onAuthStateChanged (bukan localStorage lagi)
  const [user, setUser] = useState(null);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true); // true selagi Firebase cek sesi awal

  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('register');
  const [preselectedClass, setPreselectedClass] = useState(10);
  const [showOnboarding, setShowOnboarding] = useState(false);

  // Active Tab: 'landing' dulu sampai Firebase selesai cek sesi, baru dialihkan otomatis
  const [activeTab, setActiveTab] = useState('landing');

  // Dengarkan perubahan status login Firebase (login, logout, atau sesi lama saat refresh halaman)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          const profileSnap = await getDoc(doc(db, 'users', firebaseUser.uid));
          const profile = profileSnap.exists() ? profileSnap.data() : {};

          setUser({
            uid: firebaseUser.uid,
            name: profile.name || firebaseUser.displayName || 'Siswa Lentera',
            identifier: profile.displayIdentifier || firebaseUser.email,
            school: profile.school || 'Tidak Sekolah / Mandiri',
            region: profile.region || 'Indonesia',
            classLevel: profile.classLevel || 10,
          });
          setActiveTab((prev) => (prev === 'landing' ? 'beranda' : prev));
        } catch (e) {
          // Firestore belum kebaca (misal baru online lagi) - tetap anggap login,
          // pakai data minimal dari Firebase Auth saja dulu
          setUser({
            uid: firebaseUser.uid,
            name: firebaseUser.displayName || 'Siswa Lentera',
            identifier: firebaseUser.email,
            school: 'Tidak Sekolah / Mandiri',
            region: 'Indonesia',
            classLevel: 10,
          });
        }
      } else {
        setUser(null);
        setActiveTab('landing');
      }
      setIsCheckingAuth(false);
    });

    return () => unsubscribe();
  }, []);

  const [activeReaderParams, setActiveReaderParams] = useState({ subjectId: 'matematika', subbabId: 'mat-10-1-1' });

  // Data Store State
  // 'subjects' sekarang hanya berisi katalog (judul, ringkasan, estimasi waktu) -
  // isi materi & quiz lengkap diambil terpisah per-subbab lewat contentStore.js,
  // supaya benar-benar perlu diunduh dulu sebelum bisa dibaca (lihat di bawah).
  const [subjects] = useState(SUBJECTS_DATA);
  const [mentorThreads, setMentorThreads] = useState([]);

  // Hasil kuis sungguhan milik user ini, dari Firestore (koleksi 'quizResults').
  // Statistik di StatisticsView dihitung (derive) dari data mentah ini -
  // bukan angka dummy lagi.
  const [quizResults, setQuizResults] = useState([]);

  // Status unduhan per-subbab (Set berisi subbabId). Sumber kebenarannya
  // localStorage (lewat contentStore.js), bukan field statis di learningData.js -
  // supaya status ini nyata: hanya subbab yang benar-benar pernah berhasil
  // di-fetch dari Firestore saat online yang dianggap "siap dibaca offline".
  const [downloadedIds, setDownloadedIds] = useState(new Set());
  const [downloadBusyId, setDownloadBusyId] = useState(null);

  useEffect(() => {
    setDownloadedIds(user?.uid ? getDownloadedIds(user.uid) : new Set());
  }, [user?.uid]);

  // Dengarkan koleksi 'mentorThreads' di Firestore secara real-time.
  // onSnapshot otomatis mengirim ulang data setiap kali ada thread baru
  // atau jawaban mentor masuk, tanpa perlu refresh halaman - juga tetap
  // jalan saat offline berkat persistentLocalCache di firebase.js.
  useEffect(() => {
    if (!user) {
      setMentorThreads([]);
      return;
    }

    const threadsQuery = query(collection(db, 'mentorThreads'), orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(threadsQuery, (snapshot) => {
      setMentorThreads(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
    }, (err) => {
      console.error('Gagal mendengarkan mentorThreads:', err);
    });

    return () => unsubscribe();
  }, [user]);

  // Dengarkan hasil kuis milik user ini secara real-time (koleksi 'quizResults'),
  // dasar untuk semua angka di tab Statistik - bukan data dummy lagi.
  useEffect(() => {
    if (!user) {
      setQuizResults([]);
      return;
    }

    setQuizResults([]);
    const resultsQuery = query(collection(db, 'quizResults'), where('uid', '==', user.uid));

    const unsubscribe = onSnapshot(resultsQuery, (snapshot) => {
      setQuizResults(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
    }, (err) => {
      console.error('Gagal mendengarkan quizResults:', err);
    });

    return () => unsubscribe();
  }, [user]);

  // Turunkan (derive) statistik asli dari quizResults + status unduhan asli -
  // tidak ada lagi angka yang di-hardcode. Dipakai oleh StatisticsView.
  const userStats = React.useMemo(() => {
    // Skor terbaik per subbab (biar nilai akhir mencerminkan pemahaman terbaik,
    // bukan turun kalau user iseng coba-coba ulang dan dapat nilai jelek).
    const bestScorePerSubbab = {};
    quizResults.forEach(r => {
      if (!bestScorePerSubbab[r.subbabId] || r.score > bestScorePerSubbab[r.subbabId]) {
        bestScorePerSubbab[r.subbabId] = r.score;
      }
    });
    const distinctSubbabIds = Object.keys(bestScorePerSubbab);
    const completedSubbabs = distinctSubbabIds.length;
    const avgQuizScore = completedSubbabs > 0
      ? Math.round(distinctSubbabIds.reduce((sum, id) => sum + bestScorePerSubbab[id], 0) / completedSubbabs)
      : 0;

    // Progres per mapel: subbab unik yang pernah dikerjakan / total subbab di mapel itu.
    const progressPerSubject = {};
    subjects.forEach(subj => {
      const totalInSubject = subj.classes.reduce((sum, cls) => sum + cls.chapters.reduce((s2, ch) => s2 + ch.subbabs.length, 0), 0);
      const subbabIdsInSubject = new Set();
      subj.classes.forEach(cls => cls.chapters.forEach(ch => ch.subbabs.forEach(sb => subbabIdsInSubject.add(sb.id))));
      const completedInSubject = distinctSubbabIds.filter(id => subbabIdsInSubject.has(id)).length;
      progressPerSubject[subj.id] = {
        completed: completedInSubject,
        total: totalInSubject,
        pct: totalInSubject > 0 ? Math.round((completedInSubject / totalInSubject) * 100) : 0
      };
    });

    // Aktivitas 7 hari terakhir: jumlah kuis yang dikerjakan per hari (dari completedAt).
    const dayLabels = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
    const today = new Date();
    const last7Days = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(today.getDate() - i);
      last7Days.push({ key: d.toDateString(), day: dayLabels[d.getDay()], quizCount: 0 });
    }
    quizResults.forEach(r => {
      if (!r.completedAt?.toDate) return; // serverTimestamp belum resolve (baru saja offline) - lewati
      const dKey = r.completedAt.toDate().toDateString();
      const slot = last7Days.find(d => d.key === dKey);
      if (slot) slot.quizCount += 1;
    });

    // Streak: jumlah hari berturut-turut (dari hari ini mundur) yang ada minimal 1 kuis.
    let studyDaysStreak = 0;
    for (let i = last7Days.length - 1; i >= 0; i--) {
      if (last7Days[i].quizCount > 0) studyDaysStreak += 1;
      else break;
    }

    // Kuis yang diselesaikan dalam 7 hari terakhir (pengganti teks "+2 modul minggu ini" yang dulu hardcode).
    const completedLast7Days = last7Days.reduce((sum, d) => sum + d.quizCount, 0);

    return {
      completedSubbabs,
      avgQuizScore,
      completedLast7Days,
      studyDaysStreak,
      activityLast7Days: last7Days,
      progressPerSubject,
    };
  }, [quizResults, subjects]);

  // Sync Queue Effect when Network becomes Online
  useEffect(() => {
    if (isOnline && pendingSyncCount > 0) {
      triggerSync();
    }
  }, [isOnline]);

  const triggerSync = () => {
    // Data thread sendiri sudah otomatis disinkron oleh Firestore offline
    // persistence (lihat handleSubmitThread) - di sini cukup reset counter
    // & kasih notifikasi ke user.
    setPendingSyncCount(0);
    showToast('✨ Status Online: Data antrean offline berhasil disinkronkan ke server!');
  };

  const showToast = (msg) => {
    setSyncToastMsg(msg);
    setTimeout(() => setSyncToastMsg(null), 3500);
  };

  // Auth Handlers
  const handleOpenAuth = (mode = 'register', cls = 10) => {
    setAuthMode(mode);
    setPreselectedClass(cls);
    setShowAuthModal(true);
  };

  const handleCompleteAuth = (userData, isNewRegistration) => {
    // user sudah otomatis di-set oleh listener onAuthStateChanged di atas,
    // di sini cukup urus modal & alur onboarding saja
    setShowAuthModal(false);

    if (isNewRegistration) {
      setShowOnboarding(true);
    } else {
      setActiveTab('beranda');
    }
  };

  const handleFinishOnboarding = () => {
    setShowOnboarding(false);
    setActiveTab('beranda');
  };

  const handleLogout = async () => {
    await signOut(auth); // listener onAuthStateChanged otomatis set user jadi null
    showToast('Anda telah keluar dari akun.');
  };

  // Subbab & Download Handlers
  // Unduh = fetch sungguhan dari Firestore server (bukan sekadar toggle flag).
  // Kalau gagal (biasanya karena offline), status TIDAK berubah jadi "terunduh" -
  // beda dari versi lama yang selalu bilang "berhasil" tanpa benar-benar menyimpan apa pun.
  const handleToggleSubbabDownload = async (subjectId, subbabId, wantDownload) => {
    const uid = user?.uid;
    if (!uid) return false;

    if (!wantDownload) {
      removeSubbabDownload(subbabId, uid);
      setDownloadedIds(getDownloadedIds(uid));
      showToast('🗑️ Simpanan materi offline telah dihapus.');
      return;
    }

    setDownloadBusyId(subbabId);
    try {
      await downloadSubbabContent(subbabId, uid);
      if (auth.currentUser?.uid === uid) setDownloadedIds(getDownloadedIds(uid));
      showToast('📥 Materi berhasil diunduh dan tersimpan untuk dibaca offline!');
      return true;
    } catch (err) {
      console.error('Gagal mengunduh materi:', err);
      showToast(
        isOnline
          ? '❌ Gagal mengunduh materi. Coba lagi.'
          : '📡 Tidak ada koneksi internet - sambungkan dulu untuk mengunduh materi ini.'
      );
      return false;
    } finally {
      setDownloadBusyId(null);
    }
  };

  const handleOpenReader = (subjectId, subbabId) => {
    setActiveReaderParams({ subjectId, subbabId });
    setActiveTab('reader');
    window.scrollTo(0, 0);
  };

  const handleStartQuiz = (subjectId, subbabId) => {
    setActiveReaderParams({ subjectId, subbabId });
    setActiveTab('quiz');
    window.scrollTo(0, 0);
  };

  // Menyimpan hasil kuis sungguhan ke Firestore (koleksi 'quizResults') -
  // ini sumber data asli untuk tab Statistik (lihat useMemo userStats di atas).
  // Setiap percobaan kuis dicatat sebagai dokumen baru; skor TERBAIK per subbab
  // yang dipakai untuk rata-rata, jadi coba-coba ulang tidak menurunkan nilai.
  const handleFinishQuiz = async ({ subjectId, subbabId, subbabTitle, score }) => {
    try {
      await addDoc(collection(db, 'quizResults'), {
        uid: user.uid,
        subjectId,
        subbabId,
        subbabTitle,
        score,
        completedAt: serverTimestamp(),
      });
    } catch (err) {
      console.error('Gagal menyimpan hasil kuis:', err);
      // Tidak perlu toast error di sini - offline persistence Firestore akan
      // tetap menyimpannya secara lokal & sinkron sendiri begitu online lagi,
      // jadi kegagalan di titik ini jarang terjadi kecuali rules salah.
    }
  };

  // Mentor Q&A Handlers
  const handleAskMentor = (subjectId, contextTitle) => {
    setActiveTab('mentor');
    window.scrollTo(0, 0);
  };

  const handleSubmitThread = async (newThread) => {
    // Firestore offline persistence (lihat firebase.js) menangani antrean
    // offline secara otomatis: addDoc tetap "berhasil" secara lokal walau
    // sinyal terputus, lalu disinkron sendiri begitu online kembali -
    // onSnapshot di atas yang membuat perubahan itu langsung kelihatan.
    try {
      await addDoc(collection(db, 'mentorThreads'), {
        subjectId: newThread.subjectId,
        subbabTitle: newThread.subbabTitle,
        studentName: user.name,
        studentUid: user.uid,
        question: newThread.question,
        status: isOnline ? 'Menunggu' : 'Terkirim',
        timestamp: isOnline ? 'Baru saja' : 'Disimpan offline (menunggu koneksi)',
        mentorName: null,
        mentorAnswer: null,
        createdAt: serverTimestamp(),
      });

      if (!isOnline) {
        setPendingSyncCount(prev => prev + 1);
        showToast('📲 Mode Offline: Pertanyaan tersimpan di antrean HP!');
      } else {
        showToast('🚀 Pertanyaan berhasil dikirim ke mentor!');
      }
    } catch (err) {
      console.error('Gagal mengirim pertanyaan:', err);
      showToast('❌ Gagal mengirim pertanyaan. Coba lagi.');
    }
  };

  const handleSimulateMentorReply = async (threadId) => {
    try {
      await updateDoc(doc(db, 'mentorThreads', threadId), {
        status: 'Terjawab',
        mentorName: 'Kak Syifa (Alumni UI & Relawan Lentera)',
        mentorAnswer: 'Pertanyaan yang sangat bagus! Secara umum, kamu bisa menerapkan konsep tersebut dengan langkah sederhana di buku catatanmu. Tetap semangat ya!',
      });
      showToast('💬 Mentor telah memberikan jawaban atas pertanyaanmu!');
    } catch (err) {
      console.error('Gagal menyimpan jawaban mentor:', err);
      showToast('❌ Gagal menyimpan jawaban mentor.');
    }
  };

  // Selagi Firebase mengecek apakah ada sesi login sebelumnya (misal setelah refresh halaman)
  if (isCheckingAuth) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Memuat...</span>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Network Simulator Badge: fixed top right when logged out */}
      {!user && (
        <NetworkSimulator 
          isOnline={isOnline} 
          pendingSyncCount={pendingSyncCount} 
          triggerSync={triggerSync} 
        />
      )}

      {/* Sync Toast Notification */}
      {syncToastMsg && (
        <div style={{
          position: 'fixed',
          bottom: user ? '80px' : '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#0F172A',
          color: 'white',
          padding: '0.75rem 1.5rem',
          borderRadius: 'var(--radius-pill)',
          boxShadow: 'var(--shadow-hero)',
          fontSize: '0.9rem',
          fontWeight: 600,
          zIndex: 2000,
          animation: 'fadeIn 0.3s ease'
        }}>
          {syncToastMsg}
        </div>
      )}

      {/* Logged-in Header Navbar Bar */}
      {user && (
        <header style={{ background: 'white', borderBottom: '1px solid var(--border-light)', padding: '0.85rem 1.5rem', position: 'sticky', top: 0, zIndex: 1000 }}>
          <div className="container app-header-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            
            {/* Brand Logo (Click to go to Beranda Dashboard) */}
            <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('beranda'); }} style={{ textDecoration: 'none' }}>
              <BrandLogo height={44} />
            </a>

            {/* Right Action Items: Network Simulator + Profile Badge + LogOut Button */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <NetworkSimulator 
                isOnline={isOnline} 
                pendingSyncCount={pendingSyncCount} 
                triggerSync={triggerSync} 
                isEmbedded={true}
              />

              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary-teal)', background: '#F0FDFA', border: '1px solid var(--border-mint)', padding: '0.35rem 0.85rem', borderRadius: 'var(--radius-pill)', whiteSpace: 'nowrap' }}>
                {user.name} <span className="user-badge-class-suffix">(Kelas {user.classLevel})</span>
              </span>

              <button 
                onClick={handleLogout} 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.85rem',
                  color: '#DC2626',
                  fontWeight: 700,
                  backgroundColor: '#FEE2E2',
                  padding: '0.4rem 0.85rem',
                  borderRadius: 'var(--radius-pill)',
                  border: '1px solid #FCA5A5',
                  whiteSpace: 'nowrap'
                }}
                title="Keluar dari Akun"
              >
                <LogOut size={15} /> Keluar
              </button>
            </div>

          </div>
        </header>
      )}

      {/* Main View Switcher */}
      <main style={{ flex: 1 }}>
        
        {/* LOGGED OUT: Only render Public Landing Page */}
        {!user && (
          <>
            <HeroReference 
              onOpenAuth={handleOpenAuth} 
              onSelectClass={(cls) => setPreselectedClass(cls)}
            />
            <LandingPageSections onOpenAuth={handleOpenAuth} />
            <Footer />
          </>
        )}

        {/* LOGGED IN: Render Student Dashboard Tabs Only */}
        {user && activeTab === 'beranda' && (
          <Dashboard 
            user={user} 
            subjects={subjects} 
            downloadedIds={downloadedIds}
            userStats={userStats}
            onNavigateTab={setActiveTab} 
            onSelectSubbab={handleOpenReader} 
          />
        )}

        {user && activeTab === 'mapel' && (
          <SubjectCatalog 
            subjects={subjects} 
            userClass={user.classLevel} 
            downloadedIds={downloadedIds}
            downloadBusyId={downloadBusyId}
            onSelectSubbab={handleOpenReader} 
            onToggleSubbabDownload={handleToggleSubbabDownload} 
            onBlockedRead={() => showToast('🔒 Unduh dulu materinya sebelum bisa dibaca offline.')}
          />
        )}

        {user && activeTab === 'reader' && (
          <SubbabReader 
            subjectId={activeReaderParams.subjectId} 
            subbabId={activeReaderParams.subbabId} 
            userId={user.uid}
            subjects={subjects} 
            isDownloaded={downloadedIds.has(activeReaderParams.subbabId)}
            onBack={() => setActiveTab('mapel')} 
            onStartQuiz={handleStartQuiz} 
            onAskMentor={handleAskMentor} 
          />
        )}

        {user && activeTab === 'quiz' && (
          <QuizEngine 
            subjectId={activeReaderParams.subjectId} 
            subbabId={activeReaderParams.subbabId} 
            userId={user.uid}
            subjects={subjects} 
            onBackToReader={() => setActiveTab('reader')} 
            onFinishQuiz={handleFinishQuiz} 
          />
        )}

        {user && activeTab === 'mentor' && (
          <MentorQA 
            threads={mentorThreads} 
            isOnline={isOnline} 
            onSubmitThread={handleSubmitThread} 
            onSimulateMentorReply={handleSimulateMentorReply} 
          />
        )}

        {user && activeTab === 'statistik' && (
          <StatisticsView 
            userStats={userStats} 
            subjects={subjects} 
            downloadedCount={downloadedIds.size}
          />
        )}

      </main>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
        initialMode={authMode} 
        preselectedClass={preselectedClass} 
        onCompleteAuth={handleCompleteAuth} 
      />

      {/* Onboarding 4-Slide Modal */}
      <OnboardingModal 
        isOpen={showOnboarding} 
        onFinishOnboarding={handleFinishOnboarding} 
      />

      {/* Bottom Global Navigation Bar when Logged In */}
      {user && (
        <BottomNav 
          activeTab={activeTab === 'reader' || activeTab === 'quiz' ? 'mapel' : activeTab} 
          onSelectTab={setActiveTab} 
        />
      )}

    </div>
  );
}