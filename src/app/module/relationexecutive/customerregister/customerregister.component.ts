import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'app/module/shared/common.service';
import { RegisterService } from 'app/module/shared/register.service ';


@Component({
  selector: 'app-customerregister',
  templateUrl: './customerregister.component.html',
  styleUrls: ['./customerregister.component.css']
})
export class CustomerregisterComponent implements OnInit {
  steps:any=1;
  addressproof:any;
  identityproof:any;
  incomeproof1:any;
  incomeproof2:any;
  incomeproof3:any;

CregForm:FormGroup;
doc:FormGroup;
  constructor(private fb:FormBuilder, private rs:RegisterService,public router:Router) { }

  ngOnInit(): void {


    this.CregForm=this.fb.group({
      customerId:['',[Validators.required]],
customerName:['',[Validators.required]],
customerDateOfBirth:['',[Validators.required]],
customerAge:['',[Validators.required]],
customerEmail:['',[Validators.required]],
customerTotalLoanRequired:[],


address:this.fb.group({
  permanentAddressId:[],
areaname:[],
cityname:[],	 
district:[],
state:[],
pincode:[],

}),

profession:this.fb.group({
  professionId:[],
  professionType:[],
  professionSalary:[],

}),

accountdetails:this.fb.group({
  accountId:[],
accountHolderName:[],
accountNumber:[],
}),

gurantordetails:this.fb.group({
  guarantorId:[],
guarantorName:[],
guarantorMobileNumber:[],
guarantorPermanentAddress:[],
}),

ledger:this.fb.group({
  ledgerId:[],
ledgerCreatedDate:[],
totalLoanAmount:[],
payableAmountwithInterest:[],
tenure:[],
monthlyEmi:[],
amountPaidtillDate:[],
remainingAmount:[],
nextEmiStartDate:[],
nextEmiEndDate:[],
defaulterCount:[],
previousEmiStatus:[],
currentMonthEmiStatus:[],
loanEndDate:[],
loanStatus:[],
}),

sanctionletter:this.fb.group({
  
  id:[],
 rateOfInt:[],
 tenure:[],
 customerTotalLoanRequired:[],
 bankName:[],
 accountNumber:[],
 sanctionAmount:[],


}),

carinfo:this.fb.group({
  carModelNo:[],
carName:[],
brandName:[],
carPrice:[],
colour:[],
})


})


    

    
  }

  saveCustomerData()
    
    {
  this.steps=this.steps +1;
    }

    previous(){
      this.steps=this.steps -1;
    }


    saveInfo(){
     
      console.log(this.CregForm.value)
      console.log(this.CregForm.controls[''])
      this.rs.saveInfo(this.CregForm.value).subscribe((no:number)=>
        this.rs.c.customerId=no
      );
      setTimeout(() => {this.routing()},2000*1)
      
    }

    routing(){
      this.router.navigateByUrl("role/relation/redocument");
    }
   
    
}


