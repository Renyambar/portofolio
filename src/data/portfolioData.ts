import { ExperienceItem, ProjectItem, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: 'Reny Ambarwati',
  nickname: 'minipaoo',
  brand: 'minipaoo.',
  role: {
    id: 'Full-Stack Web Developer & Computer Vision Engineer',
    en: 'Full-Stack Web Developer & Computer Vision Engineer',
  },
  introParagraph: {
    id: 'Mahasiswa D4 Teknik Informatika Politeknik Negeri Malang (IPK: 3.70/4.00) dengan keahlian rekayasa web skala produksi dan akselerasi computer vision pada sistem otonom.',
    en: 'Informatics Engineering undergraduate at Politeknik Negeri Malang (GPA: 3.70/4.00) engineering production-grade web systems and accelerating real-time computer vision on autonomous robotics.',
  },
  cvGdriveUrl: 'https://drive.google.com/file/d/ISI_LINK_GDRIVE_CV_DISINI/view?usp=sharing',
  profileImage: '/profile.png',
  email: 'ambarwatireny73@gmail.com',
  whatsappNumber: '+62 857-9847-5896',
  whatsappUrl: 'https://wa.me/6285798475896',
  githubUrl: 'https://github.com/Renyambar',
  githubHandle: 'github.com/Renyambar',
  linkedinUrl: 'https://linkedin.com/in/renyambarwati',
  linkedinHandle: 'linkedin.com/in/renyambarwati',
  domain: 'minipaoo.web.id',
};

export const NAV_LINKS = [
  { href: '#about', label: { id: 'Tentang', en: 'About' } },
  { href: '#experience', label: { id: 'Pengalaman', en: 'Experience' } },
  { href: '#projects', label: { id: 'Proyek', en: 'Projects' } },
  { href: '#skills', label: { id: 'Keahlian', en: 'Skills' } },
  { href: '#contact', label: { id: 'Kontak', en: 'Contact' } },
];

export const ABOUT_TEXT = {
  id: 'Mahasiswa semester 5 D4 Teknik Informatika di Politeknik Negeri Malang (IPK: 3.70/4.00) dengan fokus pada Full-Stack Web Development, Computer Vision, dan Machine Learning. Di bidang web, saya membangun aplikasi end-to-end menggunakan PHP (Laravel), Tailwind CSS, dan PostgreSQL. Di bidang AI dan robotika, saya tergabung di divisi software tim robotika ABUROBONEMA (Finalis Nasional KRAI 2026), menangani sistem deteksi objek YOLOv8, integrasi ROS 2 Humble, tampilan kontrol HMI, hingga optimasi model (TensorRT, NCNN, OpenVINO INT8) pada edge device. Selain itu, saya juga terbiasa menggunakan Python, Data Warehouse (ETL Pentaho), serta Power BI.',
  en: 'Informatics Engineering student at Politeknik Negeri Malang (Semester 5, GPA: 3.70/4.00) focusing on Full-Stack Web Development, Computer Vision, and Machine Learning. In web development, I build end-to-end applications using PHP (Laravel), Tailwind CSS, and PostgreSQL. In Computer Vision and Robotics, I am part of the software division at ABUROBONEMA (KRAI 2026 National Finalist), handling YOLOv8 object detection, ROS 2 Humble integration, custom HMI control displays, and edge model optimization (TensorRT, NCNN, OpenVINO INT8). Beyond web and vision, I also work with Python, Data Warehousing (Pentaho ETL), and Power BI.',
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'research-assistant-ai',
    role: {
      id: 'Research Assistant – Computer Vision & Machine Learning',
      en: 'Research Assistant – Computer Vision & Machine Learning',
    },
    institution: {
      id: 'Politeknik Negeri Malang',
      en: 'Politeknik Negeri Malang',
    },
    period: {
      id: '2026 – Sekarang',
      en: '2026 – Present',
    },
    badge: {
      id: 'Proyek Riset NDA',
      en: 'NDA Research Project',
    },
    isNda: true,
    description: {
      id: 'Terlibat dalam Program Hilirisasi Riset 2026: "Sistem Early Warning terhadap Perilaku Pegawai Menggunakan Analisis Video Berbasis Kecerdasan Buatan pada Command Center" (Proyek NDA). Menyiapkan pipeline dataset video pengawasan, melakukan anotasi objek/perilaku secara presisi menggunakan Label Studio dan Roboflow, serta menjalankan eksperimen training dan evaluasi model Deep Learning di Google Colab untuk deteksi real-time.',
      en: 'Involved in the 2026 Applied Research Downstream Program: "AI-Based Video Analytics Early Warning System for Employee Behavior Monitoring in Command Centers" (Project under NDA). Built surveillance video dataset pipelines, performed high-precision annotation using Label Studio and Roboflow, and conducted deep learning model training and evaluation on Google Colab for real-time video inference.',
    },
  },
  {
    id: 'aburobonema-software',
    role: {
      id: 'Anggota Divisi Software – Computer Vision & Edge Deployment',
      en: 'Software Division Member – Computer Vision & Edge Deployment',
    },
    institution: {
      id: 'Tim Robotika ABUROBONEMA (Polinema)',
      en: 'ABUROBONEMA Robotics Team (Polinema)',
    },
    period: {
      id: 'Agu 2025 – Sekarang',
      en: 'Aug 2025 – Present',
    },
    badge: {
      id: 'Finalis Nasional KRAI 2026',
      en: 'KRAI 2026 National Finalist',
    },
    repoUrl: 'https://github.com/Renyambar/abu-riset',
    description: {
      id: 'Merancang sistem deteksi objek dan estimasi posisi real-time pada robot otonom menggunakan YOLOv8 dan OpenCV (dataset dikelola di Roboflow, dilatih di Google Colab) yang terintegrasi dengan ROS 2 Humble. Mengembangkan antarmuka kontrol (HMI) untuk pemantauan kamera di lapangan, serta mengatasi keterbatasan perangkat keras pada edge device melalui konversi TensorRT, migrasi NCNN, kuantisasi OpenVINO INT8, dan model pruning agar FPS tetap tinggi dan stabil.',
      en: 'Designed and deployed real-time object detection for autonomous robots using YOLOv8 and OpenCV integrated with ROS 2 Humble. Developed a custom HMI control display for live field monitoring, and solved edge hardware bottlenecks by converting and benchmarking models across TensorRT, NCNN, and OpenVINO INT8 quantization with model pruning to maintain high, stable FPS.',
    },
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'skillkul',
    title: {
      id: 'SkillKul – Platform Marketplace Jasa Freelance Mahasiswa',
      en: 'SkillKul – Student Freelance Service Marketplace',
    },
    subtitle: {
      id: 'Proyek Project-Based Learning (PBL)',
      en: 'Project-Based Learning (PBL)',
    },
    year: '2026',
    techStack: ['Laravel', 'Tailwind CSS', 'PostgreSQL', 'Midtrans REST API', 'DomPDF'],
    description: {
      id: 'Aplikasi web marketplace untuk mempertemukan mahasiswa penyedia jasa freelance dengan klien. Membangun sistem full-stack mencakup autentikasi multi-peran, katalog jasa, pelacakan pesanan, integrasi pembayaran otomatis via REST API Midtrans, serta pencetakan invoice dan portofolio PDF otomatis menggunakan DomPDF.',
      en: 'Full-stack web marketplace connecting university student freelancers with clients. Built multi-role authentication, service catalogs, order workflows, automated real-time payment verification via Midtrans REST API, and dynamic PDF invoice generation using DomPDF.',
    },
    githubUrl: 'https://github.com/Renyambar/Skillkul_PBL',
  },
  {
    id: 'lab-mmt',
    title: {
      id: 'Sistem Informasi Profil Lab Mobile & Multimedia',
      en: 'Mobile & Multimedia Laboratory Profile Portal',
    },
    subtitle: {
      id: 'Proyek Project-Based Learning (PBL)',
      en: 'Project-Based Learning (PBL)',
    },
    year: '2025 – 2026',
    techStack: ['Laravel', 'Tailwind CSS', 'PostgreSQL'],
    description: {
      id: 'Portal profil resmi dan Content Management System (CMS) untuk Laboratorium Mobile dan Multimedia Polinema. Mengembangkan halaman publik responsif, dashboard admin, serta struktur database PostgreSQL untuk mengelola data fasilitas riset, publikasi karya, dan agenda kegiatan lab secara mandiri.',
      en: 'Official profile portal and CMS for the Mobile and Multimedia Laboratory at Polinema. Developed responsive public pages, a role-protected admin dashboard, and a PostgreSQL relational schema to manage lab facilities, research publications, and schedules dynamically.',
    },
    githubUrl: 'https://github.com/Renyambar/PBL_LabMMT',
  },
  {
    id: 'capsee',
    title: {
      id: 'CapSee – Aplikasi Mobile Berbasis AI',
      en: 'CapSee – AI-Powered Mobile Application',
    },
    subtitle: {
      id: 'Proyek Capstone Semester 5',
      en: '5th-Semester Capstone Project',
    },
    year: '2026 – Sekarang',
    techStack: ['Python', 'OpenCV', 'PyTorch', 'TensorFlow', 'Google Colab', 'Flutter'],
    description: {
      id: 'Proyek kolaborasi aplikasi mobile yang terintegrasi dengan Computer Vision. Bertanggung jawab pada persiapan dataset, pengolahan citra (OpenCV), pelatihan model Deep Learning di Google Colab, serta integrasi inferensi model ke aplikasi Flutter.',
      en: 'Collaborative capstone project developing an AI-powered mobile application. Handled the ML/Computer Vision pipeline including dataset preparation, image preprocessing with OpenCV, model training on Google Colab, and inference integration with the Flutter client.',
    },
    githubUrl: 'https://github.com/Adhityayusuf/capsee',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages',
    title: {
      id: 'Bahasa Pemrograman',
      en: 'Programming Languages',
    },
    focus: {
      id: 'Pengembangan backend, skrip pemodelan AI/Computer Vision, dan logika aplikasi lintas platform.',
      en: 'Backend development, AI/Computer Vision scripting, and cross-platform application logic.',
    },
    skills: ['Python', 'PHP', 'JavaScript', 'SQL', 'Dart', 'Java', 'C/C++'],
  },
  {
    id: 'web-mobile',
    title: {
      id: 'Pengembangan Web & Mobile',
      en: 'Web & Mobile Engineering',
    },
    focus: {
      id: 'Arsitektur full-stack MVC, manajemen autentikasi multi-peran (RBAC), integrasi payment gateway, otomatisasi dokumen PDF, dan UI responsif.',
      en: 'Full-stack MVC architecture, role-based access control (RBAC), payment gateway integration, automated PDF reporting, and responsive UI.',
    },
    skills: [
      'Laravel (MVC)',
      'Django (Fundamental)',
      'Tailwind CSS',
      'HTML5',
      'CSS3',
      'Blade Templating',
      'RESTful API',
      'Midtrans Payment Gateway API',
      'DomPDF',
      'Flutter',
    ],
  },
  {
    id: 'cv-ml',
    title: {
      id: 'Computer Vision & Machine Learning',
      en: 'Computer Vision & Machine Learning',
    },
    focus: {
      id: 'Deteksi objek real-time, estimasi koordinat spasial, image preprocessing, ekstraksi frame video, kurasi & anotasi dataset presisi, serta pelatihan dan evaluasi metrik model (mAP, Precision, Recall).',
      en: 'Real-time object detection, spatial coordinate estimation, image preprocessing, video frame extraction, dataset curation & annotation, and model training/evaluation.',
    },
    skills: [
      'YOLOv8 / YOLOv10',
      'OpenCV',
      'PyTorch',
      'TensorFlow',
      'Scikit-learn (k-NN, CountVectorizer)',
      'Roboflow',
      'Label Studio',
      'Google Colab',
    ],
  },
  {
    id: 'robotics-edge',
    title: {
      id: 'Robotika & Optimasi Edge AI',
      en: 'Robotics & Edge Deployment',
    },
    focus: {
      id: 'Komunikasi node sensor/kamera pada robot otonom, kompresi model deep learning, dan akselerasi inferensi hardware untuk mencapai FPS tinggi pada perangkat edge terbatas.',
      en: 'Sensor/camera node communication for autonomous robots, deep learning model compression, and hardware inference acceleration for high FPS on edge devices.',
    },
    skills: [
      'ROS 2 Humble',
      'TensorRT',
      'Intel OpenVINO (INT8 Quantization)',
      'NCNN',
      'ONNX',
      'Model Pruning',
      'Custom HMI / Control Display',
      'NVIDIA Jetson Deployment',
    ],
  },
  {
    id: 'database-bi',
    title: {
      id: 'Basis Data, Data Warehouse & Business Intelligence',
      en: 'Databases, Data Warehouse & BI',
    },
    focus: {
      id: 'Perancangan skema database relasional, optimasi query SQL, pemrosesan pipeline ETL (Extract, Transform, Load), dan pembuatan dashboard analitik interaktif.',
      en: 'Relational database schema design, SQL query optimization, ETL pipeline processing, and interactive analytical dashboard creation.',
    },
    skills: [
      'PostgreSQL',
      'MySQL',
      'Relational Database Design (ERD & Normalization)',
      'Data Warehouse (Star Schema)',
      'Pentaho Data Integration (PDI Spoon / ETL)',
      'Microsoft Power BI',
    ],
  },
  {
    id: 'devops-tools',
    title: {
      id: 'DevOps, Sistem Operasi & Perangkat Pengembangan',
      en: 'DevOps, OS & Development Tools',
    },
    focus: {
      id: 'Manajemen version control kolaboratif, kontainerisasi lingkungan pengembangan, pengelolaan sistem dual-boot Linux/Windows, dan deployment berkelanjutan.',
      en: 'Collaborative version control, development environment containerization, Linux/Windows workflow management, and continuous deployment.',
    },
    skills: [
      'Git',
      'GitHub',
      'Docker',
      'Linux (Ubuntu 22.04 LTS)',
      'Windows Subsystem for Linux (WSL)',
      'Visual Studio Code',
      'Laragon',
      'Vercel (CI/CD)',
      'Postman',
    ],
  },
];
