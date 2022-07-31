import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Event, Router, RouterEvent } from '@angular/router';
import { filter, interval, takeWhile } from 'rxjs';

@Component({
  selector: 'app-curtain',
  templateUrl: './curtain.component.html',
  styleUrls: ['./curtain.component.css']
})
export class CurtainComponent implements OnInit {
  cssInstruction: Object = '';            //Estructura de movimiento del telon en CSS
  private pos: number = 0;          //Posicion actual de telon en px
  private stop: boolean = false;    //Flag de aviso de fin de recorrido
  private espera: number = 400;   //Espera inicial antes de iniciar el movimiento del telon (en milisegs)
  private intervalo: number = 5;   //Tiempo entre cada paso del telon (en milisegs)
  private finalRecorrido: number = -110; //en vh
  private factorVelocidad: number = 0.25;  //Correccion de la velocidad del telón (mayor = mas rapido)

  ngOnInit(): void {
    this.resetCurtain();
  }

  constructor(public router: Router) {
    //Suscripcion a evento de cambio de ruta:
    router.events
    .pipe(filter((e: Event): e is RouterEvent => e instanceof RouterEvent))
    .subscribe(() => {
      //Primero se resetea el telon, la posicion de ventana y de desactiva el scroll:
      this.disableScrolling();
      window.scrollTo({top: 0, left: 0, behavior: 'auto'});
      this.resetCurtain();
      //Ejecucion retardada un tiempo de espera:
      setTimeout(() => {
        //Creacion de intervalo de ejecucion del movimiento del telon:
        interval(this.intervalo)
        .pipe(takeWhile(() => !this.stop))
        .subscribe(() => {
          //Muevo el telon cada un intervalo de tiempo y me detengo si stop = true:
          this.moveCurtain();
        });
      }, this.espera);
    });
  }

  disableScrolling(){
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
  }

  enableScrolling(){
      window.onscroll=function(){};
  }

  resetCurtain() {
    this.pos = 0;
    this.cssInstruction = '';
    this.stop = false;
  }

  moveCurtain() {
    if (this.pos <= this.finalRecorrido / this.factorVelocidad) {
      //Si la posicion del telon es menor a finalRecorrido, se detiene el intervalo
      this.stop = true;
      this.enableScrolling();
    } else {
      this.disableScrolling();
      this.pos--;
      this.cssInstruction = this.crearInstruccion();
    }
    // console.log(this.pos);
    // console.log(this.cssInstruction);
  }

  crearInstruccion(): Object {
    return {'top' : (this.pos * this.factorVelocidad) + 'vh'}; //con (pos / vel), si vel aumenta el scroll es mas lento
  }
}
