ROMBAK TOTAL SELURUH KODE UI/UX WEBSITE INI AGAR MENIRU 100% STRUKTUR LAYOUT, TIPOGRAFI, DAN INTERAKSI DARI https://renando.duingzcreative.site/!

Jangan membuat desain kartu standar yang membosankan. Gunakan arsitektur "Cinematic Studio Editorial Poster" persis seperti web Renando dengan detail spesifikasi berikut:

===================================================================
1. COLOR SYSTEM & STUDIO LIGHTING (DARK MAROON STUDIO & WARM PAPER)
===================================================================
- DARK MODE (Default - Seperti Studio Merah/Maroon Renando):
  * Background Utama: Deep Studio Black (`#0A0909`)
  * Surface / Card: Matte Obsidian (`#121010`) dengan border super tipis (`1px solid rgba(255, 255, 255, 0.08)`)
  * Studio Lighting Glow (di belakang foto Hero): Radial gradient halus berwarna Deep Crimson/Maroon (`radial-gradient(circle, rgba(136, 19, 55, 0.45) 0%, rgba(10, 9, 9, 0) 70%)`)
  * Teks Utama: Crisp Warm White (`#F5F2EB`) | Teks Muted: `#8E8683`
  * Aksen Highlight: Crimson Maroon (`#BE123C` / `#9F1239`)
- LIGHT MODE (Warm Editorial Paper):
  * Background Utama: Warm Ivory (`#F7F3EB`)
  * Surface / Card: `#EFE9DD` dengan border `1px solid rgba(24, 20, 20, 0.1)`
  * Studio Lighting Glow (di belakang foto Hero): Radial gradient Warm Maroon/Rose halus (`rgba(128, 27, 43, 0.15)`)
  * Teks Utama: `#161414` | Teks Muted: `#5C5552` | Aksen: Deep Maroon (`#7C1D2D`)

Tipografi:
- Heading Utama: Gunakan font Display/Sans-Serif super tegas, rapat, dan besar (`Syne`, `Plus Jakarta Sans` ExtraBold, atau `Oswald`/`Anton` untuk angka & judul raksasa, `tracking-tight`, `uppercase`).
- Body: `Plus Jakarta Sans` atau `Inter`.
- Index Numbers & Metadata (`01 /`, `2026`, tags): `JetBrains Mono` ukuran kecil (`text-xs tracking-widest uppercase`).

===================================================================
2. NAVBAR (PERSIS GAYA RENANDO)
===================================================================
- Kiri: `MINIPAOO®` (bold, tracking-tight)
- Tengah: Link navigasi bersih (`Karya`, `Tentang`, `Perjalanan`, `Keahlian`, `Kontak`)
- Kanan: Toggle Bahasa (`ID | EN`), Toggle Tema (`Light / Dark`), dan pill button `Let's talk ↗`

===================================================================
3. HERO SECTION (CENTERED CUTOUT PHOTO + POSTER GRID RENANDO)
===================================================================
Susun Hero Section full-screen (`min-h-screen`) dengan komposisi poster berlapis seperti Renando:
1) Top Metadata Bar (3 kolom kecil di atas):
   - Kiri: `FULL-STACK & AI ENGINEER`
   - Tengah: Badge dengan titik hijau menyala `AVAILABLE FOR INTERNSHIP`
   - Kanan: `MALANG, INDONESIA ✳`
2) Centerpiece (Tengah Layar):
   - Teks sapaan: `Hello, I'm`
   - Teks Raksasa (Display): `RENY AMBARWATI.`
   - Foto Profil Tengah (`/profile.png` - transparan tanpa background): Diposisikan tepat di tengah dengan efek *studio maroon lighting glow* di belakang tubuhnya. Jika `/profile.png` belum ada, tampilkan siluet/placeholder potret tengah yang rapi tanpa merusak layout.
3) Kiri & Kanan Bawah Foto (Asymmetrical Editorial Info):
   - Sisi Kiri:
     * Sub-role tegas: `FULL-STACK WEB & COMPUTER VISION`
     * Narasi pendek (ID): "Membangun sistem. Menciptakan solusi cerdas. Saya mengubah kebutuhan bisnis dan data visual menjadi aplikasi web dan model AI yang bekerja nyata."
     * Narasi pendek (EN): "Engineering systems. Building intelligent vision. I turn complex requirements and visual data into production-ready web apps and AI models."
   - Sisi Kanan (3 Statistik Tegas seperti Renando):
     * `3.70` — IPK D4 TEKNIK INFORMATIKA POLINEMA
     * `4+` — PROYEK WEB, AI & ROBOTIKA
     * `FINALIS` — KRAI NASIONAL 2026
4) Bottom Hero Bar:
   - Tombol Utama: `LIHAT CV (GOOGLE DRIVE) ↗` (Membuka link `https://drive.google.com/file/d/ISI_LINK_GDRIVE_CV_DISINI/view?usp=sharing` di tab baru `target="_blank"`, BUKAN download lokal).
   - Tombol Kedua: `LIHAT KARYA SAYA ↓` (Scroll ke bagian 01).
   - Teks kecil di pojok: `SCROLL TO DISCOVER — SELECTED WORK / 2024–2026`

===================================================================
4. SECTION 01 / SELECTED WORK (DENGAN FILTER KATEGORI & INDEX 01-04)
===================================================================
Header Seksi:
- Label Mono: `01 / SELECTED WORK`
- Judul Besar: `KARYA & SISTEM PILIHAN.` (ID) / `SELECTED WORKS.` (EN)
- Filter Tabs Interaktif (Bisa diklik untuk memfilter proyek): `Semua` | `Web Development` | `Computer Vision & AI` | `Robotics`

Tampilkan 4 Kartu Proyek Bergaya Poster Sinematik (Setiap kartu memiliki Nomor Urut Besar `01`, `02`, `03`, `04`, Kategori, Tahun, Judul Besar, Deskripsi Teknis Lengkap, Tech Stack Pills, dan Link GitHub `↗`):

- WORK 01 (Kategori: Web Development | Tahun: 2026):
  * Judul: `SKILLKUL – FREELANCE MARKETPLACE`
  * Subjudul: `FULL-STACK WEB / 2026`
  * Deskripsi (ID): Platform marketplace web end-to-end yang mempertemukan mahasiswa penyedia jasa freelance dengan klien. Dilengkapi autentikasi multi-peran, katalog jasa, pelacakan pesanan, integrasi pembayaran otomatis via REST API Midtrans, serta pencetakan invoice dan portofolio PDF otomatis menggunakan DomPDF.
  * Deskripsi (EN): End-to-end web marketplace connecting student freelancers with clients. Features multi-role authentication, service catalogs, order tracking, real-time automated payment verification via Midtrans REST API, and dynamic PDF invoice generation using DomPDF.
  * Tech Stack: `Laravel`, `Tailwind CSS`, `PostgreSQL`, `Midtrans API`, `DomPDF`
  * Link: `https://github.com/Renyambar/Skillkul_PBL`

- WORK 02 (Kategori: Web Development | Tahun: 2025–2026):
  * Judul: `PORTAL & CMS LAB MOBILE MULTIMEDIA`
  * Subjudul: `INFORMATION SYSTEM / 2026`
  * Deskripsi (ID): Portal profil resmi dan Content Management System (CMS) untuk Laboratorium Mobile dan Multimedia Polinema. Mengembangkan halaman publik responsif, dashboard admin, serta struktur database PostgreSQL untuk mengelola fasilitas riset, publikasi karya, dan agenda lab.
  * Deskripsi (EN): Official profile portal and CMS for the Mobile & Multimedia Lab at Polinema. Built responsive public pages, a role-protected admin dashboard, and a PostgreSQL relational schema to manage lab facilities, research posts, and schedules.
  * Tech Stack: `Laravel`, `Tailwind CSS`, `PostgreSQL`, `Blade CMS`
  * Link: `https://github.com/Renyambar/PBL_LabMMT`

- WORK 03 (Kategori: Computer Vision & AI | Tahun: 2026):
  * Judul: `CAPSEE – AI MOBILE CAPSTONE`
  * Subjudul: `COMPUTER VISION & MOBILE / 2026`
  * Deskripsi (ID): Aplikasi mobile berbasis Computer Vision (Proyek Capstone Semester 5). Menangani persiapan dataset, pengolahan citra (OpenCV), pelatihan model Deep Learning (PyTorch/TensorFlow) di Google Colab, serta integrasi inferensi model ke aplikasi Flutter.
  * Deskripsi (EN): AI-powered mobile application capstone project. Handled the ML/Computer Vision pipeline including dataset preparation, image preprocessing with OpenCV, model training on Google Colab, and inference integration with the Flutter app.
  * Tech Stack: `Python`, `OpenCV`, `PyTorch`, `TensorFlow`, `Google Colab`, `Flutter`
  * Link: `https://github.com/Adhityayusuf/capsee`

- WORK 04 (Kategori: Robotics / Computer Vision & AI | Tahun: 2025–2026):
  * Judul: `ABU ROBOCON (KRAI 2026) VISION SYSTEM`
  * Subjudul: `AUTONOMOUS ROBOTICS & EDGE AI / 2026`
  * Deskripsi (ID): Sistem deteksi objek real-time dan estimasi koordinat pada robot otonom menggunakan YOLOv8 dan ROS 2 Humble (Finalis Nasional KRAI 2026). Dilengkapi antarmuka kontrol HMI di lapangan serta akselerasi model pada edge device menggunakan TensorRT, NCNN, kuantisasi OpenVINO INT8, dan model pruning.
  * Deskripsi (EN): Real-time object detection and spatial estimation for autonomous robots using YOLOv8 and ROS 2 Humble (KRAI 2026 National Finalist). Includes a custom HMI control interface and edge hardware optimization via TensorRT, NCNN, OpenVINO INT8 quantization, and model pruning.
  * Tech Stack: `YOLOv8`, `ROS 2 Humble`, `OpenCV`, `TensorRT`, `OpenVINO INT8`, `NCNN`
  * Link: `https://github.com/Renyambar/abu-riset`

===================================================================
5. SECTION 02 / BEHIND THE CODE (ABOUT, EDUCATION, FULL TECHNICAL TOOLKIT & WORKFLOW)
===================================================================
Header Seksi:
- Label Mono: `02 / BEHIND THE CODE`
- Judul Besar: `BUKAN SEKADAR BARIS KODE. TAPI SOLUSI YANG BEKERJA.` (ID) / `MORE THAN JUST CODE. ENGINEERED TO WORK.` (EN)
- Narasi (ID): "Saya Reny Ambarwati, mahasiswa semester 5 D4 Teknik Informatika di Politeknik Negeri Malang (IPK 3.70/4.00). Saya bekerja di persimpangan antara pengembangan aplikasi web full-stack (Laravel, Python, PostgreSQL) dan kecerdasan buatan/visi komputer (YOLOv8, ROS 2, Edge AI), menggabungkan arsitektur backend yang terstruktur dengan komputasi cerdas."
- Narasi (EN): "I'm Reny Ambarwati, a 5th-semester Informatics Engineering student at Politeknik Negeri Malang (GPA 3.70/4.00). I work at the intersection of full-stack web engineering (Laravel, Python, PostgreSQL) and computer vision/AI (YOLOv8, ROS 2, Edge AI), combining structured backend architecture with real-time intelligent computing."

Sub-grid 1: EDUCATION & TRAINING (Persis gaya Renando)
- `Politeknik Negeri Malang` (2024 – Sekarang) — D4 Teknik Informatika (Semester 5, IPK 3.70/4.00). Fokus: Rekayasa Perangkat Lunak, Computer Vision, Machine Learning, & Business Intelligence.
- `Workshop Riset Informatika (WRI)` (2024 – 2025) — Anggota Mini Class Divisi Web Development (2 Semester).

Sub-grid 2: TECHNICAL TOOLKIT LENGKAP (6 Kategori Bento/Editorial Grid):
1) `Bahasa Pemrograman`: Python, PHP, JavaScript, SQL, Dart, Java, C/C++
2) `Web & Mobile Development`: Laravel (MVC), Django (Fundamental), Tailwind CSS, HTML5, CSS3, REST API, Midtrans API, DomPDF, Flutter
3) `Computer Vision & Machine Learning`: YOLOv8/v10, OpenCV, PyTorch, TensorFlow, Scikit-learn, Roboflow, Label Studio, Google Colab
4) `Robotics & Edge AI Optimization`: ROS 2 Humble, TensorRT, Intel OpenVINO (INT8 Quantization), NCNN, ONNX, Model Pruning, Custom HMI Control Display
5) `Database, Data Warehouse & BI`: PostgreSQL, MySQL, ERD & Relational Schema, Data Warehouse (Star Schema), Pentaho Data Integration (ETL), Microsoft Power BI
6) `DevOps & Environment`: Git, GitHub, Docker, Linux (Ubuntu 22.04), WSL, VS Code, Laragon, Vercel CI/CD

Sub-grid 3: FROM REQUIREMENT TO DEPLOYMENT (5 Tahap Cara Kerja bernomor 01–05 seperti "From Idea to Final Frame" di web Renando):
- `01 / THE REQUIREMENT`: Memetakan kebutuhan sistem, merancang skema database (PostgreSQL), atau menyiapkan kurasi dataset & anotasi presisi (Roboflow/Label Studio).
- `02 / THE ARCHITECTURE`: Merancang pola arsitektur MVC/REST API pada web atau menyusun pipeline preprocessing citra dan arsitektur model AI.
- `03 / THE ENGINEERING`: Implementasi kode full-stack (Laravel/Python) atau eksperimen training model Deep Learning (YOLOv8/PyTorch/TensorFlow) di Google Colab.
- `04 / THE OPTIMIZATION`: Pengujian fungsional, optimasi query SQL, serta kompresi model (TensorRT, OpenVINO INT8, NCNN, Pruning) agar berjalan ringan dan cepat.
- `05 / THE DEPLOYMENT`: Integrasi sistem ke produksi/edge hardware (ROS 2 / Vercel CI/CD) beserta dokumentasi teknis yang rapi.

===================================================================
6. SECTION 03 / THE JOURNEY (EXPERIENCE TIMELINE & MILESTONES)
===================================================================
Header Seksi:
- Label Mono: `03 / THE JOURNEY`
- Judul Besar: `PENGALAMAN & RISET.` (ID) / `EXPERIENCE & RESEARCH.` (EN)

Timeline Pengalaman (Format Baris Tahun Tegas + Peran + Instansi + Poin Detail seperti Renando):
1) `2026 · SEKARANG` — **Research Assistant (Computer Vision & Machine Learning)** | *Program Hilirisasi Riset Politeknik Negeri Malang (Proyek NDA)*
   - Terlibat dalam proyek riset "Sistem Early Warning terhadap Perilaku Pegawai Menggunakan Analisis Video Berbasis Kecerdasan Buatan pada Command Center".
   - Membangun pipeline dataset video CCTV, melakukan anotasi objek/perilaku secara presisi menggunakan Label Studio dan Roboflow, serta menjalankan training dan evaluasi akurasi model di Google Colab.
2) `AGU 2025 · SEKARANG` — **Software Division (Computer Vision & Edge Deployment)** | *Tim Robotika ABUROBONEMA Polinema*
   - Finalis Tingkat Nasional Kontes Robot ABU Indonesia (KRAI) 2026.
   - Mengembangkan deteksi objek real-time dengan YOLOv8 terintegrasi ROS 2 Humble, membangun display kontrol HMI, serta mengoptimasi inferensi model pada edge device menggunakan TensorRT, NCNN, OpenVINO INT8, dan model pruning.
3) `JUN 2026` — **Panitia Divisi Kesekretariatan** | *Play IT! 2026 (Kompetisi Teknologi Nasional Polinema)*
   - Mengelola administrasi peserta tingkat nasional, verifikasi database pendaftaran, dan penyusunan dokumen resmi kepanitiaan.

Sub-seksi: A FEW MILESTONES (4 Kotak Bernomor 01–04 seperti Renando):
- `01` — **Finalis Nasional KRAI** (2026)
- `02` — **Asisten Riset Hilirisasi AI** (2026)
- `03` — **IPK 3.70 / 4.00 D4 TI Polinema** (2024–2026)
- `04` — **Panitia Nasional Play IT!** (2026)

===================================================================
7. SECTION 04 / YOUR NEXT PROJECT (KONTAK + FORM LANGSUNG KE WHATSAPP/EMAIL)
===================================================================
Header Seksi:
- Label Mono: `04 / YOUR NEXT PROJECT`
- Judul Raksasa: `LET'S WORK TOGETHER.`
- Subteks: "Sedang mencari kandidat magang Full-Stack Developer atau Computer Vision / AI Engineer? Mari berdiskusi."

Grid Kontak Langsung:
- `EMAIL`: renyambarwati@gmail.com (sesuaikan dengan email di CV)
- `LINKEDIN`: linkedin.com/in/renyambarwati
- `GITHUB`: github.com/Renyambar
- `CURRICULUM VITAE`: Lihat CV di Google Drive ↗
- `BASED IN`: Malang, Jawa Timur, Indonesia (Siap Onsite / Hybrid / Remote)

Fitur Spesial Renando (Interactive Quick Brief / Contact Box):
Buat form singkat (Input Nama/Perusahaan, Pilihan Topik: `Full-Stack Web Internship`, `Computer Vision / AI Internship`, `Project Collaboration`, dan Pesan Singkat) dengan tombol `"Kirim via Email / WhatsApp ↗"` yang otomatis menyusun draft pesan tanpa backend palsu.

TAMBAHKAN FITUR INTERACTIVE PROJECT DETAIL MODAL (POPUP) & PHOTO GALLERY PADA SECTION 01 / SELECTED WORK:

1. INTERAKSI KARTU PROYEK:
   - Setiap kartu proyek (01 s/d 04) pada Section "01 / SELECTED WORK" sekarang harus memiliki:
     a) Thumbnail / Preview Image di dalam kartu (rasio 16:10, dengan efek subtle zoom saat di-hover).
     b) Indikator tombol jelas: "Lihat Detail & Dokumentasi ↗" (ID) / "View Case Study & Gallery ↗" (EN).
     c) Ketika kartu atau tombol tersebut diklik, BUKA POPUP MODAL INTERAKTIF (jangan langsung pindah halaman ke GitHub).

2. DESAIN & FITUR POPUP MODAL (BERGAYA STUDIO EDITORIAL RENANDO):
   - Backdrop gelap dengan blur halus (`backdrop-blur-md bg-black/80`), animasi buka/tutup yang mulus, dan bisa ditutup dengan tombol `[X] ESC` di pojok kanan atas atau klik di luar area modal.
   - Saat modal terbuka, kunci scroll halaman utama (`overflow-hidden` pada body).
   - Struktur di dalam Popup Modal:
     a) HEADER MODAL: Nomor Index (`01`–`04`), Kategori Badge, Tahun, dan Judul Proyek Besar.
     b) INTERACTIVE PHOTO GALLERY / SLIDER (Di bagian atas modal):
        - Tampilkan area showcase gambar besar (rasio 16:9) dengan tombol navigasi `< Prev` dan `Next >` serta deretan *thumbnail preview* di bawahnya (3 slot gambar per proyek) agar saya bisa memamerkan screenshot UI web, dashboard, atau foto robot.
        - Sediakan path gambar lokal yang rapi di dalam array data proyek (misal: `/projects/skillkul-1.jpg`, `/projects/skillkul-2.jpg`, dst.) DAN berikan fallback desain *styled placeholder wireframe* yang estetik (bukan gambar pecah/broken image) jika file foto belum saya upload.
     c) INFORMASI MENDALAM (Grid 2 Kolom di bawah galeri):
        - Kolom Kiri (Studi Kasus):
          * **Latar Belakang & Tantangan (Overview):** Penjelasan singkat konteks proyek.
          * **Arsitektur & Fitur Utama (Key Features & Architecture):** 3–4 bullet points detail teknis yang dikerjakan.
        - Kolom Kanan (Metadata & Action):
          * **Peran (Role):** Peran spesifik saya di proyek tersebut.
          * **Tech Stack Lengkap:** Daftar pills teknologi yang digunakan.
          * **Tombol Aksi Utama:** Tombol solid Maroon `"Buka Repositori GitHub ↗"` (`target="_blank"`) yang mengarah ke link GitHub masing-masing proyek.

3. DATA LENGKAP UNTUK 4 POPUP PROYEK (DWIBAHASA ID & EN):

- PROYEK 01: SKILLKUL – STUDENT FREELANCE MARKETPLACE
  * Peran: Full-Stack Web Developer (Project-Based Learning)
  * Galeri Foto: `['/projects/skillkul-1.jpg', '/projects/skillkul-2.jpg', '/projects/skillkul-3.jpg']` (Caption: Landing Page & Katalog Jasa, Integrasi Pembayaran Midtrans, Dashboard & Cetak Invoice PDF).
  * Overview (ID): Platform marketplace web end-to-end yang dirancang untuk menjembatani mahasiswa penyedia jasa freelance dengan klien secara aman dan terstruktur.
  * Overview (EN): End-to-end web marketplace designed to connect university student freelancers with clients through a structured and secure workflow.
  * Fitur Utama (ID):
    1. Autentikasi multi-peran (Mahasiswa/Freelancer, Klien, Admin) dan manajemen katalog portofolio jasa.
    2. Perancangan skema database relasional PostgreSQL untuk melacak tahapan proyek, transaksi, dan ulasan.
    3. Integrasi REST API Midtrans Payment Gateway untuk verifikasi status pembayaran otomatis secara real-time.
    4. Otomatisasi pencetakan dokumen invoice transaksi dan portofolio mahasiswa ke format PDF menggunakan DomPDF.
  * Fitur Utama (EN):
    1. Multi-role authentication (Freelancer, Client, Admin) and service catalog management.
    2. Normalized PostgreSQL database schema handling order lifecycles, project milestones, and transaction logs.
    3. Real-time payment processing and automated status verification via Midtrans Payment Gateway REST API.
    4. Automated PDF generation for order invoices and student portfolios using DomPDF.
  * Link GitHub: `https://github.com/Renyambar/Skillkul_PBL`

- PROYEK 02: PORTAL & CMS LABORATORIUM MOBILE DAN MULTIMEDIA (LAB MMT)
  * Peran: Full-Stack Web Developer (Project-Based Learning)
  * Galeri Foto: `['/projects/labmmt-1.jpg', '/projects/labmmt-2.jpg', '/projects/labmmt-3.jpg']` (Caption: Halaman Utama Portal Lab MMT, Katalog Riset & Fasilitas, Dashboard CMS Admin).
  * Overview (ID): Sistem informasi profil resmi dan Content Management System (CMS) untuk mempublikasikan aktivitas riset, inventaris fasilitas, serta kegiatan Laboratorium Mobile dan Multimedia Polinema.
  * Overview (EN): Official profile portal and Content Management System (CMS) showcasing research publications, facilities, and events for the Mobile and Multimedia Lab at Polinema.
  * Fitur Utama (ID):
    1. Antarmuka publik yang responsif menggunakan Tailwind CSS dan Laravel Blade templating.
    2. Dashboard administrator terproteksi untuk mengelola berita, jadwal praktikum, dan publikasi riset mahasiswa/dosen.
    3. Struktur database PostgreSQL yang teroptimasi untuk pencarian dan pemfilteran konten laboratorium.
  * Fitur Utama (EN):
    1. Responsive public web portal built with Tailwind CSS and Laravel Blade templating.
    2. Role-protected admin CMS dashboard for managing lab news, schedules, and academic research publications.
    3. Structured PostgreSQL relational database for fast content filtering and inventory management.
  * Link GitHub: `https://github.com/Renyambar/PBL_LabMMT`

- PROYEK 03: CAPSEE – AI-POWERED MOBILE APPLICATION
  * Peran: Machine Learning & Computer Vision Engineer (Capstone Project Semester 5)
  * Galeri Foto: `['/projects/capsee-1.jpg', '/projects/capsee-2.jpg', '/projects/capsee-3.jpg']` (Caption: Antarmuka Aplikasi Mobile Flutter, Pipeline Preprocessing Citra OpenCV, Hasil Evaluasi & Deteksi Model).
  * Overview (ID): Proyek kolaborasi aplikasi mobile lintas platform yang mengintegrasikan model Computer Vision untuk analisis visual secara langsung dari perangkat pengguna.
  * Overview (EN): Cross-platform mobile capstone project integrating computer vision models for on-device/cloud visual analysis.
  * Fitur Utama (ID):
    1. Penyiapan dataset citra, augmentasi data, dan tahapan image preprocessing menggunakan Python dan OpenCV.
    2. Eksperimen pelatihan (training), validasi, dan hyperparameter tuning model Deep Learning (PyTorch/TensorFlow) di Google Colab.
    3. Integrasi endpoint inferensi model ke aplikasi mobile berbasis Flutter agar menghasilkan respons prediksi yang cepat dan akurat.
  * Fitur Utama (EN):
    1. Image dataset curation, augmentation, and preprocessing pipeline built with Python and OpenCV.
    2. Deep learning model training, validation, and tuning in Google Colab using PyTorch/TensorFlow.
    3. Seamless integration of model inference outputs into the cross-platform Flutter mobile client.
  * Link GitHub: `https://github.com/Adhityayusuf/capsee`

- PROYEK 04: ABU ROBOCON (KRAI 2026) AUTONOMOUS VISION & EDGE AI
  * Peran: Software Engineer – Computer Vision & Edge Deployment (Finalis Nasional KRAI 2026)
  * Galeri Foto: `['/projects/krai-1.jpg', '/projects/krai-2.jpg', '/projects/krai-3.jpg']` (Caption: Deteksi Objek Real-Time YOLOv8 di Lapangan, Antarmuka Kontrol HMI Robot, Pengujian FPS Model pada Edge Device).
  * Overview (ID): Sistem persepsi visual dan estimasi posisi real-time untuk robot otonom Tim ABUROBONEMA pada Kontes Robot ABU Indonesia (KRAI) 2026 tingkat nasional.
  * Overview (EN): Real-time visual perception and spatial coordinate estimation system for ABUROBONEMA's autonomous robot at the KRAI 2026 National Finals.
  * Fitur Utama (ID):
    1. Deteksi objek real-time menggunakan YOLOv8 (manajemen dataset di Roboflow & training di Google Colab) yang terhubung langsung dengan node navigasi ROS 2 Humble.
    2. Pembuatan antarmuka Human-Machine Interface (HMI) / Control Display untuk memantau kamera dan kalibrasi parameter di lapangan pertandingan.
    3. Akselerasi dan kompresi model pada edge hardware melalui konversi TensorRT, migrasi NCNN, kuantisasi OpenVINO INT8, serta model pruning untuk menjaga FPS tetap tinggi.
  * Fitur Utama (EN):
    1. Real-time YOLOv8 object detection pipeline integrated with ROS 2 Humble navigation nodes.
    2. Custom Human-Machine Interface (HMI) control display for live camera monitoring and field calibration.
    3. Edge AI hardware acceleration using TensorRT conversion, NCNN migration, OpenVINO INT8 quantization, and model pruning for high-FPS inference.
  * Link GitHub: `https://github.com/Renyambar/abu-riset`