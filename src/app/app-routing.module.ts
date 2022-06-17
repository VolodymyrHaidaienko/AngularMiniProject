import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";



let routes: Routes = [
  {path: '', loadChildren: () => import('./movies/movies.module').then(value => value.MoviesModule)},
  {path: '', loadChildren: () => import('./movies-tv/movies-tv.module').then(value => value.MoviesTVModule)}

]


@NgModule({
  imports: [
    [RouterModule.forRoot(routes), HttpClientModule]
  ],
  exports: [
    RouterModule
  ]

})

export class AppRoutingModule {
}
