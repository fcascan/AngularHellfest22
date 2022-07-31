import { Router } from '@angular/router';
import { Login } from './../../../domain/login';
import { LoginService } from './../../../controllers/login.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpResponse, HttpStatusCode } from '@angular/common/http';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
    // Formulario \\
  //Objeto Login:
  l: Login = new Login("","","");
  @ViewChild("formulario") formulario!: NgForm;
  minMail: number = 3;
  minPass: number = 6;

  constructor(private servicio: LoginService, private router: Router) {
    // ↑ Importo el servicio de LoginService
  }

  ngOnInit(): void {
    // this.formulario.nativeElement.reset();
    this.formulario.resetForm();
  }

  onSubmit(){
    //Al presionar el boton de Login:
    if(this.formulario.valid){
      //Si el formulario es valido:
      console.log(this.formulario.value);
      //Cargo el objeto tipo Login:
      this.l.setEmail(this.formulario.value.email);
      this.l.setPassword(this.formulario.value.pass);
      this.l.setRole(this.formulario.value.role);
      console.log(this.l);
      //Despacho:
      this.servicio.consultarUsuario(this.l).subscribe((response) => {
          console.log(response);
          window.alert("Login Successful. Welcome!");
          // window.location.href='/account';
          // this.router.navigate(['/account']);
        }, error => {
          console.log(error);
          window.alert("Error!\nPlease check your credentials or try again later.");
          this.fieldsTouched();
        }
      );
      //Reseteo el formulario:
      this.formulario.resetForm();
    } else {
      //Caso de no hacer Submit por formulario invalido:
      this.fieldsTouched();
      // this.formulario.control.markAsTouched;
      window.alert("Error!\nPlease check your credentials or try again later.");
    }
  }

  campoNoEsValido(campo: string) {
    return (this.formulario?.controls[campo].errors && this.formulario?.controls[campo].touched);
  }

  fieldsTouched() {
    // this.formulario.resetForm();
    this.formulario.control.errors;
    this.formulario.control.markAsTouched;
  }

}
