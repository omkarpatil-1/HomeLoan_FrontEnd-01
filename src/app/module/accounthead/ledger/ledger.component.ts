import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LedgerService } from 'app/module/shared/ledger.service';
import { ReportService } from 'app/module/shared/report.service';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {
  saveledger:FormGroup
  constructor(public fb:FormBuilder,public ser:LedgerService,public repo:ReportService) { }

  ngOnInit(): void {
    this.saveledger=this.fb.group(
      {
        ledgerId:[this.ser.ledger.ledgerId],
       ledgerCreatedDate:[this.ser.ledger.ledgerCreatedDate],
       totalLoanAmount:[this.ser.ledger.totalLoanAmount],
       payableAmountwithInterest:[this.ser.ledger.payableAmountwithInterest],
       tenure:[this.ser.ledger.tenure],
monthlyEMI:[this.ser.ledger.monthlyEMI],
amountPaidtillDate:[this.ser.ledger.amountPaidtillDate],
remainingAmount:[this.ser.ledger.remainingAmount],
nextEmiDatestart:[this.ser.ledger.nextEmiDatestart],
nextEmiDateEnd:[this.ser.ledger.nextEmiDateEnd],
defaulterCount:[this.ser.ledger.defaulterCount],
previousEmiStatus:[this.ser.ledger.previousEmiStatus],
currentMonthEmiStatus:[this.ser.ledger.currentMonthEmiStatus],
loanEnDate:[this.ser.ledger.loanEnDate],
loanStatus:[this.ser.ledger.loanStatus]
      }
    )
  }
  saveLedger()
  {
    console.log("saveLedger :: in TS")
    this.ser.saveLedger(this.saveledger.value).subscribe();
  }

}
