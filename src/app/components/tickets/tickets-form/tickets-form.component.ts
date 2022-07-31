import { Ticket } from './../../../domain/ticket';
import { TicketsService } from './../../../controllers/tickets.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tickets-form',
  templateUrl: './tickets-form.component.html',
  styleUrls: ['./tickets-form.component.css']
})

export class TicketsFormComponent implements OnInit {
  // Formulario \\
  //Objeto Ticket:
  t: Ticket = new Ticket("","","","","",0,"");

  minChars: number = 2;
  maxChars: number = 50;
  maxCharsMail: number = 80;
  minPhone: number = 8;
  maxPhone: number = 20;
  minQuantity: number = 1;
  maxQuantity: number = 10;

  fGroup: FormGroup = this.fBuiler.group({
    //formControlName: [initial value, synchronus validators, async validators]
    name: ['', Validators.compose([Validators.required, Validators.minLength(this.minChars), Validators.maxLength(this.maxChars)])],
    fname: ['', Validators.compose([Validators.required, Validators.minLength(this.minChars), Validators.maxLength(this.maxChars)])],
    email: ['', Validators.compose([Validators.email, Validators.required, Validators.minLength(this.minChars), Validators.maxLength(this.maxCharsMail)])],
    phone: ['', Validators.compose([Validators.required, Validators.minLength(this.minPhone), Validators.maxLength(this.maxPhone)])],
    payment: ['TARJETA', Validators.compose([Validators.required])],
    quantity1: ['1', Validators.compose([Validators.required, Validators.min(this.minQuantity), Validators.max(this.maxQuantity)])],
    quantity2: ['1', Validators.compose([Validators.required, Validators.min(this.minQuantity), Validators.max(this.maxQuantity)])],
    pass1: ['1-day pass', Validators.compose([Validators.required])],
    pass2: ['1-day pass', Validators.compose([Validators.required])],
    tacsToggle1: [false, Validators.compose([Validators.requiredTrue])],
    tacsToggle2: [false, Validators.compose([Validators.requiredTrue])],
  })

  constructor(private fBuiler: FormBuilder, private servicio: TicketsService) {
    // ↑ Importo los servicios de FormBuilder y TicketsService
  }

  ngOnInit(): void {
    this.resetForm();
    this.fGroup.value.quantity2 = 1;
    this.fGroup.valueChanges.subscribe(form => {
      //Me suscribo a los cambios del formulario
        //Actualizo los precios del formulario:
        this.updateValues();
        this.updatePricesForm();
        //Elimino los campos que no me interesan:
        delete form.tacsToggle1;
        delete form.tacsToggle2;
      })
  }

  campoNoEsValido(campo: string){
    return this.fGroup.controls[campo].errors && this.fGroup.controls[campo].touched;
  }

  Submit1(){
    //Al pulsar boton de SUBMIT 1:
    if(this.personalInfoFieldCheck() &&
      this.fGroup.controls['pass1'].valid &&
      this.fGroup.controls['quantity1'].valid &&
      this.fGroup.controls['tacsToggle1'].valid
      ) {
      //Limpio los campos del formulario2:
      delete this.fGroup.value.tacsToggle2;
      delete this.fGroup.value.pass2;
      delete this.fGroup.value.quantity2;
      console.log(this.fGroup.value);
      //Cargo el objeto de tipo Ticket:
      this.t.setNombre(this.fGroup.value.name);
      this.t.setApellido(this.fGroup.value.fname);
      this.t.setDireccionDeMail(this.fGroup.value.email);
      this.t.setTelefono(this.fGroup.value.phone);
      this.t.setMetodoDePago(this.fGroup.value.payment);
      this.t.setCantidadDeTickets(this.fGroup.value.quantity1);
      this.t.setTipoDeTicket(this.fGroup.value.pass1);
      console.log(this.t);
      //Despacho:
      this.servicio.registrarTicket(this.t).subscribe((response) => {
        console.log(response);
        window.alert("Purchase successfully registered!");
      }, error => {
        console.log(error);
        window.alert("Error trying to register ticket!\nPlease try again later.");
      });
      //Vacio el form:
      this.resetForm();
    } else {
      //Caso de campos no validos o incompletos:
      this.personalInfoFieldTouched();
      this.fGroup.controls['pass1'].markAsTouched();
      this.fGroup.controls['quantity1'].markAsTouched();
      this.fGroup.controls['tacsToggle1'].markAsTouched();
    }
  }

  Submit2(){
    //Al pulsar boton de SUBMIT 2:
    if(this.personalInfoFieldCheck() &&
      this.fGroup.controls['pass2'].valid &&
      this.fGroup.controls['quantity2'].valid &&
      this.fGroup.controls['tacsToggle2'].valid
      ) {
      //Limpio los campos del formulario1:
      delete this.fGroup.value.tacsToggle1;
      delete this.fGroup.value.pass1;
      delete this.fGroup.value.quantity1;
      //Cargo el objeto de tipo Ticket:
      this.t.setNombre(this.fGroup.value.name);
      this.t.setApellido(this.fGroup.value.fname);
      this.t.setDireccionDeMail(this.fGroup.value.email);
      this.t.setTelefono(this.fGroup.value.phone);
      this.t.setMetodoDePago(this.fGroup.value.payment);
      this.t.setCantidadDeTickets(this.fGroup.value.quantity2);
      this.t.setTipoDeTicket(this.fGroup.value.pass2);
      //Despacho:
      console.log(this.fGroup.value);
      console.log(this.t);
      this.servicio.registrarTicket(this.t).subscribe((response) => {
        console.log(response);
        window.alert("Purchase successfully registered!");
      }, error => {
        console.log(error);
        window.alert("Error trying to register ticket!\nPlease try again later.");
      });
      //Vacio el form:
      this.resetForm();
    } else {
      //Caso de campos no validos o incompletos:
      this.personalInfoFieldTouched();
      this.fGroup.controls['pass2'].markAsTouched();
      this.fGroup.controls['quantity2'].markAsTouched();
      this.fGroup.controls['tacsToggle2'].markAsTouched();
    }
  }

  personalInfoFieldCheck(){
    if(this.fGroup.controls['name'].valid &&
       this.fGroup.controls['fname'].valid &&
       this.fGroup.controls['email'].valid &&
       this.fGroup.controls['phone'].valid &&
       this.fGroup.controls['payment'].valid
      ) {
      return true;
    } else {
      return false;
    }
  }

  personalInfoFieldTouched(){
    this.fGroup.controls['name'].markAsTouched();
    this.fGroup.controls['fname'].markAsTouched();
    this.fGroup.controls['email'].markAsTouched();
    this.fGroup.controls['phone'].markAsTouched();
    this.fGroup.controls['payment'].markAsTouched();
  }

  // Calculo de precios \\
  //Variables y valores iniciales:
  quantity1: number = 1;
  pass1: String = "1-day pass";
  individualPrice1: String = "1X $105";
  priceSpan1: String = "Price: $105";
  quantity2: number = 1;
  pass2: String = "1-day pass";
  individualPrice2: String = "1X $105";
  priceSpan2: String = "Price: $105";
  private fourDayPass: number = 289;  //Valor real
  private threeDayPass: number = 215; //Valor inventado
  private oneDayPass: number = 105;   //Valor real

  updatePricesForm() {
    if (this.fGroup.value['pass1'] == "1-day pass") {
      this.priceSpan1 = "Price: $" + this.fGroup.value['quantity1'] * this.oneDayPass;
      this.individualPrice1 = " 1x $" + this.oneDayPass;
    } else {
      this.priceSpan1 = "Price: $" + this.fGroup.value['quantity1'] * this.threeDayPass;
      this.individualPrice1 = " 3x $" + this.threeDayPass;
    }
    if (this.fGroup.value['pass2'] == "1-day pass") {
      this.priceSpan2 = "Price: $" + this.fGroup.value['quantity2'] * this.oneDayPass;
      this.individualPrice2 = " 1x $" + this.oneDayPass;
    } else {
      this.priceSpan2 = "Price: $" + this.fGroup.value['quantity2'] * this.fourDayPass;
      this.individualPrice2 = " 4x $" + this.fourDayPass;
    }
  }

  updateValues(){
    this.quantity1 = this.fGroup.value['quantity1'];
    this.pass1 = this.fGroup.value['pass1'];
    this.quantity2 = this.fGroup.value['quantity2'];
    this.pass2 = this.fGroup.value['pass2'];
  }

  resetForm(){
    this.fGroup.reset();
    this.fGroup.value['quantity1'] = 1;
    this.quantity1 = 1;
    this.fGroup.value['pass1'] = "1-day pass";
    this.pass1 = "1-day pass";
    this.fGroup.value['quantity2'] = 1;
    this.quantity2 = 1;
    this.fGroup.value['pass2'] = "1-day pass";
    this.pass2 = "1-day pass";
  }
}
