import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/web-services/api.service';
import { endpoints } from 'src/app/helpers/endpoints';
import { Login } from 'src/app/models/Login';
import { Router } from '@angular/router';
import { UsernameValidators } from 'src/app/helpers/validators/username.validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.maxLength(30),
      Validators.minLength(5),
      UsernameValidators.cannotContainSpace
    ]),
    
    password: new FormControl('', [
      Validators.required,
      Validators.maxLength(30),
      Validators.minLength(5),
      UsernameValidators.cannotContainSpace,
      UsernameValidators.shouldBeUnique
    ])
  });

  private isUniqueUsername: Object = null;

  get username() { return this.form.get('username'); }
  get password() { return this.form.get('password'); }

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    
  }

  login(username: string, password: string){
    this.apiService.Login(endpoints.LOGIN_USER_API_URL, 
      new Login(username, password, endpoints.GRANT_TYPE))
      .subscribe((result: any) => 
      {
        localStorage.setItem('access_token', result.access_token);
        localStorage.setItem('refresh_token', result.refresh_token);
        this.router.navigateByUrl('/home');
      });
  }
  onSubmit(){
    this.form.setErrors({invalidLogin: true});
  }
}
