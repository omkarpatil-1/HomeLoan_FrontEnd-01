import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MaterialModule } from '../shared/material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { ViewAppComponent } from '../creditmanager/view-app/view-app.component';
console.log("Ahead");

const routing: Routes = [
  
  {path:'viewapp',component:ViewAppComponent}
 
];


@NgModule({
  declarations: [ViewAppComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routing),
    
  ]
})
export class AccountheadModule { }
