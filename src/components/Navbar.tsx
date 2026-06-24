import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NAV_LINKS } from '../data/content'


function Logo({ positive }: { positive: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <div className="relative w-28 h-28">
        <img
          src="/Krea_negativo.png"
          alt="Krea Digital"
          className={`absolute inset-0 w-full h-full object-contain rounded-full transition-opacity duration-500 ease-out ${positive ? 'opacity-0' : 'opacity-100'}`}
        />
        <img
          src="/KREA.png"
          alt="Krea Digital"
          className={`absolute inset-0 w-full h-full object-contain rounded-full transition-opacity duration-500 ease-out ${positive ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>
    </Link>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const alwaysLight = location.pathname === '/contact'
  const logoPositive = scrolled || alwaysLight

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const effectiveScrolled = scrolled || alwaysLight
  const linkClass = effectiveScrolled
    ? 'text-krea-blue/85 hover:text-krea-gold'
    : 'text-white/85 hover:text-krea-gold'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        effectiveScrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-krea-gold/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Logo positive={logoPositive} />
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <Link
                to={href}
                className={`text-sm font-medium transition-colors tracking-wide ${linkClass}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to="/contact"
          className="hidden md:inline-flex px-5 py-2.5 bg-krea-gold text-white text-sm font-semibold rounded-full hover:bg-krea-gold/90 transition-colors"
        >
          Hablemos
        </Link>
        <button
          type="button"
          className={`md:hidden p-2 transition-colors ${scrolled ? 'text-krea-blue' : 'text-white'}`}
          aria-label="Menú"
          onClick={() => {
            const menu = document.getElementById('mobile-menu')
            menu?.classList.toggle('hidden')
          }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
      <div
        id="mobile-menu"
        className={`hidden md:hidden mx-4 rounded-xl p-4 mb-4 ${
          scrolled
            ? 'bg-white border border-krea-blue/10 shadow-md'
            : 'glass'
        }`}
      >
        <ul className="flex flex-col gap-3">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <Link
                to={href}
                className={`block text-sm font-medium py-2 transition-colors ${
                  scrolled ? 'text-krea-blue/90 hover:text-krea-gold' : 'text-white/90 hover:text-krea-gold'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
