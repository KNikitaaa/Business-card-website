'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="py-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Проектируем здания
            <br />и сооружения любой
            <br />
            <span className="text-primary-500">сложности</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl">
            Разработка проектной документации — от жилых домов до промышленных комплексов. 15+ лет
            профессионального опыта.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              href="/contacts"
              className="px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-all inline-block text-center transform hover:scale-105"
            >
              Обсудить проект
            </Link>
            <Link
              href="/projects"
              className="px-8 py-3 border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white rounded-lg font-semibold transition-all inline-block text-center transform hover:scale-105"
            >
              Посмотреть портфолио
            </Link>
          </div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="grid grid-cols-3 gap-6 md:gap-12"
          >
            <div className="border-l-4 border-primary-500 pl-4">
              <div className="text-3xl md:text-4xl font-bold text-primary-500">15+</div>
              <p className="text-slate-400 mt-2">Лет опыта</p>
            </div>
            <div className="border-l-4 border-primary-500 pl-4">
              <div className="text-3xl md:text-4xl font-bold text-primary-500">200+</div>
              <p className="text-slate-400 mt-2">Проектов</p>
            </div>
            <div className="border-l-4 border-primary-500 pl-4">
              <div className="text-3xl md:text-4xl font-bold text-primary-500">47</div>
              <p className="text-slate-400 mt-2">Регионов</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <svg
            className="w-6 h-6 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
