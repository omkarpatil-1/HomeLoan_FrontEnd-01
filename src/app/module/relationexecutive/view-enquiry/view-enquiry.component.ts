import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'app/model/Customer';
import { Email } from 'app/model/email';
import { Enquiry_Details } from 'app/model/Enquiry_Details';
import { CommonService } from 'app/module/shared/common.service';
import { ReportService } from 'app/module/shared/report.service';

@Component({
  selector: 'app-view-enquiry',
  templateUrl: './view-enquiry.component.html',
  styleUrls: ['./view-enquiry.component.css']
})
export class ViewEnquiryComponent implements OnInit {

  constructor(public cs:CommonService, public r:Router,public route:ActivatedRoute,public repo:ReportService) { }

  ellist:Enquiry_Details[]

  ngOnInit(): void {
   
    this.cs.getEnquiryList().subscribe((data:Enquiry_Details[])=>
    this.ellist=data    
       
    )}
  
  deleteEnquiry(id:number){
    this.cs.deleteEnquiry(id).subscribe()
    window.location.reload();
  }
  update(eq:Enquiry_Details){
    this.cs.createEnquiry(eq).subscribe();
   
  }

  editEnquiry(fl:Enquiry_Details){
    this.cs.enqiry=Object.assign({},fl) 
    
  }



  rejectmail(e:Enquiry_Details){
const email=new Email()

email.name=e.name
email.to=e.email
email.status=e.gender

    this.repo.email(email).subscribe();
  }

}
