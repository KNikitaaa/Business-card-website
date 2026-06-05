'use client'

import { motion } from 'framer-motion'

import ContactForm from './ContactForm'

export default function ContactSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Готовы начать?</h2>
            <p className="text-xl text-slate-300 mb-8">
              Заполните форму ниже, и наши специалисты свяжутся с вами для обсуждения деталей вашего
              проекта. Мы ответим на все ваши вопросы и предложим оптимальное решение.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="text-2xl text-primary-500 mt-1">📞</div>
                <div>
                  <p className="font-semibold mb-1">Позвоните нам</p>
                  <a
                    href="tel:+74955551234"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    +7 (495) 555-12-34
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-2xl text-primary-500 mt-1">✉️</div>
                <div>
                  <p className="font-semibold mb-1">Напишите письмо</p>
                  <a
                    href="mailto:info@proektgroup.ru"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    info@proektgroup.ru
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <ContactForm isDark />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
