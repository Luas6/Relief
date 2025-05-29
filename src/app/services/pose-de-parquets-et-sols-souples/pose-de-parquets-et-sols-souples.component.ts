import { Component, Inject, OnInit } from '@angular/core';
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
    @Inject(DOCUMENT) private document: Document
  ) {}
ngOnInit() {
  this.titleService.setTitle('Pose de Parquets et Sols Souples - Relief');
  this.metaService.updateTag({ name: 'description', content: 'Pose de parquets, sols souples et PVC sur mesure par Relief.' });
  this.metaService.updateTag({ rel: 'canonical', href: 'https://www.reliefcarreleur.fr/pose-de-parquets-et-sols-souples' });
}

}
