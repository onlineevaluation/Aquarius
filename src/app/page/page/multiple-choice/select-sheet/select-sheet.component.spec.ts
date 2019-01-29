import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSheetComponent } from './select-sheet.component';

describe('SelectSheetComponent', () => {
  let component: SelectSheetComponent;
  let fixture: ComponentFixture<SelectSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
