// Dataset Kurikulum Merdeka SMA/SMK Kelas 10, 11, 12 - Lentera Belajar
// Konten disusun berdasarkan buku teks resmi Kemdikbud (Matematika, Bahasa Indonesia, Bahasa Inggris) Kelas X-XII
// CATATAN: ini hanya metadata katalog (judul, ringkasan, estimasi waktu).
// Isi materi lengkap (contentBlocks) & latihan soal (quiz) TIDAK dibundel di sini -
// diambil per-subbab dari Firestore (koleksi 'subbabContent') lewat src/contentStore.js,
// supaya materi benar-benar perlu diunduh dulu sebelum bisa dibaca offline.

export const SUBJECTS_DATA = [
  {
    "id": "matematika",
    "title": "Matematika",
    "icon": "Calculator",
    "color": "#0F766E",
    "bgColor": "#CCFBF1",
    "description": "Konsep dasar hingga tingkat lanjut Matematika SMA/SMK Kurikulum Merdeka (Eksponen, Logaritma, Trigonometri, Kalkulus, Statistika, dan Peluang).",
    "classes": [
      {
        "classLevel": 10,
        "chapters": [
          {
            "id": "mat-10-bab1",
            "title": "Bab 1: Eksponen dan Logaritma",
            "subbabCount": 1,
            "subbabs": [
              {
                "id": "mat-10-1-1",
                "title": "1.1 Sifat-sifat Eksponen dan Logaritma",
                "estimatedTime": "18 menit",
                "summary": "Eksponen adalah perkalian berulang suatu bilangan basis, sedangkan logaritma adalah operasi kebalikan (invers) dari eksponen. Kedua konsep ini menjadi dasar untuk memodelkan pertumbuhan, peluruhan, bunga majemuk, hingga skala pengukuran seperti Richter dan pH.",
                "keyPoints": [
                  "Perkalian basis sama: aᵐ × aⁿ = aᵐ⁺ⁿ, pembagian: aᵐ / aⁿ = aᵐ⁻ⁿ",
                  "Pemangkatan berganda: (aᵐ)ⁿ = aᵐˣⁿ",
                  "Pangkat nol dan negatif: a⁰ = 1 (a≠0), a⁻ⁿ = 1/aⁿ",
                  "Definisi logaritma: ᵃlog c = b ↔ aᵇ = c, dengan a>0, a≠1, c>0",
                  "Sifat logaritma: ᵃlog(b×c) = ᵃlog b + ᵃlog c ; ᵃlog(bⁿ) = n × ᵃlog b"
                ]
              }
            ]
          },
          {
            "id": "mat-10-bab2",
            "title": "Bab 2: Barisan dan Deret",
            "subbabCount": 1,
            "subbabs": [
              {
                "id": "mat-10-2-1",
                "title": "2.1 Barisan dan Deret Aritmetika serta Geometri",
                "estimatedTime": "16 menit",
                "summary": "Barisan aritmetika memiliki beda (selisih) tetap antarsukunya, sedangkan barisan geometri memiliki rasio (perbandingan) tetap. Kedua konsep ini banyak dipakai untuk memodelkan pola pertumbuhan linear maupun eksponensial dalam kehidupan sehari-hari.",
                "keyPoints": [
                  "Aritmetika — suku ke-n: Uₙ = a + (n−1)b",
                  "Aritmetika — jumlah n suku: Sₙ = n/2 × (2a + (n−1)b)",
                  "Geometri — suku ke-n: Uₙ = a·rⁿ⁻¹",
                  "Geometri — jumlah n suku: Sₙ = a(rⁿ−1)/(r−1), untuk r≠1"
                ]
              }
            ]
          },
          {
            "id": "mat-10-bab3",
            "title": "Bab 3: Perbandingan Trigonometri",
            "subbabCount": 1,
            "subbabs": [
              {
                "id": "mat-10-3-1",
                "title": "3.1 Perbandingan Trigonometri pada Segitiga Siku-siku",
                "estimatedTime": "15 menit",
                "summary": "Perbandingan trigonometri (sinus, kosinus, tangen) menghubungkan sudut dengan panjang sisi pada segitiga siku-siku, dan digunakan luas dalam bidang navigasi, arsitektur, hingga survei tanah.",
                "keyPoints": [
                  "sin θ = depan/miring, cos θ = samping/miring, tan θ = depan/samping",
                  "Identitas dasar: sin²θ + cos²θ = 1",
                  "tan θ = sin θ / cos θ",
                  "Nilai sudut istimewa: 0°, 30°, 45°, 60°, 90° wajib dihafal"
                ]
              }
            ]
          },
          {
            "id": "mat-10-bab4",
            "title": "Bab 4: Sistem Persamaan dan Pertidaksamaan Linear",
            "subbabCount": 1,
            "subbabs": [
              {
                "id": "mat-10-4-1",
                "title": "4.1 Sistem Persamaan Linear Dua Variabel (SPLDV)",
                "estimatedTime": "14 menit",
                "summary": "SPLDV terdiri atas dua persamaan linear dengan dua variabel yang harus dipenuhi secara bersamaan. Penyelesaiannya dapat dicari dengan metode substitusi, eliminasi, atau gabungan keduanya.",
                "keyPoints": [
                  "Bentuk umum: ax + by = c dan dx + ey = f",
                  "Metode substitusi: nyatakan satu variabel dalam variabel lain",
                  "Metode eliminasi: samakan koefisien lalu jumlah/kurangkan persamaan",
                  "Pertidaksamaan linear digambarkan sebagai daerah pada bidang kartesius"
                ]
              }
            ]
          },
          {
            "id": "mat-10-bab5",
            "title": "Bab 5: Persamaan dan Fungsi Kuadrat",
            "subbabCount": 1,
            "subbabs": [
              {
                "id": "mat-10-5-1",
                "title": "5.1 Akar-akar dan Grafik Fungsi Kuadrat",
                "estimatedTime": "16 menit",
                "summary": "Fungsi kuadrat berbentuk f(x) = ax² + bx + c menghasilkan grafik parabola. Akar-akarnya dapat dicari dengan pemfaktoran, melengkapkan kuadrat sempurna, atau rumus abc, dan nilai diskriminan menentukan jenis akarnya.",
                "keyPoints": [
                  "Bentuk umum: f(x) = ax² + bx + c, a≠0",
                  "Rumus abc: x = (−b ± √(b²−4ac)) / 2a",
                  "Diskriminan D = b²−4ac menentukan jenis akar",
                  "Titik puncak parabola: (−b/2a, −D/4a)"
                ]
              }
            ]
          }
        ]
      },
      {
        "classLevel": 11,
        "chapters": [
          {
            "id": "mat-11-bab1",
            "title": "Bab 1: Analisis Data Bivariat",
            "subbabCount": 1,
            "subbabs": [
              {
                "id": "mat-11-1-1",
                "title": "1.1 Korelasi dan Regresi Linear Sederhana",
                "estimatedTime": "17 menit",
                "summary": "Data bivariat adalah data yang melibatkan dua variabel sekaligus, misalnya jam belajar dan nilai ujian. Analisis korelasi mengukur kekuatan hubungan antarvariabel, sedangkan regresi linear memodelkan hubungan tersebut dalam bentuk persamaan garis.",
                "keyPoints": [
                  "Diagram pencar (scatter plot) untuk melihat pola hubungan dua variabel",
                  "Koefisien korelasi r bernilai antara -1 sampai 1",
                  "r mendekati 1 atau -1 berarti hubungan sangat kuat, r mendekati 0 berarti lemah",
                  "Persamaan regresi linear: ŷ = a + bx"
                ]
              }
            ]
          },
          {
            "id": "mat-11-bab2",
            "title": "Bab 2: Komposisi Fungsi dan Fungsi Invers",
            "subbabCount": 1,
            "subbabs": [
              {
                "id": "mat-11-2-1",
                "title": "2.1 Operasi Komposisi Fungsi dan Menentukan Fungsi Invers",
                "estimatedTime": "16 menit",
                "summary": "Komposisi fungsi (f∘g)(x) menggabungkan dua fungsi menjadi satu fungsi baru dengan memasukkan hasil satu fungsi ke fungsi lainnya. Fungsi invers f⁻¹(x) adalah fungsi kebalikan yang 'membatalkan' proses fungsi asal.",
                "keyPoints": [
                  "(f∘g)(x) = f(g(x)), artinya g dikerjakan lebih dulu",
                  "Komposisi fungsi umumnya tidak komutatif: f∘g ≠ g∘f",
                  "Syarat fungsi punya invers: harus fungsi bijektif (korespondensi satu-satu)",
                  "Cara mencari invers: ganti f(x) dengan y, tukar x dan y, selesaikan untuk y"
                ]
              }
            ]
          },
          {
            "id": "mat-11-bab3",
            "title": "Bab 3: Transformasi Fungsi",
            "subbabCount": 1,
            "subbabs": [
              {
                "id": "mat-11-3-1",
                "title": "3.1 Translasi, Refleksi, dan Dilatasi Grafik Fungsi",
                "estimatedTime": "14 menit",
                "summary": "Transformasi fungsi mengubah posisi atau bentuk grafik suatu fungsi melalui translasi (pergeseran), refleksi (pencerminan), dan dilatasi (perbesaran/perkecilan) tanpa mengubah jenis fungsinya.",
                "keyPoints": [
                  "Translasi vertikal: f(x)+k menggeser grafik ke atas (k>0) atau bawah (k<0)",
                  "Translasi horizontal: f(x−h) menggeser grafik ke kanan (h>0) atau kiri (h<0)",
                  "Refleksi terhadap sumbu-x: −f(x); terhadap sumbu-y: f(−x)",
                  "Dilatasi vertikal skala a: a·f(x) meregangkan grafik jika |a|>1"
                ]
              }
            ]
          },
          {
            "id": "mat-11-bab4",
            "title": "Bab 4: Lingkaran",
            "subbabCount": 1,
            "subbabs": [
              {
                "id": "mat-11-4-1",
                "title": "4.1 Persamaan Lingkaran dan Garis Singgung",
                "estimatedTime": "15 menit",
                "summary": "Lingkaran adalah himpunan titik yang berjarak sama (jari-jari) terhadap satu titik pusat. Persamaan lingkaran dan garis singgungnya banyak diterapkan dalam desain roda, satelit orbit, dan radar jangkauan sinyal.",
                "keyPoints": [
                  "Persamaan lingkaran pusat (0,0): x² + y² = r²",
                  "Persamaan lingkaran pusat (a,b): (x−a)² + (y−b)² = r²",
                  "Garis singgung tegak lurus terhadap jari-jari di titik singgungnya",
                  "Jarak titik pusat ke garis singgung sama dengan jari-jari lingkaran"
                ]
              }
            ]
          }
        ]
      },
      {
        "classLevel": 12,
        "chapters": [
          {
            "id": "mat-12-bab1",
            "title": "Bab 1: Barisan dan Deret Geometri",
            "subbabCount": 1,
            "subbabs": [
              {
                "id": "mat-12-1-1",
                "title": "1.1 Deret Geometri Tak Hingga",
                "estimatedTime": "14 menit",
                "summary": "Deret geometri tak hingga adalah penjumlahan suku-suku barisan geometri hingga tak terbatas. Deret ini hanya memiliki jumlah terbatas (konvergen) jika rasio r berada di antara -1 dan 1.",
                "keyPoints": [
                  "Syarat konvergen: -1 < r < 1 (|r| < 1)",
                  "Rumus jumlah tak hingga: S∞ = a / (1−r)",
                  "Jika |r| ≥ 1, deret bersifat divergen (tidak memiliki jumlah)",
                  "Diterapkan pada kasus pantulan bola dan pembagian luas berulang"
                ]
              }
            ]
          },
          {
            "id": "mat-12-bab2",
            "title": "Bab 2: Investasi dan Pinjaman",
            "subbabCount": 1,
            "subbabs": [
              {
                "id": "mat-12-2-1",
                "title": "2.1 Bunga Tunggal, Bunga Majemuk, dan Anuitas",
                "estimatedTime": "16 menit",
                "summary": "Bunga tunggal dihitung hanya dari modal awal setiap periode, sedangkan bunga majemuk dihitung dari modal ditambah bunga periode sebelumnya (bunga berbunga). Anuitas adalah pembayaran pinjaman dengan cicilan tetap setiap periode.",
                "keyPoints": [
                  "Bunga tunggal: Mₙ = M₀(1 + n·i)",
                  "Bunga majemuk: Mₙ = M₀(1 + i)ⁿ",
                  "Anuitas: cicilan tetap = bagian pokok + bunga, proporsinya berubah tiap periode",
                  "Bunga majemuk tumbuh lebih cepat dibanding bunga tunggal dalam jangka panjang"
                ]
              }
            ]
          },
          {
            "id": "mat-12-bab3",
            "title": "Bab 3: Kaidah Pencacahan",
            "subbabCount": 1,
            "subbabs": [
              {
                "id": "mat-12-3-1",
                "title": "3.1 Aturan Perkalian, Permutasi, dan Kombinasi",
                "estimatedTime": "15 menit",
                "summary": "Kaidah pencacahan digunakan untuk menghitung banyaknya cara suatu kejadian dapat terjadi, mencakup aturan perkalian, permutasi (urutan diperhatikan), dan kombinasi (urutan tidak diperhatikan).",
                "keyPoints": [
                  "Aturan perkalian: jika ada k tahap dengan n₁, n₂, ...nₖ cara, total = n₁×n₂×...×nₖ",
                  "Permutasi (urutan penting): P(n,r) = n! / (n−r)!",
                  "Kombinasi (urutan tidak penting): C(n,r) = n! / (r!(n−r)!)",
                  "n! (faktorial) = n×(n−1)×(n−2)×...×1"
                ]
              }
            ]
          },
          {
            "id": "mat-12-bab4",
            "title": "Bab 4: Peluang",
            "subbabCount": 1,
            "subbabs": [
              {
                "id": "mat-12-4-1",
                "title": "4.1 Peluang Kejadian Majemuk",
                "estimatedTime": "14 menit",
                "summary": "Peluang mengukur seberapa besar kemungkinan suatu kejadian terjadi, dengan nilai antara 0 (mustahil) dan 1 (pasti). Peluang kejadian majemuk melibatkan gabungan atau irisan dua kejadian atau lebih.",
                "keyPoints": [
                  "Rumus dasar: P(A) = n(A) / n(S)",
                  "Peluang gabungan: P(A∪B) = P(A) + P(B) − P(A∩B)",
                  "Kejadian saling lepas: P(A∩B) = 0",
                  "Kejadian saling bebas: P(A∩B) = P(A) × P(B)"
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "b-indo",
    "title": "Bahasa Indonesia",
    "icon": "BookOpen",
    "color": "#2563EB",
    "bgColor": "#DBEAFE",
    "description": "Literasi membaca, menulis, dan mengapresiasi ragam teks Kurikulum Merdeka: LHO, anekdot, hikayat, negosiasi, biografi, deskripsi, eksplanasi, puisi, berita, hingga teks diskusi dan persuasi.",
    "classes": [
      {
        "classLevel": 10,
        "chapters": [
          {
            "id": "bind-10-bab1",
            "title": "Bab 1: Mengungkap Fakta Alam secara Objektif (Teks LHO)",
            "subbabCount": 1,
            "subbabs": [
              {
                "id": "bind-10-1-1",
                "title": "1.1 Struktur dan Kaidah Kebahasaan Teks Laporan Hasil Observasi",
                "estimatedTime": "12 menit",
                "summary": "Teks Laporan Hasil Observasi (LHO) menyajikan informasi hasil pengamatan secara objektif, faktual, dan sistematis mengenai suatu fenomena, hewan, tumbuhan, atau lingkungan.",
                "keyPoints": [
                  "Struktur: Pernyataan Umum (Klasifikasi), Deskripsi Bagian, Deskripsi Manfaat",
                  "Bersifat objektif, faktual, dan berdasarkan hasil pengamatan nyata",
                  "Menggunakan kalimat definisi dengan verba kopula (adalah, merupakan, yaitu)",
                  "Menggunakan istilah ilmiah/teknis sesuai bidang yang diamati"
                ]
              }
            ]
          },
          {
            "id": "bind-10-bab2",
            "title": "Bab 2: Mengungkapkan Kritik lewat Humor (Teks Anekdot)",
            "subbabCount": 1,
            "subbabs": [
              {
                "id": "bind-10-2-1",
                "title": "2.1 Struktur dan Fungsi Kritik dalam Teks Anekdot",
                "estimatedTime": "11 menit",
                "summary": "Teks anekdot adalah cerita singkat lucu yang mengandung sindiran atau kritik terhadap suatu peristiwa/tokoh, biasanya berkaitan dengan isu sosial atau politik yang bersifat aktual.",
                "keyPoints": [
                  "Struktur: Abstraksi, Orientasi, Krisis, Reaksi, Koda",
                  "Berfungsi menyampaikan kritik sosial secara halus melalui humor",
                  "Menggunakan kata kerja aksi dan kalimat langsung dalam dialog",
                  "Sering menggunakan gaya bahasa sindiran (sarkasme atau ironi)"
                ]
              }
            ]
          },
          {
            "id": "bind-10-bab3",
            "title": "Bab 3: Menyusuri Nilai dalam Cerita Lintas Zaman (Hikayat & Cerpen)",
            "subbabCount": 1,
            "subbabs": [
              {
                "id": "bind-10-3-1",
                "title": "3.1 Nilai-nilai dan Karakterisasi dalam Hikayat serta Cerpen",
                "estimatedTime": "13 menit",
                "summary": "Hikayat adalah karya sastra Melayu klasik yang sarat nilai moral, sosial, dan budaya, sedangkan cerpen (cerita pendek) adalah karya sastra modern yang mengangkat satu konflik utama secara padat.",
                "keyPoints": [
                  "Hikayat bercirikan bahasa klise, kemustahilan, dan tokoh sakti",
                  "Nilai dalam karya sastra: moral, sosial, budaya, agama, dan pendidikan",
                  "Karakterisasi dapat digambarkan secara langsung (analitik) atau tidak langsung (dramatik)",
                  "Cerpen fokus pada satu konflik utama dengan alur yang padat"
                ]
              }
            ]
          },
          {
            "id": "bind-10-bab4",
            "title": "Bab 4: Belajar Menjadi Negosiator Ulung (Teks Negosiasi)",
            "subbabCount": 1,
            "subbabs": [
              {
                "id": "bind-10-4-1",
                "title": "4.1 Struktur dan Kaidah Kebahasaan Teks Negosiasi",
                "estimatedTime": "12 menit",
                "summary": "Teks negosiasi adalah bentuk interaksi sosial yang bertujuan mencapai kesepakatan antara dua pihak yang memiliki kepentingan berbeda, umumnya berbentuk dialog tawar-menawar.",
                "keyPoints": [
                  "Struktur: Orientasi, Pengajuan, Penawaran, Persetujuan/Penutup",
                  "Tujuan: mencapai kesepakatan yang saling menguntungkan (win-win solution)",
                  "Menggunakan kalimat persuasif dan pasangan tuturan (ajakan-penerimaan/penolakan)",
                  "Bahasa santun dan argumentatif menjadi kunci keberhasilan negosiasi"
                ]
              }
            ]
          },
          {
            "id": "bind-10-bab5",
            "title": "Bab 5: Memetik Keteladanan dari Biografi Tokoh Inspiratif",
            "subbabCount": 1,
            "subbabs": [
              {
                "id": "bind-10-5-1",
                "title": "5.1 Ide Pokok dan Keteladanan dalam Teks Biografi",
                "estimatedTime": "13 menit",
                "summary": "Teks biografi menceritakan riwayat hidup seseorang yang dianggap penting atau inspiratif, ditulis oleh orang lain, dan bertujuan menyampaikan keteladanan dari perjalanan hidup tokoh tersebut.",
                "keyPoints": [
                  "Struktur: Orientasi, Peristiwa/Masalah (rangkaian kejadian), Reorientasi",
                  "Berisi fakta perjalanan hidup tokoh secara kronologis",
                  "Keteladanan diambil dari sikap, perjuangan, atau prestasi tokoh",
                  "Menggunakan kata kerja tindakan dan keterangan waktu secara berurutan"
                ]
              }
            ]
          }
        ]
      },
      {
        "classLevel": 11,
        "chapters": [
          {
            "id": "bind-11-bab1",
            "title": "Bab 1: Mengembangkan Teks Deskripsi",
            "subbabCount": 1,
            "subbabs": [
              {
                "id": "bind-11-1-1",
                "title": "1.1 Ciri Kebahasaan dan Struktur Teks Deskripsi",
                "estimatedTime": "11 menit",
                "summary": "Teks deskripsi menggambarkan suatu objek (tempat, benda, atau orang) secara rinci dan hidup sehingga pembaca seolah dapat melihat, mendengar, atau merasakan objek tersebut secara langsung.",
                "keyPoints": [
                  "Struktur: Identifikasi (gambaran umum objek), Deskripsi Bagian, Simpulan/Kesan",
                  "Bersifat subjektif, menonjolkan kesan pribadi penulis terhadap objek",
                  "Banyak menggunakan kata sifat (adjektiva) dan majas untuk penggambaran hidup",
                  "Melibatkan pancaindra: penglihatan, pendengaran, penciuman, perabaan"
                ]
              }
            ]
          },
          {
            "id": "bind-11-bab2",
            "title": "Bab 2: Mengapresiasi Prosa",
            "subbabCount": 1,
            "subbabs": [
              {
                "id": "bind-11-2-1",
                "title": "2.1 Unsur Intrinsik dalam Apresiasi Teks Prosa",
                "estimatedTime": "13 menit",
                "summary": "Prosa adalah karya sastra naratif seperti novel dan cerpen yang dibangun oleh unsur intrinsik (tema, alur, tokoh, latar, sudut pandang, amanat) yang saling berkaitan membentuk satu kesatuan cerita.",
                "keyPoints": [
                  "Tema: gagasan pokok/ide dasar cerita",
                  "Alur: rangkaian peristiwa (maju, mundur, atau campuran)",
                  "Penokohan: watak tokoh, digambarkan analitik atau dramatik",
                  "Sudut pandang: posisi pengarang dalam bercerita (orang pertama/ketiga)"
                ]
              }
            ]
          },
          {
            "id": "bind-11-bab3",
            "title": "Bab 3: Mengonstruksi Teks Eksplanasi",
            "subbabCount": 1,
            "subbabs": [
              {
                "id": "bind-11-3-1",
                "title": "3.1 Struktur Sebab-Akibat dalam Teks Eksplanasi",
                "estimatedTime": "12 menit",
                "summary": "Teks eksplanasi menjelaskan proses terjadinya suatu fenomena alam, sosial, atau budaya berdasarkan hubungan sebab-akibat secara logis dan sistematis.",
                "keyPoints": [
                  "Struktur: Pernyataan Umum, Deretan Penjelas (sebab-akibat), Interpretasi",
                  "Bersifat faktual dan menjelaskan 'mengapa' dan 'bagaimana' suatu fenomena terjadi",
                  "Banyak menggunakan konjungsi kausalitas (karena, sehingga, akibatnya) dan kronologis (kemudian, setelah itu)",
                  "Fokus pada proses, bukan pada satu objek tunggal seperti teks deskripsi"
                ]
              }
            ]
          },
          {
            "id": "bind-11-bab4",
            "title": "Bab 4: Mengembangkan Apresiasi Puisi",
            "subbabCount": 1,
            "subbabs": [
              {
                "id": "bind-11-4-1",
                "title": "4.1 Diksi, Majas, dan Rima dalam Apresiasi Puisi",
                "estimatedTime": "12 menit",
                "summary": "Puisi adalah karya sastra yang memadatkan makna melalui pemilihan kata (diksi), gaya bahasa (majas), dan bunyi (rima) untuk membangkitkan perasaan dan imajinasi pembaca.",
                "keyPoints": [
                  "Diksi: pemilihan kata yang tepat dan padat makna",
                  "Majas: gaya bahasa seperti metafora, personifikasi, hiperbola",
                  "Rima: pengulangan bunyi di akhir baris untuk efek musikalitas",
                  "Struktur batin puisi: tema, rasa, nada, dan amanat"
                ]
              }
            ]
          },
          {
            "id": "bind-11-bab5",
            "title": "Bab 5: Mengevaluasi Teks Berita",
            "subbabCount": 1,
            "subbabs": [
              {
                "id": "bind-11-5-1",
                "title": "5.1 Struktur dan Prinsip 5W+1H dalam Teks Berita",
                "estimatedTime": "11 menit",
                "summary": "Teks berita menyajikan informasi aktual dan faktual mengenai suatu peristiwa, disusun berdasarkan prinsip piramida terbalik dan menjawab unsur 5W+1H (what, who, when, where, why, how).",
                "keyPoints": [
                  "Struktur: Judul, Teras Berita (Lead), Tubuh Berita, Ekor Berita",
                  "Prinsip piramida terbalik: informasi terpenting diletakkan di awal",
                  "Unsur 5W+1H: apa, siapa, kapan, di mana, mengapa, bagaimana",
                  "Bersifat aktual, faktual, dan berimbang (cover both sides)"
                ]
              }
            ]
          }
        ]
      },
      {
        "classLevel": 12,
        "chapters": [
          {
            "id": "bind-12-bab1",
            "title": "Bab 1: Mengomunikasikan Informasi Penting tentang Pendidikan dan Pekerjaan",
            "subbabCount": 1,
            "subbabs": [
              {
                "id": "bind-12-1-1",
                "title": "1.1 Struktur dan Kaidah Surat Lamaran Pekerjaan",
                "estimatedTime": "13 menit",
                "summary": "Surat lamaran pekerjaan adalah surat resmi yang ditulis pencari kerja untuk mengajukan diri pada suatu posisi di perusahaan/instansi, disusun dengan format dan bahasa baku yang formal.",
                "keyPoints": [
                  "Struktur: Tempat & tanggal, Perihal, Alamat tujuan, Salam pembuka, Isi (paragraf pembuka-inti-penutup), Salam penutup, Tanda tangan & nama",
                  "Menggunakan bahasa baku, formal, dan santun",
                  "Melampirkan dokumen pendukung (CV, ijazah, sertifikat)",
                  "Isi surat mencakup identitas diri, posisi yang dilamar, kualifikasi, dan harapan"
                ]
              }
            ]
          },
          {
            "id": "bind-12-bab2",
            "title": "Bab 2: Meningkatkan Produktivitas melalui Gaya Hidup",
            "subbabCount": 1,
            "subbabs": [
              {
                "id": "bind-12-2-1",
                "title": "2.1 Teks Eksposisi tentang Produktivitas dan Gaya Hidup Sehat",
                "estimatedTime": "12 menit",
                "summary": "Teks eksposisi bertujuan meyakinkan pembaca melalui argumen dan fakta pendukung mengenai suatu gagasan, dalam bab ini difokuskan pada topik produktivitas dan gaya hidup sehat generasi muda.",
                "keyPoints": [
                  "Struktur: Tesis (pernyataan pendapat), Argumentasi, Penegasan Ulang",
                  "Menggabungkan fakta dan opini untuk memperkuat argumen",
                  "Menggunakan konjungsi argumentatif: oleh karena itu, dengan demikian",
                  "Topik produktivitas terkait manajemen waktu, pola tidur, dan gaya hidup aktif"
                ]
              }
            ]
          },
          {
            "id": "bind-12-bab3",
            "title": "Bab 3: Menciptakan Lingkungan Sekolah Aman dan Nyaman",
            "subbabCount": 1,
            "subbabs": [
              {
                "id": "bind-12-3-1",
                "title": "3.1 Menyusun Teks Persuasi untuk Lingkungan Sekolah yang Aman",
                "estimatedTime": "12 menit",
                "summary": "Teks persuasi bertujuan mengajak atau memengaruhi pembaca untuk melakukan atau meyakini sesuatu, dalam konteks ini mengajak warga sekolah menciptakan lingkungan belajar yang aman dari perundungan (bullying) dan kekerasan.",
                "keyPoints": [
                  "Struktur: Pengenalan Isu, Rangkaian Argumen, Pernyataan Ajakan, Penegasan Kembali",
                  "Menggunakan kata kerja imperatif dan kalimat ajakan (mari, ayo, marilah)",
                  "Memadukan fakta (data kasus) dengan bujukan emosional",
                  "Topik keamanan sekolah mencakup pencegahan bullying dan kekerasan"
                ]
              }
            ]
          },
          {
            "id": "bind-12-bab4",
            "title": "Bab 4: Menerapkan Kecerdasan Artifisial dalam Kehidupan Modern",
            "subbabCount": 1,
            "subbabs": [
              {
                "id": "bind-12-4-1",
                "title": "4.1 Teks Diskusi tentang Kecerdasan Artifisial dalam Kehidupan Modern",
                "estimatedTime": "13 menit",
                "summary": "Teks diskusi menyajikan dua sudut pandang berbeda (pro dan kontra) terhadap suatu isu, dalam bab ini mengangkat topik pemanfaatan kecerdasan artifisial (AI) dalam pendidikan dan kehidupan sehari-hari.",
                "keyPoints": [
                  "Struktur: Isu, Argumen Mendukung (pro), Argumen Menentang (kontra), Simpulan/Rekomendasi",
                  "Bersifat berimbang, menampilkan dua sisi pandangan berbeda",
                  "Menggunakan konjungsi pertentangan: namun, akan tetapi, di sisi lain",
                  "Topik AI mencakup manfaat (efisiensi belajar) dan risiko (ketergantungan, plagiarisme)"
                ]
              }
            ]
          },
          {
            "id": "bind-12-bab5",
            "title": "Bab 5: Mengungkapkan Kekaguman tentang Kearifan Lokal",
            "subbabCount": 1,
            "subbabs": [
              {
                "id": "bind-12-5-1",
                "title": "5.1 Mengapresiasi Teks tentang Kearifan Lokal Nusantara",
                "estimatedTime": "12 menit",
                "summary": "Kearifan lokal adalah nilai, pengetahuan, dan praktik budaya khas suatu daerah yang diwariskan turun-temurun, mencerminkan kearifan masyarakat dalam menjaga keseimbangan hidup dan lingkungan.",
                "keyPoints": [
                  "Kearifan lokal mencakup tradisi, adat istiadat, arsitektur, dan sistem pengetahuan lokal",
                  "Teks apresiasi kearifan lokal memadukan deskripsi, eksposisi, dan unsur naratif",
                  "Berfungsi menjaga identitas budaya dan kelestarian lingkungan",
                  "Ditulis dengan nada kekaguman namun tetap berbasis fakta budaya"
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "b-inggris",
    "title": "Bahasa Inggris",
    "icon": "Globe",
    "color": "#7C3AED",
    "bgColor": "#EDE9FE",
    "description": "Mastery of descriptive, recount, explanation, analytical exposition, persuasive, and functional texts for high schoolers, from sports and nature to job applications.",
    "classes": [
      {
        "classLevel": 10,
        "chapters": [
          {
            "id": "bing-10-bab1",
            "title": "Chapter 1: Great Athletes",
            "subbabCount": 1,
            "subbabs": [
              {
                "id": "bing-10-1-1",
                "title": "1.1 Descriptive Text: Describing Great Athletes",
                "estimatedTime": "12 menit",
                "summary": "A descriptive text describes a person, place, or thing in detail so the reader can clearly imagine it. This chapter focuses on describing great athletes' physical appearance, achievements, and character.",
                "keyPoints": [
                  "Structure: Identification (general introduction) and Description (specific details)",
                  "Uses Simple Present Tense for general facts and characteristics",
                  "Adjectives to describe physical traits and personality (tall, muscular, disciplined)",
                  "Vocabulary related to sports achievements: champion, record-holder, medalist"
                ]
              }
            ]
          },
          {
            "id": "bing-10-bab2",
            "title": "Chapter 2: Sports Events",
            "subbabCount": 1,
            "subbabs": [
              {
                "id": "bing-10-2-1",
                "title": "2.1 Recount Text: Narrating Sports Events",
                "estimatedTime": "11 menit",
                "summary": "A recount text retells past events in chronological order, such as narrating what happened during a sports match or competition.",
                "keyPoints": [
                  "Structure: Orientation, Series of Events, Reorientation",
                  "Uses Simple Past Tense to narrate completed actions",
                  "Time connectives: first, then, after that, finally",
                  "Focuses on factual retelling, not opinion"
                ]
              }
            ]
          },
          {
            "id": "bing-10-bab3",
            "title": "Chapter 3: Sports and Health",
            "subbabCount": 1,
            "subbabs": [
              {
                "id": "bing-10-3-1",
                "title": "3.1 Expressing Opinion on Sports and Health",
                "estimatedTime": "12 menit",
                "summary": "This chapter focuses on expressing and asking for opinions about the relationship between regular exercise and personal health, along with useful expressions for agreeing and disagreeing.",
                "keyPoints": [
                  "Expressions for giving opinion: I think, In my opinion, I believe",
                  "Expressions for agreeing/disagreeing: I agree / I'm afraid I disagree",
                  "Modal verbs: should, must, have to for giving health advice",
                  "Vocabulary: cardiovascular, endurance, stamina, immune system"
                ]
              }
            ]
          },
          {
            "id": "bing-10-bab4",
            "title": "Chapter 4: Healthy Foods",
            "subbabCount": 1,
            "subbabs": [
              {
                "id": "bing-10-4-1",
                "title": "4.1 Procedure Text: Making Healthy Foods",
                "estimatedTime": "11 menit",
                "summary": "A procedure text explains how to make or do something through a sequence of clear steps, in this chapter applied to recipes for healthy foods and drinks.",
                "keyPoints": [
                  "Structure: Goal, Materials/Ingredients, Steps",
                  "Uses imperative sentences (command form) for each step",
                  "Sequence connectives: first, next, then, after that, finally",
                  "Vocabulary of cooking verbs: chop, boil, mix, blend, pour"
                ]
              }
            ]
          },
          {
            "id": "bing-10-bab5",
            "title": "Chapter 5: Graffiti",
            "subbabCount": 1,
            "subbabs": [
              {
                "id": "bing-10-5-1",
                "title": "5.1 Analytical Exposition: Graffiti, Art or Vandalism?",
                "estimatedTime": "13 menit",
                "summary": "An analytical exposition text argues a point of view on an issue, supported by logical arguments and evidence. This chapter debates whether graffiti should be considered art or vandalism.",
                "keyPoints": [
                  "Structure: Thesis, Arguments, Reiteration (restating the thesis)",
                  "Uses argumentative connectives: firstly, moreover, however, in conclusion",
                  "Presents a clear stance supported by reasons and examples",
                  "Vocabulary: vandalism, public property, self-expression, mural"
                ]
              }
            ]
          }
        ]
      },
      {
        "classLevel": 11,
        "chapters": [
          {
            "id": "bing-11-bab1",
            "title": "Unit 1: Are We Connected to Nature?",
            "subbabCount": 1,
            "subbabs": [
              {
                "id": "bing-11-1-1",
                "title": "1.1 Discussing Environmental Issues and Nature",
                "estimatedTime": "13 menit",
                "summary": "This unit explores how humans are connected to nature and discusses environmental issues such as deforestation, pollution, and conservation through explanation and discussion texts.",
                "keyPoints": [
                  "Vocabulary: ecosystem, deforestation, conservation, biodiversity, sustainability",
                  "Passive voice used to describe environmental processes: 'Forests are being destroyed'",
                  "Cause-effect connectives: due to, as a result, consequently",
                  "Expressing concern and suggesting solutions for environmental issues"
                ]
              }
            ]
          },
          {
            "id": "bing-11-bab2",
            "title": "Unit 2: Discovering Ourselves",
            "subbabCount": 1,
            "subbabs": [
              {
                "id": "bing-11-2-1",
                "title": "2.1 Talking About Personality and Self-Identity",
                "estimatedTime": "12 menit",
                "summary": "This unit focuses on describing personal identity, character traits, and personal values, along with grammar for talking about habits and personal experiences that shape who we are.",
                "keyPoints": [
                  "Personality adjectives: introverted, empathetic, ambitious, easy-going",
                  "Present Perfect Tense for life experiences: 'I have learned...'",
                  "Expressing personal values and beliefs: 'I value... / I believe in...'",
                  "Reflective writing structure for self-identity essays"
                ]
              }
            ]
          },
          {
            "id": "bing-11-bab3",
            "title": "Unit 3: Why is Water Important?",
            "subbabCount": 1,
            "subbabs": [
              {
                "id": "bing-11-3-1",
                "title": "3.1 Explanation Text: The Importance of Water",
                "estimatedTime": "12 menit",
                "summary": "An explanation text describes how or why something happens, in this unit focusing on the water cycle and the importance of water conservation for human survival.",
                "keyPoints": [
                  "Structure: General Statement, Sequenced Explanation, Closing",
                  "Vocabulary: evaporation, condensation, precipitation, conservation",
                  "Uses Simple Present Tense to describe natural, repeating processes",
                  "Sequencing connectives: first, next, then, finally, as a result"
                ]
              }
            ]
          },
          {
            "id": "bing-11-bab4",
            "title": "Unit 4: Why Should We Live a Healthy Life?",
            "subbabCount": 1,
            "subbabs": [
              {
                "id": "bing-11-4-1",
                "title": "4.1 Persuasive Text: Living a Healthy Lifestyle",
                "estimatedTime": "12 menit",
                "summary": "This unit focuses on persuasive texts that encourage readers to adopt a healthy lifestyle, combining strong arguments with emotional appeal and modal verbs for recommendations.",
                "keyPoints": [
                  "Structure: Introduction of Issue, Persuasive Arguments, Call to Action",
                  "Modal verbs for recommendation: should, ought to, had better",
                  "Persuasive techniques: rhetorical questions, statistics, emotional appeal",
                  "Vocabulary: well-being, balanced diet, physical activity, mental health"
                ]
              }
            ]
          }
        ]
      },
      {
        "classLevel": 12,
        "chapters": [
          {
            "id": "bing-12-bab1",
            "title": "Chapter 1: May I Help You?",
            "subbabCount": 1,
            "subbabs": [
              {
                "id": "bing-12-1-1",
                "title": "1.1 Offering and Responding to Help in Service Contexts",
                "estimatedTime": "11 menit",
                "summary": "This chapter covers functional expressions used in customer service situations, such as offering help, asking for assistance, and responding politely in shops, restaurants, or offices.",
                "keyPoints": [
                  "Offering help: May I help you? / Would you like some assistance?",
                  "Asking for help: Could you help me with...? / I wonder if you could...",
                  "Responding positively: Sure, I'd be happy to. / Of course.",
                  "Declining politely: I'm sorry, I'm afraid I can't right now."
                ]
              }
            ]
          },
          {
            "id": "bing-12-bab2",
            "title": "Chapter 2: Why Don't You Visit Seattle?",
            "subbabCount": 1,
            "subbabs": [
              {
                "id": "bing-12-2-1",
                "title": "2.1 Invitation Text and Giving Recommendations",
                "estimatedTime": "11 menit",
                "summary": "This chapter focuses on writing and responding to invitations, as well as giving travel recommendations using suggestion structures like 'Why don't you...?' and 'You should visit...'.",
                "keyPoints": [
                  "Suggestion structures: Why don't you...? / How about...? / You should...",
                  "Accepting an invitation: I'd love to! / That sounds great!",
                  "Declining an invitation politely: I'm afraid I can't, but thank you for asking",
                  "Vocabulary for describing travel destinations and attractions"
                ]
              }
            ]
          },
          {
            "id": "bing-12-bab3",
            "title": "Chapter 3: Creating Captions",
            "subbabCount": 1,
            "subbabs": [
              {
                "id": "bing-12-3-1",
                "title": "3.1 Writing Effective Captions for Social Media",
                "estimatedTime": "11 menit",
                "summary": "This chapter teaches how to write short, effective captions for photos or social media posts, focusing on conciseness, tone, and appropriate use of hashtags.",
                "keyPoints": [
                  "Captions should be short, catchy, and relevant to the image",
                  "Tone can be informative, humorous, or inspirational depending on purpose",
                  "Hashtags help categorize content and increase visibility",
                  "Avoid overly long or unclear captions that lose the reader's attention"
                ]
              }
            ]
          },
          {
            "id": "bing-12-bab4",
            "title": "Chapter 4: Do You Know How to Apply for a Job?",
            "subbabCount": 1,
            "subbabs": [
              {
                "id": "bing-12-4-1",
                "title": "4.1 Writing a Job Application Letter and CV",
                "estimatedTime": "13 menit",
                "summary": "This chapter covers the structure and language of an English job application letter (cover letter) and curriculum vitae (CV), essential skills for entering the workforce.",
                "keyPoints": [
                  "Cover letter structure: Opening, Body (qualifications), Closing",
                  "CV sections: Personal Information, Education, Work Experience, Skills",
                  "Formal language and action verbs: managed, achieved, coordinated",
                  "Tailoring the application to match the specific job requirements"
                ]
              }
            ]
          },
          {
            "id": "bing-12-bab5",
            "title": "Chapter 5: Who was Involved?",
            "subbabCount": 1,
            "subbabs": [
              {
                "id": "bing-12-5-1",
                "title": "5.1 Recount Text: Narrating Past Events and Involvement",
                "estimatedTime": "12 menit",
                "summary": "This chapter revisits recount text writing at an advanced level, focusing on narrating complex past events and clearly identifying who was involved and their roles.",
                "keyPoints": [
                  "Structure: Orientation (who, when, where), Series of Events, Reorientation",
                  "Uses reported speech to quote what people said during the event",
                  "Identifying roles and involvement of different people in an event",
                  "Combining Simple Past and Past Continuous for overlapping actions"
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

export const INITIAL_MENTOR_THREADS = [
  {
    "id": "thread-1",
    "subjectId": "matematika",
    "subbabTitle": "1.1 Sifat-sifat Eksponen dan Logaritma",
    "studentName": "Rudi Hermawan",
    "question": "Kak mentor, kenapa kalau (a^m)^n itu pangkatnya dikali, tapi kalau a^m x a^n pangkatnya ditambah? Bagaimana cara mudah mengingatnya?",
    "status": "Terjawab",
    "timestamp": "Kemarin, 14:20",
    "mentorName": "Kak Syifa (Alumni Matematika UI)",
    "mentorAnswer": "Pertanyaan bagus Rudi! Bayangkan 2^3 x 2^2. Itu sama dengan (2x2x2) x (2x2) = ada 5 buah perkalian 2 (3+2). Sedangkan (2^3)^2 artinya (2^3) x (2^3) = 2^6 (3x2). Jadi kalau kurung itu artinya pengulangan kelompok pangkat!"
  },
  {
    "id": "thread-2",
    "subjectId": "b-indo",
    "subbabTitle": "1.1 Struktur dan Kaidah Kebahasaan Teks Laporan Hasil Observasi",
    "studentName": "Siti Aminah",
    "question": "Bolehkah teks LHO memasukkan pendapat pribadi di bagian akhir penutup?",
    "status": "Menunggu",
    "timestamp": "Hari ini, 09:15",
    "mentorName": null,
    "mentorAnswer": null
  }
];

export const INITIAL_USER_STATS = {
  "completedSubbabs": 4,
  "avgQuizScore": 88,
  "totalDownloadedMb": "4.2 MB",
  "studyDaysStreak": 5,
  "activityLast7Days": [
    {
      "day": "Sen",
      "minutes": 35,
      "quizCount": 2
    },
    {
      "day": "Sel",
      "minutes": 45,
      "quizCount": 3
    },
    {
      "day": "Rab",
      "minutes": 20,
      "quizCount": 1
    },
    {
      "day": "Kam",
      "minutes": 60,
      "quizCount": 4
    },
    {
      "day": "Jum",
      "minutes": 50,
      "quizCount": 3
    },
    {
      "day": "Sab",
      "minutes": 40,
      "quizCount": 2
    },
    {
      "day": "Min",
      "minutes": 75,
      "quizCount": 5
    }
  ]
};
