import { Customer } from './../../model/Customer';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enquiry } from 'app/model/enquiry';
import { SanctionLetter } from 'app/model/sanction-letter';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private httpclient: HttpClient) { }

  c: Customer = {
    customerId: 0,
    customerName: "",
    customerDateOfBirth: "",
    customerAge: 0,
    customerGender: "",
    customerEmail: "",
    sanctionAmount: 0,
    address: [],
    profession: [],
    status: undefined,
    cibilscore: 0,
    accountdetails: [],
    gurantordetails: [],
    ledger: [],
    sanctionletter: [],
    carinfo: [],

    // url: function (url: any) {
    //   throw new Error('Function not implemented.');
    // },
   
  }
  url: string = "http://localhost:8081/reg"
  getApplicants(): any {
    return this.httpclient.get(this.url+"/getData");
  }


  getApplicantsWithStatus(status:string): any {
    return this.httpclient.get(this.url+"/getbystatus/"+status);
  }

  appStatus(id:number): any {
    return this.httpclient.get(this.url+"/changeStatus/"+id);
  }

  appStatusFailed(id:number): any {
    return this.httpclient.get(this.url+"/changeStatusFailed/"+id);
  }

  saveInfo(c: Customer): any {
   
    return this.httpclient.post(this.url+"/saveData", c,{responseType: 'text'});
  }
  upload(em:FormData){
    return this.httpclient.post(this.url+"/saveDoc", em);
  }

  getDoc(id:number):Observable<any>{

    return this.httpclient.get<Document[]>(this.url+"/getDoc/"+id);
  
}
notice(id:number){

  return this.httpclient.get(this.url+"/notice/"+id);
}

id:number;

sanc:SanctionLetter
sanction:SanctionLetter={
  id:0,
  customerTotalLoanRequired: 0,
  bankName: '',
  accountNumber: 0,
  sanctionAmount: 0,  
  tenure: 0,
  rateofInt: 0
}

getSanction(id: number): Observable<SanctionLetter> {
  alert(id)
  return this.httpclient.get<SanctionLetter>(`${this.url}/getSanction/${id}`);
}

updateSanction(id: number, value: any): Observable<SanctionLetter> {
  return this.httpclient.put<SanctionLetter>(`${this.url}/savesanctionLatter/${id}`, value);
}


}
