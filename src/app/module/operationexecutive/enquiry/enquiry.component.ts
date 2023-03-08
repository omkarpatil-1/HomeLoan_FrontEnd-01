import { Component, OnInit } from '@angular/core';
import { CommonService } from 'app/module/shared/common.service';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit {

  constructor(public cs: CommonService) { }

  ngOnInit(): void {
  }
  saveEnquiry()
  {
this.cs.saveEnqury().subscribe();
  }

}
