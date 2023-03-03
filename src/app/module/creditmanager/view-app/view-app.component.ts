import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'app/model/Customer';
import { SanctionLetter } from 'app/model/sanction-letter';
import { RegisterService } from 'app/module/shared/register.service ';

@Component({
  selector: 'app-view-app',
  templateUrl: './view-app.component.html',
  styleUrls: ['./view-app.component.css']
})
export class ViewAppComponent implements OnInit {

  constructor(public rg:RegisterService,public router:Router ) { }

  applist:Customer[]
 
  

  ngOnInit(): void {
    this.rg.getApplicantsWithStatus("verified").subscribe((data:Customer[])=>
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
  setTimeout(() => {this.routing()},1000*1)
  
 
}

routing(){
  
  this.router.navigateByUrl("role/account/sanction");
}
}