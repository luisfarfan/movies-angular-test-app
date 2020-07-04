import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviePageRoutingModule } from './movie-page-routing.module';
import { MoviePageComponent } from './movie-page.component';
import { LayoutModule } from '../../core';
import { MoviesModule } from '../../modules/movies/movies.module';
import { SharedModule } from '../../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MovieSchedulePageComponent } from './movie-schedule-page/movie-schedule-page.component';


@NgModule({
  declarations: [MoviePageComponent, MovieSchedulePageComponent],
  imports: [
    MoviePageRoutingModule,
    LayoutModule,
    MoviesModule,
    SharedModule,
    MatButtonModule
  ]
})
export class MoviePageModule {
}
