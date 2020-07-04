import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { MoviesAddEditComponent } from './movies-add-edit/movies-add-edit.component';

@Injectable()
export class MovieModalService {

  constructor(private matDialog: MatDialog) {
  }

  open<T>(data?: any): Observable<T> {
    const dialogRef = this.matDialog.open(MoviesAddEditComponent, {
      data
    });
    return dialogRef.afterClosed();
  }
}
