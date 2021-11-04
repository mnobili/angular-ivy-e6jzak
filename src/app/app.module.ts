import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FirstComponent } from './first/first.component';
import { CeoComponent } from './ceo/ceo.component';
import { DirComponent } from './dir/dir.component';
import { TemplateRegisterComponent } from './template-register/template-register.component';
import { ReactiveRegisterComponent } from './reactive-register/reactive-register.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostPipe } from './post.pipe';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: 'posts',
    component: PostsListComponent,
  },
  {
    path: 'login',
    component: TemplateRegisterComponent,
  }
] 

@NgModule({
  imports:      [ CommonModule, BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, HelloComponent, FirstComponent, CeoComponent, DirComponent, TemplateRegisterComponent, ReactiveRegisterComponent, PostsListComponent, PostPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
