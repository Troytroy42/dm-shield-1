import { Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <a routerLink="/combat">Combat</a>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
