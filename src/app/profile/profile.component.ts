import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  firstname: string = localStorage.getItem('firstname') || '';
  lastname: string = localStorage.getItem('lastname') || '';
  username: string = localStorage.getItem('username') || '';
  userid: string = localStorage.getItem('userid') || '';
  

  constructor(private router: Router) { }

  toEdit() {
    this.router.navigate(['/profile/edit']);
  }

}
