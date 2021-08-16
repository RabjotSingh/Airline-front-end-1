import { FooterComponent } from './../footer/footer.component';
import { HeaderComponent } from './../header/header.component';
import { Component, OnInit } from '@angular/core';
import { userregService } from '../user-reg.service';
import { UserReg } from '../models/UserReg';
import { FormControl, FormGroup, Validators } from '@angular/forms';
//import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
//varaible to store present date

  Todaysdate:any;
//method to find present date
  Maxdate(){
    var date = new Date();
    var dd:any = date.getDate();
    var mm:any = date.getMonth()+1;
    var yyyy = date.getFullYear();
    if(dd < 10){
      dd = '0' + dd;
    }
    if(mm<10){
      mm = '0' + mm;
    }
  this.Todaysdate = yyyy + "-" + mm + "-" +dd;    
  }
  constructor(private obj:userregService) { this.Maxdate();}
  ngOnInit(): void {
  }
  
  post_api(data:any):void
  {
    this.obj.createUser(data).subscribe(res=>{
    //Logging the response received from web api.
    console.log("from post");
    console.log(res);
    alert("Your account has been created successfully");
    })

  }
  userform = new FormGroup({
    title: new FormControl("",[Validators.required]),
    fname: new FormControl("", [Validators.required, Validators.pattern("^[a-zA-z]*$")]),
    lname: new FormControl("", [Validators.required, Validators.pattern("^[a-zA-z]*$")]),
    emailId: new FormControl("", [Validators.required, Validators.email]),
    dob: new FormControl(null, [Validators.required]),
    phoneNo: new FormControl(null,[Validators.required, Validators.pattern("^[0-9]{10}$")]),
    password: new FormControl("", [Validators.required,Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,}")]),
    cpassword: new FormControl("", [Validators.required])
  })
  

  confirmpasswordvalidator():boolean{
    if(this.userform.controls.password?.value==this.userform.controls.cpassword?.value && this.userform.controls.cpassword?.dirty){
      return false
    }
    else
    { 
      return true
    }
  }
  onSubmit(): void {
    console.log(this.userform.value);
    //this.userform.value.password = bcrypt.hashSync(this.userform.value.password, bcrypt.genSaltSync());
    console.log(this.userform.value);
    this.post_api(this.userform.value)
    
  }
}