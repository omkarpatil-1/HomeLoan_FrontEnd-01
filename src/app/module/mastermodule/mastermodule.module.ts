import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeComponent } from './dashboard/employee/employee.component';

const adminrouting: Routes = [
  {path: 'adminbash', component: DashboardComponent},
  {path: 'city', component: AddStudentComponent}
];

@NgModule({
  declarations: [DashboardComponent, AddStudentComponent, EmployeeComponent],
  imports: [
    CommonModule, RouterModule.forChild(adminrouting),FormsModule,ReactiveFormsModule
  ]
})
export class MastermoduleModule { }
