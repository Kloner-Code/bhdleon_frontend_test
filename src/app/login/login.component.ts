import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

import { AlertService } from '../services/alert/alert.service';
import { AuthService } from '../services/auth/auth.service';
import { LoginService } from '../services/login/login.service';
import { UserProfile } from '../view-models/user-profile';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private alertService: AlertService,
    private loginService: LoginService,
    private authService: AuthService) { }

  ngOnInit() {
    this.buildForm();
  }

  login() {
    if (this.loginForm.invalid) {
      this.alertService.showMessage('Las credenciales son invalidas.')
      return;
    }
    const credentials = this.loginForm.value;
    this.loginService.login(credentials).then((userProfile: UserProfile) => {
      this.authService.setToken(userProfile.access_token);
      this.router.navigate(['./products']);
    }).catch((error: HttpErrorResponse) => {
      this.alertService.showMessage(error.error.message);
    });
  }

  buildForm() {
    const regExp = '^([A-z0-9]){4,}$';
    this.loginForm = this.formBuilder.group({
      userId: [null, Validators.compose([Validators.required, Validators.pattern(environment.idRegex)])],
      password: [null, Validators.compose([Validators.required, Validators.pattern(regExp)])]
    });
  }
}
