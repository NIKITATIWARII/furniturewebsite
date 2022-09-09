import { ComponentFixture, TestBed } from '@angular/core/testing';

import { City3placesComponent } from './city3places.component';

describe('City3placesComponent', () => {
  let component: City3placesComponent;
  let fixture: ComponentFixture<City3placesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ City3placesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(City3placesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
