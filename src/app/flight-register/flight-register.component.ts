import { TmplAstRecursiveVisitor } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators} from '@angular/forms';
import { FooterComponent } from './../footer/footer.component';
import { HeaderComponent } from './../header/header.component';
import { FlightService } from '../flight.service';
import { Flight } from '../models/Flight';



@Component({
  selector: 'app-flight-register',
  templateUrl: './flight-register.component.html',
  styleUrls: ['./flight-register.component.css']
})
export class FlightRegisterComponent implements OnInit {

  

  flights:Flight[]=[];

  FlightRegister = new FormGroup({
    flightNo : new FormControl('', Validators.required),
    from : new FormControl('', Validators.required),
    to : new FormControl('', Validators.required),
    departure : new FormControl('', Validators.required),
    arrive  : new FormControl('', Validators.required),
   // duration  : new FormControl('', Validators.required),
    
  })

  onSubmit() {
    
    console.log(this.FlightRegister.value);
    //this.userform.value.password = bcrypt.hashSync(this.userform.value.password, bcrypt.genSaltSync());
    console.log(this.FlightRegister.value);
    this.post_api(this.FlightRegister.value)
  }



  constructor(private obj:FlightService) { }

  ngOnInit(): void {
  }
msg:any
  post_api(data:any):void
  {
    this.obj.createUser(data).subscribe(data=>{
      //Logging the response received from web api.
      console.log("from post");
      console.log(data);
      alert("Flight has been added successfully");
  })

  

}

}
