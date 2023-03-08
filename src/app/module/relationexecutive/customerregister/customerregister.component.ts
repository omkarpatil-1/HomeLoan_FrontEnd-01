import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'app/module/shared/common.service';
import { RegisterService } from 'app/module/shared/register.service ';


@Component({
  selector: 'app-customerregister',
  templateUrl: './customerregister.component.html',
  styleUrls: ['./customerregister.component.css']
})
export class CustomerregisterComponent  {
  steps:any=1;
  addressproof:any;
  identityproof:any;
  incomeproof1:any;
  incomeproof2:any;
  incomeproof3:any;

  CregForm:FormGroup;

  doc:FormGroup;

  constructor(public fb:FormBuilder, public rs:RegisterService,public router:Router) { }
  ngOnInit(): void {
   

    this.CregForm=this.fb.group({
eid:[0],
name:[''],
dob:[''],
age:[0],
gender:[''],
email:[''],
mobileNo:[0],
cAdditionalMobileNo:[0],
cAmountPaidforHome:[0],
cTotalLoanRequired:[0],


cAddress:this.fb.group({
  addressid:[0],
  permanant:this.fb.group({
    aid:[2],
    cityname:[''],
    areaname:[''],
    district:[''],
    state:[''],
    pincode:[0],
    houseno:[0],
    streetname:['']
      }),
  local:this.fb.group({
    aid:[0],
    cityname:[''],
    areaname:[''],
    district:[''],
    state:[''],
    pincode:[0],
    houseno:[0],
    streetname:['']
})
  
}),


cProfession:this.fb.group({
  pid:[0],
  ptype:[''],
  psalary:[0],
  palaryType:[''],
  pworkingperiod:[0],
  pDesignation:['']
}),

cAccountDetails:this.fb.group({
  branchid:[0],
  branchName:[''],
  branchCode:[0],
  ifsc:[''],
  micrCode:[''],
  contactNo:[''],
  branchAddress:this.fb.group({
    aid:[0],
    cityname:[''],
    areaname:[''],
    district:[''],
    state:[''],
    pincode:[0],
    streetname:['a']
}),
  email:[''],
  status:['a']
}),

cGuarantorDetails:this.fb.group({
  gid:[0],
  gName:[''],
  gDateofBirth:[''],
  gRelationshipwithCustomer:[''],
  gMobNo:[0],
  gAdharCardNo:[0],
  gMortgageDetails:[''],
  gPermanentAddress:[''],
  gloaclAddress:['']
}),

cEducationalInfo:this.fb.group({
  eduid:[0],
    utype:['']
}) , 

cLoanDetails:this.fb.group({
  loanId:[0],
  loanNo:[0],
  emidetails:this.fb.group({
    emiID:[0],
	nextEmiDueDate:[''],
	emiAmountMonthly:[0],
  previousEmiStatus:[''] 
  
 }),


  loanAmount:[0],
  rateOfInterest:[0],
  tenure:[0],
  totalAmounttobepaid:[0],
  processingFees:[0],
  totalInterest:[0],
  sanctionaDate:[''],
  remark:[''],
  status:['']
}),

cPreviousLoan:this.fb.group({
  ploanId:[0],
  ploanAmount:[0],
  pTenure:[0],
  paidAmount:[0],
  remainingAmount:[0],
  deafulterCount:[0],
  pbankDetails:this.fb.group({
    branchid:[0],
    branchName:[''],
    branchCode:[0],
    ifsc:[''],
    micrCode:[''],
    contactNo:[0],
    branchAddress:this.fb.group({
      aid:[0],
    cityname:[''],
    areaname:[''],
    district:[''],
    state:[''],
    pincode:[0],
    streetname:['']
    }),
    email:[''],
    status:['']
   }),
  status:[''],
  remark:['']

}),

ccibil:this.fb.group({
  cibilId:[0],
  cibilScore:[0],
  status:[''],
  remarks:[''],
  eid:[0]

}),

cPropertyInfo:this.fb.group({
  propertyid:[0],
     propertytype:[''],
    propertyArea:[''],
    constructionArea:[''],
    propertyprice:[0],
    constructionprice:[0],
    propertyAddress:this.fb.group({
      aid:[0],
      cityname:[''],
      areaname:[''],
      district:[''],
      state:[],
      pincode:[0], 
      streetname:[''] })
      })
})


}

  saveCustomerData() {
  this.steps=this.steps +1;
    }

    previous(){
      this.steps=this.steps -1;
    }


    saveInfo(){
     
      console.log(this.CregForm.value)
      console.log(this.CregForm.controls[''])
      this.rs.saveInfo(this.CregForm.value).subscribe((no:number)=>
        this.rs.c.eid=no
      );
      setTimeout(() => {this.routing()},2000*1)
      
    }

    routing(){
      this.router.navigateByUrl("role/relation/redocument");
    }
   
    
}


