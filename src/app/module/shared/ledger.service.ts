import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ledger } from 'app/model/ledger';
import { Loan } from 'app/model/loan';
import { SanctionLetter } from 'app/model/sanction-letter';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LedgerService {
  getSanctionList() :Observable<SanctionLetter[]> {
    return this.httpclient.get<SanctionLetter[]>("http://localhost:8006/credit-api/getAllSanctionLetter");
  }
  
  saveLoan(loan: Loan) : Observable<Loan>{
    console.log("In Ledger Service")
    console.log(loan+"Service")
    return this.httpclient.post<Loan>("http://localhost:8006/accouthead-api/createLoanDisbursementFile",loan);
  }
  
  
  
  

  constructor(private httpclient:HttpClient) { }

  
url:string="http://localhost:8006/accounthead-api/createLedger";
  saveLedger(san: Ledger):Observable<Ledger> {
    console.log(san+"Service")
    console.log("saveLedger :: in service")
     return this.httpclient.post<Ledger>("http://localhost:8006/accounthead-api/createLedger", san);
 
   }


   

   


   ledger:Ledger={
     ledgerId: 0,
     ledgerCreatedDate: '',
     totalLoanAmount: 0,
     payableAmountwithInterest: 0,
     tenure: 0,
     monthlyEMI: 0,
     amountPaidtillDate: 0,
     remainingAmount: 0,
     nextEmiDatestart: '',
     nextEmiDateEnd: '',
     defaulterCount: 0,
     previousEmiStatus: '',
     loanEnDate: '',
     loanStatus: '',
     currentMonthEmiStatus: ''
   }

   loan:Loan={
     agreementId: 0,
     loanNo: 0,
     agreementDate: '',
     amountPayType: '',
     totalAmount: 0,
     bankName: '',
     accountNumber: 0,
     IFSCCode: '',
     accountType: '',
     transferAmount: 0,
     paymentStatus: '',
     amountPaidDate: ''
   }

   
  
}
