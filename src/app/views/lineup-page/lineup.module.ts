import { LineupPageTitleComponent } from './../../components/lineup-page/lineup-page-title/lineup-page-title.component';
import { LineupPageContentComponent } from './../../components/lineup-page/lineup-page-content/lineup-page-content.component';
import { LineupPageComponent } from './lineup-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    LineupPageComponent,
    LineupPageContentComponent,
    LineupPageTitleComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class LineupModule { }
