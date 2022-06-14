import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private _bazeUrl='https://api.themoviedb.org/3'
  private api_key = '/?api_key=baf2249ecdf87f9614c0a7800fc3104d'
  private _urls = {
    moviePopular:'/movie/popular',

  }

  constructor(private httpClient:HttpClient) { }


  getTvMovies():Observable<any>{
    return this.httpClient.get<any>(this._bazeUrl+this._urls.moviePopular+this.api_key)
  }
}