import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';  // Asegúrate de importar BrowserModule
import { RouterModule } from '@angular/router';  // Importa RouterModule si estás utilizando rutas
import { AppComponent } from './app.component';



// PrimeNG Modules
import { ButtonModule } from 'primeng/button';
import { MegaMenuModule } from 'primeng/megamenu';
import { AvatarModule } from 'primeng/avatar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { CommonModule } from '@angular/common';
import { SharedModule } from 'primeng/api';
import { SharedsModule } from './shareds/shareds.module';

@NgModule({
  declarations: [
    AppComponent


  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    SharedsModule,
    SharedModule,
    //Pime NG
    ButtonModule,
    MegaMenuModule,
    ButtonModule,
    CommonModule,
    AvatarModule,

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
