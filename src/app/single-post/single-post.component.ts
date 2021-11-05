import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../post.service';
import { Posts } from '../../posts';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

constructor(private route: ActivatedRoute, private _posts: PostService) { }
singlePost: any
  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        const id = params.get('id');
        this._posts.fetchSinglePost(id).subscribe(
          post => {
            this.singlePost = post;
          },
          error => {
          }
          )
      })
    }

}