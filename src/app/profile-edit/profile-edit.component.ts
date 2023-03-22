import { Component, OnInit } from '@angular/core';
import { responseUser } from '../classes/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RESTAPIService } from '../restapiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile-edit.component.html',
  styleUrls: []
})
export class ProfileEditComponent implements OnInit{
  firstname: string = localStorage.getItem('firstname') || '';
  lastname: string = localStorage.getItem('lastname') || '';
  username: string = localStorage.getItem('username') || '';
  userid: string = localStorage.getItem('userid') || '';

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
      this.updateLocalStorage();
      this.router.navigate(['/profile']);
    }
  }

  updateLocalStorage() {
    localStorage.setItem('firstname', this.profileForm.value.firstName);
    localStorage.setItem('lastname', this.profileForm.value.lastName);
    localStorage.setItem('username', this.profileForm.value.username);
  }


}
