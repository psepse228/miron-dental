import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const fadeUpView = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay },
})

const SERVICES = [
  {
    category: 'Терапия',
    items: [
      { name: 'Лечение кариеса', desc: 'Современные композитные материалы. Восстановление без боли.', price: 'от 80 000 сум' },
      { name: 'Лечение пульпита', desc: 'Эндодонтическое лечение каналов с применением ротационных инструментов.', price: 'от 200 000 сум' },
      { name: 'Профессиональная чистка', desc: 'Ультразвуковая чистка и Air Flow. Удаление налёта и зубного камня.', price: 'от 120 000 сум' },
    ],
  },
  {
    category: 'Ортодонтия',
    items: [
      { name: 'Брекет-системы', desc: 'Металлические и керамические брекеты для коррекции прикуса.', price: 'от 3 500 000 сум' },
      { name: 'Элайнеры', desc: 'Прозрачные съёмные капы — незаметное исправление зубов.', price: 'от 5 000 000 сум' },
      { name: 'Ретейнеры', desc: 'Удержание результата после ортодонтического лечения.', price: 'от 300 000 сум' },
    ],
  },
  {
    category: 'Имплантация',
    items: [
      { name: 'Дентальный имплантат', desc: 'Titanium имплантаты мировых брендов с гарантией.', price: 'от 2 500 000 сум' },
      { name: 'Костная пластика', desc: 'Восстановление костной ткани перед имплантацией.', price: 'от 1 200 000 сум' },
      { name: 'Протезирование на имплантатах', desc: 'Коронки и мосты на имплантатах из циркония.', price: 'от 1 800 000 сум' },
    ],
  },
  {
    category: 'Эстетика',
    items: [
      { name: 'Виниры', desc: 'Тонкие керамические накладки для идеальной формы и цвета.', price: 'от 900 000 сум' },
      { name: 'Отбеливание Zoom', desc: 'Профессиональное отбеливание на несколько тонов за один сеанс.', price: 'от 600 000 сум' },
      { name: 'Художественная реставрация', desc: 'Восстановление формы и эстетики с помощью композитных материалов.', price: 'от 250 000 сум' },
    ],
  },
]

export default function Services() {
  return (
    <div className="pt-20">
      {/* Page header */}
      <section className="py-20 px-6 bg-charcoal text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gold text-[11px] tracking-[4px] uppercase mb-4">Miron Dentistry</p>
          <h1 className="font-serif" style={{ fontSize: 'clamp(36px, 5vw, 72px)', fontWeight: 300 }}>
            Услуги
          </h1>
          <p className="text-white/50 mt-4 max-w-md mx-auto">
            Полный спектр стоматологической помощи — от профилактики до сложного протезирования.
          </p>
        </motion.div>
      </section>

      {/* Services by category */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto space-y-20">
          {SERVICES.map(({ category, items }, ci) => (
            <div key={category}>
              <motion.div {...fadeUpView()} className="flex items-center gap-4 mb-10">
                <h2 className="font-serif text-charcoal" style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 300 }}>
                  {category}
                </h2>
                <div className="flex-1 h-px bg-gray-100" />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {items.map(({ name, desc, price }, ii) => (
                  <motion.div
                    key={name}
                    {...fadeUpView((ci * 0.1) + (ii * 0.1))}
                    className="p-7 border border-gray-100 hover:border-gold/30 hover:shadow-md transition-all duration-400 group"
                  >
                    <h3 className="font-serif text-charcoal text-lg mb-2 group-hover:text-gold transition-colors duration-300">
                      {name}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-5">{desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gold text-sm font-medium">{price}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-offwhite text-center">
        <motion.div {...fadeUpView()}>
          <p className="text-gold text-[11px] tracking-[4px] uppercase mb-3">Готовы начать?</p>
          <h2 className="font-serif text-charcoal mb-6" style={{ fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 300 }}>
            Запишитесь на консультацию
          </h2>
          <Link
            to="/booking"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-white text-[12px] tracking-[2px] uppercase hover:bg-gold-dark transition-colors duration-300"
          >
            Записаться <ArrowRight size={14} />
          </Link>
        </motion.div>
      </section>
    </div>
  )
}


