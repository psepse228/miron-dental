import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'

const fadeUpView = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay },
})

const TIMELINE = [
  { year: '2014', text: 'Открытие клиники Miron Dentistry в Ташкенте.' },
  { year: '2017', text: 'Расширение: новый кабинет имплантации и цифровая рентгенография.' },
  { year: '2020', text: 'Внедрение цифрового протоколирования и 3D-диагностики.' },
  { year: '2023', text: 'Более 5 000 довольных пациентов. Рейтинг 5.0 на всех платформах.' },
]

const EQUIPMENT = [
  'Цифровой 3D-томограф',
  'Лазерная установка для лечения',
  'Система Zoom для отбеливания',
  'CAD/CAM система для коронок',
  'Ротационные эндодонтические инструменты',
  'Внутриротовые 3D-сканеры',
]

export default function About() {
  return (
    <div className="pt-20">
      {/* Page header */}
      <section className="py-20 px-6 bg-charcoal text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gold text-[11px] tracking-[4px] uppercase mb-4">Наша история</p>
          <h1 className="font-serif" style={{ fontSize: 'clamp(36px, 5vw, 72px)', fontWeight: 300 }}>
            О клинике
          </h1>
        </motion.div>
      </section>

      {/* Mission */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeUpView()}>
            <p className="text-gold text-[11px] tracking-[3px] uppercase mb-4">Наша миссия</p>
            <h2
              className="font-serif text-charcoal mb-8"
              style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 300, lineHeight: 1.15 }}
            >
              Создать улыбку, которой{' '}
              <em className="italic text-gold/80">вы будете гордиться</em>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Мы верим, что качественная стоматология — это не только здоровье, но и уверенность
              в себе. Наша команда специалистов работает с одной целью: подарить вам улыбку,
              которая изменит вашу жизнь.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 bg-offwhite">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUpView()} className="text-center mb-16">
            <p className="text-gold text-[11px] tracking-[3px] uppercase mb-3">Путь развития</p>
            <h2 className="font-serif text-charcoal" style={{ fontSize: 'clamp(28px, 3vw, 44px)', fontWeight: 300 }}>
              Наша история
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold/20 hidden md:block" />
            <div className="space-y-10">
              {TIMELINE.map(({ year, text }, i) => (
                <motion.div
                  key={year}
                  {...fadeUpView(i * 0.15)}
                  className={`flex items-center gap-8 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <p className="font-serif text-gold text-3xl font-light mb-1">{year}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{text}</p>
                  </div>
                  <div className="hidden md:flex w-4 h-4 rounded-full border-2 border-gold bg-white shrink-0 relative z-10" />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUpView()}>
            <p className="text-gold text-[11px] tracking-[3px] uppercase mb-3">Технологии</p>
            <h2
              className="font-serif text-charcoal mb-6"
              style={{ fontSize: 'clamp(28px, 3vw, 44px)', fontWeight: 300, lineHeight: 1.15 }}
            >
              Современное<br />оборудование
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Мы инвестируем в лучшее оборудование, чтобы диагностика была точной,
              лечение — эффективным, а процедуры — максимально комфортными.
            </p>
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 text-gold text-[12px] tracking-[2px] uppercase border-b border-gold/40 pb-0.5 hover:border-gold transition-colors"
            >
              Записаться на осмотр <ArrowRight size={13} />
            </Link>
          </motion.div>

          <motion.div {...fadeUpView(0.2)} className="grid grid-cols-1 gap-3">
            {EQUIPMENT.map((item, i) => (
              <motion.div
                key={item}
                {...fadeUpView(i * 0.08)}
                className="flex items-center gap-4 py-4 border-b border-gray-100 last:border-0"
              >
                <CheckCircle size={16} className="text-gold shrink-0" />
                <span className="text-charcoal text-sm">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-charcoal text-center text-white">
        <motion.div {...fadeUpView()}>
          <h2 className="font-serif mb-6" style={{ fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 300 }}>
            Познакомьтесь с нашей командой
          </h2>
          <Link
            to="/doctors"
            className="inline-flex items-center gap-2 px-8 py-4 border border-gold text-gold text-[12px] tracking-[2px] uppercase hover:bg-gold hover:text-white transition-all duration-300"
          >
            Наши врачи <ArrowRight size={14} />
          </Link>
        </motion.div>
      </section>
    </div>
  )
}


