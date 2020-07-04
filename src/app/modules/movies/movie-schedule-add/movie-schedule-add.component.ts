import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieService } from '../../../shared/services/movie.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-movie-schedule-add',
  templateUrl: './movie-schedule-add.component.html',
  styleUrls: ['./movie-schedule-add.component.css']
})
export class MovieScheduleAddComponent implements OnInit {
  form: FormGroup;
  movieId: string;

  constructor(public dialogRef: MatDialogRef<MovieScheduleAddComponent>,
              @Inject(MAT_DIALOG_DATA) public data,
              private fb: FormBuilder,
              private movieService: MovieService,
              private snackBar: MatSnackBar) {
    this.movieId = this.data.movieId;

  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      datetime: [null, Validators.required]
    });
  }

  submit(): void {
    const date = new Date();
    const localCompleteDate = date.toISOString();
    const datetime = localCompleteDate.substring(0, localCompleteDate.length - 1);
    this.movieService.addSchedule(this.movieId, {datetime});
    this.dialogRef.close(true);
  }

}
