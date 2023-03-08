import { Customer } from './../../model/Customer';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cibil } from 'app/model/cibil';
import { Enquiry_Details } from 'app/model/Enquiry_Details';
import { send } from 'process';


@Injectable({
  providedIn: 'root'
})
export class CommonService {
 
  

  private baseUrl = 'http://localhost:8081/enquiry';


  url11 :string = "http://localhost:8004/Ope-Api/setCibilStatus";

  url12 :string = "http://localhost:8004/Ope-Api/getAllCibilStatus"; 

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


  // getCibil():Observable<any> {
  //   return this.http.get(`${this.url12}`);
  // }
   


  cibil: Cibil={
    
    cibilId : 0,
	  cibilScore : 0,
	  status : '',
    remarks : '',
	  eID : 0,
  }
   //For Save Enuiry  
  saveEnqury():Observable<any> {
  return  this.http.get(this.url12)
  }

  saveCibil() :Observable<any>{
    window.location.reload();
   return this.http.get(this.url11);
     }


     getAllCibil() : Observable<Cibil[]>{
        console.log("Cibil in common Service")
        
      return this.http.get<Cibil[]>(this.url12);
     }

     send() {
      this.http.get('http://localhost:8003/customer/checkCibilStauts');
   }
 
 }

  // getCibil(id:number):Observable<any> {
  //   return this.http.get(`${this.baseUrl}/getCibil/${id}`);
  // }

 

