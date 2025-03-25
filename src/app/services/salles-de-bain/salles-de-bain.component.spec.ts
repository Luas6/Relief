import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SallesDeBainComponent } from './salles-de-bain.component';

describe('SallesDeBainComponent', () => {
  let component: SallesDeBainComponent;
  let fixture: ComponentFixture<SallesDeBainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SallesDeBainComponent]
    });
    fixture = TestBed.createComponent(SallesDeBainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
