import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from "@angular/router";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import API_AUTH from "../../api.endpoints";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  template: `
    <div>
      <p>Register</p>
      <form [formGroup]="registrationForm" (ngSubmit)="onSubmit()">
        <div>
          <label for="firstname">First Name:</label>
          <input type="text" id="firstname" formControlName="firstname">
        </div>
        <div>
          <label for="lastname">Last Name:</label>
          <input type="text" id="lastname" formControlName="lastname">
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" formControlName="email">
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" formControlName="password">
        </div>
        <div>
          <label for="role">Role:</label>
          <input type="text" id="role" formControlName="role">
        </div>
        <button type="submit">Register</button>
      </form>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class RegisterComponent {

  private url = API_AUTH.register;
  registrationForm: FormGroup;
  responseStatus: number | undefined;
  responseData: any;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      role: ['USER', Validators.required]
    });
  }
  onSubmit() {
    if (this.registrationForm.valid) {
      const formData = this.registrationForm.value;

      const requestOptions: RequestInit = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      };
      console.log(requestOptions);

      fetch(this.url, requestOptions)
        .then((response) => {
          this.responseStatus = response.status;
          return response.json(); // Convertir la réponse en JSON
        })
        .then((data) => {
          this.responseData = data; // Stocker les données de réponse
          console.log('Code HTTP de la réponse :', this.responseStatus);
          console.log('Contenu de la réponse :', this.responseData);
        })
        .catch((error) => {
          console.error('Erreur lors de la requête POST :', error);
        });
    } else {
      alert('Formulaire invalide. Veuillez remplir tous les champs correctement.')
      console.error('Formulaire invalide. Veuillez remplir tous les champs correctement.');
    }
  }
}


