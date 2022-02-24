
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignInComponent } from './signIn/sign-in/sign-in.component';
import { LogoComponent } from './signIn/logo/logo.component';
import { ForgotPasswordComponent } from './signIn/forgot-password/forgot-password.component';
import { SetPasswordComponent } from './signIn/set-password/set-password.component';

import { SidenavComponent } from './logged-in/sidenav/sidenav.component';
import { DashboardComponent } from './logged-in/dashboard/dashboard.component';
import { UserManagementComponent } from './logged-in/user-management/user-management.component';
import { PollComponent } from './logged-in/poll/poll.component';
import { BlogsComponent } from './logged-in/blogs/blogs.component';
import { GroupsComponent } from './logged-in/groups/groups.component';
import { ReportsComponent } from './logged-in/reports/reports.component';
import { ProfileComponent } from './logged-in/profile/profile.component';
import { SettingsComponent } from './logged-in/settings/settings.component';
import { TopBarComponent } from './logged-in/top-bar/top-bar.component';
import { LoggedInComponent } from './logged-in/logged-in.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    LogoComponent,
    ForgotPasswordComponent,
    SetPasswordComponent,
    SidenavComponent,
    DashboardComponent,
    UserManagementComponent,
    PollComponent,
    BlogsComponent,
    GroupsComponent,
    ReportsComponent,
    ProfileComponent,
    SettingsComponent,
    TopBarComponent,
    LoggedInComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2OrderModule,
    Ng2SearchPipeModule
    
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
