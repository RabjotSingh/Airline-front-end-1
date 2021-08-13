import { UserReg } from 'src/app/models/UserReg';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class userregService 
{
  //Creating an instance of HttpClient inside the constructor.
  constructor(private http:HttpClient) { }
  //Variable to store the request URL for accessing API.
 readonly req:string="https://localhost:44346/api/UserRegs";


  //Method to get the list of all Users from the API.
  getAllUsers():Observable<UserReg[]>
  {
    return this.http.get<UserReg[]>(this.req);
  }
  

 
  

  //Method  to create a new Users.
  createUser(UserReg:UserReg[]):Observable<UserReg[]>
  {
    return this.http.post<UserReg[]>(this.req,UserReg,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
        
      })
    });
  }

  //Method to update an existing Users.
  updateUser(id:number,UserReg:UserReg[]):Observable<any>
  {
    
    return this.http.put<any>(this.req+"/"+id,UserReg,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }


  //Method to delete an existing Users.
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