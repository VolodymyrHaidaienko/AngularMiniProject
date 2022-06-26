import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _bazeUrl='https://api.themoviedb.org/3'
  private api_key = '?api_key=baf2249ecdf87f9614c0a7800fc3104d'

  private _urls = {
    token:'/authentication/token/new',
    movieTopRated:'/movie/top_rated',
    movieUpcoming:'/movie/upcoming',
    singleMovie:'/movie',
    page:'&page='
  }

  constructor(private httpClient:HttpClient) { }

  registerClient():Observable<any>{
    return this.httpClient.get<any>(this._bazeUrl+this._urls.token+this.api_key)
  }


}
