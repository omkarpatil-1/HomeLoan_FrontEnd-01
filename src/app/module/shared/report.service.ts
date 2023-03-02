import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Email } from 'app/model/email';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private httpclient: HttpClient) { }

  url: string = "http://localhost:9899/report"
  


  email(e: Email): any {
    
    
    return this.httpclient.post(this.url+"/email", e,{responseType: 'text'});
  }

  genPdf(loanno:number):any{
    return this.httpclient.get(this.url+"/genPdf/"+loanno,{observe:'response',responseType:'blob'});
  }

  genExcel(loanno:number):any{
    alert("service")
    return this.httpclient.get(this.url+"/excel/"+loanno,{observe:'response',responseType:'blob'});

  }

  loanDisbs(id:number,name:string){
    return this.httpclient.get(this.url+"/saveEmi/"+id+"/"+name);
  }

  getEmiCust(){
    return this.httpclient.get(this.url+"/allCus");
  }

  emi(id:number,date:string){
    return this.httpclient.get(this.url+"/update/"+date+"/"+id);
  }

  getEmi(id:number){
    return this.httpclient.get(this.url+"/getEmi/"+id);
  }

  getDefCust(){
    return this.httpclient.get(this.url+"/defa/");
  }


}
