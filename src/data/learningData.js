// Dataset Kurikulum Merdeka SMA/SMK Kelas 10, 11, 12 - Lentera Belajar
// Konten disusun berdasarkan buku teks resmi Kemdikbud (Matematika, Bahasa Indonesia, Bahasa Inggris) Kelas X-XII

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
                "isDownloaded": true,
                "summary": "Eksponen adalah perkalian berulang suatu bilangan basis, sedangkan logaritma adalah operasi kebalikan (invers) dari eksponen. Kedua konsep ini menjadi dasar untuk memodelkan pertumbuhan, peluruhan, bunga majemuk, hingga skala pengukuran seperti Richter dan pH.",
                "keyPoints": [
                  "Perkalian basis sama: aᵐ × aⁿ = aᵐ⁺ⁿ, pembagian: aᵐ / aⁿ = aᵐ⁻ⁿ",
                  "Pemangkatan berganda: (aᵐ)ⁿ = aᵐˣⁿ",
                  "Pangkat nol dan negatif: a⁰ = 1 (a≠0), a⁻ⁿ = 1/aⁿ",
                  "Definisi logaritma: ᵃlog c = b ↔ aᵇ = c, dengan a>0, a≠1, c>0",
                  "Sifat logaritma: ᵃlog(b×c) = ᵃlog b + ᵃlog c ; ᵃlog(bⁿ) = n × ᵃlog b"
                ],
                "contentBlocks": [
                  {
                    "type": "paragraph",
                    "text": "Eksponen (pemangkatan) menyatakan perkalian berulang suatu bilangan pokok (basis) sebanyak pangkatnya. Konsep ini muncul dalam perhitungan bunga bank, pertumbuhan populasi, peluruhan zat radioaktif, dan penyebaran virus."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "1. Sifat-sifat Operasional Eksponen"
                  },
                  {
                    "type": "paragraph",
                    "text": "Untuk bilangan real a, b dan bilangan rasional m, n berlaku beberapa sifat dasar yang wajib dihafal siswa sebelum melanjutkan ke materi fungsi eksponensial."
                  },
                  {
                    "type": "formulaBox",
                    "title": "Sifat Dasar Eksponen",
                    "formula": "aᵐ · aⁿ = aᵐ⁺ⁿ  |  aᵐ / aⁿ = aᵐ⁻ⁿ  |  (aᵐ)ⁿ = aᵐˣⁿ  |  (ab)ⁿ = aⁿbⁿ"
                  },
                  {
                    "type": "sectionTitle",
                    "title": "2. Logaritma sebagai Invers Eksponen"
                  },
                  {
                    "type": "paragraph",
                    "text": "Logaritma menjawab pertanyaan: 'basis a dipangkatkan berapa agar hasilnya c?'. Karena logaritma adalah kebalikan pangkat, setiap sifat eksponen memiliki pasangan sifat logaritma yang setara."
                  },
                  {
                    "type": "formulaBox",
                    "title": "Sifat Dasar Logaritma",
                    "formula": "ᵃlog(b·c) = ᵃlog b + ᵃlog c  |  ᵃlog(b/c) = ᵃlog b − ᵃlog c  |  ᵃlog(bⁿ) = n·ᵃlog b"
                  },
                  {
                    "type": "exampleBox",
                    "title": "Contoh: Menyederhanakan Bentuk Pangkat",
                    "problem": "Sederhanakan (2⁴ × 2³) / 2⁵ !",
                    "solutionSteps": [
                      "Pembilang: 2⁴ × 2³ = 2⁴⁺³ = 2⁷.",
                      "Bagi dengan penyebut: 2⁷ / 2⁵ = 2⁷⁻⁵ = 2².",
                      "Hasil akhir: 2² = 4."
                    ]
                  },
                  {
                    "type": "exampleBox",
                    "title": "Contoh: Menghitung Nilai Logaritma",
                    "problem": "Hitung ²log 16 + ²log 4 − ²log 8 !",
                    "solutionSteps": [
                      "Gabungkan menggunakan sifat perkalian & pembagian: ²log(16×4/8) = ²log 8.",
                      "Karena 2³ = 8, maka ²log 8 = 3."
                    ]
                  },
                  {
                    "type": "noteBox",
                    "title": "💡 Jebakan Tanda Negatif",
                    "text": "Perhatikan perbedaan (-3)² = 9 (tanda ikut dipangkatkan) dengan -3² = -9 (tanda di luar operasi pangkat). Kesalahan ini paling sering muncul di ujian."
                  }
                ],
                "quiz": [
                  {
                    "id": "q1",
                    "question": "Hasil dari (2³ × 2⁴) / 2⁵ adalah...",
                    "options": [
                      "4",
                      "128",
                      "4096",
                      "2"
                    ],
                    "correctAnswer": 0,
                    "explanation": "2³×2⁴=2⁷, lalu 2⁷/2⁵=2²=4."
                  },
                  {
                    "id": "q2",
                    "question": "Jika 3⁴ = 81, maka bentuk logaritmanya adalah...",
                    "options": [
                      "³log 81 = 4",
                      "⁸¹log 3 = 4",
                      "⁴log 81 = 3",
                      "³log 4 = 81"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Definisi aᵇ=c ekuivalen dengan ᵃlog c = b, sehingga ³log 81 = 4."
                  },
                  {
                    "id": "q3",
                    "question": "Nilai dari ²log 32 − ²log 4 adalah...",
                    "options": [
                      "3",
                      "8",
                      "28",
                      "2"
                    ],
                    "correctAnswer": 0,
                    "explanation": "²log(32/4) = ²log 8 = 3 karena 2³=8."
                  }
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
                "isDownloaded": false,
                "summary": "Barisan aritmetika memiliki beda (selisih) tetap antarsukunya, sedangkan barisan geometri memiliki rasio (perbandingan) tetap. Kedua konsep ini banyak dipakai untuk memodelkan pola pertumbuhan linear maupun eksponensial dalam kehidupan sehari-hari.",
                "keyPoints": [
                  "Aritmetika — suku ke-n: Uₙ = a + (n−1)b",
                  "Aritmetika — jumlah n suku: Sₙ = n/2 × (2a + (n−1)b)",
                  "Geometri — suku ke-n: Uₙ = a·rⁿ⁻¹",
                  "Geometri — jumlah n suku: Sₙ = a(rⁿ−1)/(r−1), untuk r≠1"
                ],
                "contentBlocks": [
                  {
                    "type": "paragraph",
                    "text": "Barisan aritmetika terbentuk dari penjumlahan beda (b) yang tetap pada setiap suku, misalnya kenaikan gaji berkala atau susunan kursi bioskop. Barisan geometri terbentuk dari perkalian rasio (r) yang tetap, misalnya pertumbuhan bakteri atau bunga majemuk."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "1. Rumus Barisan dan Deret Aritmetika"
                  },
                  {
                    "type": "formulaBox",
                    "title": "Aritmetika",
                    "formula": "Uₙ = a + (n−1)b   |   Sₙ = n/2 (2a + (n−1)b)"
                  },
                  {
                    "type": "sectionTitle",
                    "title": "2. Rumus Barisan dan Deret Geometri"
                  },
                  {
                    "type": "formulaBox",
                    "title": "Geometri",
                    "formula": "Uₙ = a·rⁿ⁻¹   |   Sₙ = a(rⁿ−1)/(r−1)"
                  },
                  {
                    "type": "exampleBox",
                    "title": "Contoh: Suku ke-n Aritmetika",
                    "problem": "Barisan 5, 9, 13, 17, ... Tentukan U₁₂!",
                    "solutionSteps": [
                      "Tentukan a=5 dan b=4 (selisih antarsuku).",
                      "Substitusi: U₁₂ = 5 + (12−1)×4 = 5 + 44 = 49."
                    ]
                  },
                  {
                    "type": "exampleBox",
                    "title": "Contoh: Jumlah Deret Geometri",
                    "problem": "Deret geometri 2, 6, 18, 54, ... Tentukan S₅!",
                    "solutionSteps": [
                      "a=2, r=3. Karena r>1 gunakan Sₙ = a(rⁿ−1)/(r−1).",
                      "S₅ = 2(3⁵−1)/(3−1) = 2(243−1)/2 = 242."
                    ]
                  },
                  {
                    "type": "noteBox",
                    "title": "💡 Membedakan Jenis Barisan",
                    "text": "Cek selisih antarsuku (Uₙ − Uₙ₋₁): jika tetap → aritmetika. Cek hasil bagi antarsuku (Uₙ / Uₙ₋₁): jika tetap → geometri."
                  }
                ],
                "quiz": [
                  {
                    "id": "q1",
                    "question": "Suku ke-12 dari barisan 5, 9, 13, 17, ... adalah...",
                    "options": [
                      "49",
                      "45",
                      "53",
                      "41"
                    ],
                    "correctAnswer": 0,
                    "explanation": "a=5, b=4. U₁₂=5+(11×4)=49."
                  },
                  {
                    "id": "q2",
                    "question": "Jumlah 5 suku pertama deret geometri 2, 6, 18, ... adalah...",
                    "options": [
                      "242",
                      "162",
                      "80",
                      "486"
                    ],
                    "correctAnswer": 0,
                    "explanation": "S₅=2(3⁵−1)/(3−1)=242."
                  },
                  {
                    "id": "q3",
                    "question": "Rasio dari barisan geometri 3, 12, 48, 192 adalah...",
                    "options": [
                      "4",
                      "3",
                      "9",
                      "12"
                    ],
                    "correctAnswer": 0,
                    "explanation": "r = 12/3 = 4, cek: 48/12=4 dan 192/48=4."
                  }
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
                "isDownloaded": false,
                "summary": "Perbandingan trigonometri (sinus, kosinus, tangen) menghubungkan sudut dengan panjang sisi pada segitiga siku-siku, dan digunakan luas dalam bidang navigasi, arsitektur, hingga survei tanah.",
                "keyPoints": [
                  "sin θ = depan/miring, cos θ = samping/miring, tan θ = depan/samping",
                  "Identitas dasar: sin²θ + cos²θ = 1",
                  "tan θ = sin θ / cos θ",
                  "Nilai sudut istimewa: 0°, 30°, 45°, 60°, 90° wajib dihafal"
                ],
                "contentBlocks": [
                  {
                    "type": "paragraph",
                    "text": "Pada segitiga siku-siku, tiga perbandingan dasar dibentuk dari sisi depan sudut, sisi samping sudut, dan sisi miring (hipotenusa). Ketiganya disebut sinus, kosinus, dan tangen."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "1. Definisi dan Identitas Dasar"
                  },
                  {
                    "type": "formulaBox",
                    "title": "Perbandingan Dasar",
                    "formula": "sin θ = de/mi   |   cos θ = sa/mi   |   tan θ = de/sa   |   sin²θ + cos²θ = 1"
                  },
                  {
                    "type": "sectionTitle",
                    "title": "2. Nilai Sudut Istimewa"
                  },
                  {
                    "type": "paragraph",
                    "text": "Sudut 0°, 30°, 45°, 60°, dan 90° memiliki nilai perbandingan trigonometri yang eksak (tanpa kalkulator), dan sering muncul pada soal geometri maupun fisika gerak."
                  },
                  {
                    "type": "exampleBox",
                    "title": "Contoh: Mencari Panjang Sisi",
                    "problem": "Segitiga siku-siku memiliki sudut 30° dan sisi miring 10 cm. Tentukan sisi di depan sudut 30°!",
                    "solutionSteps": [
                      "Gunakan sin 30° = depan/miring.",
                      "sin 30° = 1/2, sehingga depan = 1/2 × 10 = 5 cm."
                    ]
                  },
                  {
                    "type": "noteBox",
                    "title": "💡 Trik Mengingat SOH-CAH-TOA",
                    "text": "Sin = Opposite/Hypotenuse, Cos = Adjacent/Hypotenuse, Tan = Opposite/Adjacent — jembatan keledai ini membantu mengingat posisi sisi dengan cepat saat ujian."
                  }
                ],
                "quiz": [
                  {
                    "id": "q1",
                    "question": "Nilai dari sin 30° + cos 60° adalah...",
                    "options": [
                      "1",
                      "0,5",
                      "√3",
                      "2"
                    ],
                    "correctAnswer": 0,
                    "explanation": "sin30°=1/2, cos60°=1/2, jumlahnya 1."
                  },
                  {
                    "id": "q2",
                    "question": "Jika sisi miring 10 cm dan sudut 30°, panjang sisi di depan sudut tersebut adalah...",
                    "options": [
                      "5 cm",
                      "10 cm",
                      "8,66 cm",
                      "3 cm"
                    ],
                    "correctAnswer": 0,
                    "explanation": "sin30°=1/2, sehingga depan = 1/2×10 = 5 cm."
                  },
                  {
                    "id": "q3",
                    "question": "Jika sin θ = 3/5, maka nilai cos θ adalah...",
                    "options": [
                      "4/5",
                      "3/4",
                      "5/3",
                      "1/5"
                    ],
                    "correctAnswer": 0,
                    "explanation": "sin²θ+cos²θ=1 → cos θ=√(1−9/25)=√(16/25)=4/5."
                  }
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
                "isDownloaded": false,
                "summary": "SPLDV terdiri atas dua persamaan linear dengan dua variabel yang harus dipenuhi secara bersamaan. Penyelesaiannya dapat dicari dengan metode substitusi, eliminasi, atau gabungan keduanya.",
                "keyPoints": [
                  "Bentuk umum: ax + by = c dan dx + ey = f",
                  "Metode substitusi: nyatakan satu variabel dalam variabel lain",
                  "Metode eliminasi: samakan koefisien lalu jumlah/kurangkan persamaan",
                  "Pertidaksamaan linear digambarkan sebagai daerah pada bidang kartesius"
                ],
                "contentBlocks": [
                  {
                    "type": "paragraph",
                    "text": "SPLDV banyak dipakai memodelkan masalah nyata seperti menentukan harga satuan barang dari total belanja, atau menghitung komposisi campuran bahan."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "1. Metode Eliminasi dan Substitusi"
                  },
                  {
                    "type": "paragraph",
                    "text": "Metode eliminasi menghilangkan salah satu variabel dengan menyamakan koefisiennya lalu menjumlahkan atau mengurangkan kedua persamaan. Metode substitusi mengganti salah satu variabel dengan bentuk aljabar dari persamaan lain."
                  },
                  {
                    "type": "exampleBox",
                    "title": "Contoh: Menyelesaikan SPLDV",
                    "problem": "Tentukan x dan y dari: 2x + y = 8 dan x − y = 1",
                    "solutionSteps": [
                      "Jumlahkan kedua persamaan untuk menghilangkan y: (2x+y)+(x−y)=8+1 → 3x=9 → x=3.",
                      "Substitusi x=3 ke persamaan kedua: 3−y=1 → y=2.",
                      "Jadi x=3 dan y=2."
                    ]
                  },
                  {
                    "type": "sectionTitle",
                    "title": "2. Pertidaksamaan Linear Dua Variabel"
                  },
                  {
                    "type": "paragraph",
                    "text": "Pertidaksamaan seperti 2x+y ≤ 8 digambarkan sebagai daerah di satu sisi garis batas 2x+y=8 pada bidang kartesius, dengan garis penuh jika tanda ≤/≥ dan garis putus-putus jika tanda </>."
                  },
                  {
                    "type": "noteBox",
                    "title": "💡 Cek Jawaban",
                    "text": "Selalu substitusikan hasil x dan y ke KEDUA persamaan awal untuk memastikan jawaban benar sebelum melanjutkan ke soal cerita."
                  }
                ],
                "quiz": [
                  {
                    "id": "q1",
                    "question": "Penyelesaian dari 2x+y=8 dan x−y=1 adalah...",
                    "options": [
                      "x=3, y=2",
                      "x=2, y=3",
                      "x=4, y=0",
                      "x=1, y=6"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Eliminasi y: 3x=9→x=3. Substitusi: y=3−1=2."
                  },
                  {
                    "id": "q2",
                    "question": "Daerah penyelesaian dari x+y ≤ 6 pada kuadran I berbentuk...",
                    "options": [
                      "Segitiga di bawah garis x+y=6",
                      "Lingkaran",
                      "Garis lurus tak berujung",
                      "Titik tunggal"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Pertidaksamaan linear dua variabel membentuk daerah setengah bidang, dibatasi sumbu x, y, dan garis x+y=6."
                  },
                  {
                    "id": "q3",
                    "question": "Jika 3x+2y=12 dan x=2, maka nilai y adalah...",
                    "options": [
                      "3",
                      "6",
                      "2",
                      "4"
                    ],
                    "correctAnswer": 0,
                    "explanation": "3(2)+2y=12 → 6+2y=12 → y=3."
                  }
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
                "isDownloaded": false,
                "summary": "Fungsi kuadrat berbentuk f(x) = ax² + bx + c menghasilkan grafik parabola. Akar-akarnya dapat dicari dengan pemfaktoran, melengkapkan kuadrat sempurna, atau rumus abc, dan nilai diskriminan menentukan jenis akarnya.",
                "keyPoints": [
                  "Bentuk umum: f(x) = ax² + bx + c, a≠0",
                  "Rumus abc: x = (−b ± √(b²−4ac)) / 2a",
                  "Diskriminan D = b²−4ac menentukan jenis akar",
                  "Titik puncak parabola: (−b/2a, −D/4a)"
                ],
                "contentBlocks": [
                  {
                    "type": "paragraph",
                    "text": "Grafik fungsi kuadrat berbentuk parabola yang terbuka ke atas jika a>0 dan terbuka ke bawah jika a<0. Titik potong dengan sumbu-x disebut akar-akar persamaan kuadrat."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "1. Mencari Akar dengan Rumus ABC"
                  },
                  {
                    "type": "formulaBox",
                    "title": "Rumus ABC",
                    "formula": "x = (−b ± √(b² − 4ac)) / 2a"
                  },
                  {
                    "type": "sectionTitle",
                    "title": "2. Jenis Akar Berdasarkan Diskriminan"
                  },
                  {
                    "type": "paragraph",
                    "text": "D > 0 menghasilkan dua akar real berbeda, D = 0 menghasilkan satu akar kembar (grafik menyinggung sumbu-x), dan D < 0 menghasilkan tidak ada akar real (grafik tidak memotong sumbu-x)."
                  },
                  {
                    "type": "exampleBox",
                    "title": "Contoh: Mencari Akar Persamaan Kuadrat",
                    "problem": "Tentukan akar-akar dari x² − 5x + 6 = 0!",
                    "solutionSteps": [
                      "Faktorkan: cari dua bilangan yang jika dikali=6 dan dijumlah=−5, yaitu −2 dan −3.",
                      "(x−2)(x−3)=0, sehingga x=2 atau x=3."
                    ]
                  },
                  {
                    "type": "noteBox",
                    "title": "💡 Titik Puncak Parabola",
                    "text": "Koordinat titik puncak (xₚ, yₚ) dicari dengan xₚ = −b/2a lalu substitusikan xₚ ke fungsi untuk mendapatkan yₚ — berguna untuk menentukan nilai maksimum/minimum dalam soal optimasi."
                  }
                ],
                "quiz": [
                  {
                    "id": "q1",
                    "question": "Akar-akar dari x²−5x+6=0 adalah...",
                    "options": [
                      "2 dan 3",
                      "1 dan 6",
                      "-2 dan -3",
                      "5 dan 6"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Faktor dari 6 yang jumlahnya -5 adalah -2 dan -3, sehingga x=2 atau x=3."
                  },
                  {
                    "id": "q2",
                    "question": "Nilai diskriminan dari x²+4x+4=0 adalah...",
                    "options": [
                      "0",
                      "16",
                      "-16",
                      "4"
                    ],
                    "correctAnswer": 0,
                    "explanation": "D=b²−4ac=16−16=0, artinya akar kembar."
                  },
                  {
                    "id": "q3",
                    "question": "Grafik fungsi kuadrat terbuka ke bawah jika...",
                    "options": [
                      "a < 0",
                      "a > 0",
                      "a = 0",
                      "c < 0"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Koefisien a menentukan arah bukaan parabola; a negatif membuat parabola terbuka ke bawah."
                  }
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
                "isDownloaded": true,
                "summary": "Data bivariat adalah data yang melibatkan dua variabel sekaligus, misalnya jam belajar dan nilai ujian. Analisis korelasi mengukur kekuatan hubungan antarvariabel, sedangkan regresi linear memodelkan hubungan tersebut dalam bentuk persamaan garis.",
                "keyPoints": [
                  "Diagram pencar (scatter plot) untuk melihat pola hubungan dua variabel",
                  "Koefisien korelasi r bernilai antara -1 sampai 1",
                  "r mendekati 1 atau -1 berarti hubungan sangat kuat, r mendekati 0 berarti lemah",
                  "Persamaan regresi linear: ŷ = a + bx"
                ],
                "contentBlocks": [
                  {
                    "type": "paragraph",
                    "text": "Ketika dua variabel diduga saling berhubungan, misalnya tinggi badan dan berat badan, kita gunakan analisis data bivariat untuk mengukur seberapa kuat dan searah hubungan tersebut."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "1. Diagram Pencar dan Arah Hubungan"
                  },
                  {
                    "type": "paragraph",
                    "text": "Diagram pencar memplot pasangan data (x,y) pada bidang kartesius. Pola titik yang naik menunjukkan korelasi positif, pola menurun menunjukkan korelasi negatif, dan pola acak menunjukkan tidak ada korelasi."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "2. Koefisien Korelasi dan Garis Regresi"
                  },
                  {
                    "type": "formulaBox",
                    "title": "Interpretasi Koefisien Korelasi (r)",
                    "formula": "0,00–0,19: sangat lemah | 0,20–0,39: lemah | 0,40–0,69: sedang | 0,70–0,89: kuat | 0,90–1,00: sangat kuat"
                  },
                  {
                    "type": "exampleBox",
                    "title": "Contoh: Membaca Arah Korelasi",
                    "problem": "Data menunjukkan semakin lama jam belajar, nilai ujian siswa semakin tinggi. Apa jenis korelasinya?",
                    "solutionSteps": [
                      "Karena kedua variabel bergerak searah (naik bersama), maka korelasinya positif.",
                      "Jika nilai r yang dihitung mendekati +0,85, artinya hubungan tersebut tergolong kuat."
                    ]
                  },
                  {
                    "type": "noteBox",
                    "title": "💡 Korelasi Bukan Kausalitas",
                    "text": "Nilai korelasi tinggi tidak selalu berarti satu variabel menyebabkan variabel lain berubah — bisa jadi ada faktor ketiga yang memengaruhi keduanya."
                  }
                ],
                "quiz": [
                  {
                    "id": "q1",
                    "question": "Jika koefisien korelasi r = 0,92, hubungan kedua variabel tergolong...",
                    "options": [
                      "Sangat kuat",
                      "Lemah",
                      "Tidak ada hubungan",
                      "Sedang"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Nilai r mendekati 1 (0,90-1,00) menunjukkan korelasi sangat kuat."
                  },
                  {
                    "id": "q2",
                    "question": "Pola titik pada diagram pencar yang cenderung menurun menunjukkan korelasi...",
                    "options": [
                      "Negatif",
                      "Positif",
                      "Nol",
                      "Sempurna"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Pola menurun berarti saat x naik, y cenderung turun — korelasi negatif."
                  },
                  {
                    "id": "q3",
                    "question": "Persamaan garis regresi linear sederhana berbentuk...",
                    "options": [
                      "ŷ = a + bx",
                      "y = ax²",
                      "y = a/x",
                      "y = a - x²"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Regresi linear sederhana selalu dimodelkan dengan persamaan garis lurus ŷ = a + bx."
                  }
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
                "isDownloaded": false,
                "summary": "Komposisi fungsi (f∘g)(x) menggabungkan dua fungsi menjadi satu fungsi baru dengan memasukkan hasil satu fungsi ke fungsi lainnya. Fungsi invers f⁻¹(x) adalah fungsi kebalikan yang 'membatalkan' proses fungsi asal.",
                "keyPoints": [
                  "(f∘g)(x) = f(g(x)), artinya g dikerjakan lebih dulu",
                  "Komposisi fungsi umumnya tidak komutatif: f∘g ≠ g∘f",
                  "Syarat fungsi punya invers: harus fungsi bijektif (korespondensi satu-satu)",
                  "Cara mencari invers: ganti f(x) dengan y, tukar x dan y, selesaikan untuk y"
                ],
                "contentBlocks": [
                  {
                    "type": "paragraph",
                    "text": "Komposisi fungsi memodelkan proses berantai, misalnya diskon harga barang lalu ditambah pajak — dua proses yang dijalankan berurutan."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "1. Menghitung Komposisi Fungsi"
                  },
                  {
                    "type": "formulaBox",
                    "title": "Notasi Komposisi",
                    "formula": "(f∘g)(x) = f(g(x))   |   (g∘f)(x) = g(f(x))"
                  },
                  {
                    "type": "sectionTitle",
                    "title": "2. Menentukan Fungsi Invers"
                  },
                  {
                    "type": "paragraph",
                    "text": "Untuk mencari invers f⁻¹(x), langkahnya: tulis y = f(x), tukar posisi x dan y menjadi x = f(y), lalu selesaikan persamaan tersebut untuk y."
                  },
                  {
                    "type": "exampleBox",
                    "title": "Contoh: Mencari Fungsi Invers",
                    "problem": "Tentukan invers dari f(x) = 2x + 6!",
                    "solutionSteps": [
                      "Tulis y = 2x + 6.",
                      "Tukar x dan y: x = 2y + 6.",
                      "Selesaikan untuk y: y = (x−6)/2, sehingga f⁻¹(x) = (x−6)/2."
                    ]
                  },
                  {
                    "type": "noteBox",
                    "title": "💡 Cek Hasil Invers",
                    "text": "Untuk memastikan invers benar, hitung f(f⁻¹(x)) — hasilnya harus kembali menjadi x."
                  }
                ],
                "quiz": [
                  {
                    "id": "q1",
                    "question": "Jika f(x)=2x+6, maka f⁻¹(x) adalah...",
                    "options": [
                      "(x−6)/2",
                      "(x+6)/2",
                      "2x−6",
                      "x/2 − 6"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Tukar x,y pada y=2x+6 → x=2y+6 → y=(x−6)/2."
                  },
                  {
                    "id": "q2",
                    "question": "Jika f(x)=x+2 dan g(x)=3x, maka (f∘g)(2) adalah...",
                    "options": [
                      "8",
                      "6",
                      "10",
                      "12"
                    ],
                    "correctAnswer": 0,
                    "explanation": "g(2)=6, lalu f(6)=6+2=8."
                  },
                  {
                    "id": "q3",
                    "question": "Syarat suatu fungsi memiliki invers adalah fungsi tersebut harus...",
                    "options": [
                      "Bijektif (korespondensi satu-satu)",
                      "Kuadrat",
                      "Genap",
                      "Konstan"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Hanya fungsi bijektif yang menjamin setiap output berpasangan tunggal dengan satu input, sehingga bisa dibalik."
                  }
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
                "isDownloaded": false,
                "summary": "Transformasi fungsi mengubah posisi atau bentuk grafik suatu fungsi melalui translasi (pergeseran), refleksi (pencerminan), dan dilatasi (perbesaran/perkecilan) tanpa mengubah jenis fungsinya.",
                "keyPoints": [
                  "Translasi vertikal: f(x)+k menggeser grafik ke atas (k>0) atau bawah (k<0)",
                  "Translasi horizontal: f(x−h) menggeser grafik ke kanan (h>0) atau kiri (h<0)",
                  "Refleksi terhadap sumbu-x: −f(x); terhadap sumbu-y: f(−x)",
                  "Dilatasi vertikal skala a: a·f(x) meregangkan grafik jika |a|>1"
                ],
                "contentBlocks": [
                  {
                    "type": "paragraph",
                    "text": "Memahami transformasi grafik memudahkan kita menggambar fungsi baru yang rumit dengan memodifikasi grafik fungsi dasar yang sudah dikenal, seperti f(x)=x² atau f(x)=√x."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "1. Translasi (Pergeseran)"
                  },
                  {
                    "type": "formulaBox",
                    "title": "Translasi",
                    "formula": "f(x)+k → geser vertikal   |   f(x−h) → geser horizontal"
                  },
                  {
                    "type": "sectionTitle",
                    "title": "2. Refleksi dan Dilatasi"
                  },
                  {
                    "type": "formulaBox",
                    "title": "Refleksi & Dilatasi",
                    "formula": "−f(x) → cermin sumbu-x   |   f(−x) → cermin sumbu-y   |   a·f(x) → dilatasi vertikal"
                  },
                  {
                    "type": "exampleBox",
                    "title": "Contoh: Menentukan Hasil Translasi",
                    "problem": "Grafik f(x)=x² digeser 3 satuan ke kanan dan 2 satuan ke atas. Tentukan fungsi barunya!",
                    "solutionSteps": [
                      "Geser ke kanan 3 satuan: ganti x menjadi (x−3), menjadi (x−3)².",
                      "Geser ke atas 2 satuan: tambahkan 2, sehingga fungsi baru g(x) = (x−3)² + 2."
                    ]
                  },
                  {
                    "type": "noteBox",
                    "title": "💡 Urutan Transformasi",
                    "text": "Jika ada beberapa transformasi sekaligus, urutan pengerjaan biasanya: dilatasi/refleksi dahulu, baru translasi — kecuali soal menyatakan urutan lain secara eksplisit."
                  }
                ],
                "quiz": [
                  {
                    "id": "q1",
                    "question": "Grafik f(x)=x² digeser 3 satuan ke kanan dan 2 satuan ke atas menjadi...",
                    "options": [
                      "(x−3)²+2",
                      "(x+3)²+2",
                      "(x−3)²−2",
                      "x²+5"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Geser kanan mengganti x dengan (x−3); geser atas menambah 2 pada hasil akhir."
                  },
                  {
                    "id": "q2",
                    "question": "Refleksi grafik f(x) terhadap sumbu-x menghasilkan fungsi...",
                    "options": [
                      "−f(x)",
                      "f(−x)",
                      "f(x)+1",
                      "1/f(x)"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Pencerminan terhadap sumbu-x membalik tanda nilai fungsi, menjadi −f(x)."
                  },
                  {
                    "id": "q3",
                    "question": "Jika g(x) = 2f(x), maka grafik g(x) dibandingkan f(x) mengalami...",
                    "options": [
                      "Dilatasi vertikal, meregang 2 kali",
                      "Translasi ke atas 2 satuan",
                      "Refleksi terhadap sumbu-y",
                      "Tidak berubah"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Mengalikan fungsi dengan konstanta 2 meregangkan grafik secara vertikal (dilatasi)."
                  }
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
                "isDownloaded": false,
                "summary": "Lingkaran adalah himpunan titik yang berjarak sama (jari-jari) terhadap satu titik pusat. Persamaan lingkaran dan garis singgungnya banyak diterapkan dalam desain roda, satelit orbit, dan radar jangkauan sinyal.",
                "keyPoints": [
                  "Persamaan lingkaran pusat (0,0): x² + y² = r²",
                  "Persamaan lingkaran pusat (a,b): (x−a)² + (y−b)² = r²",
                  "Garis singgung tegak lurus terhadap jari-jari di titik singgungnya",
                  "Jarak titik pusat ke garis singgung sama dengan jari-jari lingkaran"
                ],
                "contentBlocks": [
                  {
                    "type": "paragraph",
                    "text": "Lingkaran didefinisikan sebagai kumpulan semua titik pada bidang yang berjarak tetap (disebut jari-jari) dari sebuah titik tertentu (disebut pusat)."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "1. Bentuk Persamaan Lingkaran"
                  },
                  {
                    "type": "formulaBox",
                    "title": "Persamaan Lingkaran",
                    "formula": "Pusat (0,0): x² + y² = r²   |   Pusat (a,b): (x−a)² + (y−b)² = r²"
                  },
                  {
                    "type": "sectionTitle",
                    "title": "2. Garis Singgung Lingkaran"
                  },
                  {
                    "type": "paragraph",
                    "text": "Garis singgung menyentuh lingkaran tepat di satu titik dan selalu tegak lurus terhadap jari-jari yang menuju titik singgung tersebut."
                  },
                  {
                    "type": "exampleBox",
                    "title": "Contoh: Menentukan Persamaan Lingkaran",
                    "problem": "Tentukan persamaan lingkaran berpusat di (2,3) dengan jari-jari 5!",
                    "solutionSteps": [
                      "Gunakan bentuk (x−a)²+(y−b)²=r² dengan a=2, b=3, r=5.",
                      "Hasil: (x−2)² + (y−3)² = 25."
                    ]
                  },
                  {
                    "type": "noteBox",
                    "title": "💡 Mengenali Pusat dan Jari-jari",
                    "text": "Dari persamaan (x−a)²+(y−b)²=r², pusat lingkaran langsung terbaca sebagai (a,b) dan jari-jari adalah akar dari ruas kanan."
                  }
                ],
                "quiz": [
                  {
                    "id": "q1",
                    "question": "Persamaan lingkaran berpusat (2,3) dengan jari-jari 5 adalah...",
                    "options": [
                      "(x−2)²+(y−3)²=25",
                      "(x+2)²+(y+3)²=25",
                      "x²+y²=25",
                      "(x−2)²+(y−3)²=5"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Substitusi langsung a=2, b=3, r=5 ke bentuk (x−a)²+(y−b)²=r²."
                  },
                  {
                    "id": "q2",
                    "question": "Jari-jari lingkaran dengan persamaan x²+y²=49 adalah...",
                    "options": [
                      "7",
                      "49",
                      "24,5",
                      "14"
                    ],
                    "correctAnswer": 0,
                    "explanation": "r² = 49, sehingga r = √49 = 7."
                  },
                  {
                    "id": "q3",
                    "question": "Garis singgung lingkaran di suatu titik selalu...",
                    "options": [
                      "Tegak lurus jari-jari di titik itu",
                      "Sejajar sumbu-x",
                      "Melewati pusat lingkaran",
                      "Memotong lingkaran di dua titik"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Sifat dasar garis singgung lingkaran adalah tegak lurus terhadap jari-jari pada titik singgungnya."
                  }
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
                "isDownloaded": true,
                "summary": "Deret geometri tak hingga adalah penjumlahan suku-suku barisan geometri hingga tak terbatas. Deret ini hanya memiliki jumlah terbatas (konvergen) jika rasio r berada di antara -1 dan 1.",
                "keyPoints": [
                  "Syarat konvergen: -1 < r < 1 (|r| < 1)",
                  "Rumus jumlah tak hingga: S∞ = a / (1−r)",
                  "Jika |r| ≥ 1, deret bersifat divergen (tidak memiliki jumlah)",
                  "Diterapkan pada kasus pantulan bola dan pembagian luas berulang"
                ],
                "contentBlocks": [
                  {
                    "type": "paragraph",
                    "text": "Ketika rasio suatu barisan geometri berada di antara -1 dan 1, jumlah seluruh suku hingga tak hingga akan mendekati suatu nilai tertentu — inilah yang disebut deret geometri konvergen."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "1. Rumus Jumlah Tak Hingga"
                  },
                  {
                    "type": "formulaBox",
                    "title": "Deret Geometri Tak Hingga",
                    "formula": "S∞ = a / (1 − r), berlaku untuk −1 < r < 1"
                  },
                  {
                    "type": "exampleBox",
                    "title": "Contoh: Menghitung Jumlah Tak Hingga",
                    "problem": "Tentukan jumlah deret geometri tak hingga dari 4 + 2 + 1 + 1/2 + ...",
                    "solutionSteps": [
                      "Tentukan a=4 dan r=1/2 (karena 2/4=1/2).",
                      "Substitusi ke rumus: S∞ = 4 / (1 − 1/2) = 4 / (1/2) = 8."
                    ]
                  },
                  {
                    "type": "noteBox",
                    "title": "💡 Aplikasi Nyata",
                    "text": "Deret geometri tak hingga sering muncul pada soal pantulan bola yang tingginya terus berkurang dengan rasio tetap, di mana total jarak pantulan dihitung menggunakan S∞."
                  }
                ],
                "quiz": [
                  {
                    "id": "q1",
                    "question": "Jumlah deret geometri tak hingga 4+2+1+1/2+... adalah...",
                    "options": [
                      "8",
                      "6",
                      "4",
                      "16"
                    ],
                    "correctAnswer": 0,
                    "explanation": "a=4, r=1/2. S∞ = 4/(1−1/2) = 8."
                  },
                  {
                    "id": "q2",
                    "question": "Deret geometri tak hingga memiliki jumlah terbatas jika...",
                    "options": [
                      "-1 < r < 1",
                      "r > 1",
                      "r = 1",
                      "r < -1"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Syarat konvergen suatu deret geometri tak hingga adalah |r| < 1."
                  },
                  {
                    "id": "q3",
                    "question": "Jika a=9 dan r=1/3, maka S∞ adalah...",
                    "options": [
                      "13,5",
                      "9",
                      "27",
                      "3"
                    ],
                    "correctAnswer": 0,
                    "explanation": "S∞ = 9/(1−1/3) = 9/(2/3) = 13,5."
                  }
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
                "isDownloaded": false,
                "summary": "Bunga tunggal dihitung hanya dari modal awal setiap periode, sedangkan bunga majemuk dihitung dari modal ditambah bunga periode sebelumnya (bunga berbunga). Anuitas adalah pembayaran pinjaman dengan cicilan tetap setiap periode.",
                "keyPoints": [
                  "Bunga tunggal: Mₙ = M₀(1 + n·i)",
                  "Bunga majemuk: Mₙ = M₀(1 + i)ⁿ",
                  "Anuitas: cicilan tetap = bagian pokok + bunga, proporsinya berubah tiap periode",
                  "Bunga majemuk tumbuh lebih cepat dibanding bunga tunggal dalam jangka panjang"
                ],
                "contentBlocks": [
                  {
                    "type": "paragraph",
                    "text": "Memahami perbedaan bunga tunggal dan majemuk penting sebelum memilih produk tabungan, deposito, atau pinjaman bank, karena keduanya menghasilkan nilai akhir yang sangat berbeda dalam jangka panjang."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "1. Bunga Tunggal vs Bunga Majemuk"
                  },
                  {
                    "type": "formulaBox",
                    "title": "Rumus Bunga",
                    "formula": "Tunggal: Mₙ = M₀(1+n·i)   |   Majemuk: Mₙ = M₀(1+i)ⁿ"
                  },
                  {
                    "type": "sectionTitle",
                    "title": "2. Anuitas Pinjaman"
                  },
                  {
                    "type": "paragraph",
                    "text": "Pada sistem anuitas, jumlah cicilan setiap bulan tetap sama, namun komposisinya berubah: di awal periode porsi bunga lebih besar, sedangkan porsi pelunasan pokok pinjaman semakin besar mendekati akhir periode."
                  },
                  {
                    "type": "exampleBox",
                    "title": "Contoh: Menghitung Bunga Majemuk",
                    "problem": "Modal Rp1.000.000 ditabung dengan bunga majemuk 10% per tahun. Tentukan nilai setelah 2 tahun!",
                    "solutionSteps": [
                      "Gunakan rumus Mₙ = M₀(1+i)ⁿ dengan M₀=1.000.000, i=0,1, n=2.",
                      "M₂ = 1.000.000 × (1,1)² = 1.000.000 × 1,21 = Rp1.210.000."
                    ]
                  },
                  {
                    "type": "noteBox",
                    "title": "💡 Bunga Majemuk = Bunga Berbunga",
                    "text": "Pada bunga majemuk, bunga yang didapat di periode sebelumnya ikut dihitung sebagai modal periode berikutnya, sehingga pertumbuhannya bersifat eksponensial, bukan linear seperti bunga tunggal."
                  }
                ],
                "quiz": [
                  {
                    "id": "q1",
                    "question": "Modal Rp1.000.000 dengan bunga majemuk 10% per tahun setelah 2 tahun menjadi...",
                    "options": [
                      "Rp1.210.000",
                      "Rp1.200.000",
                      "Rp1.100.000",
                      "Rp1.331.000"
                    ],
                    "correctAnswer": 0,
                    "explanation": "M₂=1.000.000×(1,1)²=1.210.000."
                  },
                  {
                    "id": "q2",
                    "question": "Perbedaan utama bunga tunggal dan majemuk terletak pada...",
                    "options": [
                      "Bunga majemuk dihitung dari modal+bunga sebelumnya, tunggal hanya dari modal awal",
                      "Bunga tunggal selalu lebih besar",
                      "Keduanya identik",
                      "Bunga majemuk hanya untuk pinjaman"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Bunga majemuk bersifat berbunga (compounding), sedangkan bunga tunggal tetap dihitung dari modal awal tiap periode."
                  },
                  {
                    "id": "q3",
                    "question": "Pada sistem anuitas, menjelang akhir masa pinjaman, porsi bunga dalam cicilan akan...",
                    "options": [
                      "Semakin kecil",
                      "Semakin besar",
                      "Tetap sama",
                      "Menjadi nol seketika"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Seiring pokok pinjaman berkurang, bunga yang dihitung dari sisa pokok juga mengecil, sehingga porsi pelunasan pokok membesar."
                  }
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
                "isDownloaded": false,
                "summary": "Kaidah pencacahan digunakan untuk menghitung banyaknya cara suatu kejadian dapat terjadi, mencakup aturan perkalian, permutasi (urutan diperhatikan), dan kombinasi (urutan tidak diperhatikan).",
                "keyPoints": [
                  "Aturan perkalian: jika ada k tahap dengan n₁, n₂, ...nₖ cara, total = n₁×n₂×...×nₖ",
                  "Permutasi (urutan penting): P(n,r) = n! / (n−r)!",
                  "Kombinasi (urutan tidak penting): C(n,r) = n! / (r!(n−r)!)",
                  "n! (faktorial) = n×(n−1)×(n−2)×...×1"
                ],
                "contentBlocks": [
                  {
                    "type": "paragraph",
                    "text": "Kaidah pencacahan menjawab pertanyaan 'ada berapa banyak cara' — misalnya menyusun password, memilih pengurus organisasi, atau menentukan rute perjalanan."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "1. Permutasi vs Kombinasi"
                  },
                  {
                    "type": "formulaBox",
                    "title": "Rumus Permutasi & Kombinasi",
                    "formula": "P(n,r) = n! / (n−r)!   |   C(n,r) = n! / (r!(n−r)!)"
                  },
                  {
                    "type": "paragraph",
                    "text": "Kunci membedakan keduanya: gunakan permutasi jika urutan berpengaruh pada hasil (misalnya menyusun juara 1,2,3), gunakan kombinasi jika urutan tidak berpengaruh (misalnya memilih anggota tim)."
                  },
                  {
                    "type": "exampleBox",
                    "title": "Contoh: Menghitung Kombinasi",
                    "problem": "Dari 5 siswa akan dipilih 2 orang sebagai perwakilan lomba (tanpa peran khusus). Ada berapa cara?",
                    "solutionSteps": [
                      "Karena urutan tidak penting (kedua posisi setara), gunakan kombinasi C(5,2).",
                      "C(5,2) = 5!/(2!×3!) = (5×4)/(2×1) = 10 cara."
                    ]
                  },
                  {
                    "type": "noteBox",
                    "title": "💡 Ciri Soal Permutasi",
                    "text": "Kata kunci seperti 'juara 1,2,3', 'ketua-wakil-sekretaris', atau 'nomor urut' menandakan urutan penting → gunakan permutasi, bukan kombinasi."
                  }
                ],
                "quiz": [
                  {
                    "id": "q1",
                    "question": "Banyak cara memilih 2 dari 5 siswa sebagai perwakilan (tanpa peran berbeda) adalah...",
                    "options": [
                      "10",
                      "20",
                      "5",
                      "25"
                    ],
                    "correctAnswer": 0,
                    "explanation": "C(5,2) = 5!/(2!3!) = 10."
                  },
                  {
                    "id": "q2",
                    "question": "Banyak cara menyusun juara 1 dan 2 dari 4 finalis adalah...",
                    "options": [
                      "12",
                      "6",
                      "8",
                      "16"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Karena urutan (posisi juara) penting, gunakan P(4,2)=4!/2!=12."
                  },
                  {
                    "id": "q3",
                    "question": "Nilai dari 5! adalah...",
                    "options": [
                      "120",
                      "20",
                      "25",
                      "60"
                    ],
                    "correctAnswer": 0,
                    "explanation": "5! = 5×4×3×2×1 = 120."
                  }
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
                "isDownloaded": false,
                "summary": "Peluang mengukur seberapa besar kemungkinan suatu kejadian terjadi, dengan nilai antara 0 (mustahil) dan 1 (pasti). Peluang kejadian majemuk melibatkan gabungan atau irisan dua kejadian atau lebih.",
                "keyPoints": [
                  "Rumus dasar: P(A) = n(A) / n(S)",
                  "Peluang gabungan: P(A∪B) = P(A) + P(B) − P(A∩B)",
                  "Kejadian saling lepas: P(A∩B) = 0",
                  "Kejadian saling bebas: P(A∩B) = P(A) × P(B)"
                ],
                "contentBlocks": [
                  {
                    "type": "paragraph",
                    "text": "Peluang suatu kejadian dihitung dari perbandingan banyaknya hasil yang diinginkan (n(A)) terhadap seluruh kemungkinan hasil pada ruang sampel (n(S))."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "1. Peluang Gabungan Dua Kejadian"
                  },
                  {
                    "type": "formulaBox",
                    "title": "Peluang Gabungan",
                    "formula": "P(A∪B) = P(A) + P(B) − P(A∩B)"
                  },
                  {
                    "type": "sectionTitle",
                    "title": "2. Kejadian Saling Lepas dan Saling Bebas"
                  },
                  {
                    "type": "paragraph",
                    "text": "Dua kejadian disebut saling lepas jika tidak mungkin terjadi bersamaan (misalnya mata dadu genap dan ganjil). Dua kejadian disebut saling bebas jika terjadinya satu kejadian tidak memengaruhi peluang kejadian lainnya (misalnya melempar dua koin berbeda)."
                  },
                  {
                    "type": "exampleBox",
                    "title": "Contoh: Peluang Gabungan",
                    "problem": "Dari satu set kartu bridge, tentukan peluang terambil kartu As atau kartu Hati!",
                    "solutionSteps": [
                      "P(As) = 4/52, P(Hati) = 13/52, dan P(As∩Hati) = 1/52 (As Hati).",
                      "P(As∪Hati) = 4/52 + 13/52 − 1/52 = 16/52 = 4/13."
                    ]
                  },
                  {
                    "type": "noteBox",
                    "title": "💡 Membedakan Saling Lepas vs Saling Bebas",
                    "text": "Saling lepas berkaitan dengan IRISAN kejadian (bisa terjadi bersamaan atau tidak), sedangkan saling bebas berkaitan dengan PENGARUH satu kejadian terhadap kejadian lain."
                  }
                ],
                "quiz": [
                  {
                    "id": "q1",
                    "question": "Peluang terambil kartu As atau Hati dari satu set kartu bridge adalah...",
                    "options": [
                      "4/13",
                      "1/13",
                      "17/52",
                      "1/4"
                    ],
                    "correctAnswer": 0,
                    "explanation": "P(As∪Hati) = 4/52+13/52−1/52 = 16/52 = 4/13."
                  },
                  {
                    "id": "q2",
                    "question": "Dua kejadian disebut saling bebas jika...",
                    "options": [
                      "Terjadinya satu kejadian tidak memengaruhi peluang kejadian lain",
                      "Tidak bisa terjadi bersamaan",
                      "Peluangnya sama besar",
                      "Selalu terjadi bersamaan"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Definisi kejadian saling bebas adalah independensi peluang, bukan soal irisan kejadian."
                  },
                  {
                    "id": "q3",
                    "question": "Peluang munculnya angka genap saat melempar satu dadu adalah...",
                    "options": [
                      "1/2",
                      "1/3",
                      "1/6",
                      "2/3"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Angka genap pada dadu: 2,4,6 → n(A)=3, n(S)=6, P(A)=3/6=1/2."
                  }
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
                "isDownloaded": true,
                "summary": "Teks Laporan Hasil Observasi (LHO) menyajikan informasi hasil pengamatan secara objektif, faktual, dan sistematis mengenai suatu fenomena, hewan, tumbuhan, atau lingkungan.",
                "keyPoints": [
                  "Struktur: Pernyataan Umum (Klasifikasi), Deskripsi Bagian, Deskripsi Manfaat",
                  "Bersifat objektif, faktual, dan berdasarkan hasil pengamatan nyata",
                  "Menggunakan kalimat definisi dengan verba kopula (adalah, merupakan, yaitu)",
                  "Menggunakan istilah ilmiah/teknis sesuai bidang yang diamati"
                ],
                "contentBlocks": [
                  {
                    "type": "paragraph",
                    "text": "Teks LHO berfungsi menyampaikan informasi hasil pengamatan secara objektif apa adanya, mencakup klasifikasi umum suatu fenomena alam, hewan, tumbuhan, atau lingkungan sekitar tanpa opini pribadi penulis."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "1. Struktur Teks LHO"
                  },
                  {
                    "type": "paragraph",
                    "text": "a. Pernyataan Umum/Klasifikasi — pembuka yang mengenalkan objek yang diamati secara umum.\nb. Deskripsi Bagian — rincian detail seperti ciri fisik, bagian tubuh, atau perilaku objek.\nc. Deskripsi Manfaat — kegunaan atau nilai penting objek bagi kehidupan manusia."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "2. Kaidah Kebahasaan"
                  },
                  {
                    "type": "paragraph",
                    "text": "Teks LHO banyak menggunakan kalimat definisi (adalah, merupakan, yaitu), kata kerja material untuk menunjukkan aktivitas objek, dan konjungsi penambah seperti 'dan', 'serta' untuk merinci deskripsi."
                  },
                  {
                    "type": "noteBox",
                    "title": "💡 Perbedaan LHO dengan Teks Deskripsi",
                    "text": "Teks LHO bersifat umum dan saintifik (berlaku untuk seluruh anggota kelas objek), sementara Teks Deskripsi mengamati satu objek tunggal secara spesifik dan boleh diwarnai kesan subjektif penulis."
                  }
                ],
                "quiz": [
                  {
                    "id": "q1",
                    "question": "Bagian teks LHO yang menjelaskan kegunaan objek bagi kehidupan adalah...",
                    "options": [
                      "Deskripsi Manfaat",
                      "Pernyataan Umum",
                      "Deskripsi Bagian",
                      "Tesis"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Deskripsi manfaat secara khusus memuat kegunaan objek yang diamati."
                  },
                  {
                    "id": "q2",
                    "question": "Ciri kebahasaan yang paling menonjol dalam teks LHO adalah...",
                    "options": [
                      "Kalimat definisi dengan verba kopula",
                      "Kalimat perintah",
                      "Kalimat tanya retoris",
                      "Dialog antartokoh"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Teks LHO banyak menggunakan kalimat definisi seperti 'adalah', 'merupakan', dan 'yaitu' untuk mengklasifikasikan objek."
                  },
                  {
                    "id": "q3",
                    "question": "Teks LHO berbeda dari teks deskripsi karena teks LHO bersifat...",
                    "options": [
                      "Umum dan mewakili seluruh kelas objek",
                      "Sangat subjektif",
                      "Berupa cerita fiksi",
                      "Hanya berisi opini"
                    ],
                    "correctAnswer": 0,
                    "explanation": "LHO mengklasifikasikan objek secara umum dan objektif, bukan mengamati satu objek spesifik secara subjektif."
                  }
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
                "isDownloaded": false,
                "summary": "Teks anekdot adalah cerita singkat lucu yang mengandung sindiran atau kritik terhadap suatu peristiwa/tokoh, biasanya berkaitan dengan isu sosial atau politik yang bersifat aktual.",
                "keyPoints": [
                  "Struktur: Abstraksi, Orientasi, Krisis, Reaksi, Koda",
                  "Berfungsi menyampaikan kritik sosial secara halus melalui humor",
                  "Menggunakan kata kerja aksi dan kalimat langsung dalam dialog",
                  "Sering menggunakan gaya bahasa sindiran (sarkasme atau ironi)"
                ],
                "contentBlocks": [
                  {
                    "type": "paragraph",
                    "text": "Anekdot merupakan cerita singkat yang lucu namun mengandung pesan kritik terhadap keadaan sosial, layanan publik, atau perilaku pejabat, disampaikan secara tidak langsung agar tidak terkesan kasar."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "1. Struktur Teks Anekdot"
                  },
                  {
                    "type": "paragraph",
                    "text": "Abstraksi (gambaran awal cerita), Orientasi (latar belakang peristiwa), Krisis (puncak masalah/kejadian tak terduga), Reaksi (tanggapan tokoh terhadap krisis), dan Koda (penutup berisi pesan atau simpulan)."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "2. Fungsi Sosial Anekdot"
                  },
                  {
                    "type": "paragraph",
                    "text": "Anekdot menjadi sarana kritik sosial yang aman karena dibungkus humor, sehingga pesan kritis tersampaikan tanpa menimbulkan konfrontasi langsung dengan pihak yang disindir."
                  },
                  {
                    "type": "noteBox",
                    "title": "💡 Anekdot vs Lelucon Biasa",
                    "text": "Perbedaan utama anekdot dengan lelucon biasa adalah adanya UNSUR KRITIK atau SINDIRAN terhadap suatu keadaan nyata, bukan sekadar lucu tanpa makna."
                  }
                ],
                "quiz": [
                  {
                    "id": "q1",
                    "question": "Bagian struktur anekdot yang berisi puncak masalah atau kejadian tak terduga adalah...",
                    "options": [
                      "Krisis",
                      "Abstraksi",
                      "Koda",
                      "Orientasi"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Krisis adalah bagian di mana muncul masalah utama yang memicu kelucuan sekaligus kritik."
                  },
                  {
                    "id": "q2",
                    "question": "Fungsi utama teks anekdot dalam masyarakat adalah...",
                    "options": [
                      "Menyampaikan kritik sosial secara halus lewat humor",
                      "Menghibur tanpa pesan",
                      "Menceritakan biografi tokoh",
                      "Menjelaskan prosedur kerja"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Anekdot menggabungkan humor dengan kritik terhadap fenomena sosial atau perilaku tertentu."
                  },
                  {
                    "id": "q3",
                    "question": "Bagian penutup anekdot yang berisi simpulan atau pesan disebut...",
                    "options": [
                      "Koda",
                      "Krisis",
                      "Reaksi",
                      "Abstraksi"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Koda adalah bagian akhir yang menyimpulkan atau memberi pesan dari keseluruhan cerita."
                  }
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
                "isDownloaded": false,
                "summary": "Hikayat adalah karya sastra Melayu klasik yang sarat nilai moral, sosial, dan budaya, sedangkan cerpen (cerita pendek) adalah karya sastra modern yang mengangkat satu konflik utama secara padat.",
                "keyPoints": [
                  "Hikayat bercirikan bahasa klise, kemustahilan, dan tokoh sakti",
                  "Nilai dalam karya sastra: moral, sosial, budaya, agama, dan pendidikan",
                  "Karakterisasi dapat digambarkan secara langsung (analitik) atau tidak langsung (dramatik)",
                  "Cerpen fokus pada satu konflik utama dengan alur yang padat"
                ],
                "contentBlocks": [
                  {
                    "type": "paragraph",
                    "text": "Hikayat merupakan warisan sastra Melayu klasik yang biasanya memuat kisah kerajaan, tokoh sakti, dan unsur kemustahilan, namun tetap sarat pesan moral yang relevan hingga kini."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "1. Ciri Khas Hikayat"
                  },
                  {
                    "type": "paragraph",
                    "text": "Hikayat memiliki bahasa yang klise (pengulangan kalimat pembuka seperti 'Alkisah, maka tersebutlah perkataan...'), tokoh yang sering memiliki kesaktian, dan alur campuran yang tidak selalu kronologis."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "2. Menganalisis Nilai dan Karakterisasi"
                  },
                  {
                    "type": "paragraph",
                    "text": "Nilai dalam karya sastra mencakup nilai moral (baik-buruk perilaku), nilai sosial (interaksi antarmanusia), nilai budaya, dan nilai agama. Karakterisasi tokoh dapat digambarkan langsung oleh narator (analitik) atau tersirat lewat dialog dan tindakan tokoh (dramatik)."
                  },
                  {
                    "type": "noteBox",
                    "title": "💡 Transformasi Nilai ke Cerpen Modern",
                    "text": "Nilai-nilai universal dalam hikayat klasik (kejujuran, keberanian, kesetiaan) sering diadaptasi ke dalam cerpen modern dengan latar dan konflik yang lebih relevan dengan kehidupan masa kini."
                  }
                ],
                "quiz": [
                  {
                    "id": "q1",
                    "question": "Ciri khas bahasa dalam hikayat yang berupa pengulangan kalimat pembuka disebut...",
                    "options": [
                      "Bahasa klise",
                      "Majas metafora",
                      "Kalimat retoris",
                      "Bahasa gaul"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Bahasa klise adalah penggunaan ungkapan atau kalimat pembuka yang berulang-ulang, khas hikayat Melayu klasik."
                  },
                  {
                    "id": "q2",
                    "question": "Penggambaran watak tokoh secara langsung oleh pengarang disebut teknik...",
                    "options": [
                      "Analitik",
                      "Dramatik",
                      "Deskriptif",
                      "Naratif"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Teknik analitik menggambarkan watak tokoh secara eksplisit melalui narasi pengarang."
                  },
                  {
                    "id": "q3",
                    "question": "Unsur yang membedakan hikayat dari cerpen modern adalah...",
                    "options": [
                      "Adanya kemustahilan dan tokoh sakti",
                      "Adanya konflik",
                      "Adanya tokoh utama",
                      "Adanya latar tempat"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Hikayat khas dengan unsur kemustahilan (irasional) dan kesaktian tokoh, yang jarang muncul di cerpen realis modern."
                  }
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
                "isDownloaded": false,
                "summary": "Teks negosiasi adalah bentuk interaksi sosial yang bertujuan mencapai kesepakatan antara dua pihak yang memiliki kepentingan berbeda, umumnya berbentuk dialog tawar-menawar.",
                "keyPoints": [
                  "Struktur: Orientasi, Pengajuan, Penawaran, Persetujuan/Penutup",
                  "Tujuan: mencapai kesepakatan yang saling menguntungkan (win-win solution)",
                  "Menggunakan kalimat persuasif dan pasangan tuturan (ajakan-penerimaan/penolakan)",
                  "Bahasa santun dan argumentatif menjadi kunci keberhasilan negosiasi"
                ],
                "contentBlocks": [
                  {
                    "type": "paragraph",
                    "text": "Negosiasi adalah proses komunikasi dua arah untuk mencapai kesepakatan bersama, misalnya tawar-menawar harga di pasar, negosiasi bisnis, atau kesepakatan antarorganisasi."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "1. Struktur Teks Negosiasi"
                  },
                  {
                    "type": "paragraph",
                    "text": "Orientasi (pembuka interaksi), Pengajuan (pihak pertama menyampaikan permintaan/penawaran), Penawaran (tawar-menawar hingga mendekati kesepakatan), dan Persetujuan/Penutup (kesepakatan akhir dan penutup percakapan)."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "2. Kaidah Kebahasaan Negosiasi"
                  },
                  {
                    "type": "paragraph",
                    "text": "Teks negosiasi menggunakan pasangan tuturan seperti permintaan-pemenuhan, atau tawaran-penerimaan/penolakan, disertai kalimat persuasif yang santun agar kesepakatan mudah tercapai tanpa memicu konflik."
                  },
                  {
                    "type": "noteBox",
                    "title": "💡 Kunci Negosiasi Efektif",
                    "text": "Negosiator ulung selalu mencari solusi win-win, bukan win-lose — kesepakatan yang dipaksakan menang sepihak justru berisiko gagal dijalankan di kemudian hari."
                  }
                ],
                "quiz": [
                  {
                    "id": "q1",
                    "question": "Bagian teks negosiasi yang berisi tawar-menawar hingga mendekati kesepakatan disebut...",
                    "options": [
                      "Penawaran",
                      "Orientasi",
                      "Pengajuan",
                      "Penutup"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Penawaran adalah tahap tawar-menawar antara permintaan awal dan kesepakatan akhir."
                  },
                  {
                    "id": "q2",
                    "question": "Tujuan utama sebuah negosiasi adalah...",
                    "options": [
                      "Mencapai kesepakatan yang saling menguntungkan",
                      "Memenangkan perdebatan sepihak",
                      "Menjatuhkan lawan bicara",
                      "Menunda keputusan"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Negosiasi ideal berorientasi pada win-win solution, bukan mengalahkan pihak lain."
                  },
                  {
                    "id": "q3",
                    "question": "Pasangan tuturan yang umum muncul dalam teks negosiasi adalah...",
                    "options": [
                      "Tawaran - penerimaan/penolakan",
                      "Pertanyaan - pertanyaan",
                      "Perintah - perintah",
                      "Pujian - pujian"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Struktur dialog negosiasi dibangun dari pasangan tuturan seperti tawaran yang direspons dengan penerimaan atau penolakan."
                  }
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
                "isDownloaded": false,
                "summary": "Teks biografi menceritakan riwayat hidup seseorang yang dianggap penting atau inspiratif, ditulis oleh orang lain, dan bertujuan menyampaikan keteladanan dari perjalanan hidup tokoh tersebut.",
                "keyPoints": [
                  "Struktur: Orientasi, Peristiwa/Masalah (rangkaian kejadian), Reorientasi",
                  "Berisi fakta perjalanan hidup tokoh secara kronologis",
                  "Keteladanan diambil dari sikap, perjuangan, atau prestasi tokoh",
                  "Menggunakan kata kerja tindakan dan keterangan waktu secara berurutan"
                ],
                "contentBlocks": [
                  {
                    "type": "paragraph",
                    "text": "Biografi ditulis untuk mendokumentasikan perjalanan hidup seseorang yang berjasa atau berprestasi, sekaligus menjadi sumber inspirasi dan keteladanan bagi pembaca."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "1. Struktur Teks Biografi"
                  },
                  {
                    "type": "paragraph",
                    "text": "Orientasi (pengenalan tokoh secara umum), Peristiwa dan Masalah (rangkaian kejadian penting dalam hidup tokoh secara kronologis), dan Reorientasi (komentar atau pandangan akhir penulis mengenai tokoh)."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "2. Menemukan Ide Pokok dan Nilai Keteladanan"
                  },
                  {
                    "type": "paragraph",
                    "text": "Ide pokok dalam biografi biasanya terletak pada kalimat yang menjelaskan pencapaian atau perjuangan utama tokoh di setiap paragraf, sementara nilai keteladanan diambil dari sikap kerja keras, kegigihan, atau kontribusi tokoh terhadap masyarakat."
                  },
                  {
                    "type": "noteBox",
                    "title": "💡 Membedakan Fakta dan Opini dalam Biografi",
                    "text": "Fakta biografi berupa data objektif (tanggal lahir, riwayat pendidikan, prestasi), sedangkan opini biasanya muncul di bagian reorientasi berupa penilaian subjektif penulis terhadap tokoh."
                  }
                ],
                "quiz": [
                  {
                    "id": "q1",
                    "question": "Bagian biografi yang berisi rangkaian kejadian penting dalam hidup tokoh disebut...",
                    "options": [
                      "Peristiwa dan Masalah",
                      "Orientasi",
                      "Reorientasi",
                      "Abstraksi"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Bagian ini memuat kronologi perjalanan hidup dan pencapaian tokoh."
                  },
                  {
                    "id": "q2",
                    "question": "Bagian akhir biografi yang berisi pandangan penulis tentang tokoh disebut...",
                    "options": [
                      "Reorientasi",
                      "Orientasi",
                      "Krisis",
                      "Koda"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Reorientasi adalah penutup biografi berisi simpulan atau penilaian penulis terhadap tokoh."
                  },
                  {
                    "id": "q3",
                    "question": "Nilai keteladanan dalam biografi umumnya diambil dari...",
                    "options": [
                      "Sikap kerja keras dan perjuangan tokoh",
                      "Kekayaan tokoh semata",
                      "Nama besar keluarga tokoh",
                      "Jumlah penghargaan formal saja"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Keteladanan biografi lebih ditekankan pada sikap, kegigihan, dan kontribusi tokoh, bukan sekadar status atau kekayaan."
                  }
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
                "isDownloaded": true,
                "summary": "Teks deskripsi menggambarkan suatu objek (tempat, benda, atau orang) secara rinci dan hidup sehingga pembaca seolah dapat melihat, mendengar, atau merasakan objek tersebut secara langsung.",
                "keyPoints": [
                  "Struktur: Identifikasi (gambaran umum objek), Deskripsi Bagian, Simpulan/Kesan",
                  "Bersifat subjektif, menonjolkan kesan pribadi penulis terhadap objek",
                  "Banyak menggunakan kata sifat (adjektiva) dan majas untuk penggambaran hidup",
                  "Melibatkan pancaindra: penglihatan, pendengaran, penciuman, perabaan"
                ],
                "contentBlocks": [
                  {
                    "type": "paragraph",
                    "text": "Berbeda dari teks LHO yang objektif dan umum, teks deskripsi berfokus pada satu objek spesifik yang digambarkan secara detail dan hidup, sering diwarnai kesan pribadi penulis."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "1. Struktur Teks Deskripsi"
                  },
                  {
                    "type": "paragraph",
                    "text": "Identifikasi (memperkenalkan objek secara umum), Deskripsi Bagian (perincian ciri fisik/sifat objek dari berbagai sudut pandang pancaindra), dan Simpulan/Kesan (penutup berupa kesan keseluruhan penulis terhadap objek)."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "2. Kaidah Kebahasaan Teks Deskripsi"
                  },
                  {
                    "type": "paragraph",
                    "text": "Teks deskripsi kaya akan kata sifat (indah, sejuk, ramai), kata kerja pengindraan (terlihat, terdengar, tercium), dan majas perbandingan seperti personifikasi atau simile untuk membuat gambaran lebih hidup bagi pembaca."
                  },
                  {
                    "type": "noteBox",
                    "title": "💡 Kunci Menulis Deskripsi yang Kuat",
                    "text": "Libatkan sebanyak mungkin pancaindra (bukan hanya penglihatan) agar pembaca benar-benar merasa 'hadir' di tempat yang digambarkan."
                  }
                ],
                "quiz": [
                  {
                    "id": "q1",
                    "question": "Bagian teks deskripsi yang memperkenalkan objek secara umum disebut...",
                    "options": [
                      "Identifikasi",
                      "Deskripsi Bagian",
                      "Simpulan",
                      "Orientasi"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Identifikasi adalah bagian pembuka yang mengenalkan objek secara umum sebelum dirinci."
                  },
                  {
                    "id": "q2",
                    "question": "Teks deskripsi bersifat lebih subjektif dibanding teks LHO karena...",
                    "options": [
                      "Menonjolkan kesan pribadi penulis terhadap objek tunggal",
                      "Ditulis oleh ilmuwan",
                      "Berupa data statistik",
                      "Tidak memiliki struktur"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Deskripsi berfokus pada satu objek spesifik dengan sudut pandang dan kesan pribadi penulis, berbeda dari LHO yang objektif dan umum."
                  },
                  {
                    "id": "q3",
                    "question": "Unsur kebahasaan yang paling dominan dalam teks deskripsi adalah...",
                    "options": [
                      "Kata sifat (adjektiva) dan majas",
                      "Kata kerja imperatif",
                      "Konjungsi kausalitas",
                      "Kalimat tanya"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Kata sifat dan majas digunakan secara intensif untuk menghidupkan gambaran objek yang dideskripsikan."
                  }
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
                "isDownloaded": false,
                "summary": "Prosa adalah karya sastra naratif seperti novel dan cerpen yang dibangun oleh unsur intrinsik (tema, alur, tokoh, latar, sudut pandang, amanat) yang saling berkaitan membentuk satu kesatuan cerita.",
                "keyPoints": [
                  "Tema: gagasan pokok/ide dasar cerita",
                  "Alur: rangkaian peristiwa (maju, mundur, atau campuran)",
                  "Penokohan: watak tokoh, digambarkan analitik atau dramatik",
                  "Sudut pandang: posisi pengarang dalam bercerita (orang pertama/ketiga)"
                ],
                "contentBlocks": [
                  {
                    "type": "paragraph",
                    "text": "Mengapresiasi prosa berarti memahami dan menilai karya sastra naratif melalui unsur-unsur pembangunnya, baik unsur intrinsik (dari dalam cerita) maupun unsur ekstrinsik (latar belakang pengarang dan sosial-budaya)."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "1. Unsur-unsur Intrinsik Prosa"
                  },
                  {
                    "type": "paragraph",
                    "text": "Tema adalah gagasan dasar cerita; alur adalah rangkaian peristiwa yang bisa disusun maju, mundur (flashback), atau campuran; penokohan menggambarkan watak tokoh; latar mencakup tempat, waktu, dan suasana; sudut pandang menentukan siapa yang 'bercerita'; dan amanat adalah pesan moral yang disampaikan."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "2. Menilai Kualitas Sebuah Prosa"
                  },
                  {
                    "type": "paragraph",
                    "text": "Prosa yang baik memiliki keterkaitan logis antarunsur — konflik yang dibangun alur harus selaras dengan watak tokoh dan mengarah pada penyampaian tema serta amanat secara meyakinkan."
                  },
                  {
                    "type": "noteBox",
                    "title": "💡 Alur Maju vs Alur Mundur",
                    "text": "Alur maju menyajikan peristiwa secara kronologis dari awal ke akhir, sedangkan alur mundur (sorot balik/flashback) memulai cerita dari tengah atau akhir lalu menjelaskan sebab-sebabnya di bagian belakang."
                  }
                ],
                "quiz": [
                  {
                    "id": "q1",
                    "question": "Rangkaian peristiwa dalam sebuah cerita disebut unsur...",
                    "options": [
                      "Alur",
                      "Tema",
                      "Latar",
                      "Amanat"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Alur adalah unsur intrinsik yang mengatur urutan kejadian dalam cerita."
                  },
                  {
                    "id": "q2",
                    "question": "Sudut pandang orang pertama ditandai dengan penggunaan kata ganti...",
                    "options": [
                      "Aku/saya",
                      "Dia/mereka",
                      "Kita bersama",
                      "Anda sekalian"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Sudut pandang orang pertama menempatkan tokoh 'aku' sebagai penutur cerita."
                  },
                  {
                    "id": "q3",
                    "question": "Pesan moral yang ingin disampaikan pengarang melalui cerita disebut...",
                    "options": [
                      "Amanat",
                      "Alur",
                      "Latar",
                      "Tema"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Amanat adalah nilai atau pesan moral yang dapat dipetik pembaca dari keseluruhan cerita."
                  }
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
                "isDownloaded": false,
                "summary": "Teks eksplanasi menjelaskan proses terjadinya suatu fenomena alam, sosial, atau budaya berdasarkan hubungan sebab-akibat secara logis dan sistematis.",
                "keyPoints": [
                  "Struktur: Pernyataan Umum, Deretan Penjelas (sebab-akibat), Interpretasi",
                  "Bersifat faktual dan menjelaskan 'mengapa' dan 'bagaimana' suatu fenomena terjadi",
                  "Banyak menggunakan konjungsi kausalitas (karena, sehingga, akibatnya) dan kronologis (kemudian, setelah itu)",
                  "Fokus pada proses, bukan pada satu objek tunggal seperti teks deskripsi"
                ],
                "contentBlocks": [
                  {
                    "type": "paragraph",
                    "text": "Teks eksplanasi menjawab pertanyaan 'mengapa' dan 'bagaimana' suatu fenomena bisa terjadi, misalnya proses terjadinya gempa bumi, banjir, atau inflasi ekonomi."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "1. Struktur Teks Eksplanasi"
                  },
                  {
                    "type": "paragraph",
                    "text": "Pernyataan Umum (gambaran singkat fenomena yang akan dijelaskan), Deretan Penjelas (rangkaian sebab-akibat atau proses terjadinya fenomena secara bertahap), dan Interpretasi (simpulan atau pandangan penulis tentang fenomena tersebut)."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "2. Konjungsi Kausalitas dan Kronologis"
                  },
                  {
                    "type": "paragraph",
                    "text": "Konjungsi kausalitas seperti 'karena', 'sebab', 'sehingga', dan 'akibatnya' menghubungkan sebab dengan akibat, sementara konjungsi kronologis seperti 'kemudian', 'selanjutnya', dan 'setelah itu' menunjukkan urutan waktu terjadinya proses."
                  },
                  {
                    "type": "noteBox",
                    "title": "💡 Membedakan Eksplanasi dan Eksposisi",
                    "text": "Teks eksplanasi berfokus MENJELASKAN PROSES suatu fenomena secara objektif, sedangkan teks eksposisi berfokus MEYAKINKAN pembaca dengan argumen dan opini penulis."
                  }
                ],
                "quiz": [
                  {
                    "id": "q1",
                    "question": "Bagian teks eksplanasi yang berisi rangkaian sebab-akibat suatu fenomena disebut...",
                    "options": [
                      "Deretan Penjelas",
                      "Pernyataan Umum",
                      "Interpretasi",
                      "Orientasi"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Deretan penjelas memuat proses/rangkaian sebab-akibat yang menjelaskan fenomena secara bertahap."
                  },
                  {
                    "id": "q2",
                    "question": "Konjungsi yang menunjukkan hubungan sebab-akibat adalah...",
                    "options": [
                      "Sehingga, akibatnya",
                      "Kemudian, lalu",
                      "Dan, serta",
                      "Atau, maupun"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Konjungsi kausalitas seperti 'sehingga' dan 'akibatnya' menghubungkan sebab dengan hasil yang ditimbulkannya."
                  },
                  {
                    "id": "q3",
                    "question": "Teks eksplanasi berbeda dari teks eksposisi karena eksplanasi lebih fokus pada...",
                    "options": [
                      "Menjelaskan proses fenomena secara objektif",
                      "Meyakinkan pembaca dengan opini",
                      "Menceritakan pengalaman pribadi",
                      "Memberi instruksi langkah kerja"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Eksplanasi bertujuan menjelaskan proses secara objektif, bukan membujuk atau meyakinkan seperti eksposisi."
                  }
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
                "isDownloaded": false,
                "summary": "Puisi adalah karya sastra yang memadatkan makna melalui pemilihan kata (diksi), gaya bahasa (majas), dan bunyi (rima) untuk membangkitkan perasaan dan imajinasi pembaca.",
                "keyPoints": [
                  "Diksi: pemilihan kata yang tepat dan padat makna",
                  "Majas: gaya bahasa seperti metafora, personifikasi, hiperbola",
                  "Rima: pengulangan bunyi di akhir baris untuk efek musikalitas",
                  "Struktur batin puisi: tema, rasa, nada, dan amanat"
                ],
                "contentBlocks": [
                  {
                    "type": "paragraph",
                    "text": "Puisi menyampaikan gagasan dan perasaan secara padat dan estetis melalui pilihan kata yang cermat, berbeda dengan prosa yang bercerita secara naratif dan lugas."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "1. Unsur Fisik Puisi: Diksi, Majas, dan Rima"
                  },
                  {
                    "type": "paragraph",
                    "text": "Diksi adalah pemilihan kata yang tepat untuk mewakili makna dan rasa yang ingin disampaikan penyair. Majas adalah gaya bahasa kiasan seperti metafora (perbandingan langsung), personifikasi (benda mati diberi sifat manusia), dan hiperbola (pernyataan berlebihan). Rima adalah pengulangan bunyi di akhir larik yang menciptakan efek musikalitas saat dibacakan."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "2. Unsur Batin Puisi"
                  },
                  {
                    "type": "paragraph",
                    "text": "Unsur batin puisi meliputi tema (gagasan utama), rasa (sikap penyair terhadap tema), nada (sikap penyair terhadap pembaca), dan amanat (pesan yang ingin disampaikan kepada pembaca)."
                  },
                  {
                    "type": "noteBox",
                    "title": "💡 Membaca Puisi dengan Musikalisasi",
                    "text": "Musikalisasi puisi menggabungkan pembacaan puisi dengan iringan musik, membantu memperkuat penghayatan rima dan suasana batin yang terkandung dalam puisi tersebut."
                  }
                ],
                "quiz": [
                  {
                    "id": "q1",
                    "question": "Gaya bahasa yang memberikan sifat manusia pada benda mati disebut...",
                    "options": [
                      "Personifikasi",
                      "Metafora",
                      "Hiperbola",
                      "Litotes"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Personifikasi adalah majas yang memberikan sifat/perilaku manusia pada benda atau makhluk tak bernyawa."
                  },
                  {
                    "id": "q2",
                    "question": "Pengulangan bunyi pada akhir larik puisi disebut...",
                    "options": [
                      "Rima",
                      "Diksi",
                      "Tipografi",
                      "Enjambemen"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Rima adalah unsur bunyi yang berulang di akhir baris, memberi efek musikalitas pada puisi."
                  },
                  {
                    "id": "q3",
                    "question": "Sikap penyair terhadap pembaca dalam sebuah puisi disebut...",
                    "options": [
                      "Nada",
                      "Tema",
                      "Rasa",
                      "Amanat"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Nada mengacu pada sikap penyair kepada pembaca (misalnya menggurui, mengajak, atau merenung)."
                  }
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
                "isDownloaded": false,
                "summary": "Teks berita menyajikan informasi aktual dan faktual mengenai suatu peristiwa, disusun berdasarkan prinsip piramida terbalik dan menjawab unsur 5W+1H (what, who, when, where, why, how).",
                "keyPoints": [
                  "Struktur: Judul, Teras Berita (Lead), Tubuh Berita, Ekor Berita",
                  "Prinsip piramida terbalik: informasi terpenting diletakkan di awal",
                  "Unsur 5W+1H: apa, siapa, kapan, di mana, mengapa, bagaimana",
                  "Bersifat aktual, faktual, dan berimbang (cover both sides)"
                ],
                "contentBlocks": [
                  {
                    "type": "paragraph",
                    "text": "Berita yang baik disusun dengan prinsip piramida terbalik: informasi paling penting diletakkan di paragraf pertama (teras berita), sementara detail pendukung diletakkan di bagian selanjutnya."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "1. Struktur Teks Berita"
                  },
                  {
                    "type": "paragraph",
                    "text": "Judul (menarik perhatian dan merepresentasikan isi), Teras Berita/Lead (ringkasan inti berita di paragraf awal), Tubuh Berita (penjelasan rinci kejadian), dan Ekor Berita (informasi tambahan yang paling boleh dipotong editor jika ruang terbatas)."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "2. Prinsip 5W + 1H"
                  },
                  {
                    "type": "formulaBox",
                    "title": "Unsur Kelengkapan Berita",
                    "formula": "What (apa) - Who (siapa) - When (kapan) - Where (di mana) - Why (mengapa) - How (bagaimana)"
                  },
                  {
                    "type": "noteBox",
                    "title": "💡 Prinsip Cover Both Sides",
                    "text": "Berita yang berimbang wajib menampilkan sudut pandang dari semua pihak yang terlibat, bukan hanya satu sisi, agar pembaca mendapat informasi yang objektif."
                  }
                ],
                "quiz": [
                  {
                    "id": "q1",
                    "question": "Ringkasan inti berita yang diletakkan di paragraf pertama disebut...",
                    "options": [
                      "Teras berita (lead)",
                      "Ekor berita",
                      "Judul",
                      "Interpretasi"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Teras berita/lead memuat inti informasi terpenting di awal, sesuai prinsip piramida terbalik."
                  },
                  {
                    "id": "q2",
                    "question": "Prinsip penyusunan berita yang meletakkan info terpenting di awal disebut...",
                    "options": [
                      "Piramida terbalik",
                      "Piramida normal",
                      "Alur maju",
                      "Alur mundur"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Piramida terbalik menempatkan informasi paling penting di awal dan detail pendukung di akhir."
                  },
                  {
                    "id": "q3",
                    "question": "Unsur 5W+1H yang menjawab 'penyebab suatu kejadian' adalah...",
                    "options": [
                      "Why (mengapa)",
                      "What (apa)",
                      "When (kapan)",
                      "Where (di mana)"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Unsur 'why' dalam berita menjelaskan alasan atau penyebab terjadinya suatu peristiwa."
                  }
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
                "isDownloaded": true,
                "summary": "Surat lamaran pekerjaan adalah surat resmi yang ditulis pencari kerja untuk mengajukan diri pada suatu posisi di perusahaan/instansi, disusun dengan format dan bahasa baku yang formal.",
                "keyPoints": [
                  "Struktur: Tempat & tanggal, Perihal, Alamat tujuan, Salam pembuka, Isi (paragraf pembuka-inti-penutup), Salam penutup, Tanda tangan & nama",
                  "Menggunakan bahasa baku, formal, dan santun",
                  "Melampirkan dokumen pendukung (CV, ijazah, sertifikat)",
                  "Isi surat mencakup identitas diri, posisi yang dilamar, kualifikasi, dan harapan"
                ],
                "contentBlocks": [
                  {
                    "type": "paragraph",
                    "text": "Surat lamaran pekerjaan menjadi kesan pertama pelamar di mata perusahaan, sehingga harus ditulis secara formal, jelas, dan bebas dari kesalahan bahasa maupun data."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "1. Struktur Surat Lamaran Pekerjaan"
                  },
                  {
                    "type": "paragraph",
                    "text": "Surat lamaran resmi terdiri atas: tempat dan tanggal penulisan, perihal dan lampiran, alamat tujuan, salam pembuka, paragraf pembuka (sumber informasi lowongan), paragraf inti (data diri dan kualifikasi), paragraf penutup (harapan dan ucapan terima kasih), salam penutup, serta tanda tangan dan nama terang."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "2. Kaidah Kebahasaan Surat Resmi"
                  },
                  {
                    "type": "paragraph",
                    "text": "Surat resmi menggunakan ragam bahasa baku sesuai EYD, kalimat efektif, dan nada formal-santun. Hindari singkatan tidak baku, bahasa gaul, atau kalimat yang terlalu panjang bertele-tele."
                  },
                  {
                    "type": "noteBox",
                    "title": "💡 Kesalahan Umum Surat Lamaran",
                    "text": "Kesalahan yang sering terjadi: salah menulis nama perusahaan/posisi, format tanggal tidak konsisten, dan lampiran yang disebutkan di surat tidak benar-benar disertakan."
                  }
                ],
                "quiz": [
                  {
                    "id": "q1",
                    "question": "Bagian surat lamaran yang memuat data diri dan kualifikasi pelamar terdapat pada...",
                    "options": [
                      "Paragraf inti",
                      "Paragraf pembuka",
                      "Paragraf penutup",
                      "Salam pembuka"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Paragraf inti berisi identitas diri, pendidikan, dan kualifikasi yang relevan dengan posisi dilamar."
                  },
                  {
                    "id": "q2",
                    "question": "Ragam bahasa yang digunakan dalam surat lamaran pekerjaan adalah...",
                    "options": [
                      "Bahasa baku dan formal",
                      "Bahasa gaul sehari-hari",
                      "Bahasa daerah",
                      "Bahasa puitis"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Sebagai surat resmi, bahasa yang digunakan harus baku, formal, dan santun."
                  },
                  {
                    "id": "q3",
                    "question": "Dokumen yang umum dilampirkan bersama surat lamaran adalah...",
                    "options": [
                      "CV, ijazah, dan sertifikat",
                      "Kartu keluarga saja",
                      "Rapor SD",
                      "Buku tabungan"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Lampiran umum surat lamaran mencakup CV/daftar riwayat hidup, salinan ijazah, dan sertifikat pendukung lain."
                  }
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
                "isDownloaded": false,
                "summary": "Teks eksposisi bertujuan meyakinkan pembaca melalui argumen dan fakta pendukung mengenai suatu gagasan, dalam bab ini difokuskan pada topik produktivitas dan gaya hidup sehat generasi muda.",
                "keyPoints": [
                  "Struktur: Tesis (pernyataan pendapat), Argumentasi, Penegasan Ulang",
                  "Menggabungkan fakta dan opini untuk memperkuat argumen",
                  "Menggunakan konjungsi argumentatif: oleh karena itu, dengan demikian",
                  "Topik produktivitas terkait manajemen waktu, pola tidur, dan gaya hidup aktif"
                ],
                "contentBlocks": [
                  {
                    "type": "paragraph",
                    "text": "Teks eksposisi menyajikan gagasan disertai argumen dan bukti untuk meyakinkan pembaca, misalnya pentingnya pola hidup sehat dan manajemen waktu bagi produktivitas pelajar dan pekerja muda."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "1. Struktur Teks Eksposisi"
                  },
                  {
                    "type": "paragraph",
                    "text": "Tesis (pernyataan pendapat/gagasan utama penulis), Argumentasi (alasan, data, dan fakta pendukung tesis), dan Penegasan Ulang (simpulan yang menegaskan kembali tesis di awal)."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "2. Menyusun Argumen yang Kuat"
                  },
                  {
                    "type": "paragraph",
                    "text": "Argumen yang meyakinkan memadukan fakta (data, statistik, hasil penelitian) dengan opini yang logis, dihubungkan dengan konjungsi argumentatif seperti 'oleh karena itu', 'dengan demikian', dan 'sebagai akibatnya'."
                  },
                  {
                    "type": "noteBox",
                    "title": "💡 Produktivitas Bukan Sekadar Sibuk",
                    "text": "Teks eksposisi tentang produktivitas modern menekankan kualitas fokus dan istirahat yang cukup, bukan sekadar bekerja tanpa henti (hustle culture) yang justru bisa menurunkan kinerja jangka panjang."
                  }
                ],
                "quiz": [
                  {
                    "id": "q1",
                    "question": "Bagian teks eksposisi yang berisi pernyataan pendapat utama penulis disebut...",
                    "options": [
                      "Tesis",
                      "Argumentasi",
                      "Penegasan Ulang",
                      "Orientasi"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Tesis adalah pernyataan gagasan/pendapat utama yang akan dibuktikan melalui argumen."
                  },
                  {
                    "id": "q2",
                    "question": "Konjungsi yang lazim digunakan untuk memperkuat argumen dalam teks eksposisi adalah...",
                    "options": [
                      "Oleh karena itu, dengan demikian",
                      "Kemudian, lalu",
                      "Seandainya, andaikan",
                      "Atau, maupun"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Konjungsi argumentatif seperti 'oleh karena itu' menghubungkan alasan dengan simpulan secara logis."
                  },
                  {
                    "id": "q3",
                    "question": "Teks eksposisi yang baik memadukan antara...",
                    "options": [
                      "Fakta dan opini yang logis",
                      "Fiksi dan imajinasi",
                      "Dialog dan monolog",
                      "Rima dan diksi"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Argumen yang kuat dibangun dari perpaduan data faktual dan opini yang disusun secara logis."
                  }
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
                "isDownloaded": false,
                "summary": "Teks persuasi bertujuan mengajak atau memengaruhi pembaca untuk melakukan atau meyakini sesuatu, dalam konteks ini mengajak warga sekolah menciptakan lingkungan belajar yang aman dari perundungan (bullying) dan kekerasan.",
                "keyPoints": [
                  "Struktur: Pengenalan Isu, Rangkaian Argumen, Pernyataan Ajakan, Penegasan Kembali",
                  "Menggunakan kata kerja imperatif dan kalimat ajakan (mari, ayo, marilah)",
                  "Memadukan fakta (data kasus) dengan bujukan emosional",
                  "Topik keamanan sekolah mencakup pencegahan bullying dan kekerasan"
                ],
                "contentBlocks": [
                  {
                    "type": "paragraph",
                    "text": "Teks persuasi banyak digunakan dalam kampanye sosial, termasuk kampanye anti-perundungan (bullying) di lingkungan sekolah, untuk mengajak seluruh warga sekolah turut menjaga keamanan bersama."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "1. Struktur Teks Persuasi"
                  },
                  {
                    "type": "paragraph",
                    "text": "Pengenalan Isu (pemaparan masalah yang perlu disikapi), Rangkaian Argumen (fakta dan alasan mengapa isu tersebut penting), Pernyataan Ajakan (ajakan eksplisit untuk bertindak), dan Penegasan Kembali (penguatan pesan di akhir)."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "2. Ciri Kebahasaan Persuasi"
                  },
                  {
                    "type": "paragraph",
                    "text": "Teks persuasi menggunakan kata kerja imperatif (jagalah, laporkan, hindari), kalimat ajakan (mari, ayo), dan sering menyisipkan data/fakta untuk memperkuat daya bujuk emosional terhadap pembaca."
                  },
                  {
                    "type": "noteBox",
                    "title": "💡 Persuasi yang Etis",
                    "text": "Persuasi yang baik tetap berlandaskan fakta yang jujur, bukan manipulasi emosi semata — terutama untuk isu sensitif seperti keamanan dan kesejahteraan siswa di sekolah."
                  }
                ],
                "quiz": [
                  {
                    "id": "q1",
                    "question": "Bagian teks persuasi yang berisi ajakan eksplisit untuk bertindak disebut...",
                    "options": [
                      "Pernyataan Ajakan",
                      "Pengenalan Isu",
                      "Rangkaian Argumen",
                      "Penegasan Kembali"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Pernyataan ajakan memuat seruan langsung agar pembaca melakukan tindakan tertentu."
                  },
                  {
                    "id": "q2",
                    "question": "Ciri kebahasaan yang menonjol pada teks persuasi adalah...",
                    "options": [
                      "Kata kerja imperatif dan kalimat ajakan",
                      "Kalimat tanya retoris saja",
                      "Konjungsi kausalitas",
                      "Dialog antartokoh"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Kata kerja imperatif seperti 'jagalah' dan kalimat ajakan seperti 'mari' menjadi ciri khas teks persuasi."
                  },
                  {
                    "id": "q3",
                    "question": "Tujuan utama teks persuasi tentang keamanan sekolah adalah...",
                    "options": [
                      "Mengajak warga sekolah mencegah perundungan bersama",
                      "Menceritakan sejarah sekolah",
                      "Melaporkan hasil ujian",
                      "Menjelaskan struktur organisasi OSIS"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Teks ini secara spesifik mengajak seluruh warga sekolah berperan aktif menciptakan lingkungan yang aman dari bullying."
                  }
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
                "isDownloaded": false,
                "summary": "Teks diskusi menyajikan dua sudut pandang berbeda (pro dan kontra) terhadap suatu isu, dalam bab ini mengangkat topik pemanfaatan kecerdasan artifisial (AI) dalam pendidikan dan kehidupan sehari-hari.",
                "keyPoints": [
                  "Struktur: Isu, Argumen Mendukung (pro), Argumen Menentang (kontra), Simpulan/Rekomendasi",
                  "Bersifat berimbang, menampilkan dua sisi pandangan berbeda",
                  "Menggunakan konjungsi pertentangan: namun, akan tetapi, di sisi lain",
                  "Topik AI mencakup manfaat (efisiensi belajar) dan risiko (ketergantungan, plagiarisme)"
                ],
                "contentBlocks": [
                  {
                    "type": "paragraph",
                    "text": "Teks diskusi berbeda dari eksposisi karena wajib menampilkan DUA sisi argumen (pro dan kontra) secara berimbang sebelum sampai pada simpulan atau rekomendasi, cocok untuk mengulas isu kompleks seperti pemanfaatan AI."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "1. Struktur Teks Diskusi"
                  },
                  {
                    "type": "paragraph",
                    "text": "Isu (pengantar topik yang akan didiskusikan), Argumen Mendukung/Pro (alasan yang mendukung isu, misalnya AI mempercepat riset dan personalisasi belajar), Argumen Menentang/Kontra (alasan yang menentang, misalnya risiko ketergantungan dan plagiarisme), dan Simpulan/Rekomendasi (jalan tengah atau saran bijak)."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "2. Sikap Kritis terhadap Teknologi AI"
                  },
                  {
                    "type": "paragraph",
                    "text": "Menggunakan AI secara bijak berarti memanfaatkannya sebagai alat bantu belajar (misalnya untuk riset awal atau latihan soal), bukan menggantikan proses berpikir kritis dan kejujuran akademik siswa itu sendiri."
                  },
                  {
                    "type": "noteBox",
                    "title": "💡 Konjungsi Pertentangan",
                    "text": "Kata seperti 'namun', 'akan tetapi', 'meskipun demikian', dan 'di sisi lain' penting untuk menandai peralihan dari argumen pro ke argumen kontra dalam teks diskusi."
                  }
                ],
                "quiz": [
                  {
                    "id": "q1",
                    "question": "Ciri khas teks diskusi yang membedakannya dari eksposisi adalah...",
                    "options": [
                      "Menampilkan argumen pro dan kontra secara berimbang",
                      "Hanya berisi satu sudut pandang",
                      "Berbentuk dialog drama",
                      "Tidak memiliki simpulan"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Teks diskusi wajib menyajikan dua sisi pandangan (pro-kontra) sebelum simpulan, berbeda dari eksposisi yang satu arah."
                  },
                  {
                    "id": "q2",
                    "question": "Konjungsi yang menandai peralihan dari argumen pro ke kontra adalah...",
                    "options": [
                      "Namun, akan tetapi",
                      "Kemudian, lalu",
                      "Dan, serta",
                      "Karena, sebab"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Konjungsi pertentangan seperti 'namun' digunakan untuk beralih dari satu sisi argumen ke sisi yang berlawanan."
                  },
                  {
                    "id": "q3",
                    "question": "Sikap bijak terhadap AI dalam belajar menurut teks diskusi adalah...",
                    "options": [
                      "Menjadikannya alat bantu, bukan pengganti proses berpikir",
                      "Menggunakannya untuk semua tugas tanpa filter",
                      "Menghindarinya sepenuhnya",
                      "Hanya digunakan oleh guru"
                    ],
                    "correctAnswer": 0,
                    "explanation": "AI sebaiknya menjadi alat bantu belajar yang bijak, tetap menjaga proses berpikir kritis dan kejujuran akademik siswa."
                  }
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
                "isDownloaded": false,
                "summary": "Kearifan lokal adalah nilai, pengetahuan, dan praktik budaya khas suatu daerah yang diwariskan turun-temurun, mencerminkan kearifan masyarakat dalam menjaga keseimbangan hidup dan lingkungan.",
                "keyPoints": [
                  "Kearifan lokal mencakup tradisi, adat istiadat, arsitektur, dan sistem pengetahuan lokal",
                  "Teks apresiasi kearifan lokal memadukan deskripsi, eksposisi, dan unsur naratif",
                  "Berfungsi menjaga identitas budaya dan kelestarian lingkungan",
                  "Ditulis dengan nada kekaguman namun tetap berbasis fakta budaya"
                ],
                "contentBlocks": [
                  {
                    "type": "paragraph",
                    "text": "Kearifan lokal Nusantara sangat beragam, mulai dari sistem subak di Bali, rumah tahan gempa di Nias, hingga tradisi gotong royong yang menjadi ciri khas kehidupan sosial masyarakat Indonesia."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "1. Ragam Kearifan Lokal Nusantara"
                  },
                  {
                    "type": "paragraph",
                    "text": "Kearifan lokal dapat berupa sistem pertanian tradisional, arsitektur rumah adat yang adaptif terhadap iklim/bencana, upacara adat yang menjaga harmoni sosial, hingga pengetahuan pengobatan herbal turun-temurun."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "2. Menulis Teks Apresiasi Kearifan Lokal"
                  },
                  {
                    "type": "paragraph",
                    "text": "Teks yang mengungkapkan kekaguman terhadap kearifan lokal biasanya memadukan deskripsi yang hidup (menggambarkan keunikan tradisi), eksposisi (menjelaskan manfaat dan filosofi di baliknya), serta nada kekaguman yang tulus namun tetap berbasis fakta budaya yang akurat."
                  },
                  {
                    "type": "noteBox",
                    "title": "💡 Pentingnya Pelestarian Kearifan Lokal",
                    "text": "Kearifan lokal sering menyimpan solusi berkelanjutan terhadap masalah modern, misalnya sistem subak Bali yang mengatur irigasi secara adil dan ramah lingkungan sejak berabad-abad lalu."
                  }
                ],
                "quiz": [
                  {
                    "id": "q1",
                    "question": "Kearifan lokal dapat diwujudkan dalam bentuk berikut, KECUALI...",
                    "options": [
                      "Produk elektronik impor terbaru",
                      "Sistem pertanian tradisional",
                      "Arsitektur rumah adat",
                      "Upacara adat masyarakat"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Kearifan lokal berkaitan dengan warisan budaya dan pengetahuan asli daerah, bukan produk modern impor."
                  },
                  {
                    "id": "q2",
                    "question": "Contoh kearifan lokal dalam sistem irigasi pertanian di Bali disebut...",
                    "options": [
                      "Subak",
                      "Sasi",
                      "Nyabuk Gunung",
                      "Awig-awig"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Subak adalah sistem irigasi tradisional khas Bali yang mengatur pembagian air secara adil dan berkelanjutan."
                  },
                  {
                    "id": "q3",
                    "question": "Teks yang mengapresiasi kearifan lokal sebaiknya ditulis dengan...",
                    "options": [
                      "Nada kekaguman yang tetap berbasis fakta budaya",
                      "Nada mengejek tradisi lama",
                      "Bahasa yang sangat teknis-ilmiah tanpa emosi",
                      "Hanya berupa daftar angka statistik"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Teks apresiasi memadukan kekaguman yang tulus dengan penyajian fakta budaya yang akurat, bukan sekadar opini kosong."
                  }
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
                "isDownloaded": true,
                "summary": "A descriptive text describes a person, place, or thing in detail so the reader can clearly imagine it. This chapter focuses on describing great athletes' physical appearance, achievements, and character.",
                "keyPoints": [
                  "Structure: Identification (general introduction) and Description (specific details)",
                  "Uses Simple Present Tense for general facts and characteristics",
                  "Adjectives to describe physical traits and personality (tall, muscular, disciplined)",
                  "Vocabulary related to sports achievements: champion, record-holder, medalist"
                ],
                "contentBlocks": [
                  {
                    "type": "paragraph",
                    "text": "A descriptive text about an athlete usually opens with an Identification paragraph introducing who the person is, followed by a Description paragraph detailing physical traits, achievements, and personal qualities."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "1. Grammar Focus: Simple Present Tense"
                  },
                  {
                    "type": "paragraph",
                    "text": "Simple Present Tense is used to state general facts and habitual characteristics, such as 'She trains every morning' or 'He holds the national record'. Pattern: Subject + Verb(s/es) for facts about the subject."
                  },
                  {
                    "type": "exampleBox",
                    "title": "Example: Describing an Athlete",
                    "problem": "Combine the facts into a descriptive sentence: (name) - fast runner - trains daily - won three gold medals.",
                    "solutionSteps": [
                      "Start with identification: 'Rina is a professional sprinter from Jakarta.'",
                      "Add description: 'She trains every single day and has won three gold medals in national competitions.'"
                    ]
                  },
                  {
                    "type": "noteBox",
                    "title": "💡 Vocabulary Tip",
                    "text": "Useful adjectives for describing athletes: agile, disciplined, resilient, muscular, competitive — try to vary your word choice instead of repeating 'good' or 'strong'."
                  }
                ],
                "quiz": [
                  {
                    "id": "q1",
                    "question": "Which sentence uses Simple Present Tense correctly to describe a habitual fact?",
                    "options": [
                      "She trains every morning before school.",
                      "She trained every morning before school.",
                      "She will train every morning.",
                      "She is training every morning now."
                    ],
                    "correctAnswer": 0,
                    "explanation": "Simple Present Tense (verb+s) is used for habitual actions and general facts, matching 'trains'."
                  },
                  {
                    "id": "q2",
                    "question": "A descriptive text about an athlete typically begins with...",
                    "options": [
                      "Identification",
                      "Conclusion",
                      "Resolution",
                      "Orientation of a story"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Identification introduces who or what is being described before moving into specific details."
                  },
                  {
                    "id": "q3",
                    "question": "Which word best describes an athlete who never gives up despite setbacks?",
                    "options": [
                      "Resilient",
                      "Reluctant",
                      "Restless",
                      "Reckless"
                    ],
                    "correctAnswer": 0,
                    "explanation": "'Resilient' describes someone who recovers quickly from difficulties and keeps going."
                  }
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
                "isDownloaded": false,
                "summary": "A recount text retells past events in chronological order, such as narrating what happened during a sports match or competition.",
                "keyPoints": [
                  "Structure: Orientation, Series of Events, Reorientation",
                  "Uses Simple Past Tense to narrate completed actions",
                  "Time connectives: first, then, after that, finally",
                  "Focuses on factual retelling, not opinion"
                ],
                "contentBlocks": [
                  {
                    "type": "paragraph",
                    "text": "A recount text about a sports event retells what happened in the order it occurred, helping the reader understand the sequence of a match or competition clearly."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "1. Grammar Focus: Simple Past Tense"
                  },
                  {
                    "type": "paragraph",
                    "text": "Simple Past Tense describes completed actions in the past, using regular (-ed) or irregular verb forms, such as 'The team won the final match' or 'She scored two goals in the first half'."
                  },
                  {
                    "type": "exampleBox",
                    "title": "Example: Sequencing a Recount",
                    "problem": "Arrange these events using time connectives: kick-off - first goal - halftime - second goal - final whistle.",
                    "solutionSteps": [
                      "Orientation: 'Last Saturday, our school team played the championship final.'",
                      "Series of events: 'First, the match kicked off at 3 PM. Then, our striker scored in the 10th minute. After halftime, the opponent equalized, but finally we won 2-1 in the last minute.'"
                    ]
                  },
                  {
                    "type": "noteBox",
                    "title": "💡 Common Irregular Verbs in Sports Recounts",
                    "text": "win → won, score → scored (regular), run → ran, throw → threw, catch → caught — memorize these irregular forms since they appear frequently in sports narration."
                  }
                ],
                "quiz": [
                  {
                    "id": "q1",
                    "question": "Which tense is mainly used in a recount text?",
                    "options": [
                      "Simple Past Tense",
                      "Simple Present Tense",
                      "Future Tense",
                      "Present Continuous"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Recount texts narrate events that already happened, so Simple Past Tense is used throughout."
                  },
                  {
                    "id": "q2",
                    "question": "Which sentence correctly uses Simple Past Tense?",
                    "options": [
                      "The team won the final match.",
                      "The team win the final match.",
                      "The team wins the final match.",
                      "The team winning the final match."
                    ],
                    "correctAnswer": 0,
                    "explanation": "'Won' is the correct past tense form of the irregular verb 'win'."
                  },
                  {
                    "id": "q3",
                    "question": "Which part of a recount text states the final outcome or the writer's remark on the event?",
                    "options": [
                      "Reorientation",
                      "Orientation",
                      "Series of Events",
                      "Identification"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Reorientation closes the recount, often summarizing the outcome or the writer's feeling about the event."
                  }
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
                "isDownloaded": false,
                "summary": "This chapter focuses on expressing and asking for opinions about the relationship between regular exercise and personal health, along with useful expressions for agreeing and disagreeing.",
                "keyPoints": [
                  "Expressions for giving opinion: I think, In my opinion, I believe",
                  "Expressions for agreeing/disagreeing: I agree / I'm afraid I disagree",
                  "Modal verbs: should, must, have to for giving health advice",
                  "Vocabulary: cardiovascular, endurance, stamina, immune system"
                ],
                "contentBlocks": [
                  {
                    "type": "paragraph",
                    "text": "Discussing sports and health requires functional expressions for stating opinions clearly and responding to others' views politely, an important skill for classroom discussions and debates."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "1. Giving and Responding to Opinions"
                  },
                  {
                    "type": "formulaBox",
                    "title": "Useful Expressions",
                    "formula": "Giving opinion: I think... / In my opinion...   |   Agreeing: I agree with you.   |   Disagreeing: I'm afraid I have a different view."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "2. Modal Verbs for Health Advice"
                  },
                  {
                    "type": "paragraph",
                    "text": "Modal verbs like 'should' and 'must' are commonly used to give advice or state necessity, such as 'You should exercise for at least 30 minutes a day' or 'Athletes must warm up before training'."
                  },
                  {
                    "type": "noteBox",
                    "title": "💡 Being Polite When Disagreeing",
                    "text": "Instead of bluntly saying 'You're wrong', use softer expressions like 'I see your point, but I think...' to keep the discussion respectful and constructive."
                  }
                ],
                "quiz": [
                  {
                    "id": "q1",
                    "question": "Which expression is used to politely disagree with someone's opinion?",
                    "options": [
                      "I'm afraid I have a different view.",
                      "You are completely wrong.",
                      "That's a stupid idea.",
                      "I don't care what you think."
                    ],
                    "correctAnswer": 0,
                    "explanation": "Polite disagreement uses softening phrases like 'I'm afraid...' to maintain courtesy."
                  },
                  {
                    "id": "q2",
                    "question": "Which modal verb best expresses strong necessity, similar to an obligation?",
                    "options": [
                      "Must",
                      "Might",
                      "Could",
                      "Would"
                    ],
                    "correctAnswer": 0,
                    "explanation": "'Must' expresses strong obligation or necessity, stronger than 'should' which is advice."
                  },
                  {
                    "id": "q3",
                    "question": "'Regular exercise improves your ______, helping your heart pump blood more efficiently.' The best word to fill the blank is...",
                    "options": [
                      "cardiovascular health",
                      "immune deficiency",
                      "muscle atrophy",
                      "sleep deprivation"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Cardiovascular health relates directly to heart and blood circulation, which improves with regular exercise."
                  }
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
                "isDownloaded": false,
                "summary": "A procedure text explains how to make or do something through a sequence of clear steps, in this chapter applied to recipes for healthy foods and drinks.",
                "keyPoints": [
                  "Structure: Goal, Materials/Ingredients, Steps",
                  "Uses imperative sentences (command form) for each step",
                  "Sequence connectives: first, next, then, after that, finally",
                  "Vocabulary of cooking verbs: chop, boil, mix, blend, pour"
                ],
                "contentBlocks": [
                  {
                    "type": "paragraph",
                    "text": "A procedure text for healthy food recipes lists the ingredients needed and explains the steps clearly using command sentences, so anyone can follow it correctly."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "1. Structure of a Procedure Text"
                  },
                  {
                    "type": "paragraph",
                    "text": "Goal states what will be made (e.g., 'How to Make a Fruit Smoothie'), Materials/Ingredients lists everything needed, and Steps explains the sequence of actions using imperative verbs."
                  },
                  {
                    "type": "exampleBox",
                    "title": "Example: Writing Procedure Steps",
                    "problem": "Arrange these actions into a procedure: blend the fruit - add yogurt - pour into a glass - add ice cubes",
                    "solutionSteps": [
                      "First, add the fruit and ice cubes into the blender.",
                      "Next, add the yogurt and blend until smooth.",
                      "Finally, pour the mixture into a glass and serve immediately."
                    ]
                  },
                  {
                    "type": "noteBox",
                    "title": "💡 Imperative Sentences",
                    "text": "Imperative sentences start directly with a base verb without a subject, such as 'Chop the vegetables' or 'Do not add too much sugar' — this is the standard form for instructions."
                  }
                ],
                "quiz": [
                  {
                    "id": "q1",
                    "question": "Which sentence is written in the correct imperative form for a procedure text?",
                    "options": [
                      "Blend the fruit until smooth.",
                      "You are blending the fruit.",
                      "The fruit is blended.",
                      "Blending the fruit is important."
                    ],
                    "correctAnswer": 0,
                    "explanation": "Imperative sentences begin directly with the base verb, as in 'Blend the fruit...'."
                  },
                  {
                    "id": "q2",
                    "question": "Which part of a procedure text lists what is needed before starting the steps?",
                    "options": [
                      "Materials/Ingredients",
                      "Goal",
                      "Steps",
                      "Conclusion"
                    ],
                    "correctAnswer": 0,
                    "explanation": "The materials/ingredients section lists everything required before the sequence of steps begins."
                  },
                  {
                    "id": "q3",
                    "question": "Which connective is commonly used to indicate the final step in a procedure text?",
                    "options": [
                      "Finally",
                      "First",
                      "Meanwhile",
                      "Although"
                    ],
                    "correctAnswer": 0,
                    "explanation": "'Finally' signals the last step in a sequence of instructions."
                  }
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
                "isDownloaded": false,
                "summary": "An analytical exposition text argues a point of view on an issue, supported by logical arguments and evidence. This chapter debates whether graffiti should be considered art or vandalism.",
                "keyPoints": [
                  "Structure: Thesis, Arguments, Reiteration (restating the thesis)",
                  "Uses argumentative connectives: firstly, moreover, however, in conclusion",
                  "Presents a clear stance supported by reasons and examples",
                  "Vocabulary: vandalism, public property, self-expression, mural"
                ],
                "contentBlocks": [
                  {
                    "type": "paragraph",
                    "text": "Analytical exposition texts are written to persuade readers toward a particular point of view by presenting logical, well-supported arguments, such as debating whether graffiti is a form of art or an act of vandalism."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "1. Structure of Analytical Exposition"
                  },
                  {
                    "type": "paragraph",
                    "text": "Thesis states the writer's position on the issue, Arguments present supporting reasons with evidence (often more than one, using connectives like 'firstly' and 'moreover'), and Reiteration restates the thesis as a strong conclusion."
                  },
                  {
                    "type": "exampleBox",
                    "title": "Example: Building an Argument",
                    "problem": "Write one supporting argument for the thesis 'Graffiti can be a legitimate form of art.'",
                    "solutionSteps": [
                      "State the argument: 'Firstly, graffiti allows artists to express social and political messages that reach a wide public audience.'",
                      "Support with an example: 'For instance, many street artists like Banksy use graffiti to highlight important social issues.'"
                    ]
                  },
                  {
                    "type": "noteBox",
                    "title": "💡 Balancing the Argument",
                    "text": "Even in a one-sided analytical exposition, acknowledging the opposing view briefly (using 'however') before refuting it can make your argument sound more credible and well-considered."
                  }
                ],
                "quiz": [
                  {
                    "id": "q1",
                    "question": "What is the purpose of an analytical exposition text?",
                    "options": [
                      "To persuade the reader toward a particular point of view",
                      "To retell a past event",
                      "To describe a person's appearance",
                      "To give step-by-step instructions"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Analytical exposition aims to convince readers of a specific stance through logical arguments."
                  },
                  {
                    "id": "q2",
                    "question": "Which part of an analytical exposition text restates the writer's position at the end?",
                    "options": [
                      "Reiteration",
                      "Thesis",
                      "Arguments",
                      "Orientation"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Reiteration is the closing section that restates the thesis, reinforcing the writer's argument."
                  },
                  {
                    "id": "q3",
                    "question": "Which connective is typically used to introduce a supporting argument?",
                    "options": [
                      "Firstly / Moreover",
                      "However",
                      "Meanwhile",
                      "In contrast"
                    ],
                    "correctAnswer": 0,
                    "explanation": "'Firstly' and 'moreover' are used to introduce or add supporting arguments, while 'however' signals contrast."
                  }
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
                "isDownloaded": true,
                "summary": "This unit explores how humans are connected to nature and discusses environmental issues such as deforestation, pollution, and conservation through explanation and discussion texts.",
                "keyPoints": [
                  "Vocabulary: ecosystem, deforestation, conservation, biodiversity, sustainability",
                  "Passive voice used to describe environmental processes: 'Forests are being destroyed'",
                  "Cause-effect connectives: due to, as a result, consequently",
                  "Expressing concern and suggesting solutions for environmental issues"
                ],
                "contentBlocks": [
                  {
                    "type": "paragraph",
                    "text": "Understanding environmental vocabulary and grammar structures helps students discuss pressing global issues like deforestation and climate change with clarity and accuracy."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "1. Passive Voice in Environmental Contexts"
                  },
                  {
                    "type": "paragraph",
                    "text": "Passive voice is frequently used when describing environmental processes where the doer is unknown or unimportant, such as 'Millions of hectares of rainforest are cut down every year' or 'The river has been polluted by industrial waste'."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "2. Cause and Effect Connectives"
                  },
                  {
                    "type": "formulaBox",
                    "title": "Useful Connectives",
                    "formula": "Due to / Because of + noun phrase   |   As a result, / Consequently, + independent clause"
                  },
                  {
                    "type": "exampleBox",
                    "title": "Example: Cause-Effect Sentence",
                    "problem": "Combine: (cause) deforestation - (effect) loss of animal habitats",
                    "solutionSteps": [
                      "Use a cause-effect connective: 'Due to widespread deforestation, many animals have lost their natural habitats.'"
                    ]
                  },
                  {
                    "type": "noteBox",
                    "title": "💡 Suggesting Solutions",
                    "text": "When discussing environmental problems, always try to pair the issue with a possible solution, e.g., 'One way to address this is by supporting reforestation programs.'"
                  }
                ],
                "quiz": [
                  {
                    "id": "q1",
                    "question": "Which sentence correctly uses passive voice to describe an environmental process?",
                    "options": [
                      "The forest is being cut down rapidly.",
                      "They are cutting down the forest rapidly.",
                      "The forest cuts down rapidly.",
                      "Cutting down the forest rapidly."
                    ],
                    "correctAnswer": 0,
                    "explanation": "Passive voice follows the pattern be + past participle, as in 'is being cut down'."
                  },
                  {
                    "id": "q2",
                    "question": "Which connective correctly shows a cause-effect relationship?",
                    "options": [
                      "As a result,",
                      "Although",
                      "Meanwhile",
                      "For example"
                    ],
                    "correctAnswer": 0,
                    "explanation": "'As a result' directly signals that what follows is the effect of a previously stated cause."
                  },
                  {
                    "id": "q3",
                    "question": "'Biodiversity' most closely means...",
                    "options": [
                      "The variety of living species in an environment",
                      "The pollution level of a river",
                      "The temperature of a region",
                      "The population of a city"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Biodiversity refers to the variety of plant and animal life within a particular habitat or ecosystem."
                  }
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
                "isDownloaded": false,
                "summary": "This unit focuses on describing personal identity, character traits, and personal values, along with grammar for talking about habits and personal experiences that shape who we are.",
                "keyPoints": [
                  "Personality adjectives: introverted, empathetic, ambitious, easy-going",
                  "Present Perfect Tense for life experiences: 'I have learned...'",
                  "Expressing personal values and beliefs: 'I value... / I believe in...'",
                  "Reflective writing structure for self-identity essays"
                ],
                "contentBlocks": [
                  {
                    "type": "paragraph",
                    "text": "Talking about self-identity involves describing personality traits, personal values, and experiences that have shaped who we are, often using reflective language."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "1. Present Perfect Tense for Life Experiences"
                  },
                  {
                    "type": "paragraph",
                    "text": "Present Perfect Tense (have/has + past participle) connects past experiences to the present, such as 'I have faced many challenges that taught me resilience' or 'She has always valued honesty.'"
                  },
                  {
                    "type": "exampleBox",
                    "title": "Example: Reflective Sentence",
                    "problem": "Combine: (past experience) moving to a new city - (present impact) becoming more independent",
                    "solutionSteps": [
                      "Use Present Perfect to connect past and present: 'Moving to a new city has made me more independent than before.'"
                    ]
                  },
                  {
                    "type": "noteBox",
                    "title": "💡 Personality Adjective Bank",
                    "text": "Useful words for self-identity essays: resilient, empathetic, curious, disciplined, open-minded — choose words that genuinely reflect your own experiences rather than generic terms."
                  }
                ],
                "quiz": [
                  {
                    "id": "q1",
                    "question": "Which sentence correctly uses Present Perfect Tense?",
                    "options": [
                      "I have learned to be more patient.",
                      "I learn to be more patient yesterday.",
                      "I am learning to be more patient before.",
                      "I will have learned to be patient."
                    ],
                    "correctAnswer": 0,
                    "explanation": "'Have learned' correctly follows the Present Perfect pattern: have + past participle."
                  },
                  {
                    "id": "q2",
                    "question": "A person described as 'empathetic' is someone who...",
                    "options": [
                      "Understands and shares the feelings of others",
                      "Always works alone",
                      "Speaks very loudly",
                      "Avoids making decisions"
                    ],
                    "correctAnswer": 0,
                    "explanation": "'Empathetic' describes someone capable of understanding and sharing another person's feelings."
                  },
                  {
                    "id": "q3",
                    "question": "Which expression is appropriate for stating a personal value?",
                    "options": [
                      "I believe in honesty above all else.",
                      "It rained yesterday.",
                      "The meeting starts at nine.",
                      "She bought a new phone."
                    ],
                    "correctAnswer": 0,
                    "explanation": "Expressing a personal value uses phrases like 'I believe in...' to state what matters to someone."
                  }
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
                "isDownloaded": false,
                "summary": "An explanation text describes how or why something happens, in this unit focusing on the water cycle and the importance of water conservation for human survival.",
                "keyPoints": [
                  "Structure: General Statement, Sequenced Explanation, Closing",
                  "Vocabulary: evaporation, condensation, precipitation, conservation",
                  "Uses Simple Present Tense to describe natural, repeating processes",
                  "Sequencing connectives: first, next, then, finally, as a result"
                ],
                "contentBlocks": [
                  {
                    "type": "paragraph",
                    "text": "Explanation texts about natural processes like the water cycle use Simple Present Tense because they describe events that happen repeatedly and generally, not just once."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "1. Structure of an Explanation Text"
                  },
                  {
                    "type": "paragraph",
                    "text": "General Statement introduces the phenomenon (e.g., water cycle), Sequenced Explanation describes the process step by step in logical/chronological order, and Closing may add a concluding remark about the phenomenon's importance."
                  },
                  {
                    "type": "exampleBox",
                    "title": "Example: Explaining the Water Cycle",
                    "problem": "Arrange these stages: evaporation - condensation - precipitation - collection",
                    "solutionSteps": [
                      "First, water evaporates from oceans and rivers due to heat from the sun.",
                      "Next, the water vapor condenses into clouds.",
                      "Then, precipitation occurs as rain or snow.",
                      "Finally, the water collects in rivers and oceans, and the cycle repeats."
                    ]
                  },
                  {
                    "type": "noteBox",
                    "title": "💡 Present Tense for Natural Processes",
                    "text": "Always use Simple Present Tense (not past tense) when explaining natural, cyclical processes since they describe general truths, not one-time past events."
                  }
                ],
                "quiz": [
                  {
                    "id": "q1",
                    "question": "Which tense is used to explain the water cycle process?",
                    "options": [
                      "Simple Present Tense",
                      "Simple Past Tense",
                      "Future Tense",
                      "Past Perfect Tense"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Natural, repeating processes like the water cycle are explained using Simple Present Tense."
                  },
                  {
                    "id": "q2",
                    "question": "The process where water vapor turns into clouds is called...",
                    "options": [
                      "Condensation",
                      "Evaporation",
                      "Precipitation",
                      "Collection"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Condensation is the stage where water vapor cools and turns into tiny droplets forming clouds."
                  },
                  {
                    "id": "q3",
                    "question": "Which part of an explanation text introduces the phenomenon being explained?",
                    "options": [
                      "General Statement",
                      "Sequenced Explanation",
                      "Closing",
                      "Orientation"
                    ],
                    "correctAnswer": 0,
                    "explanation": "The General Statement opens an explanation text by introducing the topic or phenomenon."
                  }
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
                "isDownloaded": false,
                "summary": "This unit focuses on persuasive texts that encourage readers to adopt a healthy lifestyle, combining strong arguments with emotional appeal and modal verbs for recommendations.",
                "keyPoints": [
                  "Structure: Introduction of Issue, Persuasive Arguments, Call to Action",
                  "Modal verbs for recommendation: should, ought to, had better",
                  "Persuasive techniques: rhetorical questions, statistics, emotional appeal",
                  "Vocabulary: well-being, balanced diet, physical activity, mental health"
                ],
                "contentBlocks": [
                  {
                    "type": "paragraph",
                    "text": "Persuasive texts about healthy living aim to convince readers to change their habits by combining logical reasoning with emotional appeal and clear calls to action."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "1. Modal Verbs for Recommendations"
                  },
                  {
                    "type": "formulaBox",
                    "title": "Recommendation Modals",
                    "formula": "Should / Ought to — general advice   |   Had better — stronger, more urgent advice"
                  },
                  {
                    "type": "sectionTitle",
                    "title": "2. Persuasive Techniques"
                  },
                  {
                    "type": "paragraph",
                    "text": "Effective persuasive writing often uses rhetorical questions ('Do you want to feel more energetic every day?'), supporting statistics, and a clear call to action at the end urging readers to take concrete steps."
                  },
                  {
                    "type": "noteBox",
                    "title": "💡 Ending with a Call to Action",
                    "text": "A strong persuasive text always closes with a direct call to action, such as 'Start your journey to a healthier life today — your body will thank you.'"
                  }
                ],
                "quiz": [
                  {
                    "id": "q1",
                    "question": "Which modal verb expresses the strongest, most urgent recommendation?",
                    "options": [
                      "Had better",
                      "Might",
                      "Could",
                      "May"
                    ],
                    "correctAnswer": 0,
                    "explanation": "'Had better' conveys a stronger sense of urgency compared to 'should' or 'might'."
                  },
                  {
                    "id": "q2",
                    "question": "What is the purpose of a rhetorical question in a persuasive text?",
                    "options": [
                      "To engage the reader and provoke reflection without expecting a literal answer",
                      "To test the reader's grammar knowledge",
                      "To end the paragraph abruptly",
                      "To list statistical data"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Rhetorical questions are used to engage readers emotionally, not to elicit a direct answer."
                  },
                  {
                    "id": "q3",
                    "question": "The closing part of a persuasive text that urges the reader to act is called...",
                    "options": [
                      "Call to Action",
                      "General Statement",
                      "Orientation",
                      "Reorientation"
                    ],
                    "correctAnswer": 0,
                    "explanation": "The call to action is the persuasive closing that directly urges the reader to take a specific step."
                  }
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
                "isDownloaded": true,
                "summary": "This chapter covers functional expressions used in customer service situations, such as offering help, asking for assistance, and responding politely in shops, restaurants, or offices.",
                "keyPoints": [
                  "Offering help: May I help you? / Would you like some assistance?",
                  "Asking for help: Could you help me with...? / I wonder if you could...",
                  "Responding positively: Sure, I'd be happy to. / Of course.",
                  "Declining politely: I'm sorry, I'm afraid I can't right now."
                ],
                "contentBlocks": [
                  {
                    "type": "paragraph",
                    "text": "Service-context dialogues require polite, formal expressions for offering and requesting help, commonly used in shops, hotels, restaurants, and offices."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "1. Offering and Asking for Help"
                  },
                  {
                    "type": "formulaBox",
                    "title": "Key Expressions",
                    "formula": "Offering: May I help you? / Would you like some assistance?   |   Asking: Could you help me with...? / I wonder if you could..."
                  },
                  {
                    "type": "exampleBox",
                    "title": "Example Dialogue",
                    "problem": "Complete this service dialogue: Staff offers help, customer asks about a product.",
                    "solutionSteps": [
                      "Staff: 'Good afternoon, may I help you with anything?'",
                      "Customer: 'Yes, could you help me find a size medium jacket?'",
                      "Staff: 'Of course, please follow me this way.'"
                    ]
                  },
                  {
                    "type": "noteBox",
                    "title": "💡 Politeness Markers",
                    "text": "Adding words like 'please', 'could', and 'would' softens requests and makes service interactions sound more polite and professional."
                  }
                ],
                "quiz": [
                  {
                    "id": "q1",
                    "question": "Which expression is commonly used by staff to offer help to a customer?",
                    "options": [
                      "May I help you?",
                      "Give me that.",
                      "What do you want?",
                      "Hurry up, please."
                    ],
                    "correctAnswer": 0,
                    "explanation": "'May I help you?' is a standard, polite way for service staff to offer assistance."
                  },
                  {
                    "id": "q2",
                    "question": "Which response politely declines a request for help?",
                    "options": [
                      "I'm sorry, I'm afraid I can't right now.",
                      "No way.",
                      "Never.",
                      "Not my problem."
                    ],
                    "correctAnswer": 0,
                    "explanation": "This response declines politely while still sounding respectful and professional."
                  },
                  {
                    "id": "q3",
                    "question": "Which sentence is a polite way to ask for assistance?",
                    "options": [
                      "Could you help me with this, please?",
                      "Help me now.",
                      "You must help me.",
                      "Do this for me immediately."
                    ],
                    "correctAnswer": 0,
                    "explanation": "Using 'could' and 'please' makes the request for help sound polite and considerate."
                  }
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
                "isDownloaded": false,
                "summary": "This chapter focuses on writing and responding to invitations, as well as giving travel recommendations using suggestion structures like 'Why don't you...?' and 'You should visit...'.",
                "keyPoints": [
                  "Suggestion structures: Why don't you...? / How about...? / You should...",
                  "Accepting an invitation: I'd love to! / That sounds great!",
                  "Declining an invitation politely: I'm afraid I can't, but thank you for asking",
                  "Vocabulary for describing travel destinations and attractions"
                ],
                "contentBlocks": [
                  {
                    "type": "paragraph",
                    "text": "Invitation texts and travel recommendations use specific suggestion structures to propose ideas or destinations in a friendly, persuasive way."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "1. Making Suggestions and Recommendations"
                  },
                  {
                    "type": "formulaBox",
                    "title": "Suggestion Structures",
                    "formula": "Why don't you + base verb...?   |   How about + verb-ing...?   |   You should + base verb..."
                  },
                  {
                    "type": "exampleBox",
                    "title": "Example: Making a Travel Recommendation",
                    "problem": "Suggest visiting Seattle to a friend who loves coffee and nature.",
                    "solutionSteps": [
                      "Use a suggestion structure: 'Why don't you visit Seattle? It's famous for its coffee culture and beautiful natural scenery.'"
                    ]
                  },
                  {
                    "type": "noteBox",
                    "title": "💡 Responding to Invitations Gracefully",
                    "text": "Whether accepting or declining, always add a polite remark — e.g., 'I'd love to, thank you for inviting me!' or 'I'm sorry I can't make it, but I really appreciate the invitation.'"
                  }
                ],
                "quiz": [
                  {
                    "id": "q1",
                    "question": "Which sentence correctly uses a suggestion structure?",
                    "options": [
                      "Why don't you visit Seattle this summer?",
                      "Why you don't visit Seattle?",
                      "Why not visiting Seattle?",
                      "Why you visit Seattle not?"
                    ],
                    "correctAnswer": 0,
                    "explanation": "'Why don't you + base verb' is the correct suggestion structure."
                  },
                  {
                    "id": "q2",
                    "question": "Which response politely accepts an invitation?",
                    "options": [
                      "I'd love to, thank you!",
                      "Whatever.",
                      "I don't care.",
                      "Maybe, maybe not."
                    ],
                    "correctAnswer": 0,
                    "explanation": "'I'd love to, thank you!' is an enthusiastic and polite way to accept an invitation."
                  },
                  {
                    "id": "q3",
                    "question": "'How about ______ the museum this weekend?' The correct word to fill the blank is...",
                    "options": [
                      "visiting",
                      "visit",
                      "visits",
                      "to visit"
                    ],
                    "correctAnswer": 0,
                    "explanation": "'How about' is followed by a gerund (verb-ing), so 'visiting' is correct."
                  }
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
                "isDownloaded": false,
                "summary": "This chapter teaches how to write short, effective captions for photos or social media posts, focusing on conciseness, tone, and appropriate use of hashtags.",
                "keyPoints": [
                  "Captions should be short, catchy, and relevant to the image",
                  "Tone can be informative, humorous, or inspirational depending on purpose",
                  "Hashtags help categorize content and increase visibility",
                  "Avoid overly long or unclear captions that lose the reader's attention"
                ],
                "contentBlocks": [
                  {
                    "type": "paragraph",
                    "text": "A good caption complements an image by adding context, humor, or emotion in just a few words, making it more engaging without repeating exactly what the picture already shows."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "1. Elements of an Effective Caption"
                  },
                  {
                    "type": "paragraph",
                    "text": "Effective captions are concise (usually one or two short sentences), match the tone of the image (informative, funny, or inspiring), and often include relevant hashtags to reach a wider audience."
                  },
                  {
                    "type": "exampleBox",
                    "title": "Example: Writing a Caption",
                    "problem": "Write a caption for a photo of friends hiking at sunrise.",
                    "solutionSteps": [
                      "Keep it short and evocative: 'Chasing sunrises with the best company. #HikingAdventures #SunriseVibes'"
                    ]
                  },
                  {
                    "type": "noteBox",
                    "title": "💡 Avoid Caption Overload",
                    "text": "Too many hashtags or overly long captions can make a post look cluttered — 3 to 5 relevant hashtags are usually enough for clarity and impact."
                  }
                ],
                "quiz": [
                  {
                    "id": "q1",
                    "question": "What is the main purpose of a hashtag in a social media caption?",
                    "options": [
                      "To categorize content and increase visibility",
                      "To make the caption longer",
                      "To replace the need for a photo",
                      "To confuse the reader"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Hashtags help categorize posts by topic, making them easier to discover by other users."
                  },
                  {
                    "id": "q2",
                    "question": "An effective caption is generally...",
                    "options": [
                      "Short, catchy, and relevant to the image",
                      "As long as possible with full details",
                      "Written only in formal language",
                      "Unrelated to the photo for surprise"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Good captions are concise and directly relevant to the accompanying image."
                  },
                  {
                    "id": "q3",
                    "question": "Which caption best fits a photo of a delicious homemade meal?",
                    "options": [
                      "Homemade happiness on a plate. 🍝",
                      "This is a photograph of food.",
                      "I do not know what this is.",
                      "Meal number twelve today."
                    ],
                    "correctAnswer": 0,
                    "explanation": "This caption is short, catchy, and emotionally appealing — fitting the purpose of an engaging social media caption."
                  }
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
                "isDownloaded": false,
                "summary": "This chapter covers the structure and language of an English job application letter (cover letter) and curriculum vitae (CV), essential skills for entering the workforce.",
                "keyPoints": [
                  "Cover letter structure: Opening, Body (qualifications), Closing",
                  "CV sections: Personal Information, Education, Work Experience, Skills",
                  "Formal language and action verbs: managed, achieved, coordinated",
                  "Tailoring the application to match the specific job requirements"
                ],
                "contentBlocks": [
                  {
                    "type": "paragraph",
                    "text": "A job application letter (cover letter) introduces the applicant to a potential employer, while a CV provides a structured summary of qualifications, education, and experience."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "1. Structure of a Cover Letter"
                  },
                  {
                    "type": "paragraph",
                    "text": "Opening states the position applied for and how the applicant learned about it, Body highlights relevant qualifications and experience matching the job requirements, and Closing expresses enthusiasm and requests an interview opportunity."
                  },
                  {
                    "type": "exampleBox",
                    "title": "Example: Opening Sentence of a Cover Letter",
                    "problem": "Write an opening sentence applying for a marketing internship advertised online.",
                    "solutionSteps": [
                      "'I am writing to apply for the Marketing Internship position advertised on your company website, as I believe my skills in digital content creation align well with your team's needs.'"
                    ]
                  },
                  {
                    "type": "noteBox",
                    "title": "💡 Using Strong Action Verbs",
                    "text": "Replace weak phrases like 'was responsible for' with strong action verbs such as 'managed', 'led', 'achieved', or 'coordinated' to make your CV more impactful."
                  }
                ],
                "quiz": [
                  {
                    "id": "q1",
                    "question": "Which part of a cover letter states the position being applied for?",
                    "options": [
                      "Opening",
                      "Body",
                      "Closing",
                      "Signature"
                    ],
                    "correctAnswer": 0,
                    "explanation": "The opening paragraph introduces the applicant and states the specific position being applied for."
                  },
                  {
                    "id": "q2",
                    "question": "Which is a strong action verb suitable for a CV?",
                    "options": [
                      "Coordinated",
                      "Was involved with",
                      "Did some",
                      "Helped a bit"
                    ],
                    "correctAnswer": 0,
                    "explanation": "'Coordinated' is a strong, specific action verb, unlike vague phrases like 'was involved with'."
                  },
                  {
                    "id": "q3",
                    "question": "A CV typically does NOT include...",
                    "options": [
                      "The applicant's personal opinions about politics",
                      "Educational background",
                      "Work experience",
                      "Relevant skills"
                    ],
                    "correctAnswer": 0,
                    "explanation": "A CV should remain professional and relevant to the job, excluding personal opinions unrelated to qualifications."
                  }
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
                "isDownloaded": false,
                "summary": "This chapter revisits recount text writing at an advanced level, focusing on narrating complex past events and clearly identifying who was involved and their roles.",
                "keyPoints": [
                  "Structure: Orientation (who, when, where), Series of Events, Reorientation",
                  "Uses reported speech to quote what people said during the event",
                  "Identifying roles and involvement of different people in an event",
                  "Combining Simple Past and Past Continuous for overlapping actions"
                ],
                "contentBlocks": [
                  {
                    "type": "paragraph",
                    "text": "At an advanced level, recount texts not only narrate events chronologically but also clarify who was involved and what role each person played during the events described."
                  },
                  {
                    "type": "sectionTitle",
                    "title": "1. Combining Past Tenses for Detail"
                  },
                  {
                    "type": "paragraph",
                    "text": "Simple Past Tense narrates completed actions, while Past Continuous Tense describes an action in progress when another action interrupted it, e.g., 'While the committee was preparing the event, the sponsor suddenly withdrew support.'"
                  },
                  {
                    "type": "exampleBox",
                    "title": "Example: Identifying Roles in a Recount",
                    "problem": "Write a sentence identifying who organized a school event.",
                    "solutionSteps": [
                      "'The event was organized by the student council, while the teachers supervised the entire process.'"
                    ]
                  },
                  {
                    "type": "noteBox",
                    "title": "💡 Using Reported Speech in Recounts",
                    "text": "Reported speech, such as 'She said that the event was a success', adds authenticity to a recount by including what participants actually said, without needing exact quotation marks."
                  }
                ],
                "quiz": [
                  {
                    "id": "q1",
                    "question": "Which sentence correctly combines Simple Past and Past Continuous?",
                    "options": [
                      "While the committee was preparing the event, the sponsor withdrew support.",
                      "While the committee prepared the event, the sponsor was withdrawing support.",
                      "While the committee is preparing, the sponsor withdrew.",
                      "The committee preparing while sponsor withdrew."
                    ],
                    "correctAnswer": 0,
                    "explanation": "Past Continuous ('was preparing') sets the background action, interrupted by a Simple Past action ('withdrew')."
                  },
                  {
                    "id": "q2",
                    "question": "In an advanced recount text, identifying 'who was involved' mainly serves to...",
                    "options": [
                      "Clarify each person's role in the event",
                      "Make the text longer without purpose",
                      "Replace the need for an orientation",
                      "Avoid using any tense at all"
                    ],
                    "correctAnswer": 0,
                    "explanation": "Clarifying involvement helps readers understand each participant's specific role and contribution."
                  },
                  {
                    "id": "q3",
                    "question": "Which is an example of reported speech?",
                    "options": [
                      "She said that the event was a success.",
                      "\"The event was a success,\" she said.",
                      "Was the event a success?",
                      "The event, a success, was."
                    ],
                    "correctAnswer": 0,
                    "explanation": "Reported speech restates what someone said without using direct quotation marks, as in 'She said that...'."
                  }
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
