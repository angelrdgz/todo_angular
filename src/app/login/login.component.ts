import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { User } from '../models/user';
import {MatSnackBar} from '@angular/material';
import {Router} from "@angular/router";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user = new User(1,'','','');

  constructor(
    private snackBar: MatSnackBar,
    private router: Router,
    private authService: AuthService,
  ) {
    if (localStorage.getItem('user')) {
      this.router.navigate(['/app/tasks']);
    }
  }

  ngOnInit() {
  }

  login(){

        this.authService.login(this.user.email, this.user.password)
            .subscribe(
                data => {
                  if(data == true){
                   this.router.navigate(['/app/tasks']);
                 }else{
                   this.openSnackBar('Incorrect email or password', 'Ok')
                 }
                },
                error => {
                });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
