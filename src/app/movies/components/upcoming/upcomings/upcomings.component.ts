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

  constructor(private moviesService:MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getUpcomings().subscribe(value => this.movies=value.results)
  }

}
