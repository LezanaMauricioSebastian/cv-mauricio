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
      title: 'Desarrollador de Software Junior',
      location: 'Corrientes, Argentina',
      contact: {
        email: 'lezanamauricio86@gmail.com',
        phone: '+54 9 3795079957',
        github: 'https://github.com/LezanaMauricioSebastian',
        githubLabel: 'github.com/LezanaMauricioSebastian',
        linkedin: 'https://www.linkedin.com/in/mauricio-lezana-146681213/',
        linkedinLabel: 'linkedin.com/in/mauricio-lezana-146681213'
      }
    },
    summary: `Desarrollador de software junior con experiencia práctica en scraping, pipelines de datos y automatización. Trabajo con Python, SQL y Google Cloud (Cloud Run, BigQuery) para recolectar, limpiar y publicar datos; también desarrollo aplicaciones web. Analista Programador Universitario y Licenciado en Sistemas de Información (tesis aprobada y defensa rendida; trámite administrativo pendiente).`,
    skills: [
      {
        label: 'Datos y nube',
        items: ['Python', 'SQL', 'PostgreSQL', 'Google Cloud Platform (Cloud Run, BigQuery)', 'Docker', 'Scraping / ETL', 'MLflow', 'Power BI']
      },
      {
        label: 'Machine learning y NLP',
        items: ['scikit-learn', 'LightGBM', 'XGBoost', 'RoBERTuito / transformers', 'BERTopic', 'DSPy']
      },
      {
        label: 'Desarrollo de software',
        items: ['JavaScript', 'TypeScript', 'Java', 'C#', 'PHP', 'HTML', 'CSS']
      },
      {
        label: 'Frameworks y herramientas',
        items: ['Angular', 'Supabase', '.NET', 'Entity Framework', 'CodeIgniter', 'Bootstrap', 'Odoo (integraciones)', 'Git', 'GitHub']
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
        position: 'Ingeniería de Datos',
        startDate: 'Febrero 2025',
        endDate: 'Actualidad',
        highlights: [
          'Desarrollo y mantenimiento de pipelines de datos en Python sobre GCP (Cloud Run, BigQuery, Artifact Registry) para el dominio inmobiliario.',
          'Scrapers y jobs de extracción/actualización de avisos (Zonaprop, Argenprop y fuentes relacionadas), limpieza, novelty detection y publicación de datos.',
          'Pipelines de mapas de calor y modelos de precios (Random Forest, LightGBM, XGBoost) con seguimiento en MLflow y despliegue como jobs en Cloud Run.',
          'Matching automatizado de facturas (FacturIA / ARCA) contra registros en Odoo para agilizar operaciones financieras.',
          'ETL hacia PostgreSQL a partir de APIs y scrapers (p. ej. Fu.do) para alimentar analítica posterior.',
          'Uso de Power BI en un entorno virtualizado (VM) para armar reportes y explorar datos operativos.'
        ]
      },
      {
        company: 'GAOTek Inc.',
        position: 'Carga de Datos / Publicador de Contenido Web',
        startDate: 'Julio 2024',
        endDate: 'Noviembre 2024',
        highlights: [
          'Gestión de flujos de publicación de contenido y carga de datos para operaciones web diarias.'
        ]
      }
    ],
    academicExperience: [
      {
        company: 'Observatorio de tecnologías aplicadas a la educación, FaCENA–UNNE (PI 21F010)',
        position: 'Pasantía de investigación (no rentada)',
        advisor: 'Dirección: Prof. Flavia Silvana Pucheta; co-dirección: Mgter. María Viviana Godoy',
        startDate: 'Abril 2026',
        endDate: 'Mayo 2026',
        highlights: [
          'Comparé motores de IA en problemas de métodos numéricos (Newton–Raphson, Gauss–Seidel, interpolación, Simpson 1/3, RK4) con prompts estandarizados.',
          'Implementé referencias en Python y evalué precisión, calidad de código, explicabilidad y tiempos.',
          'Documenté alucinaciones numéricas y armé recomendaciones de uso ético / prompt engineering para la cátedra.'
        ]
      },
      {
        company: 'Métodos Computacionales, Departamento de Informática, FaCENA–UNNE',
        position: 'Ayudante alumno (adscripción)',
        advisor: 'Directora: Mgter. María Viviana Godoy Guglielmone',
        startDate: '2025',
        endDate: '2026 (1 año)',
        highlights: [
          'Actualización de filminas y material teórico-práctico de la cátedra.',
          'Selección y resolución de ejercicios para las guías de trabajo práctico.',
          'Exploración de herramientas de IA para algoritmos numéricos y problemas de la materia, con un informe técnico breve.'
        ]
      }
    ],
    projects: [
      {
        name: 'Feedlyze',
        context: 'Proyecto final de carrera (UNNE)',
        technologies: ['Python', 'RoBERTuito', 'BERTopic', 'DSPy', 'Angular', 'Supabase'],
        description: 'Plataforma web para gestión de reputación online: recupera reseñas, clasifica sentimiento con fine-tuning de RoBERTuito, detecta temas con BERTopic y genera/asigna tareas de mejora con un flujo orquestado mediante DSPy.'
      },
      {
        name: 'Predictor de precios inmobiliarios',
        technologies: ['Python', 'scraping', 'ML'],
        description: 'Extracción, limpieza y modelado de datos de alquiler/venta para estimar precios; base del trabajo posterior de pipelines y modelos en SuData.'
      },
      {
        name: 'Plataforma Vivi\'s Coffee',
        technologies: ['Angular', 'Supabase'],
        description: 'E-commerce full stack con carrito y registro de pedidos para la operación diaria de un pequeño negocio.'
      },
      {
        name: 'Matching FacturIA → Odoo',
        context: 'SuData',
        technologies: ['Python', 'PostgreSQL', 'MySQL', 'Odoo'],
        description: 'UI y backend para cargar procesos de FacturIA, revisar el matching contra padrón y Odoo, editar filas e importar/exportar hacia Odoo.'
      },
      {
        name: 'Mapas de calor inmobiliarios',
        context: 'SuData',
        technologies: ['Python', 'GCP', 'PostGIS', 'ML'],
        description: 'Pipeline de predicción espacial por manzana/radio, exportación geoespacial y publicación de mapas de calor e histogramas de rendimiento.'
      },
      {
        name: 'Checker de avisos 404',
        context: 'SuData',
        technologies: ['Python', 'PostgreSQL', 'GCP'],
        description: 'Job que verifica enlaces de avisos inmobiliarios, detecta bajas (404/410) y registra novedades en la base para mantener el inventario actualizado.'
      }
    ],
    education: [
      {
        institution: 'Universidad Nacional del Nordeste',
        degree: 'Licenciatura en Sistemas de Información',
        startDate: 'Marzo 2021',
        endDate: '2026 (tesis aprobada; trámite pendiente)'
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
