import { Customer } from './../../model/Customer';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enquiry } from 'app/model/enquiry';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private baseUrl = 'http://localhost:8081/enquiry';

  constructor(private http: HttpClient) { }

  enqiry:Enquiry={
    custId: 0,
    firstName: '',
    lastName: '',
    emailId: '',
    mbNo: 0,
    pancardNo: '',
    age: 0,
    status: '',
    cibil: 0
  }

  getEnquiry(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getEnquiry/${id}`);
  }

  createEnquiry(enqiry: Enquiry): Observable<Object> {
    if(enqiry.custId==0){
      enqiry.status="enquiry"
    }
    else{
      enqiry.status="registred"
    }
    
    return this.http.post(`${this.baseUrl}/postEnquiry`, enqiry);
  }

  updateEnquiry(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/postEnquiry/${id}`, value);
  }

  deleteEnquiry(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteEnquiry/${id}`, { responseType: 'text' });
  }

  getEnquiryList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getEnquiryList`);
  }

  getCibil(id:number):Observable<any> {
    

    return this.http.get(`${this.baseUrl}/getCibil/${id}`);
  }
}
