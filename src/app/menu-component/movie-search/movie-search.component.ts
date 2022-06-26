import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IMoviesTv} from "../../models/IMoviesTv";
import {MenuComponent} from "../menu/menu.component";

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  @Input()
  movie:IMoviesTv

  @Output()
  filmEmitter= new EventEmitter<IMoviesTv>();


  constructor(private menuComponent:MenuComponent) { }

  ngOnInit(): void {
  }

  movieDetails() {
    this.menuComponent.counter=2
  }


  eventclick(movie: IMoviesTv) {
    this.filmEmitter.emit(movie)

  }
}
