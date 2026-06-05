'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ProjectCTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-100 border-t border-slate-200">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-dark-800 mb-4">
          Заинтересованы в похожем проекте?
        </h2>
        <p className="text-lg text-dark-600 mb-8">
          Наша команда готова помочь вам реализовать ваше видение. Свяжитесь с нами для обсуждения
          деталей вашего проекта.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contacts"
            className="px-10 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-all transform hover:scale-105 inline-block"
          >
            Заказать похожий проект
          </Link>
          <Link
            href="/projects"
            className="px-10 py-3 border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white rounded-lg font-semibold transition-all transform hover:scale-105 inline-block"
          >
            Посмотреть другие проекты
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
