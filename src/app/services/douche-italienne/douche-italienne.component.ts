import { Component, Inject, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-douche-italienne',
  templateUrl: './douche-italienne.component.html',
  styleUrls: ['./douche-italienne.component.css']
})
export class DoucheItalienneComponent implements OnInit {
  constructor(
    private titleService: Title,
    private metaService: Meta,
    @Inject(DOCUMENT) private document: Document
  ) {}
ngOnInit() {
  this.titleService.setTitle('Douche Italienne - Relief');
  this.metaService.updateTag({ name: 'description', content: 'Installation de douches à l\'italienne élégantes et fonctionnelles par Relief.' });
  this.metaService.updateTag({ rel: 'canonical', href: 'https://www.reliefcarreleur.fr/douche-italienne' });
}

}
