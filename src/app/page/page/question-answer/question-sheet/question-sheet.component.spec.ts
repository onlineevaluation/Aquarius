import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionSheetComponent } from './question-sheet.component';

describe('QuestionSheetComponent', () => {
  let component: QuestionSheetComponent;
  let fixture: ComponentFixture<QuestionSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
