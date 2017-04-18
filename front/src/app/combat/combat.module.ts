import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import {CombatComponent} from "./combat.component";
import {CombatantTurnBoxComponent} from "./combatant-turn-box.component";
@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CombatComponent,
    CombatantTurnBoxComponent
  ]
})
export class CombatModule {}
