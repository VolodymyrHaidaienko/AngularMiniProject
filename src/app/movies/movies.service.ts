import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IMovies} from "../models/IMovies";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private _bazeUrl='https://api.themoviedb.org/3'
  private api_key = '?api_key=baf2249ecdf87f9614c0a7800fc3104d'

  private _urls = {
    moviePopular:'/movie/popular',
    movieTopRated:'/movie/top_rated',
    movieUpcoming:'/movie/upcoming',
    singleMovie:'/movie',
    page:'&page='
  }

  constructor(private httpClient:HttpClient) { }

  getMoviesPopular(page:number):Observable<any>{
    return this.httpClient.get<any>(this._bazeUrl+this._urls.moviePopular+this.api_key+this._urls.page+page)
  }

  getMovie(id:string):Observable<any>{
    return this.httpClient.get<any>(this._bazeUrl+this._urls.singleMovie+'/'+id+this.api_key)
  }

  getTopRated(page:number):Observable<any>{
    return this.httpClient.get<any>(this._bazeUrl+this._urls.movieTopRated+this.api_key+this._urls.page+page)
  }
  getUpcoming(page:number):Observable<any>{
    return this.httpClient.get<any>(this._bazeUrl+this._urls.movieUpcoming+this.api_key+this._urls.page+page)
  }

}
