import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { CombatComponent }     from './combat/combat.component';

const appRoutes: Routes = [
  { path: 'combat',        component: CombatComponent },
  { path: '', redirectTo: '/combat', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
