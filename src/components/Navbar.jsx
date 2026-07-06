import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const links = [
  { label: 'Sobre',    href: '#sobre'    },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Projetos', href: '#projetos' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      className={`nav${scrolled ? ' nav--scrolled' : ''}`}
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <a href="#hero" className="nav-logo">
        DD<span className="accent">.</span>
      </a>

      <ul className="nav-links">
        {links.map(({ label, href }) => (
          <li key={href}>
            <a href={href}>{label}</a>
          </li>
        ))}
        <li>
          <a href="#contato" className="nav-cta">Contato</a>
        </li>
      </ul>
    </motion.nav>
  )
}
