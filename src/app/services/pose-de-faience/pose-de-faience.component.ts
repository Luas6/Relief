import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
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
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}
ngOnInit() {
  this.titleService.setTitle('Pose de Faïence - Relief');
  this.metaService.updateTag({ name: 'description', content: 'Installation experte de faïence pour cuisines et salles de bain par Relief.' });
  const link: HTMLLinkElement | null = this.document.querySelector("link[rel='canonical']");
    if (link) {
      this.renderer.setAttribute(link, 'href', 'https://www.reliefcarreleur.fr/pose-de-faience');
    }
}

}
