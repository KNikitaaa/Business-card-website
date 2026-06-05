'use client'

export default function TeamCard() {
  return (
    <div className="bg-white rounded-lg border-2 border-slate-200 overflow-hidden">
      {/* Avatar */}
      <div className="flex justify-center pt-8">
        <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white text-6xl font-bold shadow-lg">
          ИП
        </div>
      </div>

      {/* Content */}
      <div className="p-8 text-center">
        <h3 className="text-2xl font-bold text-dark-800 mb-1">Иван Петров</h3>
        <p className="text-primary-500 font-semibold mb-4">Главный инженер проекта</p>

        <p className="text-dark-600 text-sm mb-6 leading-relaxed">
          Стаж работы в инженерном проектировании — 18 лет. Член саморегулируемой организации
          проектировщиков. Образование: МГСУ, факультет «Архитектурно-конструктивное
          проектирование».
        </p>

        <div className="border-t border-slate-200 pt-6">
          <p className="text-xs text-dark-500 uppercase tracking-wider mb-3">Компетенции</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {['Архитектура', 'КЖ', 'ВСП', 'АВР', 'ОВ', 'ВК'].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-slate-100 text-dark-700 text-xs rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
