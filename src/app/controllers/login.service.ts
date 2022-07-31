import { Login } from './../domain/login';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseURL = "http://localhost:8080/api/v1/login";

  constructor(private httpClient: HttpClient) { }

  consultarTodosUsuarios(): Observable<Login[]>{
    //Para la URL: api/v1/login/find
    return this.httpClient.get<Login[]>(`${this.baseURL}/find`);
  }

  consultarUsuario(l: Login): Observable<Object>{
    //Para la URL: api/v1/login/find/user
    return this.httpClient.post(`${this.baseURL}/find/user`, l);
  }
}
