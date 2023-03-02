import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SanctionLetter } from 'app/model/sanction-letter';
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
    //setTimeout(() => {this.ngOnInit()},100*1)
      
    
    this.sanctionletter=this.fb.group(
      {  id:[this.ser.sanction.id],
        rateofInt:[this.ser.sanction.rateofInt],
        tenure:[this.ser.sanction.tenure],
        customerTotalLoanRequired:[this.ser.sanction.customerTotalLoanRequired],
        bankName:[this.ser.sanction.bankName],
        accountNumber:[this.ser.sanction.accountNumber],
        sanctionAmount:[this.ser.sanction.sanctionAmount],
       
      }
    )
    
   
  }

  onSave(){   
    console.log(this.sanctionletter.value)
    this.ser.updateSanction(this.ser.id,this.sanctionletter.value).subscribe();
    window.location.reload();    
  } 

  //blob:any;

  // genPdf(){
  //   alert(this.sanctionletter.controls['loanNumber'].value)

  //   this.repo.genPdf(this.sanctionletter.controls['loanNumber'].value).subscribe(response=>{
  //     this.blob = new Blob([response], {type: 'application/pdf'});

  //     var downloadURL = window.URL.createObjectURL(response);
  //     var link = document.createElement('a');
  //     link.href = downloadURL;
  //     link.download = "help.pdf";
  //     link.click()

  // })}

  // genExcel(){
  //   alert(this.sanctionletter.controls['loanNumber'].value)
  //   this.repo.genExcel(this.sanctionletter.controls['loanNumber'].value).subscribe(response=>{
  //     const blob = new Blob([response], {type: 'application/octet-stream'});
  //     const url= window.URL.createObjectURL(blob);
  //     window.open(url);

  // })}
 



}
