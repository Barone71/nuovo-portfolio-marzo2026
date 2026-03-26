// componente dropdown per selezionare la lingua
function LangDropdown({ lang, setLang }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const fn = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, []);

  const cur = LANGS_UI.find(l => l.code === lang);

  return (
    <div className="lang-wrap" ref={ref}>
      <button className={`lang-trigger${open ? ' open' : ''}`} onClick={() => setOpen(o => !o)}>
        <span>{cur.flag}</span>
        <span>{cur.label}</span>
        <svg viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M1 1l4 4 4-4"/>
        </svg>
      </button>
      {open && (
        <div className="lang-menu">
          {LANGS_UI.map(l => (
            <button
              key={l.code}
              className={`lang-option${lang === l.code ? ' active' : ''}`}
              onClick={() => { setLang(l.code); setOpen(false); }}
            >
              <span className="lflag">{l.flag}</span>
              <span>{l.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
