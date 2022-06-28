import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MoviesComponent} from "./components/movies/movies.component";
import {TopRatedsComponent} from "./components/top_rated/top-rateds/top-rateds.component";
import {UpcomingsComponent} from "./components/upcoming/upcomings/upcomings.component";
import {HttpClientModule} from "@angular/common/http";
import {MovieDetailsComponent} from "./components/movie-details/movie-details.component";
import {MoviesTVComponent} from "./components/movies-tv/movies-tv.component";


const routes: Routes = [
  {path: '', component: MoviesComponent},
  {path: ':id', component: MovieDetailsComponent},
  {path: 'movie/top_rated', component: TopRatedsComponent},
  {path: 'movie/upcoming', component: UpcomingsComponent},
  {path:'movie/movies-tv',component:MoviesTVComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule]
})
export class MoviesRoutingModule {
}
