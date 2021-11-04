import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Posts } from './posts';

@Injectable({
  providedIn: "root"
})
export class PostService {

  constructor(private client: HttpClient) { }
  fetchAllPosts() {
    return this
    .client
    .get<Posts[]>('https://jsonplaceholder.typicode.com/posts')
  }
}