import { NgModule } from '@angular/core';

import { ProfileComponent } from './profile.component';
import { CardModule, SideMenuModule } from '@tweeter/ui';
import { BioCardComponent } from './components/bio-card/bio-card.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [{ path: '', component: ProfileComponent }];

@NgModule({
  imports: [
    CommonModule,
    SideMenuModule,
    CardModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    RouterModule.forChild(routes),
  ],
  exports: [],
  declarations: [ProfileComponent, BioCardComponent],
  providers: [],
})
export class ProfileModule {}
