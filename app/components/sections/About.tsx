'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, MapPin, NotebookPen, Calendar } from 'lucide-react'
import { personalInfo } from '../../lib/data/personal'
import { education } from '../../lib/data/education'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Tentang <span className="text-green-400">Saya</span>
            </h2>
            <div className="w-20 h-1 bg-green-400 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-700">
                <h3 className="text-2xl font-bold mb-4 text-green-400">
                  Profile
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {personalInfo.bio}
                </p>

                <div className="space-y-3 pt-4 border-t border-gray-700">
                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPin className="w-5 h-5 text-green-400" />
                    <span>{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <GraduationCap className="w-5 h-5 text-green-400" />
                    <span>Telkom University Surabaya</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Calendar className="w-5 h-5 text-green-400" />
                    <span>Graduation: 2025</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <NotebookPen className="w-5 h-5 text-green-400" />
                    <span>IPK: 3.61</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 text-green-400">
                Pendidikan
              </h3>
              <div className="space-y-6">
                {education.map((edu) => (
                  <motion.div
                    key={edu.id}
                    variants={itemVariants}
                    className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 hover:border-green-400/50 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-green-400/10 rounded-lg">
                        <GraduationCap className="w-6 h-6 text-green-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-lg font-semibold text-white">
                            {edu.degree}
                          </h4>
                          <span className="text-sm text-green-400 font-medium px-3 py-1 bg-green-400/10 rounded-full">
                            {edu.period}
                          </span>
                        </div>
                        <p className="text-gray-300 mb-2">{edu.institution}</p>
                        <span className="text-sm text-gray-400">
                          {edu.status}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          
        </motion.div>
      </div>
    </section>
  )
}