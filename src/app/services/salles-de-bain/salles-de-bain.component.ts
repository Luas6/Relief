import { Component } from '@angular/core';

declare var bootstrap: any;  // Declaramos la variable bootstrap


@Component({
  selector: 'app-salles-de-bain',
  templateUrl: './salles-de-bain.component.html',
  styleUrls: ['./salles-de-bain.component.css']
})
export class SallesDeBainComponent {
  obras = [
    { 
      img: 'assets/img/obras/sallebain1.webp', 
      alt: 'Image Salle de bain 1', 
    },
    { 
      img: 'assets/img/obras/sallebain2.webp', 
      alt: 'Image Salle de bain 2', 
    },
    { 
      img: 'assets/img/obras/sdb1.webp', 
      alt: 'Image Salle de bain 3', 
    },
    { 
      img: 'assets/img/obras/sdb2.webp', 
      alt: 'Image Salle de bain 4', 
    },
    { 
      img: 'assets/img/obras/sdb3.webp', 
      alt: 'Image Salle de bain 5', 
    },
    { 
      img: 'assets/img/obras/sdb4.webp', 
      alt: 'Image Salle de bain 6', 
    }
  ]

  selectedImage: string = '';  // Para almacenar la imagen seleccionada

  // Función para abrir el modal de Bootstrap con la imagen seleccionada
  openImageModal(imgUrl: string): void {
    this.selectedImage = imgUrl;  // Establece la URL de la imagen seleccionada
    const modalElement = document.getElementById('imageModal'); // Obtén el modal por su ID
    const modal = new bootstrap.Modal(modalElement);  // Crea una instancia de Bootstrap Modal
    modal.show();  // Muestra el modal
  }
}
