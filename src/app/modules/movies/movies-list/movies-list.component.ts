import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MovieModalService } from '../movie-modal.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  @Input() data: any[];

  displayedColumns: string[] = ['id', 'name', 'creation_date', 'status', 'buttons'];
  @Output() dataChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private movieModalService: MovieModalService) {
  }

  ngOnInit(): void {
  }

  async edit(id: string): Promise<void> {
    const modal = this.movieModalService.open({id});
    const response = await modal.toPromise();
    this.dataChanged.emit(!!response);
  }

}
