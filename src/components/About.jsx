import FadeIn from './FadeIn'

const stats = [
  { number: '3+',  label: 'Anos de experiência' },
  { number: '20+', label: 'Projetos entregues'  },
  { number: '15+', label: 'Clientes atendidos'  },
  { number: '∞',   label: 'Curiosidade em tech' },
]

export default function About() {
  return (
    <div className="section-wrap" id="sobre">
      <div className="section">
        <FadeIn>
          <p className="section-label">// sobre mim</p>
          <h2 className="section-title">Quem está por trás do código</h2>
          <div className="section-rule" />
        </FadeIn>

        <div className="about-grid">
          <FadeIn delay={0.1}>
            <div className="about-body">
              <p>
                Sou Debora Dias, desenvolvedora apaixonada por criar soluções digitais que unem tecnologia, design e estratégia. Desenvolvo interfaces modernas, aplicações web e experiências digitais pensadas para oferecer desempenho, usabilidade e impacto.
              </p>
              <p>
               Além do desenvolvimento, atuo como <strong style={{ color: 'var(--text)' }}>Social Media</strong>, ajudando marcas a construir presença digital por meio de conteúdo estratégico e comunicação autêntica.
              </p>
              <p>
                Acredito que grandes projetos nascem quando criatividade, tecnologia e estratégia trabalham em conjunto. É essa combinação que guia cada solução que desenvolvo.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="about-stats">
              {stats.map(({ number, label }) => (
                <div key={label} className="stat-card">
                  <div className="stat-number">{number}</div>
                  <div className="stat-label">{label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  )
}
