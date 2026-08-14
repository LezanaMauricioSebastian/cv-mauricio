import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  styleUrl: './app.component.css'
})

export class AppComponent {
  constructor(private router: Router) {}

  get downloadLabel(): string {
    const url = this.router.url;
    if (url.includes('cv-en')) {
      return 'Download PDF';
    }
    if (url.includes('cv-fi')) {
      return 'Lataa PDF';
    }
    return 'Descargar PDF';
  }

  downloadPdf(): void {
    const previousTitle = document.title;
    const lang = this.router.url.includes('cv-en')
      ? 'EN'
      : this.router.url.includes('cv-fi')
        ? 'FI'
        : 'ES';
    document.title = `CV-Mauricio-Lezana-${lang}`;
    const restore = () => {
      document.title = previousTitle;
      window.removeEventListener('afterprint', restore);
    };
    window.addEventListener('afterprint', restore);
    window.print();
  }
}
