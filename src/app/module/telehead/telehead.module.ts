import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewappComponent } from './viewapp/viewapp.component';
import { ViewdefaultComponent } from './viewdefault/viewdefault.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CustomerregisterComponent } from '../relationexecutive/customerregister/customerregister.component';
import { EnquiryComponent } from '../relationexecutive/enquiry/enquiry.component';
import { MaterialModule } from '../shared/material/material.module';

const routing: Routes = [
  {path:'viewpayer', component:ViewappComponent },
  {path:'viewdefault',component:ViewdefaultComponent},

];

@NgModule({
  declarations: [ViewappComponent, ViewdefaultComponent],
  imports: [
    CommonModule,RouterModule.forChild(routing),FormsModule,ReactiveFormsModule,MaterialModule

  ]
})
export class TeleheadModule { }
