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
import { SeatSystemComponent } from './seat-system/seat-system.component';
import { PnrSearchComponent } from './pnr-search/pnr-search.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { LoginComponent } from './login/login.component';
import { MybookingsComponent } from './mybookings/mybookings.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { AddPassengerComponent } from './add-passenger/add-passenger.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents,
    PaymentPageComponent,
    HomeComponent,
    ConfirmationPageComponent,
    SeatSystemComponent,
    PnrSearchComponent,
    ConfirmationComponent,
    LoginComponent,
    UserRegisterComponent,
    DeleteFlightComponent,
    MybookingsComponent,
    UserAccountComponent,
    AddPassengerComponent

 
    
   
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
