import { Routes } from '@angular/router';
import { CvMauricioEsComponent } from './cv-es/cv-mauricio-es/cv-mauricio-es.component';
import { CvMauricioEnComponent } from './cv-en/cv-mauricio-en/cv-mauricio-en.component';

export const routes: Routes = [
  { path: '', redirectTo: '/cv-es', pathMatch: 'full' },
  { path: 'cv-es', component: CvMauricioEsComponent },
  { path: 'cv-en', component: CvMauricioEnComponent }
];
