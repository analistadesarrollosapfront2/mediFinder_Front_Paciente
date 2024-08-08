import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  items: MenuItem[] | undefined;

  constructor(private router: Router) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Mis recetas',
        icon: 'pi pi-file',
        routerLink: '/receta'
      },
      {
        label: 'Busca a tu doctor',
        icon: 'pi pi-search',
        routerLink: '/busqueda'
      },
      {
        label: 'Califica tu experiencia',
        icon: 'pi pi-star-fill',
        routerLink: '/calificacion'
      },
      {
        label: 'Perfil',
        icon: 'pi pi-user',
        routerLink: '/perfil'
      }
    ];
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
