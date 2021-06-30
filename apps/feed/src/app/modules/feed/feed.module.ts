import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { FeedRoutingModule } from './feed-routing.module';
import { FeedComponent } from './feed.component';
import { TweetCardModule } from '@tweeter/ui';
import { TweetComponent } from './components/tweet/tweet.component';

const routes: Routes = [{ path: '', component: FeedComponent }];

@NgModule({
  declarations: [FeedComponent, TweetComponent],
  imports: [
    CommonModule,
    FeedRoutingModule,
    RouterModule.forChild(routes),
    TweetCardModule,
  ],
})
export class FeedModule {}
