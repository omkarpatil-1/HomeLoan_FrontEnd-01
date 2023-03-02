import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialogModule,MatDialogConfig, MatDialog} from '@angular/material/dialog';

import { LoginService } from 'app/module/shared/login.service';
import { PopupComponent } from '../popup/popup.component';
import { Employee } from 'app/model/employee';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  title = 'TableData';
  displayedColumns: string[] = ['profile','firstname', 'lastname', 'password', 'role','email','Action'];
  dataSource : any;
  empdata:any;
  
  @ViewChild(MatPaginator) paginator !:MatPaginator;
  @ViewChild(MatSort) sort !:MatSort;
  Filter: any;

  constructor(private service:LoginService,private dialog:MatDialog){

  }
  ngOnInit(): void {
   this.GetAll();
  }
  GetAll(){
    console.log(this.empdata);
    this.service.GetEmployee().subscribe((result:Employee)=>{
      this.empdata=result;

      this.dataSource=new MatTableDataSource<Employee>(this.empdata)
      this.dataSource.Filter=this.Filter;
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    })
  }
  Filterchange(event:Event){
    const filvalue=(event.target as HTMLInputElement).value;
    this.dataSource.Filter=filvalue;
  }
  onCreate()
  {
    this.service.initializeFormGroup();
    const dialogConfig= new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(PopupComponent,dialogConfig);
  }
}


