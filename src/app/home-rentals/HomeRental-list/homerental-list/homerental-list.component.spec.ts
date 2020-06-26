import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomerentalListComponent } from './homerental-list.component';

describe('HomerentalListComponent', () => {
  let component: HomerentalListComponent;
  let fixture: ComponentFixture<HomerentalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomerentalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomerentalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
