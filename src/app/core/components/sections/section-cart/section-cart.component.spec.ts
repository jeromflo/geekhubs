import { addCart } from './../../../../shared/redux/actions/cart.actions';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { routes } from 'src/app/app-routing.module';
import { cartReducer } from 'src/app/shared/redux/reducers/cart.reducer';

import { SectionCartComponent } from './section-cart.component';

describe('SectionCartComponent', () => {
  let component: SectionCartComponent;
  let fixture: ComponentFixture<SectionCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes),
      StoreModule.forRoot({
        cart: cartReducer
      })
      ], providers: [Store],
      declarations: [SectionCartComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.ngOnDestroy()
    expect(component).toBeTruthy();
  });
  it('deleteElement(item)', () => {
    const store = TestBed.inject(Store);
    const item = {
      id: 1,
      foto: '',
      textHeader: '',
      textBody: '',
      typeAnimal: ''
    }
    store.dispatch(addCart({ value: item }))
    expect(component.items.length).toBe(1);

    component.deleteElement(item);
    expect(component.items.length).toBe(0);

  });
});
