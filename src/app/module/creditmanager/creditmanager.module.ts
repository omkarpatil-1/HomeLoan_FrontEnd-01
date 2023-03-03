import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditmanagerComponent } from './creditmanager/creditmanager.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../shared/material/material.module';
import { SanctionComponent } from './sanction/sanction.component';


const routing: Routes = [
  {path: "credit", component:CreditmanagerComponent },
  {path:"sanction", component: SanctionComponent},

];

@NgModule({
  declarations: [CreditmanagerComponent,SanctionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routing),
    MaterialModule
  ]
})
export class CreditmanagerModule { }
