import { Component, OnInit } from '@angular/core';
import { Customer } from 'app/model/Customer';
import { Document } from 'app/model/document';
import { RegisterService } from 'app/module/shared/register.service ';
import { ReportService } from 'app/module/shared/report.service';
import { data } from 'jquery';

@Component({
  selector: 'app-creditmanager',
  templateUrl: './creditmanager.component.html',
  styleUrls: ['./creditmanager.component.css']
})
export class CreditmanagerComponent implements OnInit {

  constructor(public rg:RegisterService,public repo:ReportService) { }

  applist:Customer[];


  ngOnInit(): void {
    // setTimeout(() => {this.ngOnInit()},1000*1)
   
    this.rg.getApplicants().subscribe((data:Customer[])=>{
     this.applist=data
    
console.log(this.applist)  
    
    }
    )}
    
  retrievedDoc:Document={
    documentId: 0,
    customerId: 0,
    identityProof: [],
    addressProof: [],
    incomeProof1: [],
    incomeProof2: [],
    incomeProof3: []
  }
  image(id:number)
  {
    this.rg.getDoc(id).subscribe((d:Document)=>{
  
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
