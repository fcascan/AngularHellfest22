import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll1',
  templateUrl: './scroll1.component.html',
  styleUrls: ['./scroll1.component.css']
})
export class Scroll1Component implements OnInit {

  @Input() hScroll: number = 0; //Variable recibida del padre con la posicion actual del scroll de pantalla

  ngOnInit(): void {
  }

  transformScroll(): Object {
    //Ejemplo:
    //[ngStyle] = "{'transform' : 'translateX(10px)'}"
    let mover: number = -(this.hScroll / 5 - 100);  //con (hScroll / velocidadScroll - offsetX)
    // console.log(this.hScroll);
    return {'transform' : 'translateX(' + mover + 'vw)'};
  }
}
