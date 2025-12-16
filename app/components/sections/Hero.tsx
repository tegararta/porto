'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-green-400 text-lg font-medium"
            >
              Hello,
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold"
            >
              Saya, <span className="text-green-400">Tegar Try</span>
              <br />
              Buana Danuarta
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300"
            >
              Saya seorang{' '}
              <span className="text-green-400 font-semibold">web developer</span>{' '}
              junior.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 text-lg leading-relaxed"
            >
              Fresh graduate dari Universitas Telkom Surabaya dengan passion dalam
              pengembangan web full-stack, dan Machine Learning.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4"
            >
              <a
                href="https://github.com/tegararta"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/tegar-trybd/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:tegararta585@gmail.com"
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Hubungi Saya
              </button>
              <a
                href="https://drive.google.com/file/d/1X_WtC9ebZpuGPkHOlvlw-SlzjHM-dNWk/view"
                download
                className="px-8 py-3 bg-transparent border-2 border-green-500 hover:bg-green-500/10 text-green-400 font-semibold rounded-lg transition-colors flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Lihat CV
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-green-400/20 rounded-full blur-3xl animate-pulse"></div>
              
              {/* Profile image container */}
              <div className="relative z-10 rounded-2xl overflow-hidden border-4 border-green-400/30 shadow-2xl">
                <div className="aspect-square bg-gradient-to-br from-green-400/20 to-transparent">
                  {/* Replace with your actual image */}
                  <div className="w-full h-full flex items-center justify-center bg-gray-800">
                    <p className="text-gray-500 text-center px-4">
                      <img src="/images/saya.jpg" alt="" className='h-100 rounded-2xl' />
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating decorative elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-green-400/20 rounded-full blur-xl"
              ></motion.div>
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"
              ></motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection('about')}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-green-400 transition-colors"
          >
            <span className="text-sm">Scroll Down</span>
            <ArrowDown className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}