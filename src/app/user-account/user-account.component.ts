import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  variable:any;
  variable1:any;
  variable2:any;
  

  constructor() { }

  ngOnInit(): void {
  }

  details(){
   
   this.variable = document.getElementById("detailscontent") ;

  }

  booking(){
   
    this.variable1 = document.getElementById("bookingcontent") ;
 
   }
   transaction(){
   
    this.variable2 = document.getElementById("transactioncontent") ;
 
   }
  
}
