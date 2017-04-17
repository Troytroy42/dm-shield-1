import { Combatant } from './combatant.model';

export const COMBATANTS: Combatant[] = [
  {
    id: 1,
    name: 'Ally #1',
    cur_hp: 5,
    max_hp: 8,
    status: 'Active',
    cur_ini: 15,
    ini_bonus: 2,
    ally: true
  },
  {
    id: 2,
    name: 'Enemy #1',
    cur_hp: 3,
    max_hp: 8,
    status: 'Active',
    cur_ini: 13,
    ini_bonus: 2,
    ally: false
  }
];
