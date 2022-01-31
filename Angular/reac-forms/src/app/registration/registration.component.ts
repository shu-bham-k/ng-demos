import { RegistrationService } from './../registration.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from 'src/app/shared/password.validator';
import { forbiddenNameValidator } from 'src/app/shared/user-name.validator';
import { FormArray } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm!: FormGroup;
 

  get userName(){
    return this.registrationForm.get('userName');
  }

  get email(){
    return this.registrationForm.get('email');
  }

  constructor(private fb: FormBuilder , private _registrationService: RegistrationService,private router:Router,private route:ActivatedRoute) {}

  ngOnInit(){
    this.registrationForm = this.fb.group({
      userName: ['', [Validators.required,Validators.minLength(3), forbiddenNameValidator(/password/)]],
      email:['',Validators.required],
      subscribe: [false],
      password: ['',Validators.required],
      confirmPassword: [''],
      image:['',Validators.required],
      date:['',Validators.required],
      address: this.fb.group({
        city: ['',Validators.required],
        state:['',Validators.required],
        postalCode:['',Validators.required]
      }),
      aliases: this.fb.array([
        this.fb.control('')
      ])
    },{validator: PasswordValidator});

    this.registrationForm.get('subscribe')?.valueChanges
    .subscribe(checkedValue => {
      const email = this.registrationForm.get('email');
      if(checkedValue){
        email?.setValidators(Validators.required);
      } else{
        email?.clearValidators();
      }
      email?.updateValueAndValidity();
    });
      
  }

  get aliases() {
    return this.registrationForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  onSubmit(){
    console.log(this.registrationForm.value);
   // this._registrationService.register(this.registrationForm.value)
    //    .subscribe(
      //    response => console.log("Success!",response),
        //  error => console.error('Error!',error) 
       // );
       let data :any= this.registrationForm.value;
       this.router.navigate(['/view'],{
         queryParams:{data:JSON.stringify(data)}
       })
 }

 updateProfile() {
  this.registrationForm.patchValue({
    userName: 'Nancy',
    address: {
      city: '123 Drew Street',
      state: 'newyork'
    }
  });
}


}
