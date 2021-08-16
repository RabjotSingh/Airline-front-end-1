import { UserGuard } from './user.guard';
import { AdminGuard } from './admin.guard';
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
import { LoginComponent } from './login/login.component';
import { MybookingsComponent } from './mybookings/mybookings.component';


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
    component:FlightRegisterComponent,
    canActivate:[AdminGuard]
  },
  {
    path:'DeleteFlight',
    component:DeleteFlightComponent,
    canActivate:[AdminGuard]
    
  },
  {
    path : 'UserRegister',
    component : UserRegisterComponent
  },
  {
    path:'PaymentPage',
    component:PaymentPageComponent,
    canActivate:[UserGuard]
  },
  {
    path: 'seatSystem',
    component:SeatSystemComponent
  },
  {
    path: 'pnrSearch',
    component: PnrSearchComponent,
    
    canActivate:[UserGuard]
  },
  {
    path: 'Home',
    component:HomeComponent
  },
  {
    path: 'Userlogin',
    component:LoginComponent
  
  },

  {
    path: 'MyBookings',
    component:MybookingsComponent,
    canActivate:[UserGuard]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, AdminLoginComponent, FlightRegisterComponent, DeleteFlightComponent, 
  UserRegisterComponent,PaymentPageComponent,SeatSystemComponent,LoginComponent,MybookingsComponent]

