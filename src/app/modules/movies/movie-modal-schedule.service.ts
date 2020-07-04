import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { MoviesAddEditComponent } from './movies-add-edit/movies-add-edit.component';
import { MovieScheduleAddComponent } from './movie-schedule-add/movie-schedule-add.component';

@Injectable({
  providedIn: 'root'
})
export class MovieModalScheduleService {

  constructor(private matDialog: MatDialog) {
  }

  open<T>(data?: any): Observable<T> {
    const dialogRef = this.matDialog.open(MovieScheduleAddComponent, {
      data
    });
    return dialogRef.afterClosed();
  }
}
