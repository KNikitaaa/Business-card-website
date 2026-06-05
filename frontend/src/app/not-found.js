import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-7xl md:text-9xl font-bold text-primary-500 mb-4">404</h1>
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">Страница не найдена</h2>
        <p className="text-dark-400 text-lg mb-8 max-w-md">
          К сожалению, запрашиваемая вами страница не существует или была перемещена.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-colors"
          >
            На главную
          </Link>
          <Link
            href="/contacts"
            className="px-8 py-3 border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white rounded-lg font-semibold transition-colors"
          >
            Контакты
          </Link>
        </div>
      </div>
    </div>
  )
}
