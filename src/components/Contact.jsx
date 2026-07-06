import { useState } from 'react'
import emailjs from '@emailjs/browser'
import FadeIn from './FadeIn'
const socials = [
  { icon: '⬡', label: 'LinkedIn',  href: 'www.linkedin.com/in/debora-dias-dev' },
  { icon: '◈', label: 'GitHub',    href: 'https://github.com/deborasaid'      },
  { icon: '✦', label: 'Email',     href: 'debora.dias.dev@gmail.com'             },
  { icon: '◉', label: 'WhatsApp', href: 'https://wa.me/5565999445463' },
]

export default function Contact() {
  const [sent, setSent] = useState(false)

 function handleSubmit(e) {
  e.preventDefault()

  emailjs.sendForm(
    'service_4r2b229',
    'template_b62noyd',
    e.target,
    'vl1QAAdft70V2IIm4'
  )
  .then(() => {
    setSent(true)
    e.target.reset()
  })
  .catch((error) => {
    console.error(error)
    alert('Erro ao enviar a mensagem.')
  })
}

  return (
    <div className="section-wrap section-wrap--alt" id="contato">
      <div className="section">
        <FadeIn>
          <p className="section-label">// contato</p>
          <h2 className="section-title">Vamos conversar?</h2>
          <div className="section-rule" />
        </FadeIn>

        <div className="contact-inner">
          {/* ── Form ── */}
          <FadeIn delay={0.1}>
            {sent ? (
              <div style={{ paddingTop: '2rem' }}>
                <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                  ✦ Mensagem enviada!
                </p>
                <p style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>
                  Obrigada pelo contato — retorno em breve.
                </p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Nome</label>
                 <input  id="name" name="from_name" />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email</label>
                  <input id="email" name="from_email"/>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="msg">Mensagem</label>
                  <textarea id="msg" name="message"/>
                </div>
                <button type="submit" className="btn btn--primary" style={{ alignSelf: 'flex-start' }}>
                  Enviar mensagem
                </button>
              </form>
            )}
          </FadeIn>

          {/* ── Info + Socials ── */}
          <FadeIn delay={0.2}>
            <p className="contact-subtitle">
              Estou aberta a projetos freelance, colaborações e oportunidades de tempo integral.
              Respondo em até 24h.
            </p>

            <div className="social-links">
              {socials.map(({ icon, label, href }) => (
                <a key={label} className="social-link" href={href} target="_blank" rel="noopener noreferrer">
                  <span className="social-icon">{icon}</span>
                  {label}
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  )
}
