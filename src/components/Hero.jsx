import { motion } from 'framer-motion'

import foto from '../assets/foto.jpg'

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg-grid" aria-hidden="true" />

      <div className="hero-content">
        {/* ── Left: text ── */}
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease }}
        >
          <span className="hero-tag">✦ Disponível para projetos</span>

          <h1 className="hero-name">
            <em>Debora</em>
            <strong>DIAS</strong>
          </h1>

          <p className="hero-roles">
            <span className="mono">Social Media</span>
            <span className="dot" />
            <span className="mono">Developer</span>
          </p>

          <p className="hero-desc">
            Criando experiências digitais com criatividade, código limpo e visão de segurança.
          </p>

          <div className="hero-ctas">
            <a href="#projetos" className="btn btn--primary">Ver Projetos</a>
            <a href="#contato"  className="btn btn--ghost">Entrar em Contato</a>
          </div>
        </motion.div>

        {/* ── Right: photo ── */}
        <motion.div
          className="hero-photo"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.25, ease }}
        >
          <div className="photo-frame">
            <img src={foto} alt="Debora Dias" className="photo-real" />
          </div>
          <div className="photo-glow" aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  )
}
