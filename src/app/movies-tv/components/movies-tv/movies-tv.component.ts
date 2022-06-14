import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../../servisec/movies.service";
import {IMovies} from "../../../models/IMovies";

@Component({
  selector: 'app-movies-tv',
  templateUrl: './movies-tv.component.html',
  styleUrls: ['./movies-tv.component.css']
})
export class MoviesTVComponent implements OnInit {

  moviesTv:IMovies[]

  constructor(private moviesService:MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getTvMovies().subscribe(value => this.moviesTv=value.results)
  }

}
