
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  userDetail!: FormGroup;
  constructor(private fb: FormBuilder) { }

  get userName(){
    return this.userDetail.get('userName');
  }

  get email(){
    return this.userDetail.get('email');
  }

  get password(){
    return this.userDetail.get('password')
  }

  get phone(){
    return this.userDetail.get('phone')
  }


  ngOnInit() {
    this.userDetail = this.fb.group({
      userName: ['', [Validators.required,Validators.pattern('^[a-zA-Z0-9_-]{0,}$') ]],
      email:['',[Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),Validators.required]],
      password: ['',Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/)],
      phone: ['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
     
    })
  }

}
