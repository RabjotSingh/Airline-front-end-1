import { Time } from "@angular/common";

export class Flight {
   
    flightNo: number| undefined;
    from: string  = '';
    to: string  = '';
    depart: Date | undefined ;
    arrive : Date | undefined;
    duration: Time | undefined ; 
    bClass: Boolean | undefined ;
    eClass: Boolean | undefined ;
    constructor( flightNo: number| undefined , from: string  ,  to: string,depart: Date | undefined ,arrive : Date| undefined  , duration:Time | undefined  ,
      bClass: Boolean| undefined, eClass: Boolean| undefined )
      {
        this.flightNo=flightNo;
        this.from=from;
        this.to=to;
        this.depart=depart;
        this.arrive=arrive;
        this.duration=duration;
        this.bClass=eClass;
      }}