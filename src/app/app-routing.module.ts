import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { PerfilComponent } from './perfil/perfil.component';
import { BusquedaDocComponent } from './busqueda-doc/busqueda-doc.component';
import { RecetasComponent } from './recetas/recetas.component';
import { CalificacionComponent } from './calificacion/calificacion.component';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "perfil", component: PerfilComponent, canActivate: [AuthGuard] },
  { path: "busqueda", component: BusquedaDocComponent, canActivate: [AuthGuard] },
  { path: "receta", component: RecetasComponent, canActivate: [AuthGuard] },
  { path: "calificacion", component: CalificacionComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
