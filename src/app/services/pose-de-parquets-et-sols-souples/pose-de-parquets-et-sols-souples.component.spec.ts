import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoseDeParquetsEtSolsSouplesComponent } from './pose-de-parquets-et-sols-souples.component';

describe('PoseDeParquetsEtSolsSouplesComponent', () => {
  let component: PoseDeParquetsEtSolsSouplesComponent;
  let fixture: ComponentFixture<PoseDeParquetsEtSolsSouplesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoseDeParquetsEtSolsSouplesComponent]
    });
    fixture = TestBed.createComponent(PoseDeParquetsEtSolsSouplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
