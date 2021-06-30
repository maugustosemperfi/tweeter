import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { MatCardModule } from '@angular/material/card';
import { CardFooterComponent } from './card-footer/card-footer.component';

@NgModule({
  declarations: [CardComponent, CardFooterComponent],
  imports: [CommonModule, MatCardModule],
  exports: [CardComponent, MatCardModule, CardFooterComponent],
})
export class CardModule {}
