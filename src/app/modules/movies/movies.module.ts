import { NgModule } from '@angular/core';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesAddEditComponent } from './movies-add-edit/movies-add-edit.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../../shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieModalService } from './movie-modal.service';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [MoviesListComponent, MoviesAddEditComponent],
  imports: [
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    SharedModule,
    MatDialogModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatSelectModule
  ],
  exports: [MoviesAddEditComponent, MoviesListComponent],
  providers: [MovieModalService]
})
export class MoviesModule {
}
