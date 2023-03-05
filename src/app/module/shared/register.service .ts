import { Customer } from './../../model/Customer';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { SanctionLetter } from 'app/model/sanction-letter';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private httpclient: HttpClient) { }

  c: Customer = {
eid:0,
name:'',
dob:'',
age:0,
gender:'',
email:'',
mobileNo:0,
cAdditionalMobileNo:0,
cAmountPaidforHome:0,
cTotalLoanRequired:0,
cAddress:[],
cProfession:[],
cAccountDetails:[],
cGuarantorDetails:[],
cEducationalInfo:[],
ccibil:[],
cPropertyInfo:[],
cLoanDetails:[],
cPreviousLoan:[],
cAllPersonalDocs:[]
    
  }
  url: string = "http://localhost:8081/reg"
  //Url For Getting Customer
  url1:string="localhost:8005/customer/getAllCustomer"
  //Url For Getting Document 
  url2:string="localhost:8005/credit-api/getAllDocument"
  //Url For Creating Sanction Letter
  url3:string="http://localhost:8005/credit-api/createSanction"
  
  
  saveSanction(san: SanctionLetter):Observable<SanctionLetter> {
   console.log(san+"Service")
   console.log("saveSanction :: in service")
    return this.httpclient.post<SanctionLetter>(this.url3 , san);

  }
 




  getApplicants(): any {
    return this.httpclient.get(this.url1+"/getData");
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
  sid: 0,
  sanctionDate: '',
  prospectNo: '',
  applicantName: '',
  contactDetails: '',
  product: '',
  loanAmtSanctioned: 0,
  interestType: '',
  rateOfInterest: 0,
  loanTenure: '',
  monthlyEmiAmount: 0,
  modeOfPayment: '',
  remarks: '',
  termsandCondition: '',
  status: '',
  email: ''
}

getSanction(sid: number): Observable<SanctionLetter> {
  alert(sid)
  return this.httpclient.get<SanctionLetter>(`${this.url}/getSanction/${sid}`);
}

updateSanction(sid: number, value: any): Observable<SanctionLetter> {
  return this.httpclient.put<SanctionLetter>(`${this.url3}/savesanctionLatter/${sid}`, value);
}

}
