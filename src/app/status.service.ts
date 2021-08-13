import { Status } from './models/Status';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
//Creating an instance of HttpClient inside the constructor.
constructor(private http:HttpClient) { }
//Variable to store the request URL for accessing API.
readonly req:string="https://localhost:44346/api/Status";


//Method to get the list of all Status from the API.
getAllUsers():Observable<Status[]>
{
  return this.http.get<Status[]>(this.req);
}

//Method  to create a new Status.
createUser(Status:Status[]):Observable<Status[]>
{
  return this.http.post<Status[]>(this.req,Status,{
    headers:new HttpHeaders({
      'Content-Type':'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Method':'*'
      
    })
  });
}

//Method to update an existing Status.
updateUser(id:number,Status:Status[]):Observable<any>
{
  
  return this.http.put<any>(this.req+"/"+id,Status,{
    headers:new HttpHeaders({
      'Content-Type':'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Method':'*'
    })
  });
}


//Method to delete an existing Status.
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