import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Main1ItemComponent } from './main1-item.component';

describe('Main1ItemComponent', () => {
  let component: Main1ItemComponent;
  let fixture: ComponentFixture<Main1ItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Main1ItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Main1ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
