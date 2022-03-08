import { GroupDetailComponent } from './logged-in/group-detail/group-detail.component';
import { ListComponent } from './logged-in/groups/list/list.component';
import { SubgroupsComponent } from './logged-in/subgroups/subgroups.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './signIn/forgot-password/forgot-password.component';
import { SignInComponent } from './signIn/sign-in/sign-in.component';
import { SetPasswordComponent } from './signIn/set-password/set-password.component';

import { DashboardComponent } from './logged-in/dashboard/dashboard.component';
import { BlogsComponent } from './logged-in/blogs/blogs.component';
import { GroupsComponent } from './logged-in/groups/groups.component';
import { PollComponent } from './logged-in/poll/poll.component';
import { ProfileComponent } from './logged-in/profile/profile.component';
import { ReportsComponent } from './logged-in/reports/reports.component';
import { SettingsComponent} from './logged-in/settings/settings.component'
import { UserManagementComponent } from './logged-in/user-management/user-management.component';

const routes: Routes = [
  
  {path:'signIn' , component:SignInComponent,
  data: { animation: 'HomePage' }
  },
  {path: '',   redirectTo: '/signIn', pathMatch: 'full'},
  {path: 'setPassword', component:SetPasswordComponent},
  {path: 'forgotPassword', component:ForgotPasswordComponent},

  {path:'Dashboard', component:DashboardComponent},  
  {path:'Blogs', component:BlogsComponent},
  {path:'Groups', component:GroupsComponent,
children:[
  {path:'detail/:id',component:GroupDetailComponent},
{
  path:'list',component:ListComponent,
},
{
  path:'', redirectTo:'list',pathMatch:'full'
},

]
},
  {path:'Poll', component:PollComponent},
  {path:'Profile', component:ProfileComponent},
  {path:'Reports', component:ReportsComponent},
  {path:'Settings', component:SettingsComponent},
  {path:'User Management', component:UserManagementComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
