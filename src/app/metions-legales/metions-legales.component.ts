import { Component, Inject, OnInit } from '@angular/core';
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
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Mentions Légales - Relief');
    this.metaService.updateTag({ name: 'description', content: 'Consultez les mentions légales de Relief Carreleur à Nay et Pau.' });
    this.metaService.updateTag({ rel: 'canonical', href: 'https://www.reliefcarreleur.fr/mentions-legales' });  }
}
