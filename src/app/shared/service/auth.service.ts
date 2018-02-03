import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {User} from '../model/user.model';
import {Observable} from 'rxjs/Observable';
import {JwtHelper} from 'angular2-jwt';
import {CookieService} from 'ngx-cookie-service';

@Injectable()
export class AuthService {

  private isLoggedIn = this.checkAuth();

  constructor(private http: Http,
              private cookieService: CookieService) {}

  isAuth() {
    return this.isLoggedIn;
  }

  logIn() {
    window.localStorage.setItem('auth', JSON.stringify(true));
  }

  logOut() {
    window.localStorage.setItem('auth', JSON.stringify(false));
  }

  checkAuth() {
    return JSON.parse(window.localStorage.getItem('auth'));
  }
  onLogin(user: User): Observable<Response> {
    console.log(user);
    return this.http.post('http://localhost:8080/login', user);
  }

  onRegistration(user: User): Observable<Response> {
    console.log(user);
    return this.http.post('http://localhost:8080/registration', user);
  }

  decodeOptions(opt: string) {
    const jwtHelper: JwtHelper = new JwtHelper();
    return jwtHelper.decodeToken(opt);
  }
}
