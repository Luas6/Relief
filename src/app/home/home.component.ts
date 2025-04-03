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
      title: ' Nous travaillons dans les meilleurs délais, avec des professionnels reconnus pour ses bonnes compétences'
    }
    
  ];

  obras = [
    { 
      img: 'assets/img/obras/carrelage1.webp', 
      alt: 'Image carrelage1', 
    },
    { 
      img: 'assets/img/obras/carrelage2.webp', 
      alt: 'Image carrelage2', 
    },
    { 
      img: 'assets/img/obras/carrelage3.webp', 
      alt: 'Image carrelage3', 
    },
    { 
      img: 'assets/img/obras/doucheitali.webp', 
      alt: 'Image doucheitali', 
    },
    { 
      img: 'assets/img/obras/doucheitali2.webp', 
      alt: 'Image doucheitali2', 
    },
    { 
      img: 'assets/img/obras/sdb1.webp', 
      alt: 'Image sdb1', 
    },
    { 
      img: 'assets/img/obras/sdb2.webp', 
      alt: 'Image sdb2', 
    },
    { 
      img: 'assets/img/obras/sdb3.webp', 
      alt: 'Image sdb3', 
    },
    { 
      img: 'assets/img/obras/sdb4.webp', 
      alt: 'Image sdb4', 
    },
    { 
      img: 'assets/img/obras/sdb5.webp', 
      alt: 'Image sdb5', 
    },
    { 
      img: 'assets/img/obras/solparquet1.webp', 
      alt: 'Image solparquet1', 
    },
    { 
      img: 'assets/img/obras/solpvc2.webp', 
      alt: 'Image solpvc2', 
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
