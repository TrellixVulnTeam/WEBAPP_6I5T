import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TableElement } from '../interface/tableElement';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private myAppUrl = 'https://localhost:5001/';
  private myApiUrl = 'api/movie/';

  constructor(private http: HttpClient) { }

  getListMovies(): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }

  deleteMovie(id: number): Observable<any> {
    return this.http.delete(this.myAppUrl + this.myApiUrl + id);
  }

  saveMovie(movie: TableElement): Observable<any> {
    return this.http.post(this.myAppUrl + this.myApiUrl, movie);
  }

  updateMovie(movie: TableElement): Observable<any> {
    return this.http.put(this.myAppUrl + this.myApiUrl + movie.id, movie);
  }
}
