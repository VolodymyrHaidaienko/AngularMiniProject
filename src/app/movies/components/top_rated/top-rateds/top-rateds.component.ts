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

  private pageNumber = 1

  constructor(private moviesService:MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getTopRated(this.pageNumber).subscribe(value => this.topRatedMovies=value.results)
  }

  CountPage():void {
    this.pageNumber=this.pageNumber+1
    this.moviesService.getMoviesPopular(this.pageNumber).subscribe(value => {
      for (const valueElement of value.results) {
        this.topRatedMovies.push(valueElement)
      }
    })
  }

}
