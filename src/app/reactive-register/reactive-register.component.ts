import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-reactive-register',
  templateUrl: './reactive-register.component.html',
  styleUrls: ['./reactive-register.component.css']
})
export class ReactiveRegisterComponent implements OnInit {
  loginForm: FormGroup;
  isLoggedIn: boolean;
  constructor(private _auth: AuthService) {
    this.loginForm = new FormGroup({
      email: new FormControl(),
    })
  }

  ngOnInit() {
    this._auth.isLoggedIn().subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn
      console.log('user log: ', isLoggedIn);
    });
  }

  login() {
    this._auth.login()
  }

  logout() {
    this._auth.logout()
  }
  
  get email(): string {
    return this.loginForm.value.email as string;
  }

}