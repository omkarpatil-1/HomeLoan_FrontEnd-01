import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Employee } from 'app/model/employee';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class LoginService {





   constructor(public http: HttpClient) { }

  // enqiry:Enquiry={
  //   custId: 0,
  //   firstName: '',
  //   lastName: '',
  //   emailId: '',
  //   mbNo: 0,
  //   pancardNo: 0,
  //   age: 0,
  //   status: '',
  //   cibil: 0
  // }

  // getEnquiry(id: number): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/getEnquiry/${id}`);
  // }

  // createEnquiry(enqiry: Enquiry): Observable<Object> {
  //   enqiry.status="enquiry"
  //   return this.http.post(`${this.baseUrl}/postEnquiry`, enqiry);
  // }

  // updateEnquiry(id: number, value: any): Observable<Object> {
  //   return this.http.put(`${this.baseUrl}/postEnquiry/${id}`, value);
  // }

  // deleteEnquiry(id: number): Observable<any> {
  //   return this.http.delete(`${this.baseUrl}/deleteEnquiry/${id}`, { responseType: 'text' });
  // }

  // getEnquiryList(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/getEnquiryList`);
  // }

  // getCibil(id:number):Observable<any> {
    

  //   return this.http.get(`${this.baseUrl}/getCibil/${id}`);
  // }
  private baseUrl = 'http://localhost:8081/enquiry';

  getEmployees() {
    return this.http.get<Employee[]>(this.baseUrl);
  }

  postEmployee(employee: Employee) :Observable<Employee>{
    console.log(employee);
    return this.http.post<Employee>("http://localhost:8002/admin-api/addEmployee", employee);
  }

  deleteEmployee(id: any) {
    return this.http.delete("http://localhost:8002/admin-api/deleteEmployeeByID" + '/' + id);
  }


    
  
    ApiUrlG="http://localhost:9898/login/getAllData";
    ApiUrlP="http://localhost:9898/login/register";
    url="http://localhost:9898/login/";
    
    employee:Employee={
      id: 0,
      name: '',
      designation: '',
      salary: 0,
      gender: '',
      email: '',
      username: '',
      password: '',
      status: '',
      address: [],
      bankdetails: [],
    
    }
      employeeList: any;
    
     
    
      
     // employeeList: AngularFireList<any>;
    
      form: FormGroup = new FormGroup({
        $key: new FormControl(null),
        firstname :new FormControl(''),
        lastname :new FormControl(''),
        password :new FormControl(''),
        role: new FormControl(''),
        // mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
        profile: new FormControl(''),
        gender: new FormControl(''),
        email: new FormControl(''),
        birthday: new FormControl(''),
        //isPermanent: new FormControl(false)
      });
    
      initializeFormGroup() {
        this.form.setValue({
           $key: null,
           firstname:'',
           lastname: '',
           password: '',
           gender: '',
           role:'',
           profile:[],
           email: '',
           birthday:'',
          // isPermanent:''
          
        });
      }
    
      insertEmployee(employee) {
        this.employeeList.push({
          loginId: employee.loginId,
          firstname: employee.firstname,
          lastname: employee.lastname,
          password: employee.password,
          role: employee.role,
          profile: employee.profile,
          email: employee.email,
          birthday: employee.birthday,
           //hireDate: employee.hireDate == "" ? "" : this.datePipe.transform(employee.hireDate, 'yyyy-MM-dd'),
          //isPermanent: employee.isPermanent
        });
      }
    
      GetEmployee():Observable<Employee>{
        return this.http.get<Employee>(this.ApiUrlG);
      }
    
      PostData(cs:FormData){
        return this.http.post(this.ApiUrlP,cs);
      }
    
      postDataa(cs:Employee) {
        return this.http.post(this.ApiUrlP,cs);
      }
    

        GetSingleData(firstname:string,password:string){
          return this.http.get(this.url+"getSingleDatalogin/"+firstname+"/"+password,{responseType: 'text' as 'json'});
        }

      
    }
  
  

