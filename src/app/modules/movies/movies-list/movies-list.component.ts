import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  @Input() data: any[];

  displayedColumns: string[] = ['id', 'name', 'creation_date', 'status', 'buttons'];

  constructor() {
  }

  ngOnInit(): void {
  }

}
