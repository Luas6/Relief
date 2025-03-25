import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoseDeFaienceComponent } from './pose-de-faience.component';

describe('PoseDeFaienceComponent', () => {
  let component: PoseDeFaienceComponent;
  let fixture: ComponentFixture<PoseDeFaienceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoseDeFaienceComponent]
    });
    fixture = TestBed.createComponent(PoseDeFaienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
