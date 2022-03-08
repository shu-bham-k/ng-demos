
import { HttpClient, HttpClientModule,  HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TranslateModule,TranslateLoader} from '@ngx-translate/core';
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
import { MatNativeDateModule } from '@angular/material/core';
import { RequestInterceptor } from './api-services/request-interceptor.service';
import {MatButtonToggleModule} from '@angular/material/button-toggle'; 
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SubgroupsComponent } from './logged-in/subgroups/subgroups.component';
import { GroupDetailComponent } from './logged-in/group-detail/group-detail.component';
import { ListComponent } from './logged-in/groups/list/list.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

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
    SubgroupsComponent,
    GroupDetailComponent,
    ListComponent,
   
   
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
    MatFormFieldModule,
    MatButtonToggleModule,
    HttpClientModule,
    BrowserAnimationsModule ,
    MatNativeDateModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
    }
    }),

  ],
  providers: 
  [ {provide : HTTP_INTERCEPTORS, useClass:RequestInterceptor, multi:true } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
