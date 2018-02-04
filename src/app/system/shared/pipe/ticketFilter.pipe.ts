import {Pipe, PipeTransform} from '@angular/core';
import {Ticket} from '../../../shared/model/ticket.model';

@Pipe({name: 'ticketFilter'})
export class TicketFilterPipe implements PipeTransform {

  transform(ticketList, status: string): Ticket[] {
    const TODO = 'TODO';
    const IN_PROGRESS = 'IN_PROGRESS';
    const DONE = 'DONE';

    switch (status) {
      case TODO: {
        return ticketList.filter(ticket => ticket.status === TODO);
      }
      case IN_PROGRESS: {
        return ticketList.filter(ticket => ticket.status === IN_PROGRESS);
      }
      case DONE: {
        return ticketList.filter(ticket => ticket.status === DONE);
      }
    }
  }
}
