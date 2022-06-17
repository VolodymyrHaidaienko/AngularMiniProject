import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../../../movies.service";
import {IMovies} from "../../../../models/IMovies";

@Component({
  selector: 'app-upcomings',
  templateUrl: './upcomings.component.html',
  styleUrls: ['./upcomings.component.css']
})
export class UpcomingsComponent implements OnInit {

movies:IMovies[]
  private pageNumber = 1

  constructor(private moviesService:MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getUpcoming(this.pageNumber).subscribe(value => this.movies=value.results)
  }

  CountPage():void {
    this.pageNumber=this.pageNumber+1
    this.moviesService.getMoviesPopular(this.pageNumber).subscribe(value => {
      for (const valueElement of value.results) {
        this.movies.push(valueElement)
      }
    })
  }

}
