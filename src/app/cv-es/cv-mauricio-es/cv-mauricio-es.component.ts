import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cv-mauricio-es',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cv-mauricio-es.component.html',
  styleUrls: ['/src/app/app.component.css']
})

export class CvMauricioEsComponent {
  info = {
    name: 'Mauricio Sebastián Lezana',
    title: 'Desarrollador de Software Junior',
    location: 'Corrientes, Argentina',
    email: 'lezanamauricio86@gmail.com',
    github: 'https://github.com/LezanaMauricioSebastian',
    linkedin: 'https://www.linkedin.com/in/mauricio-lezana-146681213/',
    phone: '+54 9 3795079957',
    languages: ['Español (Nativo)', 'Inglés (Profesional)', 'Finés (Básico)'],
    summary: `Soy un desarrollador de software junior y estudiante universitario con experiencia práctica en extracción de datos (scraping) e ingeniería de datos. Apasionado por construir soluciones eficientes mediante la programación, he trabajado con tecnologías como Python, SQL y herramientas de automatización para procesar y transformar grandes volúmenes de datos. Poseo el título de Analista Programador Universitario y actualmente curso la Licenciatura en Sistemas de Información.`,
    skills: {
      languages: ['Java (Intermedio)', 'C# (Intermedio)', 'Python (Intermedio)', 'PHP (Intermedio)', 'JavaScript (Básico)', 'TypeScript (Básico)'],
      frameworks: ['AngularJS', 'CodeIgniter', '.NET', 'Entity Framework', 'Bootstrap', 'Angular Material'],
      databases: ['SQL Server (Intermedio)'],
      tools: ['Git', 'GitHub'],
      methodologies: ['Scrum']
    },
    projects: [
      'Gestor de Aulas (C#, SQL, Entity Framework)',
      'Tienda de Calzado (CodeIgniter, PHP, SQL, HTML, CSS, Bootstrap)',
      'Predictor de Precios de Alquiler en Resistencia (Python)',
      'Vivi\'s Coffee sitio web (Angular, supabase)',
      'Calculadora con Máquinas de Turing (Python)'
    ],
    experience: [
      {
        role: 'Ingeniería de Datos',
        company: 'SuData',
        date: 'Febrero 2025 - Presente'
      },
      {
        role: 'Carga de Datos / Publicador de Contenido Web',
        company: 'GAOTek Inc.',
        date: 'Julio 2024 - Noviembre 2024'
      }
    ],
    education: [
      {
        degree: 'Licenciatura en Sistemas de Información',
        institution: 'Universidad Nacional del Nordeste',
        period: 'Marzo 2021 - Presente'
      },
      {
        degree: 'Analista Programador Universitario',
        institution: 'Universidad Nacional del Nordeste',
        period: 'Marzo 2021 - Diciembre 2023'
      }
    ],
    certification: [
      {
        name: 'Certificación en Extracción Inteligente de Bases de Datos con DB2',
        institution: 'Universidad Nacional del Nordeste & IBM',
        period: 'Finalizado en 2024'
      }
    ]
  };
}
