import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  slides = [
    { 
      img: 'assets/img/handshake.webp', 
      alt: 'Économisez de l\'argent', 
      title: 'Conseils personnalisés et adaptés aux différents besoins et budgets'
    },
    { 
      img: 'assets/img/documento.webp', 
      alt: 'Professionnalisme', 
      title: 'Devis gratuit, transparent et à domicile (Pau et alentours, Nay et alentours)'
    },
    { 
      img: 'assets/img/paleta.webp', 
      alt: 'Rapidité', 
      title: 'Expertise et expérience. Travail soigné et sous garanti',    
    },
    { 
      img: 'assets/img/casco-reloj.webp', 
      alt: 'Image 4', 
      title: ' Nous travaillons dans les meilleurs délais, avec des professionnels reconnus pour leurs bonnes compétences'
    }
    
  ];


  customOptions = {
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1200: {
        autoplay: false,
        items: 4,
        dots: false,
      }
    }
  };

}
