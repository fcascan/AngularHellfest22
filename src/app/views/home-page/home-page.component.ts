import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  hScroll: number = 0;

  constructor() { }

  ngOnInit(): void {
    // window.scrollTo({top: 0, left: 0, behavior: 'auto'});
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent() {
    this.hScroll = window.scrollY;
    // console.log(this.hScroll);
  }
}
