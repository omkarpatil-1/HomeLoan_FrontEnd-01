import { Component, OnInit } from '@angular/core';
import { Emi } from 'app/model/emi';
import { EmiCustomer } from 'app/model/EmiCustomer';
import { RegisterService } from 'app/module/shared/register.service ';
import { ReportService } from 'app/module/shared/report.service';

@Component({
  selector: 'app-viewemi',
  templateUrl: './viewemi.component.html',
  styleUrls: ['./viewemi.component.css']
})
export class ViewemiComponent implements OnInit {

  constructor(public repo:ReportService) { }
  applist:EmiCustomer[]

  ngOnInit(): void {
    this.repo.getEmiCust().subscribe((data:EmiCustomer[])=>
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


