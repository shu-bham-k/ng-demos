import { RegistrationComponent } from './registration/registration.component';
import { ViewComponent } from './view/view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'registration' , component:RegistrationComponent},
  {path: 'view', component:ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
