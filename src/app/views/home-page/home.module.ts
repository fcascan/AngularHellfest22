import { LineupComponent } from './../../components/home/lineup/lineup.component';
import { Scroll1Component } from './../../components/home/scroll1/scroll1.component';
import { VideoComponent } from '../../components/home/video/video.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';

@NgModule({
  declarations: [
    HomePageComponent,
    VideoComponent,
    Scroll1Component,
    LineupComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
