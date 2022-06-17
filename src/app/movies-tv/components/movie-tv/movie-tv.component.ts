import {Component, Input, OnInit} from '@angular/core';
import {IMoviesTv} from "../../../models/IMoviesTv";

@Component({
  selector: 'app-movie-tv',
  templateUrl: './movie-tv.component.html',
  styleUrls: ['./movie-tv.component.css']
})
export class MovieTVComponent implements OnInit {
  @Input()
  movie: IMoviesTv

  constructor() {
  }

  ngOnInit(): void {
  }

}
