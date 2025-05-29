import { Component, Inject, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-pose-de-faience',
  templateUrl: './pose-de-faience.component.html',
  styleUrls: ['./pose-de-faience.component.css']
})
export class PoseDeFaienceComponent implements OnInit {
  constructor(
    private titleService: Title,
    private metaService: Meta,
    @Inject(DOCUMENT) private document: Document
  ) {}
ngOnInit() {
  this.titleService.setTitle('Pose de Faïence - Relief');
  this.metaService.updateTag({ name: 'description', content: 'Installation experte de faïence pour cuisines et salles de bain par Relief.' });
  this.metaService.updateTag({ rel: 'canonical', href: 'https://www.reliefcarreleur.fr/pose-de-faience' });
}

}
