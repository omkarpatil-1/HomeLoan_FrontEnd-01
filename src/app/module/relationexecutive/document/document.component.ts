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
      eid:[this.rs.c.eid,[Validators.required]],
    })
  }

  addressproof:any;
  pancard:any;
  itr:any;
  adharcard:any;
  photo:any;
  signature:any;
  bankcheque:any;
  salaryslips:any;
  eid:number;

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

  this.addressproof=event.target.files[0];
} onselectFile2(event:any){

  this.pancard=event.target.files[0];
}onselectFile3(event:any){

  this.itr=event.target.files[0];
}

onselectFile4(event:any){

  this.adharcard=event.target.files[0];
}

onselectFile5(event:any){

  this.photo=event.target.files[0];
}

onselectFile6(event:any){

  this.signature=event.target.files[0];
}

onselectFile7(event:any){

  this.bankcheque=event.target.files[0];
}

onselectFile8(event:any){

  this.salaryslips=event.target.files[0];
}


Submit(){  
 
  
  const d=JSON.stringify(this.doc.value);

  const em=new FormData();
  em.append("addressProof",this.addressproof);
  em.append("pancard",this.pancard);
  em.append("itr",this.itr);
  em.append("adharcard",this.adharcard);
  em.append("photo",this.photo);
  em.append("signature",this.signature);
  em.append("bankcheque",this.bankcheque);
  em.append("salaryslips",this.salaryslips);
  em.append("eid",d);
  console.log(em)

this.rs.upload(em).subscribe();

this.rs.c.eid=0
this.ngOnInit();
}
}
