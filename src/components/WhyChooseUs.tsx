import { WHY_CHOOSE_US } from '../data/content'
import { whyIcons } from '../data/icons'

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-krea-blue">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-krea-gold text-2xl md:text-3xl font-bold mb-12 tracking-tight">
          ¿Por qué elegirnos?
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {WHY_CHOOSE_US.map(({ label, icon }) => {
            const Icon = whyIcons[icon]
            return (
              <div key={label} className="flex flex-col items-center text-center group">
                <div className="w-14 h-14 rounded-full border border-krea-gold/30 flex items-center justify-center mb-3 group-hover:border-krea-gold group-hover:bg-krea-gold/10 transition-all">
                  <Icon className="w-6 h-6 text-krea-gold" strokeWidth={1.5} />
                </div>
                <p className="text-white/85 text-xs font-medium leading-snug max-w-[120px]">{label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
