export const personalInfo = {
  name: "Adriana Martinez Fuentes",
  email: "mar24086@uvg.edu.gt",
  personalEmail: "adriana.mafu@gmail.com",
  career: "Ingeniería en Ciencias de la Computación y Tecnologías de Información",
  university: "Universidad del Valle de Guatemala",
  github: "https://github.com/itsadrimartinezzz",
  linkedin: null,
  
  description: "Apasionada por la tecnología con un fuerte interés en ciberseguridad. Me motiva crear soluciones innovadoras y seguras que marquen la diferencia en el mundo digital.",
  
  technologies: [
    "C#",
    "JavaScript",
    "Java",
    "C++",
    "Python",
    "PostgreSQL",
    "React",
    "Next.js",
    "Docker",
    "Flask"
  ],
  
  about: {
    learning: "Durante el curso de Sistemas y Tecnologías Web he profundizado en el desarrollo con React, Next.js y en el proceso completo de deployment de aplicaciones web. He aprendido a construir interfaces modernas, trabajar con componentes reutilizables y desplegar proyectos en producción.",
    
    interests: [
      "Ciberseguridad",
      "Project Management",
      "Desarrollo Full Stack"
    ],
    
    favoriteTechnologies: [
      "Python",
      "PostgreSQL"
    ],
    
    areasToLearn: [
      "Bases de datos avanzadas",
      "Arquitectura de sistemas seguros",
      "Análisis de vulnerabilidades",
      "Gestión de proyectos tecnológicos"
    ],
    
    experience: "Realicé prácticas profesionales por parte de mi colegio en GRS en el área de IT  "
  }
};

export const projects = [
  {
    id: 1,
    name: "LAB 3 - Api Testing con Postman y HTTPie",
    description: "Documentación completa y referencia de comandos para trabajar con la API pública del Art Institute of Chicago. Laboratorio de testing de APIs usando Postman y HTTPie.",
    technologies: ["Postman", "HTTPie", "REST API", "Documentation"],
    repository: "https://github.com/itsadrimartinezzz/LAB-3-APIs",
    liveUrl: null,
    image: "/images/img1.jpg",
    highlights: [
      "Testing de endpoints públicos",
      "Manejo de errores HTTP (400, 403, 404)",
      "Uso de variables de entorno",
      "Documentación técnica completa"
    ]
  },
  {
    id: 2,
    name: "LAB 5 - Mini Blog",
    description: "Aplicación web simple construida con HTML, CSS y JavaScript para practicar fundamentos de JavaScript, manipulación del DOM, manejo de eventos y comportamiento interactivo.",
    technologies: ["HTML", "CSS", "JavaScript", "DOM Manipulation"],
    repository: "https://github.com/itsadrimartinezzz/Lab-5-JS",
    liveUrl: "https://itsadrimartinezzz.github.io/Lab-5-JS/",
    image: "/images/img2.jpg",
    highlights: [
      "Manipulación del DOM",
      "Event handling",
      "Deployed en GitHub Pages"
    ]
  },
  {
    id: 3,
    name: "LAB 4 - Disci-App",
    description: "Aplicación de gamificación para reforzar hábitos usando un sistema de misiones y recompensas (XP). Los usuarios crean misiones (hábitos), las completan y acumulan XP global para subir de categoría.",
    technologies: ["HTML", "CSS", "JavaScript", "nginx"],
    repository: "https://github.com/itsadrimartinezzz/Lab-4-Intro-a-Javascript",
    liveUrl: null,
    image: "/images/img3.jpg",
    highlights: [
      "Sistema de puntos XP por dificultad",
      "3 categorías de usuario",
      "Estado de misiones completadas",
      "Deployed en nginx"
    ]
  }
];
