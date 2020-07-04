import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSchedulePageComponent } from './movie-schedule-page.component';

describe('MovieSchedulePageComponent', () => {
  let component: MovieSchedulePageComponent;
  let fixture: ComponentFixture<MovieSchedulePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieSchedulePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSchedulePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
