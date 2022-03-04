import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'forgotPassword',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {



  text!: any;
  public isCollapsed = true;

  router: any;


  constructor(private fb: FormBuilder, private apiService: ApiService) { }

  userDetail!: FormGroup;


  get email() {
    return this.userDetail.get('email');
  }


  ngOnInit(): void {
    this.userDetail = this.fb.group({

      email: ['', [Validators.pattern(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$/), Validators.required]]

    })
  }

  // api call
  loading !: boolean
  public loader !: boolean
  onSubmit(email: string) {
    this.isCollapsed = !this.isCollapsed
    console.log(this.userDetail.value);
    this.loader = true;
    this.apiService.forgotPassword(email).subscribe((data: any) => {
      if (data.innerErrorMessage != null) {
        //   //TODO :- show error message
        console.log(data.innerErrorMessage);

      } else if (data.errorMessage == "Invalid User") {
        console.error(data.errorMessage);
        this.loading = false;
        this.loader = false;

      }
      else {
        if (data.result == "Email sent successfully to registered email") {
          this.loading = true;
          this.loader = false;
        } else {
          // when result is null 
          this.loading = false;
          this.loader = false;
        }
      }


    });


  }

  // resend

  resend(email: string) {
    this.isCollapsed = this.isCollapsed
    
    this.loader = true;
    this.apiService.forgotPassword(email).subscribe((data: any) => {
      if (data.innerErrorMessage != null) {
        //   //TODO :- show error message
        
        this.loader = false;

      } else if (data.errorMessage == "Invalid User") {
        
        this.loading = false;
        this.loader = false;

      }
      else {
        if (data.result == "Email sent successfully to registered email") {
          this.loading = true;
          this.loader = false;
        } else {
          // when result is null 
          this.loading = false;
          this.loader = false;
        }
      }


    });


  }


}
