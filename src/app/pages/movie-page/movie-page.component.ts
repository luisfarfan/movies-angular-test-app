import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../shared/services/movie.service';
import { Movies } from '../../shared/interfaces/movies.interface';
import { MovieModalService } from '../../modules/movies/movie-modal.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {
  movies: Movies[];

  constructor(private movieService: MovieService,
              private movieModalService: MovieModalService) {

  }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.movies = this.movieService.list();
  }

  async addMovie(): Promise<void> {
    const modal = this.movieModalService.open();
    const response = await modal.toPromise();
    if (response) {
      this.getMovies();
    }
  }

}
