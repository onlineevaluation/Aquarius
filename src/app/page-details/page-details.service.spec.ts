import { TestBed } from '@angular/core/testing';

import { PageDetailsService } from './page-details.service';

describe('PageDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PageDetailsService = TestBed.get(PageDetailsService);
    expect(service).toBeTruthy();
  });
});
