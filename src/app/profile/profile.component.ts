import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RESTAPIService } from '../services/restapiservice.service';
import { AppComponent } from '../app.component';

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
  

  constructor(private router: Router, private rest: RESTAPIService, private app: AppComponent) { }

  toEdit() {
    this.router.navigate(['/profile/edit']);
  }

  delete(){
    if (confirm("are you sure you want to delete your account?")) {
      this.rest.deleteUser(this.userid).subscribe((data: any) => {
        this.app.logout();
      });
    }
  }

}
