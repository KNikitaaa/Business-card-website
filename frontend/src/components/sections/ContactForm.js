'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

export default function ContactForm({ isDark = false }) {
  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    setIsLoading(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        toast.success(result.message || 'Сообщение отправлено!')
        reset()
      } else {
        toast.error(result.detail || 'Ошибка при отправке формы')
      }
    } catch (error) {
      toast.error('Ошибка при отправке. Попробуйте позже.')
    } finally {
      setIsLoading(false)
    }
  }

  const inputClasses = isDark
    ? 'w-full px-4 py-3 bg-slate-800 border border-slate-700 text-white placeholder-slate-500 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors'
    : 'w-full px-4 py-3 bg-white border border-slate-200 text-dark-800 placeholder-slate-500 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors'

  const labelClasses = isDark
    ? 'block text-sm font-semibold text-slate-300 mb-2'
    : 'block text-sm font-semibold text-dark-700 mb-2'

  const errorClasses = 'text-red-500 text-xs mt-1'

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Name */}
      <div>
        <label className={labelClasses}>Имя</label>
        <input
          {...register('name', { required: 'Имя обязательно' })}
          type="text"
          placeholder="Ваше имя"
          className={inputClasses}
        />
        {errors.name && <p className={errorClasses}>{errors.name.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label className={labelClasses}>Email</label>
        <input
          {...register('email', {
            required: 'Email обязателен',
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Неверный email' },
          })}
          type="email"
          placeholder="ваш@email.com"
          className={inputClasses}
        />
        {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
      </div>

      {/* Phone */}
      <div>
        <label className={labelClasses}>Телефон (опционально)</label>
        <input
          {...register('phone')}
          type="tel"
          placeholder="+7 (___) ___-__-__"
          className={inputClasses}
        />
        {errors.phone && <p className={errorClasses}>{errors.phone.message}</p>}
      </div>

      {/* Project Type */}
      <div>
        <label className={labelClasses}>Тип проекта</label>
        <select
          {...register('project_type', { required: 'Выберите тип проекта' })}
          className={inputClasses}
        >
          <option value="">Выберите категорию</option>
          <option value="residential">Жилое здание</option>
          <option value="commercial">Нежилое здание</option>
          <option value="industrial">Промышленный объект</option>
          <option value="other">Другое</option>
        </select>
        {errors.project_type && <p className={errorClasses}>{errors.project_type.message}</p>}
      </div>

      {/* Message */}
      <div>
        <label className={labelClasses}>Сообщение</label>
        <textarea
          {...register('message', {
            required: 'Сообщение обязательно',
            minLength: { value: 10, message: 'Минимум 10 символов' },
          })}
          placeholder="Расскажите о вашем проекте..."
          rows="4"
          className={inputClasses}
        />
        {errors.message && <p className={errorClasses}>{errors.message.message}</p>}
      </div>

      {/* Honeypot */}
      <input {...register('website')} type="hidden" value="" />

      {/* Privacy Checkbox */}
      <div className="flex items-start gap-3">
        <input
          {...register('privacy_accepted', {
            required: 'Примите политику конфиденциальности',
          })}
          type="checkbox"
          id="privacy"
          className="w-4 h-4 mt-1 accent-primary-500"
        />
        <label
          htmlFor="privacy"
          className={`text-sm ${isDark ? 'text-slate-400' : 'text-dark-600'}`}
        >
          Я согласен с{' '}
          <a
            href="/privacy"
            className={`underline ${isDark ? 'text-slate-200 hover:text-white' : 'text-primary-500 hover:text-primary-600'}`}
          >
            политикой конфиденциальности
          </a>
        </label>
      </div>
      {errors.privacy_accepted && <p className={errorClasses}>{errors.privacy_accepted.message}</p>}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className={`w-full px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${
          isDark
            ? 'bg-primary-500 hover:bg-primary-600 text-white'
            : 'bg-primary-500 hover:bg-primary-600 text-white'
        }`}
      >
        {isLoading ? 'Отправка...' : 'Отправить сообщение'}
      </button>
    </form>
  )
}
