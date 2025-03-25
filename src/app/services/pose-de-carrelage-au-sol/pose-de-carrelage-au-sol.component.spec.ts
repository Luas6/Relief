import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoseDeCarrelageAuSolComponent } from './pose-de-carrelage-au-sol.component';

describe('PoseDeCarrelageAuSolComponent', () => {
  let component: PoseDeCarrelageAuSolComponent;
  let fixture: ComponentFixture<PoseDeCarrelageAuSolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoseDeCarrelageAuSolComponent]
    });
    fixture = TestBed.createComponent(PoseDeCarrelageAuSolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
