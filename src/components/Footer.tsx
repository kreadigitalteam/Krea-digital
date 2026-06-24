import { Globe, MapPin } from 'lucide-react'
import { CONTACT_EMAIL, NAV_LINKS } from '../data/content'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-krea-surface/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="flex flex-col items-center md:items-start">
            <img src="/KREA_footer.png" alt="Krea Digital" className="w-28 h-28 object-contain mb-4" />
          </div>

          <div className="space-y-4">
            <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 text-krea-blue hover:text-krea-gold transition-colors justify-center md:justify-start">
              <span className="text-sm">{CONTACT_EMAIL}</span>
            </a>
            <a href="https://kreadigital.com" className="flex items-center gap-3 text-krea-blue hover:text-krea-gold transition-colors justify-center md:justify-start">
              <Globe className="w-4 h-4 text-krea-gold" />
              <span className="text-sm">www.kreadigital.com</span>
            </a>
            <a href="https://www.instagram.com/krea_digital.sl/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-krea-blue hover:text-krea-gold transition-colors justify-center md:justify-start">
              <svg className="w-4 h-4 text-krea-gold" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
              </svg>
              <span className="text-sm">@krea_digital</span>
            </a>
            <div className="flex items-center gap-3 text-krea-blue justify-center md:justify-start">
              <MapPin className="w-4 h-4 text-krea-gold" />
              <span className="text-sm">España</span>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-krea-blue font-semibold mb-4">¿Listo para crecer?</p>
            <Link
              to="/contact"
              className="inline-flex px-8 py-3 bg-krea-gold text-white font-semibold rounded-full hover:bg-krea-gold/90 transition-colors text-sm"
            >
              Hablemos de tu crecimiento
            </Link>
          </div>
        </div>
      </div>

      <div className="glass-light border-t border-krea-blue/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <ul className="flex flex-wrap justify-center gap-6">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link to={href} className="text-krea-blue/60 text-xs font-medium hover:text-krea-gold transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-krea-blue/40 text-xs">
            &copy; {new Date().getFullYear()} Krea Digital. Todos los derechos reservados.
          </p>
        </div>
      </div>

      <div className="bg-krea-gold/10 py-3 text-center">
        <p className="text-krea-blue text-xs font-medium tracking-wide">
          Impulsamos tu presencia digital y hacemos que tu marca destaque.
        </p>
      </div>
    </footer>
  )
}
