import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-metions-legales',
  templateUrl: './metions-legales.component.html',
  styleUrls: ['./metions-legales.component.css']
})
export class MetionsLegalesComponent implements OnInit {
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Mentions Légales');
    this.metaService.updateTag({ name: 'description', content: 'Consultez les mentions légales de Relief Carreleur à Nay et Pau.' });
    const link: HTMLLinkElement | null = this.document.querySelector("link[rel='canonical']");
    if (link) {
      this.renderer.setAttribute(link, 'href', 'https://www.reliefcarreleur.fr/mentions-legales');
    }

  }
}
