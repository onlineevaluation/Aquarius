import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GapFillingComponent } from './gap-filling.component';

describe('GapFillingComponent', () => {
  let component: GapFillingComponent;
  let fixture: ComponentFixture<GapFillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GapFillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GapFillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
