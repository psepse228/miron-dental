import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, MapPin, Clock, CheckCircle } from 'lucide-react'

const fadeUpView = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay },
})

const SERVICES = [
  'Консультация',
  'Лечение кариеса',
  'Профессиональная чистка',
  'Ортодонтия',
  'Имплантация',
  'Эстетическая стоматология',
  'Другое',
]

const TIMES = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00']

export default function Booking() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    comment: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: wire to Telegram bot
    setSubmitted(true)
  }

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
            Запись на приём
          </h1>
          <p className="text-white/50 mt-4 max-w-sm mx-auto">
            Заполните форму и мы свяжемся с вами для подтверждения.
          </p>
        </motion.div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Form */}
          <motion.div {...fadeUpView()} className="lg:col-span-2">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-20"
              >
                <CheckCircle size={48} className="text-gold mb-6" />
                <h2 className="font-serif text-charcoal text-3xl mb-3" style={{ fontWeight: 300 }}>
                  Заявка отправлена
                </h2>
                <p className="text-gray-500 max-w-sm">
                  Мы получили вашу заявку и свяжемся с вами в ближайшее время для подтверждения записи.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-[11px] tracking-[2px] uppercase text-gray-400 mb-2">
                      Имя *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Ваше имя"
                      className="w-full border border-gray-200 px-4 py-3.5 text-sm text-charcoal placeholder:text-gray-300 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[11px] tracking-[2px] uppercase text-gray-400 mb-2">
                      Телефон *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+998 00 000 00 00"
                      className="w-full border border-gray-200 px-4 py-3.5 text-sm text-charcoal placeholder:text-gray-300 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label className="block text-[11px] tracking-[2px] uppercase text-gray-400 mb-2">
                    Услуга
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full border border-gray-200 px-4 py-3.5 text-sm text-charcoal focus:outline-none focus:border-gold transition-colors appearance-none bg-white"
                  >
                    <option value="">Выберите услугу</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Date */}
                  <div>
                    <label className="block text-[11px] tracking-[2px] uppercase text-gray-400 mb-2">
                      Дата
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      className="w-full border border-gray-200 px-4 py-3.5 text-sm text-charcoal focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>

                  {/* Time */}
                  <div>
                    <label className="block text-[11px] tracking-[2px] uppercase text-gray-400 mb-2">
                      Время
                    </label>
                    <select
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                      className="w-full border border-gray-200 px-4 py-3.5 text-sm text-charcoal focus:outline-none focus:border-gold transition-colors appearance-none bg-white"
                    >
                      <option value="">Выберите время</option>
                      {TIMES.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Comment */}
                <div>
                  <label className="block text-[11px] tracking-[2px] uppercase text-gray-400 mb-2">
                    Комментарий
                  </label>
                  <textarea
                    name="comment"
                    value={form.comment}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Опишите вашу проблему или пожелания..."
                    className="w-full border border-gray-200 px-4 py-3.5 text-sm text-charcoal placeholder:text-gray-300 focus:outline-none focus:border-gold transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gold text-white text-[12px] tracking-[2px] uppercase hover:bg-gold-dark transition-colors duration-300"
                >
                  Записаться на приём
                </button>

                <p className="text-[11px] text-gray-400 text-center">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                </p>
              </form>
            )}
          </motion.div>

          {/* Sidebar contacts */}
          <motion.div {...fadeUpView(0.2)} className="space-y-8">
            <div>
              <p className="text-[11px] tracking-[2px] uppercase text-gray-400 mb-4">Контакты</p>
              <div className="space-y-4">
                <a href="tel:+998000000000" className="flex items-start gap-3 group">
                  <div className="w-8 h-8 border border-gold/30 flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                    <Phone size={13} className="text-gold group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-0.5">Телефон</p>
                    <p className="text-sm text-charcoal">+998 00 000 00 00</p>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 border border-gold/30 flex items-center justify-center shrink-0">
                    <MapPin size={13} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-0.5">Адрес</p>
                    <p className="text-sm text-charcoal">Ташкент, Узбекистан</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 border border-gold/30 flex items-center justify-center shrink-0">
                    <Clock size={13} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-0.5">Режим работы</p>
                    <p className="text-sm text-charcoal">Пн–Сб: 9:00 – 20:00</p>
                    <p className="text-sm text-gray-400">Вс: выходной</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-offwhite">
              <p className="font-serif text-charcoal text-lg mb-2" style={{ fontWeight: 400 }}>
                Первичная консультация
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Бесплатный осмотр и составление индивидуального плана лечения.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}


