import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [SideMenuComponent],
  imports: [CommonModule, MatListModule, MatIconModule],
  exports: [SideMenuComponent],
})
export class SideMenuModule {}
