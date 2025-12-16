// src/components/sections/Experience.tsx
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, Calendar, MapPin } from 'lucide-react'
import { experiences } from '../../lib/data/experience'

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="experience" className="py-20 bg-gray-800 text-white">
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
              Pengalaman <span className="text-green-400">Kerja</span>
            </h2>
            <div className="w-20 h-1 bg-green-400 mx-auto"></div>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Perjalanan profesional saya dalam dunia pengembangan web dan teknologi
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-700"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-400 rounded-full border-4 border-gray-800 z-10"></div>

                  {/* Content Card */}
                  <div
                    className={`w-full md:w-5/12 ${
                      index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                    }`}
                  >
                    <div className="bg-gray-900 rounded-2xl p-6 shadow-xl border border-gray-700 hover:border-green-400/50 transition-all hover:shadow-2xl">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          {exp.current && (
                            <span className="inline-block px-3 py-1 bg-green-400 text-gray-900 text-xs font-bold rounded-full mb-2">
                              CURRENT
                            </span>
                          )}
                          <h3 className="text-xl font-bold text-white mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-green-400 font-semibold mb-2">
                            {exp.company}
                          </p>
                        </div>
                        <div className="p-3 bg-green-400/10 rounded-lg">
                          <Briefcase className="w-6 h-6 text-green-400" />
                        </div>
                      </div>

                      {/* Meta Info */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                          <span className="px-2 py-0.5 bg-gray-800 rounded text-xs">
                            {exp.type}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Technologies */}
                      {exp.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-gray-800 text-green-400 text-sm rounded-lg border border-gray-700"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}