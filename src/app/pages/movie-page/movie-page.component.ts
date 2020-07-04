import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../shared/services/movie.service';
import { Movies } from '../../shared/interfaces/movies.interface';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {
  movies: Movies[];

  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {
  }

}
