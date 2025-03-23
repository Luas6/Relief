import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MetionsLegalesComponent } from './metions-legales/metions-legales.component';
import { GalerieComponent } from './galerie/galerie.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mentions-legales', component: MetionsLegalesComponent },
  { path: 'galerie', component: GalerieComponent },
  { path: 'services', component: ServicesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
