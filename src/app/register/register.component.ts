import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { RESTAPIService } from '../restapiservice.service';
import { registerUser } from '../classes/user';
import * as CryptoJS from 'crypto-js';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit{
  registerForm!: FormGroup;
  encryptedPassword!: string;

  constructor(private fb: FormBuilder, private service: RESTAPIService) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstName: new FormControl <string> ('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl <string> ('', [Validators.required, Validators.minLength(3)]),
      username: new FormControl <string> ('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl <string> ('', [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl <string> ('', [Validators.required, Validators.minLength(8)]),
    });
  }


  onSubmit() {
    if (this.registerForm.valid && this.passwordMatch) {
      // this.encryptedPassword = CryptoJS.AES.encrypt(this.password, AppComponent).toString();

      let user: registerUser = new registerUser(this.registerForm.value.firstName, this.registerForm.value.lastName, this.registerForm.value.username, this.registerForm.value.password);
      console.log(user);
      this.service.registerUser(user).subscribe((data: any) => {
        console.log(data);
      });
    }

  }

  get firstName(){
    return this.registerForm.get('firstName');
  }

  get lastName() {
    return this.registerForm.get('lastName');
  }

  get username() {
    return this.registerForm.get('username');
  }

  get password() {
    return this.registerForm.get('password');
  }
  
  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  get passwordMatch() {
    return this.registerForm.get('password')?.value === this.registerForm.get('confirmPassword')?.value;
  }

}
