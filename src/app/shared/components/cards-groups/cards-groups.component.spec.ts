import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsGroupsComponent } from './cards-groups.component';

describe('CardsGroupsComponent', () => {
  let component: CardsGroupsComponent;
  let fixture: ComponentFixture<CardsGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsGroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
