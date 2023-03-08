import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ViewequiryComponent } from './viewequiry/viewequiry.component';

import { CibilscoreComponent } from './cibilscore/cibilscore.component';
import { MaterialModule } from '../shared/material/material.module';
import { EnquiryComponent } from './enquiry/enquiry.component';



const oerouting: Routes = [
  
  {path:'oeenq',component:ViewequiryComponent},
  {path:'saveenquiry',component:EnquiryComponent},
  {path:'cibil',component:CibilscoreComponent}
  
];
@NgModule({
  declarations: [ ViewequiryComponent,EnquiryComponent, CibilscoreComponent],
  imports: [
    CommonModule,RouterModule.forChild(oerouting),MaterialModule
  ]
})
export class OperationexecutiveModule { }
