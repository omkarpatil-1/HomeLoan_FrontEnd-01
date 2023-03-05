import { Customer } from './../../model/Customer';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enquiry_Details } from 'app/model/Enquiry_Details';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private baseUrl = 'http://localhost:8081/enquiry';

  constructor(private http: HttpClient) { }

  enqiry:Enquiry_Details={
    eid:0,
    name: '',
    dob: '',
    email: '',
    mobileNo: 0,
    pancardNo: 0,
    age: 0,
    gender: '',
    addharCardNo: ''
  }

  getEnquiry(id: number): Observable<any> {
    return this.http.get('http://localhost:8003/Enquiries/getEnquiry/'+id);
  }

  createEnquiry(enqiry: Enquiry_Details): Observable<Object> {
    console.log(enqiry)
   return this.http.post('http://localhost:8003/Enquiries/addEnquiry', enqiry);
  }

  updateEnquiry(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/postEnquiry/${id}`, value);
  }

  deleteEnquiry(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteEnquiry/${id}`, { responseType: 'text' });
  }

  getEnquiryList(): Observable<any> {
    return this.http.get('http://localhost:8003/Enquiries/getAllEnquiry');
  }

  getCibil(id:number):Observable<any> {
    return this.http.get(`${this.baseUrl}/getCibil/${id}`);
  }

  send(){
     this.http.get('http://localhost:8003/customer/checkCibilStauts');
  }
}
