import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviePageRoutingModule } from './movie-page-routing.module';
import { MoviePageComponent } from './movie-page.component';
import { LayoutModule } from '../../core';


@NgModule({
  declarations: [MoviePageComponent],
  imports: [
    CommonModule,
    MoviePageRoutingModule,
    LayoutModule
  ]
})
export class MoviePageModule {
}
