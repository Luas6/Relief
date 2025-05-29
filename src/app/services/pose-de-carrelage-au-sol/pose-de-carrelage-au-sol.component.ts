import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-pose-de-carrelage-au-sol',
  templateUrl: './pose-de-carrelage-au-sol.component.html',
  styleUrls: ['./pose-de-carrelage-au-sol.component.css']
})
export class PoseDeCarrelageAuSolComponent implements OnInit {
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}
ngOnInit() {
  this.titleService.setTitle('Pose de Carrelage au Sol');
  this.metaService.updateTag({ name: 'description', content: 'Pose professionnelle de carrelage au sol par Relief à Nay et Pau.' });
  const link: HTMLLinkElement | null = this.document.querySelector("link[rel='canonical']");
    if (link) {
      this.renderer.setAttribute(link, 'href', 'https://www.reliefcarreleur.fr/pose-de-carrelage-au-sol');
    }
}

}
