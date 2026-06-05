import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'

import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CookieBanner from '@/components/layout/CookieBanner'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: 'Проектная группа | Проектирование зданий и сооружений',
  description:
    'Полный спектр услуг по проектированию жилых, нежилых и промышленных объектов. Опыт более 15 лет в инженерном проектировании.',
  keywords: ['проектирование', 'архитектура', 'здания', 'сооружения', 'проектная документация'],
  openGraph: {
    title: 'Проектная группа | Проектирование зданий и сооружений',
    description: 'Полный спектр услуг по проектированию жилых, нежилых и промышленных объектов.',
    url: 'https://proektgroup.ru',
    siteName: 'Проектная группа',
    locale: 'ru_RU',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={inter.variable}>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className="bg-white">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CookieBanner />
        <Toaster position="bottom-right" />
      </body>
    </html>
  )
}
