import { closeAlert, setAlert } from './../../redux/actions/alert.actions';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { AlertInterface } from '../../interfaces/alert';
import { alertReducer } from '../../redux/reducers/alert.reducer';

import { AlertComponent } from './alert.component';

describe('AlertComponent', () => {
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          alert: alertReducer
        })
      ], providers: [Store],
      declarations: [AlertComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    let alert: AlertInterface = {
      icon: 'info',
      tittle: 'Cargando',
      timerProgressBar: true,
    }
    const store = TestBed.inject(Store);
    store.dispatch(setAlert({ value: alert }));
    store.dispatch(closeAlert());
    component.ngOnDestroy()
    expect(component).toBeTruthy();
  });
  xit('')
});
