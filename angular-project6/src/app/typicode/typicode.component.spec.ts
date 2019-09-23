import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypicodeComponent } from './typicode.component';

describe('TypicodeComponent', () => {
  let component: TypicodeComponent;
  let fixture: ComponentFixture<TypicodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypicodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypicodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
