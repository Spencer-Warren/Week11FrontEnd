import { Component } from '@angular/core';
import { responseUser } from './classes/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  key: string = "dre56%3cbbtd3a2efnyftg@G";

  constructor() {
  }

  getKey() {
    return this.key;
  }

  login(data: responseUser) {
    localStorage.setItem('userid', data.userid);
    localStorage.setItem('username', data.username);
    localStorage.setItem('firstname', data.firstname);
    localStorage.setItem('lastname', data.lastname);
    localStorage.setItem('loggedin', 'true');
  }

  logout() {
    localStorage.setItem('userid', '');
    localStorage.setItem('username', '');
    localStorage.setItem('firstname', '');
    localStorage.setItem('lastname', '');
    localStorage.setItem('loggedin', 'false');
  }
}
