import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankSheetComponent } from './blank-sheet.component';

describe('BlankSheetComponent', () => {
  let component: BlankSheetComponent;
  let fixture: ComponentFixture<BlankSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlankSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlankSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
