import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ViewequiryComponent } from './viewequiry/viewequiry.component';
import { ViewcusstomerComponent } from './viewcusstomer/viewcusstomer.component';
import { CibilscoreComponent } from './cibilscore/cibilscore.component';
import { MaterialModule } from '../shared/material/material.module';


const oerouting: Routes = [
  
  {path:'oeenq',component:ViewequiryComponent},
  {path:'oecustomer',component:ViewcusstomerComponent},
  {path:'cibil',component:CibilscoreComponent}
  
];
@NgModule({
  declarations: [ ViewequiryComponent, ViewcusstomerComponent, CibilscoreComponent],
  imports: [
    CommonModule,RouterModule.forChild(oerouting),MaterialModule
  ]
})
export class OperationexecutiveModule { }
