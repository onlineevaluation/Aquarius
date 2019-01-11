import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamItemComponent } from './exam-item.component';

describe('ExamItemComponent', () => {
  let component: ExamItemComponent;
  let fixture: ComponentFixture<ExamItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
