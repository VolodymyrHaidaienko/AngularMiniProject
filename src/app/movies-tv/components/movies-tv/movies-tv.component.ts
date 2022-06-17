import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../../servisec/movies.service";
import {IMoviesTv} from "../../../models/IMoviesTv";

@Component({
  selector: 'app-movies-tv',
  templateUrl: './movies-tv.component.html',
  styleUrls: ['./movies-tv.component.css']
})
export class MoviesTVComponent implements OnInit {

  moviesTv:IMoviesTv[]

  private pageNumber = 1

  constructor(private moviesService:MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getTvMovies(this.pageNumber).subscribe(value => this.moviesTv=value.results)
  }

  pageNext():void {
    this.pageNumber = this.pageNumber+1
    this.moviesService.getTvMovies(this.pageNumber).subscribe(value => {
      for (const valueElement of value.results) {
        this.moviesTv.push(valueElement)
      }
    })

  }


}
