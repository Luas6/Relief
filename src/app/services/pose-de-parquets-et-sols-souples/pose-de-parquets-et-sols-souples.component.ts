import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-pose-de-parquets-et-sols-souples',
  templateUrl: './pose-de-parquets-et-sols-souples.component.html',
  styleUrls: ['./pose-de-parquets-et-sols-souples.component.css']
})
export class PoseDeParquetsEtSolsSouplesComponent implements OnInit {
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}
ngOnInit() {
  this.titleService.setTitle('Pose de Parquets et Sols Souples - Relief');
  this.metaService.updateTag({ name: 'description', content: 'Pose de parquets, sols souples et PVC sur mesure par Relief.' });
  const link: HTMLLinkElement | null = this.document.querySelector("link[rel='canonical']");
    if (link) {
      this.renderer.setAttribute(link, 'href', 'https://www.reliefcarreleur.fr/pose-de-parquets-et-sols-souples');
    }
}

}
