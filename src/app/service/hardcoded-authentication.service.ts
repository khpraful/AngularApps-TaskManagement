import { Injectable } from '@angular/core';
import { ConditionalExpr } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    console.log('before ' + this.isUserLoggedIn())
    if (username === 'praful' && password === 'test') {
      sessionStorage.setItem("authenticatedUser", username)
      console.log('after ' + this.isUserLoggedIn())
      return true
    } else {
      return false
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("authenticatedUser")
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem("authenticatedUser")
  }
}