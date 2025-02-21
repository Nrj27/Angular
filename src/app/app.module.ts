import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,  
    AppRoutingModule, 
  ],
})
export class AppModule {}
