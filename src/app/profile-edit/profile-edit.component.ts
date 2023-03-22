import { Component, OnInit } from '@angular/core';
import { responseUser } from '../classes/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RESTAPIService } from '../services/restapiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile-edit.component.html',
  styleUrls: []
})
export class ProfileEditComponent implements OnInit{
  firstname: string = sessionStorage.getItem('firstname') || '';
  lastname: string = sessionStorage.getItem('lastname') || '';
  username: string = sessionStorage.getItem('username') || '';
  userid: string = sessionStorage.getItem('userid') || '';

  profileForm!: FormGroup;

  

  constructor(private service: RESTAPIService, private router: Router) { }

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      firstName: new FormControl <string> ('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl <string> ('', [Validators.required, Validators.minLength(3)]),
      username: new FormControl <string> ('', [Validators.required, Validators.minLength(3)]),
    });

    this.profileForm.patchValue({
      firstName: this.firstname,
      lastName: this.lastname,
      username: this.username
    });
  }

  onSubmit() {
    if (this.profileForm.valid) {
      let user: responseUser = new responseUser(this.profileForm.value.firstName, this.profileForm.value.lastName, this.profileForm.value.username, this.userid);
      console.log(user);
      this.service.updateUser(user).subscribe((data: any) => {});
      this.updateSessionStorage();
      this.router.navigate(['/profile']);
    }
  }

  updateSessionStorage() {
    sessionStorage.setItem('firstname', this.profileForm.value.firstName);
    sessionStorage.setItem('lastname', this.profileForm.value.lastName);
    sessionStorage.setItem('username', this.profileForm.value.username);
  }


}
