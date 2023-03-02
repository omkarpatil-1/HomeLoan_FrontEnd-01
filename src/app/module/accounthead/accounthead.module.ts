import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewAppComponent } from './view-app/view-app.component';
import { SanctionComponent } from './sanction/sanction.component';
import { MaterialModule } from '../shared/material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
console.log("Ahead");

const routing: Routes = [
  {path:'sanction', component: SanctionComponent},
  {path:'viewapp',component:ViewAppComponent}
 
];


@NgModule({
  declarations: [ViewAppComponent, SanctionComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routing),
    
  ]
})
export class AccountheadModule { }
