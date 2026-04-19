export type LangKey = 'en' | 'es';

export const T: Record<LangKey, Record<string, string>> = {
  en: {
    /* NAV */
    nav_features:   'Features',
    nav_howitworks: 'How it Works',
    nav_pricing:    'Pricing',
    nav_about:      'About',
    nav_properties: 'Properties',
    nav_cta:        'Join Waitlist',

    /* HERO */
    hero_badge: 'AI Receptionist for Real Estate Agents',
    hero_h1_l1: 'Never miss a lead',
    hero_h1_l2: 'again.',
    hero_sub:   'Nova responds to every Zillow and Realtor.com lead in under 30 seconds — qualifies them, schedules the showing, and hands you a warm prospect. While you sleep.',
    hero_cta:   'Join the Waitlist',
    hero_cta2:  'See How It Works',

    /* FEATURES */
    feat_tag:    'What Nova Does',
    feat_h2:     'Your AI receptionist, working 24/7',
    feat_sub:    'Every feature built to make sure you never lose a lead to slow response time again.',
    feat1_title: 'Responds in under 30 seconds',
    feat1_desc:  'Nova picks up every lead from Zillow, Realtor.com, your website, Facebook and Instagram — instantly. No more missed messages at 2 AM.',
    feat2_title: 'Qualifies leads automatically',
    feat2_desc:  '5 smart questions: budget, pre-approval, preferred area, property type, and timeline. You only talk to prospects who are ready to buy.',
    feat3_title: 'Books showings automatically',
    feat3_desc:  'Nova sends your Calendly link, confirms the appointment, and sends you a full lead summary via SMS — without you lifting a finger.',

    /* HOW IT WORKS */
    howitworks_tag:        'Simple Setup',
    howitworks_h2:         'Live in 20 minutes. No tech skills needed.',
    howitworks_step1_title: 'Connect your channels',
    howitworks_step1_desc:  'Link your phone number, website, and social accounts. Step-by-step guide included. No code required.',
    howitworks_step2_title: 'Tell Nova about your business',
    howitworks_step2_desc:  'Answer 8 simple questions about your market, pricing range, and preferred areas. Nova builds your custom flow automatically.',
    howitworks_step3_title: 'Preview and go live',
    howitworks_step3_desc:  'Chat with your bot before activating. Edit any response if needed, then flip the switch.',
    howitworks_step4_title: 'Get warm leads delivered',
    howitworks_step4_desc:  'Nova handles all conversations. You get an SMS alert only when a lead is qualified and ready to meet.',

    /* FEATURES FULL */
    featuresfull_tag:         'Everything Included',
    featuresfull_h2:          'One platform. Every tool you need.',
    featuresfull_feat1_title: '24/7 Lead Response',
    featuresfull_feat1_desc:  'Responds instantly to every inquiry, day or night, on every channel simultaneously.',
    featuresfull_feat2_title: '5-Question Qualification',
    featuresfull_feat2_desc:  'Filters out unserious prospects so you only spend time on buyers ready to act.',
    featuresfull_feat3_title: 'Automatic Showing Scheduler',
    featuresfull_feat3_desc:  'Sends your calendar link and confirms appointments without your involvement.',
    featuresfull_feat4_title: 'SMS Lead Summary',
    featuresfull_feat4_desc:  'After every qualified conversation, you receive a full briefing via text before calling.',
    featuresfull_feat5_title: '30-Day Nurture Sequences',
    featuresfull_feat5_desc:  'Follows up automatically at day 3, 7, and 30 with unqualified leads. Never let a prospect go cold.',
    featuresfull_feat6_title: 'CRM Integration',
    featuresfull_feat6_desc:  'Syncs every lead to Follow Up Boss and HubSpot automatically. Your pipeline stays up to date.',
    featuresfull_feat7_title: 'Weekly Performance Reports',
    featuresfull_feat7_desc:  'Leads received, qualified, appointments booked, and conversion rate — delivered every Monday.',
    featuresfull_feat8_title: 'Multi-Agent Lead Assignment',
    featuresfull_feat8_desc:  'For teams: automatically routes leads to the right agent by zone, availability, or property type.',
    featuresfull_feat9_title: 'English + Spanish Support',
    featuresfull_feat9_desc:  "Detects the lead's language and responds accordingly. Perfect for bilingual markets.",
    featuresfull_feat10_title: 'Multi-Channel Coverage',
    featuresfull_feat10_desc:  'SMS, web chat, Instagram DMs, Facebook Messenger, and email — all managed from one dashboard.',

    /* RESULTS */
    results_tag:        'Real Results',
    results_h2:         'The numbers speak for themselves.',
    results_stat1_label: 'Average lead response time',
    results_stat2_label: 'Of buyers expect instant response',
    results_stat3_label: 'Increase in lead conversion',
    results_stat4_label: 'Average commission recovered per lead',

    /* TESTIMONIALS */
    testimonials_tag:  'Early Feedback',
    testimonials_h2:   'Agents who tested the beta.',
    test1_quote: "I was skeptical at first. Then Nova booked me 3 showings in the first week — all from leads I would have missed while I was with other clients.",
    test1_name:  'Marcus R.',
    test1_role:  'Real estate agent \u00b7 Dallas, TX',
    test2_quote: "The qualification questions are spot-on. By the time I call the lead, I already know their budget, timeline, and what they're looking for. Total game changer.",
    test2_name:  'Sarah K.',
    test2_role:  "Buyer's agent \u00b7 Miami, FL",
    test3_quote: 'Setup took 18 minutes. First lead came in at 11 PM that night and Nova handled it perfectly. I woke up with a confirmed showing.',
    test3_name:  'Jorge L.',
    test3_role:  'Independent agent \u00b7 Phoenix, AZ',

    /* PRICING */
    pricing_tag:   'Pricing',
    pricing_h2:    'One closed deal pays for a year.',
    pricing_sub:   'Simple, transparent pricing. No setup fees. Cancel anytime.',
    plan1_name:    'Starter',
    plan1_price:   '$297/mo',
    plan1_sub:     'Up to 150 leads/month \u00b7 1 number',
    plan1_feat1:   'Instant SMS response',
    plan1_feat2:   '5-question qualification',
    plan1_feat3:   'Agent SMS alert',
    plan1_feat4:   'Calendly integration',
    plan1_feat5:   'Basic dashboard',
    plan1_cta:     'Get Early Access',
    plan2_badge:   'Most Popular',
    plan2_name:    'Pro Agent',
    plan2_price:   '$497/mo',
    plan2_sub:     'Unlimited leads \u00b7 1 number',
    plan2_feat1:   'Everything in Starter',
    plan2_feat2:   '3/7/30-day nurture sequences',
    plan2_feat3:   'Weekly performance report',
    plan2_feat4:   'CRM integration (Follow Up Boss, HubSpot)',
    plan2_feat5:   'A/B message testing',
    plan2_feat6:   'Priority support',
    plan2_cta:     'Get Early Access',
    plan3_name:    'Team',
    plan3_price:   '$997+/mo',
    plan3_sub:     'Up to 5 agents \u00b7 multi-number',
    plan3_feat1:   'Everything in Pro',
    plan3_feat2:   'Multi-agent dashboard',
    plan3_feat3:   'Automatic lead assignment',
    plan3_feat4:   'Per-agent reports',
    plan3_feat5:   'Dedicated onboarding',
    plan3_feat6:   'SLA guaranteed',
    plan3_cta:     'Get Early Access',

    /* PROPERTIES */
    props_tag:   'Featured',
    props_h2:    'Selected Properties',
    props_sub:   'Handpicked listings that meet our quality standard.',
    prop1_price: '$2.4M',
    prop1_name:  'Sky Penthouse',
    prop1_loc:   'Manhattan, NY',
    prop1_beds:  '4 beds',
    prop1_baths: '3 baths',
    prop1_sqft:  '3,200 sqft',
    prop2_price: '$1.8M',
    prop2_name:  'Ocean Villa',
    prop2_loc:   'Miami Beach, FL',
    prop2_beds:  '5 beds',
    prop2_baths: '4 baths',
    prop2_sqft:  '4,100 sqft',
    prop3_price: '$890K',
    prop3_name:  'Urban Loft',
    prop3_loc:   'Austin, TX',
    prop3_beds:  '2 beds',
    prop3_baths: '2 baths',
    prop3_sqft:  '1,800 sqft',

    /* STATS (legacy) */
    stats_props:  'Properties Listed',
    stats_cities: 'Cities',
    stats_users:  'Happy Clients',

    /* ABOUT */
    about_tag:         'Our Story',
    about_h2:          'We\u2019re Changing How People Find Home',
    about_p1:          'NOVA was born from a simple frustration: real estate is one of life\u2019s biggest decisions, yet the tools to navigate it haven\u2019t changed in decades.',
    about_p2:          'We\u2019re building an AI-first platform that gives every buyer, seller, and agent the intelligence they need \u2014 faster, smarter, and with less stress.',
    about_cta:         'Learn More',
    about_card1_label: 'Match Score',
    about_card2_label: 'Time Saved',
    about_card3_text:  'AI analysis complete',
    about_card3_sub:   '3 perfect matches found',

    /* WAITLIST */
    waitlist_tag:       'Early Access',
    waitlist_h2:        'Ready to stop losing leads?',
    waitlist_sub:       'Join 127 agents already on the waitlist. Early access members get 30% off for life.',
    waitlist_placeholder: 'Enter your email address',
    waitlist_btn:       'Get Early Access',
    waitlist_privacy:   'No credit card required \u00b7 Cancel anytime \u00b7 Live in 20 minutes',
    waitlist_success_h: 'You\u2019re on the list!',
    waitlist_success_p: 'We\u2019ll reach out when Nova is ready for you.',

    /* FOOTER */
    footer_tagline:    'The future of real estate.',
    footer_features:   'Features',
    footer_properties: 'Properties',
    footer_about:      'About',
    footer_contact:    'Contact',
    footer_privacy:    'Privacy Policy',
    footer_terms:      'Terms of Service',
    footer_copy:       '\u00a9 2026 NOVA Real Estate. All rights reserved.',
  },

  es: {
    /* NAV */
    nav_features:   'Caracter\u00edsticas',
    nav_howitworks: 'C\u00f3mo Funciona',
    nav_pricing:    'Precios',
    nav_about:      'Nosotros',
    nav_properties: 'Propiedades',
    nav_cta:        '\u00danete',

    /* HERO */
    hero_badge: 'Recepcionista IA para Agentes Inmobiliarios',
    hero_h1_l1: 'Nunca pierdas un lead',
    hero_h1_l2: 'otra vez.',
    hero_sub:   'Nova responde a cada lead de Zillow y Realtor.com en menos de 30 segundos \u2014 los califica, agenda el showing y te entrega un prospecto listo. Mientras duermes.',
    hero_cta:   '\u00danete a la Lista',
    hero_cta2:  'Ver C\u00f3mo Funciona',

    /* FEATURES */
    feat_tag:    'Qu\u00e9 hace Nova',
    feat_h2:     'Tu recepcionista IA, trabajando 24/7',
    feat_sub:    'Cada funci\u00f3n dise\u00f1ada para que nunca pierdas un lead por respuesta lenta.',
    feat1_title: 'Responde en menos de 30 segundos',
    feat1_desc:  'Nova captura cada lead de Zillow, Realtor.com, tu sitio web, Facebook e Instagram \u2014 al instante. Sin mensajes perdidos a las 2 AM.',
    feat2_title: 'Califica leads autom\u00e1ticamente',
    feat2_desc:  '5 preguntas inteligentes: presupuesto, pre-aprobaci\u00f3n, zona, tipo de propiedad y timeline. Solo hablas con prospectos listos para comprar.',
    feat3_title: 'Agenda showings autom\u00e1ticamente',
    feat3_desc:  'Nova env\u00eda tu Calendly, confirma la cita y te manda el resumen completo del lead por SMS \u2014 sin que toques tu tel\u00e9fono.',

    /* HOW IT WORKS */
    howitworks_tag:        'Configuraci\u00f3n Simple',
    howitworks_h2:         'Activo en 20 minutos. Sin conocimientos t\u00e9cnicos.',
    howitworks_step1_title: 'Conecta tus canales',
    howitworks_step1_desc:  'Vincula tu n\u00famero, sitio web y redes sociales. Gu\u00eda paso a paso incluida. Sin c\u00f3digo.',
    howitworks_step2_title: 'Cu\u00e9ntale a Nova sobre tu negocio',
    howitworks_step2_desc:  'Responde 8 preguntas sobre tu mercado, rango de precios y zonas preferidas. Nova crea tu flujo personalizado autom\u00e1ticamente.',
    howitworks_step3_title: 'Previsualiza y activa',
    howitworks_step3_desc:  'Chatea con tu bot antes de activarlo. Edita respuestas si es necesario y enciende el switch.',
    howitworks_step4_title: 'Recibe leads listos para cerrar',
    howitworks_step4_desc:  'Nova maneja todas las conversaciones. Recibes alerta SMS solo cuando un lead est\u00e1 calificado y listo para reunirse.',

    /* FEATURES FULL */
    featuresfull_tag:         'Todo Incluido',
    featuresfull_h2:          'Una plataforma. Todo lo que necesitas.',
    featuresfull_feat1_title: 'Respuesta 24/7',
    featuresfull_feat1_desc:  'Responde al instante a cada consulta, de d\u00eda o de noche, en todos los canales simult\u00e1neamente.',
    featuresfull_feat2_title: 'Calificaci\u00f3n de 5 preguntas',
    featuresfull_feat2_desc:  'Filtra prospectos no serios para que solo inviertas tiempo en compradores listos.',
    featuresfull_feat3_title: 'Agendado autom\u00e1tico de showings',
    featuresfull_feat3_desc:  'Env\u00eda tu link de calendario y confirma citas sin tu intervenci\u00f3n.',
    featuresfull_feat4_title: 'Resumen de lead por SMS',
    featuresfull_feat4_desc:  'Tras cada conversaci\u00f3n calificada, recibes un briefing completo por texto antes de llamar.',
    featuresfull_feat5_title: 'Secuencias de nurture 30 d\u00edas',
    featuresfull_feat5_desc:  'Hace seguimiento autom\u00e1tico a los d\u00edas 3, 7 y 30 con leads no listos. Ning\u00fan prospecto se enfr\u00eda.',
    featuresfull_feat6_title: 'Integraci\u00f3n con CRM',
    featuresfull_feat6_desc:  'Sincroniza cada lead con Follow Up Boss y HubSpot autom\u00e1ticamente. Tu pipeline siempre al d\u00eda.',
    featuresfull_feat7_title: 'Reportes semanales de rendimiento',
    featuresfull_feat7_desc:  'Leads recibidos, calificados, citas agendadas y tasa de conversi\u00f3n \u2014 entregados cada lunes.',
    featuresfull_feat8_title: 'Asignaci\u00f3n multi-agente',
    featuresfull_feat8_desc:  'Para equipos: enruta leads al agente correcto por zona, disponibilidad o tipo de propiedad.',
    featuresfull_feat9_title: 'Soporte en ingl\u00e9s y espa\u00f1ol',
    featuresfull_feat9_desc:  'Detecta el idioma del lead y responde en consecuencia. Perfecto para mercados biling\u00fces.',
    featuresfull_feat10_title: 'Cobertura multicanal',
    featuresfull_feat10_desc:  'SMS, web chat, Instagram DMs, Facebook Messenger y email \u2014 todo desde un solo dashboard.',

    /* RESULTS */
    results_tag:        'Resultados Reales',
    results_h2:         'Los n\u00fameros hablan por s\u00ed solos.',
    results_stat1_label: 'Tiempo de respuesta promedio',
    results_stat2_label: 'De compradores esperan respuesta inmediata',
    results_stat3_label: 'Aumento en conversi\u00f3n de leads',
    results_stat4_label: 'Comisi\u00f3n promedio recuperada por lead',

    /* TESTIMONIALS */
    testimonials_tag:  'Primeras Opiniones',
    testimonials_h2:   'Agentes que probaron la beta.',
    test1_quote: 'Al principio era esc\u00e9ptico. Luego Nova me agend\u00f3 3 showings en la primera semana \u2014 todos de leads que habr\u00eda perdido mientras estaba con otros clientes.',
    test1_name:  'Marcus R.',
    test1_role:  'Agente inmobiliario \u00b7 Dallas, TX',
    test2_quote: 'Las preguntas de calificaci\u00f3n son perfectas. Cuando llamo al lead, ya s\u00e9 su presupuesto, timeline y qu\u00e9 busca. Un cambio total.',
    test2_name:  'Sarah K.',
    test2_role:  'Agente compradora \u00b7 Miami, FL',
    test3_quote: 'La configuraci\u00f3n tard\u00f3 18 minutos. El primer lead lleg\u00f3 a las 11 PM esa noche y Nova lo manej\u00f3 perfecto. Me despert\u00e9 con un showing confirmado.',
    test3_name:  'Jorge L.',
    test3_role:  'Agente independiente \u00b7 Phoenix, AZ',

    /* PRICING */
    pricing_tag:   'Precios',
    pricing_h2:    'Una venta cerrada paga un a\u00f1o.',
    pricing_sub:   'Precios simples y transparentes. Sin cuota de instalaci\u00f3n. Cancela cuando quieras.',
    plan1_name:    'Starter',
    plan1_price:   '$297/mo',
    plan1_sub:     'Hasta 150 leads/mes \u00b7 1 n\u00famero',
    plan1_feat1:   'Respuesta SMS inmediata',
    plan1_feat2:   'Calificaci\u00f3n de 5 preguntas',
    plan1_feat3:   'Alerta SMS al agente',
    plan1_feat4:   'Integraci\u00f3n Calendly',
    plan1_feat5:   'Dashboard b\u00e1sico',
    plan1_cta:     'Obtener Acceso Anticipado',
    plan2_badge:   'M\u00e1s Popular',
    plan2_name:    'Pro Agent',
    plan2_price:   '$497/mo',
    plan2_sub:     'Leads ilimitados \u00b7 1 n\u00famero',
    plan2_feat1:   'Todo lo del Starter',
    plan2_feat2:   'Secuencias de nurture 3/7/30 d\u00edas',
    plan2_feat3:   'Reporte semanal',
    plan2_feat4:   'Integraci\u00f3n CRM',
    plan2_feat5:   'Pruebas A/B de mensajes',
    plan2_feat6:   'Soporte prioritario',
    plan2_cta:     'Obtener Acceso Anticipado',
    plan3_name:    'Team',
    plan3_price:   '$997+/mo',
    plan3_sub:     'Hasta 5 agentes \u00b7 multi-n\u00famero',
    plan3_feat1:   'Todo lo del Pro',
    plan3_feat2:   'Dashboard multi-agente',
    plan3_feat3:   'Asignaci\u00f3n autom\u00e1tica de leads',
    plan3_feat4:   'Reportes por agente',
    plan3_feat5:   'Onboarding dedicado',
    plan3_feat6:   'SLA garantizado',
    plan3_cta:     'Obtener Acceso Anticipado',

    /* PROPERTIES */
    props_tag:   'Destacados',
    props_h2:    'Propiedades Seleccionadas',
    props_sub:   'Listados cuidadosamente seleccionados que cumplen nuestro est\u00e1ndar de calidad.',
    prop1_price: '$2.4M',
    prop1_name:  'Penthouse Sky',
    prop1_loc:   'Manhattan, NY',
    prop1_beds:  '4 hab.',
    prop1_baths: '3 ba\u00f1os',
    prop1_sqft:  '297 m\u00b2',
    prop2_price: '$1.8M',
    prop2_name:  'Villa Oc\u00e9ano',
    prop2_loc:   'Miami Beach, FL',
    prop2_beds:  '5 hab.',
    prop2_baths: '4 ba\u00f1os',
    prop2_sqft:  '381 m\u00b2',
    prop3_price: '$890K',
    prop3_name:  'Loft Urbano',
    prop3_loc:   'Austin, TX',
    prop3_beds:  '2 hab.',
    prop3_baths: '2 ba\u00f1os',
    prop3_sqft:  '167 m\u00b2',

    /* STATS (legacy) */
    stats_props:  'Propiedades Listadas',
    stats_cities: 'Ciudades',
    stats_users:  'Clientes Felices',

    /* ABOUT */
    about_tag:         'Nuestra Historia',
    about_h2:          'Cambiamos C\u00f3mo la Gente Encuentra Hogar',
    about_p1:          'NOVA naci\u00f3 de una frustraci\u00f3n simple: comprar una propiedad es una de las decisiones m\u00e1s importantes de la vida, pero las herramientas para hacerlo no han cambiado en d\u00e9cadas.',
    about_p2:          'Estamos construyendo una plataforma con IA que da a cada comprador, vendedor y agente la inteligencia que necesita \u2014 m\u00e1s r\u00e1pido, m\u00e1s inteligente y con menos estr\u00e9s.',
    about_cta:         'M\u00e1s Informaci\u00f3n',
    about_card1_label: 'Coincidencia',
    about_card2_label: 'Tiempo Ahorrado',
    about_card3_text:  'An\u00e1lisis de IA completado',
    about_card3_sub:   '3 coincidencias perfectas',

    /* WAITLIST */
    waitlist_tag:         'Acceso Anticipado',
    waitlist_h2:          '\u00bfListo para dejar de perder leads?',
    waitlist_sub:         'Un\u00e9te a 127 agentes ya en la lista. Los miembros de acceso anticipado obtienen 30% de descuento de por vida.',
    waitlist_placeholder: 'Ingresa tu correo electr\u00f3nico',
    waitlist_btn:         'Obtener Acceso Anticipado',
    waitlist_privacy:     'Sin tarjeta de cr\u00e9dito \u00b7 Cancela cuando quieras \u00b7 Activo en 20 minutos',
    waitlist_success_h:   '\u00a1Est\u00e1s en la lista!',
    waitlist_success_p:   'Te contactaremos cuando Nova est\u00e9 listo para ti.',

    /* FOOTER */
    footer_tagline:    'El futuro de los bienes ra\u00edces.',
    footer_features:   'Caracter\u00edsticas',
    footer_properties: 'Propiedades',
    footer_about:      'Nosotros',
    footer_contact:    'Contacto',
    footer_privacy:    'Pol\u00edtica de Privacidad',
    footer_terms:      'T\u00e9rminos de Servicio',
    footer_copy:       '\u00a9 2026 NOVA Real Estate. Todos los derechos reservados.',
  },
};

let currentLang: LangKey = (localStorage.getItem('nova-lang') as LangKey) || 'en';

export function getCurrentLang(): LangKey {
  return currentLang;
}

export function applyLang(lang: LangKey) {
  currentLang = lang;
  localStorage.setItem('nova-lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n')!;
    const val = T[lang][key];
    if (val !== undefined) el.innerHTML = val;
  });

  document.querySelectorAll<HTMLInputElement>('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder')!;
    const val = T[lang][key];
    if (val !== undefined) el.placeholder = val;
  });

  document.querySelector('.lang-en')?.classList.toggle('active', lang === 'en');
  document.querySelector('.lang-es')?.classList.toggle('active', lang === 'es');
}

export function initI18n() {
  document.getElementById('lang-toggle')?.addEventListener('click', () => {
    applyLang(currentLang === 'en' ? 'es' : 'en');
  });
  applyLang(currentLang);
}
