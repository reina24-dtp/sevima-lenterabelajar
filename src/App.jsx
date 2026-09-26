import React, { useState, useEffect } from 'react';
import NetworkSimulator from './components/NetworkSimulator';
import HeroReference from './components/HeroReference';
import LandingPageSections from './components/LandingPageSections';
import AuthModal from './components/AuthModal';
import OnboardingModal from './components/OnboardingModal';
import Dashboard from './components/Dashboard';
import SubjectCatalog from './components/SubjectCatalog';
import SubbabReader from './components/SubbabReader';
import QuizEngine from './components/QuizEngine';
import MentorQA from './components/MentorQA';
import StatisticsView from './components/StatisticsView';
import BottomNav from './components/BottomNav';

import { SUBJECTS_DATA, INITIAL_USER_STATS } from './data/learningData';
import { LogOut } from 'lucide-react';
import BrandLogo from './components/BrandLogo';
import { auth, db } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import {
  doc, getDoc, collection, query, orderBy,
  onSnapshot, addDoc, updateDoc, serverTimestamp,
} from 'firebase/firestore';

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
  const [subjects, setSubjects] = useState(SUBJECTS_DATA);
  const [mentorThreads, setMentorThreads] = useState([]);
  const [userStats, setUserStats] = useState(INITIAL_USER_STATS);

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
  const handleToggleSubbabDownload = (subjectId, subbabId, isDownloaded) => {
    setSubjects(prevSubjects => {
      return prevSubjects.map(subj => {
        if (subj.id !== subjectId) return subj;
        return {
          ...subj,
          classes: subj.classes.map(cls => ({
            ...cls,
            chapters: cls.chapters.map(chap => ({
              ...chap,
              subbabs: chap.subbabs.map(sb => sb.id === subbabId ? { ...sb, isDownloaded } : sb)
            }))
          }))
        };
      });
    });

    if (isDownloaded) {
      showToast('📥 Subbab berhasil diunduh dan tersimpan di HP!');
    } else {
      showToast('🗑️ Simpanan subbab telah dihapus.');
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

  const handleFinishQuiz = (score) => {
    setUserStats(prev => ({
      ...prev,
      completedSubbabs: prev.completedSubbabs + 1,
      avgQuizScore: Math.round((prev.avgQuizScore + score) / 2)
    }));
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
          setIsOnline={setIsOnline} 
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
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'nowrap' }}>
            
            {/* Brand Logo (Click to go to Beranda Dashboard) */}
            <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('beranda'); }} style={{ textDecoration: 'none' }}>
              <BrandLogo height={44} />
            </a>

            {/* Right Action Items: Network Simulator + Profile Badge + LogOut Button */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <NetworkSimulator 
                isOnline={isOnline} 
                setIsOnline={setIsOnline} 
                pendingSyncCount={pendingSyncCount} 
                triggerSync={triggerSync} 
                isEmbedded={true}
              />

              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary-teal)', background: '#F0FDFA', border: '1px solid var(--border-mint)', padding: '0.35rem 0.85rem', borderRadius: 'var(--radius-pill)', whiteSpace: 'nowrap' }}>
                {user.name} (Kelas {user.classLevel})
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
          </>
        )}

        {/* LOGGED IN: Render Student Dashboard Tabs Only */}
        {user && activeTab === 'beranda' && (
          <Dashboard 
            user={user} 
            subjects={subjects} 
            onNavigateTab={setActiveTab} 
            onSelectSubbab={handleOpenReader} 
          />
        )}

        {user && activeTab === 'mapel' && (
          <SubjectCatalog 
            subjects={subjects} 
            userClass={user.classLevel} 
            onSelectSubbab={handleOpenReader} 
            onToggleSubbabDownload={handleToggleSubbabDownload} 
          />
        )}

        {user && activeTab === 'reader' && (
          <SubbabReader 
            subjectId={activeReaderParams.subjectId} 
            subbabId={activeReaderParams.subbabId} 
            subjects={subjects} 
            onBack={() => setActiveTab('mapel')} 
            onStartQuiz={handleStartQuiz} 
            onAskMentor={handleAskMentor} 
          />
        )}

        {user && activeTab === 'quiz' && (
          <QuizEngine 
            subjectId={activeReaderParams.subjectId} 
            subbabId={activeReaderParams.subbabId} 
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