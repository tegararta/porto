export interface Experience {
    id: number
    title: string
    company: string
    type: string
    period: string
    location: string
    description: string
    technologies: string[]
    current: boolean
  }
  
  export const experiences: Experience[] = [
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'Selfprint',
      type: 'Freelance',
      period: 'Sekarang',
      location: 'Remote',
      description:
        'Mengembangkan website print otomatis melalui website user bayar lalu menerima Qrcode untuk melakukan print pada mesin Selfprint ',
      technologies: ['NextJs', 'ElectronJs', 'Tailwind CSS'],
      current: false,
    },
    {
      id: 3,
      title: 'Fullstack Developer',
      company: 'Badan Pengawasan Obat dan Makanan (BPOM)',
      type: 'Magang',
      period: 'November 2024 - Januari 2025',
      location: 'Remote',
      description:
        'Pembuatan aplikasi untuk mengelola Surat Tugas dan Surat Perjalanan Dinas, memastikan proses administrasi menjadi lebih efisien. Perancangan dan pembangunan halaman Dashboard serta sistem hak akses (role) untuk setiap pengguna (Pegawai), guna membedakan fungsionalitas dan tampilan sesuai jabatan.',
      technologies: ['Codeigniter', 'MySQL', 'Tailwind CSS'],
      current: false,
    },
    {
      id: 4,
      title: 'Fullstack Developer',
      company: 'Kementerian Komunikasi dan Informatika (KOMINFO)',
      type: 'Magang',
      period: 'Jun 2024 - Agu 2024',
      location: 'Jombang, Indonesia',
      description:
        'Mengembangkan Website Survey Pelayanan untuk setiap dinas di Jombang. Membangun sistem yang memudahkan masyarakat memberikan feedback terhadap pelayanan publik menggunakan React dan Node.js.',
      technologies: ['React', 'Express', 'MySQL'],
      current: false,
    },
    {
      id: 5,
      title: 'Sales Promotor & Customer Service',
      company: 'Telkomsel Apprentice Program',
      type: 'Magang',
      period: 'Feb 2022 - Mei 2022',
      location: 'Surabaya, Indonesia',
      description:
        'Memberikan pelayanan pelanggan terbaik dan melakukan promosi produk Telkomsel. Mengembangkan soft skills dalam komunikasi, problem solving, dan customer relations.',
      technologies: [],
      current: false,
    },
  ]