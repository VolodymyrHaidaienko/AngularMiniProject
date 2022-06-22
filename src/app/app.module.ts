import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import { MenuComponent } from './menu-component/menu/menu.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MovieSearchComponent } from './menu-component/movie-search/movie-search.component';
import {MovieSearchService} from "./servisec/movie-search.service";


@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    MenuComponent,
    MovieSearchComponent,
  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [MovieSearchService]

})
export class AppModule { }
