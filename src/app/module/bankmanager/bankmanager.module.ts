import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewappComponent } from './viewapp/viewapp.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewemiComponent } from './viewemi/viewemi.component';
import { MaterialModule } from '../shared/material/material.module';

const routing: Routes = [
 
  {path:'viewapp',component:ViewappComponent},
  {path:'viewemi',component:ViewemiComponent}
 
];

@NgModule({
  declarations: [ViewappComponent, ViewemiComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routing),
    MaterialModule
  ]
})
export class BankmanagerModule { }
