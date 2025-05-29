import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

declare var bootstrap: any;  // Declaramos la variable bootstrap


@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.css']
})
export class GalerieComponent implements OnInit {
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}
  ngOnInit() {
  this.titleService.setTitle('Galerie');
  this.metaService.updateTag({ name: 'description', content: 'Découvrez nos réalisations en carrelage, faïence, parquets et plus dans notre galerie.' });
  const link: HTMLLinkElement | null = this.document.querySelector("link[rel='canonical']");
    if (link) {
      this.renderer.setAttribute(link, 'href', 'https://www.reliefcarreleur.fr/galerie');
    }
}


  obras = [
    { 
      img: 'assets/img/obras/carrelage02.webp', 
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
    }
  
  ];
  selectedImage: string = '';  // Para almacenar la imagen seleccionada

  // Función para abrir el modal de Bootstrap con la imagen seleccionada
  openImageModal(imgUrl: string): void {
    this.selectedImage = imgUrl;  // Establece la URL de la imagen seleccionada
    const modalElement = document.getElementById('imageModal'); // Obtén el modal por su ID
    const modal = new bootstrap.Modal(modalElement);  // Crea una instancia de Bootstrap Modal
    modal.show();  // Muestra el modal
  }
}
