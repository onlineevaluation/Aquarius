import { TestBed } from '@angular/core/testing';

import { MultipleChoiceService } from './multiple-choice.service';

describe('MultipleChoiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MultipleChoiceService = TestBed.get(MultipleChoiceService);
    expect(service).toBeTruthy();
  });
});
