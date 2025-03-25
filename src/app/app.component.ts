import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'relief-pose-de-carrelage-et-sols-souples';
  constructor(private router: Router) {}

  scrollToContact() {
      document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  }
}
