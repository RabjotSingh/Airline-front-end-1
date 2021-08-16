import { FooterComponent } from './../footer/footer.component';
import { HeaderComponent } from './../header/header.component';
import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { FlightService } from '../flight.service';
import { Flight } from '../models/Flight';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
x:any=0
  flights:Flight[]=[];

  flightsearchform =new FormGroup({
    from:new FormControl("",[Validators.required]),
    to:new FormControl("",[Validators.required]),
    depart:new FormControl("",[Validators.required]),
    arrive:new FormControl("",[Validators.required,]),
    roundTrip:new FormControl("",[Validators.required,])
  });

  constructor(private obj:FlightService) { }

  ngOnInit(): void {
  }

  get_api():void
  {
    this.obj.getAllUsers().subscribe(data=>{
      this.flights=data;
      //Logging the response recieved from web api.
      console.log(this.flights);
    });
  }

}