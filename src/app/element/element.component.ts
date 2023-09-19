import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-element',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>Element</p>
  `,
  styles: []
})
export class ElementComponent {

}
