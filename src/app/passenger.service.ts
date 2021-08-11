import { Passenger } from 'src/app/models/Passenger';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PassengerService 
{
  //Creating an instance of HttpClient inside the constructor.
  constructor(private http:HttpClient) { }
  //Variable to store the request URL for accessing API.
 readonly req:string="https://localhost:44346/api/Passenger";


  //Method to get the list of all Customers from the API.
  getAllUsers():Observable<Passenger[]>
  {
    return this.http.get<Passenger[]>(this.req);
  }
  

  //Method  to create a new Passenger.
  createUser(Passenger:Passenger[]):Observable<Passenger[]>
  {
    return this.http.post<Passenger[]>(this.req,Passenger,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
        
      })
    });
  }

  //Method to update an existing Passenger.
  updateUser(id:number,Passenger:Passenger[]):Observable<any>
  {
    
    return this.http.put<any>(this.req+"/"+id,Passenger,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }


  //Method to delete an existing Passenger.
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