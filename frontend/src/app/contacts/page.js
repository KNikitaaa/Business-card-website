import ContactForm from '@/components/sections/ContactForm'
import MapPlaceholder from '@/components/ui/MapPlaceholder'

export const metadata = {
  title: 'Контакты | Проектная группа',
  description: 'Свяжитесь с нами. Адрес, телефон, почта и форма обратной связи.',
}

export default function ContactsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Контакты</h1>
          <p className="text-xl text-slate-300">
            Хотите обсудить ваш проект? Свяжитесь с нами любым удобным способом.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-sm font-semibold text-primary-500 uppercase tracking-wider mb-2">
                Офис
              </h3>
              <p className="text-dark-700 font-semibold">Москва</p>
              <p className="text-dark-600">
                Ул. Проектная, д. 42
                <br />
                121058, Москва, Россия
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-primary-500 uppercase tracking-wider mb-2">
                Связь
              </h3>
              <p className="text-dark-600 mb-1">
                <a href="tel:+74955551234" className="hover:text-primary-500 transition-colors">
                  +7 (495) 555-12-34
                </a>
              </p>
              <p className="text-dark-600">
                <a
                  href="mailto:info@proektgroup.ru"
                  className="hover:text-primary-500 transition-colors"
                >
                  info@proektgroup.ru
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-primary-500 uppercase tracking-wider mb-2">
                Режим работы
              </h3>
              <p className="text-dark-600">
                Пн–Пт: 09:00 – 18:00
                <br />
                Сб–Вс: выходные
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-primary-500 uppercase tracking-wider mb-2">
                Реквизиты
              </h3>
              <p className="text-dark-600 text-sm">
                ООО «Проектная группа»
                <br />
                ИНН: 7700000000
                <br />
                КПП: 770000000
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>

        {/* Map */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-dark-800 mb-6">Как нас найти</h2>
          <MapPlaceholder />
        </div>
      </div>
    </div>
  )
}
