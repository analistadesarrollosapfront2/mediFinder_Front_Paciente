import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ButtonModule } from 'primeng/button';
import { MegaMenuModule } from 'primeng/megamenu';
import { AvatarModule } from 'primeng/avatar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MenubarModule } from 'primeng/menubar';
import { DividerModule } from 'primeng/divider';
import { FooterComponent } from '../footer/footer.component';




@NgModule({
  declarations: [
    SidebarComponent,
    FooterComponent
  ],
  exports:[
    SidebarComponent,
    FooterComponent
  ],

  imports: [
    CommonModule,
    ButtonModule,
    MegaMenuModule,
    ButtonModule,
    FormsModule,
    AvatarModule,
    MenubarModule,
    DividerModule
  ]
})
export class SharedsModule { }
