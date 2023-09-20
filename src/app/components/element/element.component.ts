import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-element',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `

    <p>Element</p>
    <router-outlet></router-outlet>
    <div>
      <h2>Données de l'API :</h2>
      <ul>
        <li *ngFor="let item of data">
          {{ item.username }} - {{ item.mail }}
        </li>
      </ul>
    </div>

  `,
  styles: []
})

export class ElementComponent implements OnInit{

  private url: string = 'http://localhost:8080/api/v1/crud';
  data: any
  ngOnInit(): void {
    fetch(this.url)
      .then((response) => response.json())
      .then((datas) => {
        this.data = datas;
        console.log('Données récupérées depuis l\'API :', this.data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des données de l\'API :', error);
      });
  }

}
