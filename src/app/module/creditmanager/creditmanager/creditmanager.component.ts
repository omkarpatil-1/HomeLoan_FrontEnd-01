import { Component, OnInit } from '@angular/core';
import { Customer } from 'app/model/Customer';
import { RegisterService } from 'app/module/shared/register.service ';
import { ReportService } from 'app/module/shared/report.service';
import { data } from 'jquery';
import {AllPersonalDocs} from 'app/model/AllPersonalDocs'
@Component({
  selector: 'app-creditmanager',
  templateUrl: './creditmanager.component.html',
  styleUrls: ['./creditmanager.component.css']
})
export class CreditmanagerComponent implements OnInit {

  constructor(public rg:RegisterService,public repo:ReportService) { }

  applist:Customer[];

//For Getting Cutomer
  ngOnInit(): void {
       
    this.rg.getApplicants().subscribe((data:Customer[])=>{
     this.applist=data
    
console.log(this.applist)  
    
    }
    )}
    


    //View Document
  retrievedDoc:AllPersonalDocs={
    documentId:0,
 addharCard :[],
  addressproof:[],
  pancard:[],
photo: [],
signature:[],
bankcheque:[],
itr:[],
salaryslips:[]
  }
  image(id:number)
  {
    this.rg.getDoc(id).subscribe((d:AllPersonalDocs)=>{
  
      this.retrievedDoc = d;
  
    });
  }

  verification(id:number)
  {
    this.rg.appStatus(id).subscribe();
    setTimeout(() => {this.ngOnInit()},1000*1)
  }

  verificationFailed(id:number)
  {
    this.rg.appStatusFailed(id).subscribe();
    
    setTimeout(() => {this.ngOnInit()},1000*1)
  }



}
