import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRentalComponent } from './home-rental.component';

describe('HomeRentalComponent', () => {
  let component: HomeRentalComponent;
  let fixture: ComponentFixture<HomeRentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeRentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
