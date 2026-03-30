// componente radice - gestisce stato globale e rendering
function App() {
  const [scrolled, setScrolled] = React.useState(false);
  const [theme, setTheme]       = React.useState('dark');
  const [lang, setLang]         = React.useState('it');

  const t = T[lang];

  // applica il tema sull'html root
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // navbar diventa opaca dopo lo scroll
  React.useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <React.Fragment>
      <Nav
        scrolled={scrolled}
        lang={lang}
        setLang={setLang}
        theme={theme}
        setTheme={setTheme}
        t={t}
      />
      <Hero t={t} />
      <About t={t} />
      <Experience lang={lang} t={t} />
      <Skills t={t} />
      <Projects lang={lang} t={t} />
      <Languages lang={lang} t={t} />
      <Certifications lang={lang} t={t} />
      <Contact t={t} />
      <Footer />
    </React.Fragment>
  );
}

// monta l'app
ReactDOM.render(<App />, document.getElementById('root'));
