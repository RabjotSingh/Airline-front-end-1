import { Payment } from 'src/app/models/Payment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class paymentService 
{
  //Creating an instance of HttpClient inside the constructor.
  constructor(private http:HttpClient) { }
  //Variable to store the request URL for accessing API.
 readonly req:string="https://localhost:44346/api/Payment";


  //Method to get the list of all Customers from the API.
  getAllUsers():Observable<Payment[]>
  {
    return this.http.get<Payment[]>(this.req);
  }
  

  //Method  to create a new Payment.
  createUser(Payment:Payment[]):Observable<Payment[]>
  {
    return this.http.post<Payment[]>(this.req,Payment,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
        
      })
    });
  }

  //Method to update an existing Payment.
  updateUser(id:number,Payment:Payment[]):Observable<any>
  {
    
    return this.http.put<any>(this.req+"/"+id,Payment,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }


  //Method to delete an existing Payment.
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