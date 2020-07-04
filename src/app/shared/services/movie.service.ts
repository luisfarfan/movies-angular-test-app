import { Injectable } from '@angular/core';
import { StorageService } from '../../core';
import { IDENTIFIER_MOVIES_STORAGE } from '../../const';
import { Movies, MovieSchedule } from '../interfaces/movies.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService extends StorageService {

  constructor() {
    super(IDENTIFIER_MOVIES_STORAGE);
  }

  addSchedule(movieId: string, schedule: MovieSchedule): void {
    const movie = this.get<Movies>(movieId);
    if (!Array.isArray(movie.schedules)) {
      movie.schedules = [];
    }
    movie.schedules.push(schedule);
    this.update(movieId, movie);
  }
}
