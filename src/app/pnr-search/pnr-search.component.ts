import { Component, OnInit } from '@angular/core';
import { FooterComponent } from './../footer/footer.component';
import { HeaderComponent } from './../header/header.component';
import { ticketService } from '../ticket.service';
import {  FormGroup, FormControl, Validators } from '@angular/forms';
import { Ticket } from  'src/app/models/Ticket';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-pnr-search',
  templateUrl: './pnr-search.component.html',
  styleUrls: ['./pnr-search.component.css']
})
export class PnrSearchComponent implements OnInit {

  //ticketData:Ticket[]=[];

  ticketData:Ticket={
    ticketId: 0,
  uId: 0,
  pId: 0 ,
  flightNo: 0, 
  paymentId: 0,
  roundTrip : true,
  ticketStatus:""} 

  constructor(private http:HttpClient,private obj:ticketService) { }
    
    pnrForm = new FormGroup({
      paymentId: new FormControl("",[Validators.required])
    })
  

   onSubmit() {
   this.getApiById(this.ticketData.paymentId);
  }
  ngOnInit(): void {
   // this.get_api();
  }



  getApiById(data:any) : void
  {   
    this.obj.viewsPnrStatusById(data.paymentId).subscribe((data) => (this.ticketData = data));
     console.log('In service');
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

