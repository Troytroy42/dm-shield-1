import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { HttpModule }    from '@angular/http';

import {CombatantService} from './shared/combatant.service';
import {CombatComponent} from './combat.component';
import {CombatantTurnBoxComponent} from './combatant-turn-box.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [
    CombatantTurnBoxComponent,
    CombatComponent,
  ],
  providers: [
    CombatantService
  ]
})
export class CombatModule {}
