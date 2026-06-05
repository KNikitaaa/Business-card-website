'use client'

import { motion } from 'framer-motion'

export default function MapPlaceholder() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg border border-slate-200"
    >
      {/* Map Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200">
        {/* Grid Pattern */}
        <svg width="100%" height="100%" className="opacity-30">
          <defs>
            <pattern id="grid-map" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#cbd5e1" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-map)" />
        </svg>
      </div>

      {/* Marker */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center"
        >
          <div className="relative">
            {/* Animated circle */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0.3, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full border-2 border-primary-500 w-16 h-16"
            />
            {/* Marker pin */}
            <div className="w-8 h-8 bg-primary-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
              <div className="text-white text-sm font-bold">📍</div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-dark-800 font-semibold">Офис в Москве</p>
            <p className="text-dark-600 text-sm">Ул. Проектная, д. 42</p>
          </div>
        </motion.div>
      </div>

      {/* Info Box */}
      <div className="absolute bottom-6 left-6 bg-white rounded-lg shadow-md p-4 max-w-xs z-20">
        <p className="font-semibold text-dark-800 mb-1">Центральный офис</p>
        <p className="text-dark-600 text-sm mb-2">
          Ул. Проектная, д. 42
          <br />
          121058, Москва, Россия
        </p>
        <a
          href="tel:+74955551234"
          className="text-primary-500 hover:text-primary-600 text-sm font-semibold"
        >
          Позвонить
        </a>
      </div>

      {/* Floating points */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            x: [0, Math.random() * 20 - 10, 0],
            y: [0, Math.random() * 20 - 10, 0],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute w-2 h-2 bg-primary-400 rounded-full opacity-60"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + i * 10}%`,
          }}
        />
      ))}
    </motion.div>
  )
}
