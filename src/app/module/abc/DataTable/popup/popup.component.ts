import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { LoginService } from 'app/module/shared/login.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  notificationService: any;
  selectProfile: any;
  empdata:FormGroup;
  

  constructor(private fb:FormBuilder,public service:LoginService,
    public dialogRef:MatDialogRef<PopupComponent>) { }

  ngOnInit(): void {
    
    this.empdata=this.fb.group({
      //loginId:[],
      firstname:[],
      lastname:[],
      password:[],
      role:[],
      email:[],
      gender:[],
      birthday:[]
       })

  }

  selectedProfile(event:any)
  {
    this.selectProfile=event.target.files[0];
  }

  onSubmit()
  {
    
    alert("Submitted successfully");
   // this.service.postDataa(cs).subscribe();
    
    // if(this.service.form.valid){
    //   this.service.insertEmployee(this.service.form.value);
    //   this.service.form.reset();
    //   this.service.initializeFormGroup();
    //   this.notificationService.success('::Submitted successfully');
    //   this.onClear();
    // }

      alert(this.empdata.controls['role'].value)
    console.log(this.empdata);


    const d=JSON.stringify(this.empdata.value);

    const Data=new FormData();

    

    Data.append("profile",this.selectProfile);
   // Data.append("loginId",loginId);
    Data.append("firstname",d);
    Data.append("lastname",d);
    Data.append("password",d);
    Data.append("role",d);
    Data.append("email",d);
    Data.append("gender",d);
    Data.append("birthday",d);

    this.service.PostData(Data).subscribe();
    this.ngOnInit();
  }

  roleData = [
    'Credit-Manager',
    'Relational-Exicutive',
    'Operational-Exicutive',
    'Account-head',
    'Bank-Manager'
  ];


    
  
  onClose()
  {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }
  onClear()
  {
    this.service.form.reset();
    this.service.initializeFormGroup();
    // this.notificationService.success('::Submitted successfully');
  }
}
