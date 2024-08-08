import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { MegaMenuModule } from 'primeng/megamenu';
import { AvatarModule } from 'primeng/avatar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';
import { SharedModule } from 'primeng/api';
import { SharedsModule } from './shareds/shareds.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth.guard';
import { MenubarModule } from 'primeng/menubar';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { SplitterModule } from 'primeng/splitter';
import { FieldsetModule } from 'primeng/fieldset';
import { ChipModule } from 'primeng/chip';
import { PerfilComponent } from './perfil/perfil.component';
import { BusquedaDocComponent } from './busqueda-doc/busqueda-doc.component';
import { CardModule } from 'primeng/card';
import { RecetasComponent } from './recetas/recetas.component';
import { CalificacionComponent } from './calificacion/calificacion.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PerfilComponent,
    BusquedaDocComponent,
    RecetasComponent,
    CalificacionComponent

  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    SharedsModule,
    SharedsModule,
    HttpClientModule,
    ButtonModule,
    MegaMenuModule,
    CommonModule,
    AvatarModule,
    FormsModule,
    AppRoutingModule,
    MenubarModule,
    DividerModule,
    InputTextModule,
    PasswordModule,
    CalendarModule,
    DropdownModule,
    SplitterModule,
    FieldsetModule,
    ChipModule,
    CardModule,



  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
