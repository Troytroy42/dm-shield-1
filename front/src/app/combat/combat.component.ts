import {Component, ViewChild, OnInit} from '@angular/core';

import {Combatant} from './shared/combatant.model';
import { CombatantService } from './shared/combatant.service';

import {CombatantTurnBoxComponent} from './combatant-turn-box.component';

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

  constructor(private combatantService: CombatantService) {}

  ngOnInit(): void {
    this.combatantService.getCombatants()
      .then((combatants) => {
        this.combatants = combatants;
        this.cur_combatant = combatants[0];
      });

    this.cur_index = 0;
  }

  @ViewChild(CombatantTurnBoxComponent)
  private turnBoxComponent: CombatantTurnBoxComponent;

  next(): void {
    this.cur_index = (++this.cur_index) % this.combatants.length;
    this.cur_combatant = this.combatants[this.cur_index];
    return;
  }

  previous(): void {
    this.cur_index = (--this.cur_index) % this.combatants.length;
    this.cur_combatant = this.combatants[this.cur_index];
    return;
  }
}

