'use client'

import { motion } from 'framer-motion'

import TeamCard from './TeamCard'

export default function About() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-dark-800 mb-6">О компании</h2>
            <p className="text-lg text-dark-600 mb-4 leading-relaxed">
              Проектная группа — компания с более чем 15-летним опытом в области проектирования и
              разработки проектной документации. Мы специализируемся на создании высококачественных
              проектных решений для объектов различной категории.
            </p>
            <p className="text-lg text-dark-600 mb-6 leading-relaxed">
              Наша команда состоит из опытных инженеров, архитекторов и технологов, которые
              тщательно подходят к каждому проекту, обеспечивая соответствие всем нормативным
              требованиям и пожеланиям клиентов.
            </p>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <div className="text-2xl font-bold text-primary-500 mb-1">200+</div>
                <p className="text-sm text-dark-600">Проектов выполнено</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <div className="text-2xl font-bold text-primary-500 mb-1">47</div>
                <p className="text-sm text-dark-600">Рабочих регионов</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <div className="text-2xl font-bold text-primary-500 mb-1">100%</div>
                <p className="text-sm text-dark-600">Качество работ</p>
              </div>
            </div>
          </div>

          {/* Team Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TeamCard />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
