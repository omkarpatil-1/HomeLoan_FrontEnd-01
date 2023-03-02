import { Component, OnInit } from '@angular/core';
import { EmiCustomer } from 'app/model/EmiCustomer';
import { RegisterService } from 'app/module/shared/register.service ';
import { ReportService } from 'app/module/shared/report.service';

@Component({
  selector: 'app-viewdefault',
  templateUrl: './viewdefault.component.html',
  styleUrls: ['./viewdefault.component.css']
})
export class ViewdefaultComponent implements OnInit {

  constructor(public repo:ReportService,public reg:RegisterService) { }
  applist:EmiCustomer[]

  ngOnInit(): void {
    this.repo.getDefCust().subscribe((data:EmiCustomer[])=>
    this.applist=data        
    )}

    notice(id:number) {
      
      this.reg.notice(id).subscribe();
    }
}
