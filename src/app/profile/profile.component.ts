import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  firstname: string = sessionStorage.getItem('firstname') || '';
  lastname: string = sessionStorage.getItem('lastname') || '';
  username: string = sessionStorage.getItem('username') || '';
  userid: string = sessionStorage.getItem('userid') || '';
  

  constructor(private router: Router) { }

  toEdit() {
    this.router.navigate(['/profile/edit']);
  }

}
