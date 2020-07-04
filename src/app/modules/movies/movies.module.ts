import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesAddEditComponent } from './movies-add-edit/movies-add-edit.component';


@NgModule({
  declarations: [MoviesListComponent, MoviesAddEditComponent],
  imports: [
    CommonModule
  ],
  exports: [MoviesAddEditComponent, MoviesListComponent]
})
export class MoviesModule {
}
