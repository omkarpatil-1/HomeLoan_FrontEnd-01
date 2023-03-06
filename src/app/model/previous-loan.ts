import { PreviousLoanBank } from './previous-loan-bank';

export class PreviousLoan {
    ploanId:number;
    ploanAmount:number;
    pTenure:number;
    paidAmount:number;
    remainingAmount:number
    deafulterCount:number;
    pbankDetails:PreviousLoanBank[];
    status:string;
    remark:string
}
