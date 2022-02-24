import { data } from './../../../assets/data/adminsignIn-data';

import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiService } from './../../api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'signIn',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  isLoginError: boolean = false;

  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router) { }

  userDetail!: FormGroup;


  get email() {
    return this.userDetail.get('email');
  }

  get password() {
    return this.userDetail.get('password')
  }
  ngOnInit(): void {
    this.userDetail = this.fb.group({

      email: ['', [Validators.pattern(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$/), Validators.required]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*)[A-Za-z\d$@$!%*#?&]{8,}$/)]]

    })
  }

  onSubmit(email: string, password: string) {
    console.log(this.userDetail.value);
    this.apiService.signIn(email, password).subscribe((data: any) => {
      if (data.innerErrorMessage != null) {
        //TODO :- show error message
        console.log(data.innerErrorMessage);

      } else if (data.errorMessage == "Invalid Email or Password") {
        console.error(data.errorMessage);
        this.isLoginError = true;

      }
      else {
        if (!data.result) {
          //TODO :- show invalid userid password

          this.isLoginError = true;


        } else {
          
          this.router.navigate(['/Dashboard'])

        }
      }
      localStorage.setItem('Token', data.result);


    });

   

  }

  public showPassword: boolean = false;

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

}


