// Portfolio Configuration File
// Mudah untuk dimodifikasi - ubah data di sini untuk mengupdate website

export const portfolioData = {
  // Personal Information
  personal: {
    name: "Nama Anda",
    title: "Full Stack Developer",
    location: "Indonesia",
    email: "email@anda.com",
    phone: "+62 xxx-xxxx-xxxx",
    profileImage: "/src/assets/profile-photo.jpg"
  },

  // About Section
  about: {
    description: `Saya adalah seorang developer yang passionate dalam menciptakan solusi digital yang inovatif dan user-friendly. 
    Dengan pengalaman di bidang web development, saya selalu berusaha untuk mengikuti perkembangan teknologi terbaru dan 
    menerapkannya dalam setiap proyek yang saya kerjakan.`,
    highlights: [
      "3+ tahun pengalaman dalam web development",
      "Spesialisasi dalam React, JavaScript, dan PHP",
      "Passionate tentang UI/UX design yang modern",
      "Selalu mengikuti best practices dalam coding"
    ]
  },

  // Skills with proficiency levels (0-100)
  skills: {
    HTML: 90,
    CSS: 85,
    JavaScript: 88,
    PHP: 75,
    React: 82
  },

  // Projects
  projects: [
    {
      id: 1,
      title: "E-Commerce Modern",
      description: "Platform e-commerce dengan design modern dan fitur lengkap termasuk payment gateway dan admin dashboard.",
      technologies: ["React", "Node.js", "MySQL", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      category: "Web App"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "Website portfolio responsif dengan animasi yang elegan dan optimasi performa tinggi.",
      technologies: ["React", "TypeScript", "Tailwind", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      category: "Frontend"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Aplikasi manajemen tugas dengan fitur real-time collaboration dan notifikasi push.",
      technologies: ["React", "Firebase", "Material-UI", "PWA"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      category: "Web App"
    },
    {
      id: 4,
      title: "API Rest Service",
      description: "RESTful API dengan dokumentasi lengkap, authentication, dan rate limiting untuk aplikasi mobile.",
      technologies: ["PHP", "Laravel", "MySQL", "JWT"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      category: "Backend"
    }
  ],

  // Social Media Links
  social: {
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/username",
    twitter: "https://twitter.com/username",
    instagram: "https://instagram.com/username"
  },

  // Navigation Menu
  navigation: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ]
};

// Theme Configuration
export const themeConfig = {
  colors: {
    primary: "hsl(0, 85%, 60%)", // Red
    secondary: "hsl(0, 0%, 20%)", // Dark Gray
    background: "hsl(0, 0%, 8%)", // Almost Black
    surface: "hsl(0, 0%, 12%)", // Card Background
    text: "hsl(0, 0%, 95%)" // Almost White
  },
  animations: {
    duration: {
      fast: "0.2s",
      normal: "0.3s",
      slow: "0.6s"
    },
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
  }
};