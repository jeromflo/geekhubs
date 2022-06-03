import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberElementsComponent } from './number-elements.component';

describe('NumberElementsComponent', () => {
  let component: NumberElementsComponent;
  let fixture: ComponentFixture<NumberElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberElementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
