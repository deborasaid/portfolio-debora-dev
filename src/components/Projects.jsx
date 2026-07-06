import FadeIn from './FadeIn'

const projects = [
 {
  year: '2026',
  title: 'Biblioteca Digital',
  desc: 'Desenvolvimento de uma plataforma para organização e download de livros digitais, com interface intuitiva, sistema de categorias e experiência otimizada para diferentes dispositivos.',
  tags: ['React', 'JavaScript', 'CSS', 'UI/UX', 'Vite'],
  href: '#',
},
{
  year: '2025',
  title: 'OKL — Moda Masculina',
  desc: 'Desenvolvimento do site institucional da OKL, criando uma experiência moderna para apresentação da marca, catálogo de produtos e fortalecimento da identidade digital da empresa.',
  tags: ['React', 'JavaScript', 'CSS', 'Responsive', 'UI/UX'],
  href: '#',
},
{
  year: '2025',
  title: 'Gestão de Social Media',
  desc: 'Planejamento estratégico, criação de conteúdo, edição de vídeos, design de peças e acompanhamento de métricas para crescimento da presença digital e fortalecimento de marcas nas redes sociais.',
  tags: ['Instagram', 'Meta Ads', 'Canva', 'CapCut', 'Analytics'],
  href: '#',
},
{
  year: '2024',
  title: 'Rebranding de Marca',
  desc: 'Reposicionamento visual de marcas por meio da criação de identidade visual, definição de paleta de cores, tipografia, direção criativa e materiais digitais para fortalecer a comunicação e o reconhecimento da marca.',
  tags: ['Branding', 'Design', 'Canva', 'Identidade Visual', 'Marketing'],
  href: '#',
},
]

export default function Projects() {
  return (
    <div className="section-wrap" id="projetos">
      <div className="section">
        <FadeIn>
          <p className="section-label">// projetos</p>
          <h2 className="section-title">Trabalhos selecionados</h2>
          <div className="section-rule" />
        </FadeIn>

        <div className="projects-grid">
          {projects.map(({ year, title, desc, tags, href }, i) => (
            <FadeIn key={title} delay={i * 0.1}>
              <a className="project-card" href={href}>
                <span className="project-arrow">↗</span>
                <div className="project-year">{year}</div>
                <h3 className="project-title">{title}</h3>
                <p  className="project-desc">{desc}</p>
                <div className="project-tags">
                  {tags.map(t => (
                    <span key={t} className="project-tag">{t}</span>
                  ))}
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  )
}
