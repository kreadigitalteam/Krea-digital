import { Crown } from 'lucide-react'
import { serviceIcons } from '../data/icons'

interface ServiceBlock {
  title: string
  items: readonly string[]
}

interface PricingCardProps {
  name: string
  slogan: string
  price: number
  services: readonly ServiceBlock[]
  benefits: readonly string[]
  footerSlogan: string
  promotion?: string
  featured?: boolean
  isPremium?: boolean
}

export default function PricingCard({
  name,
  slogan,
  price,
  services,
  benefits,
  footerSlogan,
  promotion,
  featured = false,
  isPremium = false,
}: PricingCardProps) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl overflow-hidden glass-card transition-all duration-300 hover:shadow-xl ${
        featured
          ? 'ring-2 ring-krea-gold/40 scale-[1.02] z-10'
          : 'hover:ring-1 hover:ring-krea-gold/20'
      }`}
    >
      {featured && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-krea-gold" />
      )}

      <div className="p-6 md:p-8 flex-1">
        <div className="text-center mb-6">
          {isPremium && (
            <Crown className="w-8 h-8 text-krea-gold mx-auto mb-2" strokeWidth={1.5} />
          )}
          <p className="text-krea-blue text-xs font-bold tracking-[0.2em] uppercase">Pack Mensual</p>
          <h3 className="text-2xl font-extrabold mt-1 text-krea-gold uppercase">{name}</h3>
          <div className="flex items-center gap-3 my-4">
            <div className="flex-1 h-px bg-krea-gold/30" />
            <span className="text-krea-gold text-xs">&#9670;</span>
            <div className="flex-1 h-px bg-krea-gold/30" />
          </div>
          <p className="text-krea-blue/70 text-xs font-semibold tracking-wider uppercase">{slogan}</p>
          {promotion ? (
            <div className="inline-flex items-center justify-center rounded-full bg-krea-gold/10 text-krea-gold text-[11px] font-semibold uppercase tracking-[0.24em] px-3 py-1 mt-4">
              {promotion}
            </div>
          ) : null}
        </div>

        <div className="grid grid-cols-1 gap-6 mb-8">
          {services.map((service, idx) => {
            const iconKey = service.title.toLowerCase().includes('web')
              ? 'web'
              : service.title.toLowerCase().includes('redes')
                ? 'social'
                : 'events'
            const Icon = serviceIcons[iconKey]
            return (
              <div key={service.title} className={idx < services.length - 1 ? 'pb-6 border-b border-krea-blue/5' : ''}>
                <div className="flex items-center gap-2 mb-3">
                  <Icon className="w-5 h-5 text-krea-gold" strokeWidth={1.5} />
                  <h4 className="text-krea-blue font-bold text-xs uppercase tracking-wider">{service.title}</h4>
                </div>
                <ul className="space-y-1.5">
                  {service.items.map((item) => (
                    <li key={item} className="text-krea-gray text-xs flex items-start gap-2">
                      <span className="text-krea-gold mt-0.5 shrink-0">&#9670;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <div className="relative bg-krea-blue rounded-xl p-4 text-center mb-6">
          <div className="absolute inset-0 rounded-xl border-2 border-krea-gold/40 pointer-events-none" />
          <p className="text-white/80 text-xs uppercase tracking-wider">Todo incluido por</p>
          <p className="text-krea-gold text-3xl font-extrabold mt-1">
            {price.toLocaleString('es-ES')}€
            <span className="text-white/60 text-sm font-normal"> /mes</span>
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
          {benefits.map((benefit) => (
            <span key={benefit} className="text-krea-blue/60 text-[10px] font-semibold uppercase tracking-wide">
              {benefit}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-krea-blue px-6 py-4 flex items-center justify-between">
        <p className="text-krea-gold text-xs font-semibold italic">{footerSlogan}</p>
        <a
          href="/contact"
          className="text-white text-xs font-bold uppercase tracking-wider hover:text-krea-gold transition-colors"
        >
          Contratar
        </a>
      </div>
    </div>
  )
}
