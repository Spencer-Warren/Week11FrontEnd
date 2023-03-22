import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { registerUser, loginUser, responseUser } from '../classes/user';
import { Observable } from 'rxjs';
import { TaskNoId } from '../classes/task';

@Injectable({
  providedIn: 'root'
})
export class RESTAPIService{


  url: string = "https://c8f68045-701e-4115-a353-49b9e4bf31e7.mock.pstmn.io";

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    })
  }

  uid: string = localStorage.getItem('userid') || '';

  // Register
  registerUser(user: registerUser) {
    return this.http.put(this.url + '/tasks', user, this.httpOptions);
  }

  // Login
  loginUser(user: loginUser) {
    return this.http.post<Observable<boolean>>(this.url + '/login', user, this.httpOptions);
  }

  // Get User
  getUser(username: string) {
    return this.http.get(this.url + '/user/' + username, this.httpOptions);
  }

  // Update User
  updateUser(user: responseUser) {
    return this.http.put(this.url + '/profile/edit', user, this.httpOptions);
  }

  // Get Tasks
  getTasks(){
    return this.http.get(this.url + "/" + this.uid + '/tasks', this.httpOptions);
  }
  
  createTask(task: TaskNoId) {
    return this.http.put(this.url + "/" + this.uid + '/tasks', task, this.httpOptions);
  }

  // Get Task
  getTask(taskId: number){
    return this.http.get(this.url + "/" + this.uid + '/tasks/' + taskId, this.httpOptions);
  }

  // updateTask
  updateTask(task: any){
    return this.http.put(this.url + "/" + this.uid + '/tasks/' + task.id, task, this.httpOptions);
  }

}
