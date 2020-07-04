import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MovieService } from '../../../shared/services/movie.service';
import { Movies, MoviesStatusColor } from '../../../shared/interfaces/movies.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-movies-add-edit',
  templateUrl: './movies-add-edit.component.html',
  styleUrls: ['./movies-add-edit.component.css']
})
export class MoviesAddEditComponent implements OnInit {
  form: FormGroup;
  id: string;

  listStatus = MoviesStatusColor;
  movie: Movies;

  constructor(public dialogRef: MatDialogRef<MoviesAddEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data,
              private fb: FormBuilder,
              private movieService: MovieService,
              private snackBar: MatSnackBar) {
    if (this.data?.id) {
      this.id = this.data.id;
      this.movie = this.movieService.get(this.id);
    }

  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      name: [this.movie?.name, Validators.required],
      creation_date: [this.movie?.creation_date, Validators.required],
      status: [this.movie?.status, Validators.required],
    });
  }

  submit(): void {
    if (this.id) {
      this.movieService.update(this.id, {...this.form.getRawValue()});
    } else {
      this.movieService.add({...this.form.getRawValue(), creation_date: new Date()});
    }
    this.dialogRef.close(true);
    this.snackBar.open('Pelicula agregada con éxito!');
  }

}
