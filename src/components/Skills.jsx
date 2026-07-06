import FadeIn from './FadeIn'

const categories = [
  {
  icon: '⌨',
  name: 'Desenvolvimento',
  skills: [
    { label: 'React', main: true },
    { label: 'JavaScript', main: true },
    { label: 'Python', main: true },
    { label: 'HTML5', main: false },
    { label: 'CSS3', main: false },
    { label: 'Git & GitHub', main: false },
    { label: 'Node.js', main: false },
    { label: 'Vite', main: false },
  ],
},
{
  icon: '✦',
  name: 'Social Media',
  skills: [
    { label: 'Instagram', main: true },
    { label: 'Meta Ads', main: true },
    { label: 'TikTok', main: true },
    { label: 'Canva', main: false },
    { label: 'Figma', main: false },
    { label: 'Copywriting', main: false },
    { label: 'Google Analytics', main: false },
  ],
},
  {
  icon: '🛠',
  name: 'Ferramentas',
  skills: [
    { label: 'Git & GitHub', main: true },
    { label: 'VS Code', main: true },
    { label: 'Figma', main: true },
    { label: 'Postman', main: false },
    { label: 'Vercel', main: false },
    { label: 'Firebase', main: false },
    { label: 'Notion', main: false },
  ],
},
]

export default function Skills() {
  return (
    <div className="section-wrap section-wrap--alt" id="skills">
      <div className="section">
        <FadeIn>
          <p className="section-label">// habilidades</p>
          <h2 className="section-title">O que eu domino</h2>
          <div className="section-rule" />
        </FadeIn>

        <div className="skills-grid">
          {categories.map(({ icon, name, skills }, i) => (
            <FadeIn key={name} delay={i * 0.1}>
              <div className="skill-category">
                <div className="skill-cat-icon">{icon}</div>
                <div className="skill-cat-name">{name}</div>
                <div className="skill-tags">
                  {skills.map(({ label, main }) => (
                    <span
                      key={label}
                      className={`skill-tag${main ? ' skill-tag--main' : ''}`}
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  )
}
