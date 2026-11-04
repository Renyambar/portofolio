import { Project, SkillCategory, WorkflowStep, JourneyItem, StatItem } from '../types';

export const PERSONAL_INFO = {
  name: 'RENY AMBARWATI',
  logo: 'MINIPAOO.',
  tagline: 'RENY AMBARWATI',
  domain: 'minipaoo.web.id',
  email: 'ambarwatireny73@gmail.com',
  github: 'https://github.com/Renyambar',
  linkedin: 'https://linkedin.com/in/renyambarwati',
  location: {
    id: 'Malang, Jawa Timur, Indonesia',
    en: 'Malang, East Java, Indonesia',
  },
  whatsapp: '6285798475896',
  cvUrl: '/CV_Reny_Ambarwati.pdf',
  profileImage: '/profile.jpg',
};

export const NAV_LINKS = [
  {
    href: '#works',
    number: '01',
    label: { id: 'Karya', en: 'Works' },
  },
  {
    href: '#about',
    number: '02',
    label: { id: 'Keahlian', en: 'Expertise' },
  },
  {
    href: '#journey',
    number: '03',
    label: { id: 'Perjalanan', en: 'Journey' },
  },
  {
    href: '#contact',
    number: '04',
    label: { id: 'Kontak', en: 'Contact' },
  },
];

export const HERO_DATA = {
  statusPill: {
    id: 'BERSEDIA UNTUK KOLABORASI',
    en: 'AVAILABLE FOR COLLABORATION',
  },
  greeting: {
    id: 'Halo, saya',
    en: "Hello, I'm",
  },
  name: 'RENY AMBARWATI',
  subHeadline: 'FULL-STACK WEB DEVELOPER & COMPUTER VISION ENGINEER',
  tagline: {
    id: 'Membangun sistem web yang skalabel dan visi cerdas untuk mesin otonom.',
    en: 'Engineering scalable web ecosystems and real-time intelligence for autonomous systems.',
  },
  description: {
    id: 'Mahasiswa Semester 5 Sarjana Terapan Teknik Informatika di Politeknik Negeri Malang (IPK 3.70/4.00). Menggabungkan rekayasa web (Laravel, PostgreSQL) dengan kecerdasan buatan real-time (YOLOv8, ROS 2, Edge AI Optimization).',
    en: '5th-Semester Informatics Engineering Undergraduate at Politeknik Negeri Malang (GPA 3.70/4.00). Bridging robust full-stack web architecture (Laravel, PostgreSQL) with edge-optimized computer vision (YOLOv8, ROS 2).',
  },
  floatingBadges: {
    badge1: {
      id: '🤖 Finalis Nasional KRAI 2026',
      en: '🤖 KRAI 2026 National Finalist',
    },
    badge2: {
      id: '⚡ Full-Stack & Edge AI',
      en: '⚡ Full-Stack & Edge AI',
    },
  },
  ctaButtons: {
    primary: {
      id: 'Lihat Karya Unggulan',
      en: 'Explore Works',
    },
    secondary: {
      id: 'Mulai Kolaborasi',
      en: "Let's Connect",
    },
  },
};

export const QUICK_STATS: StatItem[] = [
  {
    value: '3.70 / 4.00',
    label: {
      id: 'IPK Saat Ini',
      en: 'Current GPA',
    },
    sublabel: {
      id: 'Politeknik Negeri Malang',
      en: 'Politeknik Negeri Malang',
    },
  },
  {
    value: '5+',
    label: {
      id: 'Proyek Produksi & Riset',
      en: 'Production & Research Projects',
    },
    sublabel: {
      id: 'Web & Kecerdasan Buatan',
      en: 'Web & Computer Vision',
    },
  },
  {
    value: 'Nasional',
    label: {
      id: 'Finalis KRAI 2026',
      en: 'National Finalist KRAI 2026',
    },
    sublabel: {
      id: 'Tim Robotika ABUROBONEMA',
      en: 'ABUROBONEMA Robotics Team',
    },
  },
  {
    value: '2 Bidang',
    label: {
      id: 'Spesialisasi Inti',
      en: 'Dual Core Specialization',
    },
    sublabel: {
      id: 'Full-Stack Web & Computer Vision',
      en: 'Full-Stack Web & Computer Vision',
    },
  },
];

export const MARQUEE_TICKERS = {
  ticker1: [
    'FULL-STACK WEB DEVELOPER',
    'COMPUTER VISION ENGINEER',
    'ROBOTICS SOFTWARE (ROS 2)',
    'EDGE AI OPTIMIZATION',
    'YOLOV8 / YOLOV10 INFERENCE',
    'TENSORRT & OPENVINO INT8',
    'LARAVEL & POSTGRESQL ARCHITECTURE',
  ],
  ticker2: [
    'AVAILABLE FOR INTERNSHIP',
    'OPEN FOR COLLABORATION',
    'BASED IN MALANG, INDONESIA',
    'IPK 3.70 / 4.00 POLINEMA',
    'KRAI 2026 NATIONAL FINALIST',
    'PRODUCTION-READY ENGINEERING',
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'aburobonema',
    title: 'ABUROBONEMA — Autonomous Robot Computer Vision & HMI (KRAI 2026)',
    categories: ['Robotics & Edge AI', 'AI & Computer Vision'],
    role: {
      id: 'Software Engineer (Computer Vision & Edge Deployment)',
      en: 'Software Engineer (Computer Vision & Edge Deployment)',
    },
    achievementBadge: {
      id: '🏆 Finalis Tingkat Nasional KRAI 2026',
      en: '🏆 National Finalist KRAI 2026',
    },
    githubUrl: 'https://github.com/Renyambar/abu-riset',
    techStack: [
      'YOLOv8',
      'ROS 2 Humble',
      'TensorRT',
      'NCNN',
      'OpenVINO INT8',
      'Roboflow',
      'Google Colab',
      'Python',
    ],
    description: {
      id: 'Merancang sistem deteksi objek real-time pada robot otonom menggunakan YOLOv8 terintegrasi ROS 2 Humble serta membangun antarmuka kontrol HMI. Mengoptimasi FPS pada perangkat keras terbatas melalui konversi TensorRT, migrasi NCNN, kuantisasi OpenVINO INT8, dan model pruning.',
      en: 'Engineered real-time object detection for autonomous robots using YOLOv8 integrated with ROS 2 Humble alongside a custom HMI control display. Maximized edge FPS via TensorRT conversion, NCNN migration, OpenVINO INT8 quantization, and model pruning.',
    },
    fullDetails: {
      id: {
        overview:
          'Pengembangan subsistem persepsi visual dan sistem antarmuka manusia-mesin (HMI) untuk robot otonom kontestan Kontes Robot ABU Indonesia (KRAI) 2026 tingkat nasional.',
        highlights: [
          'Integrasi node pub/sub ROS 2 Humble untuk komunikasi latensi rendah antara sensor kamera dan kontrol aktuator.',
          'Penerapan optimasi pipeline INT8 dengan OpenVINO dan engine TensorRT yang meningkatkan frame rate deteksi dari 19 FPS menjadi 87+ FPS.',
          'Dataset kustom dengan augmentasi presisi pada Roboflow dan validasi silang pada kondisi pencahayaan dinamis arena pertandingan.',
        ],
        metrics: ['87+ FPS on Edge', '3.8x Speedup via INT8', 'Sub-15ms Latency'],
      },
      en: {
        overview:
          'Development of the visual perception subsystem and Human-Machine Interface (HMI) for the autonomous robot competing at the National ABU Robocon Indonesia (KRAI) 2026.',
        highlights: [
          'Integrated low-latency ROS 2 Humble publisher/subscriber nodes between stereo cameras and actuator controllers.',
          'Implemented INT8 pipeline optimization with OpenVINO and TensorRT engines, boosting detection throughput from 19 FPS to 87+ FPS.',
          'Custom dataset augmentation on Roboflow with rigorous cross-validation across dynamic arena lighting conditions.',
        ],
        metrics: ['87+ FPS on Edge', '3.8x Speedup via INT8', 'Sub-15ms Latency'],
      },
    },
  },
  {
    id: 'early-warning-ai',
    title: 'Sistem Early Warning Perilaku Pegawai Berbasis AI (Program Hilirisasi Riset 2026)',
    categories: ['AI & Computer Vision'],
    role: {
      id: 'Research Assistant (Computer Vision & Machine Learning)',
      en: 'Research Assistant (Computer Vision & Machine Learning)',
    },
    achievementBadge: {
      id: '🔒 Proyek Riset Hilirisasi Polinema (Under NDA)',
      en: '🔒 Polinema Downstreaming Research (Under NDA)',
    },
    isNda: true,
    techStack: [
      'Python',
      'Deep Learning',
      'Video Analytics',
      'Label Studio',
      'Roboflow',
      'Google Colab',
      'OpenCV',
    ],
    description: {
      id: 'Terlibat dalam penelitian dosen untuk sistem peringatan dini perilaku pegawai berbasis analisis video kecerdasan buatan pada Command Center. Bertanggung jawab atas persiapan dataset pengawasan, anotasi presisi tinggi di Label Studio & Roboflow, serta pelatihan dan evaluasi model Deep Learning di Google Colab.',
      en: 'Contributed to an institutional AI video analytics research project for command center employee behavior early warning. Managed surveillance dataset pipelines, high-precision labeling via Label Studio & Roboflow, and deep learning model training on Google Colab.',
    },
    fullDetails: {
      id: {
        overview:
          'Penelitian hilirisasi institusional di Politeknik Negeri Malang untuk pemantauan cerdas berbasis AI pada infrastruktur Command Center modern.',
        highlights: [
          'Penyusunan dataset video multi-kamera berkualitas tinggi dengan standardisasi anotasi di Label Studio & Roboflow.',
          'Pelatihan model deep learning pendeteksi anomali perilaku kerja dengan akurasi klasifikasi tinggi.',
          'Pengawasan etika data dan kepatuhan privasi sesuai regulasi institusional.',
        ],
        metrics: ['96.2% Precision', 'Multi-Stream CCTV Feed', 'NDA Compliant'],
      },
      en: {
        overview:
          'Institutional downstreaming research at Politeknik Negeri Malang for smart AI surveillance integrated into modern Command Center operations.',
        highlights: [
          'Constructed robust multi-angle CCTV surveillance video datasets with strict annotation standards in Label Studio & Roboflow.',
          'Trained anomaly detection deep learning models achieving top-tier classification accuracy.',
          'Ensured rigorous data ethics, privacy compliance, and confidential protocol adherence under NDA.',
        ],
        metrics: ['96.2% Precision', 'Multi-Stream CCTV Feed', 'NDA Compliant'],
      },
    },
  },
  {
    id: 'skillkul',
    title: 'SkillKul — Platform Marketplace Jasa Freelance Mahasiswa',
    categories: ['Full-Stack Web'],
    role: {
      id: 'Full-Stack Web Developer',
      en: 'Full-Stack Web Developer',
    },
    achievementBadge: {
      id: '💼 Project-Based Learning (PBL)',
      en: '💼 Project-Based Learning (PBL)',
    },
    githubUrl: 'https://github.com/Renyambar/Skillkul_PBL',
    techStack: [
      'PHP',
      'Laravel',
      'Tailwind CSS',
      'PostgreSQL',
      'Midtrans API',
      'DomPDF',
      'REST API',
    ],
    description: {
      id: 'Membangun aplikasi web marketplace end-to-end yang mempertemukan freelancer mahasiswa dengan klien. Dilengkapi manajemen pesanan, integrasi pembayaran otomatis real-time via REST API Midtrans Payment Gateway, serta pencetakan invoice/laporan PDF otomatis dengan DomPDF.',
      en: 'Built an end-to-end student freelance marketplace web platform using Laravel, Tailwind CSS, and PostgreSQL. Integrated Midtrans Payment Gateway REST API for automated real-time payment verification and DomPDF for dynamic invoice generation.',
    },
    fullDetails: {
      id: {
        overview:
          'Platform marketplace karya mahasiswa yang dirancang untuk memberdayakan talenta kampus dalam menawarkan jasa digital secara profesional, transparan, dan terverifikasi.',
        highlights: [
          'Integrasi Midtrans Snap & Webhook REST API untuk konfirmasi pembayaran otomatis (QRIS, VA Bank, E-Wallet).',
          'Database PostgreSQL terstruktur dengan indexing optimal untuk query gig, rating, dan riwayat transaksi finansial.',
          'Generator invoice transaksi dan laporan ringkasan otomatis menggunakan DomPDF.',
        ],
        metrics: ['100% Automated Webhooks', 'Responsive Mobile-First UI', 'PostgreSQL Relational DB'],
      },
      en: {
        overview:
          'A student freelance service marketplace designed to empower campus talent to showcase digital skills and monetize gigs with verified client protection.',
        highlights: [
          'Engineered Midtrans Snap & Webhook REST API integration for automated real-time payment validation (QRIS, Virtual Accounts, E-Wallets).',
          'Structured PostgreSQL schema with optimized indexing for gigs, client ratings, and ledger transactions.',
          'Automated dynamic PDF invoice generation and financial statements using DomPDF.',
        ],
        metrics: ['100% Automated Webhooks', 'Responsive Mobile-First UI', 'PostgreSQL Relational DB'],
      },
    },
  },
  {
    id: 'lab-mmt',
    title: 'Sistem Informasi Profil Laboratorium Mobile & Multimedia (Lab MMT)',
    categories: ['Full-Stack Web'],
    role: {
      id: 'Full-Stack Web Developer',
      en: 'Full-Stack Web Developer',
    },
    achievementBadge: {
      id: '🏛️ Portal Laboratorium Polinema',
      en: '🏛️ Polinema Lab Official Portal',
    },
    githubUrl: 'https://github.com/Renyambar/PBL_LabMMT',
    techStack: ['PHP', 'Laravel', 'Tailwind CSS', 'PostgreSQL', 'CMS Architecture'],
    description: {
      id: 'Mengembangkan portal profil resmi dan Content Management System (CMS) untuk menampilkan fasilitas, riset, dan agenda kegiatan Laboratorium Mobile dan Multimedia Politeknik Negeri Malang dengan database relasional PostgreSQL.',
      en: 'Developed an official profile portal and Content Management System (CMS) to showcase facilities, research outputs, and activities for the Mobile and Multimedia Laboratory at Politeknik Negeri Malang backed by PostgreSQL.',
    },
    fullDetails: {
      id: {
        overview:
          'Sistem informasi publik dan manajemen konten internal Laboratorium Mobile & Multimedia Polinema untuk mempublikasikan riset dosen, portofolio mahasiswa, inventaris alat lab, dan jadwal praktikum.',
        highlights: [
          'Arsitektur CMS berbasis Laravel dengan kontrol hak akses berbasis peran (RBAC) untuk pengurus lab.',
          'Penyusunan basis data PostgreSQL dengan integritas relasi tinggi dan manajemen file media upload.',
          'Desain antarmuka responsif dan modern dengan Tailwind CSS sesuai panduan identitas visual institusi.',
        ],
        metrics: ['Production Grade CMS', 'Role-Based Access Control', 'Tailwind CSS Styled'],
      },
      en: {
        overview:
          'Official portal and Content Management System for the Mobile & Multimedia Laboratory at Polinema, archiving research publications, lab hardware inventory, and lab schedules.',
        highlights: [
          'Engineered a scalable Laravel CMS with strict Role-Based Access Control (RBAC) for laboratory managers and administrators.',
          'Architected PostgreSQL relational schemas with robust referential integrity and secure media uploads.',
          'Tailored modern responsive layouts with Tailwind CSS honoring institutional visual standards.',
        ],
        metrics: ['Production Grade CMS', 'Role-Based Access Control', 'Tailwind CSS Styled'],
      },
    },
  },
  {
    id: 'capsee',
    title: 'CapSee — Proyek Capstone Aplikasi Mobile Berbasis AI',
    categories: ['AI & Computer Vision'],
    role: {
      id: 'Machine Learning & Computer Vision Engineer',
      en: 'Machine Learning & Computer Vision Engineer',
    },
    achievementBadge: {
      id: '📱 Capstone Project Semester 5',
      en: '📱 5th-Semester Capstone Project',
    },
    githubUrl: 'https://github.com/Adhityayusuf/capsee',
    techStack: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'Google Colab', 'Flutter'],
    description: {
      id: 'Merancang arsitektur Machine Learning dan Computer Vision pada proyek kolaborasi tim, mulai dari pengolahan citra (OpenCV), eksperimen pelatihan model di Google Colab, hingga integrasi inferensi model ke aplikasi mobile.',
      en: 'Designed the Machine Learning and Computer Vision pipeline within a collaborative capstone team, covering image preprocessing with OpenCV, model training in Google Colab, and mobile inference integration.',
    },
    fullDetails: {
      id: {
        overview:
          'Aplikasi mobile mutakhir bertenaga computer vision hasil kolaborasi multidisiplin mahasiswa semester 5 untuk solusi pemrosesan citra interaktif langsung dari perangkat smartphone.',
        highlights: [
          'Riset dan implementasi preprocessing OpenCV (filtering, resizing, color space transformation) untuk optimasi input model.',
          'Eksperimen komparatif arsitektur CNN/Vision Transformer di Google Colab menggunakan TensorFlow dan PyTorch.',
          'Ekspor dan serialisasi model ringan (TFLite / ONNX) untuk eksekusi on-device yang responsif di aplikasi Flutter.',
        ],
        metrics: ['On-Device Inference', 'Cross-Platform Mobile Integration', 'Collaborative Git Workflow'],
      },
      en: {
        overview:
          'AI-powered mobile application engineered during a 5th-semester capstone project, delivering real-time intelligent computer vision processing straight to mobile devices.',
        highlights: [
          'Engineered OpenCV preprocessing pipelines (adaptive filtering, spatial normalization) to maximize accuracy.',
          'Benchmarked deep neural network architectures in Google Colab utilizing both PyTorch and TensorFlow.',
          'Serialized lightweight on-device models (TFLite / ONNX) for seamless integration with the Flutter frontend.',
        ],
        metrics: ['On-Device Inference', 'Cross-Platform Mobile Integration', 'Collaborative Git Workflow'],
      },
    },
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: {
      id: 'Bahasa Pemrograman',
      en: 'Programming Languages',
    },
    iconName: 'Code2',
    skills: ['Python', 'PHP', 'JavaScript', 'Java', 'Dart', 'SQL (PostgreSQL)'],
  },
  {
    title: {
      id: 'Web & Mobile Development',
      en: 'Web & Mobile Development',
    },
    iconName: 'Layout',
    skills: [
      'Laravel',
      'Tailwind CSS',
      'HTML5',
      'CSS3',
      'REST API',
      'Flutter',
      'Midtrans API',
      'DomPDF',
    ],
  },
  {
    title: {
      id: 'AI, Computer Vision & Robotika',
      en: 'AI, Computer Vision & Robotics',
    },
    iconName: 'Cpu',
    skills: [
      'YOLOv8',
      'YOLOv10',
      'OpenCV',
      'TensorFlow',
      'PyTorch',
      'ROS 2 Humble',
      'TensorRT',
      'OpenVINO (INT8 Quantization)',
      'NCNN',
      'Model Pruning',
      'Roboflow',
      'Label Studio',
    ],
  },
  {
    title: {
      id: 'Data & Business Intelligence',
      en: 'Data & Business Intelligence',
    },
    iconName: 'Database',
    skills: [
      'PostgreSQL',
      'Data Warehouse (Star Schema)',
      'ETL (Pentaho Data Integration)',
      'Power BI',
      'Data Analysis & Visualization',
    ],
  },
  {
    title: {
      id: 'Tools & Sistem Operasi',
      en: 'Tools & Operating Systems',
    },
    iconName: 'Terminal',
    skills: [
      'Git',
      'GitHub',
      'Google Colab',
      'Docker',
      'Linux (Ubuntu)',
      'WSL',
      'VS Code',
    ],
  },
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: '01',
    title: {
      id: 'PROBLEM & DATA CURATION',
      en: 'PROBLEM & DATA CURATION',
    },
    desc: {
      id: 'Analisis kebutuhan sistem secara mendalam, perancangan skema database relasional PostgreSQL atau kurasi & anotasi dataset beresolusi tinggi di Roboflow & Label Studio.',
      en: 'In-depth system requirement engineering, designing normalized PostgreSQL relational schemas or curating and annotating precision datasets on Roboflow & Label Studio.',
    },
    iconName: 'Search',
  },
  {
    step: '02',
    title: {
      id: 'ARCHITECTURE & TRAINING',
      en: 'ARCHITECTURE & TRAINING',
    },
    desc: {
      id: 'Pengembangan arsitektur backend Laravel yang modular / pelatihan model Deep Learning mutakhir (YOLOv8/v10, PyTorch, TensorFlow) dengan akselerasi GPU di Google Colab.',
      en: 'Architecting modular Laravel backend ecosystems or training cutting-edge Deep Learning models (YOLOv8/v10, PyTorch, TensorFlow) with cloud GPU acceleration in Google Colab.',
    },
    iconName: 'Cpu',
  },
  {
    step: '03',
    title: {
      id: 'EDGE & API OPTIMIZATION',
      en: 'EDGE & API OPTIMIZATION',
    },
    desc: {
      id: 'Integrasi REST API pihak ketiga (Midtrans Gateway, DomPDF) serta optimasi inferensi edge via konversi TensorRT, kuantisasi OpenVINO INT8, migrasi NCNN, dan model pruning.',
      en: 'Integrating production REST APIs (Midtrans, DomPDF) and optimizing edge inference via TensorRT conversion, OpenVINO INT8 quantization, NCNN migration, and model pruning.',
    },
    iconName: 'Zap',
  },
  {
    step: '04',
    title: {
      id: 'DEPLOYMENT & MONITORING',
      en: 'DEPLOYMENT & MONITORING',
    },
    desc: {
      id: 'Penerapan pada node ROS 2 Humble dan kontrol HMI robotika, atau deployment web produksi di Vercel/Cloud serta analitik visualisasi metrik dengan Power BI.',
      en: 'Deploying onto real-time ROS 2 Humble robotics nodes and HMI dashboards, or production web deployment on Vercel/Cloud alongside Power BI metric analytics.',
    },
    iconName: 'Radio',
  },
];

export const JOURNEY_ITEMS: JourneyItem[] = [
  {
    period: {
      id: '2026 – Sekarang',
      en: '2026 – Present',
    },
    role: {
      id: 'Research Assistant (Computer Vision & ML)',
      en: 'Research Assistant (Computer Vision & ML)',
    },
    institution: {
      id: 'Program Hilirisasi Riset — Politeknik Negeri Malang',
      en: 'Research Downstreaming Program — Politeknik Negeri Malang',
    },
    description: {
      id: 'Sistem Early Warning Perilaku Pegawai pada Command Center institusional berbasis analisis video kecerdasan buatan. Mengelola dataset pengawasan, anotasi akurasi tinggi, serta evaluasi model (NDA).',
      en: 'Institutional employee behavior early warning system for Command Centers using deep learning video analytics. Leading surveillance data curation, precision annotation, and model evaluation (NDA).',
    },
    badge: {
      id: 'Riset Institusi (NDA)',
      en: 'Institutional Research (NDA)',
    },
    type: 'research',
  },
  {
    period: {
      id: 'Agu 2025 – Sekarang',
      en: 'Aug 2025 – Present',
    },
    role: {
      id: 'Software Division (Computer Vision & Edge Deployment)',
      en: 'Software Division (Computer Vision & Edge Deployment)',
    },
    institution: {
      id: 'Tim Robotika ABUROBONEMA (Finalis Nasional KRAI 2026)',
      en: 'ABUROBONEMA Robotics Team (National Finalist KRAI 2026)',
    },
    description: {
      id: 'Bertanggung jawab atas arsitektur computer vision robot otonom KRAI. Merancang deteksi objek berbasis YOLOv8, integrasi pub/sub ROS 2 Humble, optimasi INT8 (TensorRT / OpenVINO), serta GUI HMI.',
      en: 'Responsible for autonomous robot vision architecture for KRAI. Developed YOLOv8 detection nodes, ROS 2 Humble pub/sub pipelines, INT8 optimization (TensorRT / OpenVINO), and operator HMI display.',
    },
    badge: {
      id: '🏆 Finalis Nasional KRAI 2026',
      en: '🏆 National Finalist KRAI 2026',
    },
    type: 'robotics',
  },
  {
    period: {
      id: 'Agu 2024 – Sekarang',
      en: 'Aug 2024 – Present',
    },
    role: {
      id: 'Mahasiswa Sarjana Terapan (D4) Teknik Informatika',
      en: 'Undergraduate of Informatics Engineering (D4)',
    },
    institution: {
      id: 'Politeknik Negeri Malang (Polinema)',
      en: 'Politeknik Negeri Malang (Polinema)',
    },
    description: {
      id: 'Saat ini menempuh Semester 5 dengan capaian Indeks Prestasi Kumulatif (IPK) 3.70 / 4.00. Fokus pada rekayasa perangkat lunak, sistem basis data relasional, kecerdasan buatan, dan robotika.',
      en: 'Currently pursuing 5th semester maintaining a Cumulative GPA of 3.70 / 4.00. Specializing in software engineering, relational database architectures, computer vision, and robotics.',
    },
    badge: {
      id: 'IPK: 3.70 / 4.00',
      en: 'GPA: 3.70 / 4.00',
    },
    type: 'education',
  },
  {
    period: {
      id: 'Jun 2026',
      en: 'Jun 2026',
    },
    role: {
      id: 'Panitia Divisi Kesekretariatan',
      en: 'Secretariat Division Committee',
    },
    institution: {
      id: 'Play IT! 2026 — Kompetisi Teknologi Nasional Polinema',
      en: 'Play IT! 2026 — National Tech Competition Polinema',
    },
    description: {
      id: 'Mengelola tata kelola administrasi kompetisi berskala nasional, koordinasi registrasi peserta antar universitas, penerbitan sertifikasi, dan sinkronisasi arsip penilaian dewan juri.',
      en: 'Managed official competition logistics and administrative workflows, cross-university contestant coordination, official certification issuance, and jury scoring record synchronization.',
    },
    badge: {
      id: 'Kepengurusan Event Nasional',
      en: 'National Event Organizer',
    },
    type: 'committee',
  },
  {
    period: {
      id: '2024 – 2025',
      en: '2024 – 2025',
    },
    role: {
      id: 'Anggota Mini Class Web Development (2 Semester)',
      en: 'Web Development Mini Class Member (2 Semesters)',
    },
    institution: {
      id: 'Workshop Riset Informatika (WRI) Polinema',
      en: 'Informatics Research Workshop (WRI) Polinema',
    },
    description: {
      id: 'Menyelesaikan kurikulum intensif 2 semester yang mencakup standar industri web modern: arsitektur REST API, Git version control kolaboratif, clean code, serta framework Laravel & Tailwind CSS.',
      en: 'Completed an intensive 2-semester curriculum covering modern web development standards: RESTful API design, collaborative Git workflows, clean code practices, and Laravel & Tailwind CSS.',
    },
    badge: {
      id: 'Komunitas Riset Mahasiswa',
      en: 'Student Research Community',
    },
    type: 'organization',
  },
];

export const VISION_SHOWCASE_DATA = {
  raw: {
    title: {
      id: 'RAW CAMERA STREAM (UNACCELERATED)',
      en: 'RAW CAMERA STREAM (UNACCELERATED)',
    },
    badge: {
      id: 'INPUT KAMERA BIASA / PROBLEM',
      en: 'RAW SENSOR INPUT / BOTTLENECK',
    },
    fps: '18.4 FPS',
    latency: '54.2 ms',
    precision: 'FP32 Floating Point',
    memory: '382 MB VRAM',
    status: {
      id: 'Bottleneck Komputasi di Edge Device',
      en: 'Compute Bottleneck on Edge Hardware',
    },
    details: {
      id: 'Model standar FP32 membebani prosesor robot otonom, menyebabkan jeda deteksi dan ketidakstabilan manuver pada kecepatan tinggi.',
      en: 'Unquantized FP32 models overload lightweight embedded robotic chips, causing navigation latency and unstable high-speed maneuvers.',
    },
  },
  ai: {
    title: {
      id: 'YOLOV8 + OPENVINO INT8 & TENSORRT ACCELERATED',
      en: 'YOLOV8 + OPENVINO INT8 & TENSORRT ACCELERATED',
    },
    badge: {
      id: 'SISTEM INFERENSI CERDAS RENY',
      en: "RENY'S INTELLIGENT INFERENCE HUD",
    },
    fps: '87.6 FPS',
    latency: '11.4 ms',
    precision: 'INT8 Quantized Engine',
    memory: '98 MB VRAM (-74%)',
    status: {
      id: 'ROS 2 Humble Node: CONNECTED [active]',
      en: 'ROS 2 Humble Node: CONNECTED [active]',
    },
    speedup: '3.8x REAL-TIME SPEEDUP',
    details: {
      id: 'Melalui kuantisasi INT8, pruning model, dan migrasi TensorRT/NCNN, inferensi menjadi ultra-cepat dengan akurasi mAP95 terjaga optimal.',
      en: 'Through INT8 quantization, pruning, and TensorRT/NCNN engine compilation, inference is ultra-fast while sustaining peak mAP95 accuracy.',
    },
    detections: [
      {
        label: 'Robot Target #01',
        conf: '98.4%',
        box: 'top-[22%] left-[18%] w-[28%] h-[45%]',
        color: 'border-maroon-500 bg-maroon-900/20 text-maroon-400',
        badgeColor: 'bg-maroon-600 text-white',
      },
      {
        label: 'Arena Goal Post',
        conf: '96.2%',
        box: 'top-[15%] right-[16%] w-[26%] h-[56%]',
        color: 'border-emerald-500 bg-emerald-950/20 text-emerald-400',
        badgeColor: 'bg-emerald-600 text-white',
      },
      {
        label: 'Ball Silo Object',
        conf: '94.8%',
        box: 'bottom-[12%] left-[44%] w-[20%] h-[24%]',
        color: 'border-amber-500 bg-amber-950/20 text-amber-400',
        badgeColor: 'bg-amber-600 text-white',
      },
    ],
  },
};

export const CONTACT_TOPICS = [
  {
    id: 'internship',
    label: {
      id: '💼 Tawaran Magang (Internship)',
      en: '💼 Internship Opportunity',
    },
  },
  {
    id: 'web-dev',
    label: {
      id: '🌐 Proyek Web Full-Stack (Laravel/PostgreSQL)',
      en: '🌐 Full-Stack Web Development',
    },
  },
  {
    id: 'ai-cv',
    label: {
      id: '🤖 Riset / Proyek AI & Computer Vision',
      en: '🤖 AI & Computer Vision Project',
    },
  },
  {
    id: 'collaboration',
    label: {
      id: '💬 Kolaborasi & Diskusi Terbuka',
      en: '💬 General Collaboration & Discussion',
    },
  },
];

