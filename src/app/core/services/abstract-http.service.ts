import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class AbstractHttpService<T> {
  private endpoint;

  constructor(private http: HttpClient) {
  }

  get(id): Observable<T> {
    return this.http.get<T>(`${this.endpoint}${id}/`);
  }

  list(): Observable<T[]> {
    return this.http.get<T[]>(this.endpoint);
  }

  update(id: number, data: Partial<T>): Observable<T> {
    return this.http.patch<T>(`${this.endpoint}${id}/`, data);
  }

  add(data: T): Observable<T> {
    return this.http.post<T>(this.endpoint, data);
  }

}
