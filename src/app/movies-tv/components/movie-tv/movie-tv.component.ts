import {Component, Input, OnInit} from '@angular/core';
import {IMovies} from "../../../models/IMovies";

@Component({
  selector: 'app-movie-tv',
  templateUrl: './movie-tv.component.html',
  styleUrls: ['./movie-tv.component.css']
})
export class MovieTVComponent implements OnInit {
  @Input()
  movie:IMovies

  constructor() { }

  ngOnInit(): void {
  }

}
