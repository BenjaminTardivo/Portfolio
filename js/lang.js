// === LANGUAGE SWITCHER ===
const translations = {
  en: {
    // Hero
    'hero.title': 'Welcome, Traveler',
    'hero.subtitle': 'Explore my corner of the solar system',
    'hero.scroll': 'Begin your journey',

    // Solar System
    'solar.heading': 'The Solar System',
    'solar.sub': 'Choose a planet to explore',
    'solar.orbit': 'Orbit',

    // Navigation labels
    'nav.home': 'Home',
    'nav.about': 'About Me',
    'nav.projects': 'Projects',
    'nav.services': 'Services',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',

    // About
    'about.heading': 'The Traveler',
    'about.bio': `Hi, I'm Benjamin — a developer driven by curiosity and the desire to understand how things work.

My journey began with game development, where I built a strong foundation in programming with C#.
Since then, I've been exploring new areas of software development, from desktop applications and
database systems to automation and API integrations.

I believe every project is an opportunity to learn something new, solve an interesting problem,
and build something meaningful. I'm always eager to explore unfamiliar technologies, experiment
with ideas, and keep growing as a developer.

This portfolio is a collection of the things I've built, the challenges I've faced, and the
discoveries I've made along the way.`,
    'about.explore': '🔭 Currently Exploring',
    'about.explore.desc': 'Expanding my horizons beyond game development into .NET, desktop applications, databases, and automation.',
    'about.jam': '🎵 The Jam',
    'about.jam.desc': "A good soundtrack, a curious mind, and a new problem to solve. That's my kind of adventure.",
    'about.philosophy': '🪐 Philosophy',
    'about.philosophy.desc': 'Stay curious, embrace challenges, and treat every mistake as another opportunity to learn.',
    'about.home': '🏕️ Home Base',
    'about.home.desc': 'A Linux-powered workshop where ideas turn into code and experiments become real projects.',
    'about.edu': '🎓 – Education',
    'about.edu1.degree': 'Technical Degree in Video Game Development and Interactive Narrative',
    'about.edu2.degree': "Bachelor's Degree in Video Game Production and Digital Entertainment",
    'about.edu3.degree': 'University Technical Degree in Programming',
    'about.edu4.degree': 'Web Development Bootcamp',

    // Projects
    'projects.heading': 'Signal Clues',
    'projects.sub': 'Each project is a discovery — a signal worth following through the dark.',
    'projects.view': 'View Project',

    'projects.secchi.name': 'Secchi Servicios',
    'projects.secchi.desc': 'A custom desktop application designed to streamline client management and service billing. SecchiServicios focuses on organizing client information and generating service receipts in PDF format, with a structured and user-friendly interface.',
    'projects.secchi.desc2': 'Built with C# and .NET using Avalonia UI, the application follows the MVVM architectural pattern and uses SQLite for data persistence. The project aims to simplify administrative workflows and provide a practical solution tailored to the client\'s needs.',

    'projects.infinito.name': 'Infinito',
    'projects.infinito.desc': 'A desktop application developed to manage inventory, sales, customers, and suppliers in a centralized system. Infinito helps organize product information, track stock levels, and manage essential business operations through an intuitive graphical interface.',
    'projects.infinito.desc2': 'Developed with C# and .NET using Avalonia UI and the MVVM architectural pattern, the application uses Entity Framework Core and SQLite for data persistence. The project demonstrates the application of object-oriented programming, dependency injection, and repository-based data access in a practical business management solution.',

    'projects.python.name': 'Python Automation Script',
    'projects.python.desc': 'A Python automation script designed to streamline monthly payment reminders for recurring services. The script retrieves customer and due-date information from Google Sheets and integrates with Evolution API to send WhatsApp reminders before payment deadlines.',
    'projects.python.desc2': 'The goal is to reduce manual follow-up, improve payment tracking, and help prevent service interruptions or additional reconnection charges caused by late payments. This project combines spreadsheet data management, API integration, and workflow automation to solve a practical business problem.',

    'projects.lich.name': 'Kill The Lich',
    'projects.lich.desc': 'In a world corrupted by a powerful Lich, twisted souls roam the land while the living struggle to survive. Become a beacon of hope, face the creatures that stand in your way, and bring peace to those who can no longer find it.',
    'projects.lich.desc2': 'Kill The Lich! is a medieval fantasy metroidvania platformer developed with Unreal Engine 4 for mobile devices, combining platforming and combat in a dark fantasy setting.',

    'projects.contagies.name': 'No Te Contagies',
    'projects.contagies.desc': 'An educational game that challenges players to take on the role of a school-aged child and avoid contracting measles by making safer choices and practicing preventive behaviors.',
    'projects.contagies.desc2': 'Developed with Phaser 3 for PC and mobile platforms, the game combines interactive gameplay with health education, encouraging players to understand the importance of disease prevention through play.',

    'projects.botbox.name': 'Bot-Box',
    'projects.botbox.desc': 'Take control of Mecha-Mecha, a powerful fighting robot, and battle waves of enemies to stop a villain from conquering the world with an army of evil machines.',
    'projects.botbox.desc2': "Bot-Box is a beat 'em up game currently in development with Unity 3D for PC. It combines fast-paced combat with a robot-themed setting, bringing arcade-inspired action and larger-than-life mechanical battles to the player.",

    // Services
    'services.heading': 'What I Can Build',
    'services.sub': 'From everyday problems to custom software solutions. Let\'s build something useful.',

    'service.desktopapp.name': 'Custom Desktop Applications',
    'service.desktopapp.desc': 'Build desktop software to manage inventory, customers, sales and other business operations - designed around your needs.',
    'service.businessmanagement.name': 'Business Management Systems',
    'service.businessmanagement.desc': 'Systems designed to organize business information, manage records, and simplify tasks such as customer tracking, sales management, and receipt generation.',
    'service.automation.name': 'Task Automation',
    'service.automation.desc': 'Automation of repetitive processes, reminders, data retrieval, and notifications to reduce manual work and improve efficiency.',
    'service.gamedev.name': 'Game Development',
    'service.gamedev.desc': 'Development of video games and interactive experiences, from implementing gameplay mechanics and game systems to building prototypes and custom features tailored to each project.',

    // Skills
    'skills.heading': 'Ship Log',
    'skills.sub': 'Tools and skills gathered across many loops of learning.',
    'skills.primary': 'Primary Skills',
    'skills.primary.desc': 'Core technologies I build with confidently.',
    'skills.practical': 'Practical Experience',
    'skills.practical.desc': 'Technologies used in personal projects and hands-on development.',
    'skills.additional': 'Additional Tools & Knowledge',
    'skills.additional.desc': 'Complementary tools explored across my development environment.',

    // Skill levels
    'level.intermediate': 'Intermediate',
    'level.beginnerIntermediate': 'Beginner – Intermediate',
    'level.beginner': 'Beginner',
    'level.basicIntermediate': 'Basic – Intermediate',
    'level.basic': 'Basic',
    'level.dailyUse': 'Daily Use',
    'level.basicPractical': 'Basic Practical',

    // Contact
    'contact.heading': 'Send a Signal',
    'contact.sub': "Launch a message into the void. I'm always listening for new frequencies.",

    // Footer
    'footer.text': 'Sit by the campfire. The universe is beautiful.',
    'footer.copyright': 'Copyright © 2026 by Benjamin Tardivo | All Rights Reserved.',
  },

  es: {
    // Hero
    'hero.title': 'Bienvenido, Viajero',
    'hero.subtitle': 'Explora mi rincón del sistema solar',
    'hero.scroll': 'Comienza tu viaje',

    // Solar System
    'solar.heading': 'El Sistema Solar',
    'solar.sub': 'Elige un planeta para explorar',
    'solar.orbit': 'Órbita',

    // Navigation labels
    'nav.home': 'Inicio',
    'nav.about': 'Sobre Mí',
    'nav.projects': 'Proyectos',
    'nav.services': 'Servicios',
    'nav.skills': 'Habilidades',
    'nav.contact': 'Contacto',

    // About
    'about.heading': 'El Viajero',
    'about.bio': `Hola, soy Benjamin — un desarrollador impulsado por la curiosidad y el deseo de entender cómo funcionan las cosas.

Mi camino comenzó en el desarrollo de videojuegos, donde construí una sólida base en programación con C#.
Desde entonces, he estado explorando nuevas áreas del desarrollo de software, desde aplicaciones de escritorio
y sistemas de bases de datos hasta automatización e integraciones de API.

Creo que cada proyecto es una oportunidad para aprender algo nuevo, resolver un problema interesante
y construir algo significativo. Siempre estoy dispuesto a explorar tecnologías desconocidas, experimentar
con ideas y seguir creciendo como desarrollador.

Este portafolio es una colección de las cosas que he construido, los desafíos que he enfrentado y los
descubrimientos que he hecho en el camino.`,
    'about.explore': '🔭 Explorando Actualmente',
    'about.explore.desc': 'Ampliando mis horizontes más allá del desarrollo de videojuegos hacia .NET, aplicaciones de escritorio, bases de datos y automatización.',
    'about.jam': '🎵 La Música',
    'about.jam.desc': 'Una buena banda sonora, una mente curiosa y un nuevo problema que resolver. Esa es mi aventura.',
    'about.philosophy': '🪐 Filosofía',
    'about.philosophy.desc': 'Mantente curioso, abraza los desafíos y trata cada error como otra oportunidad para aprender.',
    'about.home': '🏕️ Base de Operaciones',
    'about.home.desc': 'Un taller impulsado por Linux donde las ideas se convierten en código y los experimentos se vuelven proyectos reales.',
    'about.edu': '🎓 – Educación',
    'about.edu1.degree': 'Tecnicatura en Desarrollo de Videojuegos y Narrativa Interactiva',
    'about.edu2.degree': 'Licenciatura en Producción de Videojuegos y Entretenimiento Digital',
    'about.edu3.degree': 'Tecnicatura Universitaria en Programación',
    'about.edu4.degree': 'Bootcamp de Desarrollo Web',

    // Projects
    'projects.heading': 'Señales y Pistas',
    'projects.sub': 'Cada proyecto es un descubrimiento — una señal que vale la pena seguir en la oscuridad.',
    'projects.view': 'Ver Proyecto',

    'projects.secchi.name': 'Secchi Servicios',
    'projects.secchi.desc': 'Una aplicación de escritorio personalizada diseñada para optimizar la gestión de clientes y la facturación de servicios. SecchiServicios se enfoca en organizar información de clientes y generar recibos de servicio en formato PDF, con una interfaz estructurada y fácil de usar.',
    'projects.secchi.desc2': 'Construida con C# y .NET usando Avalonia UI, la aplicación sigue el patrón arquitectónico MVVM y utiliza SQLite para la persistencia de datos. El proyecto busca simplificar flujos de trabajo administrativos y ofrecer una solución práctica adaptada a las necesidades del cliente.',

    'projects.infinito.name': 'Infinito',
    'projects.infinito.desc': 'Una aplicación de escritorio desarrollada para gestionar inventario, ventas, clientes y proveedores en un sistema centralizado. Infinito ayuda a organizar información de productos, controlar niveles de stock y administrar operaciones comerciales esenciales a través de una interfaz gráfica intuitiva.',
    'projects.infinito.desc2': 'Desarrollada con C# y .NET usando Avalonia UI y el patrón arquitectónico MVVM, la aplicación utiliza Entity Framework Core y SQLite para la persistencia de datos. El proyecto demuestra la aplicación de programación orientada a objetos, inyección de dependencias y acceso a datos basado en repositorios en una solución práctica de gestión empresarial.',

    'projects.python.name': 'Script de Automatización Python',
    'projects.python.desc': 'Un script de automatización en Python diseñado para agilizar los recordatorios de pagos mensuales para servicios recurrentes. El script obtiene información de clientes y fechas de vencimiento de Google Sheets e integra con Evolution API para enviar recordatorios por WhatsApp antes de las fechas límite de pago.',
    'projects.python.desc2': 'El objetivo es reducir el seguimiento manual, mejorar el control de pagos y ayudar a prevenir interrupciones del servicio o cargos adicionales de reconexión causados por pagos tardíos. Este proyecto combina gestión de datos en hojas de cálculo, integración de API y automatización de flujos de trabajo para resolver un problema empresarial práctico.',

    'projects.lich.name': 'Kill The Lich',
    'projects.lich.desc': 'En un mundo corrompido por un poderoso Lich, almas retorcidas vagan por la tierra mientras los vivos luchan por sobrevivir. Conviértete en un faro de esperanza, enfrenta a las criaturas que se interponen en tu camino y trae paz a quienes ya no pueden encontrarla.',
    'projects.lich.desc2': '¡Kill The Lich! es un plataformas metroidvania de fantasía medieval desarrollado con Unreal Engine 4 para dispositivos móviles, combinando plataformas y combate en un entorno de fantasía oscura.',

    'projects.contagies.name': 'No Te Contagies',
    'projects.contagies.desc': 'Un juego educativo que desafía a los jugadores a asumir el rol de un niño en edad escolar y evitar contraer sarampión tomando decisiones más seguras y practicando comportamientos preventivos.',
    'projects.contagies.desc2': 'Desarrollado con Phaser 3 para PC y plataformas móviles, el juego combina gameplay interactivo con educación en salud, alentando a los jugadores a comprender la importancia de la prevención de enfermedades a través del juego.',

    'projects.botbox.name': 'Bot-Box',
    'projects.botbox.desc': 'Toma el control de Mecha-Mecha, un poderoso robot de combate, y enfréntate a oleadas de enemigos para detener a un villano que quiere conquistar el mundo con un ejército de máquinas malignas.',
    'projects.botbox.desc2': 'Bot-Box es un juego beat \'em up actualmente en desarrollo con Unity 3D para PC. Combina combate a gran velocidad con un ambientado temática de robots, trayendo acción inspirada en los arcades y batallas mecánicas descomunales al jugador.',

    // Services
    'services.heading': 'Lo Que Puedo Construir',
    'services.sub': 'De problemas cotidianos a soluciones de software a medida. Construyamos algo útil.',

    'service.desktopapp.name': 'Aplicaciones de Escritorio Personalizadas',
    'service.desktopapp.desc': 'Desarrollo de software de escritorio para gestionar inventario, clientes, ventas y otras operaciones comerciales - diseñado según tus necesidades.',
    'service.businessmanagement.name': 'Sistemas de Gestión Empresarial',
    'service.businessmanagement.desc': 'Sistemas diseñados para organizar información empresarial, gestionar registros y simplificar tareas como el seguimiento de clientes, la gestión de ventas y la generación de recibos.',
    'service.automation.name': 'Automatización de Tareas',
    'service.automation.desc': 'Automatización de procesos repetitivos, recordatorios, obtención de datos y notificaciones para reducir el trabajo manual y mejorar la eficiencia.',
    'service.gamedev.name': 'Desarrollo de Videojuegos',
    'service.gamedev.desc': 'Desarrollo de videojuegos y experiencias interactivas, desde la implementación de mecánicas y sistemas de juego hasta la creación de prototipos y características personalizadas para cada proyecto.',

    // Skills
    'skills.heading': 'Bitácora de Nave',
    'skills.sub': 'Herramientas y habilidades reunidas a través de muchos ciclos de aprendizaje.',
    'skills.primary': 'Habilidades Principales',
    'skills.primary.desc': 'Tecnologías principales con las que construyo con confianza.',
    'skills.practical': 'Experiencia Práctica',
    'skills.practical.desc': 'Tecnologías utilizadas en proyectos personales y desarrollo práctico.',
    'skills.additional': 'Herramientas y Conocimientos Adicionales',
    'skills.additional.desc': 'Herramientas complementarias exploradas en mi entorno de desarrollo.',

    // Skill levels
    'level.intermediate': 'Intermedio',
    'level.beginnerIntermediate': 'Principiante – Intermedio',
    'level.beginner': 'Principiante',
    'level.basicIntermediate': 'Básico – Intermedio',
    'level.basic': 'Básico',
    'level.dailyUse': 'Uso Diario',
    'level.basicPractical': 'Básico Práctico',

    // Contact
    'contact.heading': 'Enviar una Señal',
    'contact.sub': 'Lanza un mensaje al vacío. Siempre estoy escuchando nuevas frecuencias.',

    // Footer
    'footer.text': 'Siéntate junto a la fogata. El universo es hermoso.',
    'footer.copyright': 'Copyright © 2026 por Benjamin Tardivo | Todos los Derechos Reservados.',
  }
};

function getStoredLang() {
  return localStorage.getItem('portfolio-lang') || 'en';
}

function setLang(lang) {
  localStorage.setItem('portfolio-lang', lang);
  applyLang(lang);
  updateToggle(lang);
}

function applyLang(lang) {
  const dict = translations[lang] || translations.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });
  document.documentElement.lang = lang;
}

function updateToggle(lang) {
  const btn = document.getElementById('lang-toggle');
  if (!btn) return;
  const active = btn.querySelector('.lang-active');
  const inactive = btn.querySelector('.lang-inactive');
  if (lang === 'es') {
    active.textContent = 'ES';
    inactive.textContent = 'EN';
  } else {
    active.textContent = 'EN';
    inactive.textContent = 'ES';
  }
}

function toggleLang() {
  const current = getStoredLang();
  setLang(current === 'en' ? 'es' : 'en');
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  const lang = getStoredLang();
  applyLang(lang);
  updateToggle(lang);

  const btn = document.getElementById('lang-toggle');
  if (btn) btn.addEventListener('click', toggleLang);
});