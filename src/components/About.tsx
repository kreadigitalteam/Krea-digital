import { KREA_LETTERS } from '../data/content'

export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-krea-surface/50 relative pt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Sobre <span>KREA</span>
          </h2>
          <div className="gold-line mt-4 mb-6" />
          <p className="text-krea-gray max-w-2xl mx-auto text-lg leading-relaxed">
            Somos una agencia digital especializada en llevar tu marca al siguiente nivel.
            Gestionamos tus redes sociales, creamos y mantenemos tu página web, y organizamos
            eventos que conectan con tu audiencia.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {KREA_LETTERS.map(({ letter, word, description }) => (
            <div
              key={letter}
              className="glass-card rounded-2xl p-6 text-center group transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-krea-gold/30 flex items-center justify-center group-hover:border-krea-gold transition-colors">
                <span className="text-3xl font-extrabold text-krea-blue">{letter}</span>
              </div>
              <h3 className="text-krea-gold font-bold text-sm uppercase tracking-wider mb-1">
                {word}
              </h3>
              <p className="text-krea-gray text-xs leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
