import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { Ticket } from 'src/app/models/ticket';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {
  public tickets: any;
  public date = new Date;
  


  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
    this.getTickets();
  }

  getTickets() {
    this.ticketService.getTickets().subscribe(
      data => { this.tickets = data},
      err => console.error(err),
      () => console.log('tickets loaded')
    );
  }

}
