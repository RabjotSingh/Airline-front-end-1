import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, Routes } from '@angular/router';
import { FooterComponent } from './../footer/footer.component';
import { HeaderComponent } from './../header/header.component';



@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  alert:boolean = false;
  adminusername!: string;
  adminpassword!: string;
  

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logIn(){
    if(this.adminusername == "admin" && this.adminpassword == "admin"){
      console.log(this.adminusername);
      console.log(this.adminusername);
      this.router.navigate(['/FlightRegister']);
    }
    else{
      alert("Please Enter Valid Details");
    }
  }

}
