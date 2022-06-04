import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs';
import { routes } from 'src/app/app-routing.module';
import { cartReducer } from 'src/app/shared/redux/reducers/cart.reducer';
import { disabledButtonReducer } from 'src/app/shared/redux/reducers/disabledButton.reducer';
import { paginationReducer } from 'src/app/shared/redux/reducers/pagination.reducer';
import { RestService } from 'src/app/shared/services/restService/rest-service.service';

import { SectionMainComponent } from './section-main.component';

describe('SectionMainComponent', () => {
  let component: SectionMainComponent;
  let fixture: ComponentFixture<SectionMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes), HttpClientTestingModule,
      StoreModule.forRoot({
        cart: cartReducer,
        pagination: paginationReducer,
        disabledButton: disabledButtonReducer
      })
      ], providers: [Store, RestService],
      declarations: [SectionMainComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.next();
    component.back();
    component.ngOnDestroy()
    expect(component).toBeTruthy();
  });
  it('addCart() items 1', () => {
    const store = TestBed.inject(Store);
    const item = {
      id: 1,
      foto: '',
      textHeader: '',
      textBody: '',
      typeAnimal: ''
    }
    component.addCart(item);
    store.select('cart').subscribe(cart => {
      expect(cart.length).toBe(1);
    })
  })
  it('addCart() items callFake 1', () => {
    const store = TestBed.inject(Store);
    const item = {
      id: 1,
      foto: '',
      textHeader: '',
      textBody: '',
      typeAnimal: ''
    }
    const service = TestBed.inject(RestService);
    spyOn(service, 'post').and.callFake(() => { return new Observable(observer => observer.next([item])) })
    component.next();
    expect(component.items.length).toBe(1);
  })
});
