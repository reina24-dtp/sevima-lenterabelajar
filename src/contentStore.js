// contentStore.js
//
// Mengelola isi materi (contentBlocks) & latihan soal (quiz) per-subbab yang
// SENGAJA tidak dibundel ke dalam JS aplikasi (lihat src/data/learningData.js).
// Isi lengkap disimpan di Firestore, koleksi 'subbabContent', doc id = subbab id.
//
// Firestore sudah diset pakai persistentLocalCache (lihat src/firebase.js), jadi
// begitu sebuah dokumen pernah berhasil diambil dari server, dokumen itu otomatis
// tersimpan di IndexedDB perangkat dan tetap bisa dibaca walau sinyal mati.
//
// Status "sudah diunduh" sendiri kita simpan terpisah di localStorage (bukan
// dari Firestore cache), supaya UI (badge, tombol "Baca Materi") bisa langsung
// tahu status unduhan secara instan & synchronous, tanpa perlu nebak-nebak isi
// cache Firestore yang aksesnya async.

import { doc, getDoc, getDocFromServer } from 'firebase/firestore';
import { db } from './firebase';

const DOWNLOADED_KEY = 'lentera_downloaded_subbabs_v1';

function getDownloadedKey(uid) {
  return uid ? `${DOWNLOADED_KEY}_${encodeURIComponent(uid)}` : null;
}

function readDownloadedSet(uid) {
  try {
    const key = getDownloadedKey(uid);
    if (!key) return new Set();
    const raw = localStorage.getItem(key);
    return new Set(raw ? JSON.parse(raw) : []);
  } catch {
    return new Set();
  }
}

function writeDownloadedSet(set, uid) {
  try {
    const key = getDownloadedKey(uid);
    if (key) localStorage.setItem(key, JSON.stringify([...set]));
  } catch {
    // localStorage penuh/diblokir - abaikan, status unduhan hanya tidak akan
    // bertahan setelah refresh, tapi app tetap jalan.
  }
}

/** Dipanggil secara synchronous untuk render UI (badge, tombol). */
export function getDownloadedIds(uid) {
  return readDownloadedSet(uid);
}

export function isSubbabDownloaded(subbabId, uid) {
  return readDownloadedSet(uid).has(subbabId);
}

/**
 * Mengunduh satu subbab: mengambil dokumennya langsung dari server Firestore
 * (bukan dari cache) supaya kita tahu pasti berhasil terhubung ke internet,
 * lalu menandainya sebagai "terunduh" di localStorage. Setelah ini berhasil
 * sekali, Firestore SDK otomatis menyimpan dokumen tsb di cache lokal device,
 * sehingga getDoc() berikutnya untuk subbab yang sama akan tetap berhasil
 * walau HP sedang offline.
 */
export async function downloadSubbabContent(subbabId, uid) {
  if (!uid) throw new Error('Akun belum siap untuk menyimpan materi.');
  const snap = await getDocFromServer(doc(db, 'subbabContent', subbabId));
  if (!snap.exists()) {
    throw new Error('Materi untuk subbab ini belum tersedia di server.');
  }
  const set = readDownloadedSet(uid);
  set.add(subbabId);
  writeDownloadedSet(set, uid);
  return snap.data();
}

/** Menghapus status unduhan (tidak menghapus cache Firestore, hanya menandai
 *  subbab ini kembali terkunci di UI sampai diunduh ulang). */
export function removeSubbabDownload(subbabId, uid) {
  const set = readDownloadedSet(uid);
  set.delete(subbabId);
  writeDownloadedSet(set, uid);
}

/**
 * Mengambil isi materi + quiz suatu subbab untuk ditampilkan (dipakai oleh
 * SubbabReader & QuizEngine). getDoc() biasa dipakai di sini (bukan
 * getDocFromServer) supaya otomatis jatuh ke cache lokal saat offline.
 * Melempar error jika subbab belum pernah diunduh & sedang tidak ada koneksi.
 */
export async function loadSubbabContent(subbabId, uid) {
  if (!isSubbabDownloaded(subbabId, uid)) {
    throw new Error('Subbab ini belum diunduh. Unduh dulu saat online untuk membacanya.');
  }
  const snap = await getDoc(doc(db, 'subbabContent', subbabId));
  if (!snap.exists()) {
    throw new Error('Materi tidak ditemukan. Coba unduh ulang saat online.');
  }
  return snap.data();
}
