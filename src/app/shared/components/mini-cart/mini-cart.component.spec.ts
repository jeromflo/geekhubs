import { routes } from 'src/app/app-routing.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MiniCartComponent } from './mini-cart.component';
import { Store, StoreModule } from '@ngrx/store';
import { cartReducer } from '../../redux/reducers/cart.reducer';
import { addCart, remove } from '../../redux/actions/cart.actions';

describe('MiniCartComponent', () => {
  let component: MiniCartComponent;
  let fixture: ComponentFixture<MiniCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes),
      StoreModule.forRoot({
        cart: cartReducer
      })
      ], providers: [Store],
      declarations: [MiniCartComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.verCarrito();
    component.ngOnDestroy()
    expect(component).toBeTruthy();
  });
  it('items 0', () => {
    expect(component.getLenth()).toBe(0);
  });
  it('items 1', () => {
    const store = TestBed.inject(Store);
    const item = {
      id: 1,
      foto: '',
      textHeader: '',
      textBody: '',
      typeAnimal: ''
    }
    store.dispatch(addCart({ value: item }))
    expect(component.getLenth()).toBe(1);
  });
  it('items 1 delete 1 to be 0', () => {
    const store = TestBed.inject(Store);
    const item = {
      id: 1,
      foto: '',
      textHeader: '',
      textBody: '',
      typeAnimal: ''
    }
    store.dispatch(addCart({ value: item }))
    component.deleteElement(item)
    expect(component.getLenth()).toBe(0);
  });
});
