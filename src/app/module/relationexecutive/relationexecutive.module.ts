import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerregisterComponent } from './customerregister/customerregister.component';
import { DocumentComponent } from './document/document.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';
import { MaterialModule } from '../shared/material/material.module';


console.log("relation")

const routing: Routes = [
  {path:'reenquiry', component:EnquiryComponent },
  {path:'recustomer',component:CustomerregisterComponent},
  {path:'redocument',component:DocumentComponent},
  {path:'review',component:ViewEnquiryComponent}
];
@NgModule({
  declarations: [CustomerregisterComponent, DocumentComponent, EnquiryComponent, ViewEnquiryComponent],
  imports: [
    CommonModule,RouterModule.forChild(routing),FormsModule,ReactiveFormsModule,MaterialModule


  ],
  exports:[]
   
})
export class RelationexecutiveModule { }
