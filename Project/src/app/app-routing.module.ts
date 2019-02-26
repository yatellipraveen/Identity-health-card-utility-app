import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { AddhealthcardComponent } from './addhealthcard/addhealthcard.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AssociateComponent } from './associate/associate.component';
import { SecurityComponent } from './security/security.component';
import { ShowhcComponent } from './showhc/showhc.component';
import {ShowidComponent} from './showid/showid.component';
import {SignupComponent} from './signup/signup.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: '', component:SignupComponent},
  {path: 'signup', component:SignupComponent},
  {path:'home', component:HomeComponent},
  {path :'home/admin', component: AdminComponent},
  {path:'home/admin/forms',component: FormsComponent},
  {path : 'home/admin/associates', component: AssociateComponent},
  {path : 'home/admin/security', component: SecurityComponent},
  {path : 'home/associate', component: AssociateComponent},
  {path: 'home/associate/showhc', component: ShowhcComponent},
  {path : 'home/security', component: SecurityComponent},
  { path: 'home/admin/addhc', component: AddhealthcardComponent},
  {path: 'home/associate/showid', component: ShowidComponent},
  {path: 'login', component:LoginComponent},
//import {SubmitComponent} from './submit/submit.component';



//const routes: Routes = [
 // {path: '', component:LoginComponent},
 // {path:'admin', component:AdminComponent},
//  {path:'admin/forms', component: FormsComponent},
//  {path:'admin/addhc', component: AddhealthcardComponent},
//  {path:'associate', component: AssociateComponent},
 // {path:'associate/showid',component:ShowidComponent},
//  {path:'associate/showhc',component:ShowhcComponent},
 //{path : 'security', component: SecurityComponent},

  //not required
  // {path :'admin', component: AdminComponent},
  // {path:'admin/forms',component: FormsComponent},
  // {path : 'admin/associates', component: AssociateComponent},
  // {path : 'admin/security', component: SecurityComponent},
  // {path : 'associate', component: AssociateComponent},
  // {path: 'associate/showhc', component: ShowhcComponent},
  // {path : 'security', component: SecurityComponent},
  // { path: 'admin/addhc', component: AddhealthcardComponent},
  // {path: 'associate/showid', component: ShowidComponent},
  // {path: 'admin/forms/submit',component: SubmitComponent},
   
  {path: '**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
