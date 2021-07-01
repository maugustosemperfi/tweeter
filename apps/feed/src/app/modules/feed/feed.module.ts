import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { FeedRoutingModule } from './feed-routing.module';
import { FeedComponent } from './feed.component';
import { TweetCardModule } from '@tweeter/ui';
import { TweetComponent } from './components/tweet/tweet.component';
import { CreateTweetComponent } from './components/create-tweet/create-tweet.component';
import { CardModule } from '@tweeter/ui';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { TrendsComponent } from './components/trends/trends.component';

const routes: Routes = [{ path: '', component: FeedComponent }];

@NgModule({
  declarations: [FeedComponent, TweetComponent, CreateTweetComponent, TrendsComponent],
  imports: [
    CommonModule,
    FeedRoutingModule,
    RouterModule.forChild(routes),
    TweetCardModule,
    CardModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class FeedModule {}
