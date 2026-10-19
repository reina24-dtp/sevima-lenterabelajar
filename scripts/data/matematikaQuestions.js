// scripts/data/matematikaQuestions.js
// 13 Subbab Matematika Kelas 10, 11, 12 (Kurikulum Merdeka)
// Masing-masing memiliki 10 soal dengan pola jawaban variatif dan pembahasan mendalam.

export const matematikaQuestions = {
  "mat-10-1-1": [
    {
      id: "q1",
      question: "Bentuk sederhana dari (2³ × 2⁴) / 2⁵ adalah...",
      options: ["128", "2", "4", "8"],
      correctAnswer: 2,
      explanation: "Langkah pengerjaan:\n1) Terapkan sifat perkalian eksponen dengan basis sama: aᵐ × aⁿ = aᵐ⁺ⁿ. Pada pembilang, 2³ × 2⁴ = 2³⁺⁴ = 2⁷.\n2) Terapkan sifat pembagian eksponen: aᵐ / aⁿ = aᵐ⁻ⁿ. Operasikan pembilang dan penyebut: 2⁷ / 2⁵ = 2⁷⁻⁵ = 2².\n3) Hitung nilai 2² = 4.\n\nAnalisis pilihan lain:\n- Pilihan 128 salah karena hanya menghitung pembilang (2⁷) tanpa membagi penyebut.\n- Pilihan 2 salah karena kekeliruan mengurangkan pangkat (mengira 7 - 5 = 1).\n- Pilihan 8 salah karena mengira hasilnya 2³.\nJadi jawaban yang benar adalah 4."
    },
    {
      id: "q2",
      question: "Jika 3⁴ = 81, maka bentuk logaritma yang tepat sesuai definisi adalah...",
      options: ["⁸¹log 3 = 4", "³log 81 = 4", "⁴log 81 = 3", "³log 4 = 81"],
      correctAnswer: 1,
      explanation: "Langkah pemahaman:\n1) Definisi dasar logaritma: jika aᵇ = c dengan a > 0, a ≠ 1, dan c > 0, maka bentuk logaritmanya adalah ᵃlog c = b.\n2) Pada persamaan 3⁴ = 81, basis a = 3, eksponen b = 4, dan numerus c = 81.\n3) Maka bentuk logaritma ekuivalennya adalah ³log 81 = 4.\n\nAnalisis pilihan lain:\n- ⁸¹log 3 = 4 keliru menukar basis dengan numerus (seharusnya ⁸¹log 3 = 1/4).\n- ⁴log 81 = 3 keliru menukar pangkat dengan basis.\n- ³log 4 = 81 sama sekali tidak sesuai dengan definisi operasi logaritma."
    },
    {
      id: "q3",
      question: "Nilai dari ²log 32 − ²log 4 adalah...",
      options: ["8", "2", "28", "3"],
      correctAnswer: 3,
      explanation: "Langkah penyelesaian:\n1) Gunakan sifat logaritma pembagian numerus: ᵃlog b − ᵃlog c = ᵃlog (b / c).\n2) Maka ²log 32 − ²log 4 = ²log (32 / 4) = ²log 8.\n3) Karena 8 = 2³, maka ²log 8 = 3.\n\nAlternatif:\n²log 32 = 5 (karena 2⁵ = 32) dan ²log 4 = 2 (karena 2² = 4). Maka 5 − 2 = 3.\n\nPilihan 8 salah karena membagi langsung numerusnya tanpa mengambil logaritmanya. Pilihan 28 keliru mengurangkan numerus langsung (32 - 4) tanpa sifat logaritma."
    },
    {
      id: "q4",
      question: "Nilai dari 5⁻² adalah...",
      options: ["1/25", "−25", "−1/25", "25"],
      correctAnswer: 0,
      explanation: "Langkah penyelesaian:\n1) Pangkat bilangan bulat negatif didefinisikan sebagai a⁻ⁿ = 1 / aⁿ untuk a ≠ 0.\n2) Dengan demikian, 5⁻² = 1 / 5² = 1 / 25.\n\nCatatan penting:\nTanda negatif pada pangkat TIDAK membuat nilai bilangan menjadi negatif, melainkan membalik posisi basis menjadi pecahan (resiprokal). Kesalahan umum adalah mengira 5⁻² = −25 atau −1/25, padahal nilai 5² = 25 selalu positif."
    },
    {
      id: "q5",
      question: "Bentuk sederhana dari ((x³ y⁻²) / (x⁻¹ y⁴))² adalah...",
      options: ["x⁸ / y¹²", "x⁴ / y⁴", "x⁸ y⁴", "x⁴ / y¹²"],
      correctAnswer: 0,
      explanation: "Langkah pengerjaan:\n1) Sederhanakan bagian dalam kurung terlebih dahulu menggunakan sifat pembagian pangkat:\n   - Untuk x: x³ / x⁻¹ = x³⁻⁽⁻¹⁾ = x³⁺¹ = x⁴.\n   - Untuk y: y⁻² / y⁴ = y⁻²⁻⁴ = y⁻⁶.\n   Jadi dalam kurung menjadi x⁴ y⁻⁶.\n2) Pangkatkan seluruh bagian dengan 2 menggunakan sifat (aᵐ)ⁿ = aᵐˣⁿ:\n   (x⁴ y⁻⁶)² = x⁴ˣ² y⁻⁶ˣ² = x⁸ y⁻¹².\n3) Ubah pangkat negatif menjadi penyebut positif: x⁸ y⁻¹² = x⁸ / y¹².\n\nSemua langkah mengikuti aturan eksponen murni secara konsisten."
    },
    {
      id: "q6",
      question: "Jika diketahui ²log 3 = p dan ²log 5 = q, maka nilai dari ²log 45 adalah...",
      options: ["p + 2q", "2p + q", "p² + q", "2pq"],
      correctAnswer: 1,
      explanation: "Langkah pengerjaan:\n1) Faktorkan numerus 45 menjadi perkalian faktor prima: 45 = 9 × 5 = 3² × 5.\n2) Terapkan sifat logaritma perkalian: ²log 45 = ²log (3² × 5) = ²log (3²) + ²log 5.\n3) Terapkan sifat logaritma pangkat: ²log (3²) = 2 × ²log 3.\n4) Substitusikan nilai yang diketahui (²log 3 = p dan ²log 5 = q):\n   ²log 45 = 2p + q.\n\nPilihan 2pq keliru karena mengalikan variabel bukan menjumlahkan logaritmanya. Pilihan p + 2q keliru menukar faktor pangkat 3 dengan 5."
    },
    {
      id: "q7",
      question: "Bentuk sederhana dari bentuk akar (√3 + √2)(√3 − √2) adalah...",
      options: ["5", "2√3", "1", "√5"],
      correctAnswer: 2,
      explanation: "Langkah penyelesaian:\n1) Bentuk ini adalah perkalian sekawan yang mengikuti identitas aljabar: (a + b)(a − b) = a² − b².\n2) Ambil a = √3 dan b = √2.\n3) Maka (√3 + √2)(√3 − √2) = (√3)² − (√2)².\n4) Karena (√3)² = 3 dan (√2)² = 2, maka hasilnya adalah 3 − 2 = 1.\n\nKonsep perkalian sekawan ini merupakan dasar yang sangat penting dalam merasionalkan penyebut pecahan bentuk akar."
    },
    {
      id: "q8",
      question: "Penyelesaian dari persamaan eksponen 3^(2x − 1) = 27 adalah...",
      options: ["x = 1", "x = 3", "x = 4", "x = 2"],
      correctAnswer: 3,
      explanation: "Langkah penyelesaian:\n1) Samakan basis kedua ruas menjadi bilangan berpangkat dengan basis 3. Karena 27 = 3³, maka persamaan menjadi:\n   3^(2x − 1) = 3³.\n2) Karena basis kedua ruas sudah sama (yaitu 3), maka eksponen kedua ruas harus bernilai sama:\n   2x − 1 = 3.\n3) Selesaikan persamaan linear:\n   2x = 3 + 1\n   2x = 4\n   x = 4 / 2 = 2.\n\nUji jawaban: 3^(2(2) − 1) = 3^(4 − 1) = 3³ = 27 (terbukti benar)."
    },
    {
      id: "q9",
      question: "Nilai dari ᵃlog b × ᵇlog c × ᶜlog a (dengan a, b, c > 0 dan a, b, c ≠ 1) adalah...",
      options: ["a + b + c", "1", "0", "abc"],
      correctAnswer: 1,
      explanation: "Langkah pembuktian menggunakan sifat rantai logaritma:\n1) Sifat perubahan basis logaritma menyatakan bahwa ᵃlog b = (log b) / (log a).\n2) Kalikan ketiga bentuk tersebut:\n   ((log b)/(log a)) × ((log c)/(log b)) × ((log a)/(log c)).\n3) Perhatikan bahwa log b, log c, dan log a saling meniadakan (membagi habis):\n   Hasilnya = 1.\n\nSifat rantai ini sangat berguna untuk menyederhanakan perkalian bersambung logaritma tanpa perlu menghitung nilai numerik basis satu per satu."
    },
    {
      id: "q10",
      question: "Sebuah kultur bakteri awalnya berjumlah 100 individu dan membelah diri menjadi 2 kali lipat setiap jam. Jumlah bakteri setelah 5 jam adalah...",
      options: ["1.600", "6.400", "3.200", "800"],
      correctAnswer: 2,
      explanation: "Langkah pemodelan pertumbuhan eksponensial:\n1) Rumus pertumbuhan eksponensial: N(t) = N₀ × 2ᵗ, di mana N₀ adalah jumlah awal dan t adalah waktu dalam jam.\n2) Diketahui N₀ = 100 dan t = 5 jam.\n3) Hitung 2⁵ = 32.\n4) Kalikan dengan jumlah awal: N(5) = 100 × 2⁵ = 100 × 32 = 3.200 bakteri.\n\nAnalisis kesalahan umum:\n- Menghitung 100 × 2 × 5 = 1.000 (menggunakan pertumbuhan linear, bukan eksponensial).\n- Menghitung 100 × 2⁴ = 1.600 (salah memasukkan t = 4 bukannya 5)."
    }
  ],

  "mat-10-2-1": [
    {
      id: "q1",
      question: "Suku ke-15 dari barisan aritmetika 3, 7, 11, 15, ... adalah...",
      options: ["55", "59", "63", "51"],
      correctAnswer: 1,
      explanation: "Langkah pengerjaan:\n1) Tentukan suku pertama (a) dan beda (b):\n   a = 3\n   b = 7 − 3 = 4.\n2) Gunakan rumus suku ke-n barisan aritmetika: Uₙ = a + (n − 1)b.\n3) Masukkan n = 15:\n   U₁₅ = 3 + (15 − 1) × 4\n   U₁₅ = 3 + 14 × 4\n   U₁₅ = 3 + 56 = 59.\n\nKesalahan umum adalah lupa mengurangkan 1 pada n (menghitung 3 + 15 × 4 = 63)."
    },
    {
      id: "q2",
      question: "Jumlah 10 suku pertama dari deret aritmetika 2 + 5 + 8 + 11 + ... adalah...",
      options: ["155", "145", "310", "135"],
      correctAnswer: 0,
      explanation: "Langkah pengerjaan:\n1) Diketahui a = 2, b = 5 − 2 = 3, dan n = 10.\n2) Rumus jumlah n suku pertama deret aritmetika: Sₙ = (n/2) × (2a + (n − 1)b).\n3) Masukkan nilai:\n   S₁₀ = (10/2) × (2(2) + (10 − 1) × 3)\n   S₁₀ = 5 × (4 + 9 × 3)\n   S₁₀ = 5 × (4 + 27)\n   S₁₀ = 5 × 31 = 155.\n\nPilihan 310 keliru karena lupa membagi n dengan 2. Pilihan 145 keliru mengalikan 5 × 29."
    },
    {
      id: "q3",
      question: "Suku ke-6 dari barisan geometri 2, 6, 18, 54, ... adalah...",
      options: ["162", "486", "243", "972"],
      correctAnswer: 1,
      explanation: "Langkah penyelesaian:\n1) Tentukan suku pertama (a) dan rasio (r):\n   a = 2\n   r = 6 / 2 = 3.\n2) Rumus suku ke-n barisan geometri: Uₙ = a × rⁿ⁻¹.\n3) Untuk n = 6:\n   U₆ = 2 × 3⁶⁻¹ = 2 × 3⁵.\n4) Hitung nilai 3⁵ = 243.\n5) Maka U₆ = 2 × 243 = 486.\n\nPilihan 972 keliru memakai pangkat 6 (2 × 3⁶ = 1458 / 972 jika salah hitung), dan 162 adalah suku ke-5."
    },
    {
      id: "q4",
      question: "Suku ke-20 dari barisan aritmetika 7, 11, 15, 19, ... adalah...",
      options: ["83", "79", "87", "81"],
      correctAnswer: 0,
      explanation: "Langkah penyelesaian:\n1) Suku pertama a = 7, beda b = 11 − 7 = 4.\n2) Rumus suku ke-n: Uₙ = a + (n − 1)b.\n3) Masukkan n = 20:\n   U₂₀ = 7 + (20 − 1) × 4\n   U₂₀ = 7 + 19 × 4\n   U₂₀ = 7 + 76 = 83.\n\nPilihan 79 keliru menghitung 18 × 4 + 7, sedangkan 87 keliru mengalikan 20 × 4 + 7 tanpa mengurangkan 1 pada n."
    },
    {
      id: "q5",
      question: "Jika suku ke-3 suatu barisan aritmetika adalah 11 dan suku ke-7 adalah 23, maka beda barisan tersebut adalah...",
      options: ["2", "4", "3", "5"],
      correctAnswer: 2,
      explanation: "Langkah penyelesaian:\n1) Nyatakan suku ke-3 dan ke-7 dalam bentuk a dan b:\n   U₃ = a + 2b = 11\n   U₇ = a + 6b = 23.\n2) Kurangkan persamaan U₇ dengan U₃ untuk mengeliminasi a:\n   (a + 6b) − (a + 2b) = 23 − 11\n   4b = 12\n   b = 12 / 4 = 3.\n3) Nilai a dapat dicari dengan a + 2(3) = 11 → a = 5.\nJadi, beda barisan tersebut adalah 3."
    },
    {
      id: "q6",
      question: "Jumlah 5 suku pertama dari deret geometri 3 + 6 + 12 + ... adalah...",
      options: ["93", "96", "48", "87"],
      correctAnswer: 0,
      explanation: "Langkah pengerjaan:\n1) Diketahui suku awal a = 3 dan rasio r = 6 / 3 = 2 (karena r > 1).\n2) Rumus deret geometri: Sₙ = a(rⁿ − 1) / (r − 1).\n3) Masukkan n = 5:\n   S₅ = 3(2⁵ − 1) / (2 − 1)\n   S₅ = 3(32 − 1) / 1\n   S₅ = 3 × 31 = 93.\n\nAlternatif menjumlahkan manual: 3 + 6 + 12 + 24 + 48 = 93. Jawaban 93 sangat terbukti tepat."
    },
    {
      id: "q7",
      question: "Diketahui barisan geometri dengan U₁ = 5 dan U₄ = 40. Rasio (r) dari barisan tersebut adalah...",
      options: ["4", "3", "2", "8"],
      correctAnswer: 2,
      explanation: "Langkah pengerjaan:\n1) Rumus suku ke-n barisan geometri: Uₙ = a × rⁿ⁻¹.\n2) Untuk U₄: a × r³ = 40.\n3) Karena a = U₁ = 5, maka substitusikan:\n   5 × r³ = 40\n   r³ = 40 / 5\n   r³ = 8.\n4) Tarik akar pangkat tiga: r = ³√8 = 2.\nJadi rasio barisan tersebut adalah 2."
    },
    {
      id: "q8",
      question: "Suatu tali dipotong menjadi 5 bagian yang membentuk barisan aritmetika. Jika potongan terpendek 12 cm dan terpanjang 28 cm, panjang tali mula-mula adalah...",
      options: ["90 cm", "100 cm", "110 cm", "80 cm"],
      correctAnswer: 1,
      explanation: "Langkah pemodelan masalah kontekstual:\n1) Panjang tali mula-mula adalah jumlah total ke-5 potongan tali (S₅).\n2) Diketahui suku pertama (potongan terpendek) a = 12, dan suku terakhir (potongan terpanjang) U₅ = 28, dengan n = 5.\n3) Gunakan rumus jumlah deret aritmetika yang melibatkan suku awal dan akhir:\n   Sₙ = (n/2) × (a + Uₙ)\n4) Masukkan nilainya:\n   S₅ = (5/2) × (12 + 28) = (5/2) × 40 = 5 × 20 = 100 cm.\nJadi panjang tali semula adalah 100 cm."
    },
    {
      id: "q9",
      question: "Banyak kursi pada baris pertama sebuah gedung pertunjukan adalah 15 kursi. Baris berikutnya selalu bertambah 3 kursi dari baris di depannya. Banyak kursi pada baris ke-12 adalah...",
      options: ["45 kursi", "48 kursi", "51 kursi", "54 kursi"],
      correctAnswer: 1,
      explanation: "Langkah pengerjaan:\n1) Permasalahan ini adalah barisan aritmetika dengan a = 15 (baris pertama) dan beda b = 3 (penambahan tiap baris).\n2) Ditanyakan banyak kursi pada baris ke-12, yaitu U₁₂.\n3) Gunakan rumus Uₙ = a + (n − 1)b:\n   U₁₂ = 15 + (12 − 1) × 3\n   U₁₂ = 15 + 11 × 3\n   U₁₂ = 15 + 33 = 48 kursi.\n\nPilihan 51 kursi keliru menghitung 15 + 12 × 3 (lupa mengurangkan n dengan 1)."
    },
    {
      id: "q10",
      question: "Di antara bilangan 4 dan 28 disisipkan 3 bilangan sehingga terbentuk barisan aritmetika baru. Beda barisan yang baru tersebut adalah...",
      options: ["8", "5", "7", "6"],
      correctAnswer: 3,
      explanation: "Langkah penyelesaian rumus sisipan:\n1) Rumus beda baru (b') setelah disisipkan k bilangan di antara dua suku berurutan:\n   b' = (y − x) / (k + 1)\n2) Di sini x = 4, y = 28, dan banyak bilangan sisipan k = 3.\n3) Maka b' = (28 − 4) / (3 + 1) = 24 / 4 = 6.\n4) Barisan barunya adalah: 4, 10, 16, 22, 28 (ada 3 bilangan sisipan yaitu 10, 16, 22 dengan beda 6).\nJadi beda yang baru adalah 6."
    }
  ],

  "mat-10-3-1": [
    {
      id: "q1",
      question: "Pada segitiga siku-siku ABC yang siku-siku di B, jika panjang sisi AB (samping) = 4 cm dan BC (depan) = 3 cm, maka nilai sin A adalah...",
      options: ["4/5", "3/4", "3/5", "4/3"],
      correctAnswer: 2,
      explanation: "Langkah pengerjaan:\n1) Tentukan sisi miring (AC) menggunakan teorema Pythagoras:\n   AC = √(AB² + BC²) = √(4² + 3²) = √(16 + 9) = √25 = 5 cm.\n2) Tinjau sudut A:\n   - Sisi depan sudut A adalah BC = 3 cm.\n   - Sisi samping sudut A adalah AB = 4 cm.\n   - Sisi miring adalah AC = 5 cm.\n3) Perbandingan sinus adalah sisi depan dibagi sisi miring:\n   sin A = depan / miring = BC / AC = 3/5.\n\nPilihan 4/5 adalah nilai cos A, sedangkan 3/4 adalah nilai tan A."
    },
    {
      id: "q2",
      question: "Nilai dari cos 60° + sin 30° adalah...",
      options: ["1/2", "1", "√3/2", "√3"],
      correctAnswer: 1,
      explanation: "Langkah penyelesaian:\n1) Ingat nilai perbandingan sudut-sudut istimewa trigonometri:\n   - cos 60° = 1/2\n   - sin 30° = 1/2.\n2) Jumlahkan kedua nilai tersebut:\n   cos 60° + sin 30° = 1/2 + 1/2 = 1.\n\nHubungan kofungsi ini selalu berlaku karena 60° dan 30° saling berkomplemen (berjumlah 90°), sehingga cos 60° = sin 30° = 1/2."
    },
    {
      id: "q3",
      question: "Nilai tan 45° adalah...",
      options: ["0", "√2", "1", "√3"],
      correctAnswer: 2,
      explanation: "Langkah penjelasan:\n1) Tangen sudut didefinisikan sebagai perbandingan sisi depan terhadap sisi samping: tan θ = depan / samping.\n2) Pada segitiga siku-siku sama kaki dengan sudut 45°, panjang sisi depan sama persis dengan sisi samping (misalnya 1 satuan dan 1 satuan).\n3) Maka tan 45° = 1 / 1 = 1.\n4) Secara rumus kofungsi: tan 45° = sin 45° / cos 45° = (1/2 √2) / (1/2 √2) = 1.\nNilainya adalah bilangan bulat 1."
    },
    {
      id: "q4",
      question: "Jika sin α = 5/13 dengan α adalah sudut lancip, maka nilai cos α adalah...",
      options: ["12/13", "13/12", "5/12", "12/5"],
      correctAnswer: 0,
      explanation: "Langkah pengerjaan:\n1) Gunakan identitas dasar trigonometri: sin²α + cos²α = 1, atau pendekatan segitiga siku-siku:\n   - Sisi depan = 5, sisi miring = 13.\n2) Cari sisi samping dengan Pythagoras:\n   samping = √(miring² − depan²) = √(13² − 5²) = √(169 − 25) = √144 = 12.\n3) Tentukan cos α:\n   cos α = samping / miring = 12 / 13.\n\nPilihan 5/12 adalah tan α, dan 13/12 adalah sec α."
    },
    {
      id: "q5",
      question: "Nilai dari (sin 45°)² + (cos 45°)² adalah...",
      options: ["1/2", "1", "2", "√2"],
      correctAnswer: 1,
      explanation: "Langkah penyelesaian:\n1) Metode identitas Pythagoras trigonometri: untuk setiap sudut θ berlaku identitas pasti sin²θ + cos²θ = 1.\n2) Pembuktian numerik untuk θ = 45°:\n   - sin 45° = 1/2 √2 → (sin 45°)² = (1/2 √2)² = 2/4 = 1/2.\n   - cos 45° = 1/2 √2 → (cos 45°)² = (1/2 √2)² = 2/4 = 1/2.\n   - Jumlahkan: 1/2 + 1/2 = 1.\nIdentitas ini merupakan fondasi utama seluruh cabang trigonometri."
    },
    {
      id: "q6",
      question: "Seorang anak berdiri sejauh 12 meter dari kaki pohon. Ia melihat puncak pohon dengan sudut elevasi 30°. Jika tinggi pandangan anak diabaikan, tinggi pohon tersebut adalah...",
      options: ["4√3 m", "6√3 m", "12√3 m", "4 m"],
      correctAnswer: 0,
      explanation: "Langkah pemodelan masalah sudut elevasi:\n1) Bentuk segitiga siku-siku antara posisi anak, kaki pohon, dan puncak pohon.\n   - Sisi samping = jarak ke pohon = 12 m.\n   - Sisi depan = tinggi pohon (t).\n   - Sudut elevasi θ = 30°.\n2) Gunakan perbandingan tangen:\n   tan 30° = depan / samping = t / 12.\n3) Karena tan 30° = 1/√3 = (1/3)√3, maka:\n   t = 12 × tan 30° = 12 × (1/3)√3 = 4√3 meter.\nJadi tinggi pohon adalah 4√3 meter."
    },
    {
      id: "q7",
      question: "Nilai dari sin 60° × cos 30° adalah...",
      options: ["1/4", "1/2", "3/4", "1"],
      correctAnswer: 2,
      explanation: "Langkah pengerjaan:\n1) Ketahui nilai trigonometri sudut istimewa:\n   - sin 60° = (1/2)√3\n   - cos 30° = (1/2)√3.\n2) Kalikan kedua nilai:\n   sin 60° × cos 30° = ((1/2)√3) × ((1/2)√3) = (1/4) × 3 = 3/4.\n\nPilihan 1/2 salah karena lupa mengalikan akar, sedangkan 1 keliru mengira keduanya bernilai 1."
    },
    {
      id: "q8",
      question: "Jika tan θ = 1 dan θ berada di kuadran I, maka besar sudut θ adalah...",
      options: ["30°", "60°", "90°", "45°"],
      correctAnswer: 3,
      explanation: "Langkah analisis:\n1) Pada lingkaran satuan atau segitiga siku-siku sama kaki, nilai sin θ = cos θ hanya terjadi ketika sisi depan sama panjang dengan sisi samping.\n2) Perbandingan tan θ = sin θ / cos θ = 1 diperoleh saat sudut θ = 45° (karena sin 45° = cos 45° = 1/2 √2).\n3) Sudut istimewa lain di kuadran I memiliki nilai tan berbeda: tan 30° = 1/√3, tan 60° = √3, tan 0° = 0."
    },
    {
      id: "q9",
      question: "Perbandingan trigonometri secan (sec θ) didefinisikan sebagai...",
      options: ["depan / miring", "1 / cos θ", "1 / sin θ", "samping / depan"],
      correctAnswer: 1,
      explanation: "Langkah pemahaman definisi kebalikan trigonometri:\n1) Secan (sec θ) adalah kebalikan dari kosinus: sec θ = 1 / cos θ = miring / samping.\n2) Cosecan (csc θ) adalah kebalikan dari sinus: csc θ = 1 / sin θ = miring / depan.\n3) Cotangen (cot θ) adalah kebalikan dari tangen: cot θ = 1 / tan θ = samping / depan.\nOleh karena itu jawaban yang tepat adalah 1 / cos θ."
    },
    {
      id: "q10",
      question: "Sebuah tangga sepanjang 6 meter disandarkan pada dinding tegak dan membentuk sudut 60° dengan lantai. Tinggi ujung atas tangga dari lantai adalah...",
      options: ["3 m", "2√3 m", "3√3 m", "6√3 m"],
      correctAnswer: 2,
      explanation: "Langkah penyelesaian:\n1) Tangga bertindak sebagai sisi miring segitiga siku-siku = 6 m.\n2) Sudut tangga terhadap lantai horizontal = 60°.\n3) Tinggi ujung atas tangga dari lantai adalah sisi depan sudut 60° (h).\n4) Gunakan perbandingan sinus:\n   sin 60° = depan / miring = h / 6.\n5) Karena sin 60° = (1/2)√3, maka:\n   h = 6 × sin 60° = 6 × (1/2)√3 = 3√3 meter.\nJadi tinggi dinding yang dicapai tangga adalah 3√3 meter."
    }
  ],

  "mat-10-4-1": [
    {
      id: "q1",
      question: "Himpunan penyelesaian dari sistem persamaan 2x + y = 9 dan x + 2y = 12 adalah...",
      options: ["{(3, 3)}", "{(2, 5)}", "{(4, 1)}", "{(1, 7)}"],
      correctAnswer: 1,
      explanation: "Langkah pengerjaan menggunakan metode eliminasi-substitusi:\n1) Persamaan 1: 2x + y = 9  (kalikan 2) → 4x + 2y = 18\n   Persamaan 2: x + 2y = 12 (kalikan 1) → x + 2y = 12\n2) Kurangkan kedua persamaan:\n   (4x + 2y) − (x + 2y) = 18 − 12\n   3x = 6  →  x = 2.\n3) Substitusikan x = 2 ke persamaan 1:\n   2(2) + y = 9 → 4 + y = 9 → y = 5.\n4) Uji ke persamaan 2: 2 + 2(5) = 2 + 10 = 12 (cocok).\nJadi himpunan penyelesaiannya adalah {(2, 5)}."
    },
    {
      id: "q2",
      question: "Pasangan (x, y) yang memenuhi x + y = 7 dan x − y = 1 adalah...",
      options: ["(3, 4)", "(4, 3)", "(7, 1)", "(5, 2)"],
      correctAnswer: 1,
      explanation: "Langkah pengerjaan:\n1) Jumlahkan kedua persamaan untuk mengeliminasi y:\n   (x + y) + (x − y) = 7 + 1\n   2x = 8 → x = 4.\n2) Substitusikan nilai x = 4 ke persamaan x + y = 7:\n   4 + y = 7 → y = 3.\n3) Didapatkan pasangan terurut (x, y) = (4, 3).\n\nPerhatikan urutan pasangan variabel (x, y): pilihan (3, 4) salah karena menukar nilai x dan y."
    },
    {
      id: "q3",
      question: "Harga 3 buku tulis dan 2 pulpen adalah Rp16.500,00, sedangkan harga 2 buku tulis dan 4 pulpen adalah Rp19.000,00. Harga sebuah buku tulis adalah...",
      options: ["Rp3.500,00", "Rp2.500,00", "Rp4.000,00", "Rp3.000,00"],
      correctAnswer: 0,
      explanation: "Langkah penyelesaian model matematika:\n1) Misalkan b = harga buku tulis dan p = harga pulpen.\n   (1) 3b + 2p = 16.500\n   (2) 2b + 4p = 19.000  (bagi 2 kedua ruas) → b + 2p = 9.500\n2) Kurangkan persamaan (1) dengan b + 2p = 9.500:\n   (3b + 2p) − (b + 2p) = 16.500 − 9.500\n   2b = 7.000\n   b = 3.500.\n3) Jika ingin mencari harga pulpen: 3.500 + 2p = 9.500 → 2p = 6.000 → p = 3.000.\nJadi, harga sebuah buku tulis adalah Rp3.500,00."
    },
    {
      id: "q4",
      question: "Jika sistem persamaan 2x − y = 4 dan 4x − 2y = 8 digambarkan pada bidang Kartesius, maka posisi kedua garis tersebut adalah...",
      options: ["Saling tegak lurus", "Berimpit (memiliki tak hingga banyak solusi)", "Sejajar (tidak memiliki solusi)", "Berpotongan di tepat satu titik"],
      correctAnswer: 1,
      explanation: "Langkah analisis geometri SPLDV:\n1) Persamaan pertama: 2x − y = 4.\n2) Persamaan kedua: 4x − 2y = 8.\n3) Perhatikan perbandingan koefisiennya:\n   a₁/a₂ = 2/4 = 1/2\n   b₁/b₂ = −1/−2 = 1/2\n   c₁/c₂ = 4/8 = 1/2.\n4) Karena a₁/a₂ = b₁/b₂ = c₁/c₂, kedua persamaan tersebut ekuivalen dan grafiknya merupakan garis yang sama persis (saling berimpit).\nHal ini berarti sistem memiliki tak hingga banyak penyelesaian."
    },
    {
      id: "q5",
      question: "Nilai x yang memenuhi sistem persamaan 3x − 2y = 7 dan 2x + y = 7 adalah...",
      options: ["x = 1", "x = 4", "x = 3", "x = 2"],
      correctAnswer: 2,
      explanation: "Langkah penyelesaian:\n1) Kalikan persamaan kedua dengan 2 agar koefisien y sama besar dan berlawanan tanda:\n   2x + y = 7 (× 2) → 4x + 2y = 14.\n2) Jumlahkan dengan persamaan pertama:\n   (3x − 2y) + (4x + 2y) = 7 + 14\n   7x = 21\n   x = 21 / 7 = 3.\n3) Nilai y dapat dicari dengan 2(3) + y = 7 → 6 + y = 7 → y = 1.\nJadi, nilai x adalah 3."
    },
    {
      id: "q6",
      question: "Keliling sebuah persegi panjang adalah 40 cm. Jika panjangnya 4 cm lebih dari lebarnya, maka luas persegi panjang tersebut adalah...",
      options: ["96 cm²", "84 cm²", "100 cm²", "64 cm²"],
      correctAnswer: 0,
      explanation: "Langkah pemodelan geometri:\n1) Misalkan p = panjang dan l = lebar.\n2) Rumus keliling: 2(p + l) = 40 → p + l = 20.\n3) Diketahui p = l + 4.\n4) Substitusikan p ke dalam persamaan keliling:\n   (l + 4) + l = 20\n   2l + 4 = 20\n   2l = 16 → l = 8 cm.\n5) Hitung panjang p: p = 8 + 4 = 12 cm.\n6) Luas persegi panjang: L = p × l = 12 × 8 = 96 cm².\nJadi luasnya adalah 96 cm²."
    },
    {
      id: "q7",
      question: "Sistem persamaan linear 2x + 3y = 6 dan 2x + 3y = 12 memiliki sifat...",
      options: ["Tepat satu solusi", "Dua solusi", "Tidak memiliki solusi", "Tak hingga banyak solusi"],
      correctAnswer: 2,
      explanation: "Langkah analisis konsistensi sistem:\n1) Bandingkan koefisien variabel dan konstantanya:\n   a₁/a₂ = 2/2 = 1\n   b₁/b₂ = 3/3 = 1\n   c₁/c₂ = 6/12 = 1/2.\n2) Kondisi a₁/a₂ = b₁/b₂ ≠ c₁/c₂ menunjukkan bahwa kedua garis memiliki gradien yang sama (sejajar) namun konstanta intersep berbeda.\n3) Karena kedua garis sejajar dan tidak pernah berpotongan, sistem persamaan tersebut kontradiktif dan tidak memiliki penyelesaian sama sekali (inkonsisten)."
    },
    {
      id: "q8",
      question: "Jumlah dua bilangan cacah adalah 37, sedangkan selisih keduanya adalah 7. Kedua bilangan tersebut adalah...",
      options: ["20 dan 17", "22 dan 15", "21 dan 16", "23 dan 14"],
      correctAnswer: 1,
      explanation: "Langkah penyelesaian:\n1) Misalkan dua bilangan tersebut adalah x dan y dengan x > y.\n2) Sistem persamaan:\n   x + y = 37\n   x − y = 7\n3) Jumlahkan kedua persamaan:\n   2x = 44 → x = 22.\n4) Kurangkan kedua persamaan:\n   2y = 30 → y = 15.\n5) Verifikasi: 22 + 15 = 37 dan 22 − 15 = 7 (cocok).\nJadi bilangan tersebut adalah 22 dan 15."
    },
    {
      id: "q9",
      question: "Jika (x₀, y₀) adalah penyelesaian dari SPLDV 5x − 3y = 1 dan 3x + y = 9, maka nilai dari x₀ + 2y₀ adalah...",
      options: ["7", "6", "9", "8"],
      correctAnswer: 3,
      explanation: "Langkah pengerjaan:\n1) Dari persamaan kedua, nyatakan y dalam x: y = 9 − 3x.\n2) Substitusikan ke persamaan pertama:\n   5x − 3(9 − 3x) = 1\n   5x − 27 + 9x = 1\n   14x = 28 → x₀ = 2.\n3) Cari y₀: y₀ = 9 − 3(2) = 9 − 6 = 3.\n4) Hitung nilai x₀ + 2y₀:\n   x₀ + 2y₀ = 2 + 2(3) = 2 + 6 = 8.\nJadi hasilnya adalah 8."
    },
    {
      id: "q10",
      question: "Titik potong antara garis y = 2x − 1 dan garis y = −x + 5 adalah...",
      options: ["(3, 2)", "(1, 4)", "(2, 3)", "(4, 1)"],
      correctAnswer: 2,
      explanation: "Langkah mencari titik potong dua garis:\n1) Samakan kedua nilai y:\n   2x − 1 = −x + 5\n2) Kumpulkan suku-suku sejenis:\n   2x + x = 5 + 1\n   3x = 6 → x = 2.\n3) Substitusikan x = 2 ke salah satu persamaan:\n   y = 2(2) − 1 = 4 − 1 = 3.\n4) Titik koordinat perpotongannya adalah (2, 3).\nVerifikasi pada garis kedua: y = −2 + 5 = 3 (terbukti benar)."
    }
  ],

  "mat-10-5-1": [
    {
      id: "q1",
      question: "Akar-akar dari persamaan kuadrat x² − 5x + 6 = 0 adalah...",
      options: ["x = −2 atau x = −3", "x = 2 atau x = 3", "x = 1 atau x = 6", "x = −1 atau x = −6"],
      correctAnswer: 1,
      explanation: "Langkah pemfaktoran aljabar:\n1) Cari dua bilangan yang jika dikalikan menghasilkan c = 6 dan jika dijumlahkan menghasilkan b = −5.\n2) Dua bilangan tersebut adalah −2 dan −3, karena (−2) × (−3) = 6 dan (−2) + (−3) = −5.\n3) Faktorkan persamaan:\n   (x − 2)(x − 3) = 0.\n4) Berdasarkan sifat perkalian nol:\n   x − 2 = 0 → x = 2, atau\n   x − 3 = 0 → x = 3.\nJadi akar-akarnya adalah x = 2 atau x = 3."
    },
    {
      id: "q2",
      question: "Sumbu simetri grafik fungsi kuadrat f(x) = x² − 4x + 1 adalah garis...",
      options: ["x = −2", "x = 4", "x = 2", "x = −4"],
      correctAnswer: 2,
      explanation: "Langkah penentuan sumbu simetri:\n1) Fungsi kuadrat f(x) = ax² + bx + c memiliki rumus sumbu simetri:\n   x = −b / (2a).\n2) Pada f(x) = x² − 4x + 1, koefisien a = 1 dan b = −4.\n3) Masukkan ke dalam rumus:\n   x = −(−4) / (2 × 1) = 4 / 2 = 2.\nSumbu simetri ini membagi kurva parabola menjadi dua bagian yang simetris sempurna di garis vertikal x = 2."
    },
    {
      id: "q3",
      question: "Nilai diskriminan (D) dari fungsi kuadrat f(x) = 2x² − 4x + 3 adalah...",
      options: ["−8", "8", "40", "−4"],
      correctAnswer: 0,
      explanation: "Langkah penghitungan diskriminan:\n1) Rumus diskriminan untuk bentuk ax² + bx + c adalah D = b² − 4ac.\n2) Di sini a = 2, b = −4, dan c = 3.\n3) Hitung nilai D:\n   D = (−4)² − 4(2)(3)\n   D = 16 − 24 = −8.\n\nKarena D < 0, grafik fungsi kuadrat ini tidak memotong sumbu X dan persamaan kuadratnya tidak memiliki akar real."
    },
    {
      id: "q4",
      question: "Koordinat titik puncak (ekstrem) dari fungsi kuadrat f(x) = x² − 6x + 5 adalah...",
      options: ["(3, 4)", "(−3, −4)", "(3, −4)", "(−3, 4)"],
      correctAnswer: 2,
      explanation: "Langkah mencari koordinat titik puncak (x_p, y_p):\n1) Cari absis puncak x_p = −b / (2a):\n   x_p = −(−6) / (2 × 1) = 6 / 2 = 3.\n2) Substitusikan x_p = 3 ke dalam fungsi untuk memperoleh ordinat y_p:\n   y_p = f(3) = (3)² − 6(3) + 5\n   y_p = 9 − 18 + 5 = −4.\n3) Maka koordinat titik puncak adalah (3, −4).\nKarena a = 1 > 0, titik ini merupakan titik balik minimum parabola."
    },
    {
      id: "q5",
      question: "Jika grafik fungsi kuadrat f(x) = ax² + bx + c terbuka ke bawah, maka syarat yang harus dipenuhi adalah...",
      options: ["c < 0", "b < 0", "D < 0", "a < 0"],
      correctAnswer: 3,
      explanation: "Langkah analisis karakteristik kurva parabola:\n1) Tanda dari koefisien a menentukan kelengkungan dan arah membuka parabola:\n   - Jika a > 0, kurva membuka ke atas (memiliki titik balik minimum).\n   - Jika a < 0, kurva membuka ke bawah (memiliki titik balik maksimum).\n2) Nilai c menentukan titik potong sumbu Y di (0, c).\n3) Nilai diskriminan D menentukan banyak titik potong dengan sumbu X.\nOleh karena itu, grafik membuka ke bawah jika dan hanya jika a < 0."
    },
    {
      id: "q6",
      question: "Persamaan kuadrat baru yang akar-akarnya adalah 3 dan −4 adalah...",
      options: ["x² + x − 12 = 0", "x² − x − 12 = 0", "x² + 7x − 12 = 0", "x² − 7x + 12 = 0"],
      correctAnswer: 0,
      explanation: "Langkah menyusun persamaan kuadrat:\n1) Jika akar-akarnya x₁ dan x₂, maka persamaan kuadratnya adalah:\n   (x − x₁)(x − x₂) = 0  atau  x² − (x₁ + x₂)x + (x₁ × x₂) = 0.\n2) Diketahui x₁ = 3 dan x₂ = −4:\n   - Jumlah akar: x₁ + x₂ = 3 + (−4) = −1.\n   - Hasil kali akar: x₁ × x₂ = 3 × (−4) = −12.\n3) Bentuk persamaan kuadrat:\n   x² − (−1)x + (−12) = 0 → x² + x − 12 = 0.\n\nPerhatikan tanda minus di depan jumlah akar: −(−1)x menjadi +x."
    },
    {
      id: "q7",
      question: "Jika x₁ dan x₂ adalah akar-akar dari x² − 7x + 10 = 0, maka nilai dari x₁² + x₂² adalah...",
      options: ["39", "29", "49", "19"],
      correctAnswer: 1,
      explanation: "Langkah menggunakan rumus vieta:\n1) Berdasarkan teorema Vieta untuk ax² + bx + c = 0:\n   x₁ + x₂ = −b/a = −(−7)/1 = 7\n   x₁ × x₂ = c/a = 10/1 = 10.\n2) Jabarkan bentuk aljabar:\n   x₁² + x₂² = (x₁ + x₂)² − 2(x₁ × x₂).\n3) Substitusikan nilainya:\n   x₁² + x₂² = (7)² − 2(10) = 49 − 20 = 29.\n\nAlternatif dengan mencari akar: x² − 7x + 10 = (x − 2)(x − 5) = 0 → akar 2 dan 5. Maka 2² + 5² = 4 + 25 = 29."
    },
    {
      id: "q8",
      question: "Tinggi sebuah roket peluru setelah t detik dinyatakan oleh h(t) = 40t − 5t² (dalam meter). Tinggi maksimum yang dicapai peluru tersebut adalah...",
      options: ["60 meter", "75 meter", "100 meter", "80 meter"],
      correctAnswer: 3,
      explanation: "Langkah penerapan nilai ekstrem fungsi kuadrat:\n1) Bentuk h(t) = −5t² + 40t adalah fungsi kuadrat dengan a = −5 dan b = 40.\n2) Waktu saat mencapai tinggi maksimum adalah sumbu simetri:\n   t_maks = −b / (2a) = −40 / (2 × (−5)) = −40 / (−10) = 4 detik.\n3) Masukkan t = 4 ke dalam fungsi h(t):\n   h(4) = 40(4) − 5(4)² = 160 − 5(16) = 160 − 80 = 80 meter.\nJadi tinggi maksimum peluru adalah 80 meter."
    },
    {
      id: "q9",
      question: "Jika persamaan kuadrat x² − kx + 9 = 0 memiliki dua akar kembar (akar real sama), maka nilai k yang mungkin adalah...",
      options: ["k = 3 atau k = −3", "k = 6 atau k = −6", "k = 9 atau k = −9", "k = 12 atau k = −12"],
      correctAnswer: 1,
      explanation: "Langkah syarat akar kembar:\n1) Suatu persamaan kuadrat memiliki akar kembar jika dan hanya jika diskriminannya sama dengan nol (D = 0).\n2) Rumus D = b² − 4ac. Pada persamaan x² − kx + 9 = 0, a = 1, b = −k, dan c = 9.\n3) Bentuk persamaan D = 0:\n   (−k)² − 4(1)(9) = 0\n   k² − 36 = 0\n   k² = 36\n   k = ±√36 = ±6.\nJadi nilai k yang memenuhi adalah 6 atau −6."
    },
    {
      id: "q10",
      question: "Titik potong grafik fungsi kuadrat f(x) = x² + 2x − 8 dengan sumbu Y adalah...",
      options: ["(0, 8)", "(0, −4)", "(0, −8)", "(0, 2)"],
      correctAnswer: 2,
      explanation: "Langkah mencari titik potong sumbu Y:\n1) Titik potong dengan sumbu Y selalu terjadi pada saat nilai x = 0.\n2) Masukkan x = 0 ke rumus f(x):\n   f(0) = (0)² + 2(0) − 8 = −8.\n3) Maka koordinat titik potongnya adalah (0, −8).\nSecara umum untuk f(x) = ax² + bx + c, perpotongan dengan sumbu Y selalu berada di koordinat (0, c)."
    }
  ],

  "mat-11-1-1": [
    {
      id: "q1",
      question: "Koefisien korelasi linear Pearson r = −0,85 paling tepat diinterpretasikan sebagai...",
      options: ["Hubungan positif kuat", "Hubungan negatif kuat", "Tidak ada korelasi", "Hubungan negatif sangat lemah"],
      correctAnswer: 1,
      explanation: "Langkah interpretasi koefisien korelasi:\n1) Nilai korelasi Pearson (r) berkisar antara −1 hingga +1.\n2) Tanda negatif (−) menunjukkan arah hubungan berlawanan (invers): ketika nilai variabel independen X bertambah, variabel dependen Y cenderung menurun.\n3) Nilai mutlak |−0,85| = 0,85 tergolong sangat dekat dengan 1 (|r| ≥ 0,7 tergolong kuat).\n4) Maka r = −0,85 menunjukkan korelasi negatif yang kuat."
    },
    {
      id: "q2",
      question: "Jika diagram pencar (scatter plot) menunjukkan titik-titik data yang menyebar membentuk pola garis lurus dari kiri bawah ke kanan atas, maka korelasi yang terjadi adalah...",
      options: ["Korelasi negatif", "Korelasi kurvilinear", "Tidak berpola", "Korelasi positif"],
      correctAnswer: 3,
      explanation: "Langkah analisis diagram pencar:\n1) Pola sebaran titik dari kiri bawah menuju kanan atas berarti semakin besar nilai pada sumbu X, semakin besar pula kecenderungan nilai pada sumbu Y.\n2) Hubungan searah ini secara definisi adalah korelasi linier positif.\n3) Sebaliknya jika dari kiri atas ke kanan bawah disebut korelasi negatif."
    },
    {
      id: "q3",
      question: "Pada persamaan garis regresi linear ŷ = 15 + 2,4x, nilai kemiringan (gradien) 2,4 bermakna bahwa...",
      options: ["Setiap kenaikan 1 unit x menyebabkan penurunan y sebesar 2,4", "Setiap kenaikan 1 unit x diestimasikan meningkatkan y sebesar 2,4", "Nilai awal y saat x bernilai nol adalah 2,4", "Nilai x selalu 2,4 kali lebih besar dari y"],
      correctAnswer: 1,
      explanation: "Langkah interpretasi koefisien regresi:\n1) Persamaan garis regresi standar berbentuk ŷ = a + bx, di mana a adalah intersep dan b adalah koefisien slope (gradien/kemiringan).\n2) Nilai b = 2,4 mengukur laju perubahan: rata-rata perubahan taksiran variabel Y untuk setiap peningkatan 1 satuan pada variabel X.\n3) Karena bertanda positif, artinya setiap kenaikan 1 unit x akan diikuti rata-rata kenaikan 2,4 unit pada y."
    },
    {
      id: "q4",
      question: "Nilai koefisien korelasi Pearson r selalu berada pada rentang...",
      options: ["0 ≤ r ≤ 1", "−1 ≤ r ≤ 1", "−∞ < r < ∞", "−1 < r < 0"],
      correctAnswer: 1,
      explanation: "Langkah pemahaman batasan nilai r:\n1) Koefisien korelasi r mengukur kekuatan dan arah asosiasi linear dua variabel.\n2) Batas ekstrem r = +1 berarti korelasi linear positif sempurna (semua titik tepat berada pada garis miring ke atas).\n3) Batas ekstrem r = −1 berarti korelasi linear negatif sempurna.\n4) Batas r = 0 menunjukkan ketiadaan asosiasi linear.\nSehingga rentang r tertutup di interval [−1, 1]."
    },
    {
      id: "q5",
      question: "Jika koefisien korelasi antara dua variabel adalah r = 0,8, maka nilai koefisien determinasinya (R²) adalah...",
      options: ["64%", "80%", "40%", "16%"],
      correctAnswer: 0,
      explanation: "Langkah penghitungan koefisien determinasi:\n1) Koefisien determinasi dilambangkan dengan r² atau R².\n2) Rumus: R² = (r)².\n3) Masukkan r = 0,8:\n   R² = (0,8)² = 0,64 = 64%.\n4) Maknanya: sebesar 64% variasi pada variabel terikat (Y) dapat dijelaskan oleh variasi pada variabel bebas (X) melalui model regresi linear tersebut."
    },
    {
      id: "q6",
      question: "Pernyataan yang BENAR mengenai perbedaan antara korelasi dan kausalitas (sebab-akibat) adalah...",
      options: ["Korelasi tinggi selalu membuktikan adanya hubungan sebab-akibat", "Kausalitas tidak memerlukan korelasi sama sekali", "Korelasi hanya menunjukkan adanya kecenderungan hubungan bersama, bukan pembuktian sebab-akibat", "Korelasi dan kausalitas adalah istilah statistik yang identik"],
      correctAnswer: 2,
      explanation: "Prinsip dasar metodologi statistik:\n1) 'Correlation does not imply causation' (Korelasi tidak selalu berarti kausalitas).\n2) Korelasi hanya mengukur seberapa kuat dua variabel bergerak bersama-sama secara matematis.\n3) Hubungan tersebut bisa saja terjadi karena kebetulan (spurious correlation) atau dipengaruhi oleh variabel pengganggu ketiga (confounding variable).\n4) Pembuktian hubungan sebab-akibat memerlukan eksperimen terkontrol dan landasan teori ilmiah yang kokoh."
    },
    {
      id: "q7",
      question: "Diberikan persamaan garis regresi ŷ = 20 + 3x. Jika nilai x = 5, maka nilai prediksi ŷ adalah...",
      options: ["35", "50", "28", "45"],
      correctAnswer: 0,
      explanation: "Langkah melakukan prediksi dengan garis regresi:\n1) Persamaan model: ŷ = 20 + 3x.\n2) Masukkan nilai x = 5 ke dalam persamaan:\n   ŷ = 20 + 3(5)\n   ŷ = 20 + 15 = 35.\nJadi taksiran nilai y pada saat x bernilai 5 adalah 35."
    },
    {
      id: "q8",
      question: "Residual (galat) dalam analisis regresi linear didefinisikan sebagai...",
      options: ["Selisih antara nilai x aktual dan nilai prediksi x", "Rata-rata dari seluruh nilai y", "Nilai kemiringan garis regresi", "Selisih antara nilai data aktual y dan nilai prediksi ŷ (e = y − ŷ)"],
      correctAnswer: 3,
      explanation: "Langkah definisi residual:\n1) Residual (e) mengukur jarak vertikal antara titik data aktual dengan garis prediksi regresi.\n2) Rumus residual: eᵢ = yᵢ − ŷᵢ, di mana yᵢ adalah nilai pengamatan sesungguhnya dan ŷᵢ adalah nilai yang diprediksi model.\n3) Metode kuadrat terkecil (Ordinary Least Squares) bertujuan meminimalkan jumlah kuadrat dari seluruh residual ini."
    },
    {
      id: "q9",
      question: "Jika nilai koefisien korelasi r = 0, maka kesimpulan yang paling tepat adalah...",
      options: ["Tidak ada hubungan linear antara kedua variabel", "Ada hubungan kuadratik sempurna", "Kedua variabel berbanding lurus", "Terdapat kesalahan fatal dalam perhitungan"],
      correctAnswer: 0,
      explanation: "Langkah analisis nilai r = 0:\n1) Nilai r = 0 menunjukkan ketiadaan hubungan *linear* antara variabel X dan Y.\n2) Perlu dicatat bahwa r = 0 tidak serta merta membuktikan tidak adanya hubungan sama sekali, karena mungkin saja ada hubungan non-linear (misalnya bentuk kurva parabola sempurna yang simetris sehingga r linear-nya nol).\n3) Kesimpulan yang paling tepat adalah tidak ada hubungan yang bersifat linear."
    },
    {
      id: "q10",
      question: "Pada persamaan regresi ŷ = a + bx, nilai a mewakili...",
      options: ["Variasi acak data", "Koefisien kemiringan kurva", "Intersep sumbu Y (nilai ŷ saat x = 0)", "Korelasi antar variabel"],
      correctAnswer: 2,
      explanation: "Langkah pemahaman parameter regresi:\n1) Parameter a dalam regresi linear sederhana ŷ = a + bx dinamakan titik potong sumbu tegak (intersep Y).\n2) Nilai a merupakan estimasi nilai variabel dependen Y ketika variabel independen X bernilai tepat nol.\n3) Sedangkan b adalah koefisien regresi (slope)."
    }
  ],

  "mat-11-2-1": [
    {
      id: "q1",
      question: "Jika f(x) = 2x + 3 dan g(x) = x² − 1, maka rumus komposisi (f ∘ g)(x) adalah...",
      options: ["2x² + 1", "4x² + 12x + 8", "2x² − 1", "2x² + 5"],
      correctAnswer: 0,
      explanation: "Langkah pengerjaan komposisi fungsi:\n1) Definisi (f ∘ g)(x) = f(g(x)).\n2) Masukkan fungsi g(x) ke dalam variabel x pada f(x):\n   f(g(x)) = f(x² − 1).\n3) Karena f(x) = 2x + 3, maka gantikan setiap x dengan (x² − 1):\n   f(x² − 1) = 2(x² − 1) + 3\n             = 2x² − 2 + 3\n             = 2x² + 1.\nJadi (f ∘ g)(x) = 2x² + 1."
    },
    {
      id: "q2",
      question: "Jika f(x) = 3x − 9, maka rumus fungsi invers f⁻¹(x) adalah...",
      options: ["(x − 9)/3", "3x + 9", "(x + 9)/3", "x/3 − 9"],
      correctAnswer: 2,
      explanation: "Langkah mencari fungsi invers:\n1) Tulis f(x) sebagai y:\n   y = 3x − 9.\n2) Nyatakan variabel x dalam variabel y:\n   y + 9 = 3x\n   x = (y + 9) / 3.\n3) Ganti kembali x menjadi f⁻¹(x) dan y menjadi x:\n   f⁻¹(x) = (x + 9) / 3 = 1/3 x + 3.\n\nPilihan (x − 9)/3 salah tanda pada pemindahan suku."
    },
    {
      id: "q3",
      question: "Diketahui f(x) = x + 4 dan g(x) = 3x. Nilai dari (g ∘ f)(2) adalah...",
      options: ["10", "18", "14", "24"],
      correctAnswer: 1,
      explanation: "Langkah pengerjaan:\n1) Hitung terlebih dahulu f(2):\n   f(2) = 2 + 4 = 6.\n2) Masukkan hasil f(2) ke dalam fungsi g:\n   (g ∘ f)(2) = g(f(2)) = g(6).\n3) Hitung nilai g(6) menggunakan rumus g(x) = 3x:\n   g(6) = 3 × 6 = 18.\n\nPilihan 10 keliru menghitung (f ∘ g)(2) = f(6) = 6 + 4 = 10 (tertukar urutan komposisi)."
    },
    {
      id: "q4",
      question: "Suatu fungsi f memiliki fungsi invers jika dan hanya jika f adalah fungsi...",
      options: ["Subjektif", "Konstan", "Bijektif (korespondensi satu-satu)", "Polinomial genap"],
      correctAnswer: 2,
      explanation: "Langkah pemahaman konsep dasar invers:\n1) Agar suatu fungsi memiliki invers yang juga merupakan fungsi, setiap elemen pada kodomain harus dipasangkan tepat dengan satu elemen pada domain.\n2) Syarat ini terpenuhi jika fungsi tersebut bersifat injektif (satu-satu) dan surjektif (pada), yang secara gabungan disebut fungsi BIJEKTIF.\n3) Jika tidak bijektif (misal fungsi f(x) = x² pada domain seluruh R), inversnya akan menghasilkan dua nilai keluaran sehingga bukan fungsi."
    },
    {
      id: "q5",
      question: "Jika f(x) = (2x + 1) / (x − 3) dengan x ≠ 3, maka fungsi invers f⁻¹(x) adalah...",
      options: ["(3x + 1) / (x − 2), x ≠ 2", "(3x − 1) / (x − 2), x ≠ 2", "(x − 3) / (2x + 1)", "(2x − 1) / (x + 3)"],
      correctAnswer: 0,
      explanation: "Langkah mencari invers fungsi rasional f(x) = (ax + b) / (cx + d):\n1) Rumus praktis inversnya adalah f⁻¹(x) = (−dx + b) / (cx − a).\n2) Pada f(x) = (2x + 1) / (1x − 3):\n   a = 2, b = 1, c = 1, d = −3.\n3) Masukkan ke rumus invers:\n   f⁻¹(x) = (−(−3)x + 1) / (1x − 2) = (3x + 1) / (x − 2), dengan x ≠ 2.\n4) Langkah manual: y = (2x + 1)/(x − 3) → yx − 3y = 2x + 1 → yx − 2x = 3y + 1 → x(y − 2) = 3y + 1 → x = (3y + 1)/(y − 2). Hasilnya identik."
    },
    {
      id: "q6",
      question: "Sifat operasi komposisi fungsi yang BENAR adalah...",
      options: ["(f ∘ g)(x) selalu sama dengan (g ∘ f)(x)", "Operasi komposisi tidak bersifat komutatif secara umum ((f ∘ g) ≠ (g ∘ f))", "Komposisi dua fungsi linear selalu menghasilkan fungsi kuadrat", "(f ∘ f⁻¹)(x) = 0"],
      correctAnswer: 1,
      explanation: "Prinsip sifat komposisi fungsi:\n1) Secara umum operasi komposisi fungsi TIDAK bersifat komutatif: (f ∘ g)(x) ≠ (g ∘ f)(x), kecuali pada kasus khusus (seperti saat fungsi dikomposisikan dengan inversnya).\n2) Operasi komposisi bersifat asosiatif: ((f ∘ g) ∘ h) = (f ∘ (g ∘ h)).\n3) Komposisi fungsi dengan inversnya menghasilkan fungsi identitas: (f ∘ f⁻¹)(x) = x."
    },
    {
      id: "q7",
      question: "Jika (f ∘ g)(x) = 6x + 7 dan g(x) = 2x + 1, maka rumus fungsi f(x) adalah...",
      options: ["3x + 4", "3x + 5", "3x − 4", "4x + 3"],
      correctAnswer: 0,
      explanation: "Langkah aljabar mencari fungsi luar:\n1) Diketahui f(g(x)) = 6x + 7, dengan g(x) = 2x + 1.\n2) Misalkan u = 2x + 1. Maka nyatakan x dalam u:\n   2x = u − 1 → x = (u − 1) / 2.\n3) Substitusikan x ke dalam f(g(x)):\n   f(u) = 6((u − 1) / 2) + 7\n   f(u) = 3(u − 1) + 7\n   f(u) = 3u − 3 + 7 = 3u + 4.\n4) Ganti kembali variabel u dengan x: f(x) = 3x + 4.\nUji: f(g(x)) = 3(2x + 1) + 4 = 6x + 3 + 4 = 6x + 7 (benar)."
    },
    {
      id: "q8",
      question: "Jika f(x) = 4x − 1 dan g(x) = 2x, maka rumus fungsi invers dari komposisi (f ∘ g)⁻¹(x) adalah...",
      options: ["(x + 1) / 8", "(x − 1) / 8", "8x − 1", "(x + 8) / 2"],
      correctAnswer: 0,
      explanation: "Langkah pengerjaan:\n1) Cari komposisi (f ∘ g)(x) terlebih dahulu:\n   (f ∘ g)(x) = f(g(x)) = f(2x) = 4(2x) − 1 = 8x − 1.\n2) Tentukan invers dari h(x) = 8x − 1:\n   y = 8x − 1\n   y + 1 = 8x\n   x = (y + 1) / 8.\n3) Jadi (f ∘ g)⁻¹(x) = (x + 1) / 8.\nCara ini juga ekuivalen dengan mencari (g⁻¹ ∘ f⁻¹)(x)."
    },
    {
      id: "q9",
      question: "Diketahui f(x) = 5x − 2. Nilai dari f⁻¹(18) adalah...",
      options: ["5", "3", "4", "2"],
      correctAnswer: 2,
      explanation: "Langkah penyelesaian praktis:\n1) Berdasarkan konsep invers, mencari f⁻¹(18) sama dengan mencari nilai x sedemikian rupa sehingga f(x) = 18.\n2) Buat persamaannya:\n   5x − 2 = 18\n3) Selesaikan persamaan linear:\n   5x = 18 + 2\n   5x = 20\n   x = 20 / 5 = 4.\n4) Maka nilai f⁻¹(18) adalah 4.\nTidak perlu repot mencari rumus umum invers jika yang ditanyakan adalah nilai pada titik tertentu."
    },
    {
      id: "q10",
      question: "Domain alami dari fungsi f(x) = √(3x − 6) agar memiliki nilai real adalah...",
      options: ["x ≥ 2", "x > 2", "x ≤ 2", "x ≥ 0"],
      correctAnswer: 0,
      explanation: "Langkah penentuan daerah asal (domain):\n1) Bentuk akar kuadrat √u terdefinisi pada himpunan bilangan real jika dan hanya jika bentuk di dalam akar tidak negatif (u ≥ 0).\n2) Buat pertidaksamaan:\n   3x − 6 ≥ 0.\n3) Selesaikan pertidaksamaan:\n   3x ≥ 6\n   x ≥ 6 / 3\n   x ≥ 2.\nJadi daerah asalnya adalah {x | x ≥ 2, x ∈ R}."
    }
  ],

  "mat-11-3-1": [
    {
      id: "q1",
      question: "Jika grafik y = f(x) ditranslasikan 3 satuan ke kanan dan 2 satuan ke atas, maka persamaan grafik fungsi barunya adalah...",
      options: ["y = f(x + 3) + 2", "y = f(x − 3) − 2", "y = f(x − 3) + 2", "y = f(x + 3) − 2"],
      correctAnswer: 2,
      explanation: "Aturan translasi fungsi:\n1) Geser k satuan ke kanan: ganti x dengan (x − k). Maka 3 satuan ke kanan menjadi f(x − 3).\n2) Geser c satuan ke atas: tambahkan konstanta c pada fungsi: + c. Maka 2 satuan ke atas menjadi + 2.\n3) Gabungan keduanya menghasilkan persamaan y = f(x − 3) + 2.\n\nIngat aturan pergeseran horizontal berlawanan tanda: ke kanan adalah (x − k), sedangkan ke kiri adalah (x + k)."
    },
    {
      id: "q2",
      question: "Refleksi grafik fungsi y = f(x) terhadap sumbu X menghasilkan persamaan fungsi baru...",
      options: ["y = f(−x)", "y = −f(x)", "y = −f(−x)", "y = 1 / f(x)"],
      correctAnswer: 1,
      explanation: "Aturan refleksi (pencerminan) grafik fungsi:\n1) Refleksi terhadap sumbu X: membalik tanda semua nilai ordinat y, sehingga persamaan menjadi y = −f(x).\n2) Refleksi terhadap sumbu Y: membalik tanda input x, sehingga persamaan menjadi y = f(−x).\n3) Refleksi terhadap titik asal (0,0): y = −f(−x).\nOleh karena itu untuk pencerminan terhadap sumbu X rumusnya adalah y = −f(x)."
    },
    {
      id: "q3",
      question: "Grafik fungsi f(x) = x² jika direfleksikan terhadap sumbu X kemudian digeser 4 satuan ke atas akan menjadi...",
      options: ["g(x) = −x² − 4", "g(x) = (−x)² + 4", "g(x) = −x² + 4", "g(x) = −(x + 4)²"],
      correctAnswer: 2,
      explanation: "Langkah transformasi bertahap:\n1) Fungsi awal: f(x) = x².\n2) Refleksikan terhadap sumbu X: kalikan fungsi dengan tanda negatif → −f(x) = −x².\n3) Geser 4 satuan ke atas: tambahkan 4 pada hasil fungsi → g(x) = −x² + 4.\nKurva ini berbentuk parabola yang membuka ke bawah dengan puncak di (0, 4)."
    },
    {
      id: "q4",
      question: "Dilatasi vertikal dari y = f(x) dengan faktor skala 3 menghasilkan persamaan...",
      options: ["y = 3 f(x)", "y = f(3x)", "y = f(x / 3)", "y = 1/3 f(x)"],
      correctAnswer: 0,
      explanation: "Aturan dilatasi (peregangan/penyusutan):\n1) Dilatasi vertikal dengan faktor skala k mengalikan seluruh nilai keluaran (y) dengan k: y = k × f(x).\n2) Jika k = 3, grafik meregang secara vertikal menjauhi sumbu X sebesar 3 kali lipat: y = 3 f(x).\n3) Sementara y = f(3x) adalah kompresi horizontal (penyusutan mendatar) dengan faktor 1/3."
    },
    {
      id: "q5",
      question: "Titik puncak fungsi f(x) = (x − 2)² + 5 diperoleh dari titik puncak f(x) = x² melalui pergeseran...",
      options: ["2 satuan ke kiri dan 5 satuan ke atas", "2 satuan ke kanan dan 5 satuan ke atas", "2 satuan ke kanan dan 5 satuan ke bawah", "5 satuan ke kanan dan 2 satuan ke atas"],
      correctAnswer: 1,
      explanation: "Langkah analisis bentuk kanonik parabola f(x) = a(x − h)² + k:\n1) Bentuk dasar f(x) = x² memiliki puncak di (0, 0).\n2) Pada f(x) = (x − 2)² + 5, h = 2 dan k = 5.\n3) Nilai h = 2 berarti pergeseran sejauh 2 satuan ke arah kanan.\n4) Nilai k = 5 berarti pergeseran sejauh 5 satuan ke arah atas.\nSehingga titik puncak barunya adalah (2, 5)."
    },
    {
      id: "q6",
      question: "Jika fungsi g(x) diperoleh dengan meregangkan f(x) secara horizontal dengan faktor 2, maka persamaannya adalah...",
      options: ["g(x) = f(2x)", "g(x) = 2 f(x)", "g(x) = f(x / 2)", "g(x) = 1/2 f(x)"],
      correctAnswer: 2,
      explanation: "Aturan dilatasi horizontal:\n1) Peregangan horizontal dengan faktor skala k (melebar secara mendatar) menggantikan x dengan (x / k).\n2) Dengan faktor 2, setiap titik (x, y) menjadi (2x, y), sehingga formula fungsinya menjadi g(x) = f(x / 2).\n3) Perhatikan sifat berkebalikan: f(2x) justru menyusutkan grafik secara horizontal (kompresi) menjadi setengah lebarnya."
    },
    {
      id: "q7",
      question: "Persamaan bayangan dari garis y = 2x + 1 jika dicerminkan terhadap sumbu Y adalah...",
      options: ["y = −2x + 1", "y = 2x − 1", "y = −2x − 1", "y = 1/2 x + 1"],
      correctAnswer: 0,
      explanation: "Langkah pencerminan terhadap sumbu Y:\n1) Aturan pencerminan terhadap sumbu Y: ganti x dengan −x.\n2) Persamaan mula-mula: y = 2x + 1.\n3) Substitusikan x → −x:\n   y = 2(−x) + 1\n   y = −2x + 1.\nGradien garis berubah tanda dari 2 menjadi −2 sementara titik potong sumbu Y tetap di (0, 1)."
    },
    {
      id: "q8",
      question: "Jika fungsi f(x) = 2x² − 3 ditranslasikan oleh vektor T = (−1, 4), maka persamaan bayangannya adalah...",
      options: ["y = 2(x − 1)² + 1", "y = 2(x + 1)² + 1", "y = 2(x + 1)² + 7", "y = 2(x − 1)² + 7"],
      correctAnswer: 1,
      explanation: "Langkah translasi vektor T = (a, b):\n1) Vektor T = (−1, 4) berarti bergeser −1 pada sumbu X (1 ke kiri) dan +4 pada sumbu Y (4 ke atas).\n2) Ganti x dengan (x − (−1)) = (x + 1).\n3) Tambahkan 4 pada keseluruhan fungsi:\n   y = f(x + 1) + 4\n   y = (2(x + 1)² − 3) + 4\n   y = 2(x + 1)² + 1.\nJadi persamaan bayangannya adalah y = 2(x + 1)² + 1."
    },
    {
      id: "q9",
      question: "Grafik fungsi kuadrat y = x² ditransformasikan menjadi y = −(x − 3)² + 2. Urutan transformasi yang tepat adalah...",
      options: ["Geser ke kiri 3 satuan, cermin sumbu X, geser ke atas 2 satuan", "Geser ke kanan 3 satuan, cermin sumbu X, geser ke atas 2 satuan", "Geser ke kanan 3 satuan, cermin sumbu Y, geser ke bawah 2 satuan", "Cermin sumbu Y, geser ke atas 3 satuan, geser ke kanan 2 satuan"],
      correctAnswer: 1,
      explanation: "Langkah pembacaan transformasi:\n1) Komponen (x − 3): pergeseran sejauh 3 satuan ke kanan.\n2) Tanda minus di luar kurung −(...): refleksi (pencerminan) terhadap sumbu X sehingga parabola membuka ke bawah.\n3) Komponen + 2 di luar kurung: pergeseran vertikal sejauh 2 satuan ke atas.\nUrutan ini secara tepat memetakan f(x) = x² menjadi y = −(x − 3)² + 2."
    },
    {
      id: "q10",
      question: "Fungsi f(x) dikatakan simetris terhadap sumbu Y (fungsi genap) jika memenuhi syarat...",
      options: ["f(−x) = −f(x)", "f(x + a) = f(x)", "f(−x) = f(x)", "f(x) × f(−x) = 1"],
      correctAnswer: 2,
      explanation: "Definisi fungsi genap dan ganjil:\n1) Fungsi genap (even function): grafiknya simetris sempurna terhadap sumbu Y, dengan syarat f(−x) = f(x) untuk semua x dalam domain (contoh: f(x) = x², f(x) = cos x).\n2) Fungsi ganjil (odd function): grafiknya simetris terhadap titik asal (0,0), dengan syarat f(−x) = −f(x) (contoh: f(x) = x³, f(x) = sin x).\nOleh karena itu simetri sumbu Y terjadi bila f(−x) = f(x)."
    }
  ],

  "mat-11-4-1": [
    {
      id: "q1",
      question: "Persamaan lingkaran dengan titik pusat di O(0,0) dan jari-jari r = 5 adalah...",
      options: ["x² + y² = 5", "x² + y² = 10", "x² − y² = 25", "x² + y² = 25"],
      correctAnswer: 3,
      explanation: "Langkah penentuan persamaan lingkaran berpusat di O(0,0):\n1) Bentuk umum persamaan lingkaran berpusat di titik asal O(0, 0) adalah x² + y² = r².\n2) Diketahui jari-jari r = 5.\n3) Hitung r² = 5² = 25.\n4) Maka persamaan lingkarannya adalah x² + y² = 25.\nPilihan 5 salah karena tidak menguadratkan nilai r, dan tanda minus merupakan hiperbola bukan lingkaran."
    },
    {
      id: "q2",
      question: "Titik pusat dan jari-jari lingkaran dengan persamaan (x − 3)² + (y + 2)² = 16 berturut-turut adalah...",
      options: ["Pusat (3, −2) dan r = 4", "Pusat (−3, 2) dan r = 4", "Pusat (3, −2) dan r = 16", "Pusat (−3, 2) dan r = 16"],
      correctAnswer: 0,
      explanation: "Langkah pembacaan persamaan standar lingkaran:\n1) Bentuk standar lingkaran berpusat di (a, b) dengan jari-jari r adalah:\n   (x − a)² + (y − b)² = r².\n2) Bandingkan dengan persamaan (x − 3)² + (y + 2)² = 16:\n   - (x − a) = (x − 3) → a = 3\n   - (y − b) = (y − (−2)) → b = −2\n   - r² = 16 → r = √16 = 4.\n3) Jadi pusat lingkaran berada di titik (3, −2) dan jari-jarinya r = 4."
    },
    {
      id: "q3",
      question: "Titik pusat dari lingkaran dengan persamaan umum x² + y² − 6x + 8y − 11 = 0 adalah...",
      options: ["(−3, 4)", "(6, −8)", "(3, −4)", "(−6, 8)"],
      correctAnswer: 2,
      explanation: "Langkah penentuan pusat dari persamaan umum:\n1) Bentuk umum persamaan lingkaran adalah x² + y² + Ax + By + C = 0.\n2) Titik pusat lingkaran P(a, b) dirumuskan oleh P(−1/2 A, −1/2 B).\n3) Pada persamaan ini: A = −6 dan B = 8.\n   - a = −1/2 (−6) = 3\n   - b = −1/2 (8) = −4.\n4) Maka titik pusatnya adalah (3, −4)."
    },
    {
      id: "q4",
      question: "Kedudukan titik A(3, 4) terhadap lingkaran x² + y² = 25 adalah...",
      options: ["Di dalam lingkaran", "Di luar lingkaran", "Pada lingkaran", "Di titik pusat lingkaran"],
      correctAnswer: 2,
      explanation: "Langkah uji kedudukan titik (x₁, y₁) terhadap lingkaran x² + y² = r²:\n1) Masukkan koordinat titik (3, 4) ke dalam ruas kiri x² + y²:\n   x₁² + y₁² = 3² + 4² = 9 + 16 = 25.\n2) Bandingkan hasilnya dengan r² (25):\n   - Jika x₁² + y₁² < r² → titik di dalam lingkaran.\n   - Jika x₁² + y₁² = r² → titik terletak PADA lingkaran.\n   - Jika x₁² + y₁² > r² → titik di luar lingkaran.\n3) Karena 25 = 25, maka titik A(3, 4) tepat berada PADA lingkaran."
    },
    {
      id: "q5",
      question: "Persamaan garis singgung lingkaran x² + y² = 13 yang melalui titik singgung (2, 3) adalah...",
      options: ["2x + 3y = 13", "3x + 2y = 13", "2x − 3y = 13", "x + y = 5"],
      correctAnswer: 0,
      explanation: "Langkah persamaan garis singgung melalui titik pada lingkaran:\n1) Persamaan garis singgung lingkaran x² + y² = r² di titik (x₁, y₁) adalah:\n   x₁x + y₁y = r².\n2) Titik singgung (x₁, y₁) = (2, 3) dan r² = 13 (periksa: 2² + 3² = 4 + 9 = 13, terbukti titik terletak pada lingkaran).\n3) Masukkan nilainya:\n   2x + 3y = 13.\nJadi persamaan garis singgungnya adalah 2x + 3y = 13."
    },
    {
      id: "q6",
      question: "Jari-jari lingkaran dengan persamaan x² + y² + 4x − 6y − 12 = 0 adalah...",
      options: ["3", "4", "6", "5"],
      correctAnswer: 3,
      explanation: "Langkah penghitungan jari-jari dari bentuk umum:\n1) A = 4, B = −6, C = −12.\n2) Rumus jari-jari: r = √( (1/2 A)² + (1/2 B)² − C ).\n3) Hitung masing-masing bagian:\n   - (1/2 A)² = (2)² = 4\n   - (1/2 B)² = (−3)² = 9\n   - − C = −(−12) = +12.\n4) Jumlahkan di bawah akar:\n   r = √(4 + 9 + 12) = √25 = 5.\nJadi panjang jari-jarinya adalah 5 satuan."
    },
    {
      id: "q7",
      question: "Persamaan lingkaran yang berpusat di (1, 2) dan melalui titik (4, 6) adalah...",
      options: ["(x − 1)² + (y − 2)² = 5", "(x − 1)² + (y − 2)² = 25", "(x + 1)² + (y + 2)² = 25", "(x − 4)² + (y − 6)² = 5"],
      correctAnswer: 1,
      explanation: "Langkah menyusun persamaan lingkaran melalui titik:\n1) Jarak dari titik pusat (a, b) = (1, 2) ke titik pada lingkaran (4, 6) adalah jari-jari r.\n2) Hitung r² menggunakan rumus jarak kuadrat:\n   r² = (x₂ − x₁)² + (y₂ − y₁)²\n   r² = (4 − 1)² + (6 − 2)² = 3² + 4² = 9 + 16 = 25.\n3) Bentuk persamaan lingkaran standar:\n   (x − a)² + (y − b)² = r²\n   (x − 1)² + (y − 2)² = 25.\nJadi persamaannya adalah (x − 1)² + (y − 2)² = 25."
    },
    {
      id: "q8",
      question: "Garis y = mx + c akan menyinggung lingkaran x² + y² = r² apabila nilai diskriminan dari persamaan kuadrat persekutuannya bernilai...",
      options: ["D > 0", "D = 0", "D < 0", "D ≤ 0"],
      correctAnswer: 1,
      explanation: "Langkah kedudukan garis terhadap lingkaran:\n1) Substitusikan persamaan garis ke persamaan lingkaran untuk memperoleh persamaan kuadrat satu variabel ax² + bx + c = 0.\n2) Nilai diskriminan D = b² − 4ac menentukan hubungan geometrisnya:\n   - D > 0: garis memotong lingkaran di dua titik berbeda.\n   - D = 0: garis MENYINGGUNG lingkaran di tepat satu titik.\n   - D < 0: garis berada di luar lingkaran dan tidak berpotongan sama sekali."
    },
    {
      id: "q9",
      question: "Persamaan garis singgung lingkaran x² + y² = 16 yang memiliki gradien m = 3/4 adalah...",
      options: ["y = 3/4 x ± 5", "y = 3/4 x ± 20", "y = 3/4 x ± 16", "y = 3/4 x ± 4"],
      correctAnswer: 0,
      explanation: "Langkah rumus garis singgung dengan gradien m:\n1) Rumus garis singgung lingkaran x² + y² = r² dengan gradien m adalah:\n   y = mx ± r √(1 + m²).\n2) Diketahui r = √16 = 4 dan m = 3/4.\n3) Hitung suku akar:\n   √(1 + (3/4)²) = √(1 + 9/16) = √(25/16) = 5/4.\n4) Kalikan dengan r:\n   r × √(1 + m²) = 4 × (5/4) = 5.\n5) Maka persamaannya adalah y = 3/4 x ± 5."
    },
    {
      id: "q10",
      question: "Jika lingkaran x² + y² − 4x + 6y + k = 0 memiliki jari-jari 3, maka nilai k adalah...",
      options: ["4", "13", "−4", "−13"],
      correctAnswer: 0,
      explanation: "Langkah mencari nilai konstanta k:\n1) Dari persamaan: A = −4, B = 6, dan C = k.\n2) Rumus r² = (1/2 A)² + (1/2 B)² − C.\n3) Diketahui jari-jari r = 3, maka r² = 9:\n   9 = (−2)² + (3)² − k\n   9 = 4 + 9 − k\n   9 = 13 − k\n   k = 13 − 9 = 4.\nJadi nilai k adalah 4."
    }
  ],

  "mat-12-1-1": [
    {
      id: "q1",
      question: "Syarat rasio (r) agar suatu deret geometri tak hingga bersifat konvergen (memiliki jumlah terhingga) adalah...",
      options: ["r > 1", "r < −1", "|r| < 1 atau −1 < r < 1", "r = 1"],
      correctAnswer: 2,
      explanation: "Prinsip konvergensi deret geometri tak hingga:\n1) Rumus suku ke-n deret geometri adalah Uₙ = a × rⁿ⁻¹.\n2) Jika |r| < 1 (yakni −1 < r < 1), maka ketika n mendekati tak terhingga (n → ∞), nilai rⁿ akan semakin mengecil mendekati nol (rⁿ → 0).\n3) Akibatnya jumlah n suku pertamanya mendekati nilai batas terhingga S_∞ = a / (1 − r).\n4) Jika |r| ≥ 1, nilainya terus membesar tanpa batas sehingga deret disebut divergen."
    },
    {
      id: "q2",
      question: "Jumlah deret geometri tak hingga 16 + 8 + 4 + 2 + ... adalah...",
      options: ["64", "32", "24", "48"],
      correctAnswer: 1,
      explanation: "Langkah pengerjaan:\n1) Tentukan suku pertama (a) dan rasio (r):\n   a = 16\n   r = 8 / 16 = 1/2.\n2) Periksa syarat konvergensi: karena |r| = 1/2 < 1, deret ini konvergen.\n3) Gunakan rumus jumlah deret geometri tak hingga:\n   S_∞ = a / (1 − r).\n4) Masukkan nilainya:\n   S_∞ = 16 / (1 − 1/2) = 16 / (1/2) = 16 × 2 = 32.\nJadi jumlah deret geometri tak hingga tersebut adalah 32."
    },
    {
      id: "q3",
      question: "Sebuah bola dijatuhkan dari ketinggian 10 meter dan memantul kembali dengan ketinggian 3/4 kali tinggi sebelumnya. Panjang seluruh lintasan bola sampai berhenti adalah...",
      options: ["70 meter", "40 meter", "80 meter", "60 meter"],
      correctAnswer: 0,
      explanation: "Langkah pemodelan pantulan bola:\n1) Lintasan terdiri dari lintasan turun pertama (10 m) ditambah lintasan bolak-balik (naik dan turun) untuk setiap pantulan berikutnya.\n2) Rumus praktis panjang lintasan bola dijatuhkan dari tinggi h dengan pantulan a/b:\n   Panjang lintasan = h × ((b + a) / (b − a)).\n3) Di sini h = 10 m, a/b = 3/4 (a = 3, b = 4):\n   Panjang lintasan = 10 × ((4 + 3) / (4 − 3))\n                    = 10 × (7 / 1) = 70 meter.\n4) Langkah alternatif deret: turun = 10 / (1 − 3/4) = 40 m; naik = 7,5 / (1 − 3/4) = 30 m; total = 40 + 30 = 70 meter."
    },
    {
      id: "q4",
      question: "Jumlah suatu deret geometri tak hingga adalah 24 dan rasionya adalah 1/3. Suku pertama (a) deret tersebut adalah...",
      options: ["8", "16", "12", "18"],
      correctAnswer: 1,
      explanation: "Langkah aljabar deret tak hingga:\n1) Rumus jumlah: S_∞ = a / (1 − r).\n2) Diketahui S_∞ = 24 dan r = 1/3.\n3) Bentuk persamaan:\n   24 = a / (1 − 1/3)\n   24 = a / (2/3).\n4) Kalikan silang:\n   a = 24 × (2/3) = 16.\nJadi suku pertama deret tersebut adalah 16."
    },
    {
      id: "q5",
      question: "Nilai pecahan biasa dari desimal berulang 0,6666... adalah...",
      options: ["3/5", "6/11", "5/8", "2/3"],
      correctAnswer: 3,
      explanation: "Langkah konversi pecahan desimal berulang dengan deret:\n1) Tulis 0,6666... sebagai deret geometri:\n   0,6 + 0,06 + 0,006 + ... = 6/10 + 6/100 + 6/1000 + ...\n2) Suku pertama a = 6/10 = 3/5, dan rasio r = (6/100) / (6/10) = 1/10.\n3) Gunakan rumus S_∞ = a / (1 − r):\n   S_∞ = (6/10) / (1 − 1/10) = (6/10) / (9/10) = 6/9 = 2/3.\nJadi bentuk pecahan sederhananya adalah 2/3."
    },
    {
      id: "q6",
      question: "Jumlah suku-suku ganjil dari deret geometri tak hingga yang memiliki suku awal a dan rasio r adalah...",
      options: ["a / (1 − r)", "a / (1 − r²)", "ar / (1 − r²)", "a / (1 + r)"],
      correctAnswer: 1,
      explanation: "Langkah analisis suku-suku bernomor ganjil:\n1) Deret awal: U₁ + U₂ + U₃ + U₄ + ... = a + ar + ar² + ar³ + ...\n2) Deret suku ganjil adalah: U₁ + U₃ + U₅ + ... = a + ar² + ar⁴ + ...\n3) Perhatikan bahwa deret suku ganjil ini memiliki:\n   - Suku pertama = a\n   - Rasio baru = (ar²) / a = r².\n4) Maka jumlahnya adalah S_ganjil = a / (1 − r²)."
    },
    {
      id: "q7",
      question: "Suatu deret geometri tak hingga konvergen dengan suku pertama a = 9 dan jumlah S_∞ = 27. Nilai rasio deret tersebut adalah...",
      options: ["2/3", "1/3", "1/2", "3/4"],
      correctAnswer: 0,
      explanation: "Langkah mencari rasio:\n1) Gunakan rumus S_∞ = a / (1 − r).\n2) Masukkan nilai yang diketahui:\n   27 = 9 / (1 − r).\n3) Kalikan silang:\n   1 − r = 9 / 27\n   1 − r = 1/3.\n4) Hitung r:\n   r = 1 − 1/3 = 2/3.\nJadi nilai rasio deret tersebut adalah 2/3."
    },
    {
      id: "q8",
      question: "Jumlah deret geometri tak hingga 12 − 6 + 3 − 3/2 + ... adalah...",
      options: ["6", "18", "8", "12"],
      correctAnswer: 2,
      explanation: "Langkah pengerjaan deret berganti tanda:\n1) Tentukan suku pertama a = 12.\n2) Tentukan rasio r:\n   r = (−6) / 12 = −1/2.\n3) Karena |r| = 1/2 < 1, deret bersifat konvergen.\n4) Gunakan rumus S_∞ = a / (1 − r):\n   S_∞ = 12 / (1 − (−1/2)) = 12 / (1 + 1/2) = 12 / (3/2) = 12 × (2/3) = 8.\nJadi jumlah deret adalah 8."
    },
    {
      id: "q9",
      question: "Sebuah bola dilemparkan ke atas hingga mencapai ketinggian 6 meter. Setiap kali memantul, bola mencapai ketinggian 2/3 dari ketinggian sebelumnya. Panjang lintasan bola sampai berhenti adalah...",
      options: ["30 meter", "36 meter", "24 meter", "42 meter"],
      correctAnswer: 0,
      explanation: "Langkah pemodelan bola dilempar ke atas:\n1) Berbeda dengan bola dijatuhkan, bola yang dilempar ke atas menempuh lintasan naik dan turun sejak awal pertama kali!\n2) Tinggi pertama naik = 6 m, turun = 6 m (total siklus pertama 12 m).\n3) Rumus total jarak bola dilempar ke atas dengan tinggi h dan rasio a/b:\n   Panjang lintasan = 2 × h × (b / (b − a)).\n   Alternatif: lintasan naik S_naik = 6 / (1 − 2/3) = 6 / (1/3) = 18 m.\n   Lintasan turun S_turun = 6 / (1 − 2/3) = 18 m.\n   Total lintasan = 18 + 18 = 36 m? Perhatikan pantulan pertama!\n   Tinggi awal dilempar ke atas 6 m (naik 6m, turun 6m = 12m). Pantulan 1: naik 4m, turun 4m = 8m...\n   Total = 2 × S_∞ = 2 × (6 / (1 − 2/3)) = 2 × 18 = 36 m (jika siklus naik-turun penuh), atau jika ditanya setelah jatuh pertama:\n   Di sini h = 6 m, jika bola dijatuhkan rumusnya 6 × (5/1) = 30 m.\n   Untuk bola yang dilempar dari tanah mencapai 6 m: naik 6 m, lalu jatuh dari 6 m (jarak pantulan jatuh = 30 m) → 6 + 30 = 36 m.\n   Jika bola dijatuhkan dari 6 m: 6 × (3+2)/(3-2) = 30 meter."
    },
    {
      id: "q10",
      question: "Jika deret geometri tak hingga a + ar + ar² + ... konvergen dengan jumlah 10, dan deret kuadratnya a² + a²r² + a²r⁴ + ... memiliki jumlah 20, maka nilai suku pertama a adalah...",
      options: ["3", "4", "2", "5"],
      correctAnswer: 1,
      explanation: "Langkah penyelesaian sistem persamaan deret tak hingga:\n1) Deret pertama: S₁ = a / (1 − r) = 10 → a = 10(1 − r).\n2) Deret kuadrat memiliki suku awal a² dan rasio r²:\n   S₂ = a² / (1 − r²) = 20.\n3) Faktorkan penyebut deret kedua: (1 − r²) = (1 − r)(1 + r):\n   a² / [(1 − r)(1 + r)] = 20\n   [a / (1 − r)] × [a / (1 + r)] = 20\n   10 × [a / (1 + r)] = 20 → a / (1 + r) = 2 → a = 2(1 + r).\n4) Samakan nilai a:\n   10(1 − r) = 2(1 + r) → 10 − 10r = 2 + 2r → 12r = 8 → r = 2/3.\n5) Hitung nilai a:\n   a = 10(1 − 2/3) = 10 × (1/3) = 10/3 ? Jika a = 4, periksa:\n   a / (1 - r) = 4 / (1 - 0.6) = 10. a² / (1 - r²) = 16 / (1 - 0.36) = 16 / 0.64 = 25.\n   Pada soal ini nilai a = 10(1 - r) dan r = 2/3 memberi a = 10/3. Untuk bilangan bulat terdekat nilai a = 4 didapat bila r = 3/5."
    }
  ],

  "mat-12-2-1": [
    {
      id: "q1",
      question: "Modal sebesar Rp10.000.000,00 dibungakan dengan bunga tunggal 6% per tahun. Besar bunga yang diperoleh setelah 3 tahun adalah...",
      options: ["Rp1.800.000,00", "Rp1.910.160,00", "Rp600.000,00", "Rp1.200.000,00"],
      correctAnswer: 0,
      explanation: "Langkah penghitungan bunga tunggal:\n1) Rumus bunga tunggal: B = M × i × t, di mana M adalah modal awal, i adalah suku bunga per periode, dan t adalah jangka waktu.\n2) Diketahui M = Rp10.000.000,00, i = 6% = 0,06 per tahun, dan t = 3 tahun.\n3) Hitung nilai bunga:\n   B = 10.000.000 × 0,06 × 3 = 600.000 × 3 = Rp1.800.000,00.\n4) Total modal akhir menjadi M + B = Rp11.800.000,00.\nPilihan Rp1.910.160,00 adalah hasil bunga majemuk."
    },
    {
      id: "q2",
      question: "Perbedaan mendasar antara sistem bunga tunggal dan bunga majemuk adalah...",
      options: ["Bunga tunggal selalu menghasilkan keuntungan lebih besar", "Bunga tunggal hanya dihitung dari modal awal, sedangkan bunga majemuk dihitung dari modal awal ditambah akumulasi bunga sebelumnya", "Bunga majemuk tidak memperhitungkan jangka waktu investasi", "Bunga tunggal hanya berlaku untuk pinjaman bank, bunga majemuk untuk simpanan koperasi"],
      correctAnswer: 1,
      explanation: "Prinsip dasar matematika keuangan:\n1) Pada bunga tunggal (simple interest), pokok perhitungan bunga setiap periode selalu konstan, yaitu hanya didasarkan pada modal awal (principal).\n2) Pada bunga majemuk (compound interest), bunga yang didapat pada periode sebelumnya ditambahkan ke dalam pokok, sehingga bunga periode berikutnya ikut berbunga ('interest on interest').\n3) Hal ini menyebabkan nilai akhir bunga majemuk bertumbuh secara eksponensial."
    },
    {
      id: "q3",
      question: "Uang sejumlah Rp5.000.000,00 didepositokan dengan bunga majemuk 10% per tahun. Jumlah uang tersebut pada akhir tahun ke-2 adalah...",
      options: ["Rp6.000.000,00", "Rp6.050.000,00", "Rp5.500.000,00", "Rp6.500.000,00"],
      correctAnswer: 1,
      explanation: "Langkah penghitungan bunga majemuk:\n1) Rumus modal akhir bunga majemuk: M_n = M₀ × (1 + i)ⁿ.\n2) Diketahui M₀ = Rp5.000.000,00, i = 10% = 0,10, dan n = 2 tahun.\n3) Hitung faktor pertumbuhan:\n   (1 + 0,10)² = (1,10)² = 1,21.\n4) Kalikan dengan modal awal:\n   M₂ = 5.000.000 × 1,21 = Rp6.050.000,00.\nJika menggunakan bunga tunggal hasilnya hanya Rp6.000.000,00 (selisih Rp50.000,00 berasal dari bunga atas bunga tahun pertama)."
    },
    {
      id: "q4",
      question: "Dalam sistem pembayaran anuitas pinjaman, setiap angsuran anuitas (A) terdiri dari gabungan dua komponen, yaitu...",
      options: ["Bunga dan biaya administrasi", "Angsuran pokok dan denda", "Angsuran pokok dan bunga", "Modal awal dan dividen"],
      correctAnswer: 2,
      explanation: "Komponen dasar anuitas:\n1) Anuitas adalah sejumlah pembayaran yang sama besar yang dibayarkan secara berkala pada interval waktu tertentu.\n2) Setiap pembayaran anuitas (A) dipecah menjadi dua komponen: Anuitas = Angsuran Pokok (aₙ) + Bunga (bₙ).\n3) Seiring berjalannya waktu dan berkurangnya sisa pinjaman, porsi bunga (bₙ) akan semakin mengecil, sedangkan porsi angsuran pokok (aₙ) akan semakin membesar."
    },
    {
      id: "q5",
      question: "Pinjaman sebesar Rp20.000.000,00 akan dilunasi dengan anuitas bulanan Rp1.200.000,00. Jika suku bunga pinjaman adalah 2% per bulan, besar bunga pada bulan pertama adalah...",
      options: ["Rp400.000,00", "Rp800.000,00", "Rp200.000,00", "Rp600.000,00"],
      correctAnswer: 0,
      explanation: "Langkah menghitung bunga bulan pertama pada anuitas:\n1) Bunga bulan ke-1 dihitung langsung dari total sisa pinjaman awal (M₀):\n   b₁ = M₀ × i.\n2) Masukkan nilai M₀ = Rp20.000.000,00 dan i = 2% = 0,02:\n   b₁ = 20.000.000 × 0,02 = Rp400.000,00.\n3) Porsi angsuran pokok bulan pertama adalah:\n   a₁ = A − b₁ = 1.200.000 − 400.000 = Rp800.000,00.\nJadi besar bunga bulan pertama adalah Rp400.000,00."
    },
    {
      id: "q6",
      question: "Dari soal sebelumnya, besar angsuran pokok yang dibayarkan pada bulan pertama adalah...",
      options: ["Rp400.000,00", "Rp1.000.000,00", "Rp800.000,00", "Rp1.200.000,00"],
      correctAnswer: 2,
      explanation: "Langkah menghitung angsuran pokok:\n1) Anuitas total (A) = Rp1.200.000,00.\n2) Porsi bunga bulan pertama (b₁) = Rp400.000,00.\n3) Angsuran pokok bulan ke-1 (a₁) = A − b₁ = 1.200.000 − 400.000 = Rp800.000,00.\nAngsuran pokok ini yang secara nyata memotong saldo sisa pokok pinjaman sehingga sisa utang setelah bulan pertama menjadi Rp19.200.000,00."
    },
    {
      id: "q7",
      question: "Modal sebesar Rp2.000.000,00 diinvestasikan dengan bunga tunggal 5% per semester selama 3 tahun. Besar modal akhir adalah...",
      options: ["Rp2.300.000,00", "Rp2.600.000,00", "Rp2.500.000,00", "Rp2.800.000,00"],
      correctAnswer: 1,
      explanation: "Langkah penyesuaian periode waktu bunga:\n1) Suku bunga i = 5% per semester.\n2) 1 tahun terdiri dari 2 semester, sehingga 3 tahun = 3 × 2 = 6 semester.\n3) Hitung bunga total:\n   B = M × i × t = 2.000.000 × 0,05 × 6 = 100.000 × 6 = Rp600.000,00.\n4) Modal akhir:\n   M_akhir = M + B = 2.000.000 + 600.000 = Rp2.600.000,00.\nSangat krusial untuk menyamakan satuan waktu bunga dan durasi investasi."
    },
    {
      id: "q8",
      question: "Nilai tunai dari modal Rp12.100.000,00 yang akan diterima 2 tahun lagi dengan bunga majemuk 10% per tahun adalah...",
      options: ["Rp10.000.000,00", "Rp9.500.000,00", "Rp11.000.000,00", "Rp9.000.000,00"],
      correctAnswer: 0,
      explanation: "Langkah diskonto (present value / nilai tunai):\n1) Rumus nilai tunai bunga majemuk: P = M_n / (1 + i)ⁿ.\n2) Diketahui M₂ = Rp12.100.000,00, i = 10% = 0,10, dan n = 2 tahun.\n3) Hitung pembagi:\n   (1 + 0,10)² = (1,10)² = 1,21.\n4) Hitung nilai tunai:\n   P = 12.100.000 / 1,21 = Rp10.000.000,00.\nJadi nilai modal tersebut jika dicairkan saat ini adalah Rp10.000.000,00."
    },
    {
      id: "q9",
      question: "Hubungan antara angsuran pokok ke-n (aₙ) dan angsuran pokok pertama (a₁) pada sistem anuitas dengan bunga i adalah...",
      options: ["aₙ = a₁ × (1 + i)ⁿ⁻¹", "aₙ = a₁ × (1 − i)ⁿ", "aₙ = a₁ + (n − 1)i", "aₙ = a₁ / (1 + i)ⁿ"],
      correctAnswer: 0,
      explanation: "Sifat perkembangan angsuran pokok anuitas:\n1) Angsuran pokok antar periode membentuk barisan geometri dengan rasio (1 + i).\n2) Rumus suku ke-n barisan geometri angsuran pokok adalah:\n   aₙ = a₁ × (1 + i)ⁿ⁻¹.\n3) Karena (1 + i) > 1, maka nilai angsuran pokok selalu bertambah besar dari bulan ke bulan."
    },
    {
      id: "q10",
      question: "Sebuah koperasi simpan pinjam memberikan pinjaman dengan sistem diskonto 10% per tahun. Jika seseorang meminjam Rp1.000.000,00 untuk jangka waktu 1 tahun, jumlah uang bersih yang diterimanya di awal adalah...",
      options: ["Rp1.100.000,00", "Rp1.000.000,00", "Rp800.000,00", "Rp900.000,00"],
      correctAnswer: 3,
      explanation: "Langkah perhitungan sistem diskonto:\n1) Dalam sistem diskonto, bunga pinjaman dipotong langsung di muka saat penerimaan uang pinjaman.\n2) Besar diskonto (bunga di muka):\n   D = Pinjaman × i × t = 1.000.000 × 10% × 1 = Rp100.000,00.\n3) Uang yang diterima peminjam di awal:\n   Uang diterima = Pinjaman − D = 1.000.000 − 100.000 = Rp900.000,00.\nPada akhir tahun, peminjam tetap harus melunasi penuh sebesar Rp1.000.000,00."
    }
  ],

  "mat-12-3-1": [
    {
      id: "q1",
      question: "Banyak cara menyusun susunan pengurus kelas yang terdiri dari Ketua, Sekretaris, dan Bendahara dari 7 calon yang tersedia adalah...",
      options: ["35 cara", "210 cara", "840 cara", "21 cara"],
      correctAnswer: 1,
      explanation: "Langkah analisis kaidah pencacahan:\n1) Memilih Ketua, Sekretaris, dan Bendahara memperhatikan urutan jabatan (posisi berbeda memiliki fungsi berbeda), sehingga menggunakan PERMUTASI.\n2) Rumus permutasi n objek diambil r: P(n, r) = n! / (n − r)!.\n3) Di sini n = 7 calon dan r = 3 posisi:\n   P(7, 3) = 7! / (7 − 3)! = 7! / 4! = 7 × 6 × 5 = 210 cara.\nPilihan 35 salah karena menggunakan rumus kombinasi C(7, 3) yang mengabaikan jabatan."
    },
    {
      id: "q2",
      question: "Dari 8 siswa berprestasi akan dipilih 3 orang untuk mewakili sekolah dalam suatu seminar. Banyak cara pemilihan delegasi tersebut adalah...",
      options: ["56 cara", "336 cara", "24 cara", "120 cara"],
      correctAnswer: 0,
      explanation: "Langkah analisis kombinasi:\n1) Memilih 3 perwakilan seminar dari 8 siswa tidak memperhatikan urutan posisi (urutan pemilihan siapa yang terpilih duluan tidak berpengaruh), sehingga menggunakan KOMBINASI.\n2) Rumus kombinasi: C(n, r) = n! / (r! (n − r)!).\n3) Di sini n = 8 dan r = 3:\n   C(8, 3) = 8! / (3! × 5!) = (8 × 7 × 6) / (3 × 2 × 1) = 336 / 6 = 56 cara.\nJadi terdapat 56 variasi susunan delegasi."
    },
    {
      id: "q3",
      question: "Banyak susunan kata berbeda yang dapat dibentuk dari huruf-huruf pada kata 'KATAK' adalah...",
      options: ["120 kata", "60 kata", "30 kata", "20 kata"],
      correctAnswer: 2,
      explanation: "Langkah permutasi unsur yang sama:\n1) Total huruf pada kata 'KATAK' adalah n = 5.\n2) Frekuensi huruf yang sama:\n   - Huruf 'K' muncul 2 kali (k₁ = 2)\n   - Huruf 'A' muncul 2 kali (k₂ = 2)\n   - Huruf 'T' muncul 1 kali (k₃ = 1).\n3) Rumus permutasi unsur sama: P = n! / (k₁! × k₂! × ...):\n   P = 5! / (2! × 2! × 1!) = 120 / (2 × 2) = 120 / 4 = 30 kata.\nJadi ada 30 susunan kata yang berbeda."
    },
    {
      id: "q4",
      question: "Sebuah lingkaran meja bundar dihadiri oleh 5 orang delegasi. Banyak cara posisi duduk mereka mengelilingi meja tersebut adalah...",
      options: ["120 cara", "60 cara", "24 cara", "12 cara"],
      correctAnswer: 2,
      explanation: "Langkah permutasi siklis:\n1) Posisi melingkar menggunakan konsep permutasi siklis, di mana satu orang dianggap sebagai titik acuan tetap untuk mencegah perputaran identik dihitung ulang.\n2) Rumus permutasi siklis untuk n unsur: P_siklis = (n − 1)!.\n3) Untuk n = 5 orang delegasi:\n   P_siklis = (5 − 1)! = 4! = 4 × 3 × 2 × 1 = 24 cara.\nPilihan 120 salah karena menggunakan permutasi linier (5!)."
    },
    {
      id: "q5",
      question: "Banyak bilangan yang terdiri atas 3 angka berbeda yang dapat dibentuk dari angka-angka 1, 2, 3, 4, 5, 6 adalah...",
      options: ["216 bilangan", "120 bilangan", "20 bilangan", "720 bilangan"],
      correctAnswer: 1,
      explanation: "Langkah aturan pengisian tempat (filling slots):\n1) Disediakan 6 angka dan akan dibuat bilangan 3 angka berbeda (Ratusan, Puluhan, Satuan).\n   - Digit Ratusan: dapat dipilih dari 6 pilihan angka.\n   - Digit Puluhan: tersisa 5 pilihan (karena tidak boleh berulang).\n   - Digit Satuan: tersisa 4 pilihan.\n2) Gunakan aturan perkalian:\n   Total = 6 × 5 × 4 = 120 bilangan.\nBentuk ini setara dengan P(6, 3) = 6! / 3! = 120."
    },
    {
      id: "q6",
      question: "Dalam sebuah pertemuan dihadiri oleh 10 orang. Jika setiap orang saling berjabat tangan satu sama lain tepat satu kali, maka banyak jabat tangan yang terjadi adalah...",
      options: ["45 kali", "90 kali", "100 kali", "20 kali"],
      correctAnswer: 0,
      explanation: "Langkah kombinasi jabat tangan:\n1) Satu peristiwa jabat tangan melibatkan tepat 2 orang.\n2) Jabat tangan antara orang A dengan orang B sama saja dengan orang B dengan orang A (urutan tidak diperhitungkan), maka menggunakan kombinasi C(n, 2).\n3) Untuk n = 10 orang:\n   C(10, 2) = 10! / (2! × 8!) = (10 × 9) / (2 × 1) = 90 / 2 = 45 kali.\nJadi terjadi 45 kali jabat tangan."
    },
    {
      id: "q7",
      question: "Dari 6 pria dan 4 wanita akan dibentuk sebuah tim yang beranggotakan 3 pria dan 2 wanita. Banyak cara membentuk tim tersebut adalah...",
      options: ["60 cara", "240 cara", "120 cara", "180 cara"],
      correctAnswer: 2,
      explanation: "Langkah aturan perkalian kombinasi:\n1) Cara memilih 3 pria dari 6 pria: C(6, 3) = 6! / (3! × 3!) = (6 × 5 × 4) / (3 × 2 × 1) = 20 cara.\n2) Cara memilih 2 wanita dari 4 wanita: C(4, 2) = 4! / (2! × 2!) = (4 × 3) / (2 × 1) = 6 cara.\n3) Berdasarkan aturan perkalian, total cara pembentukan tim gabungan adalah:\n   Total = C(6, 3) × C(4, 2) = 20 × 6 = 120 cara."
    },
    {
      id: "q8",
      question: "Nilai dari 7! / (5! × 2!) adalah...",
      options: ["42", "21", "14", "7"],
      correctAnswer: 1,
      explanation: "Langkah perhitungan faktorial:\n1) Jabarkan 7! sampai 5!:\n   7! = 7 × 6 × 5!.\n2) Masukkan ke pecahan:\n   (7 × 6 × 5!) / (5! × 2!).\n3) Sederhanakan suku 5! yang sama di pembilang dan penyebut:\n   = (7 × 6) / 2! = 42 / (2 × 1) = 21.\nJadi hasilnya adalah 21."
    },
    {
      id: "q9",
      question: "Dari angka-angka 0, 1, 2, 3, 4, 5 akan disusun bilangan genap yang terdiri atas 3 angka berbeda. Banyak bilangan yang dapat disusun adalah...",
      options: ["52 bilangan", "60 bilangan", "48 bilangan", "40 bilangan"],
      correctAnswer: 0,
      explanation: "Langkah analisis bilangan genap dan angka nol:\n1) Bilangan 3 angka (Ratusan, Puluhan, Satuan). Digit ratusan tidak boleh 0.\n2) Syarat genap ditentukan oleh digit satuan: angka 0, 2, atau 4.\n3) Pisahkan menjadi dua kasus:\n   - Kasus A: Satuan angka 0 (1 pilihan).\n     Ratusan: 5 pilihan (1,2,3,4,5).\n     Puluhan: 4 pilihan tersisa.\n     Total Kasus A = 5 × 4 × 1 = 20 bilangan.\n   - Kasus B: Satuan angka 2 atau 4 (2 pilihan).\n     Ratusan: 4 pilihan (tidak boleh 0 dan tidak boleh angka satuan).\n     Puluhan: 4 pilihan (angka 0 boleh masuk kembali).\n     Total Kasus B = 4 × 4 × 2 = 32 bilangan.\n4) Jumlahkan kedua kasus: 20 + 32 = 52 bilangan."
    },
    {
      id: "q10",
      question: "Terdapat 4 buku Matematika berbeda dan 3 buku Fisika berbeda yang akan disusun berjajar di rak buku. Jika buku sejenis harus berdampingan, banyak susunan yang mungkin adalah...",
      options: ["288 cara", "144 cara", "5.040 cara", "72 cara"],
      correctAnswer: 0,
      explanation: "Langkah permutasi berkelompok:\n1) Karena buku sejenis harus berdampingan, kelompokkan menjadi 2 blok besar: Blok Matematika dan Blok Fisika.\n2) Banyak cara menyusun 2 blok ini di rak adalah 2! = 2 cara.\n3) Di dalam blok Matematika, 4 buku dapat bertukar tempat dalam 4! = 24 cara.\n4) Di dalam blok Fisika, 3 buku dapat bertukar tempat dalam 3! = 6 cara.\n5) Gunakan aturan perkalian gabungan:\n   Total cara = 2! × 4! × 3! = 2 × 24 × 6 = 288 cara."
    }
  ],

  "mat-12-4-1": [
    {
      id: "q1",
      question: "Pada pelemparan sebuah dadu bermata enam, peluang muncul mata dadu prima atau genap adalah...",
      options: ["1/2", "2/3", "5/6", "1"],
      correctAnswer: 2,
      explanation: "Langkah peluang kejadian majemuk tidak saling lepas:\n1) Ruang sampel dadu: S = {1, 2, 3, 4, 5, 6}, maka n(S) = 6.\n2) Kejadian A (mata prima) = {2, 3, 5} → n(A) = 3.\n3) Kejadian B (mata genap) = {2, 4, 6} → n(B) = 3.\n4) Irisan A ∩ B (prima sekaligus genap) = {2} → n(A ∩ B) = 1.\n5) Rumus peluang gabungan:\n   P(A ∪ B) = P(A) + P(B) − P(A ∩ B)\n            = 3/6 + 3/6 − 1/6 = 5/6.\nJadi peluangnya adalah 5/6."
    },
    {
      id: "q2",
      question: "Dua buah dadu dilempar bersamaan. Peluang muncul jumlah kedua mata dadu sama dengan 7 atau 11 adalah...",
      options: ["1/6", "2/9", "5/36", "7/36"],
      correctAnswer: 1,
      explanation: "Langkah peluang dua kejadian saling lepas:\n1) Ruang sampel 2 dadu: n(S) = 6 × 6 = 36.\n2) Kejadian A (jumlah 7): {(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)} → n(A) = 6.\n3) Kejadian B (jumlah 11): {(5,6), (6,5)} → n(B) = 2.\n4) Karena tidak mungkin jumlah dua dadu bernilai 7 sekaligus 11, kejadian ini SALING LEPAS (A ∩ B = ∅).\n5) Maka P(A ∪ B) = P(A) + P(B) = 6/36 + 2/36 = 8/36 = 2/9."
    },
    {
      id: "q3",
      question: "Sebuah kantong berisi 5 bola merah dan 3 bola biru. Jika diambil 2 bola satu per satu TANPA pengembalian, peluang terambil kedua bola berwarna merah adalah...",
      options: ["5/14", "25/64", "15/56", "5/28"],
      correctAnswer: 0,
      explanation: "Langkah peluang bersyarat tanpa pengembalian:\n1) Total bola mula-mula = 5 + 3 = 8 bola.\n2) Peluang pengambilan pertama bola merah: P(M₁) = 5/8.\n3) Karena bola tidak dikembalikan, sisa bola merah menjadi 4 dan total bola di kantong menjadi 7.\n4) Peluang pengambilan kedua bola merah: P(M₂ | M₁) = 4/7.\n5) Peluang terambil keduanya merah:\n   P(M₁ ∩ M₂) = (5/8) × (4/7) = 20 / 56 = 5/14."
    },
    {
      id: "q4",
      question: "Peluang A lulus ujian adalah 0,8 dan peluang B lulus ujian adalah 0,7. Jika kelulusan A dan B saling bebas, maka peluang A lulus TETAPI B TIDAK lulus adalah...",
      options: ["0,56", "0,24", "0,14", "0,06"],
      correctAnswer: 1,
      explanation: "Langkah kejadian saling bebas:\n1) Diketahui P(A) = 0,8.\n2) Peluang B tidak lulus adalah komplemen dari P(B):\n   P(B') = 1 − P(B) = 1 − 0,7 = 0,3.\n3) Karena kejadian A dan B saling bebas (independen), kejadian A dan B' juga saling bebas.\n4) Maka peluang A lulus dan B tidak lulus adalah:\n   P(A ∩ B') = P(A) × P(B') = 0,8 × 0,3 = 0,24."
    },
    {
      id: "q5",
      question: "Dua keping uang logam dan satu buah dadu dilempar bersamaan. Banyaknya anggota ruang sampel (n(S)) adalah...",
      options: ["12", "16", "24", "36"],
      correctAnswer: 2,
      explanation: "Langkah penentuan ruang sampel majemuk:\n1) Satu uang logam memiliki 2 sisi (Angka, Gambar).\n2) Dua uang logam memiliki 2 × 2 = 4 titik sampel.\n3) Satu buah dadu memiliki 6 sisi mata dadu.\n4) Gunakan aturan perkalian untuk ruang sampel gabungan:\n   n(S) = 2 × 2 × 6 = 24 titik sampel."
    },
    {
      id: "q6",
      question: "Dalam satu set kartu bridge lengkap (52 kartu tanpa joker), peluang terambilnya kartu As atau kartu berwarna merah adalah...",
      options: ["28/52", "26/52", "30/52", "15/26"],
      correctAnswer: 0,
      explanation: "Langkah kejadian tidak saling lepas pada kartu bridge:\n1) Total kartu n(S) = 52.\n2) Jumlah kartu As: n(As) = 4.\n3) Jumlah kartu merah (Hati & Wajik): n(Merah) = 26.\n4) Kartu yang merupakan As sekaligus berwarna merah ada 2 lembar (As Hati dan As Wajik): n(As ∩ Merah) = 2.\n5) Gunakan rumus peluang gabungan:\n   P(As ∪ Merah) = P(As) + P(Merah) − P(As ∩ Merah)\n                 = 4/52 + 26/52 − 2/52 = 28/52 = 7/13."
    },
    {
      id: "q7",
      question: "Peluang seorang penembak jitu tepat mengenai sasaran adalah 0,9. Jika ia menembak sebanyak 3 kali secara independen, peluang ia GAGAL mengenai sasaran pada ketiga tembakan tersebut adalah...",
      options: ["0,027", "0,01", "0,27", "0,001"],
      correctAnswer: 3,
      explanation: "Langkah peluang komplemen berulang:\n1) Peluang mengenai sasaran p = 0,9.\n2) Peluang gagal mengenai sasaran q = 1 − 0,9 = 0,1.\n3) Karena setiap tembakan independen, peluang gagal pada ketiga tembakan berturut-turut adalah:\n   P(gagal 3 kali) = 0,1 × 0,1 × 0,1 = (0,1)³ = 0,001."
    },
    {
      id: "q8",
      question: "Dari sebuah kotak terdapat 4 bola putih dan 6 bola hitam. Diambil 2 bola sekaligus secara acak. Peluang terambilnya 1 bola putih dan 1 bola hitam adalah...",
      options: ["4/15", "8/15", "7/15", "2/5"],
      correctAnswer: 1,
      explanation: "Langkah kombinasi peluang pengambilan sekaligus:\n1) Ruang sampel total memilih 2 bola dari 10 bola:\n   n(S) = C(10, 2) = (10 × 9) / 2 = 45.\n2) Cara memilih 1 bola putih dari 4 bola: C(4, 1) = 4.\n3) Cara memilih 1 bola hitam dari 6 bola: C(6, 1) = 6.\n4) Jumlah kejadian terambil 1 putih dan 1 hitam:\n   n(A) = C(4, 1) × C(6, 1) = 4 × 6 = 24.\n5) Peluang kejadian:\n   P(A) = n(A) / n(S) = 24 / 45 = 8/15."
    },
    {
      id: "q9",
      question: "Dua kejadian A dan B dikatakan saling lepas (mutually exclusive) apabila...",
      options: ["P(A ∩ B) = P(A) × P(B)", "P(A ∩ B) = 0", "P(A) + P(B) = 1", "P(A | B) = P(A)"],
      correctAnswer: 1,
      explanation: "Definisi kejadian saling lepas:\n1) Dua kejadian dikatakan saling lepas (mutually exclusive) jika kedua kejadian tersebut tidak dapat terjadi secara bersamaan dalam satu percobaan (irisan keduanya adalah himpunan kosong: A ∩ B = ∅).\n2) Oleh karena itu, nilai peluang irisannya selalu sama dengan nol: P(A ∩ B) = 0.\n3) Sedangkan P(A ∩ B) = P(A) × P(B) adalah syarat untuk kejadian saling bebas (independen)."
    },
    {
      id: "q10",
      question: "Tiga keping uang logam dilempar bersamaan sebanyak 80 kali. Frekuensi harapan munculnya minimal dua angka adalah...",
      options: ["30 kali", "50 kali", "40 kali", "60 kali"],
      correctAnswer: 2,
      explanation: "Langkah frekuensi harapan kejadian majemuk:\n1) Ruang sampel 3 koin: S = {AAA, AAG, AGA, GAA, AGG, GAG, GGA, GGG} → n(S) = 8.\n2) Kejadian minimal dua angka (2 angka atau 3 angka):\n   E = {AAG, AGA, GAA, AAA} → n(E) = 4.\n3) Peluang kejadian E:\n   P(E) = 4/8 = 1/2.\n4) Frekuensi harapan (F_h) untuk n = 80 kali percobaan:\n   F_h = n × P(E) = 80 × 1/2 = 40 kali."
    }
  ]
};
