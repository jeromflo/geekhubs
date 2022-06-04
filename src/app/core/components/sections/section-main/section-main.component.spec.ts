import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { routes } from 'src/app/app-routing.module';
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
    expect(component).toBeTruthy();
  });
});
