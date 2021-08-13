import { FooterComponent } from './../footer/footer.component';
import { HeaderComponent } from './../header/header.component';
import { Component, OnInit } from '@angular/core';
import { userregService } from '../user-reg.service';
import { UserReg } from '../models/UserReg';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

   msg:string="";
  constructor(private obj:userregService) { }
  ngOnInit(): void {
  }
  
  post_api(data:any):void
  {
    this.obj.createUser(data).subscribe(res=>{
    this.msg="Successfully created"
    //Logging the response received from web api.
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
   // gender: new FormControl("",[Validators.required]),
    phoneNo: new FormControl(null,[Validators.required, Validators.pattern("^[0-9]{10}$")]),
    password: new FormControl("", [Validators.required,Validators.minLength(8), Validators.maxLength(30),Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")]),
    cpassword: new FormControl("", [Validators.required])
  })

  ConfirmPasswordValidator():boolean{
    if(this.userform.controls.cpassword?.value==this.userform.controls.password?.value && this.userform.controls.cpassword?.dirty){
      return false
    }
    else
    { 
      return true
    }
  }
}