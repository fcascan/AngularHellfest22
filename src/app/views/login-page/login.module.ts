import { LoginService } from './../../controllers/login.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from './login-page.component';
import { LoginFormComponent } from './../../components/login-page/login-form/login-form.component';
import { LoginTitleComponent } from './../../components/login-page/login-title/login-title.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginPageComponent,
    LoginTitleComponent,
    LoginFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    LoginService,
  ],
})
export class LoginModule { }
