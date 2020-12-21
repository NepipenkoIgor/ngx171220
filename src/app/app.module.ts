import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// NgModule => es6
// declarations => let/const => Directives, Pipes
// imports  => import  => NgModules
// exports => export => Directives, Pipes, NgModules


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

