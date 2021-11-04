import { Component, OnInit } from '@angular/core';
import { PostService } from '../../post.service';
import { Posts } from '../../posts';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  allPosts: Posts[]
  constructor(private _posts: PostService){ }
  ngOnInit() {
    this._posts.fetchAllPosts()
    .subscribe(
      posts => {
        this.allPosts = posts;
        console.log(posts)
    },
    error => {
    }
    )
  }
}