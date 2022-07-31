import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild("hamburguerToggle") toggle!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  closeMenu(){
    this.toggle.nativeElement.checked = false;
    // window.scrollTo({top: 0, left: 0, behavior: 'auto'});
  }

}
