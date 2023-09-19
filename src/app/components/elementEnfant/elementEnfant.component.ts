import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-element-enfant',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <p>Element Enfant</p>
    <router-outlet></router-outlet>

  `,
  styles: []
})
export class ElementEnfantComponent {

}
