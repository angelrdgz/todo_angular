import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router";

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user:any;

  constructor(
    private router: Router,
    private authService: AuthService,){
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user'))
    }
  }

  ngOnInit() {
    console.log(this.user)
  }

  logout(){

        this.authService.logout();
        this.router.navigate(['']);
  }

}
