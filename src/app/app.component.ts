import { Component } from '@angular/core';
import { Router } from '@angular/router';

declare var bootstrap: any;  // Declaramos la variable bootstrap
declare function gtag_report_conversion(url: string): any; // Google Ads global

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

  reportConversion(url: string, event: Event) {
  event.preventDefault();

  const openUrl = () => {
    window.location.href = url;
  };

  if (typeof gtag_report_conversion === 'function') {
    const result = gtag_report_conversion(url);
    // Por si gtag_report_conversion devuelve false o no llama al callback
    if (result === false) {
      openUrl();
    }
  } else {
    openUrl();
  }
}
  
}
