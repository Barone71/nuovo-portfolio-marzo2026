// certificazioni e sviluppo prof.
function Certifications({ lang, t }) {
  return (
    <section id="certifications" style={{ background: 'var(--bg2)' }}>
      <Fade>
        <h2 className="section-title">
          {t.ct[0]} <strong>{t.ct[1]}</strong><br />{t.cta} <strong>{t.ctb}</strong>
        </h2>
      </Fade>

      <div className="cert-list">
        {CERTS.map((c, i) => (
          <Fade key={i} delay={i * 60}>
            <div className="cert-item">
              <div>
                <div className="cert-name">{certName(c, lang)}</div>
                <div className="cert-org">{c.org}</div>
              </div>
              <div className="cert-badge">{t.cbadge} · {c.year}</div>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
}
