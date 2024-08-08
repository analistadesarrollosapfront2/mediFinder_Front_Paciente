import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  nombre: string = '';
  apellido: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  telefono: string = '';
  fechaNacimiento: Date | null = null;
  sexo: string = '';
  sexOptions = [
    { label: 'Masculino', value: 'Masculino' },
    { label: 'Femenino', value: 'Femenino' }
  ];

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    const user = {
      nombre: this.nombre,
      apellido: this.apellido,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword,
      telefono: this.telefono,
      fechaNacimiento: this.fechaNacimiento,
      sexo: this.sexo
    };

  //  this.authService.register(user).subscribe((data) => {
  //     // Manejar la respuesta del registro
  //   });
  }
}
