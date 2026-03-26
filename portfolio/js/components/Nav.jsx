// nav principale
function Nav({ scrolled, lang, setLang, theme, setTheme, t }) {
  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="nav-logo">faa<em>.</em></div>
      <div className="nav-links">
        <a onClick={smoothTo('#about')}>{t.na}</a>
        <a onClick={smoothTo('#experience')}>{t.ne}</a>
        <a onClick={smoothTo('#skills')}>{t.nsk}</a>
        <a onClick={smoothTo('#projects')}>{t.np}</a>
      </div>
      <div className="nav-right">
        <LangDropdown lang={lang} setLang={setLang} />
        <ThemeToggle theme={theme} setTheme={setTheme} />
        <a href="#contact" onClick={smoothTo('#contact')} className="nav-contact">{t.nc}</a>
      </div>
    </nav>
  );
}
