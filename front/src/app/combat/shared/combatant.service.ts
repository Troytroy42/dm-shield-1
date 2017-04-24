import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {apiBaseUrl} from './../../shared/data.service';

import {Combatant} from './combatant.model';

@Injectable()
export class CombatantService {

  private combatantsUrl = apiBaseUrl + '/combat/combatants.json';

  constructor(private http: Http) {}

  getCombatants(): Promise<Combatant[]> {
    return this.http.get(this.combatantsUrl)
      .toPromise()
      .then(response => response.json().combatants as Combatant[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
