import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { TweetCardComponent } from './tweet-card.component';
import { TweetCardContentComponent } from './components/tweet-card-content/tweet-card-content.component';
import { TweetCardHeaderComponent } from './components/tweet-card-header/tweet-card-header.component';
import { TweetCardFooterComponent } from './components/tweet-card-footer/tweet-card-footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    MatCardModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    TweetCardComponent,
    TweetCardContentComponent,
    TweetCardHeaderComponent,
    TweetCardFooterComponent,
  ],
  declarations: [
    TweetCardComponent,
    TweetCardContentComponent,
    TweetCardHeaderComponent,
    TweetCardFooterComponent,
  ],
})
export class TweetCardModule {}
