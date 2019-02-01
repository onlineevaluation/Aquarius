import { TestBed } from '@angular/core/testing';

import { GapFillingService } from './gap-filling.service';

describe('GapFillingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GapFillingService = TestBed.get(GapFillingService);
    expect(service).toBeTruthy();
  });
});
