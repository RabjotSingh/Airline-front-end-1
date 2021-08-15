import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { SeatSystemComponent } from './seat-system/seat-system.component';

import { DeleteFlightComponent } from './delete-flight/delete-flight.component';
import { FlightRegisterComponent } from './flight-register/flight-register.component';
import { HomeComponent } from './home/home.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { PnrSearchComponent } from './pnr-search/pnr-search.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },

  {
    path:'AdminLogin',
    component:AdminLoginComponent
  },
  {
    path:'FlightRegister',
    component:FlightRegisterComponent
  },
  {
    path:'DeleteFlight',
    component:DeleteFlightComponent
  },
  {
    path : 'UserRegister',
    component : UserRegisterComponent
  },
  {
    path:'PaymentPage',
    component:PaymentPageComponent
  },

  {
    path: 'seatSystem',
    component:SeatSystemComponent
  },
  {
    path: 'pnrSearch',
    component: PnrSearchComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, AdminLoginComponent, FlightRegisterComponent, DeleteFlightComponent, 
  UserRegisterComponent,PaymentPageComponent,SeatSystemComponent]
