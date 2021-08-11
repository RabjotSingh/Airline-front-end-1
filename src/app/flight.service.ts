import { Flight } from 'src/app/models/Flight'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FlightService 
{
  //Creating an instance of HttpClient inside the constructor.
  constructor(private http:HttpClient) { }
  //Variable to store the request URL for accessing API.
 readonly req:string="https://localhost:44346/api/Flight";


  //Method to get the list of all Customers from the API.
  getAllUsers():Observable<Flight[]>
  {
    return this.http.get<Flight[]>(this.req);
  }
  
 //Method  to create a new Flight.
 createUser(Flight:Flight[]):Observable<Flight[]>
 {
   return this.http.post<Flight[]>(this.req,Flight,{
     headers:new HttpHeaders({
       'Content-Type':'application/json;charset=UTF-8',
       'Access-Control-Allow-Origin':'*',
       'Access-Control-Allow-Method':'*'
       
     })
   });
 }

 //Method to update an existing Flight.
 updateUser(id:number,Flight:Flight[]):Observable<any>
 {
   
   return this.http.put<any>(this.req+"/"+id,Flight,{
     headers:new HttpHeaders({
       'Content-Type':'application/json;charset=UTF-8',
       'Access-Control-Allow-Origin':'*',
       'Access-Control-Allow-Method':'*'
     })
   });
 }


 //Method to delete an existing Flight.
 deleteUser(id:number):Observable<any>
 {
   return this.http.delete<any>(this.req+"/"+id,{
     headers:new HttpHeaders({
       'Content-Type':'application/json;charset=UTF-8',
       'Access-Control-Allow-Origin':'*',
       'Access-Control-Allow-Method':'*'
     })
   });
 }


}