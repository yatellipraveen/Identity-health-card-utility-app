import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { AddhealthcardComponent } from './addhealthcard/addhealthcard.component';

const routes: Routes = [
  {path: '', redirectTo: '/forms', pathMatch: 'full'},
  {path:'forms',component:FormsComponent},
  { path: 'addhc', component: AddhealthcardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
