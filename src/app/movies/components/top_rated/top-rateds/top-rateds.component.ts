import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../../../movies.service";
import {IMovies} from "../../../../models/IMovies";

@Component({
  selector: 'app-top-rateds',
  templateUrl: './top-rateds.component.html',
  styleUrls: ['./top-rateds.component.css']
})
export class TopRatedsComponent implements OnInit {

  topRatedMovies:IMovies[]

  constructor(private moviesService:MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getTopRated().subscribe(value => this.topRatedMovies=value.results)
  }

}
