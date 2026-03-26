// lavori recenti
function Projects({ lang, t }) {
  const projs = PROJ[lang];

  return (
    <section id="projects">
      <Fade>
        <h2 className="section-title">
          {t.pt[0]}<br /><strong>{t.pt[1]}</strong>
        </h2>
      </Fade>

      <div className="projects-grid">
        {projs.map((p, i) => (
          <Fade key={p.n} delay={i * 60}>
            <div className="project-card">
              <div className="project-num">{p.n}</div>
              <div className="project-title">{p.title}</div>
              <div className="project-desc">{p.desc}</div>
              <div className="project-tags">
                {p.tags.map(tg => <span className="tag" key={tg}>{tg}</span>)}
              </div>
              <a href="#" className="project-link">{t.plink}</a>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
}
