import { Component } from '@angular/core';

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.css']
})
export class GalerieComponent {
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

}
