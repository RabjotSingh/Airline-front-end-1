import { TmplAstRecursiveVisitor } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators} from '@angular/forms';
import { FooterComponent } from './../footer/footer.component';
import { HeaderComponent } from './../header/header.component';
@Component({
  selector: 'app-flight-register',
  templateUrl: './flight-register.component.html',
  styleUrls: ['./flight-register.component.css']
})
export class FlightRegisterComponent implements OnInit {

  FlightRegister = new FormGroup({
    flightNo : new FormControl('', Validators.required),
    from : new FormControl('', Validators.required),
    to : new FormControl('', Validators.required),
    departure : new FormControl('', Validators.required),
    arrive  : new FormControl('', Validators.required),
    duration  : new FormControl('', Validators.required),
    economy  : new FormControl('', Validators.required),
    business : new FormControl('', Validators.required)
  })


  
  

  constructor() { }

  ngOnInit(): void {
  }

}
