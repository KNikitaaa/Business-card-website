'use client'

export default function ProjectImage({ category }) {
  const gradients = {
    residential: 'from-blue-400 to-blue-600',
    commercial: 'from-green-400 to-green-600',
    industrial: 'from-gray-400 to-gray-600',
    special: 'from-purple-400 to-purple-600',
  }

  const icons = {
    residential: '🏘️',
    commercial: '🏢',
    industrial: '🏭',
    special: '🎨',
  }

  const categoryName = {
    residential: 'Жилые объекты',
    commercial: 'Нежилые объекты',
    industrial: 'Промышленные объекты',
    special: 'Специальные объекты',
  }

  const gradient = gradients[category] || gradients.special
  const icon = icons[category] || icons.special
  const name = categoryName[category] || categoryName.special

  return (
    <div
      className={`bg-gradient-to-br ${gradient} w-full h-full flex items-center justify-center relative overflow-hidden`}
    >
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-white text-center">
        <div className="text-6xl md:text-8xl mb-4">{icon}</div>
        <p className="text-sm md:text-lg font-semibold opacity-90">{name}</p>
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/10 -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-white/10 -ml-30 -mb-30" />
    </div>
  )
}
