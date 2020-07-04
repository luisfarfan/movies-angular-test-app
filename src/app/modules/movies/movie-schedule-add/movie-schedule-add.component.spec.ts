import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieScheduleAddComponent } from './movie-schedule-add.component';

describe('MovieScheduleAddComponent', () => {
  let component: MovieScheduleAddComponent;
  let fixture: ComponentFixture<MovieScheduleAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieScheduleAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieScheduleAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
