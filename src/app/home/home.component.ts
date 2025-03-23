import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  slides = [
    { 
      img: 'assets/img/hucha.svg', 
      alt: 'Économisez de l\'argent', 
      title: 'Économisez de l\'argent', 
      description: 'Devis gratuit, contactez-nous.' 
    },
    { 
      img: 'assets/img/tool.svg', 
      alt: 'Professionnalisme', 
      title: 'Professionnalisme', 
      description: 'Conseils personnalisés et adaptes aux différents besoins et budgets' 
    },
    { 
      img: 'assets/img/calendar.svg', 
      alt: 'Rapidité', 
      title: 'Rapidité', 
      description: 'Nous effectuons les travaux rapidement et efficacement' 
    },
    { 
      img: 'assets/img/place.svg', 
      alt: 'Image 4', 
      title: 'Travail soigné, respect des délais', 
      description: 'Interventions jusqu\'à 50 km autour de Pau et Nay'
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
