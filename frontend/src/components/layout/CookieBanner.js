'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    const hasConsent = localStorage.getItem('cookie-consent')
    if (!hasConsent) {
      setIsVisible(true)
    }
  }, [])

  const handleAcceptAll = () => {
    const allPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    }
    saveCookiePreference(allPreferences)
  }

  const handleAcceptSelected = () => {
    saveCookiePreference(preferences)
  }

  const handleReject = () => {
    const rejectPreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
    }
    saveCookiePreference(rejectPreferences)
  }

  const saveCookiePreference = (prefs) => {
    localStorage.setItem('cookie-consent', JSON.stringify(prefs))
    document.cookie = `cookie-consent=${JSON.stringify(prefs)}; max-age=${365 * 24 * 60 * 60}; path=/`
    setIsVisible(false)
  }

  const togglePreference = (key) => {
    if (key !== 'necessary') {
      setPreferences((prev) => ({
        ...prev,
        [key]: !prev[key],
      }))
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 shadow-2xl"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid md:grid-cols-3 gap-6 items-start">
              {/* Content */}
              <div className="md:col-span-2">
                <h3 className="font-semibold text-dark-800 mb-2">Управление cookies</h3>
                <p className="text-sm text-dark-600 mb-4">
                  Мы используем cookies для улучшения работы сайта и анализа посещаемости. Вы можете
                  принять все cookies или выбрать категории на свое усмотрение.
                </p>

                {/* Expanded Options */}
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-3 pt-4 border-t border-slate-200"
                  >
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.necessary}
                        disabled
                        className="w-4 h-4 cursor-not-allowed"
                      />
                      <span className="text-sm">
                        <strong>Необходимые</strong> - всегда включены для работы сайта
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={() => togglePreference('analytics')}
                        className="w-4 h-4"
                      />
                      <span className="text-sm">
                        <strong>Аналитические</strong> - помогают улучшить сайт
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={() => togglePreference('marketing')}
                        className="w-4 h-4"
                      />
                      <span className="text-sm">
                        <strong>Маркетинговые</strong> - для персонализации рекламы
                      </span>
                    </label>
                  </motion.div>
                )}
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-2">
                <button
                  onClick={handleAcceptAll}
                  className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold text-sm transition-colors"
                >
                  Принять все
                </button>
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="px-4 py-2 border border-slate-300 text-dark-700 hover:bg-slate-50 rounded-lg font-semibold text-sm transition-colors"
                >
                  {isExpanded ? 'Скрыть' : 'Настроить'}
                </button>
                {isExpanded && (
                  <button
                    onClick={handleAcceptSelected}
                    className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-dark-700 rounded-lg font-semibold text-sm transition-colors"
                  >
                    Применить
                  </button>
                )}
                <button
                  onClick={handleReject}
                  className="px-4 py-2 border border-slate-300 text-dark-600 hover:bg-slate-50 rounded-lg text-sm transition-colors"
                >
                  Отклонить
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
