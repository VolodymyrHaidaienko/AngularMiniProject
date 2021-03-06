import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MoviesRoutingModule} from './movies-routing.module';
import {MoviesComponent} from './components/movies/movies.component';
import {MoviesService} from "./movies.service";
import {MovieComponent} from './components/movie/movie.component';
import {TopRatedsComponent} from './components/top_rated/top-rateds/top-rateds.component';
import {TopRateComponent} from './components/top_rated/top-rate/top-rate.component';
import {UpcomingsComponent} from './components/upcoming/upcomings/upcomings.component';
import {UpcomComponent} from './components/upcoming/upcom/upcom.component';
import {MovieDetailsComponent} from './components/movie-details/movie-details.component';
import {MoviesTVComponent} from "./components/movies-tv/movies-tv.component";
import { MovieTvComponent } from './components/movie-tv/movie-tv.component';




@NgModule({
  declarations: [
    MoviesComponent,
    MovieComponent,
    TopRatedsComponent,
    TopRateComponent,
    UpcomingsComponent,
    UpcomComponent,
    MovieDetailsComponent,
    MoviesTVComponent,
    MovieTvComponent,


  ],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ],
  exports: [
    MovieComponent
  ],
  providers: [
    MoviesService
  ]
})
export class MoviesModule {
}
