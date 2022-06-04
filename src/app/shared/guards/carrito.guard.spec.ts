import { TestBed } from '@angular/core/testing';

import { CarritoGuard } from './carrito.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from 'src/app/app-routing.module';
import { Store, StoreModule } from '@ngrx/store';
import { cartReducer } from '../redux/reducers/cart.reducer';
import { addCart } from '../redux/actions/cart.actions';

describe('CarritoGuard', () => {
  let guard: CarritoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes),
      StoreModule.forRoot({
        cart: cartReducer
      })
      ], providers: [Store],
    });
    guard = TestBed.inject(CarritoGuard);
  });

  it('should be created', () => {
    guard.ngOnDestroy()
    expect(guard).toBeTruthy();
  });
  it('canActivate witouth items be false', () => {

    expect(guard.canActivate()).toBeFalsy();
  })
  it('canActivate witouth items be false', () => {
    const store = TestBed.inject(Store);
    const item = {
      id: 1,
      foto: '',
      textHeader: '',
      textBody: '',
      typeAnimal: ''
    }
    store.dispatch(addCart({ value: item }))
    expect(guard.canActivate()).toBeTruthy();
  })
});
