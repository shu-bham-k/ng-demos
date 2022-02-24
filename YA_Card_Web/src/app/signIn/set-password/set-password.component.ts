import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from '../password.validator';


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
  constructor(private fb: FormBuilder) { }

  userDetail!: FormGroup;

  
  

  get password(){
    return this.userDetail.get('password')
  }
  get confirmPassword(){
    return this.userDetail.get('comfirmPassword')
  }
  ngOnInit(): void {
    this.userDetail = this.fb.group({
     
      password: ['',[Validators.pattern(/^[A-Za-z\d$@$!%*#?&]{8,}$/),Validators.required]],
      confirmPassword: [''],
     
    },{validator: PasswordValidator});
  }

}
