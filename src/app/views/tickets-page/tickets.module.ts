import { TicketsService } from './../../controllers/tickets.service';
import { ReactiveFormsModule } from '@angular/forms';
import { TicketsTitleComponent } from './../../components/tickets/tickets-title/tickets-title.component';
import { TicketsFormComponent } from './../../components/tickets/tickets-form/tickets-form.component';
import { TicketsPageComponent } from './tickets-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    TicketsPageComponent,
    TicketsTitleComponent,
    TicketsFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    TicketsService,
  ],
})
export class TicketsModule { }
