import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'app/model/Customer';
import { Email } from 'app/model/email';
import { Enquiry } from 'app/model/enquiry';
import { CommonService } from 'app/module/shared/common.service';
import { ReportService } from 'app/module/shared/report.service';

@Component({
  selector: 'app-view-enquiry',
  templateUrl: './view-enquiry.component.html',
  styleUrls: ['./view-enquiry.component.css']
})
export class ViewEnquiryComponent implements OnInit {

  constructor(public cs:CommonService, public r:Router,public route:ActivatedRoute,public repo:ReportService) { }

  ellist:Enquiry[]

  ngOnInit(): void {
   
    this.cs.getEnquiryList().subscribe((data:Enquiry[])=>
    this.ellist=data        
    )}
  
  deleteEnquiry(id:number){
    this.cs.deleteEnquiry(id).subscribe()
    window.location.reload();
  }
  update(eq:Enquiry){
    this.cs.createEnquiry(eq).subscribe();
   
  }

  editEnquiry(fl:Enquiry){
    this.cs.enqiry=Object.assign({},fl) 
    
  }



  rejectmail(e:Enquiry){
const email=new Email()
email.appId=e.custId
email.name=e.firstName
email.to=e.emailId
email.status=e.status

    this.repo.email(email).subscribe();
  }

}
