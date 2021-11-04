import { Component, OnInit } from '@angular/core';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  allPosts: any
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