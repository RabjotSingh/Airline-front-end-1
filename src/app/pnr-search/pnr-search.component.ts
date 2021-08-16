import { Component, OnInit } from '@angular/core';
import { FooterComponent } from './../footer/footer.component';
import { HeaderComponent } from './../header/header.component';
import { ticketService } from '../ticket.service';
import {  FormGroup, FormControl, Validators } from '@angular/forms';
import { Ticket } from  'src/app/models/Ticket';
import { HttpClient } from '@angular/common/http';
import { PassengerService } from '../passenger.service';
import { Passenger } from '../models/Passenger';
import { paymentService } from '../payment.service';

@Component({
  selector: 'app-pnr-search',
  templateUrl: './pnr-search.component.html',
  styleUrls: ['./pnr-search.component.css']
})
export class PnrSearchComponent implements OnInit {

  ticketData:Ticket[]=[];

  //ticketData:Ticket={
    //ticketId: 0,
  //uId: 0,
  //pId: 0 ,
  //flightNo: 0, 
  //paymentId: 0,
  //roundTrip : true,
  //ticketStatus:""} 
  passengerData: Passenger[]=[];

  constructor(private http:HttpClient,private obj:ticketService, private pobj: PassengerService) { }
    
    pnrForm = new FormGroup({
      paymentId: new FormControl("",[Validators.required])
    })
  

   
  ngOnInit(): void {
   // this.get_api();
  }



  getApiById() : void
  {  console.log(this.pnrForm) ;
   this.obj.viewsPnrStatusById(this.pnrForm.controls.paymentId.value).subscribe((res) => (this.ticketData = res));
     this.obj.viewsPnrStatusById(this.pnrForm.controls.paymentId.value).subscribe((rep) => (this.passengerData = rep));
     console.log('In service');
     console.log(this.passengerData);
    console.log(this.ticketData);
    
  }

  //get_api():void
  //{   console.log(this.ticketData);
    //this.obj.getSearchedPnr(id).subscribe(data=>{
      //this.ticketData=data;
     // this.flag_get=true;this.flag_post=false;this.flag_put=false;this.flag_delete=false;this.flag_register=false;
     // Logging the response recieved from web api.
     // console.log(this.ticketData);
  //  });
  //}
//}//

}

