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
export class DashboardComponent  implements OnInit{


  title = 'EmployeeManagement';
  @ViewChild('fileInput') fileInput: any;
  @ViewChild('addEmployeeButton') addEmployeeButton: any;

   employeeForm: FormGroup;

  employees: Employee[];
  employeesToDisplay: Employee[];
  roleOptions = [
    'Credit-Manager',
    'Relational-Exicutive',
    'Operational-Exicutive',
    'Account-head',
    'Bank-Manager',
  ];

  constructor( private fb: FormBuilder,private ls: LoginService)
   {
    // this.employeeForm = fb.group({});
    // this.employees = [];
    // this.employeesToDisplay = this.employees;
  }
   ngOnInit(): void {
    
    this.employeeForm = this.fb.group({
      id:[this.ls.employee.id],
      name:[this.ls.employee.name],
      designation:[this.ls.employee.designation],
      salary:[this.ls.employee.salary],
      gender:[this.ls.employee.gender],
      email:[this.ls.employee.email],
      username:[this.ls.employee.username],
      password:[this.ls.employee.password]


      
    });
   }

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
 
  addEmployee() {
    console.log('inside addEmployee()');
    console.log(this.employeeForm.value);
    this.ls.postEmployee(this.employeeForm.value).subscribe();
  }

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

  searchEmployees(event: any) {
    let filteredEmployees: Employee[] = [];

    if (event === '') {
      this.employeesToDisplay = this.employees;
    } else {
      filteredEmployees = this.employees.filter((val, index) => {
        let targetKey = val.name.toLowerCase() + '' + val.designation.toLowerCase();
        let searchKey = event.toLowerCase();
        return targetKey.includes(searchKey);
      });
      this.employeesToDisplay = filteredEmployees;
    }
  }

  clearForm() {
    // this.name.setValue('');
    // this.LastName.setValue('');
    // this.BirthDay.setValue('');
    // this.Gender.setValue('');
    // this.Role.setValue('');
    
    // this.Email.setValue('');
   
    this.fileInput.nativeElement.value = '';
  }

  public get Name(): FormControl {
    return this.employeeForm.get('name') as FormControl;
  }
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
