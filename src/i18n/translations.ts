import { LanguageOption } from '../types';

export const languages: LanguageOption[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
];

export const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About Us',
    services: 'Services',
    blog: 'Blog',
    contact: 'Contact',
    
    // Home page
    heroTitle: 'Financial Solutions for a Better Future',
    heroSubtitle: 'Empowering communities through accessible financial services',
    getStarted: 'Get Started',
    learnMore: 'Learn More',
    
    // Services section
    servicesTitle: 'Our Services',
    servicesSubtitle: 'Financial solutions tailored to your needs',
    
    // About section
    aboutTitle: 'About Us',
    aboutSubtitle: 'Our mission and vision',
    ourMission: 'Our Mission',
    missionText: 'We are committed to providing financial services to underserved communities, fostering economic growth and financial inclusion.',
    ourVision: 'Our Vision',
    visionText: 'A world where everyone has access to fair and transparent financial services to improve their lives and communities.',
    ourValues: 'Our Values',
    
    // Blog section
    blogTitle: 'Latest News',
    blogSubtitle: 'Stay updated with our latest news and insights',
    readMore: 'Read More',
    
    // Contact section
    contactTitle: 'Get in Touch',
    contactSubtitle: 'We\'d love to hear from you',
    yourName: 'Your Name',
    yourEmail: 'Your Email',
    subject: 'Subject',
    message: 'Message',
    send: 'Send Message',
    
    // Footer
    copyright: '© 2025 MicroFinance Institution. All rights reserved.',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    
    // Chatbot
    chatbotTitle: 'How can we help you?',
    chatbotPlaceholder: 'Type your question...',
    chatbotWelcome: 'Hello! I\'m here to help. Please select an option below or type your question.',
    selectOption: 'Select an option',
    backToMenu: 'Back to menu',
    chatbotDefaultResponse: 'I\'m sorry, I don\'t have information on that specific topic. Please select one of the available options from the menu.',
  },
  
  es: {
    // Navigation
    home: 'Inicio',
    about: 'Sobre Nosotros',
    services: 'Servicios',
    blog: 'Blog',
    contact: 'Contacto',
    
    // Home page
    heroTitle: 'Soluciones Financieras para un Mejor Futuro',
    heroSubtitle: 'Empoderando comunidades a través de servicios financieros accesibles',
    getStarted: 'Comenzar',
    learnMore: 'Más Información',
    
    // Services section
    servicesTitle: 'Nuestros Servicios',
    servicesSubtitle: 'Soluciones financieras adaptadas a tus necesidades',
    
    // About section
    aboutTitle: 'Sobre Nosotros',
    aboutSubtitle: 'Nuestra misión y visión',
    ourMission: 'Nuestra Misión',
    missionText: 'Estamos comprometidos a proporcionar servicios financieros a comunidades desatendidas, fomentando el crecimiento económico y la inclusión financiera.',
    ourVision: 'Nuestra Visión',
    visionText: 'Un mundo donde todos tengan acceso a servicios financieros justos y transparentes para mejorar sus vidas y comunidades.',
    ourValues: 'Nuestros Valores',
    
    // Blog section
    blogTitle: 'Últimas Noticias',
    blogSubtitle: 'Mantente actualizado con nuestras últimas noticias y conocimientos',
    readMore: 'Leer Más',
    
    // Contact section
    contactTitle: 'Ponte en Contacto',
    contactSubtitle: 'Nos encantaría saber de ti',
    yourName: 'Tu Nombre',
    yourEmail: 'Tu Email',
    subject: 'Asunto',
    message: 'Mensaje',
    send: 'Enviar Mensaje',
    
    // Footer
    copyright: '© 2025 Institución de Microfinanzas. Todos los derechos reservados.',
    privacy: 'Política de Privacidad',
    terms: 'Términos de Servicio',
    
    // Chatbot
    chatbotTitle: '¿Cómo podemos ayudarte?',
    chatbotPlaceholder: 'Escribe tu pregunta...',
    chatbotWelcome: '¡Hola! Estoy aquí para ayudar. Por favor, selecciona una opción abajo o escribe tu pregunta.',
    selectOption: 'Selecciona una opción',
    backToMenu: 'Volver al menú',
    chatbotDefaultResponse: 'Lo siento, no tengo información sobre ese tema específico. Por favor, selecciona una de las opciones disponibles en el menú.',
  }
};