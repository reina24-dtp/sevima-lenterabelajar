import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { ArrowLeft, CheckCircle2, XCircle, Award, RotateCcw, ArrowRight, HelpCircle, Lock, Loader2 } from 'lucide-react';
import { loadSubbabContent } from '../contentStore';

function shuffle(values) {
  const result = [...values];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  return result;
}

function prepareQuestions(quiz) {
  return quiz.map((question) => {
    const items = question.options.map((opt, idx) => ({
      text: opt,
      isCorrect: idx === question.correctAnswer
    }));
    const shuffled = shuffle(items);
    const newCorrectIndex = shuffled.findIndex(item => item.isCorrect);

    return {
      ...question,
      options: shuffled.map(item => item.text),
      correctAnswer: newCorrectIndex
    };
  });
}

export default function QuizEngine({ subjectId, subbabId, userId, subjects, onBackToReader, onFinishQuiz }) {
  // subjects hanya berisi metadata katalog; soal kuis sungguhan diambil dari
  // Firestore (dokumen yang sama dengan materi, lihat contentStore.js), dan
  // hanya berhasil kalau subbab ini sudah pernah diunduh.
  const subject = subjects.find(s => s.id === subjectId) || subjects[0];
  let subbab = null;
  for (const cls of subject.classes) {
    for (const chap of cls.chapters) {
      const sb = chap.subbabs.find(s => s.id === subbabId);
      if (sb) { subbab = sb; break; }
    }
  }

  const [questions, setQuestions] = useState(null);
  const [loadError, setLoadError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setIsLoading(true);
    setLoadError(null);
    loadSubbabContent(subbabId, userId)
      .then((data) => {
        if (!cancelled) setQuestions(prepareQuestions(data.quiz || []));
      })
      .catch((err) => {
        if (!cancelled) setLoadError(err.message || 'Gagal memuat kuis.');
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });
    return () => { cancelled = true; };
  }, [subbabId, userId]);

  if (isLoading) {
    return (
      <div className="container animate-fade-in" style={{ paddingTop: '4rem', textAlign: 'center' }}>
        <Loader2 size={32} color="var(--primary-teal)" />
        <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>Memuat latihan soal...</p>
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="container animate-fade-in" style={{ paddingTop: '3rem', textAlign: 'center' }}>
        <div className="card-white" style={{ maxWidth: 500, margin: '0 auto', padding: '3rem' }}>
          <Lock size={40} color="var(--primary-teal)" style={{ marginBottom: '1rem' }} />
          <h3>Latihan Soal Belum Bisa Dibuka</h3>
          <p style={{ color: 'var(--text-secondary)', margin: '1rem 0' }}>{loadError}</p>
          <button onClick={onBackToReader} className="btn-primary-teal">Kembali</button>
        </div>
      </div>
    );
  }

  if (!questions || questions.length === 0) {
    return (
      <div className="container animate-fade-in" style={{ paddingTop: '3rem', textAlign: 'center' }}>
        <div className="card-white" style={{ maxWidth: 500, margin: '0 auto', padding: '3rem' }}>
          <HelpCircle size={48} color="var(--primary-teal)" style={{ marginBottom: '1rem' }} />
          <h3>Kuis Belum Tersedia</h3>
          <p style={{ color: 'var(--text-secondary)', margin: '1rem 0' }}>Subbab ini belum memiliki kuis soal.</p>
          <button onClick={onBackToReader} className="btn-primary-teal">Kembali ke Materi</button>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentIndex];

  const handleSelectOption = (index) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(index);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return;
    setIsAnswerSubmitted(true);
    const isCorrect = selectedOption === currentQ.correctAnswer;
    setUserAnswers(prev => [...prev, { questionId: currentQ.id, selected: selectedOption, isCorrect }]);
  };

  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      // Finished quiz
      setIsFinished(true);
      const totalCorrect = userAnswers.filter(a => a.isCorrect).length + (selectedOption === currentQ.correctAnswer ? 1 : 0);
      const score = Math.round((totalCorrect / questions.length) * 100);

      if (score >= 70) {
        try { confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } }); } catch (e) {}
      }
      onFinishQuiz({ subjectId, subbabId, subbabTitle: subbab?.title || subbabId, score });
    }
  };

  const totalCorrect = userAnswers.filter(a => a.isCorrect).length;
  const finalScore = Math.round((totalCorrect / questions.length) * 100);

  return (
    <div className="container animate-fade-in" style={{ paddingTop: '2rem', paddingBottom: '6rem', maxWidth: '750px' }}>
      
      {/* Top Header Navigation */}
      <button onClick={onBackToReader} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '1.5rem' }}>
        <ArrowLeft size={18} /> Kembali ke Materi Subbab
      </button>

      {!isFinished ? (
        <div className="card-white" style={{ padding: '2.5rem' }}>
          
          {/* Quiz Header Info */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '1rem' }}>
            <div>
              <span className="section-badge">Latihan Soal Subbab</span>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                {subbab.title}
              </h2>
            </div>
            <div style={{ fontWeight: 800, color: 'var(--primary-teal)', fontSize: '1.1rem' }}>
              Soal {currentIndex + 1} / {questions.length}
            </div>
          </div>

          {/* Question Text */}
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1.75rem', lineHeight: 1.45 }}>
            {currentQ.question}
          </h3>

          {/* Options */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
            {currentQ.options.map((opt, idx) => {
              let optBg = '#F8FAFC';
              let optBorder = 'var(--border-light)';
              let optColor = 'var(--text-primary)';

              if (selectedOption === idx) {
                optBg = '#F0FDFA';
                optBorder = 'var(--primary-teal)';
              }

              if (isAnswerSubmitted) {
                if (idx === currentQ.correctAnswer) {
                  optBg = '#D1FAE5';
                  optBorder = '#10B981';
                  optColor = '#065F46';
                } else if (selectedOption === idx && idx !== currentQ.correctAnswer) {
                  optBg = '#FEE2E2';
                  optBorder = '#EF4444';
                  optColor = '#991B1B';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswerSubmitted}
                  style={{
                    padding: '1rem 1.25rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: optBg,
                    border: `2px solid ${optBorder}`,
                    color: optColor,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    textAlign: 'left',
                    fontWeight: selectedOption === idx ? 700 : 500,
                    fontSize: '0.98rem',
                    transition: 'all 0.2s ease',
                    cursor: isAnswerSubmitted ? 'default' : 'pointer'
                  }}
                >
                  <span style={{
                    width: 30, height: 30, borderRadius: '50%',
                    backgroundColor: selectedOption === idx ? 'var(--primary-teal)' : '#E2E8F0',
                    color: selectedOption === idx ? 'white' : 'var(--text-secondary)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.85rem'
                  }}>
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span style={{ flex: 1 }}>{opt}</span>

                  {isAnswerSubmitted && idx === currentQ.correctAnswer && (
                    <CheckCircle2 size={20} color="#10B981" />
                  )}
                  {isAnswerSubmitted && selectedOption === idx && idx !== currentQ.correctAnswer && (
                    <XCircle size={20} color="#EF4444" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Box on Submit */}
          {isAnswerSubmitted && (
            <div style={{ background: '#FEF3C7', borderLeft: '4px solid #F59E0B', padding: '1.25rem', borderRadius: 'var(--radius-sm)', marginBottom: '2rem' }}>
              <div style={{ fontWeight: 800, color: '#D97706', marginBottom: '0.3rem', fontSize: '0.9rem' }}>
                💡 Pembahasan Soal:
              </div>
              <p style={{ color: '#78350F', fontSize: '0.92rem', margin: 0 }}>
                {currentQ.explanation}
              </p>
            </div>
          )}

          {/* Actions */}
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            {!isAnswerSubmitted ? (
              <button
                onClick={handleSubmitAnswer}
                disabled={selectedOption === null}
                className="btn-primary-teal"
                style={{ opacity: selectedOption === null ? 0.5 : 1, padding: '0.85rem 2rem' }}
              >
                Kirim Jawaban
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="btn-amber-gold"
                style={{ padding: '0.85rem 2rem' }}
              >
                {currentIndex < questions.length - 1 ? 'Soal Berikutnya ➔' : 'Lihat Hasil Kuis 🏆'}
              </button>
            )}
          </div>

        </div>
      ) : (
        /* Results Screen */
        <div className="card-white" style={{ textAlign: 'center', padding: '3.5rem 2rem' }}>
          <div style={{
            width: 80, height: 80, borderRadius: '50%',
            backgroundColor: finalScore >= 70 ? '#D1FAE5' : '#FEF3C7',
            color: finalScore >= 70 ? '#059669' : '#D97706',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 1.5rem auto'
          }}>
            <Award size={44} />
          </div>

          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem' }}>
            {finalScore >= 70 ? 'Luar Biasa! Selamat 🎉' : 'Kerja Bagus! Terus Berlatih 💪'}
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '2rem' }}>
            Kamu berhasil menyelesaikan kuis <strong>{subbab.title}</strong>
          </p>

          <div style={{ background: '#F8FAFC', padding: '1.5rem', borderRadius: 'var(--radius-md)', maxWidth: 300, margin: '0 auto 2.5rem auto' }}>
            <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--primary-teal)', fontFamily: 'var(--font-heading)' }}>
              {finalScore} / 100
            </div>
            <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
              {totalCorrect} dari {questions.length} soal dijawab benar (Tersimpan Lokal)
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <button onClick={() => { setIsFinished(false); setCurrentIndex(0); setUserAnswers([]); setSelectedOption(null); setIsAnswerSubmitted(false); }} className="btn-outline">
              <RotateCcw size={16} /> Ulangi Kuis
            </button>
            <button onClick={onBackToReader} className="btn-primary-teal">
              Kembali ke Materi <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
