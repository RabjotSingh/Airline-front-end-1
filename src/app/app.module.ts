import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';

import { DeleteFlightComponent } from './delete-flight/delete-flight.component';

import { FormsModule } from '@angular/forms';
import { UserRegisterComponent } from './user-register/user-register.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { HomeComponent } from './home/home.component';
import { ConfirmationPageComponent } from './confirmation-page/confirmation-page.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents,
    PaymentPageComponent,
    HomeComponent,
    ConfirmationPageComponent,

 
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
