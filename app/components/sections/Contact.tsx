// src/components/sections/Contact.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react'

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    // Simulate sending email
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 3000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'tegararta585@gmail.com',
      link: 'mailto:tegararta585@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+62 838 4471 0339',
      link: 'tel:+6283844710339',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Surabaya, Jawa Timur, Indonesia',
      link: null,
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/tegararta',
      color: 'hover:text-gray-400',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/your-profile',
      color: 'hover:text-blue-400',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
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
              Hubungi <span className="text-green-400">Saya</span>
            </h2>
            <div className="w-20 h-1 bg-green-400 mx-auto"></div>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Ada pertanyaan atau ingin bekerja sama? Jangan ragu untuk menghubungi saya!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-700">
                <h3 className="text-2xl font-bold mb-6 text-green-400">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-3 bg-green-400/10 rounded-lg">
                        <info.icon className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm mb-1">{info.label}</p>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-white hover:text-green-400 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-white">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-gray-700">
                  <h4 className="text-lg font-semibold mb-4">Connect with me</h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 bg-gray-900 rounded-lg transition-all ${social.color}`}
                      >
                        <social.icon className="w-6 h-6" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-br from-green-400/10 to-blue-600/10 rounded-2xl p-6 border border-green-400/20"
              >
                <p className="text-gray-300 leading-relaxed">
                  <span className="font-semibold text-green-400">
                    Open to opportunities!
                  </span>{' '}
                  Saya terbuka untuk peluang freelance, proyek kolaborasi, atau
                  posisi full-time yang sesuai dengan skill dan minat saya.
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-green-400 text-white transition-colors"
                    placeholder="Setiawan"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-green-400 text-white transition-colors"
                    placeholder="setiawan@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-green-400 text-white transition-colors resize-none"
                    placeholder=".."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full px-8 py-4 bg-green-500 hover:bg-green-600 disabled:bg-gray-600 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  {status === 'sending' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : status === 'success' ? (
                    <>
                      <span>✓</span>
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-400 text-center text-sm"
                  >
                    Thank you! I'll get back to you soon.
                  </motion.p>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}