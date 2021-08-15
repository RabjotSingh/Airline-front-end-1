import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UservalidatordataService {

  constructor() { }
  
  private uservalidation:boolean=false;
  
 setuservalidation(value:boolean) {      
    this.uservalidation = value;  
  }  
  
  getuservalidation() {  
    return this.uservalidation;  
  }  
} 


  