// hooks riutilizzabili

// rileva quando un elemento entra nel viewport
function useIntersection(threshold = 0.12) {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

// componente fade-up on scroll
function Fade({ children, delay = 0, style = {} }) {
  const [ref, visible] = useIntersection();
  return (
    <div
      ref={ref}
      className={`fade-up${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  );
}

// contatore animato che parte quando entra nel viewport
function Counter({ target, suffix = '' }) {
  const [val, setVal] = React.useState(0);
  const [ref, visible] = useIntersection(0.3);
  React.useEffect(() => {
    if (!visible) return;
    let s = 0;
    const inc = target / 55;
    const timer = setInterval(() => {
      s += inc;
      if (s >= target) { setVal(target); clearInterval(timer); }
      else setVal(Math.floor(s));
    }, 28);
    return () => clearInterval(timer);
  }, [visible, target]);
  return <span ref={ref}>{val}{suffix}</span>;
}

// smooth scroll verso una sezione
function smoothTo(id) {
  return (e) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
}

// helper: nome certificazione (stringa o oggetto multilingua)
function certName(c, lang) {
  return typeof c.name === 'string' ? c.name : c.name[lang];
}
