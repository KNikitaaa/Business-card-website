import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Portfolio from '@/components/sections/Portfolio'
import About from '@/components/sections/About'
import ContactSection from '@/components/sections/ContactSection'
import CTA from '@/components/sections/CTA'

export const metadata = {
  title: 'Проектная группа | Главная',
  description:
    'Проектирование зданий и сооружений. Жилые дома, офисы, промышленные объекты. Опыт 15+ лет.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <ContactSection />
      <CTA />
    </>
  )
}
