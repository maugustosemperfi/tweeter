import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { MatCardModule } from '@angular/material/card';
import { CardFooterComponent } from './card-footer/card-footer.component';
import { CardHeaderComponent } from './card-header/card-header.component';
import { CardContentComponent } from './card-content/card-content.component';

@NgModule({
  declarations: [
    CardComponent,
    CardFooterComponent,
    CardHeaderComponent,
    CardContentComponent,
  ],
  imports: [CommonModule, MatCardModule],
  exports: [
    CardComponent,
    MatCardModule,
    CardFooterComponent,
    CardHeaderComponent,
    CardContentComponent,
  ],
})
export class CardModule {}
