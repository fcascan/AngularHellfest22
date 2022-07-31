import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tickets-page',
  templateUrl: './tickets-page.component.html',
  styleUrls: ['./tickets-page.component.css']
})
export class TicketsPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // window.scrollTo({top: 0, left: 0, behavior: 'auto'});
  }

}
