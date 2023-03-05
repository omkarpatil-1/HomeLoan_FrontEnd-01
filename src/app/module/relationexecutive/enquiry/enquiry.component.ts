import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'app/module/shared/common.service';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit {

  constructor(public fb:FormBuilder,public ser:CommonService,private r:Router,private route :ActivatedRoute) { }

enquiryForm:FormGroup
submitted = false;

  ngOnInit(): void {
    this.enquiryForm=this.fb.group({  
      
      name:[this.ser.enqiry.name],
      dob:[this.ser.enqiry.dob],
      age:[this.ser.enqiry.age],
      mobileNo:[this.ser.enqiry.mobileNo],
      pancardNo:[this.ser.enqiry.pancardNo],
      email:[this.ser.enqiry.email],
      addharCardNo:[this.ser.enqiry.addharCardNo],
      gender:[this.ser.enqiry.gender]
    })    
  }

  onSave(){   
      console.log(this.enquiryForm.value)
      this.ser.createEnquiry(this.enquiryForm.value).subscribe();
      this.submitted = true;
      this.ngOnInit()
     // this.r.navigate(["../air-india-flights"],   {relativeTo: this.route})
      //this.ser.bus=this.regform.value  
    } 


    
}