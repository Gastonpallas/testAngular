import { Component } from '@angular/core';
import {ElementComponent} from "./element/element.component";

@Component({
  selector: 'app-root',
  standalone : true,
  template: `
    <app-element/>
    <p>test</p>
  `,
  styles: [],

  imports : [ElementComponent]
})
export class AppComponent {
  title = 'testAngular';
}
