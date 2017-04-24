import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import {AppComponent }  from './app.component';
import {AppRoutingModule } from './app-routing.module';
import {CombatModule} from './combat/combat.module';

@NgModule({
  imports:      [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    CombatModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
