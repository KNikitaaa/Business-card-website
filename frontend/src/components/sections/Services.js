'use client'

import { motion } from 'framer-motion'

const services = [
  {
    title: 'Жилые здания',
    description:
      'Проектирование квартирных домов, коттеджей, таунхаусов и жилых комплексов любого масштаба и сложности.',
    icon: '🏘️',
    features: ['Многоэтажные комплексы', 'Коттеджные посёлки', 'Таунхаусы'],
  },
  {
    title: 'Нежилые здания',
    description:
      'Разработка проектной документации для офисов, торговых центров, гостиниц и прочих нежилых объектов.',
    icon: '🏢',
    features: ['Офисные центры', 'Торговые площади', 'Гостиничные комплексы'],
  },
  {
    title: 'Промышленные объекты',
    description:
      'Проектирование складов, ангаров, производственных корпусов и логистических комплексов.',
    icon: '🏭',
    features: ['Производственные корпуса', 'Складские комплексы', 'Логистические центры'],
  },
  {
    title: 'Инженерные системы',
    description:
      'Полное проектирование всех разделов: электроснабжение, водоснабжение, отопление, вентиляция и слаботочные системы.',
    icon: '⚙️',
    features: ['Электросистемы', 'Водоснабжение', 'Климатизация'],
  },
]

export default function Services() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-800 mb-4">Наши услуги</h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            Полный спектр услуг по проектированию объектов различной категории и сложности
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group bg-slate-50 p-8 rounded-lg border-2 border-slate-200 hover:border-primary-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-dark-800 mb-3 group-hover:text-primary-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-dark-600 text-sm mb-4">{service.description}</p>
              <div className="border-l-4 border-primary-500 pl-3">
                {service.features.map((feature, i) => (
                  <p key={i} className="text-xs text-dark-600 mb-1">
                    • {feature}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
