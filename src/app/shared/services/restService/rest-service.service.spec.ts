import { environment } from './../../../../environments/environment.prod';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs';
import { alertReducer } from '../../redux/reducers/alert.reducer';

import { RestService } from './rest-service.service';

describe('RestServiceService', () => {
  let service: RestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, StoreModule.forRoot({ alert: alertReducer })
      ], providers: [Store],
    });
    service = TestBed.inject(RestService);
  });
  it('Metodo Post  instancia Observable ', () => {
    expect(service.post('', {})).toBeInstanceOf(Observable);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('Post empty and error', () => {
    service.post('', {}).subscribe(data => {
      expect(data).toBeTruthy();
    }, (error: HttpErrorResponse) => {
      expect(error.status).toBe(400);
    })
  })
  it('Post with data and no  error', () => {
    service.post(`${environment.urlApi}${environment.api.getItems}`, { getItems: { cant: 6 } }).subscribe(data => {
      expect(data.length).toBe(6);
    }, (error: HttpErrorResponse) => {
      expect(error.status).not.toBeDefined();
    })
  })
  it('Post with data and possible   error of connection', () => {
    service.post(`${environment.urlApi}${environment.api.getItems}`, { getItems: { cant: 6 } }).subscribe(data => {
      expect(data.length).toBe(6);
    }, (error: HttpErrorResponse) => {
      expect(error.status).toBe(400);
    })
  })
});
