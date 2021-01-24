import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

let token = localStorage.getItem('access_token');
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}).set('Authorization', 'Bearer ' + token)
};

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http:HttpClient) { }

  getTickets() {
    let token = localStorage.getItem('access_token');
    return this.http.get('/server/api/v1/tickets',
      {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)}
    );
  }

  getTicket(id: number) {
    let token = localStorage.getItem('access_token');
    return this.http.get('/server/api/v1/tickets/' + id,
    {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)});
  }

  createTicket(ticket: any) {
    let body = JSON.stringify(ticket);
    return this.http.post('/server/api/v1/tickets', body, httpOptions);
  }

  deleteTicket(id: number) : Observable<{}> {
    const url = `/server/api/v1/tickets/${id}`;
    return this.http.delete(url, httpOptions);
  }
}
