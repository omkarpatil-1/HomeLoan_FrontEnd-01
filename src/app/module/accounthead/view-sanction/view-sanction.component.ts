import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SanctionLetter } from 'app/model/sanction-letter';
import { LedgerService } from 'app/module/shared/ledger.service';
import { ReportService } from 'app/module/shared/report.service';
import { data } from 'jquery';

@Component({
  selector: 'app-view-sanction',
  templateUrl: './view-sanction.component.html',
  styleUrls: ['./view-sanction.component.css']
})
export class ViewSanctionComponent implements OnInit {

  

  ngOnInit(): void {
  }

  sanctionList : SanctionLetter[]=[];

  constructor(public ser: LedgerService,public fb:FormBuilder,public repo:ReportService)
  {
      this.ser.getSanctionList().subscribe((data : SanctionLetter[])=>{
        this.sanctionList = data;
      });
  }


}
