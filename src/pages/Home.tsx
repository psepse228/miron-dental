import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Star, Users, Award } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay },
})

const fadeUpView = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, delay },
})

const STATS = [
  { num: '10+', label: 'Лет опыта' },
  { num: '5 000+', label: 'Пациентов' },
  { num: '5.0', label: 'Рейтинг', icon: <Star className="w-3 h-3 fill-gold text-gold inline mr-0.5" /> },
  { num: '12', label: 'Специалистов' },
]

const SERVICES = [
  {
    title: 'Терапевтическая\nстоматология',
    desc: 'Лечение кариеса, пульпита и других заболеваний зубов с использованием современных методик.',
    icon: '🦷',
  },
  {
    title: 'Ортодонтия',
    desc: 'Исправление прикуса и выравнивание зубов брекетами и элайнерами.',
    icon: '✨',
  },
  {
    title: 'Имплантация',
    desc: 'Восстановление утраченных зубов с помощью имплантатов премиум-класса.',
    icon: '⚙️',
  },
  {
    title: 'Эстетическая\nстоматология',
    desc: 'Виниры, отбеливание, художественная реставрация для идеальной улыбки.',
    icon: '💎',
  },
]

const VALUES = [
  { icon: Shield, title: 'Безопасность', desc: 'Стерильное оборудование и строгий контроль качества на каждом этапе лечения.' },
  { icon: Award, title: 'Профессионализм', desc: 'Врачи с международными сертификатами и многолетним опытом.' },
  { icon: Users, title: 'Индивидуальный подход', desc: 'Персональный план лечения для каждого пациента.' },
]

export default function Home() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Video background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* Overlay — lighter at top to let the glow shine, darker at bottom for text */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/65" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <motion.p
            {...fadeUp(0.2)}
            className="text-gold text-[11px] tracking-[4px] uppercase mb-6"
          >
            Стоматологическая клиника
          </motion.p>

          <motion.h1
            {...fadeUp(0.4)}
            className="font-serif text-white mb-6"
            style={{ fontSize: 'clamp(48px, 7vw, 96px)', lineHeight: 1.05, fontWeight: 300 }}
          >
            Miron{' '}
            <em className="italic text-gold/90">Dentistry</em>
          </motion.h1>

          <motion.p
            {...fadeUp(0.6)}
            className="text-white/70 text-lg leading-relaxed mb-10 font-light"
          >
            Современное оборудование. Передовые методики.<br />
            Ваша улыбка — наше искусство.
          </motion.p>

          <motion.div {...fadeUp(0.8)} className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/booking"
              className="px-8 py-4 bg-gold text-white text-[12px] tracking-[2px] uppercase hover:bg-gold-dark transition-colors duration-300"
            >
              Записаться на приём
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 border border-white/50 text-white text-[12px] tracking-[2px] uppercase hover:border-white hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
            >
              Наши услуги <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/40 text-[10px] tracking-[3px] uppercase">Прокрутите</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
          />
        </motion.div>
      </section>

      {/* ── Stats strip ── */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map(({ num, label, icon }, i) => (
            <motion.div key={label} {...fadeUpView(i * 0.1)} className="text-center">
              <p
                className="font-serif text-charcoal"
                style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 300, lineHeight: 1 }}
              >
                {icon}{num}
              </p>
              <p className="text-[10px] tracking-[2px] uppercase text-gray-400 mt-1.5">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Services teaser ── */}
      <section className="py-28 px-6 bg-offwhite">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUpView()} className="text-center mb-16">
            <p className="text-gold text-[11px] tracking-[3px] uppercase mb-3">Что мы делаем</p>
            <h2 className="font-serif text-charcoal" style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 300 }}>
              Наши услуги
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map(({ title, desc, icon }, i) => (
              <motion.div
                key={title}
                {...fadeUpView(i * 0.12)}
                className="bg-white p-8 group hover:shadow-lg transition-shadow duration-500"
              >
                <span className="text-2xl mb-5 block">{icon}</span>
                <h3
                  className="font-serif text-charcoal mb-3 whitespace-pre-line"
                  style={{ fontSize: '20px', fontWeight: 400, lineHeight: 1.2 }}
                >
                  {title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUpView(0.5)} className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-gold text-[12px] tracking-[2px] uppercase border-b border-gold/40 pb-0.5 hover:border-gold transition-colors"
            >
              Все услуги <ArrowRight size={13} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── About teaser ── */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUpView()}>
            <p className="text-gold text-[11px] tracking-[3px] uppercase mb-3">О клинике</p>
            <h2
              className="font-serif text-charcoal mb-6"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 300, lineHeight: 1.1 }}
            >
              Здоровье и красота<br />
              <em className="italic text-gold/80">вашей улыбки</em>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-4">
              Miron Dentistry — это клиника нового поколения, где современные технологии
              встречаются с индивидуальным подходом к каждому пациенту.
            </p>
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              Мы используем только сертифицированные материалы и оборудование международного
              класса, чтобы каждое посещение было комфортным и результативным.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-gold text-[12px] tracking-[2px] uppercase border-b border-gold/40 pb-0.5 hover:border-gold transition-colors"
            >
              Узнать больше <ArrowRight size={13} />
            </Link>
          </motion.div>

          <motion.div {...fadeUpView(0.2)} className="grid grid-cols-1 gap-5">
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-5 p-6 bg-offwhite">
                <div className="w-10 h-10 border border-gold/40 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-serif text-charcoal text-lg mb-1">{title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA banner ── */}
      <section className="py-24 px-6 bg-charcoal text-white text-center">
        <motion.div {...fadeUpView()}>
          <p className="text-gold text-[11px] tracking-[4px] uppercase mb-4">Начните сегодня</p>
          <h2
            className="font-serif mb-6"
            style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 300 }}
          >
            Запишитесь на первичную консультацию
          </h2>
          <p className="text-white/50 mb-10 max-w-md mx-auto">
            Бесплатная консультация с врачом и составление плана лечения.
          </p>
          <Link
            to="/booking"
            className="inline-block px-10 py-4 bg-gold text-white text-[12px] tracking-[2px] uppercase hover:bg-gold-dark transition-colors duration-300"
          >
            Записаться на приём
          </Link>
        </motion.div>
      </section>
    </div>
  )
}


