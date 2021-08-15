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

  ticketData:Ticket[]=[];

  constructor(private http:HttpClient,private obj:ticketService) { }
    
    pnrForm = new FormGroup({
      paymentId: new FormControl("",[Validators.required])
    })
  

   onSubmit() {
   this.viewsPnrStatus()
  }
  ngOnInit(): void {
    this.get_api();
  }

  getApiById():void
  {   console.log(this.ticketData);
    this.obj.().subscribe(data=>{
      this.ticketData=data;
     // this.flag_get=true;this.flag_post=false;this.flag_put=false;this.flag_delete=false;this.flag_register=false;
     // Logging the response recieved from web api.
      console.log(this.ticketData);
    });
  }

  get_api():void
  {   console.log(this.ticketData);
    this.obj.getAllUsers().subscribe(data=>{
      this.ticketData=data;
     // this.flag_get=true;this.flag_post=false;this.flag_put=false;this.flag_delete=false;this.flag_register=false;
     // Logging the response recieved from web api.
      console.log(this.ticketData);
    });
  }
}
