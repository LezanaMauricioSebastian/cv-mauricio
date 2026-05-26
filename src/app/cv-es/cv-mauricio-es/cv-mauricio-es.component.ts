import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cv-mauricio-es',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cv-mauricio-es.component.html',
  styleUrls: ['../../app.component.css']
})

export class CvMauricioEsComponent {
  readonly info = {
    personalInfo: {
      name: 'Mauricio Sebastián Lezana',
      title: 'Ingeniero de Datos y Desarrollador de Software',
      location: 'Kouvola, Finlandia (Remoto / UE)',
      contact: {
        email: 'lezanamauricio86@gmail.com',
        phone: '+54 9 3795079957',
        github: 'https://github.com/LezanaMauricioSebastian',
        githubLabel: 'github.com/LezanaMauricioSebastian',
        linkedin: 'https://www.linkedin.com/in/mauricio-lezana-146681213/',
        linkedinLabel: 'linkedin.com/in/mauricio-lezana-146681213'
      }
    },
    summary: `Desarrollador de Software Junior y estudiante universitario con experiencia práctica en ingeniería de datos y web scraping. Apasionado por crear soluciones eficientes con Python, SQL y herramientas de automatización para procesar y transformar grandes volúmenes de datos. Con experiencia en el despliegue de dashboards analíticos modernos, la optimización del rendimiento de sistemas y la integración de soluciones de NLP. Cuento con el título de Analista Programador Universitario y actualmente curso la Licenciatura en Sistemas de Información.`,
    skills: [
      {
        label: 'Ingeniería de Datos y Nube',
        items: ['Python', 'SQL Server', 'Google Cloud Platform (GCP)', 'BigQuery', 'Odoo', 'Extracción de Datos / Scraping']
      },
      {
        label: 'Analítica y Visualización',
        items: ['Power BI', 'DAX', 'Extracción Inteligente con DB2']
      },
      {
        label: 'IA y Aprendizaje Automático',
        items: ['NLP', 'LLMs', 'BERT', 'DSPy']
      },
      {
        label: 'Desarrollo de Software',
        items: ['Java', 'C#', 'PHP', 'JavaScript', 'TypeScript', 'HTML', 'CSS']
      },
      {
        label: 'Frameworks y Herramientas',
        items: ['Angular', 'AngularJS', '.NET', 'Entity Framework', 'CodeIgniter', 'Bootstrap', 'Git', 'GitHub', 'Supabase', 'Virtualizacion Linux con KVM/QEMU']
      },
      {
        label: 'Metodologías',
        items: ['Scrum']
      }
    ],
    languages: [
      { language: 'Español', fluency: 'Nativo' },
      { language: 'Inglés', fluency: 'Profesional' },
      { language: 'Finés', fluency: 'Básico' }
    ],
    experience: [
      {
        company: 'SuData',
        position: 'Ingeniero de Datos',
        startDate: 'Febrero 2025',
        endDate: 'Actualidad',
        highlights: [
          'Desarrollo y mantenimiento de pipelines de datos utilizando Python, SQL, Google Cloud Platform (GCP) y BigQuery.',
          'Implementación de rutinas automáticas de matching para sincronizar datos de facturas con registros de la base de datos de Odoo, agilizando directamente las operaciones financieras.',
          'Diseño y despliegue de dashboards dinámicos en Power BI con medidas DAX complejas para monitorear KPIs administrativos, seguimiento de carga laboral y cuellos de botella operativos.',
          'Optimización de entornos virtualizados (KVM/QEMU sobre Linux) para cargas de trabajo intensivas con Power BI y Tango Gestión, resolviendo cuellos de botella críticos de CPU mediante virtualización por hardware y drivers VirtIO.'
        ]
      },
      {
        company: 'GAOTek Inc.',
        position: 'Data Entry / Publicador de Contenido Web',
        startDate: 'Julio 2024',
        endDate: 'Noviembre 2024',
        highlights: [
          'Gestión de flujos de publicación de contenido y carga de datos para respaldar operaciones web diarias y actualizaciones de activos digitales.'
        ]
      }
    ],
    projects: [
      {
        name: 'Feedlyze',
        context: 'Proyecto final universitario',
        description: 'Integración de capacidades avanzadas de NLP utilizando BERT y DSPy para automatizar el análisis de sentimiento y tópicos, mejorando la gestión de reseñas y la interpretación de datos en bruto.'
      },
      {
        name: 'Predictor de Precios de Alquiler',
        technologies: ['Python'],
        description: 'Desarrollo de scripts complejos de web scraping para extraer, limpiar y procesar datos inmobiliarios de múltiples fuentes y alimentar una lógica predictiva de precios.'
      },
      {
        name: 'Plataforma Vivi\'s Coffee',
        technologies: ['Angular', 'Supabase'],
        description: 'Desarrollo de una solución e-commerce full stack con Angular y Supabase. Incluye un carrito de compras personalizado y un sistema automatizado de registro de pedidos para apoyar la operación diaria de un pequeño negocio.'
      },
      {
        name: 'Gestor de Aulas',
        technologies: ['C#', 'SQL', 'Entity Framework'],
        description: 'Construcción de un sistema de gestión con C#, SQL y Entity Framework para optimizar la administración de recursos educativos y la programación de espacios.'
      },
      {
        name: 'E-commerce de Tienda de Calzado',
        technologies: ['CodeIgniter', 'PHP', 'SQL', 'HTML', 'CSS', 'Bootstrap'],
        description: 'Desarrollo de una tienda funcional utilizando CodeIgniter, PHP, SQL, HTML, CSS y Bootstrap.'
      },
      {
        name: 'Calculadora con Máquinas de Turing',
        technologies: ['Python'],
        description: 'Desarrollo de modelos lógicos funcionales utilizando Python.'
      }
    ],
    education: [
      {
        institution: 'Universidad Nacional del Nordeste',
        degree: 'Licenciatura en Sistemas de Información',
        startDate: 'Marzo 2021',
        endDate: 'Actualidad'
      },
      {
        institution: 'Universidad Nacional del Nordeste',
        degree: 'Analista Programador Universitario',
        startDate: 'Marzo 2021',
        endDate: 'Diciembre 2023'
      }
    ],
    certifications: [
      {
        title: 'Certificación en Extracción Inteligente de Bases de Datos con DB2',
        issuer: 'Universidad Nacional del Nordeste & IBM',
        date: '2024'
      }
    ]
  };
}
