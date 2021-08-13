export class Status {  
    bookedSeatNo: string = '';
    flightNo: number | undefined ;
constructor(bookedSeatNo: string , flightNo: number | undefined  )
  {
    this.bookedSeatNo=bookedSeatNo;
    this.flightNo=flightNo;
  }}