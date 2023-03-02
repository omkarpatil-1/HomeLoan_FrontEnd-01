import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'app/model/Customer';
import { SanctionLetter } from 'app/model/sanction-letter';
import { RegisterService } from 'app/module/shared/register.service ';
import { ReportService } from 'app/module/shared/report.service';

@Component({
  selector: 'app-viewapp',
  templateUrl: './viewapp.component.html',
  styleUrls: ['./viewapp.component.css']
})
export class ViewappComponent implements OnInit {

  constructor(public rg:RegisterService,public router:Router,public repo:ReportService ) { }
  applist:Customer[]

  ngOnInit(): void {
    this.rg.getApplicantsWithStatus("sanction").subscribe((data:Customer[])=>
    this.applist=data        
    )}
    
  retrievedDoc:Document;
  sanction(id:number)
  {   
    this.rg.id=id;
    this.rg.getSanction(id).subscribe((data:SanctionLetter)=>
    {this.rg.sanction=data
    
    console.log(this.rg.sanction);

    
  })


 // this.router.navigateByUrl("role/account/sanction");
}


disburstment(id:number,name:string){
    this.repo.loanDisbs(id,name).subscribe()
}

pdf(id:number)
{ 
  window.open("http://localhost:9899/report/genPdf/"+id)
} 

excel(id:number)
{ 
  window.open("http://localhost:9899/report/excel/"+id)
} 
}
