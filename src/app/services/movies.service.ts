import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseMDB } from '../interface/movies.interfaces';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private httpClient: HttpClient) {}

  getLastMovies(): Observable<ResponseMDB> {
    return this.httpClient.get<ResponseMDB>(
      'https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2022-06-14&primary_release_date.lte=2022-07-14&api_key=5ad2adbd7717056d22083c73226d0880&language=es&include_image_language=es'
    );
  }

  getLastMoviesPromise(): Promise<ResponseMDB> {
    return new Promise<ResponseMDB>((resolve, reject) => {
      this.httpClient.get<ResponseMDB>(
        'https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2022-06-14&primary_release_date.lte=2022-07-14&api_key=5ad2adbd7717056d22083c73226d0880&language=es&include_image_language=es'
      ).subscribe(response => {
        console.log(response);
        resolve(response)
      })
      
    })
  }
}
