import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {

  }

  async login() {
    try {
      let resp = await this.authService.loginWithUsernameAndPassword(this.username, this.password);
      this.clearInputs()
      localStorage.setItem('token', resp.token)
      this.router.navigateByUrl('/todos');
    } catch (e) {
      this.clearInputs();
      alert('Login fehlgeschlagen');
      console.error(e);
    }
  }

  clearInputs() {
    this.username = '';
    this.password = '';
  }

}
