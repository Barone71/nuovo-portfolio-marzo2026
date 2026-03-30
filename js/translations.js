// oggetto traduzioni - aggiungi chiavi qui se servono
const T = {
  it: {
    tag1: 'Francesco Afferrante è il tuo', conn: 'il tuo',
    h1: 'Build things', h2: 'that ', h2a: 'matter', scroll: 'Scorri',
    at: ['Chi sono e cosa', 'mi appassiona'],
    p1: 'Sono un Full Stack Developer con 2 anni di esperienza nello sviluppo di applicazioni web e gestionali in contesti reali. Ho costruito da zero un sistema gestionale per una società di vigilanza privata (Java, Spring Boot, MySQL), un portale didattico full stack per il Comune di Vico del Gargano (React, PostgreSQL, Docker) e diverse applicazioni web per clienti locali.',
    p2: "Il mio background include anche 2 anni come HR Specialist, il che mi permette di capire i processi aziendali dall'interno e tradurli in software che funziona davvero.",
    p3: 'Stack principale: Java · Spring Boot · React · TypeScript · PostgreSQL · Docker. Disponibile per ruoli full stack, preferibilmente con focus backend o full stack Java/React.',
    s1: ['2+', 'Anni di esperienza'], s2: ['4', 'Progetti completati'],
    s3: ['10+', 'Tecnologie'], s4: ['4', 'Lingue parlate'],
    et: ['Il mio percorso', 'professionale'],
    edt: ['Background', 'accademico'],
    skt: ['Tecnologie e strumenti', 'con cui lavoro'],
    pt: ['Lavori', 'recenti'], plink: 'Vedi codice',
    lt: ['Le lingue', 'che parlo'],
    ct: ['Sviluppo', 'professionale'], cta: 'e', ctb: 'certificazioni', cbadge: 'Verificato',
    cb1: 'Parliamo di', cb2: 'qualcosa di grande.',
    clabE: 'Email', clabL: 'Posizione',
    ft: 'Oppure scrivimi direttamente', fn: 'Nome', fe: 'Email', fm: 'Messaggio',
    fs: 'Invia messaggio', fnote: 'Rispondo entro 24h.',
    na: 'Su di me', ne: 'Esperienza', nsk: 'Skills', np: 'Progetti', nc: 'Contatti', cv: 'Scarica CV',
  },
  en: {
    tag1: 'Francesco Afferrante is your', conn: 'your',
    h1: 'Build things', h2: 'that ', h2a: 'matter', scroll: 'Scroll',
    at: ['Who I am and what', 'drives me'],
    p1: 'I am a Full Stack Developer with 2 years of experience building real-world web applications and management systems. I built from scratch an ERP for a private security company (Java, Spring Boot, MySQL), a full stack educational portal for the Municipality of Vico del Gargano (React, PostgreSQL, Docker) and several web apps for local clients.',
    p2: 'My background also includes 2 years as HR Specialist, which allows me to understand business processes from the inside and translate them into software that actually works.',
    p3: 'Main stack: Java · Spring Boot · React · TypeScript · PostgreSQL · Docker. Open to full stack roles, preferably backend-focused or full stack Java/React.',
    s1: ['2+', 'Years of experience'], s2: ['4', 'Completed projects'],
    s3: ['10+', 'Technologies'], s4: ['4', 'Languages spoken'],
    et: ['My professional', 'journey'],
    edt: ['Academic', 'background'],
    skt: ['Technologies and tools', 'I work with'],
    pt: ['Recent', 'work'], plink: 'View code',
    lt: ['Languages', 'I speak'],
    ct: ['Professional', 'development'], cta: 'and', ctb: 'certifications', cbadge: 'Verified',
    cb1: "Let's build", cb2: 'something great.',
    clabE: 'Email', clabL: 'Location',
    ft: 'Or write me directly', fn: 'Name', fe: 'Email', fm: 'Message',
    fs: 'Send message', fnote: 'I reply within 24h.',
    na: 'About', ne: 'Experience', nsk: 'Skills', np: 'Projects', nc: 'Contact', cv: 'Download CV',
  },
  es: {
    tag1: 'Francesco Afferrante es tu', conn: 'tu',
    h1: 'Construye cosas', h2: 'que ', h2a: 'importan', scroll: 'Desplazar',
    at: ['Quién soy y qué', 'me apasiona'],
    p1: 'Soy un Desarrollador Full Stack con 2 años de experiencia en el desarrollo de aplicaciones web y sistemas de gestión en entornos reales. He construido desde cero un ERP para una empresa de vigilancia privada (Java, Spring Boot, MySQL), un portal educativo full stack para el Municipio de Vico del Gargano (React, PostgreSQL, Docker) y varias aplicaciones web para clientes locales.',
    p2: 'Mi experiencia incluye también 2 años como HR Specialist, lo que me permite entender los procesos empresariales desde dentro y traducirlos en software que realmente funciona.',
    p3: 'Stack principal: Java · Spring Boot · React · TypeScript · PostgreSQL · Docker. Disponible para roles full stack, preferiblemente con foco en backend o full stack Java/React.',
    s1: ['2+', 'Años de experiencia'], s2: ['4', 'Proyectos completados'],
    s3: ['10+', 'Tecnologías'], s4: ['4', 'Idiomas hablados'],
    et: ['Mi trayectoria', 'profesional'],
    edt: ['Trayectoria', 'académica'],
    skt: ['Tecnologías y herramientas', 'con las que trabajo'],
    pt: ['Trabajos', 'recientes'], plink: 'Ver código',
    lt: ['Idiomas', 'que hablo'],
    ct: ['Desarrollo', 'profesional'], cta: 'y', ctb: 'certificaciones', cbadge: 'Verificado',
    cb1: 'Hablemos de', cb2: 'algo grande.',
    clabE: 'Correo', clabL: 'Ubicación',
    ft: 'O escríbeme directamente', fn: 'Nombre', fe: 'Correo', fm: 'Mensaje',
    fs: 'Enviar mensaje', fnote: 'Respondo en 24h.',
    na: 'Sobre mí', ne: 'Experiencia', nsk: 'Skills', np: 'Proyectos', nc: 'Contacto', cv: 'Descargar CV',
  },
};

// esperienze lavorative
const EXP = {
  it: [
    { date: 'GEN 2025 – GEN 2026', role: 'Educatore e Facilitatore Digitale', company: 'Comune di Vico del Gargano', desc: 'Progettazione e realizzazione di percorsi formativi rivolti a studenti, docenti e cittadini, con l\'obiettivo di promuovere l\'uso consapevole delle tecnologie digitali e favorire l\'inclusione digitale. Collaboro con scuole, enti e associazioni locali per organizzare laboratori didattici e iniziative di alfabetizzazione digitale.', tags: ['Java', 'Javascript', 'HTML', 'React'] },
    { date: 'OTT 2022 – GEN 2025', role: 'HR Specialist & Responsabile d\'Ufficio', company: 'Consorzio Vigilanza del Gargano', desc: 'Gestione delle operazioni quotidiane, coordinamento personale e attività amministrative. Recruiting, selezione e processi di assunzione del personale. Sviluppo di una piattaforma gestionale clienti in Java, MySQL, JavaScript, HTML e CSS.', tags: ['Spring Boot', 'Java', 'MySQL', 'JavaScript', 'HTML', 'CSS'] },
  ],
  en: [
    { date: 'JAN 2025 – JAN 2026', role: 'Digital Educator & Facilitator', company: 'Municipality of Vico del Gargano', desc: 'Designed and delivered training courses for students, teachers and citizens focused on conscious use of digital technologies and digital inclusion. Organized hands-on labs and digital literacy initiatives with local schools and associations.', tags: ['Java', 'Javascript', 'HTML', 'React'] },
    { date: 'OCT 2022 – JAN 2025', role: 'HR Specialist & Office Manager', company: 'Consorzio Vigilanza del Gargano', desc: 'Managed daily operations, staff coordination and administrative tasks. Handled recruiting, selection and hiring processes. Developed a custom client management platform in Java, MySQL, JavaScript, HTML and CSS.', tags: ['Spring Boot', 'Java', 'MySQL', 'JavaScript', 'HTML', 'CSS'] },
  ],
  es: [
    { date: 'ENE 2025 – ENE 2026', role: 'Educador y Facilitador Digital', company: 'Municipio de Vico del Gargano', desc: 'Diseño y realización de itinerarios formativos para estudiantes, docentes y ciudadanos orientados al uso consciente de las tecnologías digitales y la inclusión digital. Organización de talleres prácticos e iniciativas de alfabetización digital.', tags: ['Java', 'Javascript', 'HTML', 'React'] },
    { date: 'OCT 2022 – ENE 2025', role: 'Especialista RRHH & Responsable de Oficina', company: 'Consorzio Vigilanza del Gargano', desc: 'Gestión de operaciones diarias, coordinación de personal y actividades administrativas. Procesos de recruiting, selección y contratación. Desarrollo de una plataforma de gestión de clientes en Java, MySQL, JavaScript, HTML y CSS.', tags: ['Spring Boot', 'Java', 'MySQL', 'JavaScript', 'HTML', 'CSS'] },
  ],
};

// formazione accademica
const EDU = {
  it: [
    { date: 'SET 2025 – in corso', role: 'LM-91 Innovazione Digitale e Comunicazione', company: 'Università degli Studi di Foggia', desc: 'Percorso magistrale focalizzato sull\'integrazione tra competenze informatiche avanzate, analisi dei dati e discipline economico-giuridiche, volto alla progettazione e gestione di contenuti digitali e alla valorizzazione dei processi della società digitale.', tags: ['Python', 'C++', 'Analisi Dati', 'Sviluppo Web'] },
    { date: 'FEB 2024 – GIU 2024', role: 'Academy per Junior Java Developer', company: 'Generation Italy & Intesa SanPaolo', desc: 'Academy di programmazione in Java, JavaScript, MySQL, HTML, con pratica in Agile/Scrum. Allenamento delle soft skill: comunicazione, team work e problem solving.', tags: ['Java', 'JavaScript', 'MySQL', 'HTML', 'Agile/Scrum'] },
    { date: 'SET 2019 – APR 2024', role: 'L-12 Scienze della Mediazione Linguistica e delle Culture Internazionali', company: 'Università degli Studi di Torino', desc: 'Lingue inglese, spagnola e portoghese. Interpretariato, traduzione tecnica e sottotitolazione. Informatica applicata ed economia aziendale.', tags: ['Inglese C1', 'Spagnolo C1', 'Portoghese B2', 'Economia', 'Informatica'] },
  ],
  en: [
    { date: 'SEP 2025 – ongoing', role: 'LM-91 Digital Innovation and Communication', company: 'University of Foggia', desc: 'Master\'s degree focused on the integration of advanced computing skills, data analysis and economic-legal disciplines, aimed at designing and managing digital content and enhancing digital society processes.', tags: ['Python', 'C++', 'Data Analysis', 'Web Dev'] },
    { date: 'FEB 2024 – JUN 2024', role: 'Academy for Junior Java Developer', company: 'Generation Italy & Intesa SanPaolo', desc: 'Programming academy in Java, JavaScript, MySQL, HTML with Agile/Scrum practice. Soft skills training: communication, teamwork and problem solving.', tags: ['Java', 'JavaScript', 'MySQL', 'HTML', 'Agile/Scrum'] },
    { date: 'SEP 2019 – APR 2024', role: 'L-12 Linguistic Mediation and International Cultures', company: 'University of Turin', desc: 'English, Spanish and Portuguese. Interpreting, technical translation and subtitling. Applied computing and business economics.', tags: ['English C1', 'Spanish C1', 'Portuguese B2', 'Economics', 'IT'] },
  ],
  es: [
    { date: 'SEP 2025 – en curso', role: 'LM-91 Innovación Digital y Comunicación', company: 'Universidad de Foggia', desc: 'Máster centrado en la integración de competencias informáticas avanzadas, análisis de datos y disciplinas económico-jurídicas, orientado al diseño y gestión de contenidos digitales.', tags: ['Python', 'C++', 'Análisis de Datos', 'Desarrollo Web'] },
    { date: 'FEB 2024 – JUN 2024', role: 'Academy para Junior Java Developer', company: 'Generation Italy & Intesa SanPaolo', desc: 'Academy de programación en Java, JavaScript, MySQL, HTML con práctica en Agile/Scrum. Entrenamiento de soft skills: comunicación, trabajo en equipo y resolución de problemas.', tags: ['Java', 'JavaScript', 'MySQL', 'HTML', 'Agile/Scrum'] },
    { date: 'SEP 2019 – ABR 2024', role: 'L-12 Mediación Lingüística y Culturas Internacionales', company: 'Universidad de Turín', desc: 'Inglés, español y portugués. Interpretación, traducción técnica y subtitulación. Informática aplicada y economía empresarial.', tags: ['Inglés C1', 'Español C1', 'Portugués B2', 'Economía', 'Informática'] },
  ],
};

// lavori recenti
const PROJ = {
  it: [
    { n: '01', title: 'Sito per PizzaMania San Menaio', desc: 'Sito web moderno per una pizzeria locale con menu interattivo, sistema di prenotazione online e galleria fotografica. Interfaccia ottimizzata per mobile e desktop.', tags: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'] },
    { n: '02', title: 'Gestionale Consorzio Vigilanza del Gargano', desc: 'Sistema gestionale completo per turni, presenze, buste paga e reportistica integrata. Dashboard amministrativa con grafici e analytics in tempo reale.', tags: ['Spring Boot', 'Java', 'SQL', 'JavaScript', 'HTML', 'CSS'] },
    { n: '03', title: 'FoodByte – Generation Italy & Intesa SanPaolo', desc: 'Project Work finale del corso da 500 ore. E-commerce simil Just-Eat di Food Truck in Java/Spring, HTML, CSS e JavaScript. Sistema di ordini integrato.', tags: ['Java', 'Spring', 'HTML', 'CSS', 'JavaScript'] },
    { n: '04', title: '<kidsCode> Comune di Vico del Gargano', desc: 'Portale didattico full-stack per il progetto anti-dispersione scolastica. Quiz interattivi, badge gamificati e dashboard dedicate per studenti e insegnanti (10–14 anni).', tags: ['Java', 'Spring Boot', 'PostgreSQL', 'React', 'TypeScript', 'Docker'] },
  ],
  en: [
    { n: '01', title: 'PizzaMania San Menaio Website', desc: 'Modern website for a local pizzeria with interactive menu, online booking system and photo gallery. Optimised for mobile and desktop.', tags: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'] },
    { n: '02', title: 'Consorzio Vigilanza del Gargano ERP', desc: 'Full management system for shifts, attendance, payslips and integrated reporting. Admin dashboard with real-time charts and analytics.', tags: ['Spring Boot', 'Java', 'SQL', 'JavaScript', 'HTML', 'CSS'] },
    { n: '03', title: 'FoodByte – Generation Italy & Intesa SanPaolo', desc: 'Final project of a 500-hour course. Just-Eat-like food truck e-commerce in Java/Spring, HTML, CSS and JavaScript.', tags: ['Java', 'Spring', 'HTML', 'CSS', 'JavaScript'] },
    { n: '04', title: '<kidsCode> Municipality of Vico del Gargano', desc: 'Full-stack educational portal for school drop-out prevention. Interactive quizzes, gamified badges and dedicated dashboards for students and teachers.', tags: ['Java', 'Spring Boot', 'PostgreSQL', 'React', 'TypeScript', 'Docker'] },
  ],
  es: [
    { n: '01', title: 'Sitio web PizzaMania San Menaio', desc: 'Sitio web moderno para pizzería local con menú interactivo, reservas online y galería fotográfica. Interfaz optimizada para móvil y escritorio.', tags: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'] },
    { n: '02', title: 'ERP Consorzio Vigilanza del Gargano', desc: 'Sistema de gestión completo para turnos, asistencia, nóminas y reportes. Panel de administración con gráficos y analíticas en tiempo real.', tags: ['Spring Boot', 'Java', 'SQL', 'JavaScript', 'HTML', 'CSS'] },
    { n: '03', title: 'FoodByte – Generation Italy & Intesa SanPaolo', desc: 'Proyecto final de 500 horas. E-commerce tipo Just-Eat en Java/Spring, HTML, CSS y JavaScript.', tags: ['Java', 'Spring', 'HTML', 'CSS', 'JavaScript'] },
    { n: '04', title: '<kidsCode> Municipio de Vico del Gargano', desc: 'Portal educativo full-stack para prevención del abandono escolar. Cuestionarios interactivos, insignias gamificadas y paneles dedicados.', tags: ['Java', 'Spring Boot', 'PostgreSQL', 'React', 'TypeScript', 'Docker'] },
  ],
};
