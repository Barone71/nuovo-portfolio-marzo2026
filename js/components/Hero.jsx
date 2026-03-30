// sezione hero - prima cosa visibile
function Hero({ t }) {

  // canvas orb teal - oggetto 3d animato
  React.useEffect(() => {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf, tick = 0;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);
      const cx = W * 0.64, cy = H * 0.42, R = Math.min(W, H) * 0.38;

      // bagliore di sfondo teal
      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 1.7);
      g.addColorStop(0, 'rgba(62,207,218,.14)');
      g.addColorStop(.45, 'rgba(42,143,150,.07)');
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);

      // secondo glow leggermente spostato
      const g2 = ctx.createRadialGradient(cx - R * .3, cy + R * .2, 0, cx - R * .3, cy + R * .2, R * 1.1);
      g2.addColorStop(0, 'rgba(20,100,110,.12)');
      g2.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, W, H);

      // dischi rotanti - palette teal/cyan
      for (let i = 0; i < 44; i++) {
        const fr  = i / 44;
        const a   = fr * Math.PI * 2 + tick * .4;
        const sp  = Math.PI * 1.1;
        const phi = -sp / 2 + fr * sp;
        const sx  = cx + Math.sin(phi + tick * .15) * R * .55;
        const sy  = cy + Math.cos(phi * 1.7) * R * .35;
        const br  = R * (.18 + .22 * Math.abs(Math.sin(fr * Math.PI)));
        const sy2 = .18 + .28 * Math.abs(Math.cos(phi));

        // range colore: da teal a cyan
        const hue = 170 + fr * 30 + (i % 3) * 7;
        const sat = 55 + fr * 30;
        const lit = 28 + fr * 28;
        const al  = .45 + .38 * Math.abs(Math.sin(fr * Math.PI));

        ctx.save();
        ctx.translate(sx, sy);
        ctx.rotate(a + phi * .5);
        ctx.beginPath();
        ctx.ellipse(0, 0, br, br * sy2, 0, 0, Math.PI * 2);

        const dg = ctx.createRadialGradient(0, -br * sy2 * .3, 0, 0, 0, br);
        dg.addColorStop(0,   `hsla(${hue + 10},${sat + 20}%,${lit + 24}%,${al})`);
        dg.addColorStop(.55, `hsla(${hue},${sat}%,${lit}%,${al * .82})`);
        dg.addColorStop(1,   `hsla(${hue - 10},${sat - 15}%,${lit - 12}%,${al * .25})`);
        ctx.fillStyle = dg;
        ctx.fill();

        // bordo luminoso sui dischi
        ctx.strokeStyle = `hsla(${hue + 15},90%,${lit + 36}%,${al * .5})`;
        ctx.lineWidth = .8;
        ctx.stroke();
        ctx.restore();
      }

      // linee di luce teal
      const streakColors = [
        [180,210,220],[175,190,215],[185,220,210],[178,200,218],[182,215,212]
      ];
      for (let i = 0; i < 5; i++) {
        const a  = tick * .25 + i * 1.26;
        const x1 = cx + Math.cos(a) * R * .25;
        const y1 = cy + Math.sin(a * .7) * R * .55;
        const x2 = cx + Math.cos(a + .45) * R * .9;
        const y2 = cy + Math.sin(a * .7 + .5) * R * .88;
        const [h, s, l] = streakColors[i];
        const sg = ctx.createLinearGradient(x1, y1, x2, y2);
        sg.addColorStop(0,  `hsla(${h},${s}%,${l}%,0)`);
        sg.addColorStop(.4, `hsla(${h},${s}%,${l}%,${.4 - i * .05})`);
        sg.addColorStop(1,  `hsla(${h},${s}%,${l}%,0)`);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = sg;
        ctx.lineWidth = 2 - i * .25;
        ctx.stroke();
      }

      tick += .007;
      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  // nome + typewriter sopra il titolo
  React.useEffect(() => {
    let wi = 0, ci = 0, deleting = false;
    let timer = null;

    const el = () => document.getElementById('tw-text');

    const step = () => {
      const node = el();
      if (!node) return;
      const word = TW_WORDS[wi];

      if (!deleting) {
        ci++;
        node.textContent = word.slice(0, ci);
        if (ci === word.length) {
          deleting = true;
          timer = setTimeout(step, 1800);
          return;
        }
        timer = setTimeout(step, 68);
      } else {
        ci--;
        node.textContent = word.slice(0, ci);
        if (ci === 0) {
          deleting = false;
          wi = (wi + 1) % TW_WORDS.length;
        }
        timer = setTimeout(step, ci === 0 ? 300 : 40);
      }
    };

    timer = setTimeout(step, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero">
      <canvas id="hero-canvas" />
      <div className="hero-overlay" />

      <div className="hero-bottom">
        {/* nome + typewriter */}
        <div className="hero-intro-block">
          <div className="hero-name-line">
            Francesco Antonio <strong style={{ color: 'var(--fg)', fontWeight: 700 }}>Afferrante</strong>
          </div>
          <div className="hero-tw-row">
            <div className="typewriter-pill">
              <span className="typewriter-text" id="tw-text" />
              <span className="typewriter-cursor" />
            </div>
          </div>
        </div>

        {/* linea divisoria sottile */}
        <div className="hero-divider" />

        {/* h1 principale */}
        <h1 className="hero-headline">
          {t.h1}<br />{t.h2}<span className="hero-accent">{t.h2a}</span>
        </h1>

        {/* bottoni di chiamata all'azione */}
        <div className="hero-actions-row">
          <a href="#contact" onClick={smoothTo('#contact')} className="btn-primary">{t.nc}</a>
          <a href={CV_PATH} download="CV_Francesco_Antonio_Afferrante.pdf" className="btn-ghost">↓ {t.cv}</a>
        </div>
      </div>

      <div className="hero-scroll">{t.scroll}</div>
    </section>
  );
}
