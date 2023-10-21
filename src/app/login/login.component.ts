import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isSignIn: boolean = true;
  email: string = '';
  password: string = '';
  password_confirm: string = '';
  isAdmin: boolean = false;

  switchToSignIn() {
    this.isSignIn = true;
  }

  switchToSignUp() {
    this.isSignIn = false;
  }
}
