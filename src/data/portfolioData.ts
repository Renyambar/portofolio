import { ProjectItem, ExperienceItem, MilestoneItem } from '../types';

export const PERSONAL_INFO = {
  name: 'RENY AMBARWATI.',
  greeting: "Hello, I'm",
  brand: 'RENY AMBARWATI',
  metaTopLeft: 'FULL-STACK WEB & ML/Computer Vision ENGINEER',
  metaTopCenter: {
    id: 'AVAILABLE FOR COLLABORATION',
    en: 'AVAILABLE FOR COLLABORATION',
  },
  metaTopRight: 'MALANG, INDONESIA',
  subRole: 'FULL-STACK WEB DEVELOPER & COMPUTER VISION',
  heroNarrative: {
    id: 'Membangun sistem. Menciptakan solusi cerdas. Saya mengubah kebutuhan bisnis dan data visual menjadi aplikasi web dan model AI yang bekerja nyata.',
    en: 'Engineering systems. Building intelligent vision. I turn complex requirements and visual data into production-ready web apps and AI models.',
  },
  heroStats: [
    {
      value: '3.70',
      label: {
        id: 'IPK D4 TEKNIK INFORMATIKA',
        en: 'CURRENT GPA D4 INFORMATICS',
      },
    },
    {
      value: '4+',
      label: {
        id: 'PROYEK WEB, MOBILE & ROBOTIKA',
        en: 'WEB, MOBILE & ROBOTICS PROJECTS',
      },
    },
  ],
  cvGdriveUrl: 'https://drive.google.com/file/d/11a3tS9ziYoDESwsthYmG3Z5fGilTXwVX/view?usp=sharing',
  profileImage: '/profile.png',
  email: 'ambarwatireny73@gmail.com',
  whatsappNumber: '+62 857-9847-5896',
  whatsappUrl: 'https://wa.me/6285798475896',
  githubUrl: 'https://github.com/Renyambar',
  githubHandle: 'github.com/Renyambar',
  linkedinUrl: 'www.linkedin.com/in/reny-ambarwati-747744323',
  linkedinHandle: 'linkedin.com/in/renyambarwati',
  instagramUrl: 'https://instagram.com/ambarny_wt',
  instagramHandle: 'instagram.com/ambarny_wt',
  basedIn: {
    id: 'Malang, Jawa Timur, Indonesia',
    en: 'Malang, East Java, Indonesia',
  },
  domain: 'renyambarwati.dev',
};

export const NAV_LINKS = [
  { href: '#about', label: { id: 'Tentang', en: 'About' } },
  { href: '#works', label: { id: 'Proyek', en: 'Projects' } },
  { href: '#journey', label: { id: 'Pengalaman', en: 'Experiences' } },
  { href: '#skills', label: { id: 'Keahlian', en: 'Skills' } },
  { href: '#contact', label: { id: 'Kontak', en: 'Contact' } },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'skillkul',
    index: '01',
    category: 'Web Development',
    year: '2026',
    title: 'SKILLKUL – FREELANCE MARKETPLACE',
    subtitle: 'FULL-STACK WEB / 2026',
    description: {
      id: 'Platform marketplace web end-to-end yang mempertemukan mahasiswa penyedia jasa freelance dengan klien. Dilengkapi autentikasi multi-peran, katalog jasa, pelacakan pesanan, integrasi pembayaran otomatis via REST API Midtrans, serta pencetakan invoice dan portofolio PDF otomatis menggunakan DomPDF.',
      en: 'End-to-end web marketplace connecting student freelancers with clients. Features multi-role authentication, service catalogs, order tracking, real-time automated payment verification via Midtrans REST API, and dynamic PDF invoice generation using DomPDF.',
    },
    techStack: ['Laravel', 'Tailwind CSS', 'PostgreSQL', 'Midtrans API', 'DomPDF'],
    githubUrl: 'https://github.com/Renyambar/Skillkul_PBL',
    role: {
      id: 'Full-Stack Web Developer (Project-Based Learning)',
      en: 'Full-Stack Web Developer (Project-Based Learning)',
    },
    gallery: [
      {
        src: '/projects/skillkul/1.png',
        caption: {
          id: 'Landing Page & Katalog Jasa Mahasiswa',
          en: 'Landing Page & Student Services Catalog',
        },
      },
      {
        src: '/projects/skillkul/2.png',
        caption: {
          id: 'Integrasi REST API Midtrans Payment Gateway',
          en: 'Midtrans Payment Gateway REST API Integration',
        },
      },
      {
        src: '/projects/skillkul/3.png',
        caption: {
          id: 'Dashboard Pesanan & Cetak Invoice PDF DomPDF',
          en: 'Order Dashboard & Dynamic DomPDF Invoice Generation',
        },
      },
    ],
    overview: {
      id: 'Platform marketplace web end-to-end yang dirancang untuk menjembatani mahasiswa penyedia jasa freelance dengan klien secara aman dan terstruktur.',
      en: 'End-to-end web marketplace designed to connect university student freelancers with clients through a structured and secure workflow.',
    },
    features: {
      id: [
        'Autentikasi multi-peran (Mahasiswa/Freelancer, Klien, Admin) dan manajemen katalog portofolio jasa.',
        'Perancangan skema database relasional PostgreSQL untuk melacak tahapan proyek, transaksi, dan ulasan.',
        'Integrasi REST API Midtrans Payment Gateway untuk verifikasi status pembayaran otomatis secara real-time.',
        'Otomatisasi pencetakan dokumen invoice transaksi dan portofolio mahasiswa ke format PDF menggunakan DomPDF.',
      ],
      en: [
        'Multi-role authentication (Freelancer, Client, Admin) and service catalog management.',
        'Normalized PostgreSQL database schema handling order lifecycles, project milestones, and transaction logs.',
        'Real-time payment processing and automated status verification via Midtrans Payment Gateway REST API.',
        'Automated PDF generation for order invoices and student portfolios using DomPDF.',
      ],
    },
  },
  {
    id: 'lab-mmt',
    index: '02',
    category: 'Web Development',
    year: '2025–2026',
    title: 'PORTAL & CMS LAB MOBILE MULTIMEDIA',
    subtitle: 'INFORMATION SYSTEM / 2026',
    description: {
      id: 'Portal profil resmi dan Content Management System (CMS) untuk Laboratorium Mobile dan Multimedia Polinema. Mengembangkan halaman publik responsif, dashboard admin, serta struktur database PostgreSQL untuk mengelola fasilitas riset, publikasi karya, dan agenda lab.',
      en: 'Official profile portal and CMS for the Mobile & Multimedia Lab at Polinema. Built responsive public pages, a role-protected admin dashboard, and a PostgreSQL relational schema to manage lab facilities, research posts, and schedules.',
    },
    techStack: ['Laravel', 'Tailwind CSS', 'PostgreSQL', 'Blade CMS'],
    githubUrl: 'https://github.com/Renyambar/PBL_LabMMT',
    role: {
      id: 'Full-Stack Web Developer (Project-Based Learning)',
      en: 'Full-Stack Web Developer (Project-Based Learning)',
    },
    gallery: [
      {
        src: '/projects/labmmt/1.png',
        caption: {
          id: 'Halaman Utama Portal Lab MMT Responsif',
          en: 'Responsive Lab MMT Official Public Portal',
        },
      },
      {
        src: '/projects/labmmt/2.png',
        caption: {
          id: 'Katalog Publikasi Riset & Inventaris Fasilitas',
          en: 'Research Publication Catalog & Lab Hardware Inventory',
        },
      },
      {
        src: '/projects/labmmt/3.png',
        caption: {
          id: 'Dashboard CMS Administrator Terproteksi (RBAC)',
          en: 'Role-Protected Admin CMS Dashboard (RBAC)',
        },
      },
    ],
    overview: {
      id: 'Sistem informasi profil resmi dan Content Management System (CMS) untuk mempublikasikan aktivitas riset, inventaris fasilitas, serta kegiatan Laboratorium Mobile dan Multimedia Polinema.',
      en: 'Official profile portal and Content Management System (CMS) showcasing research publications, facilities, and events for the Mobile and Multimedia Lab at Polinema.',
    },
    features: {
      id: [
        'Antarmuka publik yang responsif menggunakan Tailwind CSS dan Laravel Blade templating.',
        'Dashboard administrator terproteksi untuk mengelola berita, jadwal praktikum, dan publikasi riset mahasiswa/dosen.',
        'Struktur database PostgreSQL yang teroptimasi untuk pencarian dan pemfilteran konten laboratorium.',
      ],
      en: [
        'Responsive public web portal built with Tailwind CSS and Laravel Blade templating.',
        'Role-protected admin CMS dashboard for managing lab news, schedules, and academic research publications.',
        'Structured PostgreSQL relational database for fast content filtering and inventory management.',
      ],
    },
  },
  {
    id: 'capsee',
    index: '03',
    category: 'Computer Vision & AI',
    year: '2026',
    title: 'CAPSEE – AI MOBILE CAPSTONE',
    subtitle: 'COMPUTER VISION & MOBILE / 2026',
    description: {
      id: 'Aplikasi mobile berbasis Computer Vision (Proyek Capstone Semester 5). Menangani persiapan dataset, pengolahan citra (OpenCV), pelatihan model Deep Learning (PyTorch/TensorFlow) di Google Colab, serta integrasi inferensi model ke aplikasi Flutter.',
      en: 'AI-powered mobile application capstone project. Handled the ML/Computer Vision pipeline including dataset preparation, image preprocessing with OpenCV, model training on Google Colab, and inference integration with the Flutter app.',
    },
    techStack: ['Python', 'OpenCV', 'PyTorch', 'TensorFlow', 'Google Colab', 'Flutter'],
    githubUrl: 'https://github.com/Adhityayusuf/capsee',
    role: {
      id: 'Machine Learning & Computer Vision Engineer (Capstone Project Semester 5)',
      en: 'Machine Learning & Computer Vision Engineer (Capstone Project Semester 5)',
    },
    gallery: [
      {
        src: '/projects/capsee/1.png',
        caption: {
          id: 'Antarmuka Aplikasi Mobile Flutter',
          en: 'Cross-Platform Flutter Mobile Client',
        },
      },
      {
        src: '/projects/capsee/2.png',
        caption: {
          id: 'Pipeline Preprocessing Citra OpenCV',
          en: 'OpenCV Image Preprocessing Pipeline',
        },
      },
      {
        src: '/projects/capsee/3.png',
        caption: {
          id: 'Hasil Evaluasi & Deteksi Model Deep Learning',
          en: 'Deep Learning Model Evaluation & Visual Inference',
        },
      },
    ],
    overview: {
      id: 'Proyek kolaborasi aplikasi mobile lintas platform yang mengintegrasikan model Computer Vision untuk analisis visual secara langsung dari perangkat pengguna.',
      en: 'Cross-platform mobile capstone project integrating computer vision models for on-device/cloud visual analysis.',
    },
    features: {
      id: [
        'Penyiapan dataset citra, augmentasi data, dan tahapan image preprocessing menggunakan Python dan OpenCV.',
        'Eksperimen pelatihan (training), validasi, dan hyperparameter tuning model Deep Learning (PyTorch/TensorFlow) di Google Colab.',
        'Integrasi endpoint inferensi model ke aplikasi mobile berbasis Flutter agar menghasilkan respons prediksi yang cepat dan akurat.',
      ],
      en: [
        'Image dataset curation, augmentation, and preprocessing pipeline built with Python and OpenCV.',
        'Deep learning model training, validation, and tuning in Google Colab using PyTorch/TensorFlow.',
        'Seamless integration of model inference outputs into the cross-platform Flutter mobile client.',
      ],
    },
  },
  {
    id: 'krai-vision',
    index: '04',
    category: 'Robotics',
    year: '2025–2026',
    title: 'ABU ROBOCON (KRAI 2026) VISION SYSTEM',
    subtitle: 'AUTONOMOUS ROBOTICS & EDGE AI / 2026',
    description: {
      id: 'Sistem deteksi objek real-time dan estimasi koordinat pada robot otonom menggunakan YOLOv8 dan ROS 2 Humble (Finalis Nasional KRAI 2026). Dilengkapi antarmuka kontrol HMI di lapangan serta akselerasi model pada edge device menggunakan TensorRT, NCNN, kuantisasi OpenVINO INT8, dan model pruning.',
      en: 'Real-time object detection and spatial estimation for autonomous robots using YOLOv8 and ROS 2 Humble (KRAI 2026 National Finalist). Includes a custom HMI control interface and edge hardware optimization via TensorRT, NCNN, OpenVINO INT8 quantization, and model pruning.',
    },
    techStack: ['YOLOv8', 'ROS 2 Humble', 'OpenCV', 'TensorRT', 'OpenVINO INT8', 'NCNN'],
    githubUrl: 'https://github.com/Renyambar/abu-riset',
    role: {
      id: 'Software Engineer – Computer Vision & Edge Deployment (Finalis Nasional KRAI 2026)',
      en: 'Software Engineer – Computer Vision & Edge Deployment (KRAI 2026 National Finalist)',
    },
    gallery: [
      {
        src: '/projects/krai/1.png',
        caption: {
          id: 'Deteksi Objek Real-Time YOLOv8 di Lapangan Pertandingan',
          en: 'Real-Time YOLOv8 Field Object Detection',
        },
      },
      {
        src: '/projects/krai/2.png',
        caption: {
          id: 'Antarmuka Kontrol HMI Operator Robot',
          en: 'Custom Operator HMI Control Interface',
        },
      },
      {
        src: '/projects/krai/3.png',
        caption: {
          id: 'Pengujian Komparasi FPS & Kuantisasi INT8 Edge Device',
          en: 'Edge Device FPS Benchmark & INT8 Quantization Matrix',
        },
      },
    ],
    overview: {
      id: 'Sistem persepsi visual dan estimasi posisi real-time untuk robot otonom Tim ABUROBONEMA pada Kontes Robot ABU Indonesia (KRAI) 2026 tingkat nasional.',
      en: 'Real-time visual perception and spatial coordinate estimation system for ABUROBONEMA\'s autonomous robot at the KRAI 2026 National Finals.',
    },
    features: {
      id: [
        'Deteksi objek real-time menggunakan YOLOv8 (manajemen dataset di Roboflow & training di Google Colab) yang terhubung langsung dengan node navigasi ROS 2 Humble.',
        'Pembuatan antarmuka Human-Machine Interface (HMI) / Control Display untuk memantau kamera dan kalibrasi parameter di lapangan pertandingan.',
        'Akselerasi dan kompresi model pada edge hardware melalui konversi TensorRT, migrasi NCNN, kuantisasi OpenVINO INT8, serta model pruning untuk menjaga FPS tetap tinggi.',
      ],
      en: [
        'Real-time YOLOv8 object detection pipeline integrated with ROS 2 Humble navigation nodes.',
        'Custom Human-Machine Interface (HMI) control display for live camera monitoring and field calibration.',
        'Edge AI hardware acceleration using TensorRT conversion, NCNN migration, OpenVINO INT8 quantization, and model pruning for high-FPS inference.',
      ],
    },
  },
];

export const BEHIND_THE_CODE = {
  title: {
    id: 'Profil & Fokus Pengembangan.',
    en: 'Profile & Engineering Focus.',
  },
  paragraphs: {
    id: [
      'Saya Reny Ambarwati, mahasiswa semester 5 Program Studi D4 Teknik Informatika di Politeknik Negeri Malang. Fokus utama saya berada pada persimpangan antara rekayasa perangkat lunak berbasis web dan pengembangan sistem kecerdasan buatan, khususnya di bidang visi komputer (Computer Vision).',
      'Dalam pengembangan perangkat lunak, saya terbiasa merancang dan membangun sistem secara menyeluruh—mulai dari pemodelan struktur basis data, penyusunan logika bisnis di sisi belakang layar, hingga pembuatan antarmuka yang intuitif dan siap memenuhi kebutuhan operasional pengguna.',
      'Di luar pengembangan aplikasi web, saya aktif melakukan riset dan implementasi sistem persepsi visual untuk robot otonom di tim robotika kampus hingga tingkat nasional, serta berkontribusi sebagai asisten peneliti dalam proyek analisis video pintar. Pengalaman menangani berbagai proyek dari tahap perancangan hingga implementasi lapangan membentuk cara kerja saya yang terstruktur, adaptif, dan berorientasi pada solusi nyata.',
    ],
    en: [
      'I am Reny Ambarwati, a 5th-semester Applied Bachelor student in Informatics Engineering at Politeknik Negeri Malang. My core focus lies at the intersection of full-stack web engineering and artificial intelligence, specifically within the field of Computer Vision.',
      'In software development, I am accustomed to building systems end-to-end—from designing structured relational databases and backend business logic to crafting clean, responsive interfaces tailored to real operational needs.',
      'Beyond web applications, I actively develop visual perception systems for autonomous robots in national-level competitions and contribute as a research assistant on intelligent video analytics projects. Working across both software architecture and field deployment has shaped my ability to solve technical problems systematically, adapt quickly, and deliver reliable solutions.',
    ],
  },
  narrative: {
    id: 'Saya Reny Ambarwati, mahasiswa semester 5 Program Studi D4 Teknik Informatika di Politeknik Negeri Malang. Fokus utama saya berada pada persimpangan antara rekayasa perangkat lunak berbasis web dan pengembangan sistem kecerdasan buatan, khususnya di bidang visi komputer (Computer Vision).',
    en: 'I am Reny Ambarwati, a 5th-semester Applied Bachelor student in Informatics Engineering at Politeknik Negeri Malang. My core focus lies at the intersection of full-stack web engineering and artificial intelligence, specifically within the field of Computer Vision.',
  },
  education: [
    {
      institution: 'Politeknik Negeri Malang',
      period: '2024 – Sekarang',
      program: {
        id: 'D4 Teknik Informatika (Semester 5, IPK 3.70/4.00)',
        en: 'Undergraduate Informatics Engineering (Semester 5, GPA 3.70/4.00)',
      },
      focus: {
        id: 'Fokus: Rekayasa Perangkat Lunak, Computer Vision, Machine Learning, & Business Intelligence.',
        en: 'Focus: Software Engineering, Computer Vision, Machine Learning, & Business Intelligence.',
      },
    },
    {
      institution: 'Workshop Riset Informatika (WRI)',
      period: '2024 – 2025',
      program: {
        id: 'Divisi Web Development',
        en: 'Web Development Division',
      },
      focus: {
        id: 'Anggota Mini Class Divisi Web Development (2 Semester). Standar industri arsitektur RESTful API & kolaborasi Git.',
        en: 'Web Development Mini Class Member (2 Semesters). Industry-standard RESTful API architectures & collaborative Git workflows.',
      },
    },
  ],
  toolkit: [
    {
      id: 'languages',
      title: { id: 'Bahasa Pemrograman', en: 'Programming Languages' },
      skills: ['Python', 'PHP', 'JavaScript', 'SQL', 'Dart', 'Java', 'C++'],
    },
    {
      id: 'web-mobile',
      title: { id: 'Web & Mobile Development', en: 'Web & Mobile Engineering' },
      skills: [
        'Laravel (MVC)',
        'Django (Fundamental)',
        'Tailwind CSS',
        'HTML5',
        'CSS3',
        'REST API',
        'Midtrans API',
        'DomPDF',
        'Flutter',
      ],
    },
    {
      id: 'cv-ml',
      title: { id: 'Computer Vision & Machine Learning', en: 'Computer Vision & Machine Learning' },
      skills: [
        'YOLOv8/v10',
        'OpenCV',
        'PyTorch',
        'TensorFlow',
        'Scikit-learn',
        'Roboflow',
        'Label Studio',
        'Google Colab',
      ],
    },
    {
      id: 'robotics-edge',
      title: { id: 'Robotics & Model Optimization', en: 'Robotics & Model Optimization' },
      skills: [
        'ROS 2 Humble',
        'TensorRT',
        'Intel OpenVINO',
        'NCNN',
        'ONNX',
        'Model Pruning',
        'Custom HMI Control Display',
      ],
    },
    {
      id: 'database-bi',
      title: { id: 'Database, Data Warehouse & BI', en: 'Database, Data Warehouse & BI' },
      skills: [
        'PostgreSQL',
        'MySQL',
        'ERD & Relational Schema',
        'Data Warehouse',
        'Pentaho Data Integration',
        'Microsoft Power BI',
      ],
    },
    {
      id: 'devops-env',
      title: { id: 'DevOps & Environment', en: 'DevOps & Environment' },
      skills: [
        'Git',
        'GitHub',
        'Docker',
        'Linux (Ubuntu 22.04)',
        'VS Code',
        'Laragon',
        'Vercel CI/CD',
      ],
    },
  ],
  workflow: [
    {
      step: '01',
      title: 'THE REQUIREMENT',
      desc: {
        id: 'Memetakan kebutuhan sistem, merancang skema database (PostgreSQL), atau menyiapkan kurasi dataset & anotasi presisi (Roboflow/Label Studio).',
        en: 'System requirement mapping, PostgreSQL schema modeling, or precision dataset curation & annotation in Roboflow/Label Studio.',
      },
    },
    {
      step: '02',
      title: 'THE ARCHITECTURE',
      desc: {
        id: 'Merancang pola arsitektur MVC/REST API pada web atau menyusun pipeline preprocessing citra dan arsitektur model AI.',
        en: 'Architecting clean MVC/REST API patterns for web services or engineering computer vision preprocessing and model graphs.',
      },
    },
    {
      step: '03',
      title: 'THE ENGINEERING',
      desc: {
        id: 'Implementasi kode full-stack (Laravel/Python) atau eksperimen training model Deep Learning (YOLOv8/PyTorch/TensorFlow) di Google Colab.',
        en: 'Writing clean full-stack code (Laravel/Python) or executing deep neural network training routines (YOLOv8/PyTorch) on Google Colab.',
      },
    },
    {
      step: '04',
      title: 'THE OPTIMIZATION',
      desc: {
        id: 'Pengujian fungsional, optimasi query SQL, serta kompresi model (TensorRT, OpenVINO INT8, NCNN, Pruning) agar berjalan ringan dan cepat.',
        en: 'SQL query profiling, functional testing, and model optimization (TensorRT, OpenVINO INT8, NCNN, pruning) to maximize edge FPS.',
      },
    },
    {
      step: '05',
      title: 'THE DEPLOYMENT',
      desc: {
        id: 'Integrasi sistem ke produksi/edge hardware (ROS 2 / Vercel CI/CD) beserta dokumentasi teknis yang rapi.',
        en: 'Deploying onto production cloud infrastructure or autonomous ROS 2 edge robotic nodes with clean technical documentation.',
      },
    },
  ],
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'research-assistant-nda',
    period: {
      id: '2026 · SEKARANG',
      en: '2026 · PRESENT',
    },
    role: {
      id: 'Research Assistant (Computer Vision & Machine Learning)',
      en: 'Research Assistant (Computer Vision & Machine Learning)',
    },
    institution: {
      id: 'Program Hilirisasi Riset Politeknik Negeri Malang (Proyek NDA)',
      en: 'Applied Research Downstream Program — Polinema (NDA Project)',
    },
    badge: {
      id: 'Riset Hilirisasi NDA',
      en: 'Institutional NDA',
    },
    points: {
      id: [
        'Terlibat dalam proyek riset "Sistem Early Warning terhadap Perilaku Pegawai Menggunakan Analisis Video Berbasis Kecerdasan Buatan pada Command Center".',
        'Membangun pipeline dataset video CCTV, melakukan anotasi objek/perilaku secara presisi menggunakan Label Studio dan Roboflow, serta menjalankan training dan evaluasi akurasi model di Google Colab.',
      ],
      en: [
        'Involved in the institutional AI video analytics research: "AI-Based Video Analytics Early Warning System for Employee Behavior Monitoring in Command Centers".',
        'Constructed surveillance video dataset pipelines, labeled behavioral classes with high precision in Label Studio & Roboflow, and evaluated model accuracy in Google Colab.',
      ],
    },
  },
  {
    id: 'aburobonema-software-div',
    period: {
      id: 'AGU 2025 · SEKARANG',
      en: 'AUG 2025 · PRESENT',
    },
    role: {
      id: 'Software Division (Computer Vision & Edge Deployment)',
      en: 'Software Division (Computer Vision & Edge Deployment)',
    },
    institution: {
      id: 'Tim Robotika ABUROBONEMA Polinema',
      en: 'ABUROBONEMA Robotics Team Polinema',
    },
    badge: {
      id: 'KRAI Tingkat Nasional 2026',
      en: 'National KRAI 2026',
    },
    repoUrl: 'https://github.com/Renyambar/abu-riset',
    points: {
      id: [
        'Lolos Tingkat Nasional Kontes Robot ABU Indonesia (KRAI) 2026.',
        'Mengembangkan deteksi objek real-time dengan YOLOv8 terintegrasi ROS 2 Humble, membangun display kontrol HMI, serta mengoptimasi inferensi model pada edge device menggunakan TensorRT, NCNN, OpenVINO INT8, dan model pruning.',
      ],
      en: [
        'Qualified for National Level Kontes Robot ABU Indonesia (KRAI) 2026.',
        'Engineered real-time object detection with YOLOv8 connected to ROS 2 Humble nodes, developed an operator HMI control display, and optimized edge model throughput via TensorRT, NCNN, OpenVINO INT8, and pruning.',
      ],
    },
  },
  {
    id: 'playit-committee',
    period: {
      id: 'JUNI 2026',
      en: 'JUNE 2026',
    },
    role: {
      id: 'Panitia Divisi Kesekretariatan',
      en: 'Secretariat Division Committee',
    },
    institution: {
      id: 'Play IT! 2026 (Kompetisi Teknologi Nasional Polinema)',
      en: 'Play IT! 2026 (National Tech Competition Polinema)',
    },
    badge: {
      id: 'Event Nasional',
      en: 'National Event',
    },
    points: {
      id: [
        'Mengelola administrasi peserta tingkat nasional, verifikasi database pendaftaran, dan penyusunan dokumen resmi kepanitiaan.',
      ],
      en: [
        'Managed national cross-campus contestant administrative workflows, registration database verification, and official certification issuance.',
      ],
    },
  },
];

export const MILESTONES: MilestoneItem[] = [
  {
    index: '01',
    title: {
      id: 'Finalis Nasional KRAI',
      en: 'KRAI National Finalist',
    },
    year: '2026',
  },
  {
    index: '02',
    title: {
      id: 'Asisten Riset Hilirisasi AI',
      en: 'AI Downstream Research Assistant',
    },
    year: '2026',
  },
  {
    index: '03',
    title: {
      id: 'IPK 3.70 / 4.00 D4 Teknik Informatika',
      en: 'GPA 3.70 / 4.00 Informatics Engineering',
    },
    year: '2024–2026',
  },
  {
    index: '04',
    title: {
      id: 'Panitia Nasional Play IT!',
      en: 'Play IT! National Organizer',
    },
    year: '2026',
  },
];
