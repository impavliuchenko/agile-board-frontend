import { Component, OnInit } from '@angular/core';
import {TicketService} from '../../shared/service/ticket.service';
import {Response} from '@angular/http';
import {User} from '../../shared/model/user.model';
import {Ticket} from '../../shared/model/ticket.model';
import {AuthService} from '../../shared/service/auth.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  tickets: Ticket[] = [];

  constructor(private tichetService: TicketService,
              private authService: AuthService) { }

  ngOnInit() {
    this.tichetService.findAllTickets().subscribe((tickets: Ticket[]) => {
      this.tickets = tickets;
      console.log(this.tickets);
    });
  }

}
