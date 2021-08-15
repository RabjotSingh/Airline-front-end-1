import { Component, OnInit } from '@angular/core';
import { Ticket } from '../models/Ticket';
import { Flight } from '../models/Flight';
import { ticketService } from '../ticket.service';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-mybookings',
  templateUrl: './mybookings.component.html',
  styleUrls: ['./mybookings.component.css']
})

export class MybookingsComponent implements OnInit {

  Ticket_data:Ticket[]=[];
  Flight_data:Flight[]=[];
  

  constructor(private obj1:ticketService, private obj2:FlightService) { }

  ngOnInit(): void {
    this.get_api();
  }

  get_api()
  {
    this.obj1.getAllUsers().subscribe(data=>{
      this.Ticket_data=data;
      console.log(this.Ticket_data);})
    this.obj2.getAllUsers().subscribe(data=>{
      this.Flight_data=data;
      console.log(this.Flight_data);
    });
  }

  deletebooking()
  {
    this.delete_api;
  }

  delete_api(id:number):void
  {
    this.obj1.deleteUser(id);  
  }

}
