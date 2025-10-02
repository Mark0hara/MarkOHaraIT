export const translations = {
  en: {
    nav: {
      home: "Home",
      experience: "Experience",
      skills: "Skills",
      certifications: "Certifications",
      portfolios: "Portfolios",
      contact: "Contact",
    },
    hero: {
      title: "MARCO ANTONIO JARA CUEVAS",
      subtitle: "Telecommunications and Network Engineer",
      location: "Santiago - Chile",
      description: "Telecommunications and Network Engineer with experience in IT support, cloud platform administration, and cybersecurity projects. I have managed solutions on AWS and Microsoft, optimizing resources and strengthening IT security.",
      downloadCV: "Download CV",
      contactMe: "Contact Me",
    },
    experience: {
      title: "Professional Experience",
      jobs: [
        {
          company: "National Institute of Statistics",
          position: "IT Support Manager",
          location: "Santiago, Paseo Bulnes",
          period: "January 2024 – July 2024",
          achievements: [
            "I led the implementation of mobile devices for the National Census.",
            "Provided technical support for notebooks, routers, and mobile devices.",
            "I coordinated the delivery of equipment and technical documentation, reducing incident resolution times by 30%, resulting in significant savings in operational resources."
          ]
        },
        {
          company: "SC Informática",
          position: "Project Management Engineer and IT Administrator",
          location: "Santiago, Macul",
          period: "May 2023 – December 2023",
          achievements: [
            "I implemented cybersecurity solutions with Kaspersky resulting in the detection and containment of 100% of threats.",
            "I automated capacity and performance reports in AWS CloudWatch, improving visibility into resource usage and preventing cloud overutilization costs by 20%.",
            "I optimized the management of Office 365 licenses and accounts, improving operational continuity and reducing access incidents."
          ]
        }
      ]
    },
    education: {
      title: "Education",
      degree: "Telecommunications, Connectivity and Network Engineering",
      university: "INACAP TECHNOLOGICAL UNIVERSITY",
      location: "Santiago, Center",
      period: "2018 – 2023"
    },
    skills: {
      title: "Technical Stack",
      subtitle: "Explore my technical and soft skills • Move the mouse or touch to interact",
      cloud: [
        { name: 'AWS', description: 'EC2, S3, Lambda, CloudWatch, IAM' },
        { name: 'Linux', description: 'Ubuntu, CentOS, Bash scripting, systemd' },
        { name: 'Networking', description: 'TCP/IP, VLANs, VPN, DNS, DHCP' },
        { name: 'Zabbix', description: 'Infrastructure monitoring, alerts, dashboards' },
        { name: 'Microsoft 365', description: 'Exchange, Teams, SharePoint, Azure AD' },
        { name: 'Windows Server', description: 'Active Directory, GPO, IIS, DNS' },
      ],
      development: [
        { name: 'Cybersecurity', description: 'Firewalls, IDS/IPS, Vulnerability Analysis' },
        { name: 'Virtualization', description: 'VMware, Hyper-V, Docker, Kubernetes' },
        { name: 'Python', description: 'Automation, scripting, APIs, data processing' },
        { name: 'PowerShell', description: 'Windows automation, AD management' },
        { name: 'ITIL', description: 'IT service management, incident management' },
      ],
      softSkills: [
        { name: 'Leadership', description: 'Team management, decision making' },
        { name: 'Teamwork', description: 'Effective collaboration, communication' },
        { name: 'Analytical Thinking', description: 'Problem solving, critical analysis' },
        { name: 'Advanced English', description: 'Technical oral and written communication' }
      ],
      categories: {
        cloud: {
          title: "☁️ Cloud & Infrastructure",
          description: "AWS, Linux, Networking, Zabbix, Microsoft 365, Windows Server"
        },
        development: {
          title: "⚙️ Development & Automation",
          description: "Python, PowerShell, Docker, Virtualization, ITIL"
        },
        soft: {
          title: "🤝 Soft Skills",
          description: "Leadership, Teamwork, Analytical Thinking, English"
        }
      },
      technical: {
        title: "Technical Skills",
        cloud: {
          title: "Cloud Platforms",
          items: ["AWS", "Microsoft Azure", "Google Cloud Platform"]
        },
        security: {
          title: "Cybersecurity",
          items: ["Kaspersky", "Vulnerability Analysis", "Security Policies", "Incident Response"]
        },
        networking: {
          title: "Networks",
          items: ["Automation", "VPN", "Firewalls", "Network Monitoring", "LAN/WAN"]
        },
        database: {
          title: "Databases",
          items: ["MySQL", "SQL Server"]
        },
        support: {
          title: "Technical Support",
          items: ["Remote Support", "Windows Server", "Jira", "ServiceNow", "Hardware/Software", "Linux"]
        },
        programming: {
          title: "Programming",
          items: ["Python", "MySQL"]
        }
      },
      soft: {
        title: "Soft Skills",
        items: ["Problem solving under pressure", "Critical and analytical thinking", "Effective communication", "Time and priority management", "Teamwork and collaboration", "Adaptability to change", "Attention to detail", "Project leadership", "Customer/internal user orientation", "Proactivity and continuous learning"]
      }
    },
    certifications: {
      title: "Certifications",
      items: [
        "AWS Certified Cloud Practitioner",
        "Advanced English C1 (EFE SET)",
        "Cybersecurity Bootcamp (Digital Talent)",
        "Programming Logic with JavaScript at Alura Latam",
        "AWS Academy Graduate - AWS Academy Cloud Architect"
      ]
    },
    languages: {
      title: "Languages",
      items: {
        spanish: "Spanish: Native",
        english: "English: Advanced"
      }
    },
    contact: {
      title: "Let's Connect",
      subtitle: "I'm always open to discussing new opportunities and collaborations",
      form: {
        name: "Your Name",
        email: "Your Email",
        subject: "Subject",
        message: "Message",
        send: "Send Message",
        sending: "Sending...",
        success: "Message sent successfully!",
        error: "Error sending message. Please try again."
      }
    },
    portfolios: {
      title: "My Projects",
      subtitle: "A collection of projects that showcase my skills and experience in telecommunications, network engineering, and cybersecurity.",
      cta: {
        title: "Let's Build Something Together",
        subtitle: "I'm always open to collaborating on interesting projects and exploring new opportunities.",
        button: "Get In Touch"
      },
      projects: [
        {
          title: "Network Infrastructure Monitoring",
          description: "A comprehensive monitoring solution for network infrastructure using Python and cloud platforms.",
          technologies: ["Python", "AWS CloudWatch", "Network Monitoring"],
          githubUrl: "https://github.com/Mark0hara/Network-Infrastructure-Monitoring",
          status: "Completed"
        },
        {
          title: "Cybersecurity Threat Detection",
          description: "Automated threat detection system implementing security best practices.",
          technologies: ["Kaspersky", "Security Automation", "Threat Analysis"],
          githubUrl: "https://github.com/marco-jara",
          status: "Completed"
        },
        {
          title: "Cloud Resource Optimization",
          description: "AWS resource optimization and cost management automation tools.",
          technologies: ["AWS", "IAM", "Cost Optimization"],
          githubUrl: "https://github.com/marco-jara",
          status: "Completed"
        }
      ]
    }
  },
  es: {
    nav: {
      home: "Inicio",
      experience: "Experiencia",
      skills: "Habilidades",
      certifications: "Certificaciones",
      portfolios: "Portafolios",
      contact: "Contacto",
    },
    hero: {
      title: "MARCO ANTONIO JARA CUEVAS",
      subtitle: "Ingeniero en Telecomunicaciones y Redes",
      location: "El Monte – Talagante",
      description: "Ingeniero en Telecomunicaciones y Redes con experiencia en soporte TI, administración de plataformas cloud y proyectos de ciberseguridad. He gestionado soluciones en AWS y Microsoft, optimizando recursos y fortaleciendo la seguridad informática.",
      downloadCV: "Descargar CV",
      contactMe: "Contáctame",
    },
    experience: {
      title: "Experiencia Profesional",
      jobs: [
        {
          company: "Instituto Nacional de Estadísticas",
          position: "Gestor Soporte TI",
          location: "Santiago, Paseo Bulnes",
          period: "Enero 2024 – Julio 2024",
          achievements: [
            "Lideré la implementación de dispositivos móviles para el Censo Nacional.",
            "Brindé soporte técnico para notebooks, routers y equipos móviles.",
            "Coordiné la entrega de equipos y documentación técnica, reduciendo los tiempos de resolución de incidencias en un 30%, lo que resultó en un ahorro significativo de recursos operativos"
          ]
        },
        {
          company: "SC Informática",
          position: "Ingeniero en Gestión de Proyectos y Administrador TI",
          location: "Santiago, Macul",
          period: "Mayo 2023 – Diciembre 2023",
          achievements: [
            "Implementé soluciones de ciberseguridad con Kaspersky resultando en la detección y contención del 100% de las amenazas",
            "Automaticé reportes de capacidad y desempeño en AWS CloudWatch, mejorando la visibilidad del uso de recursos y previniendo costos por sobreuso en la nube en un 20%.",
            "Optimicé la administración de licencias y cuentas de Office 365, mejorando la continuidad operativa y reduciendo incidencias de acceso."
          ]
        }
      ]
    },
    education: {
      title: "Educación",
      degree: "Ingeniería en Telecomunicaciones, Conectividad y Redes",
      university: "UNIVERSIDAD TECNOLÓGICA INACAP",
      location: "Santiago, Centro",
      period: "2018 – 2023"
    },
    skills: {
      title: "Stack Tecnológico",
      subtitle: "Explora mis competencias técnicas y blandas • Mueve el mouse o toca para interactuar",
      cloud: [
        { name: 'AWS', description: 'EC2, S3, Lambda, CloudWatch, IAM' },
        { name: 'Linux', description: 'Ubuntu, CentOS, Bash scripting, systemd' },
        { name: 'Networking', description: 'TCP/IP, VLANs, VPN, DNS, DHCP' },
        { name: 'Zabbix', description: 'Monitoreo de infraestructura, alertas, dashboards' },
        { name: 'Microsoft 365', description: 'Exchange, Teams, SharePoint, Azure AD' },
        { name: 'Windows Server', description: 'Active Directory, GPO, IIS, DNS' },
      ],
      development: [
        { name: 'Ciberseguridad', description: 'Firewalls, IDS/IPS, Análisis de vulnerabilidades' },
        { name: 'Virtualización', description: 'VMware, Hyper-V, Docker, Kubernetes' },
        { name: 'Python', description: 'Automatización, scripting, APIs, data processing' },
        { name: 'PowerShell', description: 'Automatización Windows, AD management' },
        { name: 'ITIL', description: 'Gestión de servicios TI, incident management' },
      ],
      softSkills: [
        { name: 'Liderazgo', description: 'Gestión de equipos, toma de decisiones' },
        { name: 'Trabajo en equipo', description: 'Colaboración efectiva, comunicación' },
        { name: 'Pensamiento analítico', description: 'Resolución de problemas, análisis crítico' },
        { name: 'Inglés Avanzado', description: 'Comunicación técnica oral y escrita' }
      ],
      categories: {
        cloud: {
          title: "☁️ Cloud & Infraestructura",
          description: "AWS, Linux, Networking, Zabbix, Microsoft 365, Windows Server"
        },
        development: {
          title: "⚙️ Desarrollo & Automatización",
          description: "Python, PowerShell, Docker, Virtualización, ITIL"
        },
        soft: {
          title: "🤝 Habilidades Blandas",
          description: "Liderazgo, Trabajo en equipo, Pensamiento analítico, Inglés"
        }
      },
      technical: {
        title: "Habilidades Técnicas",
        cloud: {
          title: "Plataformas Cloud",
          items: ["AWS", "Microsoft Azure", "Google Cloud Platform"]
        },
        security: {
          title: "Ciberseguridad",
          items: ["Kaspersky", "Análisis Vulnerabilidades", "Políticas Seguridad", "Respuesta Incidentes"]
        },
        networking: {
          title: "Redes",
          items: ["Automatización", "VPN", "Firewalls", "Monitoreo de Redes", "LAN/WAN"]
        },
        database: {
          title: "Bases de Datos",
          items: ["MySQL", "SQL Server"]
        },
        support: {
          title: "Soporte Técnico",
          items: ["Soporte remoto", "Windows Server", "Jira", "ServiceNow", "Hardware/Software", "Linux"]
        },
        programming: {
          title: "Programación",
          items: ["Python", "MySQL"]
        }
      },
      soft: {
        title: "Habilidades Blandas",
        items: ["Resolución de problemas bajo presión", "Pensamiento crítico y analítico", "Comunicación efectiva", "Gestión del tiempo y prioridades", "Trabajo en equipo y colaboración", "Adaptabilidad al cambio", "Atención al detalle", "Liderazgo en proyectos", "Orientación al cliente/usuario interno", "Proactividad y aprendizaje continuo"]
      }
    },
    certifications: {
      title: "Certificaciones",
      items: [
        "AWS Certified Cloud Practitioner",
        "Inglés Avanzado C1 (EFE SET)",
        "Bootcamp Ciberseguridad (Talento Digital)",
        "Lógica de programación con JavaScript en Alura Latam",
        "AWS Academy Graduate - AWS Academy Cloud Architect"
      ]
    },
    languages: {
      title: "Idiomas",
      items: {
        spanish: "Español: Nativo",
        english: "Inglés: Avanzado"
      }
    },
    contact: {
      title: "Conectemos",
      subtitle: "Siempre estoy abierto a discutir nuevas oportunidades y colaboraciones",
      form: {
        name: "Tu Nombre",
        email: "Tu Correo",
        subject: "Asunto",
        message: "Mensaje",
        send: "Enviar Mensaje",
        sending: "Enviando...",
        success: "¡Mensaje enviado exitosamente!",
        error: "Error al enviar el mensaje. Por favor intenta de nuevo."
      }
    },
    portfolios: {
      title: "Mis Proyectos",
      subtitle: "Una colección de proyectos que demuestran mis habilidades y experiencia en telecomunicaciones, ingeniería de redes y ciberseguridad.",
      cta: {
        title: "Construyamos Algo Juntos",
        subtitle: "Siempre estoy abierto a colaborar en proyectos interesantes y explorar nuevas oportunidades.",
        button: "Conectemos"
      },
      projects: [
        {
          title: "Monitoreo de Infraestructura de Red",
          description: "Solución integral de monitoreo para infraestructura de red usando Python y plataformas cloud.",
          technologies: ["Python", "AWS CloudWatch", "Monitoreo de Redes"],
          githubUrl: "https://github.com/Mark0hara/Network-Infrastructure-Monitoring",
          status: "Completado"
        },
        {
          title: "Detección de Amenazas de Ciberseguridad",
          description: "Sistema automatizado de detección de amenazas implementando mejores prácticas de seguridad.",
          technologies: ["Kaspersky", "Automatización de Seguridad", "Análisis de Amenazas"],
          githubUrl: "https://github.com/marco-jara",
          status: "Completado"
        },
        {
          title: "Optimización de Recursos Cloud",
          description: "Herramientas de automatización para optimización de recursos AWS y gestión de costos.",
          technologies: ["AWS", "IAM", "Optimización de Costos"],
          githubUrl: "https://github.com/marco-jara",
          status: "Completado"
        }
      ]
    }
  }
};

export type Language = keyof typeof translations;
export type TranslationKey = typeof translations.en;