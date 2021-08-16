import { userregService } from './../user-reg.service';
import { UserReg } from './../models/UserReg';
import { Component, Input, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { VERSION } from "@angular/core";
import { Router } from "@angular/router";
import { UservalidatordataService } from '../uservalidatordata.service';
import * as bcrypt from 'bcryptjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  User_data: UserReg[]=[];
   uservalidator:boolean=false;
  constructor(private obj:userregService, private router:Router,private data:UservalidatordataService) { }

  ngOnInit(): void {this.get_api();
  }
  loginForm= new FormGroup({
    email : new FormControl("",[Validators.required,Validators.email]),
    password : new FormControl("",[Validators.required])
})

  userauthenticator(formdata: any) {
   

    for (let item of this.User_data) {
      if (item.emailId == formdata.email) {
        this.uservalidator=true;
       
        console.log(item.password );
        console.log(formdata.password);
        
        if (bcrypt.compareSync(formdata.password,item.password )) {
          this.data.setuservalidation(true);
          this.router.navigate(["/Home"]);
        }
        else {
          return alert('Incorrect password.');
        }
      }
    }
    if(this.uservalidator==false){
      return alert('No account exist with this Email Address');
    }
  }
  get_api(): void {
    this.obj.getAllUsers().subscribe(data => {
      this.User_data = data;
      //Logging the response recieved from web api.
      console.log(this.User_data);
    })
  }
  onLogin(): void {
    this.userauthenticator(this.loginForm.value);
  }
}

