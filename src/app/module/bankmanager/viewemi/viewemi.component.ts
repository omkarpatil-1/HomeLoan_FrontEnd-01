import { Component, OnInit } from '@angular/core';
import { Emi } from 'app/model/emi';
import { EMIDetails } from 'app/model/EMIDetails';
import { RegisterService } from 'app/module/shared/register.service ';
import { ReportService } from 'app/module/shared/report.service';

@Component({
  selector: 'app-viewemi',
  templateUrl: './viewemi.component.html',
  styleUrls: ['./viewemi.component.css']
})
export class ViewemiComponent implements OnInit {

  constructor(public repo:ReportService) { }
  applist:EMIDetails[]

  ngOnInit(): void {
    this.repo.getEmiCust().subscribe((data:EMIDetails[])=>
    this.applist=data        
    )}
    
  emilist:Emi[];

  getemis(id:number)
  {  
      this.repo.getEmi(id).subscribe((data:Emi[])=>
      this.emilist=data        
      )

}
  emi(id:number,date:string)
  { 
    this.repo.emi(id,date).subscribe() 
} 


}


