import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor (private router: Router){}

  isSignIn: boolean = true;
  email: string = '';
  password: string = '';
  password_confirm: string = '';
  isAdmin: boolean = false;

  haciaInicio() {
    this.router.navigate(['/inicio']); // Reemplaza '/ruta' por la ruta a la que deseas redirigir
  }

  switchToSignIn() {
    this.isSignIn = true;
  }

  switchToSignUp() {
    this.isSignIn = false;
  }
}
