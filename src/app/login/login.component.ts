import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { User } from '../models/user';

import {MatSnackBar} from '@angular/material';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user = new User(1,'','','');

  constructor(private snackBar: MatSnackBar,private router: Router) { }

  ngOnInit() {
  }

  login(){
    console.log(this.user);
    if(this.user.email == 'angel@garcia.com' && this.user.password == '1234'){

      this.router.navigate(['app/tasks']);

    }else{
      this.openSnackBar('Incorrect Account', 'Ok');
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
