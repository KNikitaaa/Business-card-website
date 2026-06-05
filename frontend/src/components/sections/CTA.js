'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-900 via-primary-800 to-primary-700 text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Начните свой проект прямо сейчас</h2>
        <p className="text-xl text-slate-100 mb-10">
          Мы готовы помочь вам превратить ваше видение в реальность. Свяжитесь с нами для бесплатной
          консультации.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contacts"
            className="px-10 py-3 bg-white text-primary-600 hover:bg-slate-100 rounded-lg font-semibold transition-all transform hover:scale-105 inline-block"
          >
            Связаться с нами
          </Link>
          <Link
            href="/projects"
            className="px-10 py-3 border-2 border-white text-white hover:bg-white/10 rounded-lg font-semibold transition-all transform hover:scale-105 inline-block"
          >
            Смотреть портфолио
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
