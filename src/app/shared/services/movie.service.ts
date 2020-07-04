import { Injectable } from '@angular/core';
import { StorageService } from '../../core';
import { IDENTIFIER_MOVIES_STORAGE } from '../../const';

@Injectable({
  providedIn: 'root'
})
export class MovieService extends StorageService {

  constructor() {
    super(IDENTIFIER_MOVIES_STORAGE);
  }
}
