import { NgModule } from '@angular/core';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesAddEditComponent } from './movies-add-edit/movies-add-edit.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../../shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [MoviesListComponent, MoviesAddEditComponent],
  imports: [
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    SharedModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  exports: [MoviesAddEditComponent, MoviesListComponent]
})
export class MoviesModule {
}
