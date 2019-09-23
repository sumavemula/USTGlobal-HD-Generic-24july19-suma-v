import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrynewsComponent } from './countrynews.component';

describe('CountrynewsComponent', () => {
  let component: CountrynewsComponent;
  let fixture: ComponentFixture<CountrynewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountrynewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrynewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
