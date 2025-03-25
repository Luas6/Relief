import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoucheItalienneComponent } from './douche-italienne.component';

describe('DoucheItalienneComponent', () => {
  let component: DoucheItalienneComponent;
  let fixture: ComponentFixture<DoucheItalienneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoucheItalienneComponent]
    });
    fixture = TestBed.createComponent(DoucheItalienneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
