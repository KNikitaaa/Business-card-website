import { motion } from 'framer-motion'

import TeamCard from '@/components/sections/TeamCard'
import { getAllProjects } from '@/lib/projects'

export const metadata = {
  title: 'О компании | Проектная группа',
  description:
    'История, опыт и команда Проектной группы. Профессиональное проектирование с 2009 года.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">О компании</h1>
          <p className="text-xl text-slate-300">
            Проектная группа — проектно-конструкторская компания с 15-летним опытом разработки
            документации для объектов различной сложности.
          </p>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          <div>
            <div className="text-4xl font-bold text-primary-500 mb-2">15+</div>
            <h3 className="text-xl font-semibold text-dark-800 mb-2">Лет опыта</h3>
            <p className="text-dark-600">Работаем на рынке проектирования с 2009 года</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary-500 mb-2">200+</div>
            <h3 className="text-xl font-semibold text-dark-800 mb-2">Проектов</h3>
            <p className="text-dark-600">Успешно реализовано более 200 проектов разной сложности</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary-500 mb-2">47</div>
            <h3 className="text-xl font-semibold text-dark-800 mb-2">Регионов</h3>
            <p className="text-dark-600">
              Работаем по всей России, от западных границ до Дальнего Востока
            </p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none mb-16">
          <h2 className="text-3xl font-bold text-dark-800 mb-4">Наша миссия</h2>
          <p className="text-dark-600 leading-relaxed mb-4">
            Мы создаём качественную проектную документацию, которая служит надёжной основой для
            строительства объектов любого назначения и сложности. Наша команда из опытных инженеров
            и архитекторов понимает требования современного строительства и нормативной базы.
          </p>
          <p className="text-dark-600 leading-relaxed">
            Каждый проект для нас — это возможность создать что-то значимое, что будет служить людям
            долгие годы. Мы ответственно подходим к каждому этапу разработки, уделяя внимание
            деталям и соблюдению всех нормативных требований.
          </p>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-bold text-dark-800 mb-12">Наша команда</h2>
          <TeamCard />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-dark-800 mb-12">Компетенции</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-slate-200">
              <h3 className="text-xl font-semibold text-primary-500 mb-4">Жилые здания</h3>
              <ul className="space-y-2 text-dark-600">
                <li>• Многоэтажные жилые комплексы</li>
                <li>• Коттеджные посёлки</li>
                <li>• Таунхаусные комплексы</li>
                <li>• Студенческие общежития</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg border border-slate-200">
              <h3 className="text-xl font-semibold text-primary-500 mb-4">Нежилые здания</h3>
              <ul className="space-y-2 text-dark-600">
                <li>• Офисные центры и бизнес-центры</li>
                <li>• Торговые центры и магазины</li>
                <li>• Гостиничные комплексы</li>
                <li>• Учебные и медицинские учреждения</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg border border-slate-200">
              <h3 className="text-xl font-semibold text-primary-500 mb-4">Промышленные объекты</h3>
              <ul className="space-y-2 text-dark-600">
                <li>• Производственные корпуса</li>
                <li>• Складские комплексы</li>
                <li>• Логистические центры</li>
                <li>• Ангары и павильоны</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg border border-slate-200">
              <h3 className="text-xl font-semibold text-primary-500 mb-4">Инженерные системы</h3>
              <ul className="space-y-2 text-dark-600">
                <li>• Электроснабжение и СИП</li>
                <li>• Водоснабжение и водоотведение</li>
                <li>• Отопление и вентиляция</li>
                <li>• Слаботочные системы</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
