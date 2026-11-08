export interface ServiceItem {
  name: string;
  description: string;
  duration: string;
  price: string;
  popular?: boolean;
}

export interface ServiceCategory {
  id: string;
  label: string;
  subtitle: string;
  items: ServiceItem[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Coloración' | 'Cortes' | 'Peinados' | 'Tratamientos';
  description: string;
  image: string;
  badge?: string;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  technique: string;
  duration: string;
  beforeImage: string;
  afterImage: string;
}

export const siteData = {
  brand: {
    name: 'Pameluquería',
    tagline: 'Estudio de Estilismo & Coloración de Autor',
    owner: 'Pamela',
    whatsappNumber: '56996805553', // Reemplazar con el número real con código de país (sin + ni espacios)
    whatsappDisplay: '+56 9 9680-5553',
    instagram: '@pameluqueria',
    instagramUrl: 'https://www.instagram.com/pameluqueria/',
    address: 'rio simpson 4764, puente alto, chile',
    city: 'Santiago de Chile, Chile',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.1379025749857!2d-70.5559693!3d-33.549793199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d1374d8accb9%3A0xdc8ef7aeed8b0c24!2sR%C3%ADo%20Simpson%204764%2C%208170096%20Puente%20Alto%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1sen!2scl!4v1794100117815!5m2!1sen!2scl',
  },

  schedule: [
    { days: 'Martes a Viernes', hours: '09:30 – 19:30 hs' },
    { days: 'Sábados', hours: '09:00 – 18:00 hs' },
    { days: 'Domingos y Lunes', hours: 'Cerrado (Descanso)' },
  ],

  hero: {
    badge: 'Turnos personalizados · Atención exclusiva',
    title: 'El arte de resaltar tu belleza natural',
    subtitle:
      'En Pameluquería combinamos técnicas avanzadas de coloración, cortes de diseño y rituales capilares en un espacio cálido pensado para que disfrutes tu momento.',
    primaryCta: 'Reservar turno por WhatsApp',
    secondaryCta: 'Ver servicios y precios',
    image:
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85',
    stats: [
      { value: '+8 años', label: 'De experiencia profesional' },
      { value: '+1.200', label: 'Clientas felices' },
      { value: '100%', label: 'Productos línea premium' },
    ],
  },

  serviceCategories: [
    {
      id: 'color',
      label: 'Coloración & Mechas',
      subtitle: 'Diagnóstico previo incluido para cuidar la salud de tu fibra capilar',
      items: [
        {
          name: 'Balayage de Autor / Babylights',
          description: 'Diseño de iluminación a mano alzada con matizado personalizado y cierre técnico protector.',
          duration: '3.5 a 4.5 hs',
          price: '$65.000',
          popular: true,
        },
        {
          name: 'Color Global Raíz a Puntas',
          description: 'Cobertura perfecta de canas o cambio de tono con coloración sin amoníaco de alto brillo.',
          duration: '1.5 a 2 hs',
          price: '$38.000',
        },
        {
          name: 'Retoque de Crecimiento + Brillo (Gloss)',
          description: 'Mantenimiento de raíz acompañado de baño de luz en largos para revivir el tono.',
          duration: '1.5 hs',
          price: '$32.000',
        },
        {
          name: 'Contouring & Iluminación Frontal',
          description: 'Mechas estratégicas alrededor del rostro para iluminar las facciones con efecto natural.',
          duration: '2 hs',
          price: '$42.000',
        },
      ],
    },
    {
      id: 'corte',
      label: 'Cortes & Styling',
      subtitle: 'Cortes adaptados a tus facciones, textura y rutina diaria',
      items: [
        {
          name: 'Corte de Diseño + Lavado Spa & Brushing',
          description: 'Asesoramiento visagista, lavado con masaje capilar relajante, corte personalizado y modelado.',
          duration: '1 hr',
          price: '$22.000',
          popular: true,
        },
        {
          name: 'Brushing & Ondas al Agua / Quebradas',
          description: 'Lavado nutritivo y peinado con acabado pulido o movimiento natural de larga duración.',
          duration: '45 min',
          price: '$16.000',
        },
        {
          name: 'Corte de Flequillo / Limpieza de Puntas',
          description: 'Mantenimiento sutil para conservar la forma y vitalidad de tu melena entre cortes.',
          duration: '30 min',
          price: '$12.000',
        },
      ],
    },
    {
      id: 'tratamientos',
      label: 'Tratamientos Capilares',
      subtitle: 'Recuperación profunda, nutrición orgánica y control de frizz',
      items: [
        {
          name: 'Ritual Reconstrucción Plex & Seda',
          description: 'Restaura los puentes internos del cabello dañado por decoloración o calor extremo.',
          duration: '1 hr',
          price: '$28.000',
          popular: true,
        },
        {
          name: 'Alisado Orgánico Libre de Formol',
          description: 'Reducción total del frizz, sellado de cutícula y brillo espejo cuidando tu salud.',
          duration: '2.5 hs',
          price: '$52.000',
        },
        {
          name: 'Nutrición Botánica + Ampolla Hidro-Lipídica',
          description: 'Shock de hidratación profunda con vapor de ozono y masaje craneal descontracturante.',
          duration: '50 min',
          price: '$21.000',
        },
      ],
    },
    {
      id: 'peinados',
      label: 'Eventos & Novias',
      subtitle: 'Estilismo especial para noches inolvidables',
      items: [
        {
          name: 'Peinado Social / Recogido de Gala',
          description: 'Diseño de recogido, semirrecogido o trenzado boho con preparación previa y fijación flexible.',
          duration: '1.5 hs',
          price: '$29.000',
        },
        {
          name: 'Pack Novia / Madrina (con Prueba Previa)',
          description: 'Incluye sesión de prueba en el estudio, asesoramiento de tocado y peinado el día del evento.',
          duration: 'A coordinar',
          price: '$75.000',
          popular: true,
        },
      ],
    },
  ] as ServiceCategory[],

  about: {
    subtitle: 'Sobre Pamela & nuestra filosofía',
    title: 'Más que una peluquería, un refugio dedicado a tu pelo',
    paragraphs: [
      '¡Hola! Soy Pamela, fundadora y estilista principal de Pameluquería. Creé este espacio con una idea clara: alejarnos de las peluquerías apuradas e impersonales para volver al cuidado artesanal, donde cada turno tiene el tiempo que realmente merece.',
      'Antes de tocar una tijera o preparar un color, conversamos sobre tu estilo de vida, el historial de tu cabello y lo que te hace sentir cómoda frente al espejo. Mi prioridad es lograr el tono y el corte que soñás manteniendo siempre la salud e integridad de tu pelo.',
    ],
    highlights: [
      {
        title: 'Diagnóstico Honesto',
        description: 'Evaluamos la elasticidad y porosidad de tu cabello antes de cada servicio técnico.',
      },
      {
        title: 'Atención 1 a 1',
        description: 'Sin esperas eternas. Tu turno está reservado exclusivamente para dedicarte toda la atención.',
      },
      {
        title: 'Fórmulas Conscientes',
        description: 'Trabajamos con líneas profesionales hipoalergénicas, veganas y protectores de enlaces.',
      },
    ],
    imageMain:
      'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=900&q=85',
    imageSecondary:
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=85',
  },

  beforeAfter: [
    {
      id: 'ba-1',
      title: 'Rubio Vainilla & Corrección de Tono',
      technique: 'Balayage + Matiz Perla + Tratamiento Plex',
      duration: '4 horas de trabajo artesanal',
      beforeImage:
        'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80',
      afterImage:
        'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'ba-2',
      title: 'Morena Iluminada Caramelo',
      technique: 'Babylights cálidas + Corte en capas largas',
      duration: '3.5 horas de trabajo',
      beforeImage:
        'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80',
      afterImage:
        'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=800&q=80',
    },
  ] as BeforeAfterItem[],

  gallery: [
    {
      id: 'gal-1',
      title: 'Balayage Rubio Miel',
      category: 'Coloración',
      description: 'Transición suave desde raíz natural para un crecimiento sin marcas.',
      image:
        'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=85',
      badge: 'Más pedido',
    },
    {
      id: 'gal-2',
      title: 'Corte Bob Francés con Movimiento',
      category: 'Cortes',
      description: 'Textura ligera y puntas desfiladas que estilizan el cuello.',
      image:
        'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=85',
    },
    {
      id: 'gal-3',
      title: 'Ondas Glamour & Brillo Espejo',
      category: 'Peinados',
      description: 'Acabado sedoso post nutrición botánica intensiva.',
      image:
        'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=85',
    },
    {
      id: 'gal-4',
      title: 'Cobrizo Dorado Luminoso',
      category: 'Coloración',
      description: 'Tono vibrante personalizado con gloss sellador de cutícula.',
      image:
        'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=800&q=85',
      badge: 'Tendencia',
    },
    {
      id: 'gal-5',
      title: 'Ritual de Hidratación Profunda',
      category: 'Tratamientos',
      description: 'Recuperación de fibra capilar con aceites esenciales orgánicos.',
      image:
        'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=85',
    },
    {
      id: 'gal-6',
      title: 'Semirrecogido Bohemio para Evento',
      category: 'Peinados',
      description: 'Textura romántica con ondas suaves y fijación natural.',
      image:
        'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=85',
    },
  ] as GalleryItem[],
};

export function getWhatsAppLink(customMessage?: string): string {
  const defaultMsg =
    '¡Hola Pame! Quisiera consultar disponibilidad para reservar un turno en Pameluquería.';
  const text = encodeURIComponent(customMessage || defaultMsg);
  return `https://wa.me/${siteData.brand.whatsappNumber}?text=${text}`;
}
