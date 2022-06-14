import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {MoviesTVComponent} from "./components/movies-tv/movies-tv.component";

const routes: Routes = [
  {path:'movies-tv',component:MoviesTVComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule]
})
export class MoviesTVRoutingModule { }
