
const SKILLS=[
  {name:'Java',svg:'<svg viewBox="0 0 24 24"><path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0 0-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.07-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.476 3.618-.476s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.893 3.776-.893M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0 .001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0 0 .553.457 3.393.639"/></svg>'},
  {name:'Spring Boot',svg:'<svg viewBox="0 0 128 128"><path d="M116.452 6.643a59.104 59.104 0 01-6.837 12.136A64.249 64.249 0 0064.205-.026C28.984-.026 0 28.982 0 64.242a64.316 64.316 0 0019.945 46.562l2.368 2.1a64.22 64.22 0 0041.358 15.122c33.487 0 61.637-26.24 64.021-59.683 1.751-16.371-3.051-37.077-11.24-61.7zM29.067 111.17a5.5 5.5 0 01-4.269 2.034c-3.018 0-5.487-2.484-5.487-5.502 0-3.017 2.485-5.501 5.487-5.501 1.25 0 2.485.433 3.452 1.234 2.351 1.9 2.718 5.384.817 7.735zm87.119-19.238c-15.843 21.122-49.68 14.003-71.376 15.02 0 0-3.852.234-7.721.867 0 0 1.45-.617 3.335-1.334 15.226-5.301 22.43-6.335 31.685-11.086 17.427-8.869 34.654-28.274 38.24-48.463-6.637 19.422-26.75 36.11-45.077 42.895-12.557 4.635-35.238 9.136-35.238 9.136l-.917-.484c-15.442-7.518-15.91-40.977 12.157-51.78 12.291-4.735 24.048-2.134 37.323-5.302 14.175-3.367 30.568-14.004 37.238-27.874 7.471 22.19 16.46 56.932.35 78.405z"/></svg>'},
  {name:'React',svg:'<svg viewBox="0 0 24 24" data-stroke="1"><circle cx="12" cy="12" r="2.139"/><g stroke="currentColor" stroke-width="1.3"><ellipse cx="12" cy="12" rx="10" ry="3.8"/><ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(120 12 12)"/></g></svg>'},
  {name:'JavaScript',svg:'<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/></svg>'},
  {name:'TypeScript',svg:'<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zM17.49 9.75c.61 0 1.153.037 1.626.111v2.458a3.95 3.95 0 00-.643-.361 5.1 5.1 0 00-.717-.26 5.45 5.45 0 00-1.426-.2c-.3 0-.573.028-.82.086a2.1 2.1 0 00-.622.242c-.17.104-.3.229-.393.374a.888.888 0 00-.14.49c0 .196.052.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 01-1.012 1.031 4.636 4.636 0 01-1.139.605 5.963 5.963 0 01-1.444.17 6.3 6.3 0 01-1.64-.21 4.325 4.325 0 01-1.4-.716v-2.61c.135.14.278.27.43.39.152.12.312.231.48.33.168.099.344.182.528.25.184.069.37.104.558.104.28 0 .555-.036.822-.107.267-.07.498-.182.69-.334a1.67 1.67 0 00.466-.533 1.49 1.49 0 00.168-.706c0-.245-.062-.454-.187-.627a2.032 2.032 0 00-.502-.497 5.063 5.063 0 00-.756-.415 8.17 8.17 0 00-.944-.375 7.753 7.753 0 01-1.213-.618 4.52 4.52 0 01-.923-.795 3.24 3.24 0 01-.585-.994 3.624 3.624 0 01-.205-1.24c0-.624.12-1.164.36-1.617a3.35 3.35 0 01.993-1.12 4.527 4.527 0 011.48-.65 7.2 7.2 0 011.785-.208zm-10.24 0H13.5v1.875H11.25v8.625H9V11.625H6.75z"/></svg>'},
  {name:'HTML/CSS',svg:'<svg viewBox="0 0 24 24"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg>'},
  {name:'SQL',svg:'<svg viewBox="0 0 24 24" data-stroke="1"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v4c0 1.657 4.03 3 9 3s9-1.343 9-3V5"/><path d="M3 9v4c0 1.657 4.03 3 9 3s9-1.343 9-3V9"/><path d="M3 13v4c0 1.657 4.03 3 9 3s9-1.343 9-3v-4"/></svg>'},
  {name:'C# .NET',svg:'<svg viewBox="0 0 24 24" data-stroke="1"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="none"/><path d="M14.5 8.5c-.83-.97-2.03-1.5-3.5-1.5-2.76 0-5 2.24-5 5s2.24 5 5 5c1.47 0 2.67-.53 3.5-1.5"/><line x1="9" y1="12" x2="16" y2="12"/><line x1="19" y1="10" x2="19" y2="14"/><line x1="21" y1="10" x2="21" y2="14"/><line x1="18" y1="12" x2="22" y2="12"/></svg>'},
  {name:'Python',svg:'<svg viewBox="0 0 24 24"><path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.9S0 5.789 0 11.969c0 6.18 3.403 5.96 3.403 5.96h2.031v-2.867s-.109-3.403 3.35-3.403h5.769s3.24.052 3.24-3.131V3.28S18.28 0 11.914 0zm-3.21 1.867a1.04 1.04 0 011.043 1.043 1.04 1.04 0 01-1.043 1.043A1.04 1.04 0 017.66 2.91a1.04 1.04 0 011.043-1.043z"/><path d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.007-2.752h-5.814v-.826h8.121S24 18.211 24 12.031c0-6.18-3.403-5.96-3.403-5.96h-2.031v2.867s.109 3.403-3.35 3.403H9.447s-3.24-.052-3.24 3.131v5.228S5.72 24 12.086 24zm3.21-1.867a1.04 1.04 0 01-1.043-1.043 1.04 1.04 0 011.043-1.043 1.04 1.04 0 011.043 1.043 1.04 1.04 0 01-1.043 1.043z"/></svg>'},
  {name:'PostgreSQL',svg:'<svg viewBox="0 0 24 24" data-stroke="1"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.657 3.582 3 8 3s8-1.343 8-3V6"/><path d="M4 12v4c0 1.657 3.582 3 8 3 2.5 0 4.73-.52 6.25-1.35"/><path d="M19 15v6M16.5 17.5l2.5-2.5 2.5 2.5"/></svg>'},
  {name:'Docker',svg:'<svg viewBox="0 0 24 24"><path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.301 2.64-2.183 1.267-1.42 2.021-3.004 2.578-4.415.075.028.19.048.315.048h1.022c.63 0 1.076-.166 1.342-.498.266-.332.31-.754.23-1.2a1.626 1.626 0 00-.48-.8"/></svg>'},
  {name:'Dynamics 365',svg:'<svg viewBox="0 0 24 24" data-stroke="1"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>'},
];

const LANGS_DATA=[
  {flag:'🇮🇹',name:{it:'Italiano',en:'Italian',es:'Italiano'},level:'Nativo / Native',pct:100},
  {flag:'🇬🇧',name:{it:'Inglese',en:'English',es:'Inglés'},level:'C1',pct:85},
  {flag:'🇪🇸',name:{it:'Spagnolo',en:'Spanish',es:'Español'},level:'C1',pct:85},
  {flag:'🇵🇹',name:{it:'Portoghese',en:'Portuguese',es:'Portugués'},level:'B2',pct:70},
  {flag:'🇩🇪',name:{it:'Tedesco',en:'German',es:'Alemán'},level:'A2',pct:30},
];

const CERTS=[
  {name:'Academy C#, .Net, Dynamics, React',org:'BCSoft',year:'2025'},
  {name:{it:'Addetto alla Gestione delle Risorse Umane',en:'Human Resources Management Officer',es:'Responsable de Gestión de RRHH'},org:'Generazione Vincente',year:'2024'},
  {name:'Academy Junior Full-Stack Developer',org:'Generation Italy',year:'2024'},
];

const TW_WORDS=['Full Stack Developer','IT Enthusiast','Java Backend Developer','Web App Developer','Software Engineer','Problem Solver','Clean Code Enthusiast','API & Database Builder','Tech Enthusiast','Scalable Systems Learner'];
const LANGS_UI=[{code:'it',flag:'🇮🇹',label:'Italiano'},{code:'en',flag:'🇬🇧',label:'English'},{code:'es',flag:'🇪🇸',label:'Español'}];

const T={
  it:{
    h1:'Build things',h2:'that ',h2a:'matter',scroll:'Scorri',
    at:'Chi sono e cosa\n<strong>mi appassiona</strong>',
    p1:"Sono un Full Stack Developer con 2 anni di esperienza nello sviluppo di applicazioni web e gestionali in contesti reali. Ho costruito da zero un sistema gestionale per una società di vigilanza privata (Java, Spring Boot, MySQL), un portale didattico full stack per il Comune di Vico del Gargano (React, PostgreSQL, Docker) e diverse applicazioni web per clienti locali.",
    p2:"Il mio background include anche 2 anni come HR Specialist, il che mi permette di capire i processi aziendali dall'interno e tradurli in software che funziona davvero.",
    p3:'Stack principale: Java · Spring Boot · React · TypeScript · PostgreSQL · Docker. Disponibile per ruoli full stack, preferibilmente con focus backend o full stack Java/React.',
    s1:['2+','Anni di esperienza'],s2:['4','Progetti completati'],s3:['10+','Tecnologie'],s4:['4','Lingue parlate'],
    et:'Il mio percorso\n<strong>professionale</strong>',edt:'Background\n<strong>accademico</strong>',
    skt:'Tecnologie e strumenti\n<strong>con cui lavoro</strong>',
    pt:'Lavori\n<strong>recenti</strong>',plink:'Vedi codice',
    lt:'Le lingue\n<strong>che parlo</strong>',
    ct:'Sviluppo <strong>professionale</strong><br>e <strong>certificazioni</strong>',cbadge:'Verificato',
    cb1:'Parliamo di',cb2:'qualcosa di grande.',
    clabE:'Email',clabL:'Posizione',
    ft:'Oppure scrivimi direttamente',fn:'Nome',fe:'Email',fm:'Messaggio',
    fs:'Invia messaggio',fnote:'Rispondo entro 24h.',
    form_ok:'Messaggio inviato! Ti rispondo entro 24h.',form_err:'Errore di invio. Scrivi a faafferrante@gmail.com',
    na:'Su di me',ne:'Esperienza',nsk:'Skills',np:'Progetti',nc:'Contatti',cv:'Scarica CV',
  },
  en:{
    h1:'Build things',h2:'that ',h2a:'matter',scroll:'Scroll',
    at:'Who I am and what\n<strong>drives me</strong>',
    p1:"I am a Full Stack Developer with 2 years of experience building real-world web applications and management systems. I built from scratch an ERP for a private security company (Java, Spring Boot, MySQL), a full stack educational portal for the Municipality of Vico del Gargano (React, PostgreSQL, Docker) and several web apps for local clients.",
    p2:"My background also includes 2 years as HR Specialist, which allows me to understand business processes from the inside and translate them into software that actually works.",
    p3:'Main stack: Java · Spring Boot · React · TypeScript · PostgreSQL · Docker. Open to full stack roles, preferably backend-focused or full stack Java/React.',
    s1:['2+','Years of experience'],s2:['4','Completed projects'],s3:['10+','Technologies'],s4:['4','Languages spoken'],
    et:'My professional\n<strong>journey</strong>',edt:'Academic\n<strong>background</strong>',
    skt:'Technologies and tools\n<strong>I work with</strong>',
    pt:'Recent\n<strong>work</strong>',plink:'View code',
    lt:'Languages\n<strong>I speak</strong>',
    ct:'Professional <strong>development</strong><br>and <strong>certifications</strong>',cbadge:'Verified',
    cb1:"Let's build",cb2:'something great.',
    clabE:'Email',clabL:'Location',
    ft:'Or write me directly',fn:'Name',fe:'Email',fm:'Message',
    fs:'Send message',fnote:'I reply within 24h.',
    form_ok:"Message sent! I'll reply within 24h.",form_err:'Send error. Write to faafferrante@gmail.com',
    na:'About',ne:'Experience',nsk:'Skills',np:'Projects',nc:'Contact',cv:'Download CV',
  },
  es:{
    h1:'Construye cosas',h2:'que ',h2a:'importan',scroll:'Desplazar',
    at:'Quién soy y qué\n<strong>me apasiona</strong>',
    p1:'Soy un Desarrollador Full Stack con 2 años de experiencia en el desarrollo de aplicaciones web y sistemas de gestión en entornos reales. He construido desde cero un ERP para una empresa de vigilancia privada (Java, Spring Boot, MySQL), un portal educativo full stack para el Municipio de Vico del Gargano (React, PostgreSQL, Docker) y varias aplicaciones web para clientes locales.',
    p2:'Mi experiencia incluye también 2 años como HR Specialist, lo que me permite entender los procesos empresariales desde dentro y traducirlos en software que realmente funciona.',
    p3:'Stack principal: Java · Spring Boot · React · TypeScript · PostgreSQL · Docker. Disponible para roles full stack, preferiblemente con foco en backend o full stack Java/React.',
    s1:['2+','Años de experiencia'],s2:['4','Proyectos completados'],s3:['10+','Tecnologías'],s4:['4','Idiomas hablados'],
    et:'Mi trayectoria\n<strong>profesional</strong>',edt:'Trayectoria\n<strong>académica</strong>',
    skt:'Tecnologías y herramientas\n<strong>con las que trabajo</strong>',
    pt:'Trabajos\n<strong>recientes</strong>',plink:'Ver código',
    lt:'Idiomas\n<strong>que hablo</strong>',
    ct:'Desarrollo <strong>profesional</strong><br>y <strong>certificaciones</strong>',cbadge:'Verificado',
    cb1:'Hablemos de',cb2:'algo grande.',
    clabE:'Correo',clabL:'Ubicación',
    ft:'O escríbeme directamente',fn:'Nombre',fe:'Correo',fm:'Mensaje',
    fs:'Enviar mensaje',fnote:'Respondo en 24h.',
    form_ok:'Mensaje enviado. Respondo en 24h.',form_err:'Error de envío. Escribe a faafferrante@gmail.com',
    na:'Sobre mí',ne:'Experiencia',nsk:'Skills',np:'Proyectos',nc:'Contacto',cv:'Descargar CV',
  },
};

const EXP={
  it:[
    {date:'GEN 2025 – GEN 2026',role:'Educatore e Facilitatore Digitale',company:'Comune di Vico del Gargano',desc:"Progettazione e realizzazione di percorsi formativi rivolti a studenti, docenti e cittadini, con l'obiettivo di promuovere l'uso consapevole delle tecnologie digitali e favorire l'inclusione digitale.",tags:['Java','Javascript','HTML','React']},
    {date:'OTT 2022 – GEN 2025',role:"HR Specialist & Responsabile d'Ufficio",company:'Consorzio Vigilanza del Gargano',desc:"Gestione delle operazioni quotidiane, coordinamento personale e attività amministrative. Recruiting, selezione e processi di assunzione del personale. Sviluppo di una piattaforma gestionale clienti in Java, MySQL, JavaScript, HTML e CSS.",tags:['Spring Boot','Java','MySQL','JavaScript','HTML','CSS']},
  ],
  en:[
    {date:'JAN 2025 – JAN 2026',role:'Digital Educator & Facilitator',company:'Municipality of Vico del Gargano',desc:'Designed and delivered training courses for students, teachers and citizens focused on conscious use of digital technologies and digital inclusion.',tags:['Java','Javascript','HTML','React']},
    {date:'OCT 2022 – JAN 2025',role:'HR Specialist & Office Manager',company:'Consorzio Vigilanza del Gargano',desc:'Managed daily operations, staff coordination and administrative tasks. Handled recruiting, selection and hiring processes. Developed a custom client management platform.',tags:['Spring Boot','Java','MySQL','JavaScript','HTML','CSS']},
  ],
  es:[
    {date:'ENE 2025 – ENE 2026',role:'Educador y Facilitador Digital',company:'Municipio de Vico del Gargano',desc:'Diseño y realización de itinerarios formativos para estudiantes, docentes y ciudadanos orientados al uso consciente de las tecnologías digitales.',tags:['Java','Javascript','HTML','React']},
    {date:'OCT 2022 – ENE 2025',role:'Especialista RRHH & Responsable de Oficina',company:'Consorzio Vigilanza del Gargano',desc:'Gestión de operaciones diarias, coordinación de personal y actividades administrativas. Desarrollo de una plataforma de gestión de clientes.',tags:['Spring Boot','Java','MySQL','JavaScript','HTML','CSS']},
  ],
};

const EDU={
  it:[
    {date:'SET 2025 – in corso',role:'LM-91 Innovazione Digitale e Comunicazione',company:'Università degli Studi di Foggia',desc:"Percorso magistrale focalizzato sull'integrazione tra competenze informatiche avanzate, analisi dei dati e discipline economico-giuridiche.",tags:['Python','C++','Analisi Dati','Sviluppo Web']},
    {date:'FEB 2024 – GIU 2024',role:'Academy per Junior Java Developer',company:'Generation Italy & Intesa SanPaolo',desc:'Academy di programmazione in Java, JavaScript, MySQL, HTML, con pratica in Agile/Scrum.',tags:['Java','JavaScript','MySQL','HTML','Agile/Scrum']},
    {date:'SET 2019 – APR 2024',role:'L-12 Scienze della Mediazione Linguistica e delle Culture Internazionali',company:'Università degli Studi di Torino',desc:'Lingue inglese, spagnola e portoghese. Interpretariato, traduzione tecnica e sottotitolazione.',tags:['Inglese C1','Spagnolo C1','Portoghese B2','Economia','Informatica']},
  ],
  en:[
    {date:'SEP 2025 – ongoing',role:'LM-91 Digital Innovation and Communication',company:'University of Foggia',desc:"Master's degree focused on advanced computing, data analysis and economic-legal disciplines.",tags:['Python','C++','Data Analysis','Web Dev']},
    {date:'FEB 2024 – JUN 2024',role:'Academy for Junior Java Developer',company:'Generation Italy & Intesa SanPaolo',desc:'Programming academy in Java, JavaScript, MySQL, HTML with Agile/Scrum practice.',tags:['Java','JavaScript','MySQL','HTML','Agile/Scrum']},
    {date:'SEP 2019 – APR 2024',role:'L-12 Linguistic Mediation and International Cultures',company:'University of Turin',desc:'English, Spanish and Portuguese. Interpreting, technical translation and subtitling.',tags:['English C1','Spanish C1','Portuguese B2','Economics','IT']},
  ],
  es:[
    {date:'SEP 2025 – en curso',role:'LM-91 Innovación Digital y Comunicación',company:'Universidad de Foggia',desc:'Máster centrado en competencias informáticas avanzadas, análisis de datos y disciplinas económico-jurídicas.',tags:['Python','C++','Análisis de Datos','Desarrollo Web']},
    {date:'FEB 2024 – JUN 2024',role:'Academy para Junior Java Developer',company:'Generation Italy & Intesa SanPaolo',desc:'Academy de programación en Java, JavaScript, MySQL, HTML con práctica en Agile/Scrum.',tags:['Java','JavaScript','MySQL','HTML','Agile/Scrum']},
    {date:'SEP 2019 – ABR 2024',role:'L-12 Mediación Lingüística y Culturas Internacionales',company:'Universidad de Turín',desc:'Inglés, español y portugués. Interpretación, traducción técnica y subtitulación.',tags:['Inglés C1','Español C1','Portugués B2','Economía','Informática']},
  ],
};

const PROJ={
  it:[
    {n:'01',title:'Sito per PizzaMania San Menaio',desc:'Sito web moderno per una pizzeria locale con menu interattivo, sistema di prenotazione online e galleria fotografica.',tags:['React','TypeScript','Tailwind CSS','Node.js'],link:'https://github.com/barone71'},
    {n:'02',title:'Gestionale Consorzio Vigilanza del Gargano',desc:'Sistema gestionale completo per turni, presenze, buste paga e reportistica integrata.',tags:['Spring Boot','Java','SQL','JavaScript','HTML','CSS'],link:'https://github.com/barone71'},
    {n:'03',title:'FoodByte – Generation Italy & Intesa SanPaolo',desc:'Project Work finale del corso da 500 ore. E-commerce simil Just-Eat di Food Truck in Java/Spring, HTML, CSS e JavaScript.',tags:['Java','Spring','HTML','CSS','JavaScript'],link:'https://github.com/barone71'},
    {n:'04',title:'&lt;kidsCode&gt; Comune di Vico del Gargano',desc:'Portale didattico full-stack per il progetto anti-dispersione scolastica. Quiz interattivi, badge gamificati e dashboard dedicate.',tags:['Java','Spring Boot','PostgreSQL','React','TypeScript','Docker'],link:'https://github.com/barone71'},
  ],
  en:[
    {n:'01',title:'PizzaMania San Menaio Website',desc:'Modern website for a local pizzeria with interactive menu, online booking system and photo gallery.',tags:['React','TypeScript','Tailwind CSS','Node.js'],link:'https://github.com/barone71'},
    {n:'02',title:'Consorzio Vigilanza del Gargano ERP',desc:'Full management system for shifts, attendance, payslips and integrated reporting.',tags:['Spring Boot','Java','SQL','JavaScript','HTML','CSS'],link:'https://github.com/barone71'},
    {n:'03',title:'FoodByte – Generation Italy & Intesa SanPaolo',desc:'Final project of a 500-hour course. Just-Eat-like food truck e-commerce.',tags:['Java','Spring','HTML','CSS','JavaScript'],link:'https://github.com/barone71'},
    {n:'04',title:'&lt;kidsCode&gt; Municipality of Vico del Gargano',desc:'Full-stack educational portal for school drop-out prevention with interactive quizzes and gamified badges.',tags:['Java','Spring Boot','PostgreSQL','React','TypeScript','Docker'],link:'https://github.com/barone71'},
  ],
  es:[
    {n:'01',title:'Sitio web PizzaMania San Menaio',desc:'Sitio web moderno para pizzería local con menú interactivo, reservas online y galería fotográfica.',tags:['React','TypeScript','Tailwind CSS','Node.js'],link:'https://github.com/barone71'},
    {n:'02',title:'ERP Consorzio Vigilanza del Gargano',desc:'Sistema de gestión completo para turnos, asistencia, nóminas y reportes.',tags:['Spring Boot','Java','SQL','JavaScript','HTML','CSS'],link:'https://github.com/barone71'},
    {n:'03',title:'FoodByte – Generation Italy & Intesa SanPaolo',desc:'Proyecto final de 500 horas. E-commerce tipo Just-Eat.',tags:['Java','Spring','HTML','CSS','JavaScript'],link:'https://github.com/barone71'},
    {n:'04',title:'&lt;kidsCode&gt; Municipio de Vico del Gargano',desc:'Portal educativo full-stack para prevención del abandono escolar.',tags:['Java','Spring Boot','PostgreSQL','React','TypeScript','Docker'],link:'https://github.com/barone71'},
  ],
};

let currentTheme='dark';
// LANG viene iniettato dalla pagina (vedi sotto)

function smoothTo(id){const el=document.querySelector(id);if(el)el.scrollIntoView({behavior:'smooth',block:'start'});}
function esc(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function tags(arr){return arr.map(t=>`<span class="tag">${esc(t)}</span>`).join('');}
function certNameStr(c,lang){return typeof c.name==='string'?c.name:c.name[lang];}

function toggleTheme(){
  currentTheme=currentTheme==='dark'?'light':'dark';
  document.documentElement.setAttribute('data-theme',currentTheme);
  const isDark=currentTheme==='dark';
  document.getElementById('moonWrap').classList.toggle('active',isDark);
  document.getElementById('sunWrap').classList.toggle('active',!isDark);
}

function toggleLang(){
  const menu=document.getElementById('langMenu');
  const trigger=document.getElementById('langTrigger');
  menu.classList.toggle('open');
  trigger.classList.toggle('open');
}

function setLang(code){
  // naviga alla versione linguistica
  window.location.href='../'+code+'/';
}

document.addEventListener('click',e=>{
  const wrap=document.getElementById('langWrap');
  if(!wrap.contains(e.target)){document.getElementById('langMenu').classList.remove('open');document.getElementById('langTrigger').classList.remove('open');}
});

window.addEventListener('scroll',()=>{document.getElementById('navbar').classList.toggle('scrolled',window.scrollY>40);});

const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target);}});},{threshold:0.1});
function observeFades(){document.querySelectorAll('.fade-up').forEach(el=>observer.observe(el));}

function animateCounter(el,target,suffix){
  let s=0,inc=target/55;
  const t=setInterval(()=>{s+=inc;if(s>=target){el.textContent=target+suffix;clearInterval(t);}else el.textContent=Math.floor(s)+suffix;},28);
}
const counterObserver=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){const el=e.target;animateCounter(el,parseInt(el.dataset.target),el.dataset.suffix||'');counterObserver.unobserve(el);}});},{threshold:0.3});

const langBarObserver=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){document.querySelectorAll('.lang-bar-fill').forEach(bar=>{bar.style.width=bar.dataset.pct+'%';});langBarObserver.unobserve(e.target);}});},{threshold:0.3});

let twTimer=null;
function startTypewriter(){
  clearTimeout(twTimer);let wi=0,ci=0,deleting=false;
  const el=document.getElementById('tw-text');if(!el)return;
  function step(){
    const word=TW_WORDS[wi];
    if(!deleting){ci++;el.textContent=word.slice(0,ci);if(ci===word.length){deleting=true;twTimer=setTimeout(step,1800);return;}twTimer=setTimeout(step,68);}
    else{ci--;el.textContent=word.slice(0,ci);if(ci===0){deleting=false;wi=(wi+1)%TW_WORDS.length;}twTimer=setTimeout(step,ci===0?300:40);}
  }
  twTimer=setTimeout(step,800);
}

function initCanvas(){
  const canvas=document.getElementById('hero-canvas');if(!canvas)return;
  const ctx=canvas.getContext('2d');let raf,tick=0;
  function resize(){canvas.width=canvas.offsetWidth;canvas.height=canvas.offsetHeight;}
  resize();window.addEventListener('resize',resize);
  function draw(){
    const W=canvas.width,H=canvas.height;ctx.clearRect(0,0,W,H);
    const cx=W*.64,cy=H*.42,R=Math.min(W,H)*.38;
    const isDk=document.documentElement.getAttribute('data-theme')!=='light';
    const g=ctx.createRadialGradient(cx,cy,0,cx,cy,R*1.7);
    g.addColorStop(0,isDk?'rgba(62,207,218,.14)':'rgba(124,58,237,.10)');
    g.addColorStop(.45,isDk?'rgba(42,143,150,.07)':'rgba(168,85,247,.05)');
    g.addColorStop(1,'rgba(0,0,0,0)');
    ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
    const g2=ctx.createRadialGradient(cx-R*.3,cy+R*.2,0,cx-R*.3,cy+R*.2,R*1.1);
    g2.addColorStop(0,isDk?'rgba(20,100,110,.12)':'rgba(100,40,200,.08)');
    g2.addColorStop(1,'rgba(0,0,0,0)');
    ctx.fillStyle=g2;ctx.fillRect(0,0,W,H);
    for(let i=0;i<44;i++){
      const fr=i/44,a=fr*Math.PI*2+tick*.4,sp=Math.PI*1.1,phi=-sp/2+fr*sp;
      const sx=cx+Math.sin(phi+tick*.15)*R*.55,sy=cy+Math.cos(phi*1.7)*R*.35;
      const br=R*(.18+.22*Math.abs(Math.sin(fr*Math.PI))),sy2=.18+.28*Math.abs(Math.cos(phi));
      const hue=isDk?170+fr*30+(i%3)*7:260+fr*40+(i%3)*8;
      const sat=isDk?55+fr*30:50+fr*25,lit=isDk?28+fr*28:55+fr*20;
      const al=.45+.38*Math.abs(Math.sin(fr*Math.PI));
      ctx.save();ctx.translate(sx,sy);ctx.rotate(a+phi*.5);
      ctx.beginPath();ctx.ellipse(0,0,br,br*sy2,0,0,Math.PI*2);
      const dg=ctx.createRadialGradient(0,-br*sy2*.3,0,0,0,br);
      dg.addColorStop(0,`hsla(${hue+10},${sat+20}%,${lit+24}%,${al})`);
      dg.addColorStop(.55,`hsla(${hue},${sat}%,${lit}%,${al*.82})`);
      dg.addColorStop(1,`hsla(${hue-10},${sat-15}%,${lit-12}%,${al*.25})`);
      ctx.fillStyle=dg;ctx.fill();
      ctx.strokeStyle=`hsla(${hue+15},90%,${lit+36}%,${al*.5})`;ctx.lineWidth=.8;ctx.stroke();
      ctx.restore();
    }
    const sc=isDk?[[180,210,220],[175,190,215],[185,220,210],[178,200,218],[182,215,212]]:[[270,180,160],[265,170,155],[275,190,165],[268,175,158],[272,185,162]];
    for(let i=0;i<5;i++){
      const a=tick*.25+i*1.26,x1=cx+Math.cos(a)*R*.25,y1=cy+Math.sin(a*.7)*R*.55;
      const x2=cx+Math.cos(a+.45)*R*.9,y2=cy+Math.sin(a*.7+.5)*R*.88;
      const[h,s,l]=sc[i],sg=ctx.createLinearGradient(x1,y1,x2,y2);
      sg.addColorStop(0,`hsla(${h},${s}%,${l}%,0)`);sg.addColorStop(.4,`hsla(${h},${s}%,${l}%,${.4-i*.05})`);sg.addColorStop(1,`hsla(${h},${s}%,${l}%,0)`);
      ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.strokeStyle=sg;ctx.lineWidth=2-i*.25;ctx.stroke();
    }
    tick+=.007;raf=requestAnimationFrame(draw);
  }
  draw();
}

async function submitForm(e){
  e.preventDefault();
  const t=T[LANG];
  const name=document.getElementById('fName').value.trim();
  const email=document.getElementById('fEmail').value.trim();
  const msg=document.getElementById('fMsg').value.trim();
  if(!name||!email||!msg)return;
  const btn=document.getElementById('fBtn'),note=document.getElementById('fNote');
  btn.textContent='...';btn.disabled=true;btn.style.opacity='.6';
  try{
    const res=await fetch('https://formspree.io/f/mlgajeov',{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify({name,email,message:msg})});
    if(res.ok){document.getElementById('formArea').innerHTML=`<div class="form-success"><span class="form-success-icon">✓</span><p>${t.form_ok}</p></div>`;}
    else{note.textContent=t.form_err;note.className='form-error';btn.textContent=t.fs;btn.disabled=false;btn.style.opacity='1';}
  }catch{note.textContent=t.form_err;note.className='form-error';btn.textContent=t.fs;btn.disabled=false;btn.style.opacity='1';}
}

function renderTranslations(){
  const t=T[LANG];
  document.querySelectorAll('[data-t]').forEach(el=>{const key=el.getAttribute('data-t');if(t[key]!==undefined)el.innerHTML=t[key];});
}

function renderAbout(){
  const t=T[LANG];
  document.getElementById('aboutText').innerHTML=`<p>${t.p1}</p><p style="margin-top:18px">${t.p2}</p><p style="margin-top:18px">${t.p3}</p>`;
  const stats=[t.s1,t.s2,t.s3,t.s4];
  document.getElementById('aboutStats').innerHTML=stats.map(([n,l])=>`<div class="stat-card"><div class="stat-num" data-target="${parseInt(n)}" data-suffix="${n.includes('+')?'+':''}">${n}</div><div class="stat-label">${l}</div></div>`).join('');
  document.querySelectorAll('.stat-num[data-target]').forEach(el=>counterObserver.observe(el));
}

function expItem(e,i){
  return `<div class="fade-up" style="transition-delay:${i*80}ms"><div class="exp-item"><div><div class="exp-date">${esc(e.date)}</div><div class="exp-company">${esc(e.company)}</div><div class="exp-role">${esc(e.role)}</div><div class="exp-desc">${esc(e.desc)}</div><div class="exp-tags">${tags(e.tags)}</div></div><div class="exp-num">0${i+1}</div></div></div>`;
}

function renderExp(){
  document.getElementById('expList').innerHTML=EXP[LANG].map((e,i)=>expItem(e,i)).join('');
  document.getElementById('eduList').innerHTML=EDU[LANG].map((e,i)=>expItem(e,i)).join('');
}

function renderSkills(){
  document.getElementById('skillsGrid').innerHTML=SKILLS.map((s,i)=>
    `<div class="fade-up" style="transition-delay:${i*38}ms"><div class="skill-card"><div class="skill-icon-svg">${s.svg}</div><div class="skill-name">${esc(s.name)}</div></div></div>`
  ).join('');
}

function renderProjects(){
  const t=T[LANG];
  document.getElementById('projectsGrid').innerHTML=PROJ[LANG].map((p,i)=>
    `<div class="fade-up" style="transition-delay:${i*60}ms"><div class="project-card"><div class="project-num">${p.n}</div><div class="project-title">${p.title}</div><div class="project-desc">${esc(p.desc)}</div><div class="project-tags">${tags(p.tags)}</div><a href="${p.link}" target="_blank" rel="noopener noreferrer" class="project-link">${esc(t.plink)}</a></div></div>`
  ).join('');
}

function renderLanguages(){
  document.getElementById('langGrid').innerHTML=LANGS_DATA.map((l,i)=>
    `<div class="fade-up" style="transition-delay:${i*70}ms"><div class="lang-card"><span class="lang-flag" style="animation-delay:${i*.6}s">${l.flag}</span><div class="lang-name">${l.name[LANG]}</div><div class="lang-level">${l.level}</div><div class="lang-bar"><div class="lang-bar-fill" data-pct="${l.pct}"></div></div></div></div>`
  ).join('');
  const sec=document.getElementById('languages');if(sec)langBarObserver.observe(sec);
}

function renderCerts(){
  const t=T[LANG];
  document.getElementById('certList').innerHTML=CERTS.map((c,i)=>
    `<div class="fade-up" style="transition-delay:${i*60}ms"><div class="cert-item"><div><div class="cert-name">${esc(certNameStr(c,LANG))}</div><div class="cert-org">${esc(c.org)}</div></div><div class="cert-badge">${esc(t.cbadge)} · ${c.year}</div></div></div>`
  ).join('');
}

function renderContact(){
  const t=T[LANG];
  document.getElementById('contactBig').innerHTML=`${t.cb1}<br><strong>${t.cb2}</strong>`;
  document.getElementById('contactLinks').innerHTML=`
    <div class="contact-line"><span class="contact-line-label">${t.clabE}</span><a href="mailto:faafferrante@gmail.com" class="contact-line-val">faafferrante@gmail.com</a><span class="contact-line-arrow">↗</span></div>
    <div class="contact-line"><span class="contact-line-label">Tel</span><a href="tel:+393500990072" class="contact-line-val">+39 350 09 90 072</a><span class="contact-line-arrow">↗</span></div>
    <div class="contact-line"><span class="contact-line-label">${t.clabL}</span><span class="contact-line-val">Vico del Gargano, Italia</span></div>
    <div class="contact-line"><span class="contact-line-label">GitHub</span><a href="https://github.com/barone71" target="_blank" rel="noopener noreferrer" class="contact-line-val">github.com/barone71</a><span class="contact-line-arrow">↗</span></div>
    <div class="contact-line"><span class="contact-line-label">LinkedIn</span><a href="https://www.linkedin.com/in/francescoantonio-afferrante/" target="_blank" rel="noopener noreferrer" class="contact-line-val">linkedin.com/in/francescoantonio-afferrante</a><span class="contact-line-arrow">↗</span></div>`;
}

function renderAll(){
  renderTranslations();renderAbout();renderExp();renderSkills();renderProjects();renderLanguages();renderCerts();renderContact();observeFades();
}

const CV_DATA='../assets/cv.pdf';

document.addEventListener('DOMContentLoaded',()=>{
  // imposta lingua attiva nel dropdown in base alla pagina corrente
  const ui=LANGS_UI.find(l=>l.code===LANG);
  if(ui){
    document.getElementById('langFlag').textContent=ui.flag;
    document.getElementById('langLabel').textContent=ui.label;
  }
  document.querySelectorAll('.lang-option').forEach((btn,i)=>{
    btn.classList.toggle('active',LANGS_UI[i].code===LANG);
  });
  // cv download
  const cvBtn=document.getElementById('cvBtn');
  if(cvBtn){cvBtn.href=CV_DATA;cvBtn.setAttribute('download','CV_Francesco_Antonio_Afferrante.pdf');}
  renderAll();
  startTypewriter();
  initCanvas();
});

