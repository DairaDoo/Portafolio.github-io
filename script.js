// El javascript se uso solo para traducir los lenguajes.

const translations = {
    en: {
        "nav-about": "About Me",
        "nav-projects": "Projects",
        "nav-testimonials": "Testimonials",
        "nav-contact": "Contact",
        "hero-intro": "Hello, my name is Dairan S. De Jesús Mora",
        "hero-description": "Full Stack Developer and Computer Science student at the Interamerican University of Puerto Rico, passionate about technology, innovation, and continuous learning. Experienced in full stack development, cloud computing, and recognized for my dedication as a Programming Tutor. Skilled in modern frameworks, cloud infrastructure, and agile methodologies. Eager to contribute and grow in dynamic environments.",
        "about-title": "Meet Dairan S. De Jesús Mora",
        "about-text": "Full Stack Developer and Computer Science student with strong experience in backend development, cloud integration, and frontend development. Skilled in designing scalable APIs and software architectures using ASP.NET Core, NestJS, and Flask, while building modern, responsive interfaces with Angular and React. Certified AWS Cloud Practitioner, with practical knowledge of SaaS, PaaS, and IaaS models, and hands-on experience deploying applications to the cloud. Passionate about delivering end-to-end solutions that connect databases, backend services, cloud infrastructure, and user interfaces—making systems not only functional and reliable, but also user-centered and impactful.",
        "experience-webdev-title": "Full Stack Development",
        "experience-webdev-text": "Proficient in full stack development using modern technologies and frameworks. Experienced in building scalable web applications, REST APIs, and collaborating in agile teams. Skilled in React, NestJs, NextJS, Tailwind, Prisma, Node.js, and PostgreSQL.",
        "experience-backend-title": "Cloud & Backend",
        "experience-backend-text": "Hands-on experience with cloud computing (AWS), SaaS, PaaS, and IaaS. Skilled in backend development, database management, and deploying secure, scalable solutions. Familiar with DevOps, Git, and cloud infrastructure configuration.",
        "experience-student-title": "Student + Programming Tutor",
        "experience-student-text": "Computer Science student at the Interamerican University of Puerto Rico and former Programming Tutor, recognized for three years of service. Actively expanding my skills through certifications, bootcamps, and hands-on projects in cloud, full stack development, and agile methodologies.",
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
        "testimonial3-text": "Dairan is a responsible, cooperative, and respectful person. He is willing to help his colleagues when necessary and ready to face any challenge that comes his way.",
        "contact-title": "Let's Talk!",
        "contact-description": "Contact me to start your web development project or to collaborate on innovative technology solutions.",
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
        "hero-description": "Full Stack Developer y Estudiante de Ciencias de Computadoras en la Universidad Interamericana de Puerto Rico, apasionado por la tecnología, la innovación y el aprendizaje continuo. Experiencia en desarrollo full stack, computación en la nube y reconocido por mi dedicación como Tutor de Programación. Habilidades en frameworks modernos, infraestructura cloud y metodologías ágiles. Listo para aportar y crecer en entornos dinámicos.",
        "about-title": "Conoce a Dairan S. De Jesús Mora",
        "about-text": "Desarrollador Full Stack y estudiante de Ciencias de Computadoras con sólida experiencia en desarrollo backend, integración en la nube y desarrollo frontend. Competente en el diseño de APIs escalables y arquitecturas de software utilizando ASP.NET Core, NestJS y Flask, además de crear interfaces modernas y responsivas con Angular y React. Certificado como AWS Cloud Practitioner, con conocimientos prácticos de los modelos SaaS, PaaS e IaaS, y experiencia en el despliegue de aplicaciones en la nube. Apasionado por entregar soluciones end-to-end que conecten bases de datos, servicios backend, infraestructura en la nube e interfaces de usuario, logrando sistemas no solo funcionales y confiables, sino también centrados en el usuario e impactantes.",
        "experience-webdev-title": "Desarrollo Full Stack",
        "experience-backend-title": "Cloud & Backend",
        "experience-backend-text": "Experiencia práctica en computación en la nube (AWS), SaaS, PaaS e IaaS. Habilidad en desarrollo backend, gestión de bases de datos y despliegue de soluciones seguras y escalables. Familiarizado con DevOps, Git y la configuración de infraestructura en la nube.",
        "experience-webdev-text": "Competente en desarrollo full stack utilizando tecnologías y frameworks modernos. Experiencia en la creación de aplicaciones web escalables, APIs REST y colaboración en equipos ágiles. Manejo de React, NestJs, NextJS, Tailwind, Prisma, Node.js y PostgreSQL.",
        "experience-student-title": "Estudiante + Tutor de Programación",
        "experience-student-text": "Estudiante de Ciencias de Computadoras en la Universidad Interamericana de Puerto Rico y ex Tutor de Programación, reconocido por tres años de servicio. Ampliando activamente mis habilidades mediante certificaciones, bootcamps y proyectos prácticos en la nube, desarrollo full stack y metodologías ágiles.",
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
        "testimonial3-text": "Dairan es una persona responsable, cooperador y respetuoso. Está dispuesto para ayudar a sus compañeros cuando es necesario y preparado para cualquier reto que oponga en su camino.",
        "contact-title": "¡Hablemos!",
        "contact-description": "Contáctame para iniciar tu proyecto web o colaborar en soluciones tecnológicas innovadoras.",
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
