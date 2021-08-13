import { FooterComponent } from './../footer/footer.component';
import { HeaderComponent } from './../header/header.component';
import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { paymentService } from '../payment.service';
import { Payment } from '../models/Payment';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {

  myimage:string = "assets/images/img2.png";

  msg:string="";

  

  paymentsform =new FormGroup({
    cardHolderName:new FormControl("",[Validators.required]),
    cardno:new FormControl("",[Validators.required,Validators.minLength(16),Validators.maxLength(16)]),
    expirationDate:new FormControl("",[Validators.required,]),
    cvv:new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(3)]),
    totalFare:new FormControl("",[Validators.required])
  });

  constructor(private obj:paymentService) { }

  ngOnInit(): void {
  }

  
  post_api(data:any):void
  {
    this.obj.createUser(data).subscribe(data=>{ this.msg="Successfully created " + data })
  }
}