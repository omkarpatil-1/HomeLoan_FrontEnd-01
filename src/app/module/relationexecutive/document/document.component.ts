import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'app/module/shared/register.service ';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
  srcResult: any;

  constructor(private fb:FormBuilder, public rs:RegisterService) { }

  ngOnInit(): void {
    this.doc=this.fb.group({
      customerId:[this.rs.c.customerId,[Validators.required]],
    })
  }

  addressproof:any;
  identityproof:any;
  incomeproof1:any;
  incomeproof2:any;
  incomeproof3:any;
  doc:FormGroup;
  onFileSelected() {
    const inputNode: any = document.querySelector('#file');
  
    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();
  
      reader.onload = (e: any) => {
        this.srcResult = e.target.result;
      };
  
      reader.readAsArrayBuffer(inputNode.files[0]);
    }
}
onselectFile1(event:any){

  this.identityproof=event.target.files[0];
} onselectFile5(event:any){

  this.addressproof=event.target.files[0];
}onselectFile2(event:any){

  this.incomeproof1=event.target.files[0];
}

onselectFile3(event:any){

  this.incomeproof2=event.target.files[0];
}

onselectFile4(event:any){

  this.incomeproof3=event.target.files[0];
}

Submit(){  
 
  
  const d=JSON.stringify(this.doc.value);

  const em=new FormData();
  em.append("addressProof",this.addressproof);
  em.append("identityProof",this.identityproof);
  em.append("incomeProof1",this.incomeproof1);
  em.append("incomeProof2",this.incomeproof2);
  em.append("incomeProof3",this.incomeproof3);
  em.append("customerId",d);
  console.log(em)

this.rs.upload(em).subscribe();

this.rs.c.customerId=0
this.ngOnInit();
}
}
