import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">ПРОЕКТНАЯ ГРУППА</h3>
            <p className="text-slate-400 text-sm">
              Профессиональное проектирование зданий и сооружений с 2009 года.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Проекты
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="hover:text-white transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="tel:+74955551234" className="hover:text-white transition-colors">
                  +7 (495) 555-12-34
                </a>
              </li>
              <li>
                <a href="mailto:info@proektgroup.ru" className="hover:text-white transition-colors">
                  info@proektgroup.ru
                </a>
              </li>
              <li className="text-slate-500">пн–пт: 09:00 – 18:00</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Документы</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Политика конфиденциальности
                </Link>
              </li>
              <li className="text-slate-500">ИНН: 7700000000</li>
              <li className="text-slate-500">КПП: 770000000</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8">
          <p className="text-sm text-slate-400 text-center">
            © {currentYear} Проектная группа. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}
