// lingue parlate
function Languages({ lang, t }) {
  const [barsVisible, setBarsVisible] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setBarsVisible(true); obs.disconnect(); }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="languages" ref={ref}>
      <Fade>
        <h2 className="section-title">
          {t.lt[0]}<br /><strong>{t.lt[1]}</strong>
        </h2>
      </Fade>

      <div className="lang-grid">
        {LANGS_DATA.map((l, i) => (
          <Fade key={i} delay={i * 70}>
            <div className="lang-card">
              <span className="lang-flag" style={{ animationDelay: `${i * 0.6}s` }}>
                {l.flag}
              </span>
              <div className="lang-name">{l.name[lang]}</div>
              <div className="lang-level">{l.level}</div>
              <div className="lang-bar">
                <div
                  className="lang-bar-fill"
                  style={{ width: barsVisible ? `${l.pct}%` : '0%' }}
                />
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
}
