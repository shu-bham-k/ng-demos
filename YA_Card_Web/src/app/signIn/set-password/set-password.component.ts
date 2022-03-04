import { ApiService } from 'src/app/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from '../password.validator';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'setPassword',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.css']
})


export class SetPasswordComponent implements OnInit {




  public isCollapsed = true;
  public showPassword: boolean = false;
  public showPass: boolean = false;
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  public togglePasswordVisibili(): void {
    this.showPass = !this.showPass;
  }
  constructor(private fb: FormBuilder, private route: ActivatedRoute,
    private router: Router, private apiService: ApiService) { }

  userDetail!: FormGroup;

  token!: any;
  id!: BigInteger;
  get password() {
    return this.userDetail.get('password')
  }
  get confirmPassword() {
    return this.userDetail.get('comfirmPassword')
  }
  ngOnInit(): void {

    this.userDetail = this.fb.group({

      password: ['', [Validators.pattern(/^[A-Za-z\d$@$!%*#?&]{8,}$/), Validators.required]],
      confirmPassword: [''],

    }, { validator: PasswordValidator });

    const token = this.route.snapshot.queryParams['Token'];
    const id = this.route.snapshot.queryParams['Id'];

    this.token = token;
    this.id = id;
  }


  loading!: boolean
  public loader !: boolean

  onSubmit(password: string, confirmPassword: string) {

    this.loader = true;
    this.isCollapsed = !this.isCollapsed
    this.apiService.resetPassword(this.token, this.id, password, confirmPassword).subscribe((data: any) => {
      if (data.innerErrorMessage != null) {
        //TODO :- show error message
        this.loader = false;

      } else if (data.errorMessage == "Invalid User") {

        this.loading = false;
        this.loader = false;


      }
      else {
        if (data.result == null) {
          //TODO :- show error message
          this.loading = false;
          this.loader = false;

        }
        else {
          // show successfully reset password
          this.loading = true;
          this.loader = false;
        }
      }
    });
  }



}
