'use client'

import { motion } from 'framer-motion'

export default function ProjectSpecs({ project }) {
  const specs = [
    { label: 'Статус', value: project.status },
    { label: 'Год реализации', value: project.year },
    { label: 'Площадь', value: `${project.area.toLocaleString('ru-RU')} м²` },
    { label: 'Локация', value: project.location },
    { label: 'Клиент', value: project.client },
    { label: 'Категория', value: project.type },
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className="border-t border-slate-200 pt-12"
    >
      <h2 className="text-3xl font-bold text-dark-800 mb-8">Технические характеристики</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {specs.map((spec, idx) => (
          <motion.div key={idx} variants={itemVariants}>
            <p className="text-sm font-semibold text-primary-500 uppercase tracking-wider mb-2">
              {spec.label}
            </p>
            <p className="text-lg font-semibold text-dark-800">{spec.value}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
