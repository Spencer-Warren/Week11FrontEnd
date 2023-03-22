import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(private app: AppComponent) { }

  isLoggedIn() {
    return sessionStorage.getItem('loggedin') == 'true';
  }

  logout() {
    this.app.logout();
  }
}
