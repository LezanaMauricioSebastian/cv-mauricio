import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvMauricioEsComponent } from './cv-es/cv-mauricio-es/cv-mauricio-es.component';
import { CvMauricioEnComponent } from './cv-en/cv-mauricio-en/cv-mauricio-en.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {path: '',component:AppComponent},
  { path: 'cv-es', component: CvMauricioEsComponent },
  { path: 'cv-en', component: CvMauricioEnComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
