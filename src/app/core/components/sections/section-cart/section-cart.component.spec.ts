import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCartComponent } from './section-cart.component';

describe('SectionCartComponent', () => {
  let component: SectionCartComponent;
  let fixture: ComponentFixture<SectionCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
