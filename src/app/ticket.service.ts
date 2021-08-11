import { Ticket } from 'src/app/models/Ticket';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ticketService 
{
  //Creating an instance of HttpClient inside the constructor.
  constructor(private http:HttpClient) { }
  //Variable to store the request URL for accessing API.
 readonly req:string="https://localhost:44346/api/Ticket";


  //Method to get the list of all Tickets from the API.
  getAllUsers():Observable<Ticket[]>
  {
    return this.http.get<Ticket[]>(this.req);
  }
  

//   //Method  to create a new Ticket.
//   createUser(Ticket:Ticket[]):Observable<Ticket[]>z
//   {
//     return this.http.post<Ticket>(this.req,Ticket,{
//       headers:new HttpHeaders({
//         'Content-Type':'application/json;charset=UTF-8',
//         'Access-Control-Allow-Origin':'*',
//         'Access-Control-Allow-Method':'*'
        
//       })
//     });
//   }

//   //Method to update an existing Ticket.
//   updateUser(id:number,Ticket:Ticket):Observable<any>
//   {
    
//     return this.http.put<any>(this.req+"/"+id,Ticket,{
//       headers:new HttpHeaders({
//         'Content-Type':'application/json;charset=UTF-8',
//         'Access-Control-Allow-Origin':'*',
//         'Access-Control-Allow-Method':'*'
//       })
//     });
//   }


//   //Method to delete an existing Ticket.
//   deleteUser(id:number):Observable<any>
//   {
//     return this.http.delete<any>(this.req+"/"+id,{
//       headers:new HttpHeaders({
//         'Content-Type':'application/json;charset=UTF-8',
//         'Access-Control-Allow-Origin':'*',
//         'Access-Control-Allow-Method':'*'
//       })
//     });
//   }


}