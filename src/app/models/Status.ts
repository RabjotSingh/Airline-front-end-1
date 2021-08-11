export class Status {
        
    statusId: number | undefined ;
    seatNo: string = '';
    seatStatus: Boolean | undefined;
    flightNo: number | undefined ;
  

constructor(statusId: number | undefined ,seatNo: string ,  seatStatus: Boolean | undefined , flightNo: number | undefined  )
  {
    this.statusId=statusId;
    this.seatNo=seatNo;
    this.seatStatus=seatStatus;
    this.flightNo=flightNo;
  }}