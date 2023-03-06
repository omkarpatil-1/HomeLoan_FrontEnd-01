import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from 'app/module/shared/common.service';

@Component({
  selector: 'app-cibilscore',
  templateUrl: './cibilscore.component.html',
  styleUrls: ['./cibilscore.component.css']
})
export class CibilscoreComponent implements OnInit {

  constructor(public cs:CommonService, public r:Router,public route:ActivatedRoute) { }

  ngOnInit(): void {
    
  }

  saveCibil(){
     this.cs.saveCibil().subscribe();
  }


}
