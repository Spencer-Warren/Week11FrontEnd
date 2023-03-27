import { Component } from '@angular/core';
import { responseUser } from './classes/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private router: Router) { }

  login(data: responseUser) {
    sessionStorage.setItem('userid', data.userid);
    sessionStorage.setItem('username', data.username);
    sessionStorage.setItem('firstname', data.firstname);
    sessionStorage.setItem('lastname', data.lastname);
    sessionStorage.setItem('loggedin', 'true');
  }

  logout() {
    sessionStorage.setItem('userid', '');
    sessionStorage.setItem('username', '');
    sessionStorage.setItem('firstname', '');
    sessionStorage.setItem('lastname', '');
    sessionStorage.setItem('loggedin', 'false');
    this.router.navigate(['/']);
  }

  get uid() {
    return Number.parseInt(sessionStorage.getItem('userid') || '0');
  }
}
