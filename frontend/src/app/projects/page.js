'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'

import ProjectCard from '@/components/sections/ProjectCard'
import { getAllProjects } from '@/lib/projects'

const categories = [
  { id: 'all', label: 'Все проекты' },
  { id: 'residential', label: 'Жилые здания' },
  { id: 'commercial', label: 'Нежилые здания' },
  { id: 'industrial', label: 'Промышленные объекты' },
  { id: 'special', label: 'Специальные объекты' },
]

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const projects = getAllProjects()

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return projects
    return projects.filter((p) => p.category === activeCategory)
  }, [activeCategory, projects])

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
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Наши проекты</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Портфолио наших работ включает объекты различной категории и сложности. Каждый проект —
            результат тщательного анализа и профессионального подхода.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-primary-500 text-white'
                    : 'bg-slate-100 text-dark-700 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {filteredProjects.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project) => (
                <motion.div key={project.id} variants={itemVariants}>
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-12">
              <p className="text-dark-600 text-lg">Проекты в этой категории не найдены</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
