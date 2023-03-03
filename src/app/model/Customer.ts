import { AccountDetails } from "./account-details";
import { Address } from "./address";
import { CarInfo } from "./car-info";

import { GuarantorDetails } from "./guarantor-details";
import { Ledger } from "./ledger";
import { Profession } from "./profession";
import { SanctionLetter } from "./sanction-letter";

export class Customer {
  
customerId:number;
customerName:String;
customerDateOfBirth:String;
customerAge:number;
customerGender:String;
customerEmail:String;
sanctionAmount:number;
address:Address[];
profession:Profession[];
status:String;
cibilscore:number;
accountdetails:AccountDetails[];
gurantordetails:GuarantorDetails[] ;
ledger:Ledger[];
sanctionletter: SanctionLetter[];
carinfo:CarInfo[];


}
