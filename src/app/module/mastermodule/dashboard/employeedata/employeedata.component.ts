import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'app/model/employee';
import { LoginService } from 'app/module/shared/login.service';

@Component({
  selector: 'app-employeedata',
  templateUrl: './employeedata.component.html',
  styleUrls: ['./employeedata.component.css']
})
export class EmployeedataComponent implements OnInit {

  constructor(public ls:LoginService,public route:Router) { }

  "employeeList":any[];

  ngOnInit() {
    this.ls.http.get("http://localhost:8002/admin-api/getAllEmployee").subscribe(
      data=>{this.employeeList=data as any[]}
    )
  }

  editEmployee(emp:Employee){

    this.ls.employee=Object.assign({},emp);
    this.route.navigateByUrl("employeeForm");
  }
  deleteEmployee(eid:any){

    this.ls.deleteEmployee(eid).subscribe();
    window.location.reload();
  }

}
