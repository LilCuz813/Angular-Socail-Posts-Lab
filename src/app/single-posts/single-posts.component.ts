import { Component, Input } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-single-posts',
  templateUrl: './single-posts.component.html',
  styleUrls: ['./single-posts.component.css']
})
export class SinglePostsComponent {
  @Input() DisplayPost:Post = {} as Post;
}
