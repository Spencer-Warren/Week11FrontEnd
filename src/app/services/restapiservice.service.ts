import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { registerUser, loginUser, responseUser } from '../classes/user';
import { Observable } from 'rxjs';
import { TaskNoId } from '../classes/task';

@Injectable({
  providedIn: 'root'
})
export class RESTAPIService{


  url: string = "http://Gensparkweek11-env.eba-mybnyvfw.us-east-1.elasticbeanstalk.com/api";


  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE'
    })
  }
  get uid () {
    return sessionStorage.getItem('userid');
  }

  // Register
  registerUser(user: registerUser) {
    return this.http.put(this.url + '/register', user, this.httpOptions);
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
    return this.http.post(this.url + '/profile/edit', user, this.httpOptions);
  }

  // Delete User
  deleteUser(userId: string) {
    return this.http.delete(this.url + '/profile/' + userId, this.httpOptions);
  }

  // Get All Tasks
  getTasks(){
    return this.http.get(this.url + "/" + this.uid + '/tasks', this.httpOptions);
  }
  
  // Create Task
  createTask(task: TaskNoId) {
    return this.http.post(this.url + "/" + this.uid + '/tasks', task, this.httpOptions);
  }

  // Get Task
  getTask(taskId: number){
    return this.http.get(this.url + "/" + this.uid + '/tasks/' + taskId, this.httpOptions);
  }

  // Update Task
  updateTask(task: any){
    return this.http.put(this.url + "/" + this.uid + '/tasks', task, this.httpOptions);
  }

  // Delete Task
  deleteTask(taskId: number){
    return this.http.delete(this.url + "/" + this.uid + '/tasks/' + taskId, this.httpOptions);
  }

}
