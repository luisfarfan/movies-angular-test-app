import { Component, OnDestroy, OnInit } from '@angular/core';
import { MovieService } from '../../../shared/services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Movies } from '../../../shared/interfaces/movies.interface';
import { MovieModalScheduleService } from '../../../modules/movies/movie-modal-schedule.service';

@Component({
  selector: 'app-movie-schedule-page',
  templateUrl: './movie-schedule-page.component.html',
  styleUrls: ['./movie-schedule-page.component.css']
})
export class MovieSchedulePageComponent implements OnInit, OnDestroy {
  movieId: string;

  unsubscribe = new Subject();

  movie: Movies;

  constructor(private movieService: MovieService,
              private route: ActivatedRoute,
              private movieModalScheduleService: MovieModalScheduleService) {
    this.route.params
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(params => {
        this.movieId = params.id;
        this.getMovie();
      });
  }

  ngOnInit(): void {
  }

  getMovie(): void {
    this.movie = this.movieService.get(this.movieId);
  }

  async addSchedule(): Promise<void> {
    const modal = this.movieModalScheduleService.open({movieId: this.movieId});
    await modal.toPromise();
    this.getMovie();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
