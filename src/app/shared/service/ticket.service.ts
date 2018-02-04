import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../model/user.model';

@Injectable()
export class TicketService {

  constructor(private http: Http) {}

  findAllTickets() {
    const headers = new Headers({
      'X-Auth-Token': window.localStorage.getItem('token')
    });
    const user: User = JSON.parse(window.localStorage.getItem('user'));
    return this.http.get('http://localhost:8080/tickets/user/' + user.id, {
      headers: headers
    })
      .map((response: Response) => {
      return response.json()['_embedded']['tickets'];
    });
  }
}
