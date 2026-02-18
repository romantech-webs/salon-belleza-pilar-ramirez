export const clinic = {
  name: "SALON BELLEZA Pilar Ramírez",
  logo: "/images/logo.png",
  tagline: "Tu belleza perfecta en Alcázar de San Juan",
  description: "SALON BELLEZA Pilar Ramírez es tu centro de estética y peluquería de confianza en Alcázar de San Juan, Ciudad Real. Especialistas en manicura, pedicura, peluquería, tratamientos faciales y masajes. Con 5 estrellas en Google y 14 reseñas, ofrecemos un trato cercano y profesional en un espacio impecable y acogedor. Pilar te asesora personalmente según tus necesidades con productos de máxima calidad.",
  colors: {
    primary: "#7c6557",
    secondary: "#251e1a",
    accent: "#b9a88c",
    neutral: "#f5f3f2"
  },
  phone: "604 91 81 87",
  whatsapp: "+34604918187",
  whatsappMessage: "Hola, me gustaría solicitar información sobre vuestros tratamientos de estética.",
  email: "",
  address: {
    street: "Vía Levante, 7, 13600 Alcázar de San Juan, Ciudad Real, España",
    city: "Alcázar de San Juan",
    province: "Ciudad Real",
    postalCode: "13600",
    country: "España"
  },
  googleMapsUrl: "https://maps.google.com/?cid=1265463177936092213&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
  googleMapsEmbed: "https://maps.google.com/maps?q=SALON%20BELLEZA%20Pilar%20Ram%C3%ADrez%20%4039.3891%2C-3.21238&z=16&output=embed",
  coordinates: {
    lat: 39.3891,
    lng: -3.21238
  },
  schedule: [
    {
      days: "lunes",
      hours: "Cerrado"
    },
    {
      days: "martes - viernes",
      hours: "10:00–20:00"
    },
    {
      days: "sábado - domingo",
      hours: "Cerrado"
    }
  ],
  social: {
    instagram: null,
    facebook: null,
    linkedin: null,
    tiktok: null
  },
  reviews: {
    rating: 5,
    count: 14,
    url: "https://maps.google.com/?cid=1265463177936092213&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
    featured: [
      {
        author: "AnniMakeUp",
        rating: 5,
        text: "Pilar es una gran profesional que se nota la pasión que tiene por su trabajo en cada servicio que realiza, además de su personalidad cariñosa y cercana que te hace sentir como en casa.\nEl local es impecable, limpio y acogedor.\nOfrece gran variedad de servicios tanto de peluquería como de estética, muy completos, además de venta de productos de calidad.\nElla te aconseja y asesora en función de tus necesidades.\nSiempre es un placer visitar su salón.\nAdemás de los buenos resultados de sus trabajos. Salgo muy satisfecha y contenta.\nSiempre repito y cada vez que puedo pruebo nuevos servicios.\n300% Recomendable👌",
        date: "Hace un año"
      },
      {
        author: "Estefania Mora Tejado",
        rating: 5,
        text: "Gran profesional, se toma su trabajo muy enserio y se ve que disfruta  con ello. Trato cercano. Me hice hace un par de años unas mechas y no estaba muy convencida de hacérmelas, y cuando vi el resultado quedé encantada. Desde entonces  es al único centro donde voy a cortarme el pelo, mechas, tinte,etc. Y así seguirá siendo porque  ya conoce que estilo me gusta, que tono me queda bien.\nSalón de belleza impecable,  limpio y muy acogedor.",
        date: "Hace un año"
      },
      {
        author: "Ana García Argüello",
        rating: 5,
        text: "Me encanta el trato y la profesionalidad de Pilar.\nBuenos productos, tanto para manicuras como en peluquería.\nEl salón es muy agradable y limpio.\nSoy de Madrid y sin duda, siempre que voy a Alcázar aprovecho para pasarme.\nGracias, Pilar, por tu buen hacer. Eres un sol.",
        date: "Hace un año"
      },
      {
        author: "Eduardo Rodriguez",
        rating: 5,
        text: "Vivo en Madrid y no dudo nunca en esperar a venir al pueblo para cortarme el pelo con Pilar. En Madrid sobran opciones, pero no he encontrado a nadie que sepa justo lo que quiero y que me trate con tanta profesionalidad.",
        date: "Hace un año"
      },
      {
        author: "Maravilla SB",
        rating: 5,
        text: "Me encantan las uñas, ya he ido varias veces y es una gran profesional y de trato genial. Tiene un nivel de detalle y precisión impresionante. La recomiendo 100%.",
        date: "Hace un año"
      }
    ]
  },
  services: [
    {
      id: "manicura-pedicura",
      name: "Manicura y Pedicura",
      description: "Cuidado completo de manos y pies con nivel de detalle y precisión impresionante. Utilizamos esmaltes de alta calidad y técnicas profesionales para un acabado perfecto y duradero. Cada servicio está diseñado para que tus uñas luzcan impecables.",
      benefits: [
        "Productos de alta calidad profesional",
        "Precisión y detalle en cada aplicación",
        "Acabados duraderos y perfectos"
      ],
      icon: "Hand"
    },
    {
      id: "peluqueria-completa",
      name: "Peluquería Completa",
      description: "Corte, tinte, mechas y todo tipo de servicios de peluquería adaptados a tu estilo personal. Pilar conoce exactamente qué tono te queda bien y qué estilo te favorece. Trabajamos con productos de calidad para garantizar resultados espectaculares y el cuidado de tu cabello.",
      benefits: [
        "Asesoramiento personalizado de estilo y color",
        "Técnicas profesionales de coloración y mechas",
        "Productos de calidad para cuidar tu cabello"
      ],
      icon: "Sparkles"
    },
    {
      id: "tratamientos-faciales",
      name: "Tratamientos Faciales",
      description: "Cuidados personalizados para cada tipo de piel con productos de alta gama. Tratamientos de hidratación profunda, antiedad y luminosidad que devuelven la vitalidad a tu rostro. Analizamos tu piel y te asesoramos sobre el tratamiento más adecuado para ti.",
      benefits: [
        "Análisis personalizado de tu tipo de piel",
        "Productos profesionales de máxima calidad",
        "Resultados visibles desde la primera sesión"
      ],
      icon: "Flower2"
    },
    {
      id: "masajes",
      name: "Masajes Relajantes",
      description: "Sesiones de masaje diseñadas para liberar tensiones y proporcionar bienestar completo. En un ambiente acogedor y relajante, te ayudamos a desconectar del estrés diario. Técnicas profesionales que cuidan de tu cuerpo y mente.",
      benefits: [
        "Alivio de tensiones musculares",
        "Ambiente tranquilo y acogedor",
        "Técnicas profesionales de relajación"
      ],
      icon: "Heart"
    },
    {
      id: "coloracion-mechas",
      name: "Coloración y Mechas",
      description: "Especialistas en técnicas de color, mechas y balayage que realzan tu belleza natural. Te asesoramos sobre los tonos que mejor te favorecen según tu piel y estilo. Resultados que superan expectativas con acabados profesionales.",
      benefits: [
        "Asesoramiento experto en tonos y técnicas",
        "Coloración que respeta la salud del cabello",
        "Resultados naturales y favorecedores"
      ],
      icon: "Zap"
    },
    {
      id: "depilacion",
      name: "Depilación",
      description: "Servicios de depilación con técnicas profesionales para una piel suave y cuidada. Trabajamos con productos de calidad que respetan tu piel y ofrecen resultados duraderos. Atención delicada y profesional en cada sesión.",
      benefits: [
        "Técnicas profesionales y delicadas",
        "Productos que cuidan tu piel",
        "Resultados suaves y duraderos"
      ],
      icon: "Sparkles"
    },
    {
      id: "corte-caballero",
      name: "Corte de Caballero",
      description: "Servicio especializado de peluquería masculina con cortes modernos y clásicos. Pilar sabe exactamente lo que quieres y lo adapta a tus rasgos para un resultado impecable. Muchos clientes vienen expresamente desde Madrid por la calidad del servicio.",
      benefits: [
        "Comprensión exacta de tu estilo",
        "Cortes adaptados a tus rasgos",
        "Profesionalidad reconocida"
      ],
      icon: "Zap"
    },
    {
      id: "venta-productos",
      name: "Venta de Productos Profesionales",
      description: "Selección de productos de belleza y cuidado capilar de alta calidad profesional. Te asesoramos sobre los productos más adecuados para mantener los resultados de tus tratamientos en casa. Solo trabajamos con marcas de confianza y eficacia probada.",
      benefits: [
        "Productos profesionales de alta gama",
        "Asesoramiento personalizado de uso",
        "Mantén los resultados en casa"
      ],
      icon: "Heart"
    }
  ],
  process: [
    {
      step: 1,
      title: "Contacta con nosotros",
      description: "Llama al 604 91 81 87 o escríbenos por WhatsApp para solicitar tu cita. Te atenderemos personalmente y encontraremos el mejor horario para ti."
    },
    {
      step: 2,
      title: "Asesoramiento personalizado",
      description: "Pilar analiza tus necesidades y te asesora sobre el servicio o tratamiento más adecuado. Te explicamos las opciones y diseñamos juntas el resultado que buscas."
    },
    {
      step: 3,
      title: "Disfruta de tu servicio",
      description: "Relájate en nuestro salón impecable y acogedor mientras realizamos tu tratamiento con productos de calidad y técnicas profesionales. Cuidamos cada detalle con precisión."
    },
    {
      step: 4,
      title: "Resultados que enamoran",
      description: "Sal del salón radiante y satisfecha con resultados visibles y duraderos. Te damos consejos para mantener tu look perfecto y te esperamos en tu próxima visita."
    }
  ],
  whyUs: [
    {
      title: "5 Estrellas en Google",
      description: "Con 14 reseñas y valoración perfecta de 5 estrellas, nuestras clientas avalan la calidad de nuestros servicios. La satisfacción de quien nos visita es nuestra mejor carta de presentación.",
      icon: "Sparkles"
    },
    {
      title: "Trato Cercano y Profesional",
      description: "Pilar te recibe con calidez y cercanía, haciendo que te sientas como en casa. Su pasión por el trabajo se refleja en cada servicio, combinando profesionalidad con un trato humano excepcional.",
      icon: "Heart"
    },
    {
      title: "Asesoramiento Personalizado",
      description: "No hacemos servicios estándar. Pilar analiza tus necesidades, conoce tu estilo y te asesora sobre qué te favorece más. Cada tratamiento está diseñado específicamente para ti y tus objetivos de belleza.",
      icon: "Eye"
    },
    {
      title: "Salón Impecable y Acogedor",
      description: "Nuestro espacio es limpio, cuidado y acogedor, creando el ambiente perfecto para relajarte mientras cuidas de tu belleza. Cada detalle está pensado para tu comodidad y bienestar.",
      icon: "Flower2"
    }
  ],
  team: [
    {
      name: "Pilar Ramírez",
      role: "Directora y Especialista en Belleza",
      image: "/images/team/placeholder.jpg",
      bio: "Profesionales apasionadas por la belleza y el cuidado personal. En SALON BELLEZA Pilar Ramírez nos dedicamos a realzar la belleza natural de cada clienta con tratamientos de calidad."
    }
  ],
  gallery: [
    {
      src: "/images/hero.webp",
      alt: "SALON BELLEZA Pilar Ramírez - Imagen 1"
    },
    {
      src: "/images/gallery/2.webp",
      alt: "SALON BELLEZA Pilar Ramírez - Imagen 2"
    },
    {
      src: "/images/gallery/3.webp",
      alt: "SALON BELLEZA Pilar Ramírez - Imagen 3"
    },
    {
      src: "/images/gallery/4.webp",
      alt: "SALON BELLEZA Pilar Ramírez - Imagen 4"
    },
    {
      src: "/images/gallery/5.webp",
      alt: "SALON BELLEZA Pilar Ramírez - Imagen 5"
    },
    {
      src: "/images/gallery/6.webp",
      alt: "SALON BELLEZA Pilar Ramírez - Imagen 6"
    },
    {
      src: "/images/gallery/7.webp",
      alt: "SALON BELLEZA Pilar Ramírez - Imagen 7"
    }
  ],
  faq: [
    {
      question: "¿Qué servicios ofrece SALON BELLEZA Pilar Ramírez?",
      answer: "Ofrecemos servicios completos de peluquería (corte, tinte, mechas, coloración), manicura y pedicura con productos de alta calidad, tratamientos faciales personalizados, masajes relajantes y depilación. También disponemos de venta de productos profesionales. Pilar te asesora personalmente según tus necesidades para conseguir los mejores resultados."
    },
    {
      question: "¿Cómo puedo solicitar una cita?",
      answer: "Puedes llamarnos directamente al 604 91 81 87 o escribirnos por WhatsApp al mismo número. Te atenderemos personalmente para encontrar el mejor horario según tu disponibilidad y el servicio que necesites. Recomendamos reservar con antelación para asegurar tu hueco preferido."
    },
    {
      question: "¿Qué productos utilizan en el salón?",
      answer: "En SALON BELLEZA Pilar Ramírez trabajamos exclusivamente con productos profesionales de alta calidad, tanto para los servicios de peluquería como para manicura y tratamientos faciales. Seleccionamos marcas de confianza que garantizan resultados excelentes y cuidan la salud de tu cabello, piel y uñas. También vendemos estos productos para que puedas mantener los resultados en casa."
    },
    {
      question: "¿Por qué las clientas repiten en vuestro salón?",
      answer: "Nuestras clientas valoran especialmente el trato cercano y profesional de Pilar, que se toma el tiempo de conocer tu estilo y asesorarte personalmente. El salón es impecable, limpio y acogedor, lo que hace que te sientas como en casa. Además, los resultados son espectaculares y duraderos. Con 5 estrellas en Google y 14 reseñas, nuestras clientas están tan satisfechas que muchas vienen expresamente desde Madrid."
    },
    {
      question: "¿Realizáis servicios de manicura con detalle profesional?",
      answer: "Sí, la manicura y pedicura son una de nuestras especialidades destacadas. Trabajamos con un nivel de detalle y precisión impresionante, utilizando esmaltes de alta calidad para acabados perfectos y duraderos. Cada servicio se realiza con dedicación y cuidado extremo para que tus uñas luzcan impecables."
    },
    {
      question: "¿Ofrecéis servicios de coloración y mechas?",
      answer: "Sí, somos especialistas en coloración, mechas y todo tipo de técnicas de color. Pilar te asesora sobre qué tono te queda mejor según tu tipo de piel y estilo personal. Utilizamos productos de calidad que cuidan tu cabello y garantizan resultados naturales y favorecedores que superan las expectativas."
    },
    {
      question: "¿Dónde está ubicado el salón?",
      answer: "SALON BELLEZA Pilar Ramírez está ubicado en Alcázar de San Juan, Ciudad Real. Nuestro salón es fácilmente accesible y cuenta con un ambiente acogedor y limpio donde te sentirás cómoda desde el primer momento. Muchas clientas aprovechan sus visitas al pueblo para venir a cuidarse con nosotros."
    },
    {
      question: "¿Atendéis también a clientes masculinos?",
      answer: "Por supuesto, ofrecemos servicios profesionales de peluquería para caballeros con cortes modernos y clásicos adaptados a cada estilo. Pilar comprende exactamente lo que buscas y adapta el corte a tus rasgos para un resultado impecable. Tenemos clientes que vienen regularmente desde Madrid por la calidad y profesionalidad del servicio."
    }
  ],
  seo: {
    titleTemplate: "%s | SALON BELLEZA Pilar Ramírez",
    defaultTitle: "SALON BELLEZA Pilar Ramírez - Alcázar de San Juan",
    defaultDescription: "Centro de estética y peluquería en Alcázar de San Juan. Manicura, pedicura, coloración, mechas y tratamientos faciales. 5★ en Google. Llama al 604 91 81 87",
    keywords: [
      "salón belleza Alcázar de San Juan",
      "manicura Alcázar de San Juan",
      "pedicura Alcázar de San Juan",
      "peluquería Alcázar de San Juan",
      "SALON BELLEZA Pilar Ramírez",
      "estética Alcázar de San Juan",
      "mechas Alcázar de San Juan",
      "tratamientos faciales Ciudad Real",
      "manicura Ciudad Real",
      "peluquería Ciudad Real",
      "salón belleza Ciudad Real",
      "Pilar Ramírez peluquera"
    ],
    ogImage: "/og-image.jpg"
  },
  legal: {
    companyName: "SALON BELLEZA Pilar Ramírez",
    cif: "",
    registeredAddress: "Vía Levante, 7, 13600 Alcázar de San Juan, Ciudad Real, España, Alcázar de San Juan, Ciudad Real"
  },
  heroHeadline: [
    "Tu Centro de",
    "Belleza",
    "en Alcázar de San Juan"
  ],
  heroDescription: "Descubre el salón de belleza donde la profesionalidad se une al trato más cercano. En SALON BELLEZA Pilar Ramírez cuidamos cada detalle de tu imagen con servicios completos de peluquería, manicura, pedicura y estética facial. Un espacio limpio y acogedor donde te sentirás como en casa.",
  specialty: "Manicura y Peluquería",
  ctaLabel: "Realza tu Belleza",
  ctaHeadline: "¿Lista para sentirte radiante?",
  ctaDescription: "Solicita tu cita en SALON BELLEZA Pilar Ramírez y descubre por qué nuestras clientas repiten una y otra vez. Te asesoramos personalmente para conseguir el look que deseas.",
  statsLabel: "Clientas",
  schemaType: "BeautySalon",
  sectionCopy: {
    servicesLabel: "Nuestros Servicios",
    servicesTitle: "Tratamientos especializados",
    servicesDescription: "Técnicas avanzadas de estética y belleza para realzar tu imagen y cuidar de ti.",
    processLabel: "Cómo Trabajamos",
    processTitle: "Tu camino hacia la belleza en 4 pasos",
    processDescription: "Un proceso simple y transparente diseñado para tu comodidad.",
    whyUsLabel: "Por Qué Elegirnos",
    whyUsTitle: "Tu belleza, nuestra pasión",
    whyUsDescription: "Combinamos experiencia, las mejores técnicas y un trato personalizado para realzar tu belleza natural.",
    reviewsLabel: "Opiniones",
    reviewsTitle: "Lo que dicen nuestras clientas",
    galleryLabel: "Instalaciones",
    galleryTitle: "Conoce nuestro centro",
    galleryDescription: "Un espacio diseñado para tu bienestar y relajación",
    faqLabel: "FAQ",
    faqTitle: "Preguntas frecuentes",
    faqDescription: "Resolvemos las dudas más comunes de nuestras clientas.",
    locationLabel: "Ubicación",
    locationTitle: "Cómo llegar",
    teamLabel: "Nuestro Equipo",
    teamTitle: "Profesionales especializadas",
    teamDescription: "Experiencia y pasión al servicio de tu belleza"
  }
}

export type Clinic = typeof clinic
