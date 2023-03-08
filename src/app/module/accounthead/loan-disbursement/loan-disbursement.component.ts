import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Loan } from 'app/model/loan';
import { LedgerService } from 'app/module/shared/ledger.service';
import { ReportService } from 'app/module/shared/report.service';


@Component({
  selector: 'app-loan-disbursement',
  templateUrl: './loan-disbursement.component.html',
  styleUrls: ['./loan-disbursement.component.css']
})
export class LoanDisbursementComponent implements OnInit {
  saveloan: any;


  ngOnInit(): void {
    this.saveloan=this.fb.group(
      {
        agreementId:[this.ser.loan.agreementId],
        loanNo:[this.ser.loan.loanNo],
        agreementDate:[this.ser.loan.agreementDate],
        amountPayType:[this.ser.loan.amountPayType],
        totalAmount:[this.ser.loan.totalAmount],
        bankName:[this.ser.loan.bankName],
        accountNumber:[this.ser.loan.accountNumber],
        IFSCCode:[this.ser.loan.IFSCCode],
        accountType:[this.ser.loan.accountType],
        transferAmount:[this.ser.loan.transferAmount],
        paymentStatus:[this.ser.loan.paymentStatus],
        amountPaidDate:[this.ser.loan.amountPaidDate]
      }
    )
    
  }
  constructor(public ser:LedgerService,public fb:FormBuilder,public repo:ReportService){

  }

  saveLoan(){
    console.log("In loan Application");

    this.ser.saveLoan(this.saveloan.value).subscribe();

    window.location.reload();
  }


  
  
  

  

  



}
