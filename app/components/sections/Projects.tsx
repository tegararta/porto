// src/components/sections/Projects.tsx
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Heart } from 'lucide-react'
import Image from 'next/image'

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      id: 1,
      title: 'Website Survey Pelayanan Setiap Dinas Jombang',
      description:
        'Platform survey online untuk mengukur kepuasan pelayanan publik di berbagai dinas Kabupaten Jombang. Sistem ini memudahkan masyarakat memberikan feedback dan membantu pemerintah meningkatkan kualitas pelayanan.',
      image: '/images/Jorasa.png',
      technologies: ['React', 'Express', 'MySQL', 'Tailwind CSS'],
      period: 'Juni - Agustus 2024',
      link: '#',
      github: '#',
      featured: false,
    },
    {
      id: 2,
      title: 'Dokumen Generator',
      description:
        'Pembuatan aplikasi untuk mengelola Surat Tugas dan Surat Perjalanan Dinas, memastikan proses administrasi menjadi lebih efisien. Perancangan dan pembangunan halaman Dashboard serta sistem hak akses (role) untuk setiap pengguna (Pegawai), guna membedakan fungsionalitas dan tampilan sesuai jabatan. ',
      image: '/images/bpom.png',
      technologies: ['Codeigniter', 'MySQL', 'Tailwind CSS'],
      period: 'November 2024 - Januari 2025',
      link: '#',
      github: '#',
      featured: false,
    },
    {
      id: 3,
      title: 'Selfprint',
      description:
        'Platform Print otomatis. upload file, payment gateway, dan admin dashboard untuk melihat transaksi.',
      image: '/images/sp.png',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'ElectronJS'],
      period: 'Mei - Oktober 2025',
      link: '#',
      github: '#',
      featured: false,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="projects" className="py-20 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-green-400">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-green-400 mx-auto"></div>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Beberapa project yang telah saya kerjakan dengan passion dan dedikasi
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group bg-gray-900 rounded-2xl overflow-hidden shadow-xl border border-gray-700 hover:border-green-400/50 transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gray-800 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-blue-600/20 flex items-center justify-center">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  {/* Overlay on Hover */}
                  {/* <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-green-400 text-gray-900 rounded-lg hover:bg-green-500 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div> */}
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="px-2 py-1 bg-green-400/10 text-green-400 text-xs font-bold rounded">
                        FEATURED
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-gray-400 mb-4">{project.period}</p>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-800 text-green-400 text-xs rounded border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Likes */}
                  {/* <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Heart className="w-4 h-4 fill-red-500 text-red-500" />
                    <span>{project.likes}</span>
                  </div> */}
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            {/* <button className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors inline-flex items-center gap-2">
              <Github className="w-5 h-5" />
              View More on GitHub
            </button> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}