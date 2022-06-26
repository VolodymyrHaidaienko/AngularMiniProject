import {Component, OnInit} from '@angular/core';

import {NgForm} from "@angular/forms";
import {IMoviesTv} from "../../models/IMoviesTv";
import {MovieSearchService} from "../../servisec/movie-search.service";


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent implements OnInit {

  constructor(private movieSearchService: MovieSearchService) {
  }

  ngOnInit(): void {
  }


  movieSearch: IMoviesTv = {}
  movies: IMoviesTv[]
  counter = 0
  counterPage = 1
  stringCounter = ''
  filmcatch: IMoviesTv = {}



  search(myForm: NgForm) {
    // @ts-ignore
    this.movieSearchService.movieSearch(myForm.form.value.title).subscribe(value => this.movies = value.results),
      this.stringCounter = myForm.form.value.title,
      myForm.reset(),
      this.counter = 1


  }

  pageCounter() {
    this.counterPage = this.counterPage + 1

    this.movieSearchService.movieSearchButton(this.counterPage, this.stringCounter).subscribe(value => {
        // @ts-ignore
        for (let valueElement of value.results) {
          this.movies.push(valueElement)
        }
      }
    )

  }

  filmemmit(movie: IMoviesTv) {
    this.filmcatch = movie
    this.counter=2

  }


}







