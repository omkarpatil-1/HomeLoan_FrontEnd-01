import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'app/module/shared/login.service';
declare var window:any
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
})
export class HomeComponent implements OnInit {
  constructor(public fb:FormBuilder, private router:Router,public loginService:LoginService) { }
  loginform:FormGroup

  ngOnInit(): void {
    this.loginform=this.fb.group({
      firstname:[],
      password:[]
    })
    this.formModel= new window.bootstrap.Model(
      document.getElementById("exampleModal")
    )
  }
  empRole:string;
  login(){
    alert("Success");
    console.log(this.loginform.value)
   
    this.loginService.GetSingleData(this.loginform.controls['firstname'].value,this.loginform.controls['password'].value).subscribe((data:string)=>{
      this.empRole=data;
       alert(this.empRole);
      // localStorage.getItem("role",empRole)  //or cloudStorage.setItem("role","Admin") 
      // this.router.navigateByUrl("role/Admin")
    })
  setTimeout(() => {this.routing()},1000*1)
  }

  routing(){
    alert(this.empRole);
    //localStorage.setItem("role",this.empRole)

    if(this.empRole=="admin" )
    {
      console.log('in admin');
      sessionStorage.setItem('role', 'admin');
      this.router.navigateByUrl("role/admin/adminbash");
    }
    if(this.empRole==="Credit-Manager")
    {
      sessionStorage.setItem('role', 'cr');
      this.router.navigateByUrl("role/cr");
    }
    if(this.empRole==="Relational-Exicutive")
    {
      sessionStorage.setItem('role', 'relation');
      this.router.navigateByUrl("role/relation/review");
    
    }
    if(this.empRole==="Operational-Exicutive")
    {
      sessionStorage.setItem('role', 'operation');
      this.router.navigateByUrl("role/operation/oeenq");
    }
    if(this.empRole==="Account-head")
    {
      sessionStorage.setItem('role', 'account');
      this.router.navigateByUrl("role/account/viewapp");
    }    
    if(this.empRole==="Bank-Manager")
    {
      sessionStorage.setItem('role', 'manager');
      this.router.navigateByUrl("role/manager/viewapp");
    }
    if(this.empRole==="Tele-head")
    {
      sessionStorage.setItem('role', 'telehead');
      this.router.navigateByUrl("role/telehead/viewpayer");
    }
  
  }

formModel:any;



  // openPopup() {
  //   this.formModel.show();
  // }
  // closePopup() {
  //   this.formModel.hide();
  // }
  log()
  {

    
  this.router.navigate(["/log"])
  }

 



}
