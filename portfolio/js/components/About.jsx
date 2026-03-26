// chi sono
function About({ t }) {
  const stats = [t.s1, t.s2, t.s3, t.s4];

  return (
    <section id="about">
      <Fade>
        <h2 className="section-title">
          {t.at[0]}<br /><strong>{t.at[1]}</strong>
        </h2>
      </Fade>

      <div className="about-grid">
        <Fade delay={80}>
          <div className="about-text">
            <p>{t.p1}</p>
            <p>{t.p2}</p>
            <p>{t.p3}</p>
          </div>
        </Fade>

        <Fade delay={160}>
          <div className="about-stats">
            {stats.map(([n, l], i) => (
              <div className="stat-card" key={i}>
                <div className="stat-num">
                  <Counter target={parseInt(n)} suffix={n.includes('+') ? '+' : ''} />
                </div>
                <div className="stat-label">{l}</div>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
}
