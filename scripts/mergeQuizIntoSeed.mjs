// scripts/mergeQuizIntoSeed.mjs
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { matematikaQuestions } from './data/matematikaQuestions.js';
import { bahasaIndonesiaQuestions } from './data/bahasaIndonesiaQuestions.js';
import { bahasaInggrisQuestions } from './data/bahasaInggrisQuestions.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

const seedPath = join(__dirname, 'subbabContentSeed.json');
const suppPath = join(__dirname, 'quizSupplements.json');

const seedData = JSON.parse(readFileSync(seedPath, 'utf8'));

const allQuizzes = {
  ...matematikaQuestions,
  ...bahasaIndonesiaQuestions,
  ...bahasaInggrisQuestions,
};

const subbabIds = Object.keys(seedData);
console.log(`Menemukan ${subbabIds.length} subbab di subbabContentSeed.json.`);

let totalQuestions = 0;
for (const subbabId of subbabIds) {
  const quizList = allQuizzes[subbabId];
  if (!quizList || !Array.isArray(quizList) || quizList.length !== 10) {
    throw new Error(`Subbab ${subbabId} tidak memiliki 10 soal! Ditemukan: ${quizList?.length}`);
  }

  // Validasi setiap soal
  quizList.forEach((q, idx) => {
    if (!q.id || !q.question || !Array.isArray(q.options) || q.options.length !== 4) {
      throw new Error(`Format soal salah pada ${subbabId} indeks ${idx}`);
    }
    if (typeof q.correctAnswer !== 'number' || q.correctAnswer < 0 || q.correctAnswer > 3) {
      throw new Error(`correctAnswer tidak valid pada ${subbabId} indeks ${idx}`);
    }
    if (!q.explanation || q.explanation.length < 50) {
      throw new Error(`Pembahasan terlalu pendek pada ${subbabId} indeks ${idx}`);
    }
  });

  // Pastikan contentBlocks tetap ada
  if (!seedData[subbabId].contentBlocks || seedData[subbabId].contentBlocks.length === 0) {
    throw new Error(`contentBlocks hilang pada ${subbabId}!`);
  }

  // Update quiz
  seedData[subbabId].quiz = quizList;
  totalQuestions += quizList.length;
}

// Tulis kembali subbabContentSeed.json yang sudah lengkap
writeFileSync(seedPath, JSON.stringify(seedData, null, 2), 'utf8');
console.log(`✅ Berhasil menulis ${totalQuestions} soal ke subbabContentSeed.json untuk ${subbabIds.length} subbab.`);

// Kosongkan quizSupplements.json agar tidak terjadi penambahan ganda saat seeding
writeFileSync(suppPath, JSON.stringify({}, null, 2), 'utf8');
console.log('✅ quizSupplements.json telah direset ke {} (seluruh 10 soal sudah menyatu di subbabContentSeed.json).');
