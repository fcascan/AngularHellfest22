import { Login } from './../../domain/login';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // window.scrollTo({top: 0, left: 0, behavior: 'auto'});
  }

}
