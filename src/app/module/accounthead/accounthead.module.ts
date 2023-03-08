import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MaterialModule } from '../shared/material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { ViewAppComponent } from '../creditmanager/view-app/view-app.component';
import { LedgerComponent } from './ledger/ledger.component';
import { LoanDisbursementComponent } from './loan-disbursement/loan-disbursement.component';
import { ViewSanctionComponent } from './view-sanction/view-sanction.component';


console.log("Ahead");

const routing: Routes = [
  
  {path:'viewapp',component:ViewAppComponent},
  {
    path:'ledger',component:LedgerComponent
  },
  {
    path:'loan',component:LoanDisbursementComponent
  },
  {
    path:'sanction',component:ViewSanctionComponent
  }

 
];


@NgModule({
  declarations: [ViewAppComponent, LedgerComponent, LoanDisbursementComponent, ViewSanctionComponent,  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routing),
    
  ]
})
export class AccountheadModule { }
