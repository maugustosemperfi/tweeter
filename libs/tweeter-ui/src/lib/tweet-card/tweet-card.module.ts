import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { TweetCardComponent } from './tweet-card.component';

@NgModule({
  imports: [MatCardModule],
  exports: [],
  declarations: [TweetCardComponent],
})
export class TweetCardModule {}