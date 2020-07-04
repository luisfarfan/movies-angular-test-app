import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MovieModalService } from '../movie-modal.service';
import { ConfirmService } from '../../../shared/components/confirm/confirm.service';
import { MovieService } from '../../../shared/services/movie.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  @Input() data: any[];

  displayedColumns: string[] = ['id', 'name', 'creation_date', 'status', 'buttons'];
  @Output() dataChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() dataDeleted: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private movieModalService: MovieModalService,
              private confirmService: ConfirmService,
              private movieService: MovieService) {
  }

  ngOnInit(): void {
  }

  async edit(id: string): Promise<void> {
    const modal = this.movieModalService.open({id});
    const response = await modal.toPromise();
    this.dataChanged.emit(!!response);
  }

  async delete(id: string): Promise<void> {
    const modal = this.confirmService.confirm();
    const response = await modal.toPromise();
    if (response) {
      this.movieService.delete(id);
    }
    this.dataDeleted.emit(!!response);
  }

}
