import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MoviesService} from "../../movies.service";
import {IMovie} from "../../../models/IMovie";


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie:IMovie

  constructor(private activatedRoute: ActivatedRoute,
              private moviesService:MoviesService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) =>{
      this.moviesService.getMovie(id).subscribe(value => this.movie=value)

    } )

  }

}
