import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignInComponent } from './signIn/sign-in/sign-in.component';
import { LogoComponent } from './signIn/logo/logo.component';
import { ForgotPasswordComponent } from './signIn/forgot-password/forgot-password.component';
import { SetPasswordComponent } from './signIn/set-password/set-password.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    LogoComponent,
    ForgotPasswordComponent,
    SetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
