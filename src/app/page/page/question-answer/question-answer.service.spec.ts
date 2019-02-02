import { TestBed } from '@angular/core/testing';

import { QuestionAnswerService } from './question-answer.service';

describe('QuestionAnswerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestionAnswerService = TestBed.get(QuestionAnswerService);
    expect(service).toBeTruthy();
  });
});
