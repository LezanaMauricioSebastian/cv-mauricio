import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cv-mauricio-en',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cv-mauricio-en.component.html',
  styleUrls: ['../../app.component.css']
})
export class CvMauricioEnComponent {
  readonly info = {
    personalInfo: {
      name: 'Mauricio Sebastián Lezana',
      title: 'Junior Software Developer',
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
    summary: `Junior software developer with hands-on experience in scraping, data pipelines, and automation. I work with Python, SQL, and Google Cloud (Cloud Run, BigQuery) to collect, clean, and publish data, and I also build web applications. University Programmer Analyst and Bachelor's in Information Systems (thesis approved and defended; administrative paperwork pending).`,
    skills: [
      {
        label: 'Data & cloud',
        items: ['Python', 'SQL', 'PostgreSQL', 'Google Cloud Platform (Cloud Run, BigQuery)', 'Docker', 'Scraping / ETL', 'MLflow', 'Power BI']
      },
      {
        label: 'Machine learning & NLP',
        items: ['scikit-learn', 'LightGBM', 'XGBoost', 'RoBERTuito / transformers', 'BERTopic', 'DSPy']
      },
      {
        label: 'Software development',
        items: ['JavaScript', 'TypeScript', 'Java', 'C#', 'PHP', 'HTML', 'CSS']
      },
      {
        label: 'Frameworks & tools',
        items: ['Angular', 'Supabase', '.NET', 'Entity Framework', 'CodeIgniter', 'Bootstrap', 'Odoo (integrations)', 'Git', 'GitHub']
      },
      {
        label: 'Methodologies',
        items: ['Scrum']
      }
    ],
    languages: [
      { language: 'Spanish', fluency: 'Native' },
      { language: 'English', fluency: 'Professional' },
      { language: 'Finnish', fluency: 'Basic' }
    ],
    experience: [
      {
        company: 'SuData',
        position: 'Data Engineering',
        startDate: 'February 2025',
        endDate: 'Present',
        highlights: [
          'Build and maintain Python data pipelines on GCP (Cloud Run, BigQuery, Artifact Registry) for the real-estate domain.',
          'Scrapers and extraction/update jobs for listings (Zonaprop, Argenprop and related sources), cleaning, novelty handling, and data publishing.',
          'Heatmap pipelines and price models (Random Forest, LightGBM, XGBoost) with MLflow tracking, deployed as Cloud Run jobs.',
          'Automated invoice matching (FacturIA / ARCA) against Odoo records to streamline financial operations.',
          'ETL into PostgreSQL from APIs and scrapers (e.g. Fu.do) to feed downstream analytics.',
          'Used Power BI on a virtualized environment (VM) to build reports and explore operational data.'
        ]
      },
      {
        company: 'GAOTek Inc.',
        position: 'Data Entry / Web Content Publisher',
        startDate: 'July 2024',
        endDate: 'November 2024',
        highlights: [
          'Managed content publication and data entry workflows for daily web operations.'
        ]
      }
    ],
    academicExperience: [
      {
        company: 'Observatory of Technologies Applied to Education, FaCENA–UNNE (PI 21F010)',
        position: 'Unpaid research internship',
        advisor: 'Advisor: Prof. Flavia Silvana Pucheta; co-advisor: Mgter. María Viviana Godoy',
        startDate: 'April 2026',
        endDate: 'May 2026',
        highlights: [
          'Compared generative AI models on numerical methods problems (Newton–Raphson, Gauss–Seidel, interpolation, Simpson 1/3, RK4) with a standardized prompt.',
          'Implemented Python reference solutions and contrasted accuracy, code quality, and explainability in a pilot study.',
          'Documented numerical hallucinations and wrote ethical-use recommendations for the course.',
          'Paper accepted at the VII WITE (October 2026): “Comparación de modelos de IA generativa en la resolución de problemas en Métodos Computacionales” (C-2026-27).'
        ]
      },
      {
        company: 'Computational Methods, Department of Informatics, FaCENA–UNNE',
        position: 'Undergraduate teaching assistant (adscripción)',
        advisor: 'Advisor: Mgter. María Viviana Godoy Guglielmone',
        startDate: '2025',
        endDate: '2026 (1 year)',
        highlights: [
          'Updated lecture slides and course teaching materials.',
          'Selected and solved exercises for practical assignment guides.',
          'Explored AI tools for numerical algorithms and course problems, and wrote a short technical report.'
        ]
      }
    ],
    projects: [
      {
        name: 'Feedlyze',
        context: 'Capstone / graduation project (UNNE)',
        technologies: ['Python', 'RoBERTuito', 'BERTopic', 'DSPy', 'Angular', 'Supabase'],
        description: 'Web platform for online reputation management: pulls reviews, classifies sentiment with fine-tuned RoBERTuito, detects topics with BERTopic, and generates/assigns improvement tasks via a DSPy-orchestrated flow.'
      },
      {
        name: 'Real-estate price predictor',
        technologies: ['Python', 'scraping', 'ML'],
        description: 'Extraction, cleaning, and modeling of rental/sale data for price estimation; foundation for later pipeline and modeling work at SuData.'
      },
      {
        name: 'Vivi\'s Coffee Platform',
        technologies: ['Angular', 'Supabase'],
        description: 'Full-stack e-commerce with a shopping cart and order logging to support a small business day to day.'
      },
      {
        name: 'FacturIA → Odoo matching',
        context: 'SuData',
        technologies: ['Python', 'PostgreSQL', 'MySQL', 'Odoo'],
        description: 'UI and backend to load FacturIA processes, review matching against the tax registry and Odoo, edit rows, and import/export into Odoo.'
      },
      {
        name: 'Real-estate heatmaps',
        context: 'SuData',
        technologies: ['Python', 'GCP', 'PostGIS', 'ML'],
        description: 'Spatial prediction pipeline by block/census tract, geospatial export, and publishing of heatmaps plus yield histograms.'
      },
      {
        name: 'Listing 404 checker',
        context: 'SuData',
        technologies: ['Python', 'PostgreSQL', 'GCP'],
        description: 'Job that checks listing URLs, detects takedowns (404/410), and writes novelty records so the inventory stays up to date.'
      }
    ],
    publications: [
      {
        title: 'Comparación de modelos de IA generativa en la resolución de problemas en Métodos Computacionales',
        venue: 'VII Workshop on Educational Innovation and Transformation (WITE), UNNOBA',
        date: 'October 2026',
        note: 'Accepted paper (C-2026-27). It will be posted on the event site; the full version is still under review for the digital book.'
      }
    ],
    education: [
      {
        institution: 'Universidad Nacional del Nordeste',
        degree: 'Bachelor\'s in Information Systems',
        startDate: 'March 2021',
        endDate: '2026 (thesis approved; paperwork pending)'
      },
      {
        institution: 'Universidad Nacional del Nordeste',
        degree: 'University Programmer Analyst',
        startDate: 'March 2021',
        endDate: 'December 2023'
      }
    ],
    certifications: [
      {
        title: 'Certification in Intelligent Database Extraction with DB2',
        issuer: 'Universidad Nacional del Nordeste & IBM',
        date: '2024'
      }
    ]
  };

}
