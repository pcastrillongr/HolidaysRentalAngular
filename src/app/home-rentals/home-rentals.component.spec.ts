import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRentalsComponent } from './home-rentals.component';

describe('HomeRentalsComponent', () => {
  let component: HomeRentalsComponent;
  let fixture: ComponentFixture<HomeRentalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeRentalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
