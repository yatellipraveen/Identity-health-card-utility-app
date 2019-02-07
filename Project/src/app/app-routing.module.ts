import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AssociateComponent } from './associate/associate.component';
import { SecurityComponent } from './security/security.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path :'admin', component: AdminComponent},
  {path:'admin/forms',component: FormsComponent},
  {path : 'admin/associates', component: AssociateComponent},
  {path : 'admin/security', component: SecurityComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
