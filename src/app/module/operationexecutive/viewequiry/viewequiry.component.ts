import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cibil } from 'app/model/cibil';
import { Enquiry } from 'app/model/enquiry';
import { CommonService } from 'app/module/shared/common.service';

@Component({
  selector: 'app-viewequiry',
  templateUrl: './viewequiry.component.html',
  styleUrls: ['./viewequiry.component.css']
})
export class ViewequiryComponent implements OnInit {

  constructor(public cs:CommonService, public r:Router,public route:ActivatedRoute) { }


  cibilList:Cibil[]

  ngOnInit(): void {
    
    this.cs.getAllCibil().subscribe((data:Cibil[])=>
    this.cibilList=data        
    )
    console.log("cibil on Component"+this.cibilList) 
  }

  

}
