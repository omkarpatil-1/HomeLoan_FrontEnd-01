import { AccountDetails } from "./account-details";
import { Address } from "./address";
import { CarInfo } from "./car-info";

import { GuarantorDetails } from "./guarantor-details";
import { Ledger } from "./ledger";
import { Profession } from "./profession";
import { SanctionLetter } from "./sanction-letter";

export class Emi {
	paymentNumber:number;
	paymentdate:string;
	balance:number;
	emiPaid:number;
	status:number;
}
