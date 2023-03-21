import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { registerUser, loginUser } from './classes/user';

@Injectable({
  providedIn: 'root'
})
export class RESTAPIService{

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // Register
  registerUser(user: registerUser) {
    return this.http.put('http://localhost:8080/tasks', user, this.httpOptions);
  }

  // Login
  loginUser(user: loginUser) {
    return this.http.post('http://localhost:8080/login', user, this.httpOptions);
  }

}
