import {Component, Input, OnInit} from '@angular/core';
import {IMoviesTv} from "../../models/IMoviesTv";

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  @Input()
  movie:IMoviesTv


  constructor() { }

  ngOnInit(): void {
  }

}
