# 🚀 RENY AMBARWATI — PORTFOLIO WEBSITE BLUEPRINT & MASTER SPEC
**Domain:** `https://minipaoo.web.id`  
**Target Build Environment:** Google Antigravity / AI Full-Stack Code Generator  
**Design References Merged:**  
1. `https://faliq-portfolio.vercel.app/` (Modern AI/Tech Developer vibe, Next.js + Framer Motion, Infinite Role & Availability Marquee, Tech Stack Badges, Smooth Preloader).  
2. `https://renando.duingzcreative.site/` (Editorial Section Numbering `01`–`04`, Bold Typography, High-Contrast Studio Portrait Framing, Quick Metrics Counter, Category Filterable Works, Interactive Before/After Vision Slider, Direct WhatsApp/Email Brief Form).

---

## ⚡ INSTRUKSI CEPAT UNTUK ANTIGRAVITY (CARA PAKAI)  
> *"Build a complete, production-ready, single-page developer portfolio website based strictly on this README specification. Implement the exact color palette (Warm Cream, Deep Maroon, Obsidian Black), Dark/Light mode toggle, and Full Bilingual (ID/EN) language switcher with all the provided data."*

---

## 1. REKOMENDASI TECH STACK (PALING CEPAT & STABIL DI VERCEL)
Gunakan stack standar industri yang ringan dan tidak butuh setup database eksternal agar selesai dalam hitungan menit:
- **Framework:** **Next.js 14/15 (App Router)** atau **React + Vite (TypeScript)** *(Pilih Next.js atau Vite React TS yang paling cepat di-preview di Antigravity)*.
- **Styling:** **Tailwind CSS** (dengan CSS Variables untuk Dark/Light theme).
- **Animation:** **Framer Motion** (untuk *smooth reveal*, *editorial numbering*, dan *interactive tabs*).
- **Icons:** **Lucide React** (`lucide-react`).
- **Fonts (Google Fonts):**
  - Heading / Editorial Display: `Syne` atau `Plus Jakarta Sans` (Bold/ExtraBold)
  - Body Text: `Inter` atau `Plus Jakarta Sans`
  - Monospace / Section Numbers (`01 /`, Tags, Code): `JetBrains Mono`
- **Deployment:** **Vercel** (terhubung ke domain `minipaoo.web.id`).

---

## 2. SISTEM WARNA (DISESUAIKAN DENGAN FOTO PROFIL: KREM, MARUN, HITAM)
Foto profil utama memiliki elemen pakaian warna **Krem (Warm Cream)**, **Marun (Deep Maroon)**, dan **Hitam (Charcoal/Black)**. Palet warna website dirancang khusus agar foto profil menyatu sempurna baik di **Light Mode** maupun **Dark Mode**:

### ☀️ Light Mode ("Warm Cream Editorial")
- **Background Primary (`--bg-primary`):** `#FAF6F0` (Warm Cream / Alabaster lembut, tidak menyilaukan mata)
- **Background Secondary / Card (`--bg-secondary`):** `#F2EAE0` (Soft Sand / Warm Ivory)
- **Text Primary (`--text-primary`):** `#141213` (Rich Obsidian Black)
- **Text Secondary / Muted (`--text-secondary`):** `#5C5356` (Warm Charcoal Grey)
- **Accent Primary (`--accent-primary`):** `#7A1C29` (Deep Royal Maroon)
- **Accent Secondary / Hover (`--accent-secondary`):** `#9E2A3B` (Vibrant Berry Maroon)
- **Border / Divider (`--border-color`):** `#E2D6C8` (Warm Taupe Border)

### 🌙 Dark Mode ("Obsidian Maroon Studio" — Default atau Toggle)
- **Background Primary (`--bg-primary`):** `#0D0B0C` (Obsidian Carbon Black)
- **Background Secondary / Card (`--bg-secondary`):** `#171214` (Dark Espresso Maroon-Tinted Black)
- **Text Primary (`--text-primary`):** `#F6EFE6` (Warm Cream White — senada dengan baju krem di foto)
- **Text Secondary / Muted (`--text-secondary`):** `#A89B9E` (Muted Warm Grey)
- **Accent Primary (`--accent-primary`):** `#B83246` (Luminous Crimson Maroon)
- **Accent Secondary / Glow (`--accent-secondary`):** `#7A1C29` (Deep Maroon Studio Glow di belakang foto profil)
- **Border / Divider (`--border-color`):** `#2A2023` (Subtle Maroon-Charcoal Line)

---

## 3. FITUR WAJIB (CORE FEATURES)
1. **Bilingual Language Switcher (`ID` | `EN`):**
   - Tombol switch di Navbar (`ID / EN`) menggunakan React Context/State tanpa reload halaman.
   - Semua teks navigasi, hero, deskripsi proyek, pengalaman, hingga form kontak berubah instan antara Bahasa Indonesia dan Bahasa Inggris.
2. **Theme Toggle (`Dark` | `Light`):**
   - Tombol Matahari/Bulan di Navbar yang mengubah class `dark` pada `<html>` dengan transisi halus (`transition-colors duration-300`).
3. **Infinite Marquee Banner (Gaya Faliq Portfolio):**
   - Dua pita berjalan (*scrolling ticker*) di bawah Hero section:
     - Pita 1: `FULL-STACK WEB DEVELOPER • COMPUTER VISION ENGINEER • ROBOTICS SOFTWARE (ROS 2) • EDGE AI OPTIMIZATION •`
     - Pita 2: `AVAILABLE FOR INTERNSHIP • OPEN FOR COLLABORATION • BASED IN MALANG, INDONESIA •`
4. **Interactive "Raw vs AI Vision" Showcase (Adaptasi dari "From Raw to Real" Renando):**
   - Sebuah kartu interaktif di mana pengunjung bisa menggeser slider (*atau klik toggle mode*) untuk melihat simulasi cara kerja sistem Computer Vision milik Reny:
     - **State 1 (Raw Camera Feed):** Tampilan kamera biasa + informasi problem.
     - **State 2 (YOLOv8 + TensorRT/OpenVINO INT8 Vision HUD):** Menampilkan overlay *bounding box* warna marun/hijau, FPS counter tinggi, status node `ROS 2 Humble: CONNECTED`, dan metrik kuantisasi INT8.
5. **Filterable Project Cards (`All`, `Web Dev`, `AI & Computer Vision`, `Robotics`):**
   - Dilengkapi link ke GitHub repository, tech stack badges, dan modal/expandable detail.
6. **Direct WhatsApp & Email Quick Brief (Adaptasi dari Renando Footer):**
   - Pengunjung bisa memilih kategori keperluan (*Internship Offer*, *Web Development*, *AI/Computer Vision Project*, *Collaboration*), mengetik pesan singkat, lalu memilih kirim ke **Email** atau **WhatsApp Draft**.

---

## 4. ARSITEKTUR HALAMAN & KONTEN LENGKAP (BILINGUAL ID & EN)

### A. NAVBAR (Sticky Glassmorphism)
- **Logo Kiri:** `MINIPAOO.` dengan badge kecil `RENY AMBARWATI`
- **Menu Tengah:**
  - `01. Karya / Works` (`#works`)
  - `02. Keahlian / Expertise` (`#about`)
  - `03. Perjalanan / Journey` (`#journey`)
  - `04. Kontak / Contact` (`#contact`)
- **Kontrol Kanan:**
  - Language Toggle: `ID` | `EN`
  - Theme Toggle: `☀️` / `🌙`
  - CTA Button (Maroon): `Unduh CV` / `Download CV` (mengarah ke `/CV_Reny_Ambarwati.pdf`)

---

### B. HERO SECTION (Gabungan Faliq + Renando)
- **Status Pill (Atas):**  
  - 🟢 **ID:** `BERSEDIA UNTUK KOLABORASI`  
  - 🟢 **EN:** `AVAILABLE COLLABORATION`
- **Greeting & Headline:**
  - **ID:** `Halo, saya RENY AMBARWATI.`  
    **Sub-Headline:** `FULL-STACK WEB DEVELOPER & COMPUTER VISION ENGINEER`  
    **Tagline Editorial:** *"Membangun sistem web yang skalabel dan visi cerdas untuk mesin otonom."*  
    **Deskripsi:** *"Mahasiswa Semester 5 Sarjana Terapan Teknik Informatika di Politeknik Negeri Malang (IPK 3.70/4.00). Menggabungkan rekayasa web (Laravel, PostgreSQL) dengan kecerdasan buatan real-time (YOLOv8, ROS 2, Edge AI Optimization)."*
  - **EN:** `Hello, I'm RENY AMBARWATI.`  
    **Sub-Headline:** `FULL-STACK WEB DEVELOPER & COMPUTER VISION ENGINEER`  
    **Tagline Editorial:** *"Engineering scalable web ecosystems and real-time intelligence for autonomous systems."*  
    **Deskripsi:** *"5th-Semester Informatics Engineering Undergraduate at Politeknik Negeri Malang (GPA 3.70/4.00). Bridging robust full-stack web architecture (Laravel, PostgreSQL) with edge-optimized computer vision (YOLOv8, ROS 2)."*
- **Hero Framing untuk Foto Profil (`profile.jpg`):**
  - Bingkai foto memiliki *radial glow* warna **Maroon (`#7A1C29`)** lembut dan aksen bingkai **Warm Cream (`#FAF6F0`)** serta badge mengambang (*floating badge*):
    - Badge 1 (Kiri Bawah): `🤖 Finalis Nasional KRAI 2026` / `🤖 KRAI 2026 National Finalist`
    - Badge 2 (Kanan Atas): `⚡ Full-Stack & Edge AI`
- **Quick Stats Bar (Gaya Renando):**
  1. **`3.70 / 4.00`** — *IPK Saat Ini / Current GPA (Polinema)*
  2. **`5+`** — *Proyek Produksi & Riset AI / Web & AI Research Projects*
  3. **`Nasional`** — *Finalis KRAI 2026 (ABUROBONEMA) / National Robotics Finalist*
  4. **`2 Bidang`** — *Full-Stack Web & Computer Vision / Dual Core Specialization*

---

### C. SECTION `01 / SELECTED WORK` (KARYA & RISET UNGGULAN)
- **Judul Seksi:**
  - **ID:** `01 / KARYA UNGGULAN — KODE & RISET YANG BERDAMPAK.`
  - **EN:** `01 / SELECTED WORK — CODE & RESEARCH THAT DELIVER IMPACT.`
- **Filter Tabs:** `Semua / All` | `AI & Computer Vision` | `Full-Stack Web` | `Robotics & Edge AI`

#### Daftar 5 Proyek (Sesuai CV):

1. **ABUROBONEMA — Autonomous Robot Computer Vision & HMI (KRAI 2026)**
   - **Category:** `Robotics & Edge AI` | `AI & Computer Vision`
   - **Role:** Software Engineer (Computer Vision & Edge Deployment)
   - **Achievement Badge:** 🏆 Finalis Tingkat Nasional KRAI 2026
   - **GitHub Link:** `https://github.com/Renyambar/abu-riset`
   - **Tech Stack:** `YOLOv8`, `ROS 2 Humble`, `TensorRT`, `NCNN`, `OpenVINO INT8`, `Roboflow`, `Google Colab`, `Python`
   - **Deskripsi (ID):** Merancang sistem deteksi objek real-time pada robot otonom menggunakan YOLOv8 terintegrasi ROS 2 Humble serta membangun antarmuka kontrol HMI. Mengoptimasi FPS pada perangkat keras terbatas melalui konversi TensorRT, migrasi NCNN, kuantisasi OpenVINO INT8, dan model pruning.
   - **Deskripsi (EN):** Engineered real-time object detection for autonomous robots using YOLOv8 integrated with ROS 2 Humble alongside a custom HMI control display. Maximized edge FPS via TensorRT conversion, NCNN migration, OpenVINO INT8 quantization, and model pruning.

2. **Sistem Early Warning Perilaku Pegawai Berbasis AI (Program Hilirisasi Riset 2026)**
   - **Category:** `AI & Computer Vision`
   - **Role:** Research Assistant (Computer Vision & Machine Learning)
   - **Achievement Badge:** 🔒 Proyek Riset Hilirisasi Polinema (Under NDA)
   - **GitHub Link:** `Private / Under NDA` (Tampilkan tombol badge *"Protected Under NDA"*)
   - **Tech Stack:** `Python`, `Deep Learning`, `Video Analytics`, `Label Studio`, `Roboflow`, `Google Colab`, `OpenCV`
   - **Deskripsi (ID):** Terlibat dalam penelitian dosen untuk sistem peringatan dini perilaku pegawai berbasis analisis video kecerdasan buatan pada Command Center. Bertanggung jawab atas persiapan dataset pengawasan, anotasi presisi tinggi di Label Studio & Roboflow, serta pelatihan dan evaluasi model Deep Learning di Google Colab.
   - **Deskripsi (EN):** Contributed to an institutional AI video analytics research project for command center employee behavior early warning. Managed surveillance dataset pipelines, high-precision labeling via Label Studio & Roboflow, and deep learning model training on Google Colab.

3. **SkillKul — Platform Marketplace Jasa Freelance Mahasiswa**
   - **Category:** `Full-Stack Web`
   - **Role:** Full-Stack Web Developer
   - **Achievement Badge:** 💼 Project-Based Learning (PBL)
   - **GitHub Link:** `https://github.com/Renyambar/Skillkul_PBL`
   - **Tech Stack:** `PHP`, `Laravel`, `Tailwind CSS`, `PostgreSQL`, `Midtrans API`, `DomPDF`, `REST API`
   - **Deskripsi (ID):** Membangun aplikasi web marketplace end-to-end yang mempertemukan freelancer mahasiswa dengan klien. Dilengkapi manajemen pesanan, integrasi pembayaran otomatis real-time via REST API Midtrans Payment Gateway, serta pencetakan invoice/laporan PDF otomatis dengan DomPDF.
   - **Deskripsi (EN):** Built an end-to-end student freelance marketplace web platform using Laravel, Tailwind CSS, and PostgreSQL. Integrated Midtrans Payment Gateway REST API for automated real-time payment verification and DomPDF for dynamic invoice generation.

4. **Sistem Informasi Profil Laboratorium Mobile & Multimedia (Lab MMT)**
   - **Category:** `Full-Stack Web`
   - **Role:** Full-Stack Web Developer
   - **Achievement Badge:** 🏛️ Portal Laboratorium Polinema
   - **GitHub Link:** `https://github.com/Renyambar/PBL_LabMMT`
   - **Tech Stack:** `PHP`, `Laravel`, `Tailwind CSS`, `PostgreSQL`, `CMS Architecture`
   - **Deskripsi (ID):** Mengembangkan portal profil resmi dan Content Management System (CMS) untuk menampilkan fasilitas, riset, dan agenda kegiatan Laboratorium Mobile dan Multimedia Politeknik Negeri Malang dengan database relasional PostgreSQL.
   - **Deskripsi (EN):** Developed an official profile portal and Content Management System (CMS) to showcase facilities, research outputs, and activities for the Mobile and Multimedia Laboratory at Politeknik Negeri Malang backed by PostgreSQL.

5. **CapSee — Proyek Capstone Aplikasi Mobile Berbasis AI**
   - **Category:** `AI & Computer Vision`
   - **Role:** Machine Learning & Computer Vision Engineer
   - **Achievement Badge:** 📱 Capstone Project Semester 5
   - **GitHub Link:** `https://github.com/Adhityayusuf/capsee`
   - **Tech Stack:** `Python`, `TensorFlow`, `PyTorch`, `OpenCV`, `Google Colab`, `Flutter`
   - **Deskripsi (ID):** Merancang arsitektur Machine Learning dan Computer Vision pada proyek kolaborasi tim, mulai dari pengolahan citra (OpenCV), eksperimen pelatihan model di Google Colab, hingga integrasi inferensi model ke aplikasi mobile.
   - **Deskripsi (EN):** Designed the Machine Learning and Computer Vision pipeline within a collaborative capstone team, covering image preprocessing with OpenCV, model training in Google Colab, and mobile inference integration.

---

### D. SECTION `02 / BEHIND THE CODE` (KEAHLIAN TEKNIS & ALUR KERJA)
- **Judul Seksi:**
  - **ID:** `02 / DI BALIK BARIS KODE — ARSITEKTUR WEB & VISI KOMPUTER.`
  - **EN:** `02 / BEHIND THE CODE — WEB ARCHITECTURE & MACHINE PERCEPTION.`
- **5 Kelompok Keahlian (Sesuai CV):**
  1. **Bahasa Pemrograman / Languages:** `Python`, `PHP`, `JavaScript`, `Java`, `Dart`, `SQL (PostgreSQL)`
  2. **Web & Mobile Development:** `Laravel`, `Tailwind CSS`, `HTML5`, `CSS3`, `REST API`, `Flutter`, `Midtrans API`, `DomPDF`
  3. **AI, Computer Vision & Robotika:** `YOLOv8`, `YOLOv10`, `OpenCV`, `TensorFlow`, `PyTorch`, `ROS 2 Humble`, `TensorRT`, `OpenVINO (INT8 Quantization)`, `NCNN`, `Model Pruning`, `Roboflow`, `Label Studio`
  4. **Data & Business Intelligence:** `PostgreSQL`, `Data Warehouse (Star Schema)`, `ETL (Pentaho Data Integration)`, `Power BI`, `Data Analysis & Visualization`
  5. **Tools & Sistem Operasi:** `Git`, `GitHub`, `Google Colab`, `Docker`, `Linux (Ubuntu)`, `WSL`, `VS Code`
- **4 Langkah Workflow ("From Concept to Deployment" — Gaya Renando):**
  - `01 / PROBLEM & DATA CURATION` — Analisis kebutuhan sistem, perancangan skema database PostgreSQL atau kurasi & anotasi dataset di Roboflow/Label Studio.
  - `02 / ARCHITECTURE & TRAINING` — Pengembangan backend Laravel / pelatihan model Deep Learning (YOLO/PyTorch) di Google Colab.
  - `03 / EDGE & API OPTIMIZATION` — Integrasi REST API (Midtrans/DomPDF) atau kuantisasi model (TensorRT, OpenVINO INT8, NCNN, Pruning) untuk memaksimalkan FPS.
  - `04 / DEPLOYMENT & MONITORING` — Integrasi ke node ROS 2 Humble / HMI robot atau deployment web produksi & visualisasi Power BI.

---

### E. SECTION `03 / THE JOURNEY` (PENDIDIKAN, RISET & ORGANISASI)
- **Judul Seksi:**
  - **ID:** `03 / PERJALANAN — AKADEMIK, RISET & ORGANISASI.`
  - **EN:** `03 / THE JOURNEY — ACADEMICS, RESEARCH & LEADERSHIP.`
- **Timeline Items:**
  1. **`2026 – Sekarang / Present`** | **Research Assistant (Computer Vision & ML)** — *Program Hilirisasi Riset Politeknik Negeri Malang* (Sistem Early Warning Perilaku Pegawai pada Command Center - NDA).
  2. **`Agu 2025 – Sekarang / Present`** | **Software Division (Computer Vision & Edge Deployment)** — *Tim Robotika ABUROBONEMA (Finalis Nasional KRAI 2026)*.
  3. **`Agu 2024 – Sekarang / Present`** | **Sarjana Terapan (D4) Teknik Informatika** — *Politeknik Negeri Malang* (Semester 5 | IPK: 3.70 / 4.00).
  4. **`Jun 2026`** | **Panitia Divisi Kesekretariatan** — *Play IT! 2026 (Kompetisi Teknologi Nasional Polinema)*.
  5. **`2024 – 2025`** | **Anggota Mini Class Web Development (2 Semester)** — *Workshop Riset Informatika (WRI) Polinema*.

---

### F. SECTION `04 / LET'S WORK TOGETHER` (KONTAK & QUICK BRIEF)
- **Judul Seksi:**
  - **ID:** `04 / KOLABORASI — SIAP BERKONTRIBUSI DI TIM ANDA.`
  - **EN:** `04 / LET'S CONNECT — READY TO CONTRIBUTE TO YOUR TEAM.`
- **Informasi Kontak:**
  - **Lokasi:** Malang, Jawa Timur, Indonesia
  - **Email:** `ambarwatireny73@gmail.com`
  - **GitHub:** `https://github.com/Renyambar`
  - **LinkedIn:** `https://linkedin.com/in/renyambarwati`
  - **Web:** `https://minipaoo.web.id`
- **Interactive Contact Card:**
  - Pilihan Topik (Pills): `Internship Opportunity` | `Full-Stack Web Project` | `Computer Vision & AI` | `General Discussion`
  - Input: Nama, Email/Instansi, Pesan Singkat
  - Tombol Aksi: **Kirim via Email (`mailto:`)** dan **Lanjut ke WhatsApp (`https://wa.me/6285798475896?text=...`)**