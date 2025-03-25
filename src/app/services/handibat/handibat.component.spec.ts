import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandibatComponent } from './handibat.component';

describe('HandibatComponent', () => {
  let component: HandibatComponent;
  let fixture: ComponentFixture<HandibatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HandibatComponent]
    });
    fixture = TestBed.createComponent(HandibatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
