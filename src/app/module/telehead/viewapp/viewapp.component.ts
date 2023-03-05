import { Component, OnInit } from '@angular/core';
import { EMIDetails } from 'app/model/EMIDetails';
import { ReportService } from 'app/module/shared/report.service';

@Component({
  selector: 'app-viewapp',
  templateUrl: './viewapp.component.html',
  styleUrls: ['./viewapp.component.css']
})
export class ViewappComponent implements OnInit {

  constructor(public repo:ReportService) { }
  applist:EMIDetails[]

  ngOnInit(): void {
    this.repo.getEmiCust().subscribe((data:EMIDetails[])=>
    this.applist=data        
    )}
    

  emi(id:number,date:string)
  { 
    this.repo.emi(id,date).subscribe() 
} 
}