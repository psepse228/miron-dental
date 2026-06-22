import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const fadeUpView = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay },
})

const DOCTORS = [
  {
    name: 'Dr. Мирон Алексеев',
    role: 'Главный врач · Ортопед',
    exp: '15 лет опыта',
    specialties: ['Имплантация', 'Протезирование', 'Эстетическая стоматология'],
    img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80',
  },
  {
    name: 'Dr. Алина Юсупова',
    role: 'Ортодонт',
    exp: '10 лет опыта',
    specialties: ['Брекеты', 'Элайнеры', 'Коррекция прикуса'],
    img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80',
  },
  {
    name: 'Dr. Камол Рашидов',
    role: 'Терапевт · Эндодонтист',
    exp: '8 лет опыта',
    specialties: ['Лечение каналов', 'Терапия', 'Профилактика'],
    img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&q=80',
  },
  {
    name: 'Dr. Нилуфар Саидова',
    role: 'Хирург · Имплантолог',
    exp: '12 лет опыта',
    specialties: ['Имплантация', 'Костная пластика', 'Хирургия'],
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
  },
]

export default function Doctors() {
  return (
    <div className="pt-20">
      {/* Page header */}
      <section className="py-20 px-6 bg-charcoal text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gold text-[11px] tracking-[4px] uppercase mb-4">Наша команда</p>
          <h1 className="font-serif" style={{ fontSize: 'clamp(36px, 5vw, 72px)', fontWeight: 300 }}>
            Врачи
          </h1>
          <p className="text-white/50 mt-4 max-w-md mx-auto">
            Сертифицированные специалисты с опытом работы в ведущих клиниках мира.
          </p>
        </motion.div>
      </section>

      {/* Doctors grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
          {DOCTORS.map(({ name, role, exp, specialties, img }, i) => (
            <motion.div
              key={name}
              {...fadeUpView(i * 0.12)}
              className="group overflow-hidden border border-gray-100 hover:border-gold/30 hover:shadow-lg transition-all duration-500"
            >
              {/* Photo */}
              <div className="relative h-72 overflow-hidden bg-offwhite">
                <img
                  src={img}
                  alt={name}
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <span className="text-[10px] tracking-[2px] uppercase text-white/70 bg-black/30 px-3 py-1 backdrop-blur-sm">
                    {exp}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-7">
                <h3 className="font-serif text-charcoal text-xl mb-0.5">{name}</h3>
                <p className="text-gold text-[11px] tracking-[1.5px] uppercase mb-4">{role}</p>
                <div className="flex flex-wrap gap-2">
                  {specialties.map((s) => (
                    <span key={s} className="text-[11px] text-gray-500 border border-gray-200 px-3 py-1">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-offwhite text-center">
        <motion.div {...fadeUpView()}>
          <p className="text-gold text-[11px] tracking-[4px] uppercase mb-3">Готовы к приёму</p>
          <h2 className="font-serif text-charcoal mb-6" style={{ fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 300 }}>
            Запишитесь к нужному специалисту
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


