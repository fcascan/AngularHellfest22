import { LoginService } from './controllers/login.service';
import { Ticket } from './domain/ticket';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './views/login-page/login.module';
import { LineupModule } from './views/lineup-page/lineup.module';
import { HomeModule } from './views/home-page/home.module';
import { TicketsModule } from './views/tickets-page/tickets.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarPlaceholderComponent } from './components/navbar-placeholder/navbar-placeholder.component';
import { FixedTicketComponent } from './components/fixed-ticket/fixed-ticket.component';
import { CurtainComponent } from './components/curtain/curtain.component';
import { TicketsService } from './controllers/tickets.service'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FixedTicketComponent,
    NavbarPlaceholderComponent,
    FooterComponent,
    CurtainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    TicketsModule,
    LineupModule,
    LoginModule,
    HttpClientModule,
  ],
  providers: [
    // ...SERVICES
    TicketsService,
    LoginService,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
