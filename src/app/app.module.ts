import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { PresComponent } from './presentation/pres/pres.component';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { interceptorSpringProvider } from './interceptors/api-rest.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PresComponent,
    SidebarComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [interceptorSpringProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
