export interface Project {
    id: number
    title: string
    description: string
    image: string
    technologies: string[]
    period: string
    link: string
    github: string
    featured: boolean
    likes: number
  }
  
  export const projects: Project[] = [
    {
      id: 1,
      title: 'Website Survey Pelayanan Setiap Dinas Jombang',
      description:
        'Platform survey online untuk mengukur kepuasan pelayanan publik di berbagai dinas Kabupaten Jombang. Sistem ini memudahkan masyarakat memberikan feedback dan membantu pemerintah meningkatkan kualitas pelayanan.',
      image: '/images/projects/jorasa.jpg',
      technologies: ['React', 'Node.js', 'Express', 'MySQL', 'Tailwind CSS'],
      period: 'Juni - Agustus 2024',
      link: '#',
      github: '#',
      featured: true,
      likes: 15,
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description:
        'Platform e-commerce lengkap dengan fitur keranjang belanja, payment gateway, dan admin dashboard untuk mengelola produk dan pesanan.',
      image: '/images/projects/ecommerce.jpg',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
      period: 'Maret - Mei 2024',
      link: '#',
      github: '#',
      featured: false,
      likes: 28,
    },
    {
      id: 3,
      title: 'Task Management App',
      description:
        'Aplikasi manajemen tugas dengan fitur drag & drop, kolaborasi tim, dan notifikasi real-time untuk meningkatkan produktivitas.',
      image: '/images/projects/taskapp.jpg',
      technologies: ['React', 'Firebase', 'Material-UI', 'Socket.io'],
      period: 'Januari - Februari 2024',
      link: '#',
      github: '#',
      featured: false,
      likes: 42,
    },
  ]