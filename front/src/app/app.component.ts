import { Component, OnInit } from '@angular/core';

import { Combatant } from './combat/shared/combatant.model';
import { CombatantService } from './combat/shared/combatant.service';

@Component({
  selector: 'my-app',
  template: `
    <combatant-turn-box [combatant]="combatant"></combatant-turn-box>
  `,
  providers: [CombatantService]
})
export class AppComponent implements OnInit {
  combatant: Combatant;

  constructor(private combatantService: CombatantService) {}

  ngOnInit(): void {
    this.getCombatants();
  }

  getCombatants(): void {
    this.combatantService.getCombatants().then(combatants => this.combatant = combatants[0]);
  }

}
