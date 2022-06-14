import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesTVRoutingModule } from './movies-tv-routing.module';
import { MoviesTVComponent } from './components/movies-tv/movies-tv.component';
import {MoviesService} from "./servisec/movies.service";
import { MovieTVComponent } from './components/movie-tv/movie-tv.component';



@NgModule({
  declarations: [
    MoviesTVComponent,
    MovieTVComponent

  ],
  providers: [MoviesService],
  imports: [
    CommonModule,
    MoviesTVRoutingModule
  ]
})
export class MoviesTVModule { }
