import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
 
 
const routes: Routes = [
  {   path: '',   component: HomeComponent   },
  {   path: 'home',   component: HomeComponent   },
  {   path: 'contactus',   component: ContactComponent   },
  {   path: 'aboutus',   component: AboutusComponent   },
];
 
@NgModule({
  declarations: [AboutusComponent,ContactComponent,HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers: [],
})
export class HomeModule { }