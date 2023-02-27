import { Component } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent {
  Posts:Post[] =[
    {
      title:"So Undecisive",
      thought:"Am I gonna eat leftovers or Wendy's tonight??"
    },
    {
      title:"To Wasted",
      thought:"After last night, I will NEVER drink again!!! #stupidhangover"
    },
    {
      title:"Creative",
      thought:"Made 5 beats in 2 hours, right before class ;) #goatstatus "
    }
  ];

  AddPost(newPost:Post){
    this.Posts.push(newPost);
    this.display=false;
  }

  display:boolean = false;
}
