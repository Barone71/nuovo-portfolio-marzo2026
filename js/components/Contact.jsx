// sezione contatti - form + link
function Contact({ t }) {
  return (
    <section id="contact">
      <Fade>
        <div className="contact-inner">
          <div className="contact-layout">

            {/* titolo + link a sx */}
            <div className="contact-left">
              <p className="contact-big">
                {t.cb1}<br /><strong>{t.cb2}</strong>
              </p>

              <div className="contact-row">
                <div className="contact-line">
                  <span className="contact-line-label">{t.clabE}</span>
                  <a href="mailto:faafferrante@gmail.com" className="contact-line-val">
                    faafferrante@gmail.com
                  </a>
                  <span className="contact-line-arrow">↗</span>
                </div>
                <div className="contact-line">
                  <span className="contact-line-label">{t.clabL}</span>
                  <span className="contact-line-val">Vico del Gargano, Italia</span>
                </div>
                <div className="contact-line">
                  <span className="contact-line-label">GitHub</span>
                  <a href="https://github.com/barone71" className="contact-line-val">
                    github.com/barone71
                  </a>
                  <span className="contact-line-arrow">↗</span>
                </div>
                <div className="contact-line">
                  <span className="contact-line-label">LinkedIn</span>
                  <a href="https://linkedin.com/in/francescoantonio-afferrante" className="contact-line-val">
                    linkedin.com/in/francescoantonio-afferrante
                  </a>
                  <span className="contact-line-arrow">↗</span>
                </div>
              </div>
            </div>

            {/* form a dx */}
            <div className="contact-right">
              <div className="contact-form-block">
                <div className="contact-form-title">{t.ft}</div>

                <div className="form-row">
                  <div className="form-field">
                    <label className="form-label">{t.fn}</label>
                    <input className="form-input" type="text" placeholder="es. Mario Rossi" />
                  </div>
                  <div className="form-field">
                    <label className="form-label">{t.fe}</label>
                    <input className="form-input" type="email" placeholder="la tua email" />
                  </div>
                </div>

                <div className="form-field form-full">
                  <label className="form-label">{t.fm}</label>
                  <textarea className="form-input" rows="6" placeholder="scrivi qui il tuo messaggio" />
                </div>

                <div className="form-submit-row">
                  <button className="btn-primary">{t.fs}</button>
                  <span className="form-note">{t.fnote}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Fade>
    </section>
  );
}
