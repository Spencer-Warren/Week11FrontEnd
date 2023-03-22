import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { registerUser, loginUser, responseUser } from './classes/user';

@Injectable({
  providedIn: 'root'
})
export class RESTAPIService{

  url: string = "https://9732674c-f312-42fe-9fad-63a959832b91.mock.pstmn.io";

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    })
  }

  // Register
  registerUser(user: registerUser) {
    return this.http.put(this.url + '/tasks', user, this.httpOptions);
  }

  // Login
  loginUser(user: loginUser) {
    return this.http.put<responseUser>(this.url + '/login', user, this.httpOptions);
  }

  updateUser(user: responseUser) {
    return this.http.put(this.url + '/profile/edit', user, this.httpOptions);
  }

}
