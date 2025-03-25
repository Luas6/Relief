import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MetionsLegalesComponent } from './metions-legales/metions-legales.component';

import { GalerieComponent } from './componentes/galerie/galerie.component';
import { ServicesComponent } from './services/services.component';
import { DoucheItalienneComponent } from './services/douche-italienne/douche-italienne.component';
import { HandibatComponent } from './services/handibat/handibat.component';
import { SallesDeBainComponent } from './services/salles-de-bain/salles-de-bain.component';
import { PoseDeCarrelageAuSolComponent } from './services/pose-de-carrelage-au-sol/pose-de-carrelage-au-sol.component';
import { PoseDeFaienceComponent } from './services/pose-de-faience/pose-de-faience.component';
import { PoseDeParquetsEtSolsSouplesComponent } from './services/pose-de-parquets-et-sols-souples/pose-de-parquets-et-sols-souples.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mentions-legales', component: MetionsLegalesComponent },
  { path: 'galerie', component: GalerieComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'pose-de-carrelage-au-sol', component: PoseDeCarrelageAuSolComponent },
  { path: 'pose-de-faience', component: PoseDeFaienceComponent },
  { path: 'pose-de-parquets-et-sols-souples', component: PoseDeParquetsEtSolsSouplesComponent },
  { path: 'salles-de-bain', component: SallesDeBainComponent },
  { path: 'douche-italienne', component: DoucheItalienneComponent },
  { path: 'handibat', component: HandibatComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
