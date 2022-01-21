import { CoursesComponent } from './courses/courses.component';
import { FormComponent } from './form/form.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  {path: 'nav', component: NavComponent},
  {path: 'form', component: FormComponent},
  {path: 'pic', component: CoursesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [NavComponent,FormComponent,CoursesComponent]
