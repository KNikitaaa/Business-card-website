'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

import ProjectCard from './ProjectCard'
import { getFeaturedProjects } from '@/lib/projects'

export default function Portfolio() {
  const projects = getFeaturedProjects(3)

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-800 mb-4">Портфолио проектов</h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            Примеры наших успешно реализованных проектов в разных категориях и регионах
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Link
            href="/projects"
            className="inline-block px-8 py-3 border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white rounded-lg font-semibold transition-all transform hover:scale-105"
          >
            Все проекты →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
