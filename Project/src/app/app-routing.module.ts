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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
