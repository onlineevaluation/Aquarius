import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvtorComponent } from './avtor.component';

describe('AvtorComponent', () => {
  let component: AvtorComponent;
  let fixture: ComponentFixture<AvtorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvtorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvtorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
