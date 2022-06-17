import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../../movies.service";
import {IMovies} from "../../../models/IMovies";


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies:IMovies[]


  private pageNumber = 1


  constructor(private moviesService:MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getMoviesPopular(this.pageNumber).subscribe(value => this.movies=value.results)
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
