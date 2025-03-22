import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetionsLegalesComponent } from './metions-legales.component';

describe('MetionsLegalesComponent', () => {
  let component: MetionsLegalesComponent;
  let fixture: ComponentFixture<MetionsLegalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MetionsLegalesComponent]
    });
    fixture = TestBed.createComponent(MetionsLegalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
