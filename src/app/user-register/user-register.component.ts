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
    })

  }
  userform = new FormGroup({
    title: new FormControl("",[Validators.required]),
    fname: new FormControl("", [Validators.required, Validators.pattern("^[a-zA-z]*$")]),
    lname: new FormControl("", [Validators.required, Validators.pattern("^[a-zA-z]*$")]),
    emailId: new FormControl("", [Validators.required, Validators.email]),
    dob: new FormControl(null, [Validators.required]),
   // gender: new FormControl("",[Validators.required]),
    phoneNo: new FormControl(null,[Validators.required, Validators.pattern("[0-9]{10}")]),
    password: new FormControl("", [Validators.required]),
   // cpassword: new FormControl("", [Validators.required])
  })
}