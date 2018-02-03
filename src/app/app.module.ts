import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import {AuthModule} from './auth/auth.module';
import {SystemModule} from './system/system.module';
import {UserService} from './shared/service/user.service';
import {AuthService} from './shared/service/auth.service';
import {AuthGuardService} from './shared/service/guard/auth-guard.service';
import {CookieService} from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AuthModule,
    SystemModule,
    AppRoutingModule
  ],
  providers: [UserService, AuthService, AuthGuardService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
