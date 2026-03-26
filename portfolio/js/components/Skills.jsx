// competenze tecniche
function Skills({ t }) {
  return (
    <section id="skills">
      <Fade>
        <h2 className="section-title">
          {t.skt[0]}<br /><strong>{t.skt[1]}</strong>
        </h2>
      </Fade>

      <div className="skills-grid">
        {SKILLS.map((s, i) => (
          <Fade key={s.name} delay={i * 38}>
            <div className="skill-card">
              <div
                className="skill-icon-svg"
                dangerouslySetInnerHTML={{ __html: s.svg }}
              />
              <div className="skill-name">{s.name}</div>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
}
