import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MetionsLegalesComponent } from './metions-legales/metions-legales.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mentions-legales', component: MetionsLegalesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
