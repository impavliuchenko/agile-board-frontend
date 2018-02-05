import {AfterContentInit, Component, DoCheck, OnInit} from '@angular/core';
import {TicketService} from '../../shared/service/ticket.service';
import {Response} from '@angular/http';
import {User} from '../../shared/model/user.model';
import {Ticket} from '../../shared/model/ticket.model';
import {AuthService} from '../../shared/service/auth.service';
import {isNullOrUndefined, isUndefined} from 'util';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit{

  tickets: Ticket[] = [];
  form: FormGroup;

  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    this.loadTickets();

    this.form = new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'description': new FormControl('', [Validators. required])
    });
  }


  toTodo(href: string) {
    this.ticketService.toTodo(href).subscribe();
    this.timeOut();
    this.loadTickets();
    this.loadTickets();

  }

  toProgess(href: string) {
    // this.tickets.forEach(ticket => {
    //   if (!isNullOrUndefined(ticket['_links']['progress']) && ticket['_links']['progress'].href === href) {
    //     ticket.status = 'IN_PROGRESS';
    //     console.log(ticket);
    //   }
    // });
    this.ticketService.toProgress(href).subscribe();
    this.timeOut();
    this.loadTickets();
    this.loadTickets();

  }
  toDone(href: string) {
    this.ticketService.toDone(href).subscribe();
    this.timeOut();
    this.loadTickets();
    this.loadTickets();

  }

  loadTickets() {
    this.ticketService.findAllTickets().subscribe((tickets: Ticket[]) => {
      this.tickets = tickets;
      console.log(this.tickets);
    });
  }

  deleteTicket(href: string) {
    this.ticketService.deleteTicket(href).subscribe();
    this.timeOut();
    this.loadTickets();
    this.loadTickets();

  }

  onSubmit() {
    const formData = this.form.value;
    this.ticketService.addTicket(formData).subscribe();
    this.loadTickets();
    this.loadTickets();

  }
  timeOut() {}
}
