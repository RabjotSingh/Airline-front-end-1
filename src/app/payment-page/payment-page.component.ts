import { FooterComponent } from './../footer/footer.component';
import { HeaderComponent } from './../header/header.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {

  myimage:string = "assets/images/img2.png";

  constructor() { }

  ngOnInit(): void {
  }


}
