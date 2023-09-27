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
      <button (click)="redirect('register/')">Register</button>
      <button (click)="redirect('authenticate/')">Login</button>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class WelcomeComponent {

  constructor(private router: Router) { }
  redirect(path : String) {
    this.router.navigate([path]);
  }
}
