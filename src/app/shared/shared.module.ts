import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MovieStatusPipe } from './pipes/movie-status.pipe';


@NgModule({
  declarations: [MovieStatusPipe],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [FlexLayoutModule, CommonModule, MovieStatusPipe]
})
export class SharedModule {
}
