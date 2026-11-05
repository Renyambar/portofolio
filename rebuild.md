REBUILD & REDESIGN TOTAL HALAMAN INI DENGAN ATURAN KETAT BERIKUT:

===================================================================
1. ATURAN DESAIN NUTLOPE/HALLMARK (ANTI-AI-SLOP FLOOR & REFLEX GATES)
===================================================================
Terapkan prinsip desain `Nutlope/hallmark` (Editorial / Studio Material). DILARANG KERAS membuat tampilan "AI Slop":
- NO EYEBROW TAGS: Jangan taruh label huruf kapital kecil (tracked-caps/pill badge) tepat di atas setiap judul/heading.
- NO SINGLE COLORED WORD: Jangan mewarnai atau memberi gradasi hanya pada satu kata di dalam kalimat judul/headline.
- NO NEON / GLOW BORDERS: Dilarang memakai efek neon menyala, gradasi pelangi/ungu, glassmorphism berlebihan, atau floating blobs yang bikin sakit mata.
- NO INVENTED FEATURES: Hapus semua fitur karangan AI (skill progress bar persentase, angka statistik palsu, testimoni, form input pesan palsu, atau newsletter).
- THE FLOOR RULE: Kontras teks harus tajam dan nyaman di mata (WCAG AA compliant), banyak ruang kosong bernapas (generous whitespace), border tipis 1px yang tenang, dan layout mobile 100% rapi tanpa horizontal scroll bocor.

Palet Warna Material (Warm Editorial & Deep Maroon):
- LIGHT MODE (Default):
  * Background Utama: Warm Paper / Ivory (#FAF7F2)
  * Permukaan Card: Pure Cream (#FFFFFF) dengan border tipis 1px solid (#E6DFD5)
  * Teks Utama: Deep Charcoal (#181616) | Teks Sekunder: Warm Muted Grey (#5C5552)
  * Aksen Utama (Tombol/Highlight): Editorial Maroon (#7C1D2D)
- DARK MODE:
  * Background Utama: Matte Carbon (#121111)
  * Permukaan Card: Dark Surface (#1A1818) dengan border tipis 1px solid (#2C2727)
  * Teks Utama: Warm Off-White (#F4EFEA) | Teks Sekunder: Muted Stone (#A39B98)
  * Aksen Utama: Muted Crimson (#A8283D)

Tipografi:
- Heading: Serif editorial berkarakter atau Sans-serif tegas ('Instrument Serif', 'Playfair Display', atau 'Plus Jakarta Sans' SemiBold) tanpa efek warna-warni.
- Body: 'Inter' atau 'Plus Jakarta Sans' dengan line-height 1.65 yang nyaman dibaca.
- Monospace (khusus tech stack & tabel skill): 'JetBrains Mono' ukuran kecil yang rapi.

===================================================================
2. TATA LETAK HERO SECTION (CENTERED PORTRAIT TANPA BACKGROUND)
===================================================================
Buat Hero Section dengan layout Rata Tengah (Centered Editorial Layout):
- Urutan vertikal di tengah layar:
  1) Nama Besar & Tegas: "Reny Ambarwati" (dan nama panggilan "minipaoo" secara halus).
  2) Peran: "Full-Stack Web Developer & Computer Vision Engineer"
  3) FOTO PROFIL DI TENGAH (Centered Cutout Portrait):
     - Siapkan wadah gambar di tengah untuk file `/profile.png` (foto transparan tanpa background).
     - Berikan latar bentuk arch/frame organik yang sangat lembut di belakang foto menggunakan warna aksen Maroon/Warm Stone tipis (bukan neon glow) sehingga potongan badan tanpa background terlihat menyatu secara elegan di Light maupun Dark Mode.
  4) Paragraf Pengantar Singkat (maksimal 2-3 kalimat di bawah foto, rata tengah, lebar maksimal 620px).
  5) Dua Tombol Aksi (CTA) di tengah:
     - Tombol Utama (Solid Maroon): "Lihat CV (Google Drive) ↗" -> Mengarah ke URL Google Drive (buka di tab baru: `target="_blank" rel="noopener noreferrer"`, BUKAN atribut `download` lokal). Gunakan placeholder link `https://drive.google.com/file/d/ISI_LINK_GDRIVE_CV_DISINI/view?usp=sharing` agar mudah saya ganti.
     - Tombol Sekunder (Outline tipis): "Hubungi Saya" -> Scroll halus ke bagian kontak.

===================================================================
3. STRUKTUR HALAMAN & KONTEN RESMI (BAHASA NATURAL LINKEDIN & CV)
===================================================================
Halaman hanya boleh memiliki 6 bagian ini (terapkan fitur dwibahasa ID / EN menggunakan teks persis di bawah ini, jangan mengarang kalimat baru):

[BAGIAN 1: NAVBAR]
- Kiri: `minipaoo.`
- Tengah/Kanan: Navigasi (`Tentang`, `Pengalaman`, `Proyek`, `Keahlian`, `Kontak`), Toggle Bahasa (`ID | EN`), dan Toggle Tema (`Light / Dark`).

[BAGIAN 2: TENTANG / RINGKASAN (Gunakan Bahasa Natural LinkedIn)]
- Versi ID:
  "Mahasiswa semester 5 D4 Teknik Informatika di Politeknik Negeri Malang (IPK: 3.70/4.00) dengan fokus pada Full-Stack Web Development, Computer Vision, dan Machine Learning. Di bidang web, saya membangun aplikasi end-to-end menggunakan PHP (Laravel), Tailwind CSS, dan PostgreSQL. Di bidang AI dan robotika, saya tergabung di divisi software tim robotika ABUROBONEMA (Finalis Nasional KRAI 2026), menangani sistem deteksi objek YOLOv8, integrasi ROS 2 Humble, tampilan kontrol HMI, hingga optimasi model (TensorRT, NCNN, OpenVINO INT8) pada edge device. Selain itu, saya juga terbiasa menggunakan Python, Data Warehouse (ETL Pentaho), serta Power BI."
- Versi EN:
  "Informatics Engineering student at Politeknik Negeri Malang (Semester 5, GPA: 3.70/4.00) focusing on Full-Stack Web Development, Computer Vision, and Machine Learning. In web development, I build end-to-end applications using PHP (Laravel), Tailwind CSS, and PostgreSQL. In Computer Vision and Robotics, I am part of the software division at ABUROBONEMA (KRAI 2026 National Finalist), handling YOLOv8 object detection, ROS 2 Humble integration, custom HMI control displays, and edge model optimization (TensorRT, NCNN, OpenVINO INT8). Beyond web and vision, I also work with Python, Data Warehousing (Pentaho ETL), and Power BI."

[BAGIAN 3: PENGALAMAN & RISET (Hanya 2 Item Ini)]
1) Research Assistant – Computer Vision & Machine Learning
   - Instansi: Politeknik Negeri Malang | Periode: 2026 – Sekarang
   - Deskripsi (ID): Terlibat dalam Program Hilirisasi Riset 2026: "Sistem Early Warning terhadap Perilaku Pegawai Menggunakan Analisis Video Berbasis Kecerdasan Buatan pada Command Center" (Proyek NDA). Menyiapkan pipeline dataset video pengawasan, melakukan anotasi objek/perilaku secara presisi menggunakan Label Studio dan Roboflow, serta menjalankan eksperimen training dan evaluasi model Deep Learning di Google Colab untuk deteksi real-time.
   - Deskripsi (EN): Involved in the 2026 Applied Research Downstream Program: "AI-Based Video Analytics Early Warning System for Employee Behavior Monitoring in Command Centers" (Project under NDA). Built surveillance video dataset pipelines, performed high-precision annotation using Label Studio and Roboflow, and conducted deep learning model training and evaluation on Google Colab for real-time video inference.

2) Anggota Divisi Software – Computer Vision & Edge Deployment
   - Instansi: Tim Robotika ABUROBONEMA (Polinema) | Periode: Agu 2025 – Sekarang
   - Pencapaian: Finalis Tingkat Nasional Kontes Robot ABU Indonesia (KRAI) 2026
   - Deskripsi (ID): Merancang sistem deteksi objek dan estimasi posisi real-time pada robot otonom menggunakan YOLOv8 dan OpenCV (dataset dikelola di Roboflow, dilatih di Google Colab) yang terintegrasi dengan ROS 2 Humble. Mengembangkan antarmuka kontrol (HMI) untuk pemantauan kamera di lapangan, serta mengatasi keterbatasan perangkat keras pada edge device melalui konversi TensorRT, migrasi NCNN, kuantisasi OpenVINO INT8, dan model pruning agar FPS tetap tinggi dan stabil.
   - Deskripsi (EN): Designed and deployed real-time object detection for autonomous robots using YOLOv8 and OpenCV integrated with ROS 2 Humble. Developed a custom HMI control display for live field monitoring, and solved edge hardware bottlenecks by converting and benchmarking models across TensorRT, NCNN, and OpenVINO INT8 quantization with model pruning to maintain high, stable FPS.
   - Link Repo: https://github.com/Renyambar/abu-riset

[BAGIAN 4: PROYEK PILIHAN (Hanya 3 Proyek Ini + Tech Stack)]
1) SkillKul – Platform Marketplace Jasa Freelance Mahasiswa (Proyek PBL)
   - Tahun: 2026 | Stack: Laravel, Tailwind CSS, PostgreSQL, Midtrans REST API, DomPDF
   - Deskripsi (ID): Aplikasi web marketplace untuk mempertemukan mahasiswa penyedia jasa freelance dengan klien. Membangun sistem full-stack mencakup autentikasi multi-peran, katalog jasa, pelacakan pesanan, integrasi pembayaran otomatis via REST API Midtrans, serta pencetakan invoice dan portofolio PDF otomatis menggunakan DomPDF.
   - Deskripsi (EN): Full-stack web marketplace connecting university student freelancers with clients. Built multi-role authentication, service catalogs, order workflows, automated real-time payment verification via Midtrans REST API, and dynamic PDF invoice generation using DomPDF.
   - Link GitHub: https://github.com/Renyambar/Skillkul_PBL

2) Sistem Informasi Profil Lab Mobile & Multimedia (Proyek PBL)
   - Tahun: 2025 – 2026 | Stack: Laravel, Tailwind CSS, PostgreSQL
   - Deskripsi (ID): Portal profil resmi dan Content Management System (CMS) untuk Laboratorium Mobile dan Multimedia Polinema. Mengembangkan halaman publik responsif, dashboard admin, serta struktur database PostgreSQL untuk mengelola data fasilitas riset, publikasi karya, dan agenda kegiatan lab secara mandiri.
   - Deskripsi (EN): Official profile portal and CMS for the Mobile and Multimedia Laboratory at Polinema. Developed responsive public pages, a role-protected admin dashboard, and a PostgreSQL relational schema to manage lab facilities, research publications, and schedules dynamically.
   - Link GitHub: https://github.com/Renyambar/PBL_LabMMT

3) CapSee – Aplikasi Mobile Berbasis AI (Proyek Capstone Semester 5)
   - Tahun: 2026 – Sekarang | Stack: Python, OpenCV, PyTorch, TensorFlow, Google Colab, Flutter
   - Deskripsi (ID): Proyek kolaborasi aplikasi mobile yang terintegrasi dengan Computer Vision. Bertanggung jawab pada persiapan dataset, pengolahan citra (OpenCV), pelatihan model Deep Learning di Google Colab, serta integrasi inferensi model ke aplikasi Flutter.
   - Deskripsi (EN): Collaborative capstone project developing an AI-powered mobile application. Handled the ML/Computer Vision pipeline including dataset preparation, image preprocessing with OpenCV, model training on Google Colab, and inference integration with the Flutter client.
   - Link GitHub: https://github.com/Adhityayusuf/capsee

[BAGIAN 5: KEAHLIAN TEKNIS & TOOLS LENGKAP (Tampilkan Sebagai Tabel/Bento Grid Editorial 6 Kategori Tanpa Progress Bar)]
Tampilkan keahlian teknis berikut secara terstruktur dengan deskripsi singkat cakupan penggunaannya:

1) Bahasa Pemrograman (Programming Languages)
   - Items: Python, PHP, JavaScript, SQL, Dart, Java, C/C++
   - Fokus (ID): Pengembangan backend, skrip pemodelan AI/Computer Vision, dan logika aplikasi lintas platform.
   - Fokus (EN): Backend development, AI/Computer Vision scripting, and cross-platform application logic.

2) Pengembangan Web & Mobile (Web & Mobile Engineering)
   - Items: Laravel (MVC), Django (Fundamental), Tailwind CSS, HTML5, CSS3, Blade Templating, RESTful API, Midtrans Payment Gateway API, DomPDF, Flutter
   - Fokus (ID): Arsitektur full-stack MVC, manajemen autentikasi multi-peran (RBAC), integrasi payment gateway, otomatisasi dokumen PDF, dan UI responsif.
   - Fokus (EN): Full-stack MVC architecture, role-based access control (RBAC), payment gateway integration, automated PDF reporting, and responsive UI.

3) Computer Vision & Machine Learning
   - Items: YOLOv8 / YOLOv10, OpenCV, PyTorch, TensorFlow, Scikit-learn (k-NN, CountVectorizer), Roboflow, Label Studio, Google Colab
   - Fokus (ID): Deteksi objek real-time, estimasi koordinat spasial, image preprocessing, ekstraksi frame video, kurasi & anotasi dataset presisi, serta pelatihan dan evaluasi metrik model (mAP, Precision, Recall).
   - Fokus (EN): Real-time object detection, spatial coordinate estimation, image preprocessing, video frame extraction, dataset curation & annotation, and model training/evaluation.

4) Robotika & Optimasi Edge AI (Robotics & Edge Deployment)
   - Items: ROS 2 Humble, TensorRT, Intel OpenVINO (INT8 Quantization), NCNN, ONNX, Model Pruning, Custom HMI / Control Display, NVIDIA Jetson Deployment
   - Fokus (ID): Komunikasi node sensor/kamera pada robot otonom, kompresi model deep learning, dan akselerasi inferensi hardware untuk mencapai FPS tinggi pada perangkat edge terbatas.
   - Fokus (EN): Sensor/camera node communication for autonomous robots, deep learning model compression, and hardware inference acceleration for high FPS on edge devices.

5) Basis Data, Data Warehouse & Business Intelligence
   - Items: PostgreSQL, MySQL, Relational Database Design (ERD & Normalization), Data Warehouse (Star Schema), Pentaho Data Integration (PDI Spoon / ETL), Microsoft Power BI
   - Fokus (ID): Perancangan skema database relasional, optimasi query SQL, pemrosesan pipeline ETL (Extract, Transform, Load), dan pembuatan dashboard analitik interaktif.
   - Fokus (EN): Relational database schema design, SQL query optimization, ETL pipeline processing, and interactive analytical dashboard creation.

6) DevOps, Sistem Operasi & Perangkat Pengembangan (Tools & Workflow)
   - Items: Git, GitHub, Docker, Linux (Ubuntu 22.04 LTS), Windows Subsystem for Linux (WSL), Visual Studio Code, Laragon, Vercel (CI/CD), Postman
   - Fokus (ID): Manajemen version control kolaboratif, kontainerisasi lingkungan pengembangan, pengelolaan sistem dual-boot Linux/Windows, dan deployment berkelanjutan.
   - Fokus (EN): Collaborative version control, development environment containerization, Linux/Windows workflow management, and continuous deployment.

[BAGIAN 6: KONTAK & FOOTER]
- Tampilkan link bersih yang langsung bisa diklik:
  * Lihat CV (Google Drive) ↗
  * GitHub: github.com/Renyambar
  * LinkedIn: linkedin.com/in/renyambarwati
  * Email & WhatsApp