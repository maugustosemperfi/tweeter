import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { FeedRoutingModule } from './feed-routing.module';
import { FeedComponent } from './feed.component';
import { TweetCardModule } from '@tweeter/ui';

const routes: Routes = [{ path: '', component: FeedComponent }];

@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    FeedRoutingModule,
    RouterModule.forChild(routes),
    TweetCardModule,
  ],
})
export class FeedModule {}
