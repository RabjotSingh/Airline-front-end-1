import { Component, OnInit } from '@angular/core';
import { FooterComponent } from './../footer/footer.component';
import { HeaderComponent } from './../header/header.component';
import { FlightService } from '../flight.service';
import { Flight } from '../models/Flight';
import {  FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-delete-flight',
  templateUrl: './delete-flight.component.html',
  styleUrls: ['./delete-flight.component.css']
})
export class DeleteFlightComponent implements OnInit {

  flightDel:Flight[]=[];

  constructor(private obj:FlightService ) { }
  userForm = new FormGroup({
    flightNo: new FormControl("",[Validators.required])
  })


  onSubmit() {
    console.warn(this.userForm.value)
  }

  ngOnInit(): void {
  
  }

  
  msg: any
  delete_api(id:number,):void
  {
    this.obj.deleteUser(id).subscribe(data=>{
      console.log(data);
      this.msg = "Flight deleted successfully!!!" 
    })
    
   }
  
}
