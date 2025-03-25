import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MetionsLegalesComponent } from './metions-legales/metions-legales.component';
import { ServicesComponent } from './services/services.component';
import { PoseDeCarrelageAuSolComponent } from './services/pose-de-carrelage-au-sol/pose-de-carrelage-au-sol.component';
import { SallesDeBainComponent } from './services/salles-de-bain/salles-de-bain.component';
import { DoucheItalienneComponent } from './services/douche-italienne/douche-italienne.component';
import { PoseDeParquetsEtSolsSouplesComponent } from './services/pose-de-parquets-et-sols-souples/pose-de-parquets-et-sols-souples.component';
import { HandibatComponent } from './services/handibat/handibat.component';
import { GalerieComponent } from './componentes/galerie/galerie.component';
import { PoseDeFaienceComponent } from './services/pose-de-faience/pose-de-faience.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MetionsLegalesComponent,
    GalerieComponent,
    ServicesComponent,
    PoseDeFaienceComponent,
    PoseDeCarrelageAuSolComponent,
    SallesDeBainComponent,
    DoucheItalienneComponent,
    PoseDeParquetsEtSolsSouplesComponent,
    HandibatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
