export const CONTACT_EMAIL = 'kreadigitalteam@gmail.com'

export const NAV_LINKS = [
  { label: 'Sobre Nosotros', href: '/#nosotros' },
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Precios', href: '/#precios' },
  { label: 'Contacto', href: '/contact' },
] as const

export const KREA_LETTERS = [
  { letter: 'K', word: 'Creación', description: 'Diseñamos y construimos tu identidad digital desde cero.' },
  { letter: 'R', word: 'Redes', description: 'Gestionamos tus redes sociales con estrategia y creatividad.' },
  { letter: 'E', word: 'Experiencia', description: 'Creamos experiencias digitales que conectan con tu audiencia.' },
  { letter: 'A', word: 'Alcance', description: 'Ampliamos tu visibilidad y llevamos tu marca más lejos.' },
] as const

export const SERVICES = [
  {
    title: 'Mantenimiento Web Seguro',
    description:
      'Tu página web siempre actualizada, optimizada y protegida. Nos encargamos del mantenimiento técnico para que tú te centres en tu negocio.',
    icon: 'web' as const,
  },
  {
    title: 'Gestión de Redes Sociales',
    description:
      'Contenido profesional, calendario editorial y engagement constante. Construimos tu comunidad digital con estrategia y creatividad.',
    icon: 'social' as const,
  },
  {
    title: 'Creación de Eventos Impactantes',
    description:
      'Organizamos, promocionamos y cubrimos tus eventos. Desde la planificación hasta la difusión, hacemos que cada evento deje huella.',
    icon: 'events' as const,
  },
] as const

export const WHY_CHOOSE_US = [
  { label: 'Imagen profesional', icon: 'star' as const },
  { label: 'Más alcance y visibilidad', icon: 'users' as const },
  { label: 'Ahorro de tiempo', icon: 'clock' as const },
  { label: 'Estrategias personalizadas', icon: 'target' as const },
  { label: 'Crecimiento de marca', icon: 'chart' as const },
] as const

export const PACK_INCLUDES = [
  {
    title: 'Página Web',
    items: [
      'Creación y mantenimiento de la web',
      'Actualización de contenidos',
      'Optimización SEO básica',
    ],
    icon: 'web' as const,
  },
  {
    title: 'Redes Sociales',
    items: [
      'Gestión profesional de redes',
      'Diseño de publicaciones',
      'Calendario de contenidos mensual',
      'Atención básica a mensajes',
    ],
    icon: 'social' as const,
  },
  {
    title: 'Eventos',
    items: [
      'Organización y planificación',
      'Promoción en redes sociales',
      'Diseño de cartelería digital',
      'Cobertura y difusión del evento',
    ],
    icon: 'events' as const,
  },
] as const

export const PRICING_TIERS = [
  {
    id: 'basico',
    name: 'Básico',
    slogan: 'Impulsa tu negocio cada día',
    price: 350,
    featured: false,
    services: [
      {
        title: 'Redes Sociales',
        items: ['Gestión de 1 red social', '8 publicaciones al mes', '10 historias al mes'],
      },
      {
        title: 'Eventos',
        items: ['Promoción en redes sociales', 'Diseño de cartel digital', 'Cobertura básica del evento'],
      },
    ],
    benefits: ['Más visibilidad', 'Imagen profesional', 'Ahorro de tiempo', 'Crecimiento de marca'],
    promotion: '2 meses gratuitos para nuevos clientes',
    footerSlogan: 'Tu crecimiento empieza aquí',
  },
  {
    id: 'digital',
    name: 'Digital & Eventos',
    slogan: 'Estrategia digital y eventos conectados',
    price: 650,
    featured: true,
    services: [
      {
        title: 'Página Web',
        items: ['Mantenimiento de la web', 'Actualización de contenidos'],
      },
      {
        title: 'Redes Sociales',
        items: ['Gestión de 2 redes sociales', '16 publicaciones al mes', '20 historias al mes'],
      },
      {
        title: 'Eventos',
        items: ['Promoción en redes sociales', 'Diseño de cartel digital'],
      },
    ],
    benefits: ['Web activa', 'Redes sociales constantes', 'Eventos visibles', 'Marketing integrado'],
    footerSlogan: 'Todo lo que necesitas para destacar',
  },
  {
    id: 'premium',
    name: 'Premium',
    slogan: 'Alcanza el máximo potencial digital',
    price: 1200,
    featured: false,
    isPremium: true,
    services: [
      {
        title: 'Página Web',
        items: ['Creación página web', 'Gestión web completa', 'Optimización SEO avanzada'],
      },
      {
        title: 'Redes Sociales',
        items: ['Gestión de redes sociales (TikTok, IG, FK)', '20 publicaciones al mes', 'Historias ilimitadas', 'Atención a mensajes', 'Calendario de contenidos mensual'],
      },
      {
        title: 'Eventos',
        items: ['Promoción en redes sociales', 'Diseño de cartel digital', 'Monitoreo de redes sociales y KPI'],
      },
    ],
    benefits: ['Presencia premium', 'Estrategia avanzada', 'Resultados medibles', 'Soporte integral'],
    footerSlogan: 'Todo listo para crecer sin límites',
  },
] as const
