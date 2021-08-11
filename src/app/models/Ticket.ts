export class Ticket{
    
  ticketId: number| undefined;
  uId: number| undefined;
  pId: number| undefined;
  flightNo: number | undefined ;
  roundTrip : boolean| undefined;
  ticketStatus:string = '';


  constructor(ticketId: number| undefined, uId: number| undefined, pId: number| undefined, flightNo: number | undefined , roundTrip :   boolean| undefined, ticketStatus:string = ''  )
    {
      this.ticketId=ticketId;
      this.uId=uId;
      this.pId=pId;
      this.flightNo=flightNo;
      this.roundTrip=roundTrip;
      this.ticketStatus=ticketStatus;

    }}