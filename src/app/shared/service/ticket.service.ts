import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../model/user.model';
import {Ticket} from '../model/ticket.model';

@Injectable()
export class TicketService {

  constructor(private http: Http) {}

  findAllTickets() {

    const user: User = JSON.parse(window.localStorage.getItem('user'));
    return this.http.get(`http://localhost:8080/tickets/user/${user.id}`, {
      headers: this.setHeader()
    })
      .map((response: Response) => {
      return response.json()['_embedded']['tickets'];
    });
  }

  toProgress(href: string) {
    return this.http.put(href, {}, {
      headers: this.setHeader()
    });
  }

  toDone(href: string) {
    return this.http.put(href, {}, {
      headers: this.setHeader()
    });
  }

  toTodo(href: string) {
    return this.http.put(href, {}, {
      headers: this.setHeader()
    });
  }

  addTicket(ticket: Ticket) {
    ticket.status = 'TODO';
    const user: User = JSON.parse(window.localStorage.getItem('user'));
    ticket.userId = user.id;
    ticket.date = Date.now().toString(); // TODO
    console.log(ticket);
    return this.http.post('http://localhost:8080/tickets', ticket, {headers: this.setHeader()});
  }

  deleteTicket(href: string) {
    return this.http.delete(href, {headers: this.setHeader()});
  }

  setHeader() {
    const headers = new Headers({
      'X-Auth-Token': window.localStorage.getItem('token')
    });
    return headers;
  }
}
