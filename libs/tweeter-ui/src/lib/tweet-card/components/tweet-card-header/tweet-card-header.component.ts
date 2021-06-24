import { Component, Input } from '@angular/core';

@Component({
  selector: 'tui-tweet-card-header',
  templateUrl: './tweet-card-header.component.html',
  styleUrls: ['./tweet-card-header.component.scss'],
})
export class TweetCardHeaderComponent {
  @Input()
  title!: string;

  @Input()
  subtitle!: string;
}
