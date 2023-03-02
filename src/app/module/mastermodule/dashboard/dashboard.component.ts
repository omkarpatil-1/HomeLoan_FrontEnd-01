import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Employee } from 'app/model/employee';
import { LoginService } from 'app/module/shared/login.service';
import { RegisterService } from 'app/module/shared/register.service ';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // title = 'EmployeeManagement';
  // @ViewChild('fileInput') fileInput: any;
  // @ViewChild('addEmployeeButton') addEmployeeButton: any;

  // employeeForm: FormGroup;

  // employees: Employee[];
  // employeesToDisplay: Employee[];
  // roleOptions = [
  //   'Credit-Manager',
  //   'Relational-Exicutive',
  //   'Operational-Exicutive',
  //   'Account-head',
  //   'Bank-Manager',
  // ];

  // constructor( private fb: FormBuilder,private employeeService: LoginService)
  //  {
  //   this.employeeForm = fb.group({});
  //   this.employees = [];
  //   this.employeesToDisplay = this.employees;
  // }
   ngOnInit(): void {}
    
  //   this.employeeForm = this.fb.group({
  //     firstname: this.fb.control(''),
  //     lastname: this.fb.control(''),
  //     birthday: this.fb.control(''),
  //     gender: this.fb.control(''),
  //     role: this.fb.control('default'),      
  //     email: this.fb.control(''),
      
  //   });

  //   this.employeeService.getEmployees().subscribe((res) => {
  //     for (let emp of res) {
  //       this.employees.unshift(emp);
  //     }
  //     this.employeesToDisplay = this.employees;
  //   });

  // }

  // ngAfterViewInit(): void {
  //   throw new Error('Method not implemented.');
  // }
 
  // addEmployee() {
  //   let employee: Employee = {
  //     firstname: this.FirstName.value,
  //     lastname: this.LastName.value,
  //     birthdate: this.BirthDay.value,
  //     gender: this.Gender.value,
  //     role: this.roleOptions[parseInt(this.Role.value)],      
  //     email: this.Email.value,      
  //     profile: this.fileInput.nativeElement.files[0]?.name,
  //   };
  //   this.employeeService.postEmployee(employee).subscribe((res) => {
  //     this.employees.unshift(res);
  //     this.clearForm();
  //   });
  // }

  // removeEmployee(event: any) {
  //   this.employees.forEach((val, index) => {
  //     if (val.id === parseInt(event)) {
  //       this.employeeService.deleteEmployee(event).subscribe((res) => {
  //         this.employees.splice(index, 1);
  //       });
  //     }
  //   });
  // }

  // editEmployee(event: any) {
  //   this.employees.forEach((val, ind) => {
  //     if (val.id === event) {
  //       this.setForm(val);
  //     }
  //   });
  //   this.removeEmployee(event);
  //   this.addEmployeeButton.nativeElement.click();
  // }

  // setForm(emp: Employee) {
  //   this.FirstName.setValue(emp.firstname);
  //   this.LastName.setValue(emp.lastname);
  //   this.BirthDay.setValue(emp.birthdate);
  //   this.Gender.setValue(emp.gender);

  //   let roleIndex = 0;
  //   this.roleOptions.forEach((val, index) => {
  //     if (val === emp.role) roleIndex = index;
  //   });
  //   this.Role.setValue(roleIndex);

   
  //   this.fileInput.nativeElement.value = '';
  // }

  // searchEmployees(event: any) {
  //   let filteredEmployees: Employee[] = [];

  //   if (event === '') {
  //     this.employeesToDisplay = this.employees;
  //   } else {
  //     filteredEmployees = this.employees.filter((val, index) => {
  //       let targetKey = val.firstname.toLowerCase() + '' + val.lastname.toLowerCase();
  //       let searchKey = event.toLowerCase();
  //       return targetKey.includes(searchKey);
  //     });
  //     this.employeesToDisplay = filteredEmployees;
  //   }
  // }

  // clearForm() {
  //   this.FirstName.setValue('');
  //   this.LastName.setValue('');
  //   this.BirthDay.setValue('');
  //   this.Gender.setValue('');
  //   this.Role.setValue('');
    
  //   this.Email.setValue('');
   
  //   this.fileInput.nativeElement.value = '';
  // }

  // public get FirstName(): FormControl {
  //   return this.employeeForm.get('firstname') as FormControl;
  // }
  // public get LastName(): FormControl {
  //   return this.employeeForm.get('lastname') as FormControl;
  // }
  // public get BirthDay(): FormControl {
  //   return this.employeeForm.get('birthday') as FormControl;
  // }
  // public get Gender(): FormControl {
  //   return this.employeeForm.get('gender') as FormControl;
  // }
  // public get Role(): FormControl {
  //   return this.employeeForm.get('role') as FormControl;
  // }

  // public get Email(): FormControl {
  //   return this.employeeForm.get('jobExperience') as FormControl;
  // }


}
