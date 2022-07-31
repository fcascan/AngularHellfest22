import { Ticket } from './../domain/ticket';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  private baseURL: String = "http://localhost:8080/api/v1/tickets";

  constructor(private httpClient: HttpClient) { }

  consultarTodosTickets(): Observable<Ticket[]>{
    //Para la URL: api/v1/tickets/find
    return this.httpClient.get<Ticket[]>(`${this.baseURL}/find`);
  }

  consultarTicketPorId(id: String): Observable<Ticket[]>{
    //Para la URL: api/v1/tickets/find/id
    return this.httpClient.get<Ticket[]>(`${this.baseURL}/find/${id}`);
  }

  consultarTicketPorNombre(nombre: String, apellido: String): Observable<Ticket[]>{
    //Para la URL: api/v1/tickets/find/id
    return this.httpClient.get<Ticket[]>(`${this.baseURL}/find/${nombre}/${apellido}`);
  }

  registrarTicket(t: Ticket): Observable<Object>{
    //Se envia a la URL: api/v1/tickets/add con el objeto en el body
    return this.httpClient.post(`${this.baseURL}/add`, t);
  }
}
