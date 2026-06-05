'use client'

import { motion } from 'framer-motion'

import ProjectImage from '@/components/ui/ProjectImage'

export default function ProjectGallery({ project }) {
  const images = [project.category, 'special', 'special', 'special']

  return (
    <section className="pt-24 pb-0 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {images.map((category, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className={`relative overflow-hidden rounded-lg bg-slate-700 ${
                idx === 0 ? 'col-span-2 row-span-2' : ''
              }`}
              style={{
                aspectRatio: idx === 0 ? '1' : '1',
                minHeight: idx === 0 ? '400px' : '190px',
              }}
            >
              <ProjectImage category={category} />
            </motion.div>
          ))}
        </motion.div>

        {/* Project Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white pb-12 border-b border-slate-700"
        >
          <div className="flex items-center gap-3 mb-4">
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white ${
                project.category === 'residential'
                  ? 'bg-blue-500'
                  : project.category === 'commercial'
                    ? 'bg-green-500'
                    : 'bg-gray-500'
              }`}
            >
              {project.type === 'residential'
                ? 'Жилые здания'
                : project.type === 'commercial'
                  ? 'Нежилые здания'
                  : 'Промышленные объекты'}
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-slate-300">{project.shortDescription}</p>
        </motion.div>
      </div>
    </section>
  )
}
