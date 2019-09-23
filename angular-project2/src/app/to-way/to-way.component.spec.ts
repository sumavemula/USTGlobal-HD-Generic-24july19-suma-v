import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToWayComponent } from './to-way.component';

describe('ToWayComponent', () => {
  let component: ToWayComponent;
  let fixture: ComponentFixture<ToWayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToWayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
