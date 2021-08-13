export class Passenger {
  pId: number| undefined;
  seatNo: number| undefined;
  fullName: string  = '';
  gender: string  = '';
  age: number | undefined ;
  pFare:number | undefined ; 
  pClass: string = '' ;

  constructor( pId: number| undefined , seatNo: number| undefined, fullName: string  ,  gender: string, age: number | undefined , pFare:number| undefined  ,
    pClass: string )
    {
      this.pId=pId;
      this.seatNo=seatNo;
      this.fullName=fullName;
      this.gender=gender;
      this.age=age;
      this.pFare=pFare;
      this.pClass=pClass;
    }}
