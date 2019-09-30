import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CustomMaterialModule } from '../shared/custom-material.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, SidenavComponent],
  imports: [CommonModule, CustomMaterialModule, AppRoutingModule],
  exports: [HeaderComponent, FooterComponent, SidenavComponent]
})
export class LayoutModule {}
