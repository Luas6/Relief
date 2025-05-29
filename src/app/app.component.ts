import { Component } from '@angular/core';
import { Router } from '@angular/router';

declare var bootstrap: any;  // Declaramos la variable bootstrap


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
  closeNavbar(navbar: HTMLElement): void {
    if (window.innerWidth < 992 && navbar.classList.contains('show')) {
      const bsCollapse = bootstrap.Collapse.getInstance(navbar) || new bootstrap.Collapse(navbar);
      bsCollapse.hide();
    }
  }
  
}
