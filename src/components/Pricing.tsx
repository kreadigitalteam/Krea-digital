import { PRICING_TIERS } from '../data/content'
import PricingCard from './PricingCard'

export default function Pricing() {
  return (
    <section id="precios" className="py-24 bg-krea-light/80 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Nuestros <span>Precios</span> y servicios
          </h2>
          <div className="gold-line mt-4 mb-6" />
          <p className="text-krea-gray max-w-xl mx-auto">
            Elige entre nuestros packs mensuales de marketing y una oferta web con precios claros: mantenimiento fijo o desarrollo a medida.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {PRICING_TIERS.map((tier) => (
            <PricingCard
              key={tier.id}
              name={tier.name}
              slogan={tier.slogan}
              price={tier.price}
              services={tier.services}
              benefits={tier.benefits}
              footerSlogan={tier.footerSlogan}
              promotion={'promotion' in tier ? tier.promotion : undefined}
              featured={tier.featured}
              isPremium={'isPremium' in tier && tier.isPremium}
            />
          ))}
        </div>

        <div className="mt-16 bg-white/90 glass-card rounded-3xl p-8 border border-krea-blue/10">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-center">
            <div className="space-y-4">
              <p className="text-krea-blue text-xs font-bold uppercase tracking-[0.2em]">Página Web</p>
              <h3 className="text-3xl font-extrabold text-krea-blue">Precios propios para tu presencia online</h3>
              <p className="text-krea-gray max-w-xl">
                Ofrecemos servicios web con precios propios y transparentes: mantenimiento mensual y creación web según tus requisitos.
              </p>
              <ul className="space-y-3 text-krea-gray text-sm">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-krea-gold">&#9670;</span>
                  Precio propio de Krea Digital, sin intermediarios.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-krea-gold">&#9670;</span>
                  Mantenimiento web profesional por solo <strong>65$ al mes</strong>.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-krea-gold">&#9670;</span>
                  Creación web a medida con presupuesto según requisitos.
                </li>
              </ul>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl bg-krea-surface/90 p-6 border border-krea-blue/10 shadow-sm">
                <p className="text-krea-blue text-xs font-semibold uppercase tracking-[0.2em] mb-4">Mantenimiento web</p>
                <p className="text-krea-gold text-5xl font-black">65$</p>
                <p className="text-krea-gray mt-2">mensual</p>
                <ul className="mt-6 space-y-2 text-krea-gray text-sm">
                  <li>Actualizaciones regulares</li>
                  <li>Soporte técnico continuo</li>
                  <li>Revisión y mejora de contenidos</li>
                </ul>
              </div>
              <div className="rounded-3xl bg-krea-surface/90 p-6 border border-krea-blue/10 shadow-sm">
                <p className="text-krea-blue text-xs font-semibold uppercase tracking-[0.2em] mb-4">Creación web</p>
                <p className="text-krea-gray">Precio depende de los requisitos de la página web.</p>
                <div className="mt-6 space-y-2 text-krea-gray text-sm">
                  <p>- Diseño a medida</p>
                  <p>- UX y SEO básico</p>
                  <p>- Ajuste según objetivos de negocio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
