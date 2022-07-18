import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TicketsFormComponent } from './components/tickets-form/tickets-form.component';
import { NavbarPlaceholderComponent } from './components/navbar-placeholder/navbar-placeholder.component';
import { TicketsTitleComponent } from './components/tickets-title/tickets-title.component';
import { FixedTicketComponent } from './components/fixed-ticket/fixed-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    TicketsFormComponent,
    NavbarPlaceholderComponent,
    TicketsTitleComponent,
    FixedTicketComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
