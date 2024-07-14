import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Datos estáticos para pruebas
  private users = [
    { email: 'cris', password: 'cris123', name: 'Cristian' },
    { email: 'angie', password: 'angie123', name: 'La angie' }   
  ];
  
  constructor() {}

  login(user: any): Observable<any> {
    const foundUser = this.users.find(
      u => u.email === user.email && u.password === user.password
    );

    if (foundUser) {
      localStorage.setItem('currentUser', JSON.stringify(foundUser));
      return of({ success: true, message: `Welcome, ${foundUser.name}` });
    } else {
      return of({ success: false, message: 'Invalid email or password' });
    }
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('currentUser') !== null;
  }
}