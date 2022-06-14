import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../../movies.service";
import {IMovies} from "../../../models/IMovies";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies:IMovies[]

  constructor(private moviesService:MoviesService) { }

  ngOnInit(): void {


    this.moviesService.getMoviesPopular().subscribe(value => this.movies=value.results)

  }

}
