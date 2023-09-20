import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <div>
      <p>Welcome</p>
      <button (click)="redirectToElement()">Rediriger vers Element</button>
      <router-outlet></router-outlet>
    </div>

  `,
  styles: []
})
export class WelcomeComponent {

  constructor(private router: Router) { }
  redirectToElement() {
  this.router.navigate(["/element"]);
  }
}
