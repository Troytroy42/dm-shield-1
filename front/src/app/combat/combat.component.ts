import {Component, ViewChild, OnInit} from '@angular/core';
import {CombatantTurnBoxComponent} from './combatant-turn-box.component';
import {Combatant} from './shared/combatant.model';

@Component({
  selector: 'combat',
  template:  `
    <h2> Combat </h2>
    <combatant-turn-box [combatant]="cur_combatant"></combatant-turn-box>
    <button (click)="previous()"> << </button>
    <button (click)="next()"> >> </button>
  `
})

export class CombatComponent implements OnInit{
  combatants: Combatant[];

  cur_index: number;

  cur_combatant: Combatant;

  ngOnInit(): void {
    this.combatants = [
      {
        id: 1,
        name: 'Test 1',
        cur_hp: 1,
        max_hp: 2,
        status: 'Test 1',
        cur_ini: 3,
        ini_bonus: 1,
        ally: true
      },
      {
        id: 2,
        name: 'Test 2',
        cur_hp: 1,
        max_hp: 2,
        status: 'Test 2',
        cur_ini: 2,
        ini_bonus: 1,
        ally: false
      }
    ];

    this.cur_index = 0;

    this.cur_combatant  = {
      id: 1,
      name: 'Test 1',
      cur_hp: 1,
      max_hp: 2,
      status: 'Test 1',
      cur_ini: 3,
      ini_bonus: 1,
      ally: true
    };
  }

  @ViewChild(CombatantTurnBoxComponent)
  private turnBoxComponent: CombatantTurnBoxComponent;

  next(): void {
    this.cur_index = (this.cur_index + 1) % this.combatants.length;
    this.cur_combatant = this.combatants[this.cur_index];
    return;
  }

  previous(): void {
  // @todo Set cur_combatant to the previous indx
    return;
  }
}

