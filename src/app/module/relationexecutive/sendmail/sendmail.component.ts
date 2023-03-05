import { Component, OnInit } from '@angular/core';
import { CommonService } from 'app/module/shared/common.service';
import { send } from 'process';

@Component({
  selector: 'app-sendmail',
  templateUrl: './sendmail.component.html',
  styleUrls: ['./sendmail.component.css']
})
export class SendmailComponent implements OnInit {

  constructor(public cs:CommonService) { }

  ngOnInit(): void {
  
  }


  sendmail(){
    this.cs.send();
   }
}
