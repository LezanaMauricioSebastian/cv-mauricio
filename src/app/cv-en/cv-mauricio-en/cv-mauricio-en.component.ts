import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cv-mauricio-en',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cv-mauricio-en.component.html',
  styleUrls: ['/src/app/app.component.css']
})
export class CvMauricioEnComponent {
  info = {
    name: 'Mauricio Sebastián Lezana',
    title: 'Junior Software Developer',
    location: 'Corrientes, Argentina',
    email: 'lezanamauricio86@gmail.com',
    github: 'https://github.com/LezanaMauricioSebastian',
    linkedin: 'https://www.linkedin.com/in/mauricio-lezana-146681213/',
    phone: '+54 9 3795079957',
    languages: ['Spanish (Native)', 'English (Professional)', 'Finnish (Elementary)'],
    summary: `I am a junior software developer and university student with hands-on experience in data scraping and data engineering. Passionate about building efficient solutions through programming, I have worked with technologies like Python, SQL, and automation tools to process and transform large datasets. I hold a University Programmer Analyst degree and am currently completing my Bachelor's Degree in Computer Systems.`,
    skills: {
      languages: ['Java (Intermediate)', 'C# (Intermediate)', 'Python (Intermediate)', 'PHP (Intermediate)', 'JavaScript (Basic)', 'TypeScript (Basic)'],
      frameworks: ['AngularJS', 'CodeIgniter', '.NET', 'Entity Framework', 'Bootstrap', 'Angular Material'],
      databases: ['SQL Server (Intermediate)'],
      tools: ['Git', 'GitHub'],
      methodologies: ['Scrum']
    },
    projects: [
      'Classroom Manager (C#, SQL, Entity Framework)',
      'Shoe Store (CodeIgniter, PHP, SQL, HTML, CSS, Bootstrap)',
      'Word to HTML (Python)',
      'Basic CRUD (Angular, .NET)',
      'Calculator with Turing Machines (Python)'
    ],
    experience: [
      
      {
        role:'Data Engineering',
        company: 'SuData',
        date: 'February 2025 - Present'
      },
      {
        role: 'Data Entry / Web Content Uploader',
        company: 'GAOTek Inc.',
        date: 'July 2024 - November 2024'
      }
    ],
    education: [
      {
        degree: 'Bachelor’s degree in Informatics Systems',
        institution: 'Universidad Nacional del Nordeste',
        period: 'March 2021 - Present'
      },
      {
        degree: 'University Programmer Analyst (Undergraduate)',
        institution: 'Universidad Nacional del Nordeste',
        period: 'March 2021 - December 2023'
      }
    ],
    certification: [
      {
        name: 'Certification in Intelligent Database Extraction with DB2',
        institution: 'Universidad Nacional del Nordeste & IBM',
        period: 'Completed in 2024'
      }
    ]
  };

}
