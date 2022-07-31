import { LoginPageComponent } from './views/login-page/login-page.component';
import { LineupPageComponent } from './views/lineup-page/lineup-page.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { TicketsPageComponent } from './views/tickets-page/tickets-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  children: [
    { path: 'home', component: HomePageComponent },
    { path: 'tickets', component:  TicketsPageComponent },
    { path: 'lineup', component: LineupPageComponent },
    { path: 'login', component: LoginPageComponent },
    { path: '**', redirectTo: 'home' }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
