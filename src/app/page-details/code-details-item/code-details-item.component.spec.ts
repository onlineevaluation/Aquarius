import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeDetailsItemComponent } from './code-details-item.component';

describe('CodeDetailsItemComponent', () => {
  let component: CodeDetailsItemComponent;
  let fixture: ComponentFixture<CodeDetailsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeDetailsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeDetailsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
