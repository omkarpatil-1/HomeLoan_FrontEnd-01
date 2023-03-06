import { AccountDetails } from "./account-details";
import { CustomerAddress } from "./CustomerAddress";


import { Ledger } from "./ledger";
import { Profession } from "./profession";
import { SanctionLetter } from "./sanction-letter";
import { AllPersonalDocs } from "./AllPersonalDocs";

import { GuarantorDetails } from "./guarantor-details";
import { EducationaInfo } from './educationa-info';
import { Cibil } from './cibil';
import { PropertyInfo } from './property-info';
import { LoanDetails } from './loan-details';
import { PreviousLoan } from './previous-loan';

export class Customer {
  
eid:number;
name:string;
dob:string;
age:number;
gender:string;
email:string;
mobileNo:number;
cAdditionalMobileNo:number;
cAmountPaidforHome:number;
cTotalLoanRequired:number;
cAddress:CustomerAddress[];
cProfession:Profession[];
cAccountDetails:AccountDetails[];
cGuarantorDetails:GuarantorDetails[] ;
cEducationalInfo:EducationaInfo[];
ccibil:Cibil[];
cPropertyInfo:PropertyInfo[];
cLoanDetails:LoanDetails[];
cPreviousLoan:PreviousLoan[];
cAllPersonalDocs:AllPersonalDocs[]






}
