import { Component, OnInit } from '@angular/core';
import { Emi } from 'app/model/emi';
import { EmiCustomer } from 'app/model/EmiCustomer';
import { ReportService } from 'app/module/shared/report.service';

@Component({
  selector: 'app-viewapp',
  templateUrl: './viewapp.component.html',
  styleUrls: ['./viewapp.component.css']
})
export class ViewappComponent implements OnInit {

  constructor(public repo:ReportService) { }
  applist:EmiCustomer[]

  ngOnInit(): void {
    this.repo.getEmiCust().subscribe((data:EmiCustomer[])=>
    this.applist=data        
    )}
    

  emi(id:number,date:string)
  { 
    this.repo.emi(id,date).subscribe() 
} 
}