import { AccountDetails } from "./account-details";
import { CustomerAddress } from "./CustomerAddress";
import { CarInfo } from "./car-info";

import { GuarantorDetails } from "./guarantor-details";
import { Ledger } from "./ledger";
import { Profession } from "./profession";
import { SanctionLetter } from "./sanction-letter";

export class EMIDetails {
	emiID:number;
	nextEmiDueDate:string;
	emiAmountMonthly:number;
	previousEmiStatus:string;
}
