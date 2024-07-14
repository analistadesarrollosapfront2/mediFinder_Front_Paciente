import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = "";
  password: string = "";
  message: string = "";
  messageClass: string = "";

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    const user = { email: this.email, password: this.password };
    this.authService.login(user).subscribe((data) => {
      this.message = data.message;
      this.messageClass = data.success ? 'success' : 'error';

      if (data.success) {
        this.router.navigate(['/home']);
      }
    });
  }
}
