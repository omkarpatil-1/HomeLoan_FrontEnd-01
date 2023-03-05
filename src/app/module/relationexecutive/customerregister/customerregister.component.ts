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
    aid:[0],
    cityname:[''],
    areaname:[''],
    district:[''],
    state:[''],
    pincode:[0],
    houseno:[0],
    streetname:['']
      })
//   local:this.fb.group({
//     aid:[],
//     cityname:[],
//     areaname:[],
//     district:[],
//     state:[],
//     pincode:[],
//     houseno:[],
//     streetname:[]
// })
  
})

// cProfession:this.fb.group({
//   pid:[],
//   ptype:[],
//   psalary:[],
//   palaryType:[],
//   pworkingperiod:[],
//   pDesignation:[]
// }),

// cAccountDetails:this.fb.group({
//   branchid:[],
//   branchName:[],
//   branchCode:[],
//   ifsc:[],
//   micrCode:[],
//   contactNo:[],
//   branchAddress:[],
//   email:[],
//   status:[]
// }),

// cGuarantorDetails:this.fb.group({
//   gid:[],
//   gName:[],
//   gDateofBirth:[],
//   gRelationshipwithCustomer:[],
//   gMobNo:[],
//   gAdharCardNo:[],
//   gMortgageDetails:[],
//   gPermanentAddress:[],
//   gloaclAddress:[]
// }),

// cEducationalInfo:this.fb.group({
//   eduid:[],
//     utype:[]
// }),

// cLoanDetails:this.fb.group({
//   loanId:[],
//   loanNo:[],
//   emidetails:this.fb.group({
//     emiID:[],
// 	nextEmiDueDate:[],
// 	emiAmountMonthly:[],
// 	previousEmiStatus:[] 
//  }),

//   loanAmount:[],
//   rateOfInterest:[],
//   tenure:[],
//   totalAmounttobepaid:[],
//   processingFees:[],
//   totalInterest:[],
//   sanctionaDate:[],
//   remark:[],
//   status:[]
// }),

// cPreviousLoan:this.fb.group({
//   ploanId:[],
//   ploanAmount:[],
//   pTenure:[],
//   paidAmount:[],
//   remainingAmount:[],
//   deafulterCount:[],
//   pbankDetails:this.fb.group({
//     branchid:[],
//     branchName:[],
//     branchCode:[],
//     ifsc:[],
//     micrCode:[],
//     contactNo:[],
//     branchAddress:this.fb.group({
//       aid:[],
//     cityname:[],
//     areaname:[],
//     district:[],
//     state:[],
//     pincode:[],
//     streetname:[]
//     }),
//     email:[],
//     status:[]
//    }),
//   status:[],
//   remark:[]

// }),

// ccibil:this.fb.group({
//   cibilId:[],
//   cibilScore:[],
//   status:[],
//   remarks:[],
//   eid:[]

// }),

// cPropertyInfo:this.fb.group({
//   propertyid:[],
//      propertytype:[],
//     propertyArea:[],
//     constructionArea:[],
//     propertyprice:[],
//     constructionprice:[],
//     propertyAddress:this.fb.group({
//       aid:[],
//       cityname:[],
//       areaname:[],
//       district:[],
//       state:[],
//       pincode:[], 
//       streetname:[]

//     })

// })
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
        this.rs.c.eid=no
      );
      setTimeout(() => {this.routing()},2000*1)
      
    }

    routing(){
      this.router.navigateByUrl("role/relation/redocument");
    }
   
    
}


