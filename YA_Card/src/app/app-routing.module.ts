import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './signIn/forgot-password/forgot-password.component';
import { SignInComponent } from './signIn/sign-in/sign-in.component';
import { SetPasswordComponent } from './signIn/set-password/set-password.component';

const routes: Routes = [
  
  {path:'signIn' , component:SignInComponent,
  data: { animation: 'HomePage' }
  },
  {path: '',   redirectTo: '/signIn', pathMatch: 'full'},
  {path: 'setPassword', component:SetPasswordComponent},
  {path: 'forgotPassword', component:ForgotPasswordComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
