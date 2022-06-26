import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../servisec/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form:FormGroup

  constructor(private router:Router,
              private userService:UserService) { this.createForm()}

  ngOnInit(): void {
  }

  createForm():void{
    this.form = new FormGroup({
      userName: new FormControl(null),
      password: new FormControl(null),
      confirmpassword: new FormControl(null)
    })
  }

  register() {

  }
}
