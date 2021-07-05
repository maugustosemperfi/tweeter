import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { loadRemoteModule } from '@angular-architects/module-federation';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () =>
            import('./modules/feed/feed.module').then((m) => m.FeedModule),
        },
        {
          path: 'profile',
          loadChildren: () =>
            loadRemoteModule({
              remoteEntry: 'http://localhost:4201/remoteEntry.js',
              remoteName: 'profile',
              exposedModule: './Module',
            }).then((m) => m.ProfileModule),
        },
      ],
      { initialNavigation: 'enabled' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
