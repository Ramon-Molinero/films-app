import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseMDB } from '../interface/movies.interfaces';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private url: string = environment.url;
  private apiKey: string = environment.apiKey;
  private languaje: string = environment.languaje;

  constructor(private httpClient: HttpClient) {}

  private sectionMovieQuery<T>(section: string, params: string): Observable<ResponseMDB> {
    section = '/discover/movie?';
    params = `${section}&api_key=${this.apiKey}&language=${this.languaje}&include_image_language=${this.languaje}`;

    return this.httpClient.get<ResponseMDB>(
      this.url  + params
    );
  }
  


  getLastMovies(): Observable<ResponseMDB> {
    const today = new Date();
    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1).getDate();
    const month = today.getMonth() + 1;

    let monthString;

    if (month < 10) monthString = '0' + month;
    else monthString = month;

    const initDate = `${today.getFullYear()}-${monthString}-01`;
    const endDate = `${today.getFullYear()}-${monthString}-${lastDay}`;

    return this.sectionMovieQuery<ResponseMDB>(
      '/discover/movie?',
      `primary_release_date.gte=${initDate}&primary_release_date.lte=${endDate}`
    );

  }

  getLastMoviesPromise(): Promise<ResponseMDB> {
    return new Promise<ResponseMDB>((resolve, reject) => {
      const today = new Date();
      var endDate = today.toLocaleDateString('en-ZA');
      var initDate = new Date(
        new Date().setDate(today.getDate() - 30)
      ).toLocaleDateString('en-ZA');

      endDate = 'primary_release_date.lte=' + endDate.split('/').join('-');
      initDate = 'primary_release_date.gte=' + initDate.split('/').join('-');

      this.sectionMovieQuery<ResponseMDB>('/discover/movie?', `${endDate}&${initDate}`)
        .subscribe((response) => resolve(response));
    });
  }
}
