// src/components/sections/Skills.tsx
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, Database, Wrench, Palette } from 'lucide-react'

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      category: 'Frontend',
      icon: Code2,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'JavaScript', level: 88 },
        { name: 'TypeScript', level: 82 },
        { name: 'React', level: 85 },
        { name: 'NextJs', level: 85 },
        { name: 'Codeigniter', level: 80 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'ElectronJs', level: 80 },
      ],
    },
    {
      category: 'Backend',
      icon: Database,
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'PHP', level: 75 },
        { name: 'MySQL', level: 85 },
        { name: 'Laravel', level: 70 },
        { name: 'Flask', level: 80 },
        { name: 'Golang', level: 60 },
      ],
    },
    {
      category: 'Tools & DevOps',
      icon: Wrench,
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Docker', level: 70 },
        { name: 'Ansible', level: 65 },
        { name: 'Nginx', level: 72 },
      ],
    },
    {
      category: 'Design',
      icon: Palette,
      color: 'text-pink-400',
      bgColor: 'bg-pink-400/10',
      skills: [
        { name: 'Figma', level: 80 },
        { name: 'UI/UX Design', level: 75 },
        { name: 'Canva', level: 80 },
      ],
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
    <section id="skills" className="py-20 bg-gray-900 text-white">
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
              Skills & <span className="text-green-400">Expertise</span>
            </h2>
            <div className="w-20 h-1 bg-green-400 mx-auto"></div>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Teknologi dan tools yang saya kuasai dalam pengembangan web
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                variants={itemVariants}
                className="bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-700 hover:border-green-400/30 transition-all"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 ${category.bgColor} rounded-lg`}>
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold">{category.category}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className={`${category.color} font-semibold`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: catIndex * 0.2 + skillIndex * 0.1 }}
                          className={`h-full ${category.bgColor} ${category.color} rounded-full`}
                          style={{
                            background: `linear-gradient(90deg, ${
                              category.color.includes('blue')
                                ? '#3b82f6'
                                : category.color.includes('green')
                                ? '#22c55e'
                                : category.color.includes('purple')
                                ? '#a855f7'
                                : '#ec4899'
                            } 0%, ${
                              category.color.includes('blue')
                                ? '#60a5fa'
                                : category.color.includes('green')
                                ? '#4ade80'
                                : category.color.includes('purple')
                                ? '#c084fc'
                                : '#f472b6'
                            } 100%)`,
                          }}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Tags */}
          <motion.div variants={itemVariants} className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-6">
              Other Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'REST API',
                'Next.js',
                'Express.js',
                'PostgreSQL',
                'Machine Learning',
                'Sellenium',
                'JWT',
                'OAuth',
                'Webpack',
                'Turbopack',
                'Vite',
                'CI/CD',
                'Linux',
              ].map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.05 }}
                  className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg border border-gray-700 hover:border-green-400 hover:text-green-400 transition-all cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}