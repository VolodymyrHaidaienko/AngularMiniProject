import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MoviesComponent} from "./components/movies/movies.component";
import {TopRatedsComponent} from "./components/top_rated/top-rateds/top-rateds.component";
import {UpcomingsComponent} from "./components/upcoming/upcomings/upcomings.component";
import {HttpClientModule} from "@angular/common/http";


const routes: Routes = [
  {path: '', component: MoviesComponent},
  {path: 'top-rateds', component: TopRatedsComponent},
  {path: 'upcomings', component: UpcomingsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule]
})
export class MoviesRoutingModule {
}
