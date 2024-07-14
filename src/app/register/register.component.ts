import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  nombre: string = "";
  apellido: string = "";
  email: string = "";
  password: string = "";
  confirmPassword: string = "";
  telefono: string = "";
  fechaNacimiento: string = "";
  sexo: string = "";

  constructor() {}

  register() {
    // Aquí puedes agregar la lógica para enviar los datos al backend
    console.log('Nombre:', this.nombre);
    console.log('Apellido:', this.apellido);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Confirm Password:', this.confirmPassword);
    console.log('Telefono:', this.telefono);
    console.log('Fecha de Nacimiento:', this.fechaNacimiento);
    console.log('Sexo:', this.sexo);
    
  }
}
