import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {MovieSearchComponent} from "./menu-component/movie-search/movie-search.component";



let routes: Routes = [
  {path:'movie', component:MovieSearchComponent},
  {path: '', loadChildren: () => import('./movies/movies.module').then(value => value.MoviesModule)},
  {path: '', loadChildren: () => import('./movies-tv/movies-tv.module').then(value => value.MoviesTVModule)},
  {path:'user', loadChildren:() => import('./user/user.module').then(value => value.UserModule)}

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
