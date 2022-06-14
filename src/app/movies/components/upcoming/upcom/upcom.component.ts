import {Component, Input, OnInit} from '@angular/core';
import {IMovies} from "../../../../models/IMovies";

@Component({
  selector: 'app-upcom',
  templateUrl: './upcom.component.html',
  styleUrls: ['./upcom.component.css']
})
export class UpcomComponent implements OnInit {

  @Input()
  movie:IMovies

  constructor() { }

  ngOnInit(): void {
  }

}
