import { Component, Input, OnInit } from '@angular/core';
import { Movies, MovieSchedule } from '../../../shared/interfaces/movies.interface';

@Component({
  selector: 'app-movies-schedule',
  templateUrl: './movies-schedule.component.html',
  styleUrls: ['./movies-schedule.component.css']
})
export class MoviesScheduleComponent implements OnInit {
  @Input() movie: Movies;

  constructor() {
  }

  ngOnInit(): void {
  }

  get getFutureSchedules(): MovieSchedule[] {
    return this.movie?.schedules?.filter(s => new Date(s.datetime).getTime() >= (new Date().getTime()));
  }

  get getPassSchedules(): MovieSchedule[] {
    return this.movie?.schedules?.filter(s => new Date(s.datetime).getTime() <= (new Date().getTime()));
  }

}
