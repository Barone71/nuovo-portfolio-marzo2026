// esperienze lav. e formazione
function ExpItem({ e, i }) {
  return (
    <Fade delay={i * 80}>
      <div className="exp-item">
        <div>
          <div className="exp-date">{e.date}</div>
          <div className="exp-company">{e.company}</div>
          <div className="exp-role" style={{ marginTop: '14px' }}>{e.role}</div>
          <div className="exp-desc">{e.desc}</div>
          <div className="exp-tags">
            {e.tags.map(tg => <span className="tag" key={tg}>{tg}</span>)}
          </div>
        </div>
        <div className="exp-num">0{i + 1}</div>
      </div>
    </Fade>
  );
}

function Experience({ lang, t }) {
  const exps = EXP[lang];
  const edus = EDU[lang];

  return (
    <section id="experience">
      {/* esperienze lavorative */}
      <Fade>
        <h2 className="section-title">
          {t.et[0]}<br /><strong>{t.et[1]}</strong>
        </h2>
      </Fade>
      <div className="exp-list">
        {exps.map((e, i) => <ExpItem key={i} e={e} i={i} />)}
      </div>

      {/* percorso accademico */}
      <div style={{ marginTop: '72px' }}>
        <Fade>
          <h2 className="section-title" style={{ fontSize: 'clamp(26px,3.4vw,44px)' }}>
            {t.edt[0]}<br /><strong>{t.edt[1]}</strong>
          </h2>
        </Fade>
        <div className="exp-list" style={{ marginTop: '36px' }}>
          {edus.map((e, i) => <ExpItem key={i} e={e} i={i} />)}
        </div>
      </div>
    </section>
  );
}
