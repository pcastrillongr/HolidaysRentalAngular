import { TestBed } from '@angular/core/testing';

import { HomerentalsService } from './homerentals.service';

describe('HomerentalsService', () => {
  let service: HomerentalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomerentalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
