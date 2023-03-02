import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from 'app/model/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


  // @Input() employee: Employee;
  // @Output() onRemoveEmployee = new EventEmitter<number>();
  // @Output() onEditEmployee = new EventEmitter<number>();

  // constructor() {
  //   this.employee = {
  //     firstname: '',
  //     lastname: '',
  //     birthdate: '',
  //     gender: '',
  //     role: '',
  //     email: '',      
  //     profile: '',
  //   };
  // }

  ngOnInit(): void {

   }

  // deleteEmployeeClicked() {
  //   this.onRemoveEmployee.emit(this.employee.id);
  // }

  // editEmployeeClicked(){
  //   this.onEditEmployee.emit(this.employee.id);
  // }
}

