import { ComponentFixture, TestBed } from '@angular/core/testing';

import { City3Component } from './city3.component';

describe('City3Component', () => {
  let component: City3Component;
  let fixture: ComponentFixture<City3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ City3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(City3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
