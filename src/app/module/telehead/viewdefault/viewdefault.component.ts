import { Component, OnInit } from '@angular/core';
import { EMIDetails } from 'app/model/EMIDetails';
import { RegisterService } from 'app/module/shared/register.service ';
import { ReportService } from 'app/module/shared/report.service';

@Component({
  selector: 'app-viewdefault',
  templateUrl: './viewdefault.component.html',
  styleUrls: ['./viewdefault.component.css']
})
export class ViewdefaultComponent implements OnInit {

  constructor(public repo:ReportService,public reg:RegisterService) { }
  applist:EMIDetails[]

  ngOnInit(): void {
    this.repo.getDefCust().subscribe((data:EMIDetails[])=>
    this.applist=data        
    )}

    notice(id:number) {
      
      this.reg.notice(id).subscribe();
    }
}
