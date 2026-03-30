// icona sole per la light mode
function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4"/>
      <line x1="12" y1="2"  x2="12" y2="4"/>
      <line x1="12" y1="20" x2="12" y2="22"/>
      <line x1="4.22" y1="4.22"   x2="5.64"  y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="2"  y1="12" x2="4"  y2="12"/>
      <line x1="20" y1="12" x2="22" y2="12"/>
      <line x1="4.22"  y1="19.78" x2="5.64"  y2="18.36"/>
      <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"/>
    </svg>
  );
}

// icona luna per la dark mode
function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

// switch dark/light
function ThemeToggle({ theme, setTheme }) {
  const isDark = theme === 'dark';
  return (
    <div
      className="mode-pill"
      onClick={() => setTheme(p => p === 'dark' ? 'light' : 'dark')}
      title="cambia tema"
    >
      <div className={`mode-icon-wrap${isDark ? ' active' : ''}`}><MoonIcon /></div>
      <div className={`mode-icon-wrap${!isDark ? ' active' : ''}`}><SunIcon /></div>
    </div>
  );
}
