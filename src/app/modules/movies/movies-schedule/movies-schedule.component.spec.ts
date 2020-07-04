import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesScheduleComponent } from './movies-schedule.component';

describe('MoviesScheduleComponent', () => {
  let component: MoviesScheduleComponent;
  let fixture: ComponentFixture<MoviesScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
