import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
<<<<<<< HEAD
import {ShowidComponent} from './showid/showid.component';

=======
import { AddhealthcardComponent } from './addhealthcard/addhealthcard.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AssociateComponent } from './associate/associate.component';
import { SecurityComponent } from './security/security.component';
import { ShowhcComponent } from './showhc/showhc.component';
>>>>>>> ae6c49d47e1da3717dd437624e37e580f2aa88e2
@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    UserdetailsComponent,
<<<<<<< HEAD
    ShowidComponent,
=======
    AddhealthcardComponent,
    HomeComponent,
    AdminComponent,
    AssociateComponent,
    SecurityComponent,
    ShowhcComponent
>>>>>>> ae6c49d47e1da3717dd437624e37e580f2aa88e2
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
