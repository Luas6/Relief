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
      alt: 'Image 1', 
      title: 'Économisez de l\'argent', 
      description: 'Demandez votre devis sans engagement' 
    },
    { 
      img: 'assets/img/tool.svg', 
      alt: 'Image 2', 
      title: 'Professionnalisme', 
      description: 'Nous réalisons les travaux avec la plus haute qualité' 
    },
    { 
      img: 'assets/img/calendar.svg', 
      alt: 'Image 3', 
      title: 'Rapidité', 
      description: 'Nous effectuons les travaux rapidement et efficacement' 
    }
    
  ];

  customOptions = {
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
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
        items: 3
      }
    }
  };
}
