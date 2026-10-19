// scripts/seedSubbabContent.mjs
//
// Script SEKALI JALAN untuk mengisi koleksi Firestore 'subbabContent' dengan
// isi materi (contentBlocks) & latihan soal (quiz) untuk ke-42 subbab.
// Pakai Firebase ADMIN SDK (bukan SDK client biasa) supaya tidak terhalang
// oleh Firestore Security Rules - cocok untuk seeding data awal dari server/komputer kamu.
//
// CARA PAKAI:
// 1. Di Firebase Console -> Project Settings -> Service Accounts -> klik
//    "Generate new private key". File JSON yang terunduh, simpan sebagai
//    scripts/serviceAccountKey.json (JANGAN di-commit ke git / jangan di-upload ke mana pun).
// 2. Install dependency admin SDK (sekali saja): npm install firebase-admin --save-dev
// 3. Data kuis tambahan dari quizSupplements.json otomatis digabungkan saat seeding.
// 4. Jalankan: node scripts/seedSubbabContent.mjs
// 5. Tunggu sampai muncul "Selesai! X/42 dokumen berhasil ditulis."
//
// Script ini aman dijalankan berulang kali (akan menimpa/overwrite dokumen
// dengan data terbaru dari subbabContentSeed.json dan quizSupplements.json,
// bukan menduplikasi.

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const __dirname = dirname(fileURLToPath(import.meta.url));

let serviceAccount;
try {
  serviceAccount = JSON.parse(
    readFileSync(join(__dirname, 'serviceAccountKey.json'), 'utf-8')
  );
} catch (err) {
  console.error('\n❌ Tidak menemukan scripts/serviceAccountKey.json.');
  console.error('   Unduh dulu dari Firebase Console > Project Settings > Service Accounts > Generate new private key,');
  console.error('   lalu simpan file-nya sebagai scripts/serviceAccountKey.json\n');
  process.exit(1);
}

const app = initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore(app);

const seedData = JSON.parse(
  readFileSync(join(__dirname, 'subbabContentSeed.json'), 'utf-8')
);
const quizSupplements = JSON.parse(
  readFileSync(join(__dirname, 'quizSupplements.json'), 'utf-8')
);

for (const [subbabId, questions] of Object.entries(quizSupplements)) {
  if (!seedData[subbabId]) {
    throw new Error(`Dokumen subbab untuk soal tambahan tidak ditemukan: ${subbabId}`);
  }

  seedData[subbabId].quiz = [...(seedData[subbabId].quiz || []), ...questions];
}

async function run() {
  const entries = Object.entries(seedData);
  console.log(`Mulai menulis ${entries.length} dokumen ke koleksi 'subbabContent'...\n`);

  // Firestore batch write maksimal 500 operasi - 42 dokumen jauh di bawah itu,
  // jadi aman pakai satu batch saja.
  const batch = db.batch();
  for (const [subbabId, content] of entries) {
    const ref = db.collection('subbabContent').doc(subbabId);
    batch.set(ref, content);
  }

  try {
    await batch.commit();
  } catch (err) {
    console.error('❌ Gagal menulis batch:', err.message);
    process.exit(1);
  }

  console.log(`✅ Selesai! ${entries.length}/${entries.length} dokumen berhasil ditulis ke Firestore.`);
  console.log('   Koleksi: subbabContent  |  Project:', serviceAccount.project_id);
}

run();
