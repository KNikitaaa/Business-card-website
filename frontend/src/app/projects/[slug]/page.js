import { notFound } from 'next/navigation'

import ProjectGallery from '@/components/sections/ProjectGallery'
import ProjectSpecs from '@/components/sections/ProjectSpecs'
import ProjectCTA from '@/components/sections/ProjectCTA'
import { getProjectBySlug, getAllProjects } from '@/lib/projects'

export async function generateMetadata({ params }) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    return {
      title: 'Проект не найден | Проектная группа',
    }
  }

  return {
    title: `${project.title} | Проектная группа`,
    description: project.description,
  }
}

export async function generateStaticParams() {
  const projects = getAllProjects()
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectPage({ params }) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero with Gallery */}
      <ProjectGallery project={project} />

      {/* Project Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h1 className="text-4xl md:text-5xl font-bold text-dark-800 mb-4">{project.title}</h1>
            <p className="text-dark-600 text-lg leading-relaxed mb-8">{project.description}</p>

            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl font-bold text-dark-800 mb-4">Особенности проекта</h2>
              <ul className="space-y-2">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="text-dark-600">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="bg-slate-50 rounded-lg p-8 h-fit border border-slate-200">
            <h3 className="text-sm font-semibold text-primary-500 uppercase tracking-wider mb-6">
              Информация
            </h3>
            <div className="space-y-6">
              <div>
                <p className="text-dark-600 text-sm mb-1">Статус</p>
                <p className="font-semibold text-dark-800">{project.status}</p>
              </div>
              <div>
                <p className="text-dark-600 text-sm mb-1">Год реализации</p>
                <p className="font-semibold text-dark-800">{project.year}</p>
              </div>
              <div>
                <p className="text-dark-600 text-sm mb-1">Общая площадь</p>
                <p className="font-semibold text-dark-800">
                  {project.area.toLocaleString('ru-RU')} м²
                </p>
              </div>
              <div>
                <p className="text-dark-600 text-sm mb-1">Местоположение</p>
                <p className="font-semibold text-dark-800">{project.location}</p>
              </div>
              <div>
                <p className="text-dark-600 text-sm mb-1">Клиент</p>
                <p className="font-semibold text-dark-800">{project.client}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Specs */}
        <ProjectSpecs project={project} />
      </section>

      {/* CTA */}
      <ProjectCTA />
    </div>
  )
}
