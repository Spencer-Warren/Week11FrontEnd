import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { RESTAPIService } from '../restapiservice.service';
import { loginUser, responseUser} from '../classes/user';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;

  constructor(private app: AppComponent, private service: RESTAPIService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl <string> ('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl <string> ('', [Validators.required, Validators.minLength(8)]),
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {

      let user: loginUser = new loginUser(this.loginForm.value.username, this.loginForm.value.password);

      this.service.loginUser(user).subscribe(
        (data: responseUser) => {
          this.app.login(data);
          this.router.navigate(['/tasks']);
        }
      );
    }
  }
  
  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
