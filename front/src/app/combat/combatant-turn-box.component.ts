import { Component, Input } from '@angular/core';

import { Combatant } from './shared/combatant.model';

@Component({
  selector: 'combatant-turn-box',
  template:  `
    <div *ngIf="combatant">
      <div><label>Name: </label>{{combatant.name}} <label>HP(Cur/Max): </label>{{combatant.cur_hp}}/{{combatant.max_hp}}</div>
      <div><label>Status: </label>{{combatant.status}}</div> 
    </div>
  `
})

export class CombatantTurnBoxComponent {
  @Input() combatant: Combatant;
}
