import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn$ = new BehaviorSubject(false);
  constructor() { }

  login() {
    this.isLoggedIn$.next(true)
    console.log(this.isLoggedIn$)
  }
  logout() {
    this.isLoggedIn$.next(false)
  }

  isLoggedIn() {
    return this.isLoggedIn$.asObservable();
  }
}