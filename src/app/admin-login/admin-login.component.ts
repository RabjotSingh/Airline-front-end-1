import { AdminvalidatordataService } from './../adminvalidatordata.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './../footer/footer.component';
import { HeaderComponent } from './../header/header.component';
import {FormControl,FormGroup,Validators} from '@angular/forms';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  constructor(private router:Router,private data:AdminvalidatordataService) { }

  ngOnInit(): void {
  }
  adminlogin= new FormGroup({
    adminusername : new FormControl("",[Validators.required]),
    adminpassword : new FormControl("",[Validators.required])
})
onLogin(){
    if((this.adminlogin.value.adminusername) == "admin" && (this.adminlogin.value.adminpassword) == "admin"){
      console.log(this.adminlogin.value.adminusername);
      console.log(this.adminlogin.value.adminpassword);
      this.router.navigate(['/FlightRegister']);
      this.data.setadminvalidation(true);
    }
    else{
      alert("Please Enter Valid Details");
    }
  }

}
