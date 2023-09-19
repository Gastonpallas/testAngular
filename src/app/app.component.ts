import { Component } from '@angular/core';
import {ElementComponent} from "./components/element/element.component";
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  standalone : true,
  template: `
    <main>
      <router-outlet></router-outlet>
    </main>

  `,
  styles: [],

  imports: [ElementComponent, RouterOutlet]
})
export class AppComponent {
  title = 'testAngular';
}
