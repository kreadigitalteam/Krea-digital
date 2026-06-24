import { SERVICES } from '../data/content'
import { serviceIcons } from '../data/icons'

export default function Services() {
  return (
    <section id="servicios" className="py-24 section-soft relative overflow-hidden">
      <div className="absolute top-20 -left-10 w-40 h-40 rounded-full glass-sphere animate-float opacity-50 pointer-events-none" />
      <div className="absolute bottom-10 -right-10 w-56 h-56 rounded-full glass-sphere animate-float-delayed opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Nuestros <span>Servicios</span>
          </h2>
          <div className="gold-line mt-4 mb-6" />
          <p className="text-krea-gray max-w-xl mx-auto">
            Soluciones integrales para potenciar tu presencia digital
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map(({ title, description, icon }) => {
            const Icon = serviceIcons[icon]
            return (
              <article
                key={title}
                className="glass-card rounded-3xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-20 h-20 rounded-full glass-sphere flex items-center justify-center mb-6 shrink-0">
                  <Icon className="w-9 h-9 text-krea-gold" strokeWidth={1.5} />
                </div>
                <h3 className="text-krea-blue font-bold text-base md:text-lg mb-3 leading-snug px-1">
                  {title}
                </h3>
                <p className="text-krea-gray text-sm leading-relaxed flex-1 mb-5">
                  {description}
                </p>
                <a
                  href="#precios"
                  className="text-krea-gold text-sm font-semibold hover:underline underline-offset-4 mt-auto"
                >
                  Saber más
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
