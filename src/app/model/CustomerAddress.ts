import { Local } from 'protractor/built/driverProviders';
import { Permanent } from './permanent';

export class CustomerAddress {
    
addressid:number;
permanant:Permanent[];
local:Local[];
}