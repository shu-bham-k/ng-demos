import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'forgotPassword',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {



  text!:any;
  public isCollapsed = true;

 
  constructor(private fb: FormBuilder) { }

  userDetail!: FormGroup;

  
  get email(){
    return this.userDetail.get('email');
  }

 
  ngOnInit(): void {
    this.userDetail = this.fb.group({
      
      email:['',[Validators.pattern(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$/),Validators.required]]
     
    })
  }

}
