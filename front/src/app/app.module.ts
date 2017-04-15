import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {CombatantTurnBoxComponent} from './combat/combatant-turn-box.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,
    CombatantTurnBoxComponent,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
