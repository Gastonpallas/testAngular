import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-authenticate',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <div>
      <p>Authentication</p>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class AuthenticateComponent {
}
