import { Link } from 'react-router-dom'
import { Phone, MapPin, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/70">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <div className="mb-4">
            <p className="text-white text-sm tracking-[3px] uppercase font-medium">MIRON</p>
            <p className="text-gold text-[11px] tracking-[2px] uppercase">dentistry</p>
          </div>
          <p className="text-sm leading-relaxed text-white/50 max-w-xs">
            Стоматологическая клиника с современным оборудованием и передовыми методиками лечения.
          </p>
          <a
            href="https://instagram.com/mirondentistry"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-white/50 hover:text-gold transition-colors text-sm"
          >
            @mirondentistry
          </a>
        </div>

        {/* Navigation */}
        <div>
          <p className="text-white text-[11px] tracking-[2px] uppercase mb-5">Навигация</p>
          <nav className="flex flex-col gap-3">
            {[
              { href: '/', label: 'Главная' },
              { href: '/services', label: 'Услуги' },
              { href: '/about', label: 'О нас' },
              { href: '/doctors', label: 'Врачи' },
              { href: '/booking', label: 'Запись на приём' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                to={href}
                className="text-sm text-white/50 hover:text-gold transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contacts */}
        <div>
          <p className="text-white text-[11px] tracking-[2px] uppercase mb-5">Контакты</p>
          <div className="flex flex-col gap-4">
            <a href="tel:+998000000000" className="flex items-start gap-3 text-sm text-white/50 hover:text-gold transition-colors">
              <Phone size={14} className="mt-0.5 shrink-0" />
              +998 00 000 00 00
            </a>
            <div className="flex items-start gap-3 text-sm text-white/50">
              <MapPin size={14} className="mt-0.5 shrink-0" />
              <span>Ташкент, Узбекистан</span>
            </div>
            <div className="flex items-start gap-3 text-sm text-white/50">
              <Clock size={14} className="mt-0.5 shrink-0" />
              <span>Пн–Сб: 9:00 – 20:00<br />Вс: выходной</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-[11px] text-white/30 tracking-wider">
            © {new Date().getFullYear()} Miron Dentistry. Все права защищены.
          </p>
          <p className="text-[11px] text-white/20">
            Разработано Solura Agency
          </p>
        </div>
      </div>
    </footer>
  )
}
