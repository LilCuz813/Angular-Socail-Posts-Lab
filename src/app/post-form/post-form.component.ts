import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
  newPost:Post = {} as Post;
  @Output() Submitted = new EventEmitter<Post>

  

  SubmitPost():void{
    let result:Post = {
      title:this.newPost.title,
      thought:this.newPost.thought
    };

    this.Submitted.emit(result)
  }
}
