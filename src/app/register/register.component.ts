import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {Router} from "@angular/router";
import { AuthService } from '../auth.service';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user = {name:'',email:'',password:'',confirm:''};

  constructor(
    private snackBar: MatSnackBar,
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

  register(){

    if(this.user.name == ''){
      this.openSnackBar('Name is required', 'OK');
      return false;
    }
    if(this.user.email == ''){
      this.openSnackBar('Email is required', 'OK');
      return false;
    }
    if(this.user.password == ''){
      this.openSnackBar('Password is required', 'OK');
      return false;
    }
    if(this.user.password != ''){
      if(this.user.password != this.user.confirm){
         this.openSnackBar('Passwords does not match', 'OK');
         return false;
      }
    }

    this.authService.register(this.user.password, this.user.email, this.user.password)
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
