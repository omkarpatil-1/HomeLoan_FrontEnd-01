import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cibil } from 'app/model/cibil';
import { Enquiry_Details } from 'app/model/Enquiry_Details';
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
  //ellist:Enquiry_Details[]

  // ngOnInit(): void {
  //   this.cs.getEnquiryList().subscribe((data:Enquiry_Details[])=>
  //   this.ellist=data        
  //   )}


  

}
