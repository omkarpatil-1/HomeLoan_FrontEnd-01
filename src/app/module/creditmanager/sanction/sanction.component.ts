import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { RegisterService } from 'app/module/shared/register.service ';
import { ReportService } from 'app/module/shared/report.service';

@Component({
  selector: 'app-sanction',
  templateUrl: './sanction.component.html',
  styleUrls: ['./sanction.component.css']
})
export class SanctionComponent implements OnInit {
  
  sanctionletter:FormGroup
  
  constructor(public fb:FormBuilder,public ser:RegisterService,public repo:ReportService) {

   }

  ngOnInit(): void {
    
      
    //Update Field Here
    this.sanctionletter=this.fb.group(
      {  sid:[this.ser.sanction.sid],
        sanctionDate:[this.ser.sanction.sanctionDate],
        prospectNo:[this.ser.sanction.prospectNo],
        applicantName:[this.ser.sanction.applicantName],
        contactDetails:[this.ser.sanction.contactDetails],
        product:[this.ser.sanction.product],
        loanAmtSanctioned:[this.ser.sanction.loanAmtSanctioned],
        interestType:[this.ser.sanction.interestType],
        rateOfInterest:[this.ser.sanction.rateOfInterest],
        loanTenure:[this.ser.sanction.loanTenure],
        monthlyEmiAmount:[this.ser.sanction.monthlyEmiAmount],
        modeOfPayment:[this.ser.sanction.modeOfPayment],
        remarks:[this.ser.sanction.remarks],
        termsandCondition:[this.ser.sanction.termsandCondition],
        status:[this.ser.sanction.status],
  
      }
    )
    
   
  }

  onSave(){   
    console.log(this.sanctionletter.value)
    this.ser.updateSanction(this.ser.sanction.sid,this.sanctionletter.value).subscribe();
    window.location.reload();    
  } 

  saveSanction()
  {
    console.log("saveSanction :: in TS")
    this.ser.saveSanction(this.sanctionletter.value).subscribe();
  }

}

