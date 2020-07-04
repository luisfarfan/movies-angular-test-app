import { Pipe, PipeTransform } from '@angular/core';
import { MoviesStatus, MoviesStatusColor } from '../interfaces/movies.interface';

@Pipe({
  name: 'movieStatus'
})
export class MovieStatusPipe implements PipeTransform {
  movieStatus = MoviesStatusColor;

  transform(value: unknown, ...args: unknown[]): { name: string, color: string } {
    const movieStatus = this.movieStatus.find(d => d.status === value);
    return {
      name: movieStatus.status === MoviesStatus.ACTIVO ? 'Activo' : 'Inactivo',
      color: movieStatus.color
    };
  }

}
