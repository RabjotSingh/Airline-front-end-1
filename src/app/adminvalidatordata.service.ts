import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminvalidatordataService {

  constructor() { }
  
  private adminvalidation:boolean=false;
  
 setadminvalidation(value:boolean) {      
    this.adminvalidation = value;  
  }  
  
  getadminvalidation() {  
    return this.adminvalidation;  
  }  
} 