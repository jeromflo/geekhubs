import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutNavegationComponent } from './layout-navegation.component';

describe('LayoutNavegationComponent', () => {
  let component: LayoutNavegationComponent;
  let fixture: ComponentFixture<LayoutNavegationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutNavegationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutNavegationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
