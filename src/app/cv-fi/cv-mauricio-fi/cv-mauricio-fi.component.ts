import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cv-mauricio-fi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cv-mauricio-fi.component.html',
  styleUrls: ['../../app.component.css']
})
export class CvMauricioFiComponent {
  readonly info = {
    personalInfo: {
      name: 'Mauricio Sebastián Lezana',
      title: 'Junior-ohjelmistokehittäjä',
      location: 'Corrientes, Argentiina',
      contact: {
        email: 'lezanamauricio86@gmail.com',
        phone: '+54 9 3795079957',
        github: 'https://github.com/LezanaMauricioSebastian',
        githubLabel: 'github.com/LezanaMauricioSebastian',
        linkedin: 'https://www.linkedin.com/in/mauricio-lezana-146681213/',
        linkedinLabel: 'linkedin.com/in/mauricio-lezana-146681213'
      }
    },
    summary: `Junior-ohjelmistokehittäjä, jolla on käytännön kokemusta web-scrapingista, dataputkista ja automaatiosta. Työskentelen Pythonin, SQL:n ja Google Cloudin (Cloud Run, BigQuery) parissa datan keräämiseksi, puhdistamiseksi ja julkaisemiseksi; kehitän myös verkkosovelluksia. Analista Programador Universitario ja Licenciado en Sistemas de Información (opinnäytetyö hyväksytty ja puolustettu; hallinnollinen käsittely kesken).`,
    skills: [
      {
        label: 'Data ja pilvi',
        items: ['Python', 'SQL', 'PostgreSQL', 'Google Cloud Platform (Cloud Run, BigQuery)', 'Docker', 'Scraping / ETL', 'MLflow', 'Power BI']
      },
      {
        label: 'Koneoppiminen ja NLP',
        items: ['scikit-learn', 'LightGBM', 'XGBoost', 'RoBERTuito / transformers', 'BERTopic', 'DSPy']
      },
      {
        label: 'Ohjelmistokehitys',
        items: ['JavaScript', 'TypeScript', 'Java', 'C#', 'PHP', 'HTML', 'CSS']
      },
      {
        label: 'Kehykset ja työkalut',
        items: ['Angular', 'Supabase', '.NET', 'Entity Framework', 'CodeIgniter', 'Bootstrap', 'Odoo (integraatiot)', 'Git', 'GitHub']
      },
      {
        label: 'Menetelmät',
        items: ['Scrum']
      }
    ],
    languages: [
      { language: 'Espanja', fluency: 'Äidinkieli' },
      { language: 'Englanti', fluency: 'Ammatillinen' },
      { language: 'Suomi', fluency: 'Perustaso' }
    ],
    experience: [
      {
        company: 'SuData',
        position: 'Data engineering',
        startDate: 'Helmikuu 2025',
        endDate: 'Nykyinen',
        highlights: [
          'Kehitän ja ylläpidän Python-dataputkia GCP:ssä (Cloud Run, BigQuery, Artifact Registry) kiinteistöalan tarpeisiin.',
          'Scraperit ja poiminta-/päivitystyöt ilmoituksille (Zonaprop, Argenprop ja liittyvät lähteet), puhdistus, uutuuksien tunnistus ja datan julkaisu.',
          'Lämpökarttaputket ja hintamallit (Random Forest, LightGBM, XGBoost) MLflow-seurannalla; käyttöönotto Cloud Run -töinä.',
          'Automaattinen laskujen täsmäytys (FacturIA / ARCA) Odoo-tietueisiin talousprosessien sujuvoittamiseksi.',
          'ETL PostgreSQL:ään rajapinnoista ja scrapereista (esim. Fu.do) myöhempää analyytiikkaa varten.',
          'Power BI virtualisoidussa ympäristössä (VM) raporttien laatimiseen ja operatiivisen datan tutkimiseen.'
        ]
      },
      {
        company: 'GAOTek Inc.',
        position: 'Tiedonsyöttö / verkkosisällön julkaisija',
        startDate: 'Heinäkuu 2024',
        endDate: 'Marraskuu 2024',
        highlights: [
          'Hallinnoin sisällön julkaisun ja tiedonsyötön työnkulkuja päivittäisessä verkkotoiminnassa.'
        ]
      }
    ],
    academicExperience: [
      {
        company: 'Observatorio de tecnologías aplicadas a la educación, FaCENA–UNNE (PI 21F010)',
        position: 'Tutkimusharjoittelu (palkaton)',
        advisor: 'Ohjaus: Prof. Flavia Silvana Pucheta; apulaisohjaus: Mgter. María Viviana Godoy',
        startDate: 'Huhtikuu 2026',
        endDate: 'Toukokuu 2026',
        highlights: [
          'Vertasin tekoälymalleja numeeristen menetelmien tehtävissä (Newton–Raphson, Gauss–Seidel, interpolointi, Simpson 1/3, RK4) vakioiduilla kehotteilla.',
          'Toteutin Python-vertailuratkaisut ja arvioin tarkkuutta, koodin laatua, selitettävyyttä ja aikoja.',
          'Dokumentoin numeerisia hallusinaatioita ja kokosin suosituksia eettisestä käytöstä / prompt engineeringistä kurssille.'
        ]
      },
      {
        company: 'Laskennalliset menetelmät, Informatiikan laitos, FaCENA–UNNE',
        position: 'Opiskelija-assistentti (adscripción)',
        advisor: 'Ohjaaja: Mgter. María Viviana Godoy Guglielmone',
        startDate: '2025',
        endDate: '2026 (1 vuosi)',
        highlights: [
          'Päivitin luentodioja sekä kurssin teoria- ja harjoitusmateriaaleja.',
          'Valitsin ja ratkaisin tehtäviä käytännön harjoitusoppaita varten.',
          'Tutkin tekoälytyökaluja numeerisiin algoritmeihin ja kurssin ongelmiin sekä kirjoitin lyhyen teknisen raportin.'
        ]
      }
    ],
    projects: [
      {
        name: 'Feedlyze',
        context: 'Lopputyö / valmistumisprojekti (UNNE)',
        technologies: ['Python', 'RoBERTuito', 'BERTopic', 'DSPy', 'Angular', 'Supabase'],
        description: 'Verkkoalusta verkkomaineen hallintaan: hakee arvosteluja, luokittelee tunnesävyn hienosäädetyllä RoBERTuitolla, tunnistaa teemoja BERTopicilla ja luo/osoittaa kehitystehtäviä DSPy-ohjatulla työnkululla.'
      },
      {
        name: 'Kiinteistöhintojen ennustin',
        technologies: ['Python', 'scraping', 'ML'],
        description: 'Vuokra- ja myyntidatan poiminta, puhdistus ja mallinnus hinta-arvioita varten; pohja myöhemmälle putki- ja mallinnustyölle SuDatassa.'
      },
      {
        name: 'Vivi\'s Coffee -alusta',
        technologies: ['Angular', 'Supabase'],
        description: 'Full stack -verkkokauppa ostoskorilla ja tilauskirjauksella pienen yrityksen päivittäiseen toimintaan.'
      },
      {
        name: 'FacturIA → Odoo -täsmäytys',
        context: 'SuData',
        technologies: ['Python', 'PostgreSQL', 'MySQL', 'Odoo'],
        description: 'Käyttöliittymä ja taustajärjestelmä FacturIA-prosessien lataamiseen, täsmäytyksen tarkistamiseen verorekisteriä ja Odoota vasten, rivien muokkaamiseen sekä tuontiin/vientiin Odoohon.'
      },
      {
        name: 'Kiinteistöjen lämpökartat',
        context: 'SuData',
        technologies: ['Python', 'GCP', 'PostGIS', 'ML'],
        description: 'Spatiaalinen ennustusputki kortteli-/laskenta-alueittain, geospatiaalinen vienti sekä lämpökarttojen ja tuottavuushistogrammien julkaisu.'
      },
      {
        name: 'Ilmoitusten 404-tarkistin',
        context: 'SuData',
        technologies: ['Python', 'PostgreSQL', 'GCP'],
        description: 'Työ, joka tarkistaa kiinteistöilmoitusten linkit, havaitsee poistot (404/410) ja kirjaa uutuudet tietokantaan, jotta varasto pysyy ajan tasalla.'
      }
    ],
    education: [
      {
        institution: 'Universidad Nacional del Nordeste',
        degree: 'Licenciatura en Sistemas de Información (tietojärjestelmien kandidaatti)',
        startDate: 'Maaliskuu 2021',
        endDate: '2026 (opinnäytetyö hyväksytty; hallinnollinen käsittely kesken)'
      },
      {
        institution: 'Universidad Nacional del Nordeste',
        degree: 'Analista Programador Universitario',
        startDate: 'Maaliskuu 2021',
        endDate: 'Joulukuu 2023'
      }
    ],
    certifications: [
      {
        title: 'Sertifikaatti: älykäs tietokantapoiminta DB2:lla',
        issuer: 'Universidad Nacional del Nordeste & IBM',
        date: '2024'
      }
    ]
  };
}
