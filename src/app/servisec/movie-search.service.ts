import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IMoviesTv} from "../models/IMoviesTv";

@Injectable({
  providedIn: 'root'
})
export class MovieSearchService {

  private _bazeUrl='https://api.themoviedb.org/3'
  private api_key ='/?api_key=baf2249ecdf87f9614c0a7800fc3104d'

  private _urls = {
    searchMovie:'/search/movie',
    page:'&page=',
    query:'&query='
  }

  constructor(private httpClient:HttpClient) { }



  movieSearch(query:string):Observable<IMoviesTv[]>{
    return this.httpClient.get<IMoviesTv[]>(this._bazeUrl+this._urls.searchMovie+this.api_key+this._urls.query+query)
  }
  movieSearchButton(page:number,query:string):Observable<IMoviesTv[]>{
    return this.httpClient.get<IMoviesTv[]>(this._bazeUrl+this._urls.searchMovie+this.api_key+this._urls.page+page+this._urls.query+query)
  }


}
