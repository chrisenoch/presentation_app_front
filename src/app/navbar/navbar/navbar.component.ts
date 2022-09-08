import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CognitoUserAttribute, CognitoUserPool } from 'amazon-cognito-identity-js';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  attributes: CognitoUserAttribute[];
  poolData = {
    UserPoolId: environment.UserPoolId, // Your user pool id here
    ClientId: environment.ClientId, // Your client id here
  };

  private isAuthSub: Subscription; 
  isAuth:boolean;
  
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.isAuthSub = this.authService.isAuthSub.subscribe(
      data => {
        this.isAuth = !!data;
        console.log("value of data: " + data); });
  }
  
  //for debugging - delete this
  checkIfAuthVar(){
    alert("value of isAuth " + this.isAuth);
  }

  onLogout(): void {
    var userPool = new CognitoUserPool(this.poolData);
    var currentUser = userPool.getCurrentUser();
    currentUser.signOut();
    this.router.navigate(['']);
    this.authService.isAuthSub.next(false); 
  }

  ngOnDestroy(): void {
    this.isAuthSub.unsubscribe();//
  }

}
