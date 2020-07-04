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
import { ConfirmModule } from '../../shared/components/confirm/confirm.module';
import { MoviesScheduleComponent } from './movies-schedule/movies-schedule.component';
import { MatListModule } from '@angular/material/list';
import { MovieScheduleAddComponent } from './movie-schedule-add/movie-schedule-add.component';
import { NgxMatDatetimePickerModule, NgxMatNativeDateModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RouterModule } from '@angular/router';
import { MovieModalScheduleService } from './movie-modal-schedule.service';


@NgModule({
  declarations: [MoviesListComponent, MoviesAddEditComponent, MoviesScheduleComponent, MovieScheduleAddComponent],
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
    MatSelectModule,
    ConfirmModule,
    MatListModule,
    MatDatepickerModule,
    RouterModule,
  ],
  exports: [MoviesAddEditComponent, MoviesListComponent, MovieScheduleAddComponent, MoviesScheduleComponent],
  providers: [MovieModalService, MovieModalScheduleService]
})
export class MoviesModule {
}
