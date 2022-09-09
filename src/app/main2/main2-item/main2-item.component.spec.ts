import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Main2ItemComponent } from './main2-item.component';

describe('Main2ItemComponent', () => {
  let component: Main2ItemComponent;
  let fixture: ComponentFixture<Main2ItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Main2ItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Main2ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
