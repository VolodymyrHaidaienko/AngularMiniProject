import {Component, Input, OnInit} from '@angular/core';
import {IMovies} from "../../../../models/IMovies";

@Component({
  selector: 'app-top-rate',
  templateUrl: './top-rate.component.html',
  styleUrls: ['./top-rate.component.css']
})
export class TopRateComponent implements OnInit {

  @Input()
  movie:IMovies

  constructor() { }

  ngOnInit(): void {
  }

}
