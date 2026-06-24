import { useState, type FormEvent } from 'react'
import { CONTACT_EMAIL } from '../data/content'

function createCaptchaQuestion() {
  const a = Math.floor(Math.random() * 9) + 1
  const b = Math.floor(Math.random() * 9) + 1
  const question = `¿Cuánto es ${a} + ${b}?`
  return { question, answer: String(a + b) }
}

export default function ContactForm() {
  const [captchaQuestion] = useState(createCaptchaQuestion)
  const [captchaAnswer, setCaptchaAnswer] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (captchaAnswer.trim() !== captchaQuestion.answer) {
      event.preventDefault()
      setError('Responde correctamente la pregunta anti-bot para continuar.')
    }
  }

  return (
    <section id="contacto" className="py-24 bg-krea-light/70">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-8 text-center">
          <p className="text-krea-blue text-xs font-bold uppercase tracking-[0.2em] mb-3">Contacto</p>
          <h2 className="section-title">
            Habla con <span>Krea Digital</span>
          </h2>
          <p className="text-krea-gray max-w-2xl mx-auto mt-4">
            Completa el formulario y nuestro equipo se pondrá en contacto contigo. Incluye tus datos, el asunto y una breve descripción de tu proyecto.
          </p>
        </div>

        <form
          action={`https://formsubmit.co/${CONTACT_EMAIL}`}
          method="POST"
          target="_blank"
          onSubmit={handleSubmit}
          className="space-y-4"
        >
      <input type="hidden" name="_subject" value="Nuevo mensaje desde Krea Digital" />
      <input type="hidden" name="_next" value="https://kreadigital.com" />
      <input type="hidden" name="_captcha" value="false" />

      <div>
        <label className="block text-krea-blue text-sm font-semibold mb-2" htmlFor="name">
          Nombre
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-3xl border border-krea-blue/10 bg-white/90 px-4 py-3 text-sm text-krea-blue outline-none transition focus:border-krea-gold focus:ring-2 focus:ring-krea-gold/20"
          placeholder="Tu nombre"
        />
      </div>

      <div>
        <label className="block text-krea-blue text-sm font-semibold mb-2" htmlFor="email">
          Correo electrónico
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-3xl border border-krea-blue/10 bg-white/90 px-4 py-3 text-sm text-krea-blue outline-none transition focus:border-krea-gold focus:ring-2 focus:ring-krea-gold/20"
          placeholder="tu@email.com"
        />
      </div>

      <div>
        <label className="block text-krea-blue text-sm font-semibold mb-2" htmlFor="subject">
          Asunto
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          className="w-full rounded-3xl border border-krea-blue/10 bg-white/90 px-4 py-3 text-sm text-krea-blue outline-none transition focus:border-krea-gold focus:ring-2 focus:ring-krea-gold/20"
          placeholder="Motivo de tu mensaje"
        />
      </div>

      <div>
        <label className="block text-krea-blue text-sm font-semibold mb-2" htmlFor="message">
          Mensaje / datos de contacto
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-3xl border border-krea-blue/10 bg-white/90 px-4 py-3 text-sm text-krea-blue outline-none transition focus:border-krea-gold focus:ring-2 focus:ring-krea-gold/20"
          placeholder="Cuéntanos tu proyecto o deja tus datos de contacto"
        />
      </div>

      <div>
        <label className="block text-krea-blue text-sm font-semibold mb-2" htmlFor="captcha">
          Pregunta anti-bot
        </label>
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-krea-gold/10 px-4 py-3 text-sm text-krea-blue">{captchaQuestion.question}</span>
          <input
            id="captcha"
            name="captcha"
            type="text"
            value={captchaAnswer}
            onChange={(event) => setCaptchaAnswer(event.target.value)}
            required
            className="flex-1 rounded-3xl border border-krea-blue/10 bg-white/90 px-4 py-3 text-sm text-krea-blue outline-none transition focus:border-krea-gold focus:ring-2 focus:ring-krea-gold/20"
            placeholder="Respuesta"
          />
        </div>
      </div>

      {error ? <p className="text-sm text-red-500">{error}</p> : null}

      <button
        type="submit"
        className="w-full rounded-full bg-krea-blue px-6 py-3 text-white font-semibold transition hover:bg-krea-blue/90"
      >
        Enviar mensaje
      </button>
    </form>
  </div>
</section>
  )
}
