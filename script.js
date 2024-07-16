// El javascript se uso solo para traducir los lenguajes.

const translations = {
    en: {
        "nav-about": "About Me",
        "nav-projects": "Projects",
        "nav-testimonials": "Testimonials",
        "nav-contact": "Contact",
        "hero-intro": "Hello, my name is Dairan S. De Jesús Mora",
        "hero-description": "Fourth-year Computer Science student and computer tutor at Interamericana of Arecibo. Experienced in student support, web development, and full stack programming.",
        "about-title": "Meet Dairan S. De Jesús Mora",
        "about-text": "Computer Science student at the Interamerican University of Puerto Rico, Arecibo, with experience as a Student Support Technician and Computer Tutor. I hold certifications in Scrum Foundation and Software Engineering Fundamentals and completed a Full Stack Development bootcamp. Passionate about teaching and continuous learning, I am committed to growing in my field and contributing to technology and education.",
        "experience-webdev-title": "Web Development",
        "experience-webdev-text": "Experienced in web development, utilizing a wide range of technologies and frameworks. Proficient in creating responsive and dynamic websites using modern web standards and best practices.",
        "experience-backend-title": "Backend Development",
        "experience-backend-text": "Skilled in backend development, creating robust and efficient server-side applications. Proficient in using various technologies to build secure, scalable, and maintainable systems.",
        "experience-student-title": "Student",
        "experience-student-text": "Computer Science student at Interamerican University of Puerto Rico, actively expanding my skills through courses and bootcamps. My education provides a solid foundation in both theoretical and practical aspects of computer science.",
        "projects-title": "My Recent Projects",
        "projects-description": "Here are some of the projects I've created recently...",
        "project1-title": "Project 1",
        "project2-title": "Project 2",
        "project3-title": "Project 3",
        "project4-title": "Project 4",
        "project5-title": "Project 5",
        "project6-title": "Project 6",
        "view-more-projects": "View more projects",
        "certificates-title": "Certificates and Achievements",
        "testimonials-title": "Testimonials",
        "testimonials-description": "Here are some testimonials from my colleagues....",
        "testimonial1-text": "I have collaborated repeatedly with Dairan de Jesús Mora on different projects, and he always shows interest and great effort. He consistently gives his best and strives to meet all the requirements assigned to him when working on a project.",
        "testimonial2-text": "Dairan is an exceptional Java and full stack developer and a great tutor. I’ve witnessed their journey from mastering the basics of coding to successfully completing full projects. Their dedication and skill growth are truly impressive.",
        "testimonial3-text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu nisl lacus. Cras viverra ut turpis vitae lobortis. Cras hendrerit.",
        "contact-title": "Let's Talk!",
        "contact-description": "Contact me to start your web development project and I will bring your vision to life.",
        "contact-button": "Contact",
        "footer-text": "I learn and create every day. Let's join forces and bring your project to life!",
        "footer-copyright": "Created by Dairan De Jesús (2024) ©."
    },
    es: {
        "nav-about": "Sobre mí",
        "nav-projects": "Proyectos",
        "nav-testimonials": "Testimonios",
        "nav-contact": "Contacto",
        "hero-intro": "Hola, mi nombre es Dairan S. De Jesús Mora",
        "hero-description": "Estudiante de cuarto año en Ciencias de Computadoras y tutor de computadoras en la Universidad Interamericana de Puerto Rico, Recinto de Arecibo. Experiencia en soporte estudiantil, desarrollo web y programación full stack.",
        "about-title": "Conoce a Dairan S. De Jesús Mora",
        "about-text": "Estudiante de Ciencias de la Computación en la Universidad Interamericana de Puerto Rico, Arecibo, con experiencia como Técnico de Soporte Estudiantil y Tutor de Computadoras. Poseo certificaciones en Scrum Foundation y Fundamentos de Ingeniería de Software y completé un bootcamp de Desarrollo Full Stack. Apasionado por la enseñanza y el aprendizaje continuo, estoy comprometido con crecer en mi campo y contribuir a la tecnología y la educación.",
        "experience-webdev-title": "Desarrollo Web",
        "experience-webdev-text": "Con experiencia en desarrollo web, utilizando una amplia gama de tecnologías y frameworks. Competente en la creación de sitios web responsivos y dinámicos utilizando estándares web modernos y mejores prácticas.",
        "experience-backend-title": "Desarrollo Backend",
        "experience-backend-text": "Habilidad en desarrollo backend, creando aplicaciones del lado del servidor robustas y eficientes. Competente en el uso de varias tecnologías para construir sistemas seguros, escalables y mantenibles.",
        "experience-student-title": "Estudiante",
        "experience-student-text": "Estudiante de Ciencias de la Computación en la Universidad Interamericana de Puerto Rico, ampliando activamente mis habilidades a través de cursos y bootcamps. Mi educación proporciona una sólida base en aspectos teóricos y prácticos de la informática.",
        "projects-title": "Mis Proyectos Recientes",
        "projects-description": "Aquí hay algunos de los proyectos que he creado recientemente...",
        "project1-title": "Proyecto 1",
        "project2-title": "Proyecto 2",
        "project3-title": "Proyecto 3",
        "project4-title": "Proyecto 4",
        "project5-title": "Proyecto 5",
        "project6-title": "Proyecto 6",
        "view-more-projects": "Ver más proyectos",
        "certificates-title": "Certificados y Logros",
        "testimonials-title": "Testimonios",
        "testimonials-description": "Aquí hay algunos testimonios de mis colegas...",
        "testimonial1-text": "He colaborado repetidamente con Dairan de Jesús Mora en diferentes proyectos, y siempre muestra interés y gran esfuerzo. Él siempre da lo mejor de sí mismo y se esfuerza por cumplir con todos los requisitos que se le asignan cuando trabaja en un proyecto.",
        "testimonial2-text": "Dairan es un desarrollador excepcional de Java, con conocimientos en full stack y un gran tutor. He sido testigo de su viaje desde dominar los conceptos básicos de la codificación hasta completar con éxito proyectos completos. Su dedicación y crecimiento de habilidades son realmente impresionantes.",
        "testimonial3-text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu nisl lacus. Cras viverra ut turpis vitae lobortis. Cras hendrerit.",
        "contact-title": "¡Hablemos!",
        "contact-description": "Contáctame para comenzar tu proyecto de desarrollo web y haré realidad tu visión.",
        "contact-button": "Contacto",
        "footer-text": "Aprendo y creo todos los días. ¡Unámonos y hagamos realidad tu proyecto!",
        "footer-copyright": "Creado por Dairan De Jesús (2024) ©"
    }
};

const languageToggle = document.getElementById('language-toggle');
let currentLanguage = 'en';

languageToggle.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
    translatePage(currentLanguage);
    languageToggle.textContent = currentLanguage === 'en' ? 'ES' : 'EN';
});

function translatePage(language) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[language][key];
    });
}
