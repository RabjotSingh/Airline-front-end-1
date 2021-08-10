import { Payment } from './con-page/model/payment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
//Importing both pipeable operator.
import {catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class paymentService 
{
  //Creating an instance of HttpClient inside the constructor.
  constructor(private http:HttpClient) { }
  //Variable to store the request URL for accessing API.
 readonly req:string="https://localhost:44346/api/payment";


  //Method to get the list of all Customers from the API.
  getAllUsers():Observable<Payment[]>
  {
    return this.http.get<Payment[]>(this.req);
  }
  

  // //Method  to create a new Customer.
  // createUser(Customer:Customer):Observable<Customer>z
  // {
  //   return this.http.post<Customer>(this.req,Customer,{
  //     headers:new HttpHeaders({
  //       'Content-Type':'application/json;charset=UTF-8',
  //       'Access-Control-Allow-Origin':'*',
  //       'Access-Control-Allow-Method':'*'
        
  //     })
  //   });
  // }

  // //Method to update an existing Customer.
  // updateUser(id:number,Customer:Customer):Observable<any>
  // {
    
  //   return this.http.put<any>(this.req+"/"+id,Customer,{
  //     headers:new HttpHeaders({
  //       'Content-Type':'application/json;charset=UTF-8',
  //       'Access-Control-Allow-Origin':'*',
  //       'Access-Control-Allow-Method':'*'
  //     })
  //   });
  // }


  // //Method to delete an existing Customer.
  // deleteUser(id:number):Observable<any>
  // {
  //   return this.http.delete<any>(this.req+"/"+id,{
  //     headers:new HttpHeaders({
  //       'Content-Type':'application/json;charset=UTF-8',
  //       'Access-Control-Allow-Origin':'*',
  //       'Access-Control-Allow-Method':'*'
  //     })
  //   });
  // }

  // //Method to test error handling.
  // register():Observable<any>
  // {
  //   //Giving incorrect URL.
  //   return this.http.get<any>('https://localhost:44311/api/Customers')
  //          .pipe(catchError(this.manageError));
  // }
  

  // //Method to handle errors.
  // private manageError(err_response:HttpErrorResponse)
  // {
  //   if(err_response.error instanceof ErrorEvent)
  //   console.error('Client Side Error:',err_response.error.message);
  //   else
  //   console.error('Server Side Error:',err_response);

  //   return throwError('There is a little problem while processing your request.Sorry for the inconvenience');
    
  // }

}