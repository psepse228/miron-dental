import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const LINKS = [
  { href: '/', label: 'Главная' },
  { href: '/services', label: 'Услуги' },
  { href: '/about', label: 'О нас' },
  { href: '/doctors', label: 'Врачи' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full border border-gold flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2C9 2 7 4 7 7c0 2 .5 3.5 1 5l1 5c.3 1.2 1 2 2 2h2c1 0 1.7-.8 2-2l1-5c.5-1.5 1-3 1-5 0-3-2-5-5-5z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gold group-hover:text-white transition-colors duration-300"
              />
            </svg>
          </div>
          <div>
            <span
              className={cn(
                'block text-sm tracking-[3px] uppercase font-medium transition-colors duration-300',
                scrolled ? 'text-charcoal' : 'text-white'
              )}
            >
              MIRON
            </span>
            <span
              className={cn(
                'block text-[10px] tracking-[2px] uppercase -mt-0.5 transition-colors duration-300',
                scrolled ? 'text-gold' : 'text-gold/90'
              )}
            >
              dentistry
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map(({ href, label }) => (
            <Link
              key={href}
              to={href}
              className={cn(
                'text-[13px] tracking-[1.5px] uppercase transition-colors duration-300',
                pathname === href ? 'text-gold' : scrolled ? 'text-charcoal hover:text-gold' : 'text-white/90 hover:text-white'
              )}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/booking"
            className="ml-4 px-5 py-2.5 border border-gold text-gold text-[12px] tracking-[1.5px] uppercase hover:bg-gold hover:text-white transition-all duration-300"
          >
            Запись
          </Link>
        </nav>

        {/* Mobile burger */}
        <button
          className={cn('md:hidden transition-colors duration-300', scrolled ? 'text-charcoal' : 'text-white')}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  to={href}
                  className={cn(
                    'text-[13px] tracking-[1.5px] uppercase transition-colors',
                    pathname === href ? 'text-gold' : 'text-charcoal hover:text-gold'
                  )}
                >
                  {label}
                </Link>
              ))}
              <Link
                to="/booking"
                className="mt-2 px-5 py-3 bg-gold text-white text-[12px] tracking-[1.5px] uppercase text-center"
              >
                Записаться на приём
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
