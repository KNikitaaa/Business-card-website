'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

import ProjectImage from '@/components/ui/ProjectImage'

export default function ProjectCard({ project }) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
        className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
      >
        {/* Image */}
        <div className="relative h-48 md:h-56 overflow-hidden bg-slate-200">
          <ProjectImage category={project.category} />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-white font-semibold">Подробнее →</div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Badge */}
          <div className="flex items-center gap-2 mb-3">
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white ${
                project.category === 'residential'
                  ? 'bg-blue-500'
                  : project.category === 'commercial'
                    ? 'bg-green-500'
                    : project.category === 'industrial'
                      ? 'bg-gray-500'
                      : 'bg-purple-500'
              }`}
            >
              {project.type === 'residential'
                ? 'Жилые'
                : project.type === 'commercial'
                  ? 'Нежилые'
                  : project.type === 'industrial'
                    ? 'Промышленные'
                    : 'Прочие'}
            </span>
            <span className="text-xs text-dark-600">{project.year}</span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-dark-800 mb-2 group-hover:text-primary-500 transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-dark-600 mb-4 flex-grow">{project.shortDescription}</p>

          {/* Footer */}
          <div className="border-t border-slate-200 pt-4 flex items-center justify-between">
            <span className="text-sm font-semibold text-dark-700">
              {project.area.toLocaleString('ru-RU')} м²
            </span>
            <span className="text-primary-500 font-semibold text-sm">{project.location}</span>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
