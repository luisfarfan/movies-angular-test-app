import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviePageComponent } from './movie-page.component';
import { MovieSchedulePageComponent } from './movie-schedule-page/movie-schedule-page.component';


const routes: Routes = [
  {
    path: '',
    component: MoviePageComponent
  },
  {
    path: 'movie/:id',
    component: MovieSchedulePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviePageRoutingModule {
}
