import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, } from '@angular/forms';
import { RESTAPIService } from '../services/restapiservice.service';
import { loginUser } from '../classes/user';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { EncryptService } from '../services/encrypt.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  encryptedPassword: string = '';

  constructor(private app: AppComponent, private service: RESTAPIService, private router: Router, private encryption: EncryptService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl<string>('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl<string>('', [Validators.required, Validators.minLength(8)]),
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.encryptedPassword = this.encryption.encrypt(this.loginForm.value.password);
      let user: loginUser = new loginUser(this.loginForm.value.username, this.encryptedPassword);
      this.service.loginUser(user).subscribe( 
        isValid => {
          if (isValid) {
            this.getUser();
            sessionStorage.setItem('token', this.loginForm.value.username + " : " + this.loginForm.value.password);
          }
          else {
            console.log("Invalid login");
          }
        });

    }
  }

  getUser() {
    this.service.getUser(this.loginForm.value.username).subscribe((data: any) => {
      this.app.login(data);
      this.router.navigate(['/tasks']);
    });
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
