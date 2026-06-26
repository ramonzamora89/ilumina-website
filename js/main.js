// ── Translations ────────────────────────────────────────────────────────────
const T = {
  en: {
    nav: { home: 'Home', team: 'Team', press: 'Press', toggle: 'ES' },
    hero: {
      eyebrow: 'Strategic Communications',
      title: 'Illuminate your message.<br>Amplify your mission.',
      sub: 'Ilumina is a strategic communications consultancy serving purpose-driven brands, organizations, and leaders across the Americas.',
      cta: 'Get in touch'
    },
    about: {
      label: 'Who We Are',
      heading: 'Where message meets movement.',
      body: 'Ilumina is a strategic communications consultancy serving purpose-driven brands, organizations, and leaders. We combine cultural fluency, sharp storytelling, and poetic clarity to deliver communications that resonate—and ignite action.',
      edgeLabel: 'Our Edge',
      edge: [
        'Bilingual & cross-cultural expertise (English + Spanish)',
        'Built for clarity, creativity, and real-world impact',
        'Poised at the intersection of message and movement'
      ]
    },
    services: {
      label: 'What We Do',
      heading: 'Communications built for impact.',
      cards: [
        { title: 'Strategic Communications', desc: 'We shape narratives that align with your purpose and resonate across audiences.' },
        { title: 'Brand Story & Voice', desc: 'We help you define how you show up—with clarity, consistency, and fire.' },
        { title: 'Impact Campaigns', desc: 'From concept to rollout, we craft campaigns that inspire action and leave a mark.' },
        { title: 'Thought Leadership', desc: 'We position your leaders as beacons of insight and credibility.' }
      ]
    },
    team: {
      eyebrow: 'Our People',
      heading: 'Meet the team.',
      sub: 'A bilingual team of communicators, strategists, and storytellers committed to clarity and impact.',
      readMore: 'Read more',
      readLess: 'Read less'
    },
    press: {
      eyebrow: 'In the News',
      heading: 'Press.',
      sub: 'Coverage across media, journalism, and entertainment.'
    },
    footer: {
      contactLabel: 'Get in touch',
      rights: '© 2025 Ilumina Communications. All rights reserved.'
    }
  },
  es: {
    nav: { home: 'Inicio', team: 'Equipo', press: 'Prensa', toggle: 'EN' },
    hero: {
      eyebrow: 'Comunicaciones Estratégicas',
      title: 'Ilumina tu mensaje.<br>Amplifica tu misión.',
      sub: 'Ilumina es una consultoría de comunicaciones estratégicas al servicio de marcas, organizaciones y líderes con propósito en las Américas.',
      cta: 'Ponete en contacto'
    },
    about: {
      label: 'Quiénes Somos',
      heading: 'Donde el mensaje se convierte en movimiento.',
      body: 'Ilumina es una consultoría estratégica de comunicaciones al servicio de marcas, organizaciones y líderes con propósito. Combinamos fluidez cultural, narrativa aguda y claridad poética para crear comunicaciones que resuenan e inspiran acción.',
      edgeLabel: 'Nuestra Ventaja',
      edge: [
        'Experiencia bilingüe e intercultural (inglés + español)',
        'Enfocados en claridad, creatividad e impacto real',
        'En la intersección del mensaje y el movimiento'
      ]
    },
    services: {
      label: 'Lo Que Hacemos',
      heading: 'Comunicaciones diseñadas para el impacto.',
      cards: [
        { title: 'Comunicaciones Estratégicas', desc: 'Construimos narrativas alineadas con tu propósito que resuenan en distintas audiencias.' },
        { title: 'Historia de Marca y Voz', desc: 'Te ayudamos a definir cómo te presentas al mundo: con claridad, consistencia e intensidad.' },
        { title: 'Campañas de Impacto', desc: 'Del concepto al lanzamiento, creamos campañas que inspiran acción y dejan huella.' },
        { title: 'Liderazgo de Pensamiento', desc: 'Posicionamos a tus líderes como referentes de ideas y credibilidad en su campo.' }
      ]
    },
    team: {
      eyebrow: 'Nuestro Equipo',
      heading: 'Conoce al equipo.',
      sub: 'Un equipo bilingüe de comunicadores, estrategas y narradores comprometidos con la claridad y el impacto.',
      readMore: 'Leer más',
      readLess: 'Leer menos'
    },
    press: {
      eyebrow: 'En los Medios',
      heading: 'Prensa.',
      sub: 'Cobertura en medios, periodismo y entretenimiento.'
    },
    footer: {
      contactLabel: 'Contáctenos',
      rights: '© 2025 Ilumina Communications. Todos los derechos reservados.'
    }
  }
};

// ── Team Data ────────────────────────────────────────────────────────────────
const TEAM = [
  {
    id: 'jose-zamora',
    photo: 'assets/team/jose-zamora.jpeg',
    name: 'Jose Zamora',
    en: {
      role: 'Principal & Founder',
      bio: `<p>Jose Zamora is the principal and founder of Ilumina Communications, a bilingual strategic communications consultancy that helps purpose-driven brands amplify their voice and impact. He is a communications leader with over two decades of experience advancing media innovation, collaboration, and freedom of the press across the Americas. Jose currently serves as communications advisor for the <a href="https://www.elarchivo.media" target="_blank" rel="noopener">Central American Independent Media Archive</a> and helps lead global advocacy for the <a href="https://www.zamoralibre.com" target="_blank" rel="noopener">#ZamoraLibre</a> campaign.</p>
<p>Previously, he was Chief Communications Officer at <a href="https://exilecontent.com" target="_blank" rel="noopener">Exile Content Studio</a> and Senior Vice President of Strategic Communications at Univision News, where he helped amplify impact, build partnerships, and drive audience growth. Earlier in his career, he led the Knight News Challenge at Knight Foundation and managed over 100 grants focused on journalism and civic engagement.</p>
<p>A <a href="https://jsk.stanford.edu" target="_blank" rel="noopener">JSK Stanford Fellow</a>, he holds degrees from <a href="https://derecho.ufm.edu" target="_blank" rel="noopener">Universidad Francisco Marroquín</a>, <a href="https://www.law.ox.ac.uk/IHRLschool" target="_blank" rel="noopener">Oxford University</a>, and the <a href="https://lbj.utexas.edu" target="_blank" rel="noopener">University of Texas at Austin</a>. He serves on the boards of the <a href="https://www.journalism.cuny.edu/give-to-the-j-school/cuny-graduate-school-journalism-foundation" target="_blank" rel="noopener">CUNY Graduate School of Journalism Foundation</a>, <a href="https://radioambulante.org/en" target="_blank" rel="noopener">Radio Ambulante</a>, <a href="https://factchequeado.com/about-us" target="_blank" rel="noopener">Factchequeado</a>, and the <a href="https://www.icfj.org" target="_blank" rel="noopener">International Center for Journalists</a>.</p>`
    },
    es: {
      role: 'Principal y Fundador',
      bio: `<p>Jose Zamora es el principal y fundador de Ilumina Communications, una consultoría bilingüe de comunicaciones estratégicas que ayuda a marcas con propósito a amplificar su voz e impacto. Es un líder en comunicaciones con más de dos décadas de experiencia impulsando la innovación mediática, la colaboración y la libertad de prensa en las Américas. Actualmente asesora al <a href="https://www.elarchivo.media" target="_blank" rel="noopener">Archivo de Medios Independientes de Centroamérica</a> y lidera la incidencia global de la campaña <a href="https://www.zamoralibre.com" target="_blank" rel="noopener">#ZamoraLibre</a>.</p>
<p>Anteriormente fue Director de Comunicaciones en <a href="https://exilecontent.com" target="_blank" rel="noopener">Exile Content Studio</a> y Vicepresidente Senior de Comunicaciones Estratégicas en Univision News. Con anterioridad, lideró el Knight News Challenge en la Knight Foundation y administró más de 100 becas enfocadas en periodismo y participación cívica.</p>
<p>Becario <a href="https://jsk.stanford.edu" target="_blank" rel="noopener">JSK de Stanford</a>, tiene títulos de la <a href="https://derecho.ufm.edu" target="_blank" rel="noopener">Universidad Francisco Marroquín</a>, la <a href="https://www.law.ox.ac.uk/IHRLschool" target="_blank" rel="noopener">Universidad de Oxford</a> y la <a href="https://lbj.utexas.edu" target="_blank" rel="noopener">Universidad de Texas en Austin</a>. Forma parte de las juntas directivas de la Fundación <a href="https://www.journalism.cuny.edu/give-to-the-j-school/cuny-graduate-school-journalism-foundation" target="_blank" rel="noopener">CUNY Graduate School of Journalism</a>, <a href="https://radioambulante.org/en" target="_blank" rel="noopener">Radio Ambulante</a>, <a href="https://factchequeado.com/about-us" target="_blank" rel="noopener">Factchequeado</a> y el <a href="https://www.icfj.org" target="_blank" rel="noopener">Centro Internacional de Periodistas</a>.</p>`
    }
  },
  {
    id: 'juan-yoshika',
    photo: 'assets/team/juan-yoshika.jpeg',
    name: 'Juan Yoshika',
    en: {
      role: 'Director of Public Relations & Publicity',
      bio: `<p>Juan Yoshika is Director of Public Relations and Publicity at Ilumina Communications, where he leads media strategy, promotional campaigns, and narrative development for purpose-driven projects and platforms. A bilingual communications expert with deep experience across entertainment, civic engagement, and journalism, Juan brings over a decade of expertise building narratives that connect and campaigns that move audiences.</p>
<p>Prior to Ilumina, Juan served as Senior Manager at <a href="https://www.linkedin.com/company/acoustyle-communications" target="_blank" rel="noopener">Acoustyle Communications</a>, where he led the development of the agency's Sports, Corporate, and Foundation Relations verticals. He oversaw strategic communications for high-profile clients, including <a href="https://rimassports.com/en" target="_blank" rel="noopener">Rimas Sports</a>, <a href="https://www.rimaspublishing.com" target="_blank" rel="noopener">Rimas Publishing</a>, and Karol G's <a href="https://concorafoundation.org/en" target="_blank" rel="noopener">Con Cora Foundation</a>. Before Acoustyle, Juan worked on award-winning publicity efforts at <a href="https://corporate.televisaunivision.com" target="_blank" rel="noopener">Univision</a>, promoting major franchises such as <a href="https://corporate.televisaunivision.com/press/press-releases/2020/02/05/premio-lo-nuestro-2020-expands-star-studded-lineup-for-the-first-latin-music-celebration-of-the-decade" target="_blank" rel="noopener">Premio Lo Nuestro</a>, <a href="https://corporate.televisaunivision.com/premios-juventud" target="_blank" rel="noopener">Premios Juventud</a>, <a href="https://www.univision.com/shows/mira-quien-baila-inici" target="_blank" rel="noopener">Mira Quién Baila</a>, and the <a href="https://www.tudn.com/futbol/uefa-champions-league" target="_blank" rel="noopener">UEFA Champions League on TUDN</a>.</p>
<p>He also spearheaded digital and editorial strategies to boost voter turnout at both <a href="https://meteorite.co" target="_blank" rel="noopener">Meteorite</a> and Univision, leading communications for nonpartisan civic engagement campaigns nationwide.</p>`
    },
    es: {
      role: 'Director de Relaciones Públicas y Publicidad',
      bio: `<p>Juan Yoshika es Director de Relaciones Públicas y Publicidad en Ilumina Communications, donde lidera la estrategia de medios, campañas de promoción y desarrollo de narrativas para proyectos con propósito. Experto en comunicaciones bilingüe con amplia experiencia en entretenimiento, participación cívica y periodismo, Juan aporta más de una década de experiencia construyendo narrativas que conectan y campañas que movilizan audiencias.</p>
<p>Antes de Ilumina, Juan fue Gerente Senior en <a href="https://www.linkedin.com/company/acoustyle-communications" target="_blank" rel="noopener">Acoustyle Communications</a>, donde lideró los verticales de deportes, relaciones corporativas y fundaciones. Supervisó las comunicaciones de clientes de alto perfil como <a href="https://rimassports.com/en" target="_blank" rel="noopener">Rimas Sports</a>, <a href="https://www.rimaspublishing.com" target="_blank" rel="noopener">Rimas Publishing</a> y la <a href="https://concorafoundation.org/en" target="_blank" rel="noopener">Fundación Con Cora</a> de Karol G. Anteriormente trabajó en <a href="https://corporate.televisaunivision.com" target="_blank" rel="noopener">Univision</a>, promoviendo franquicias como <a href="https://corporate.televisaunivision.com/press/press-releases/2020/02/05/premio-lo-nuestro-2020-expands-star-studded-lineup-for-the-first-latin-music-celebration-of-the-decade" target="_blank" rel="noopener">Premio Lo Nuestro</a>, <a href="https://corporate.televisaunivision.com/premios-juventud" target="_blank" rel="noopener">Premios Juventud</a>, <a href="https://www.univision.com/shows/mira-quien-baila-inici" target="_blank" rel="noopener">Mira Quién Baila</a> y la <a href="https://www.tudn.com/futbol/uefa-champions-league" target="_blank" rel="noopener">UEFA Champions League en TUDN</a>.</p>
<p>También lideró estrategias digitales para incrementar la participación electoral en <a href="https://meteorite.co" target="_blank" rel="noopener">Meteorite</a> y Univision, dirigiendo comunicaciones para campañas cívicas no partidistas a nivel nacional.</p>`
    }
  },
  {
    id: 'ramon-zamora',
    photo: 'assets/team/ramon-zamora.jpeg',
    name: 'Ramón Zamora',
    en: {
      role: 'Director of Research',
      bio: `<p>Ramón Zamora is Director of Research at Ilumina Communications, where he leads strategy, insight development, and knowledge partnerships across media, advocacy, and civic innovation. A trained anthropologist and digital strategist, he combines qualitative research, narrative development, and cross-sector collaboration to help mission-driven organizations communicate with clarity and impact.</p>
<p>Ramón is the founder of <a href="https://labetnografico.com" target="_blank" rel="noopener">LabEtnográfico</a> and the creator of <a href="https://www.elarchivo.media" target="_blank" rel="noopener">elArchivo</a>, a regional initiative to preserve and amplify the work of Central America's independent media. He has led research-action teams across academic and nonprofit institutions and previously served as product manager at <a href="https://x.com/el_Periodico" target="_blank" rel="noopener">elPeriódico de Guatemala</a>.</p>
<p>He holds a master's in Culture, Communication, and Technology from <a href="https://cct.georgetown.edu" target="_blank" rel="noopener">Georgetown University</a> and a B.A. in Anthropology and Sociology from <a href="https://www.uvg.edu.gt/carreras/licenciatura-en-antropologia" target="_blank" rel="noopener">Universidad del Valle de Guatemala</a>.</p>`
    },
    es: {
      role: 'Director de Investigación',
      bio: `<p>Ramón Zamora es Director de Investigación en Ilumina Communications, donde lidera la estrategia, el desarrollo de conocimiento y las alianzas en medios, incidencia e innovación cívica. Antropólogo de formación y estratega digital, combina investigación cualitativa, desarrollo narrativo y colaboración intersectorial para ayudar a organizaciones con misión a comunicarse con claridad e impacto.</p>
<p>Ramón es fundador de <a href="https://labetnografico.com" target="_blank" rel="noopener">LabEtnográfico</a> y creador de <a href="https://www.elarchivo.media" target="_blank" rel="noopener">elArchivo</a>, una iniciativa regional para preservar y amplificar el trabajo de los medios independientes de Centroamérica. Previamente fue product manager en <a href="https://x.com/el_Periodico" target="_blank" rel="noopener">elPeriódico de Guatemala</a>.</p>
<p>Tiene una maestría en Cultura, Comunicación y Tecnología de la <a href="https://cct.georgetown.edu" target="_blank" rel="noopener">Universidad de Georgetown</a> y una licenciatura en Antropología y Sociología de la <a href="https://www.uvg.edu.gt/carreras/licenciatura-en-antropologia" target="_blank" rel="noopener">Universidad del Valle de Guatemala</a>.</p>`
    }
  },
  {
    id: 'daniela-stepensky',
    photo: 'assets/team/daniela-stepensky.webp',
    name: 'Daniela Stepensky',
    en: {
      role: 'Director of Product and Project Management',
      bio: `<p>Daniela Stepensky is Director of Product and Project Management at Ilumina Communications, where she leads strategy, execution, and digital innovation across client initiatives. A seasoned product leader and fractional CPO, she brings over 15 years of experience developing media, civic, and tech products—from launch to scale—with a sharp focus on user experience, impact, and growth.</p>
<p>Daniela has led product teams at the <a href="https://www.huffpost.com" target="_blank" rel="noopener">Huffington Post</a>, <a href="https://www.aol.com/entertainment/music" target="_blank" rel="noopener">AOL Music</a>, Fusion (Disney-ABC &amp; Univision), and <a href="https://exilecontent.com" target="_blank" rel="noopener">Exile Content Studio</a>, where she oversaw the creation of major digital platforms and <a href="https://deadline.com/2021/12/animated-childrens-series-lil-heroes-nfts-exile-content-studio-edgar-plans-curatible-1234902268" target="_blank" rel="noopener">NFT initiatives</a>. She specializes in roadmap development, agile delivery, and tech-enabled storytelling across web, mobile, and blockchain environments.</p>
<p>Multilingual and globally experienced, Daniela holds a master's degree from <a href="https://tisch.nyu.edu/itp" target="_blank" rel="noopener">NYU's Interactive Telecommunications Program (ITP)</a> and a BBA in Marketing from <a href="https://cancun.anahuac.mx/licenciaturas" target="_blank" rel="noopener">Anáhuac University</a>. She has consulted for startups, media companies, and innovation labs throughout the Americas.</p>`
    },
    es: {
      role: 'Directora de Producto y Gestión de Proyectos',
      bio: `<p>Daniela Stepensky es Directora de Producto y Gestión de Proyectos en Ilumina Communications, donde lidera la estrategia, ejecución e innovación digital en las iniciativas de clientes. Líder de producto experimentada y CPO fraccionaria, aporta más de 15 años de experiencia desarrollando productos de medios, cívicos y tecnológicos desde el lanzamiento hasta la escala.</p>
<p>Daniela ha liderado equipos de producto en <a href="https://www.huffpost.com" target="_blank" rel="noopener">Huffington Post</a>, <a href="https://www.aol.com/entertainment/music" target="_blank" rel="noopener">AOL Music</a>, Fusion (Disney-ABC y Univision) y <a href="https://exilecontent.com" target="_blank" rel="noopener">Exile Content Studio</a>, donde supervisó la creación de plataformas digitales importantes e <a href="https://deadline.com/2021/12/animated-childrens-series-lil-heroes-nfts-exile-content-studio-edgar-plans-curatible-1234902268" target="_blank" rel="noopener">iniciativas de NFT</a>. Se especializa en desarrollo de roadmaps, entrega ágil y narrativa habilitada por tecnología en entornos web, móvil y blockchain.</p>
<p>Multilingüe y con experiencia global, Daniela tiene una maestría del <a href="https://tisch.nyu.edu/itp" target="_blank" rel="noopener">Programa de Telecomunicaciones Interactivas (ITP) de NYU</a> y una licenciatura en Mercadotecnia de la <a href="https://cancun.anahuac.mx/licenciaturas" target="_blank" rel="noopener">Universidad Anáhuac</a>.</p>`
    }
  },
  {
    id: 'andres-escobar',
    photo: 'assets/team/andres-escobar.webp',
    name: 'Andrés Escobar',
    en: {
      role: 'Director of Digital Strategy',
      bio: `<p>Andrés Escobar is Director of Digital Strategy at Ilumina Communications, where he leads platform development, content innovation, and audience growth for purpose-driven initiatives. A bilingual strategist with more than a decade of experience, Andrés combines data analysis, UX design, and storytelling to build impactful digital ecosystems across Latin America and the U.S.</p>
<p>Before joining Ilumina, Andrés served as Regional Vice Leader at Huawei Video LATAM, where he led cross-market content partnerships, audience activation, and platform optimization in 15 countries. He also directed digital content strategy for the United Nations Climate Conference (COP25), enhancing brand visibility and public engagement at a global scale. His experience spans editorial leadership at Chilevisión and Emol.com, SEO consulting, and analytics-driven newsroom support at Univision in Miami.</p>
<p>Andrés holds a Master of Science in Journalism from Columbia University, a Master of Science in Computer Science from Cornell University, and a degree in Journalism from Pontificia Universidad Católica de Chile. He is fluent in English and Spanish and brings a multidisciplinary lens to digital communications, innovation, and civic storytelling.</p>`
    },
    es: {
      role: 'Director de Estrategia Digital',
      bio: `<p>Andrés Escobar es Director de Estrategia Digital en Ilumina Communications, donde lidera el desarrollo de plataformas, la innovación de contenidos y el crecimiento de audiencias para iniciativas con propósito. Estratega bilingüe con más de una década de experiencia, Andrés combina análisis de datos, diseño UX y narrativa para construir ecosistemas digitales de impacto en América Latina y EE.UU.</p>
<p>Antes de unirse a Ilumina, Andrés fue Líder Regional en Huawei Video LATAM, dirigiendo alianzas de contenido, activación de audiencias y optimización de plataformas en 15 países. También dirigió la estrategia de contenido digital para la Conferencia de Cambio Climático de la ONU (COP25) y tuvo roles de liderazgo editorial en Chilevisión y Emol.com.</p>
<p>Andrés tiene una maestría en Periodismo de la Universidad de Columbia, una maestría en Ciencias de la Computación de la Universidad Cornell y una licenciatura en Periodismo de la Pontificia Universidad Católica de Chile.</p>`
    }
  }
];

// ── Language ─────────────────────────────────────────────────────────────────
let lang = localStorage.getItem('ilumina-lang') || 'en';

function t(key) {
  const parts = key.split('.');
  let val = T[lang];
  for (const p of parts) val = val?.[p];
  return val ?? '';
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });
  const toggle = document.getElementById('langToggle');
  if (toggle) toggle.textContent = t('nav.toggle');
  document.documentElement.lang = lang;
}

function setLanguage(newLang) {
  lang = newLang;
  localStorage.setItem('ilumina-lang', lang);
  applyTranslations();
  renderEdge();
  renderServices();
  if (document.getElementById('teamGrid')) renderTeam();
}

// ── Nav ───────────────────────────────────────────────────────────────────────
function initNav() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });
  nav.classList.toggle('scrolled', window.scrollY > 10);

  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  document.getElementById('langToggle')?.addEventListener('click', () => {
    setLanguage(lang === 'en' ? 'es' : 'en');
  });
}

// ── Services (Home) ───────────────────────────────────────────────────────────
function renderServices() {
  const grid = document.getElementById('servicesGrid');
  if (!grid) return;
  const cards = t('services.cards');
  if (!Array.isArray(cards)) return;
  grid.innerHTML = cards.map(c => `
    <div class="service-card">
      <h3>${c.title}</h3>
      <p>${c.desc}</p>
    </div>
  `).join('');
}

// ── Team Page ─────────────────────────────────────────────────────────────────
function renderTeam() {
  const list = document.getElementById('teamGrid');
  if (!list) return;
  list.innerHTML = TEAM.map(member => {
    const d = member[lang] || member.en;
    return `
      <article class="team-row">
        <img class="team-avatar" src="${member.photo}" alt="${member.name}" loading="lazy">
        <div class="team-content">
          <h2 class="team-name">${member.name}</h2>
          <p class="team-role">${d.role}</p>
          <div class="team-bio">${d.bio}</div>
        </div>
      </article>
    `;
  }).join('');
}

// ── Press Page ────────────────────────────────────────────────────────────────
function pressCard(article) {
  const url     = (article.Article || article['Article URL'] || '#').trim();
  const outlet  = (article.Outlet  || '').trim();
  const title   = (article.og_title || '').trim();
  const image   = (article.og_image || '').trim();

  const imgBlock = image
    ? `<img class="press-card-img" src="${image}" alt="${outlet}" loading="lazy" onerror="this.parentElement.innerHTML='<div class=\\'press-card-placeholder\\'><span>${outlet}</span></div>'">`
    : `<div class="press-card-placeholder"><span>${outlet}</span></div>`;

  const titleBlock = title
    ? `<p class="press-card-title">${title}</p>`
    : '';

  return `
    <a class="press-card" href="${url}" target="_blank" rel="noopener noreferrer">
      ${imgBlock}
      <div class="press-card-body">
        <p class="press-card-outlet">${outlet}</p>
        ${titleBlock}
      </div>
    </a>
  `;
}

async function renderPress() {
  const container = document.getElementById('pressContent');
  if (!container) return;

  container.innerHTML = `<p class="press-loading">Loading press coverage…</p>`;

  try {
    const res = await fetch('data/press.json');
    if (!res.ok) throw new Error('fetch failed');
    const data = await res.json();

    const groups = {};
    for (const item of data) {
      const client = (item.Client || 'Other').trim();
      if (!groups[client]) groups[client] = [];
      groups[client].push(item);
    }

    const clientOrder = [
      'Univision News',
      'Exile Content Studio',
      '#ZamoraLibre Campaign',
      'HYBE Latin America',
      'Carroll Street Capital / Bresh',
      'El Archivo'
    ];

    const orderedEntries = [
      ...clientOrder.filter(c => groups[c]).map(c => [c, groups[c]]),
      ...Object.entries(groups).filter(([c]) => !clientOrder.includes(c))
    ];

    container.innerHTML = `<div class="press-clients">${
      orderedEntries.map(([client, articles]) => `
        <div class="press-client">
          <h3 class="press-client-name">${client}</h3>
          <div class="press-grid">
            ${articles.map(pressCard).join('')}
          </div>
        </div>
      `).join('')
    }</div>`;
  } catch {
    container.innerHTML = `<p class="press-loading">Press coverage unavailable. Please check back soon.</p>`;
  }
}

// ── Edge List (Home) ──────────────────────────────────────────────────────────
function renderEdge() {
  const list = document.getElementById('edgeList');
  if (!list) return;
  const items = T[lang]?.about?.edge || [];
  list.innerHTML = items.map(item => `<li>${item}</li>`).join('');
}

// ── Init ──────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  applyTranslations();
  renderEdge();
  renderServices();
  if (document.getElementById('teamGrid')) renderTeam();
  if (document.getElementById('pressContent')) renderPress();
});
