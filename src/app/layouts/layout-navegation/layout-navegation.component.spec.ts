import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { disabledButton } from 'src/app/shared/redux/actions/disabledButton.actions';
import { disabledButtonReducer } from 'src/app/shared/redux/reducers/disabledButton.reducer';
import { paginationReducer } from 'src/app/shared/redux/reducers/pagination.reducer';

import { LayoutNavegationComponent } from './layout-navegation.component';

describe('LayoutNavegationComponent', () => {
  let component: LayoutNavegationComponent;
  let fixture: ComponentFixture<LayoutNavegationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          pagination: paginationReducer,
          disabledButton: disabledButtonReducer
        })
      ], providers: [Store],

      declarations: [LayoutNavegationComponent]
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
  it('position up to be 1', () => {
    component.next();
    expect(component.position).toBe(1);
  });
  it('position down to be 1', () => {
    component.next();
    component.next();
    component.back();

    expect(component.position).toBe(1);

  });
  it('disabled true', () => {
    const store = TestBed.inject(Store);
    store.dispatch(disabledButton())
    expect(component).toBeTruthy();

  });
});
