import { Link } from 'react-router-dom'
import { CONTACT_EMAIL } from '../data/content'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-krea-blue overflow-hidden">
      <div className="absolute top-1/4 -left-16 w-32 h-32 rounded-full glass-sphere animate-float opacity-60" />
      <div className="absolute bottom-1/4 -right-20 w-48 h-48 rounded-full glass-sphere animate-float-delayed opacity-40" />

      <div className="relative w-full max-w-7xl mx-auto px-3 sm:px-6 pt-16 sm:pt-20 pb-0 flex flex-col items-center justify-center min-h-screen">
        <div className="glass rounded-2xl sm:rounded-3xl p-5 sm:p-10 md:p-16 max-w-sm sm:max-w-3xl md:max-w-4xl w-full text-center shadow-2xl relative z-10 -mb-6 sm:-mb-8 border border-white/20">
          <p className="text-krea-gold text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase mb-2 sm:mb-3">
            Krea Digital
          </p>
          <h1 className="text-white text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight uppercase mb-3 sm:mb-4">
            Impulsamos tu presencia digital hasta el siguiente nivel
          </h1>
          <p className="text-white/75 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto mb-4 sm:mb-6">
            Impulsamos el crecimiento real de tu empresa mediante estrategias digitales, profesionalismo y resultados medibles.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              to="/contact"
              className="px-6 sm:px-8 py-2.5 sm:py-3.5 border-2 border-krea-gold text-white font-semibold rounded-full hover:bg-krea-gold/10 transition-all text-xs sm:text-sm tracking-wide"
            >
              Contáctanos
            </Link>
            <a
              href="/#precios"
              className="px-6 sm:px-8 py-2.5 sm:py-3.5 bg-krea-gold text-white font-semibold rounded-full hover:bg-krea-gold/90 transition-all hover:scale-105 text-xs sm:text-sm tracking-wide"
            >
              Ver promoción 2 meses gratis
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-krea-surface/40 pointer-events-none" />
    </section>
  )
}
