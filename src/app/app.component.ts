import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var bootstrap: any;  // Declaramos la variable bootstrap
declare function gtag_report_conversion(url: string): any; // Google Ads global

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'relief-pose-de-carrelage-et-sols-souples';
  showButton = false;
  constructor(private router: Router) {}
  
  ngOnInit(): void {
      const urlInput = document.getElementById('form-url') as HTMLInputElement | null;
      if (urlInput) {
        urlInput.value = window.location.href;
      }
    }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    const scrollPercent = scrollTop / (docHeight - windowHeight);

    if (scrollPercent > 0.1 && scrollPercent < 0.9) {
      this.showButton = true;
    } else {
      this.showButton = false;
    }
  }

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
