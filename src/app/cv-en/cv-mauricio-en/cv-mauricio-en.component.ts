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
      title: 'Data Engineer & Software Developer',
      location: 'Kouvola, Finland (Remote / EU)',
      contact: {
        email: 'lezanamauricio86@gmail.com',
        phone: '+54 9 3795079957',
        github: 'https://github.com/LezanaMauricioSebastian',
        githubLabel: 'github.com/LezanaMauricioSebastian',
        linkedin: 'https://www.linkedin.com/in/mauricio-lezana-146681213/',
        linkedinLabel: 'linkedin.com/in/mauricio-lezana-146681213'
      }
    },
    summary: `Junior Software Developer and University Student with practical experience in data engineering and web scraping. Passionate about building efficient solutions using Python, SQL, and automation tools to process and transform large data volumes. Adept at deploying modern analytics dashboards, optimizing system performance, and integrating NLP solutions. Hold a University Programmer Analyst degree and currently pursuing a Bachelor's in Information Systems.`,
    skills: [
      {
        label: 'Data Engineering & Cloud',
        items: ['Python', 'SQL Server', 'Google Cloud Platform (GCP)', 'BigQuery', 'Odoo', 'Data Extraction/Scraping']
      },
      {
        label: 'Analytics & Visualization',
        items: ['Power BI', 'DAX', 'DB2 Intelligent Extraction']
      },
      {
        label: 'AI & Machine Learning',
        items: ['NLP', 'LLMs', 'BERT', 'DSPy']
      },
      {
        label: 'Software Development',
        items: ['Java', 'C#', 'PHP', 'JavaScript', 'TypeScript', 'HTML', 'CSS']
      },
      {
        label: 'Frameworks & Tools',
        items: ['Angular', 'AngularJS', '.NET', 'Entity Framework', 'CodeIgniter', 'Bootstrap', 'Git', 'GitHub', 'Supabase', 'KVM/QEMU Linux Virtualization']
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
        position: 'Data Engineer',
        startDate: 'February 2025',
        endDate: 'Present',
        highlights: [
          'Develop and maintain data pipelines utilizing Python, SQL, Google Cloud Platform (GCP), and BigQuery.',
          'Implement automated matching routines to synchronize invoice data with Odoo database records, directly streamlining financial operations.',
          'Design and deploy dynamic Power BI dashboards utilizing complex DAX measures to monitor administrative KPIs, workload tracking, and operational bottlenecks.',
          'Optimize virtualized environments (KVM/QEMU on Linux) for heavy data workloads involving Power BI and Tango Gestión, resolving critical CPU performance bottlenecks through hardware virtualization and VirtIO drivers.'
        ]
      },
      {
        company: 'GAOTek Inc.',
        position: 'Data Entry / Web Content Publisher',
        startDate: 'July 2024',
        endDate: 'November 2024',
        highlights: [
          'Managed content publication and data entry workflows to support daily web operations and digital asset updates.'
        ]
      }
    ],
    projects: [
      {
        name: 'Feedlyze',
        context: 'University Graduation Project',
        description: 'Integrated advanced NLP capabilities utilizing BERT and DSPy for automated sentiment and topic analysis, enhancing review management and raw data interpretation.'
      },
      {
        name: 'Rental Price Predictor',
        technologies: ['Python'],
        description: 'Engineered complex web scraping scripts to extract, clean, and process real estate data from multiple sources to fuel predictive pricing logic.'
      },
      {
        name: 'Vivi\'s Coffee Platform',
        technologies: ['Angular', 'Supabase'],
        description: 'Developed a full-stack e-commerce solution using Angular and Supabase. Built a custom shopping cart and an automated order logging system to directly support the daily operations of a small business.'
      },
      {
        name: 'Classroom Manager',
        technologies: ['C#', 'SQL', 'Entity Framework'],
        description: 'Built a management system utilizing C#, SQL, and Entity Framework to streamline educational resource and space scheduling.'
      },
      {
        name: 'Shoe Store E-commerce',
        technologies: ['CodeIgniter', 'PHP', 'SQL', 'HTML', 'CSS', 'Bootstrap'],
        description: 'Developed a functional storefront using CodeIgniter, PHP, SQL, HTML, CSS, and Bootstrap.'
      },
      {
        name: 'Turing Machine Calculator',
        technologies: ['Python'],
        description: 'Developed functional logic models using Python.'
      }
    ],
    education: [
      {
        institution: 'Universidad Nacional del Nordeste',
        degree: 'Bachelor\'s in Information Systems',
        startDate: 'March 2021',
        endDate: 'Present'
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
