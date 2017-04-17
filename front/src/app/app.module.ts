import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import {CombatComponent} from './combat/combat.component';
import {CombatantTurnBoxComponent} from './combat/combatant-turn-box.component';
import {CombatantService} from './combat/shared/combatant.service';

@NgModule({
  imports:      [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'combat',
        component: CombatComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    CombatComponent,
    CombatantTurnBoxComponent
  ],
  providers: [
    CombatantService
  ],
  bootstrap:    [ AppComponent ],
})

export class AppModule { }
