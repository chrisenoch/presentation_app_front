import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'presentation-app';
  private isAuthSub: Subscription; 
  isAuth:boolean;
  
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.isAuthSub = this.authService.isAuthSub.subscribe(
      data => {
        this.isAuth = !!data;
        console.log("value of data: " + data); });
  }

  ngOnDestroy(): void {
    this.isAuthSub.unsubscribe();//
  }

}

