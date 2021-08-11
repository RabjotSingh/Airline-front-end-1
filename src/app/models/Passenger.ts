export class Passenger {
  pId: number| undefined;
  fullName: string  = '';
  gender: string  = '';
  age: number | undefined ;
  pFare:number | undefined ; 
  pClass: string = '' ;

  constructor( pId: number| undefined , fullName: string  ,  gender: string, age: number | undefined , pFare:number| undefined  ,
    pClass: string )
    {
      this.pId=pId;
      this.fullName=fullName;
      this.gender=gender;
      this.age=age;
      this.pFare=pFare;
      this.pClass=pClass;
    }}
