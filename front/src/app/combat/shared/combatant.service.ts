import { Injectable } from '@angular/core';

import {Combatant} from './combatant.model';
import {COMBATANTS} from './mock-combatants';

@Injectable()
export class CombatantService {
  getCombatants(): Promise<Combatant[]> {
    return Promise.resolve(COMBATANTS);
  }
}
